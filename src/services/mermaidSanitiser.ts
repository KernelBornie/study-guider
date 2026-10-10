/**
 * UNZA Study-Guider Mermaid Sanitiser & Validator Service
 * Cleans AI-generated Mermaid code, eliminates LaTeX fragments,
 * normalises headers, fixes escaped line breaks, and preserves valid syntax.
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
 * Sanitises raw Mermaid code:
 * 1. Strips stray markdown fences, 'code', 'mermaid', 'java' lines
 * 2. Normalises tabs to spaces
 * 3. Strips LaTeX from node labels
 * 4. Normalises old 'graph TD' / 'graph LR' to 'flowchart TD' / 'flowchart LR'
 * 5. Replaces literal '\n' inside flowchart labels with HTML '<br/>'
 * 6. Ensures link texts containing punctuation are quoted in pipes: |"..."|
 * 7. Enforces valid node shapes without double-quoting or corrupting sequence/class diagrams
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

  // 2. Replace tabs with 2 spaces
  cleaned = cleaned.replace(/\t/g, "  ");

  // 3. Strip all LaTeX fragments
  cleaned = stripLatex(cleaned);

  // 4. Split into lines and inspect diagram header
  const rawLines = cleaned.split(/\r?\n/);
  const processedLines: string[] = [];
  let subgraphCount = 0;
  let endCount = 0;

  // Determine diagram type from the first non-empty line
  let diagramType = "";
  for (const l of rawLines) {
    const trimmed = l.trim();
    if (!trimmed) continue;
    const firstWord = trimmed.split(/[\s[({:]/)[0].toLowerCase();
    for (const h of KNOWN_DIAGRAM_HEADERS) {
      if (firstWord.startsWith(h)) {
        diagramType = h;
        break;
      }
    }
    if (diagramType) break;
  }

  // If no known header was found, infer based on syntax
  if (!diagramType) {
    if (rawLines.some((l) => /class\s+[A-Za-z0-9_]+/i.test(l))) {
      diagramType = "classdiagram";
    } else if (rawLines.some((l) => /->>|-->>/.test(l))) {
      diagramType = "sequencediagram";
    } else if (rawLines.some((l) => /state\s+/i.test(l))) {
      diagramType = "statediagram-v2";
    } else {
      diagramType = "flowchart";
    }
  }

  const isFlowchart = diagramType.startsWith("flowchart") || diagramType.startsWith("graph");

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

    // Remove trailing semicolons in flowchart / graph lines (unless in HTML entity like &nbsp;)
    if (trimmed.endsWith(";") && !trimmed.endsWith("&nbsp;") && !trimmed.endsWith("&#59;")) {
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

    // Flowchart-specific cleanups
    if (isFlowchart) {
      // 1. Convert literal '\n' or '\\n' in node labels to standard '<br/>'
      line = line.replace(/\\n/g, "<br/>");

      // 2. Fix pipe link texts that contain punctuation (like '/', ':', '(', ')', '.')
      // e.g. -->|HTTPS / TLS 1.3 (Port 443)| becomes -->|"HTTPS / TLS 1.3 (Port 443)"|
      line = line.replace(/\|([^"|\r\n]+)\|/g, (match, linkText) => {
        const trimmedText = linkText.trim();
        if (/[\/():;]/.test(trimmedText)) {
          return `|"${trimmedText}"|`;
        }
        return match;
      });

      // 3. Clean up accidental nested quotes: ["...("something")..."] -> ["...(something)..."]
      line = line.replace(/\["([^"]*)\("([^"]+)"\)([^"]*)"\]/g, '["$1($2)$3"]');
    }

    processedLines.push(line);
  }

  // 5. Ensure diagram has a valid header as first line
  const firstNonEmptyIndex = processedLines.findIndex((l) => l.trim().length > 0);
  if (firstNonEmptyIndex !== -1) {
    const firstWord = processedLines[firstNonEmptyIndex].trim().split(/[\s[({:]/)[0].toLowerCase();
    const hasHeader = KNOWN_DIAGRAM_HEADERS.some((h) => firstWord.startsWith(h));
    if (!hasHeader) {
      if (diagramType === "classdiagram") {
        processedLines.unshift("classDiagram");
      } else if (diagramType === "sequencediagram") {
        processedLines.unshift("sequenceDiagram");
      } else if (diagramType === "statediagram-v2") {
        processedLines.unshift("stateDiagram-v2");
      } else {
        processedLines.unshift("flowchart TD");
      }
    }
  } else {
    processedLines.unshift("flowchart TD");
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
  
  const lineMatch = errorMessage.match(/line\s+(\d+)/i);
  if (lineMatch) {
    const lineNum = parseInt(lineMatch[1], 10);
    if (lineNum >= 1 && lineNum <= lines.length) {
      return { lineNum, lineText: lines[lineNum - 1] };
    }
  }

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
