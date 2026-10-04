# CHANGELOG — UNZA Study-Guider Reliability & Grounding Upgrades

## [1.4.0] - 2026-10-04

### 1. Eliminated False "Scanned Image" Negative
- **Public Worker Asset Provisioning**: Copied `pdf.worker.min.mjs` to `public/pdf.worker.min.mjs` and configured Express to serve the `public/` directory with proper `application/javascript` content-type headers.
- **Robust Base64 Header Stripping (`base64ToBytes`)**: Added automated data URI prefix stripping (`data:...;base64,`), eliminating `atob()` decoding corruption.
- **Accurate Validation Gate (`isRealPdfText`)**: Loosened over-strict checks so that valid exam text with technical keywords is not falsely flagged as raw PDF headers.
- **Sanity Check**: Enforces `%PDF-` byte header validation and per-page diagnostic logging (`[PDF] page N: X chars, real=true`).
- **Scanned Message Elimination**: The engine strictly only emits a "scanned image" notice if extraction genuinely yielded zero text and `parseError !== null`.

### 2. Complete Question Set Coverage for CSC 4642 2024 Exam
- Full verified answers for all seven questions in the 2024 exam:
  - **QUESTION ONE**: McCall Factor Model 15-metric mappings + Evans & Marciniak / Deutsch & Willis 5 extended quality factors.
  - **QUESTION TWO**: Software vs Industrial Products (3 differences, effects on SQA, 7 professional environment characteristics, SQA objectives).
  - **QUESTION THREE**: 4 Software Components, Error vs Fault vs Failure, Requirements Errors, Documentation Errors.
  - **QUESTION FOUR**: Proposal Draft Review 5 Activities, Insiders vs Outsiders evaluation, Project Technical Complexity.
  - **QUESTION FIVE**: Prototyping Process Model flowchart, development plan mapping, 4 QA activities.
  - **QUESTION SIX**: Defect Removal Model 6 assumptions + step-by-step 100-defect process table across 7 phases (1,777.66 cost units).
  - **QUESTION SEVEN**: Review Technique Comparison (DR vs Inspection vs Walkthrough) + FDR Process Flow Diagram & Roles.

### 3. Display Ergonomics & Server Grounding
- Confirmed full `1400px` desktop layout width, `75vh` answer pane, comfortable `15px` typography, and auto-grow `<textarea>` with `Ctrl/Cmd + Enter` quick submit.
- Server-side `/api/chat` prepends decompressed text with clear page citations `(Attached: <filename>, p. N)`.

---

## [1.3.0] - 2026-10-04
- Visible upload button, status chips, and layout expansion.

## [1.2.0] - 2026-10-04
- Initial `pdfjs-dist` integration and question detection.

## [1.1.0] - 2026-10-04
- Mermaid validation, sanitiser, and upload constraints.
