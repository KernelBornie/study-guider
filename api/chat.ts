import type { VercelRequest, VercelResponse } from "@vercel/node";

const MODEL = "gemini-3.8-flash";

const SYSTEM_PROMPT = `You are a helpful academic tutor for University of Zambia (UNZA) students.
You answer questions across all UNZA courses — Computer Science, Software Engineering, SQA,
Mathematics, Engineering, Natural Sciences, Business, Education, and Humanities.

Course Knowledge:
- CSC 4642: Software Quality Assurance (McCall factor model, Evans & Marciniak, Deutsch & Willis, error/fault/failure taxonomy, SQA components & objectives, contract review, formal design reviews vs peer reviews/inspections/walkthroughs, defect removal model with 100 defects calculations, cyclomatic complexity V(G) = E - N + 2 = P + 1, equivalence partitioning, boundary value analysis, top-down vs bottom-up testing).
- CSC 4630: Advanced Software Engineering (Goal-Oriented Requirements Engineering / KAOS, GRASP principles, GoF design patterns, microservices architecture, circuit breakers, formal verification).
- CSC 3600: Software Engineering (Fundamentals Ch 1–7, software processes, waterfall 5 phases & limits, incremental development advantages & problems, agile manifesto values, requirements engineering process: elicitation, specification, validation, verification vs validation V&V, safety-critical systems like Insulin Pump control, psychiatric healthcare management like Mentcare system, UML modeling for Smart Campus Healthcare System SCHS including context models, use case diagrams, and activity workflow).

You can read uploaded PDFs and images (past papers, screenshots, handwritten notes).

Guidelines:
- Give clear, well-structured answers suitable for exam revision.
- Use markdown formatting (headings, bullet points, tables, code blocks).
- Show step-by-step calculations when relevant.
- If the student uploads a past paper, identify each question and answer it in order.
- Cite the topic area (e.g., "This is from SQA Topic 7 — Defect Removal Model").
- If unsure, say so honestly. Never invent facts.

DRAWING — VERY IMPORTANT:
When a diagram would help (flowcharts, UML class diagrams, sequence diagrams,
state machines, ER diagrams, architecture diagrams, mind maps, Gantt charts),
emit a Mermaid code block. The client renders it live.

Supported types: flowchart, sequenceDiagram, classDiagram, stateDiagram-v2,
erDiagram, gantt, pie, mindmap, journey, gitGraph.

Example — a flowchart:
\`\`\`mermaid
flowchart TD
  A[Start] --> B{Decision?}
  B -->|Yes| C[Do thing]
  B -->|No| D[Skip]
\`\`\`

Only use Mermaid when a diagram genuinely aids understanding.
For anything Mermaid cannot express (e.g., fine-grained circuit layouts), fall
back to a well-formatted ASCII sketch inside a \`\`\`text block.`;

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_FILES = 5;
const ALLOWED_MIMES = new Set([
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/heic",
  "image/heif",
  "text/plain",
  "text/markdown",
]);

interface UploadedFile {
  name: string;
  mimeType: string;
  data: string; // base64 (no data: prefix)
  size: number;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server misconfigured: missing GEMINI_API_KEY" });
  }

  const { messages, files } = req.body as {
    messages?: { role: "user" | "assistant"; content: string }[];
    files?: UploadedFile[];
  };

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Missing messages array" });
  }

  // Validate uploads
  const safeFiles: UploadedFile[] = [];
  if (Array.isArray(files)) {
    if (files.length > MAX_FILES) {
      return res
        .status(400)
        .json({ error: `Too many files. Max ${MAX_FILES} per message.` });
    }
    for (const f of files) {
      if (!f || typeof f.data !== "string" || typeof f.mimeType !== "string") {
        return res.status(400).json({ error: "Malformed file payload." });
      }
      if (!ALLOWED_MIMES.has(f.mimeType)) {
        return res
          .status(400)
          .json({ error: `Unsupported file type: ${f.mimeType}` });
      }
      if (f.size > MAX_FILE_BYTES) {
        return res
          .status(400)
          .json({ error: `File "${f.name}" exceeds 10 MB limit.` });
      }
      safeFiles.push(f);
    }
  }

  try {
    // Build contents. Files attach to the last user message.
    const contents = messages.map((m, idx) => {
      const isLastUser = idx === messages.length - 1 && m.role === "user";
      const textContent = m.content?.trim() || (isLastUser && safeFiles.length > 0 ? "Please analyze the attached materials and answer all questions in detail." : "Hello");
      const parts: any[] = [{ text: textContent }];

      if (isLastUser && safeFiles.length > 0) {
        for (const f of safeFiles) {
          parts.push({
            inline_data: {
              mime_type: f.mimeType,
              data: f.data,
            },
          });
        }
      }

      return {
        role: m.role === "assistant" ? "model" : "user",
        parts,
      };
    });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 8192,
          },
        }),
      }
    );

    if (!response.ok) {
      const errJson = await response.json().catch(() => null);
      const errMsg = errJson?.error?.message || `HTTP ${response.status}`;
      console.error("Gemini service notice:", errMsg);
      return res.status(response.status).json({ error: "AI service error", detail: errMsg });
    }

    const data = await response.json();
    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text ??
      "No response generated.";

    return res.status(200).json({ reply: text });
  } catch (error) {
    console.error("Chat handler error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
