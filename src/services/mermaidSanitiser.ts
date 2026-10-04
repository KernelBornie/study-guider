/**
 * UNZA Study-Guider Mermaid Sanitiser & Validator Service
 * Cleans AI-generated Mermaid code, eliminates LaTeX fragments,
 * normalises headers, quotes unquoted complex node labels,
 * and fixes syntax issues before rendering.
 */

// LaTeX to plain text replacement table
const LATEX_REPLACEMENTS: [RegExp, string][] = [
  [/\\text\{([^}]*)\}/g, "$1"],
  [/\\mathrm\{([^}]*)\}/g, "$1"],
  [/\\mathbf\{([^}]*)\}/g, "$1"],
  [/\\mathit\{([^}]*)\}/g, "$1"],
  [/\\frac\{([^}]*)\}\{([^}]*)\}/g, "($1 / $2)"],
  [/\\times/g, "×"],
  [/\\cdot/g, "·"],
  [/\\le(q)?\b/g, "≤"],
  [/\\ge(q)?\b/g, "≥"],
  [/\\neq/g, "≠"],
  [/\\approx/g, "≈"],
  [/\\rightarrow/g, "→"],
  [/\\leftarrow/g, "←"],
  [/\\implies/g, "⇒"],
  [/\\pm/g, "±"],
  [/\\infty/g, "∞"],
  [/\$\$/g, ""],
  [/\$/g, ""],
];

/**
 * Strips LaTeX math markup and converts it to clean Unicode / plain text.
 */
export function stripLatex(input: string): string {
  let result = input;
  for (const [regex, replacement] of LATEX_REPLACEMENTS) {
    result = result.replace(regex, replacement);
  }
  return result;
}

const KNOWN_DIAGRAM_HEADERS = [
  "flowchart",
  "graph",
  "sequencediagram",
  "classdiagram",
  "statediagram",
  "statediagram-v2",
  "erdiagram",
  "journey",
  "gantt",
  "pie",
  "quadrantchart",
  "requirementdiagram",
  "gitgraph",
  "c4context",
  "mindmap",
  "timeline",
  "sankey-beta",
  "block-beta",
  "packet-beta",
  "kanban",
  "architecture-beta",
];

/**
 * Sanitises raw AI Mermaid code:
 * 1. Strips stray markdown fences, 'code', 'mermaid', 'java' lines
 * 2. Normalises tabs to 4 spaces
 * 3. Removes trailing semicolons
 * 4. Normalises old 'graph TD' / 'graph LR' to 'flowchart TD' / 'flowchart LR'
 * 5. Prepends 'flowchart TD' if diagram header is missing
 * 6. Strips LaTeX from node labels
 * 7. Enforces quoting on node labels containing spaces, punctuation, or brackets
 * 8. Auto-closes unclosed subgraphs
 */
export function sanitiseMermaid(rawCode: string): string {
  if (!rawCode || typeof rawCode !== "string") {
    return "flowchart TD\n  Start[No diagram provided]";
  }

  // 1. Clean fences and stray language tags
  let cleaned = rawCode
    .replace(/^```(?:mermaid|code|text)?\s*/gim, "")
    .replace(/\s*```$/gim, "")
    .replace(/^code\s*$/gim, "")
    .replace(/^mermaid\s*$/gim, "")
    .replace(/^java\s*$/gim, "");

  // 2. Replace tabs with 4 spaces
  cleaned = cleaned.replace(/\t/g, "    ");

  // 3. Strip all LaTeX fragments
  cleaned = stripLatex(cleaned);

  // 4. Split into lines and process line by line
  const rawLines = cleaned.split(/\r?\n/);
  const processedLines: string[] = [];
  let subgraphCount = 0;
  let endCount = 0;

  for (let line of rawLines) {
    let trimmed = line.trim();

    // Skip empty lines at the very beginning
    if (processedLines.length === 0 && !trimmed) {
      continue;
    }

    // Skip redundant stray keywords
    if (/^(code|mermaid|text|java|javascript)$/i.test(trimmed)) {
      continue;
    }

    // Remove semicolons at the end of statements
    if (trimmed.endsWith(";")) {
      line = line.replace(/;\s*$/, "");
      trimmed = line.trim();
    }

    // Track subgraphs for auto-closing
    if (/^\s*subgraph\b/i.test(trimmed)) {
      subgraphCount++;
    } else if (/^\s*end\s*$/i.test(trimmed)) {
      endCount++;
    }

    // Convert old `graph TD` / `graph LR` to `flowchart TD` / `flowchart LR`
    if (/^\s*graph\s+(TD|TB|BT|RL|LR)\b/i.test(line)) {
      line = line.replace(/^\s*graph\s+/i, "flowchart ");
    } else if (/^\s*graph\s*$/i.test(line)) {
      line = line.replace(/^\s*graph\s*$/i, "flowchart TD");
    }

    // Sanitise node shapes & labels: Ensure bracket contents with spaces or special chars are quoted
    // [label] -> ["label"] if not already quoted and contains spaces or special characters
    // (label) -> ("label")
    // {label} -> {"label"}
    // ([label]) -> (["label"])
    // [[label]] -> [["label"]]
    // [(label)] -> [("label")]
    // ((label)) -> (("label"))

    // Quoting inside [ ... ]
    line = line.replace(/([a-zA-Z0-9_-]+)\[([^"\]\n]+)\]/g, (match, id, label) => {
      // If label has spaces, colons, brackets, or math symbols, quote it
      if (/[\s:;,()\[\]{}=+\-*/><#]/.test(label)) {
        return `${id}["${label.replace(/"/g, "'")}"]`;
      }
      return match;
    });

    // Quoting inside ( ... )
    line = line.replace(/([a-zA-Z0-9_-]+)\(([^"\)\n]+)\)/g, (match, id, label) => {
      if (/[\s:;,()\[\]{}=+\-*/><#]/.test(label)) {
        return `${id}("${label.replace(/"/g, "'")}")`;
      }
      return match;
    });

    // Quoting inside { ... }
    line = line.replace(/([a-zA-Z0-9_-]+)\{([^"\}\n]+)\}/g, (match, id, label) => {
      if (/[\s:;,()\[\]{}=+\-*/><#]/.test(label)) {
        return `${id}{"${label.replace(/"/g, "'")}"}`;
      }
      return match;
    });

    processedLines.push(line);
  }

  // 5. Ensure diagram has a known header
  let firstNonEmpty = processedLines.find((l) => l.trim().length > 0) || "";
  const firstWord = firstNonEmpty.trim().split(/[\s[({:]/)[0].toLowerCase();

  const hasKnownHeader = KNOWN_DIAGRAM_HEADERS.some((h) => firstWord.startsWith(h));

  if (!hasKnownHeader) {
    // If it looks like class diagram syntax
    if (processedLines.some((l) => /class\s+[A-Za-z0-9_]+/i.test(l))) {
      processedLines.unshift("classDiagram");
    } else if (processedLines.some((l) => /->>|-->>/.test(l))) {
      processedLines.unshift("sequenceDiagram");
    } else if (processedLines.some((l) => /root\(\(.*\)\)/i.test(l))) {
      processedLines.unshift("mindmap");
    } else {
      // Default to flowchart TD
      processedLines.unshift("flowchart TD");
    }
  }

  // 6. Auto-close unclosed subgraphs
  while (subgraphCount > endCount) {
    processedLines.push("  end");
    endCount++;
  }

  return processedLines.join("\n").trim();
}

/**
 * Finds the offending line in Mermaid code from an error message
 */
export function extractOffendingLine(code: string, errorMessage: string): { lineNum: number; lineText: string } | null {
  const lines = code.split("\n");
  
  // Look for line number patterns in Mermaid error messages:
  // e.g. "Parse error on line 5:" or "at line 5"
  const lineMatch = errorMessage.match(/line\s+(\d+)/i);
  if (lineMatch) {
    const lineNum = parseInt(lineMatch[1], 10);
    if (lineNum >= 1 && lineNum <= lines.length) {
      return { lineNum, lineText: lines[lineNum - 1] };
    }
  }

  // If specific token is mentioned in quotes
  const tokenMatch = errorMessage.match(/Expecting '([^']+)'|got '([^']+)'/i);
  if (tokenMatch) {
    const token = tokenMatch[1] || tokenMatch[2];
    if (token) {
      const idx = lines.findIndex((l) => l.includes(token));
      if (idx !== -1) {
        return { lineNum: idx + 1, lineText: lines[idx] };
      }
    }
  }

  return null;
}
