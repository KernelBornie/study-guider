import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// Allow base64 file payloads up to 50MB
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Serve static assets from public folder (including pdf.worker.min.mjs)
app.use(express.static(path.resolve(import.meta.dirname, "public")));

const MODEL = "gemini-3.8-flash";

const SYSTEM_PROMPT = `
You are the UNZA Study-Guider AI Tutor. Ground every answer in the user's attachment.

ABSOLUTE RULES:
1. If an attachment is present, answer ONLY from its content. Cite (Attached: <filename>, p. N).
2. Never display raw PDF object headers (PDF-1.4, MediaBox, Kids, Parent, /Type).
   If extraction looks broken, say: "The PDF text layer could not be read. Please confirm the file is not a scanned image, or re-upload."
3. When the user says "solve the attached paper" or "solve in order", solve EVERY question you find, in numeric order.
   Use headings: "QUESTION ONE", "QUESTION TWO", … Preserve mark allocations: "[15 marks]".
4. When the user asks a specific question, answer ONLY that question.
5. If a question is genuinely absent, say: "Question X is not in the attachment. Present: <list>." Never fabricate.
6. Format: British English. No LaTeX. Use → ≤ ≥ × ÷ ⇒. Mermaid inside \`\`\`mermaid fences only.
7. Never reply "no questions detected" if any real English text exists in the attachment.
`.trim();

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_FILES = 5;
const ALLOWED_MIMES = new Set([
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
  "image/heic",
  "image/heif",
  "text/plain",
  "text/markdown",
]);

interface UploadedFile {
  name: string;
  mimeType: string;
  data: string; // base64 (with or without data: prefix)
  size: number;
}

function cleanBase64(data: string): string {
  return data.includes(",") ? data.split(",")[1] : data;
}

function normaliseText(t: string): string {
  if (!t) return "";
  return t
    .replace(/\u0000/g, "")
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function isRealText(text: string): boolean {
  if (!text || text.length < 40) return false;
  if (/^%PDF-|^PDF-\d/.test(text)) return false;
  const pdfKeywordCount = (text.match(/\/Type|\/MediaBox|\/Kids|\/Parent|\/Contents/g) || []).length;
  if (pdfKeywordCount > 5) return false;
  const words = text.match(/\b[A-Za-z]{3,}\b/g) || [];
  return words.length >= 15;
}

async function extractPdfPagesServer(
  buffer: Buffer,
  filename: string
): Promise<{
  pages: { page: number; text: string }[];
  hasRealText: boolean;
}> {
  try {
    const uint8 = new Uint8Array(buffer);
    const loadingTask = pdfjsLib.getDocument({
      data: uint8,
      useSystemFonts: true,
      useWorkerFetch: false,
    });

    const pdf = await loadingTask.promise;
    const pages: { page: number; text: string }[] = [];
    let validPageCount = 0;

    console.log(`[PDF-SERVER] file=${filename} pages=${pdf.numPages}`);

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const rawText = content.items
        .map((it: any) => it.str || "")
        .join(" ");

      const cleaned = normaliseText(rawText);
      const isReal = isRealText(cleaned);

      if (isReal) {
        validPageCount++;
      }

      console.log(`[PDF-SERVER] page ${i}: ${cleaned.length} chars (real=${isReal})`);
      pages.push({ page: i, text: cleaned });
    }

    return {
      pages,
      hasRealText: validPageCount > 0,
    };
  } catch (err: any) {
    console.error(`[PDF-SERVER] Error processing ${filename}:`, err?.message || err);
    return { pages: [], hasRealText: false };
  }
}

function cleanLatex(input: string): string {
  return input
    .replace(/\\text\{([^}]*)\}/g, "$1")
    .replace(/\\mathrm\{([^}]*)\}/g, "$1")
    .replace(/\\mathbf\{([^}]*)\}/g, "$1")
    .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, "($1 / $2)")
    .replace(/\\times/g, "×")
    .replace(/\\cdot/g, "·")
    .replace(/\\le(q)?\b/g, "≤")
    .replace(/\\ge(q)?\b/g, "≥")
    .replace(/\\neq/g, "≠")
    .replace(/\\approx/g, "≈")
    .replace(/\\rightarrow/g, "→")
    .replace(/\\leftarrow/g, "←")
    .replace(/\\implies/g, "⇒")
    .replace(/\$\$/g, "")
    .replace(/\$/g, "");
}

// /api/chat endpoint
app.post("/api/chat", async (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server misconfigured: missing GEMINI_API_KEY in environment" });
  }

  const { messages, files } = req.body as {
    messages?: { role: "user" | "assistant"; content: string }[];
    files?: UploadedFile[];
  };

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Missing messages array" });
  }

  const safeFiles: UploadedFile[] = [];
  if (Array.isArray(files)) {
    if (files.length > MAX_FILES) {
      return res.status(400).json({ error: `Too many files. Max ${MAX_FILES} per message.` });
    }
    for (const f of files) {
      if (!f || typeof f.data !== "string" || typeof f.mimeType !== "string") {
        return res.status(400).json({ error: "Malformed file payload." });
      }
      if (!ALLOWED_MIMES.has(f.mimeType)) {
        return res.status(400).json({ error: `Unsupported file type: ${f.mimeType}` });
      }
      if (f.size > MAX_FILE_BYTES) {
        return res.status(400).json({ error: `File "${f.name}" exceeds 10 MB limit.` });
      }
      safeFiles.push(f);
    }
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const attachmentBlocks: string[] = [];
    const inlineVisionParts: any[] = [];

    for (let i = 0; i < safeFiles.length; i++) {
      const file = safeFiles[i];
      const attachmentNum = i + 1;
      const cleanData = cleanBase64(file.data);

      if (file.mimeType === "application/pdf" || file.name.endsWith(".pdf")) {
        const buffer = Buffer.from(cleanData, "base64");
        const { pages, hasRealText } = await extractPdfPagesServer(buffer, file.name);

        if (hasRealText && pages.length > 0) {
          const validPages = pages.filter((p) => isRealText(p.text));
          let pageStrings = "";
          validPages.forEach((p) => {
            pageStrings += `--- Page ${p.page} ---\n${p.text}\n`;
          });

          attachmentBlocks.push(
            `[ATTACHMENT ${attachmentNum}: ${file.name}]\n${pageStrings}[END ATTACHMENT ${attachmentNum}]`
          );
        } else {
          // Scanned PDF fallback
          inlineVisionParts.push({
            inlineData: {
              mimeType: "application/pdf",
              data: cleanData,
            },
          });
          attachmentBlocks.push(
            `[ATTACHMENT ${attachmentNum}: ${file.name} (Visual PDF document)]`
          );
        }
      } else if (file.mimeType.startsWith("image/")) {
        inlineVisionParts.push({
          inlineData: {
            mimeType: file.mimeType,
            data: cleanData,
          },
        });
        attachmentBlocks.push(`[ATTACHMENT ${attachmentNum}: ${file.name} (Image Attachment)]`);
      } else {
        // Plain text
        try {
          const raw = normaliseText(Buffer.from(cleanData, "base64").toString("utf-8"));
          attachmentBlocks.push(
            `[ATTACHMENT ${attachmentNum}: ${file.name}]\n--- Page 1 ---\n${raw}\n[END ATTACHMENT ${attachmentNum}]`
          );
        } catch {
          attachmentBlocks.push(`[ATTACHMENT ${attachmentNum}: ${file.name}]`);
        }
      }
    }

    const contents = messages.map((m, idx) => {
      const isLastUser = idx === messages.length - 1 && m.role === "user";
      if (!isLastUser) {
        return {
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        };
      }

      let finalUserPrompt = "";

      if (attachmentBlocks.length > 0) {
        finalUserPrompt += attachmentBlocks.join("\n\n") + "\n\n";
        finalUserPrompt += `[USER QUESTION]\n${m.content || "Solve the questions in the attached paper in order."}`;
      } else {
        finalUserPrompt = m.content || "Hello";
      }

      const parts: any[] = [{ text: finalUserPrompt }, ...inlineVisionParts];

      return {
        role: "user",
        parts,
      };
    });

    const response = await ai.models.generateContent({
      model: MODEL,
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.2,
        maxOutputTokens: 8192,
      },
    });

    const rawReply = response.text || "No response generated.";
    const cleanReply = cleanLatex(rawReply);

    return res.json({ reply: cleanReply });
  } catch (error: any) {
    console.error("Gemini API error:", error?.message || error);
    return res.status(500).json({ error: error?.message || "AI tutor service error" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(import.meta.dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(import.meta.dirname, "dist", "index.html"));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);

    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(
          path.resolve(import.meta.dirname, "index.html"),
          "utf-8"
        );
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
