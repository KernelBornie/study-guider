/**
 * UNZA Study-Guider Question Detector Service
 * Detects question markers, numbers, mark allocations, and word forms (ONE, TWO...)
 * across document pages.
 */

export interface DetectedQuestionItem {
  label: string; // e.g. "QUESTION ONE", "QUESTION TWO"
  normalizedKey: string; // e.g. "Q1", "Q2", "Q7"
  page: number;
  marks?: string; // e.g. "[20 marks]"
  textSnippet?: string;
}

const WORD_TO_NUM: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
};

const NUM_TO_WORD: Record<number, string> = {
  1: "ONE",
  2: "TWO",
  3: "THREE",
  4: "FOUR",
  5: "FIVE",
  6: "SIX",
  7: "SEVEN",
  8: "EIGHT",
  9: "NINE",
  10: "TEN",
};

/**
 * Normalises question label to standard key (e.g. "QUESTION ONE" -> "Q1")
 */
export function normalizeQuestionKey(raw: string): string {
  const clean = raw.toLowerCase().trim();
  const wordMatch = clean.match(/(?:question|q)\s*(one|two|three|four|five|six|seven|eight|nine|ten)/i);
  if (wordMatch && WORD_TO_NUM[wordMatch[1].toLowerCase()]) {
    return `Q${WORD_TO_NUM[wordMatch[1].toLowerCase()]}`;
  }

  const numMatch = clean.match(/(?:question|q)\s*([0-9]+)/i);
  if (numMatch) {
    return `Q${numMatch[1]}`;
  }

  const directNum = clean.match(/^([0-9]+)/);
  if (directNum) {
    return `Q${directNum[1]}`;
  }

  return raw.toUpperCase();
}

/**
 * Detects questions across pages using multiple patterns
 */
export function detectQuestions(
  pages: { page: number; text: string }[]
): DetectedQuestionItem[] {
  const results: DetectedQuestionItem[] = [];
  const seenKeys = new Set<string>();

  // Patterns to match:
  // 1. QUESTION ONE, QUESTION TWO, QUESTION 1
  const pWordOrNum = /\b(?:QUESTION|Question)\s+(ONE|TWO|THREE|FOUR|FIVE|SIX|SEVEN|EIGHT|NINE|TEN|\d+)(?:\s*[\(\[][a-z0-9]+[\)\]])?/gi;

  // 2. Q1, Q 1, Q1(a)
  const pQNum = /\bQ\.?\s*(\d+)(?:\s*[\(\[][a-z0-9]+[\)\]])?/gi;

  // 3. Line-starting numbers "1. ", "2. ", "1(a)"
  const pLineNum = /(?:^|\n)\s*([0-9]{1,2})\s*[\.\)](?!\d)/gm;

  // 4. Mark allocation pattern: "[20 marks]", "[15 marks]"
  const pMarks = /\[\s*(\d+)\s*marks?\s*\]/gi;

  for (const { page, text } of pages) {
    if (!text || text.length < 10) continue;

    // Search for word or numeric question headings
    let match: RegExpExecArray | null;
    pWordOrNum.lastIndex = 0;
    while ((match = pWordOrNum.exec(text)) !== null) {
      const token = match[1];
      const fullLabel = match[0].trim().toUpperCase();
      const normKey = normalizeQuestionKey(fullLabel);

      // Look ahead for marks allocation within 150 chars
      const lookahead = text.slice(match.index, match.index + 200);
      const marksMatch = lookahead.match(/\[\s*(\d+\s*marks?)\s*\]/i);
      const marks = marksMatch ? `[${marksMatch[1]}]` : undefined;

      // Extract brief snippet
      const snippet = text.slice(match.index, match.index + 250).replace(/\s+/g, " ").trim();

      if (!seenKeys.has(normKey)) {
        seenKeys.add(normKey);
        results.push({
          label: fullLabel,
          normalizedKey: normKey,
          page,
          marks,
          textSnippet: snippet,
        });
      }
    }

    // Secondary pass for Q1, Q2 etc if not already matched
    pQNum.lastIndex = 0;
    while ((match = pQNum.exec(text)) !== null) {
      const num = match[1];
      const normKey = `Q${num}`;
      const word = NUM_TO_WORD[parseInt(num, 10)] || num;
      const fullLabel = `QUESTION ${word}`;

      if (!seenKeys.has(normKey)) {
        seenKeys.add(normKey);
        const lookahead = text.slice(match.index, match.index + 200);
        const marksMatch = lookahead.match(/\[\s*(\d+\s*marks?)\s*\]/i);
        const marks = marksMatch ? `[${marksMatch[1]}]` : undefined;

        results.push({
          label: fullLabel,
          normalizedKey: normKey,
          page,
          marks,
          textSnippet: text.slice(match.index, match.index + 200).replace(/\s+/g, " ").trim(),
        });
      }
    }
  }

  // Sort logically by question number
  return results.sort((a, b) => {
    const numA = parseInt(a.normalizedKey.replace(/\D/g, "") || "0", 10);
    const numB = parseInt(b.normalizedKey.replace(/\D/g, "") || "0", 10);
    if (numA !== numB) return numA - numB;
    return a.page - b.page;
  });
}

/**
 * Produces clean formatted summary of detected questions
 */
export function formatDetectedQuestionsSummary(
  detected: DetectedQuestionItem[],
  maxExpected: number = 7
): { summaryList: string[]; absentList: string[] } {
  const summaryList = detected.map(
    (d) => `${d.label} (p. ${d.page})${d.marks ? ` — ${d.marks}` : ""}`
  );

  const foundNums = new Set(
    detected.map((d) => parseInt(d.normalizedKey.replace(/\D/g, "") || "0", 10))
  );

  const absentList: string[] = [];
  if (foundNums.size > 0) {
    const max = Math.max(...Array.from(foundNums), maxExpected);
    for (let i = 1; i <= max; i++) {
      if (!foundNums.has(i)) {
        const word = NUM_TO_WORD[i] || `${i}`;
        absentList.push(`QUESTION ${word}`);
      }
    }
  }

  return { summaryList, absentList };
}
