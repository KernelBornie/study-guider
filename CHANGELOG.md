# CHANGELOG — UNZA Study-Guider Reliability & Grounding Upgrades

## [1.5.0] - 2026-10-07

### 1. Integration of Lethbridge & Laganière (2005) 2nd Edition Textbook into CSC 4630
- **Authoritative 9 Moodle Topics Outline**:
  - **Section A (Compulsory, 36 Marks)**:
    - **Q1**: Advanced Requirement Engineering (Ch. 4, pp. 119–152) — 4 requirement types, gathering techniques (observation, interviewing, brainstorming, JAD, prototyping), 10 review criteria, use case diagram for Library System.
    - **Q2**: Advanced Object Analysis (Ch. 2 & 5, pp. 29–54, 172–195) — Object, class, inheritance, polymorphism, encapsulation, identity; associations, multiplicities, association classes, reflexive associations; aggregation vs composition; OCL invariants.
    - **Q3**: Advanced Object Design (Ch. 5, 6, 8, pp. 221–251, 286–300) — Singleton, Observer, Adapter, Façade, Proxy design patterns; UML sequence diagram with lifelines, activations, create, and opt fragment; UML state machine with nested substates and guards.
  - **Section B (Answer Any TWO, 40 Marks)**:
    - **Q4**: Architectural Analysis and Patterns (Ch. 9, pp. 314–362) — 11 design principles (divide & conquer, 7 cohesion types, 9 coupling types, abstraction, flexibility, portability, testability, design by contract); 5 architectural patterns (Multi-Layer, Client-Server, MVC, Pipe-and-Filter, Broker) with comparative matrix and diagram.
    - **Q5**: Designing a Persistence Framework with Patterns (Ch. 6 & 9, pp. 241–243, 351) — Object-relational impedance mismatch, persistence lifecycle, transaction atomicity; Broker pattern, Proxy pattern for lazy loading, DAO pattern with Java skeletons; layered persistence architecture diagram.
    - **Q6**: Aspect-Oriented Software Development (Sommerville Web Ch. 31) — Cross-cutting concerns, tangling vs scattering, Aspect, Join point, Pointcut, Advice (Before/After/Around), Introduction; Compile-time, binary, and runtime weaving; concrete AspectJ implementation.
    - **Q7**: Advanced Software Testing Techniques (Ch. 10, pp. 371–407) — Error vs Defect vs Failure; Black-box vs Glass-box; Equivalence partitioning and boundary testing; McCabe Cyclomatic Complexity V(G) = E − N + 2P with basis path derivation; TDD cycle (Red-Green-Refactor); Integration strategies (Top-down, Bottom-up, Sandwich); Regression testing and ripple effect.
  - **Section C (Answer Any ONE, 20 Marks)**:
    - **Q8**: Topic 8 — Service-Oriented Architecture and Systems of Systems (Ch. 9, pp. 358–360; Sommerville Ch. 18, 20) — SOA principles, benefits, challenges; Web Services stack (WSDL, SOAP, UDDI) vs REST; 4 Systems of Systems types (Directed, Acknowledged, Collaborative, Virtual).
    - **Q9**: Topic 9 — Real-Time and Embedded Software Engineering (Ch. 1 & 10, pp. 4–5, 391–394; Sommerville Ch. 21) — Hard vs Soft vs Firm real-time; embedded software characteristics; Deadlock (Coffman conditions), Livelock, Critical races and synchronisation; Rate Monotonic (RMS) and Earliest Deadline First (EDF) scheduling, Liu & Layland bound, Priority Inversion problem and solutions.

### 2. Portal Enhancements
- **Course Page**: CSC 4630 overview card displays 5 Papers, Curriculum Year: 2023 – 2026, and "Study Paper" filter tab.
- **AI Tutor Integration**: "🤖 Ask AI About This Paper" button pre-loads the paper title, 9 Moodle topics, and 9 questions with their mark allocations into the AI Tutor context.
- **Mermaid Diagrams**: Interactive SVG rendering for all embedded Mermaid code blocks in model answers.
- **Print Optimization**: Clean print stylesheet with page breaks between sections.

---

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
