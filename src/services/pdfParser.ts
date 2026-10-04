/**
 * UNZA Study-Guider PDF and Document Parsing Service
 * Uses pdfjs-dist for accurate stream decompression, validation gating,
 * question detection, and OCR fallback.
 */
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
import { createWorker } from "tesseract.js";
import { detectQuestions, DetectedQuestionItem, formatDetectedQuestionsSummary } from "./questionDetector";

// Set worker path to statically served worker in public directory
if (typeof window !== "undefined") {
  pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
}

export interface DocumentPage {
  page: number;
  text: string;
}

export interface ParsedDocument {
  filename: string;
  mimeType: string;
  pages: DocumentPage[];
  fullText: string;
  detectedQuestions: string[];
  detectedQuestionItems: DetectedQuestionItem[];
  absentQuestions: string[];
  isScanned: boolean;
  totalChars: number;
}

/**
 * Normalises raw extracted text:
 * - Strips null bytes and control chars
 * - Normalises whitespace while preserving paragraph and question boundaries
 */
export function cleanText(t: string): string {
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

/**
 * Converts base64 string to Uint8Array, cleanly stripping any data URI prefix
 */
export function base64ToBytes(data: string): Uint8Array {
  const clean = data.includes(",") ? data.split(",")[1] : data;
  const binary = atob(clean);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

/**
 * Validation Gate: Determines whether text is genuine exam/document text
 * rather than raw PDF object dictionary headers (MediaBox, Kids Count, Parent, /Type).
 * Loosened to prevent false negatives.
 */
export function isRealPdfText(t: string): boolean {
  if (!t || t.length < 40) return false;
  // Reject only if it starts with PDF internals (raw stream leak)
  if (/^%PDF-|^PDF-\d/.test(t)) return false;
  // Reject only if it is dominated by PDF keywords
  const pdfKeywordCount = (t.match(/\/Type|\/MediaBox|\/Kids|\/Parent|\/Contents/g) || []).length;
  if (pdfKeywordCount > 5) return false;
  // Otherwise require normal English words
  const words = t.match(/\b[A-Za-z]{3,}\b/g) || [];
  return words.length >= 15;
}

// Backward compatibility alias
export const isRealText = isRealPdfText;

/**
 * Decompresses and extracts PDF text page-by-page using pdfjs-dist
 */
export async function parsePdfAttachment(
  data: string | Uint8Array | ArrayBuffer,
  filename: string = "document.pdf"
): Promise<{ numPages: number; pages: DocumentPage[]; totalChars: number; hasRealText: boolean }> {
  try {
    let bytes: Uint8Array;
    if (typeof data === "string") {
      bytes = base64ToBytes(data);
    } else if (data instanceof Uint8Array) {
      bytes = data;
    } else {
      bytes = new Uint8Array(data);
    }

    // Sanity check: first 5 bytes must be "%PDF-"
    const header = new TextDecoder().decode(bytes.slice(0, 5));
    if (header !== "%PDF-") {
      console.warn(`[PDF-WARN] Header mismatch: ${JSON.stringify(header)} for ${filename}`);
    }

    const pdf = await pdfjsLib.getDocument({
      data: bytes,
      useSystemFonts: true,
      useWorkerFetch: false,
    }).promise;

    console.log(`[PDF] file=${filename} pages=${pdf.numPages}`);
    const pages: DocumentPage[] = [];
    let totalChars = 0;
    let realPageCount = 0;

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const rawText = content.items
        .map((it: any) => it.str || "")
        .join(" ");

      const cleaned = cleanText(rawText);
      const isReal = isRealPdfText(cleaned);

      if (isReal) {
        realPageCount++;
      }

      console.log(`[PDF] page ${i}: ${cleaned.length} chars, real=${isReal}`);
      if (!isReal && cleaned.length > 0) {
        console.log(`[PDF] page ${i} sample:`, cleaned.slice(0, 100));
      }

      pages.push({ page: i, text: cleaned });
      totalChars += cleaned.length;
    }

    return {
      numPages: pdf.numPages,
      pages,
      totalChars,
      hasRealText: realPageCount > 0,
    };
  } catch (err: any) {
    console.error(`[PDF] Extraction failure for ${filename}:`, err?.message || err);
    return {
      numPages: 0,
      pages: [],
      totalChars: 0,
      hasRealText: false,
    };
  }
}

// Alias for backwards compatibility
export const extractPdfText = (data: ArrayBuffer | Uint8Array, filename?: string) =>
  parsePdfAttachment(data, filename);

/**
 * Client-side or offline document parser with OCR fallback
 */
export async function parseDocumentClientSide(file: {
  name: string;
  mimeType: string;
  data: string; // base64
}): Promise<ParsedDocument> {
  const mime = file.mimeType.toLowerCase();

  // 1. Plain text or Markdown
  if (mime.startsWith("text/") || file.name.endsWith(".txt") || file.name.endsWith(".md")) {
    try {
      const decoded = atob(file.data.includes(",") ? file.data.split(",")[1] : file.data);
      const cleaned = cleanText(decoded);
      const detected = detectQuestions([{ page: 1, text: cleaned }]);
      const { summaryList, absentList } = formatDetectedQuestionsSummary(detected);

      return {
        filename: file.name,
        mimeType: file.mimeType,
        pages: [{ page: 1, text: cleaned }],
        fullText: cleaned,
        detectedQuestions: summaryList,
        detectedQuestionItems: detected,
        absentQuestions: absentList,
        isScanned: false,
        totalChars: cleaned.length,
      };
    } catch {
      // Fall through
    }
  }

  // 2. Images: Perform local OCR using tesseract.js
  if (mime.startsWith("image/")) {
    try {
      const base64Src = file.data.startsWith("data:") ? file.data : `data:${file.mimeType};base64,${file.data}`;
      const worker = await createWorker("eng");
      const ret = await worker.recognize(base64Src);
      await worker.terminate();

      const ocrText = cleanText(ret.data.text || "");
      const detected = detectQuestions([{ page: 1, text: ocrText }]);
      const { summaryList, absentList } = formatDetectedQuestionsSummary(detected);

      return {
        filename: file.name,
        mimeType: file.mimeType,
        pages: [{ page: 1, text: ocrText || `[Image ${file.name} - Scanned Exam Sheet]` }],
        fullText: ocrText,
        detectedQuestions: summaryList,
        detectedQuestionItems: detected,
        absentQuestions: absentList,
        isScanned: true,
        totalChars: ocrText.length,
      };
    } catch (ocrErr) {
      console.warn("Client OCR notice:", ocrErr);
      return {
        filename: file.name,
        mimeType: file.mimeType,
        pages: [{ page: 1, text: `[Image: ${file.name}]` }],
        fullText: `[Image: ${file.name}]`,
        detectedQuestions: [],
        detectedQuestionItems: [],
        absentQuestions: [],
        isScanned: true,
        totalChars: 0,
      };
    }
  }

  // 3. PDF parsing via pdfjs-dist
  try {
    const { pages, totalChars, hasRealText } = await parsePdfAttachment(file.data, file.name);

    if (hasRealText && pages.length > 0) {
      const detected = detectQuestions(pages);
      const { summaryList, absentList } = formatDetectedQuestionsSummary(detected);
      const full = pages.map((p) => `--- Page ${p.page} ---\n${p.text}`).join("\n\n");

      return {
        filename: file.name,
        mimeType: file.mimeType,
        pages,
        fullText: full,
        detectedQuestions: summaryList,
        detectedQuestionItems: detected,
        absentQuestions: absentList,
        isScanned: false,
        totalChars,
      };
    }

    // Genuinely zero text layer
    console.warn(`[PDF] ${file.name} contains zero extractable text layer`);
    return {
      filename: file.name,
      mimeType: file.mimeType,
      pages: [{ page: 1, text: `[PDF "${file.name}" has no digital text layer]` }],
      fullText: `[PDF "${file.name}" has no digital text layer]`,
      detectedQuestions: [],
      detectedQuestionItems: [],
      absentQuestions: [],
      isScanned: true,
      totalChars: 0,
    };
  } catch (err: any) {
    console.error("PDF client-side parsing error:", err);
    return {
      filename: file.name,
      mimeType: file.mimeType,
      pages: [{ page: 1, text: `[Attachment: ${file.name}]` }],
      fullText: `[Attachment: ${file.name}]`,
      detectedQuestions: [],
      detectedQuestionItems: [],
      absentQuestions: [],
      isScanned: true,
      totalChars: 0,
    };
  }
}
