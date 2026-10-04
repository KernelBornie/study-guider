import { courses, buildGlobalSearchIndex, FlatSearchItem } from "@/data/courses";

export interface AttachedFileInput {
  name: string;
  mimeType: string;
  data: string; // base64 string
  size: number;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/**
 * Extracts readable plain text strings from base64 PDF or raw text files.
 */
export function extractTextFromFile(file: AttachedFileInput): string {
  try {
    const raw = atob(file.data);

    // If it's plain text or markdown
    if (file.mimeType.startsWith("text/") || file.name.endsWith(".txt") || file.name.endsWith(".md")) {
      return raw;
    }

    // If it's a PDF, extract ASCII text streams / string literals inside parentheses or brackets
    if (file.mimeType === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
      const textMatches: string[] = [];
      // Look for PDF text blocks: (string) Tj or [(str1)(str2)] TJ
      const tjRegex = /\(([^)]+)\)\s*Tj/g;
      let match;
      while ((match = tjRegex.exec(raw)) !== null) {
        if (match[1] && match[1].length > 1) {
          textMatches.push(match[1]);
        }
      }

      // Also search for readable word clusters in the raw stream
      if (textMatches.length < 5) {
        const words = raw.match(/[A-Za-z0-9_]{3,}/g) || [];
        // Filter common PDF keywords
        const filtered = words.filter(
          (w) => !/^(obj|endobj|stream|endstream|xref|trailer|startxref|Catalog|Pages|Page|Font|Type|Subtype)$/i.test(w)
        );
        return filtered.slice(0, 300).join(" ");
      }

      return textMatches.join(" ");
    }

    // For images, return the filename and mime hint
    return `[Image Attachment: ${file.name}]`;
  } catch (err) {
    return `[Attachment: ${file.name}]`;
  }
}

/**
 * Match past paper questions from global search index
 */
function findMatchingPastPaperQuestions(query: string, searchIndex: FlatSearchItem[]): FlatSearchItem[] {
  const qLower = query.toLowerCase();
  const queryTokens = qLower
    .split(/[\s,?.!:;()_-]+/)
    .filter((t) => t.length > 2 && !["the", "and", "for", "with", "what", "how", "explain", "describe", "discuss", "calculate", "diagram"].includes(t));

  const scored = searchIndex.map((item) => {
    let score = 0;
    const combined = `${item.courseCode} ${item.courseTitle} ${item.paperTitle} ${item.questionTitle || ""} ${item.questionText} ${item.answerText}`.toLowerCase();

    for (const token of queryTokens) {
      if (combined.includes(token)) {
        score += 2;
        if (item.questionText.toLowerCase().includes(token)) {
          score += 3;
        }
      }
    }

    // Bonus for matching question labels like "Q1", "Question 1", "b", etc.
    const qNumMatch = query.match(/(?:question|q)\s*([1-9])/i);
    if (qNumMatch && item.questionNumber.includes(qNumMatch[1])) {
      score += 10;
    }

    // Course bonus
    if (qLower.includes("csc") || qLower.includes("4642") || qLower.includes("3600") || qLower.includes("4630")) {
      if (qLower.includes("4642") && item.courseCode.includes("4642")) score += 5;
      if (qLower.includes("4630") && item.courseCode.includes("4630")) score += 5;
      if (qLower.includes("3600") && item.courseCode.includes("3600")) score += 5;
    }

    return { item, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.filter((s) => s.score >= 4).slice(0, 3).map((s) => s.item);
}

/**
 * Generates Mermaid diagram based on topic
 */
function generateTopicDiagram(topic: string): string {
  const t = topic.toLowerCase();

  if (t.includes("schs") || (t.includes("context") && (t.includes("smart") || t.includes("campus") || t.includes("healthcare")))) {
    return `\`\`\`mermaid
flowchart TB
  subgraph SCHS["Smart Campus Healthcare System (SCHS)"]
    CORE["SCHS Central Controller & EHR Engine"]
  end

  PATIENT["🧑‍🎓 Student / Patient Mobile App"]
  DOCTOR["👨‍⚕️ Campus Clinic Medical Staff"]
  IOT["⌚ Wearable Bio-Sensors & Vitals Monitor"]
  PHARMACY["💊 University Campus Pharmacy"]
  EMERGENCY["🚑 UNZA Ambulance Dispatch & Hospital"]

  PATIENT -->|"Book appointments & view health status"| CORE
  DOCTOR -->|"Review triage vitals & record prescriptions"| CORE
  IOT -->|"Stream telemetry (Pulse, Temp, SpO2)"| CORE
  CORE -->|"Issue verified digital prescription"| PHARMACY
  CORE -->|"Trigger critical vital alert"| EMERGENCY
\`\`\``;
  }

  if (t.includes("mccall") || t.includes("quality factor")) {
    return `\`\`\`mermaid
mindmap
  root((McCall's Software<br/>Quality Factor Model))
    Product Operation
      Correctness
      Reliability
      Efficiency
      Integrity
      Usability
    Product Revision
      Maintainability
      Flexibility
      Testability
    Product Transition
      Portability
      Reusability
      Interoperability
    Extended Models
      Evans and Marciniak
        Verifiability
        Expandability
      Deutsch and Willis
        Safety
        Survivability
\`\`\``;
  }

  if (t.includes("defect") || t.includes("cost of defect") || t.includes("removal model")) {
    return `\`\`\`mermaid
flowchart LR
  subgraph Phase1["1. Requirements"]
    R_IN["100 Injected Defects"] --> R_REM["Filter: 50% Removed (50)"]
    R_REM --> R_PASS["50 Carried to Design"]
  end

  subgraph Phase2["2. Design"]
    D_IN["50 Defects x 1.5 Amplification = 75"] --> D_REM["Filter: 60% Removed (45)"]
    D_REM --> D_PASS["30 Carried to Code"]
  end

  subgraph Phase3["3. Implementation / Code"]
    C_IN["30 Defects x 2.0 Amplification = 60"] --> C_REM["Filter: 70% Removed (42)"]
    C_REM --> C_PASS["18 Carried to Testing"]
  end

  subgraph Phase4["4. Acceptance / Operation"]
    O_IN["18 Residual Defects"] --> O_EXP["Cost Multiplier: 100x - 200x"]
  end

  R_PASS --> Phase2
  D_PASS --> Phase3
  C_PASS --> Phase4
\`\`\``;
  }

  if (t.includes("class diagram") && (t.includes("exam") || t.includes("online") || t.includes("student"))) {
    return `\`\`\`mermaid
classDiagram
  class Student {
    +String studentId
    +String fullName
    +String programme
    +registerExam(Exam exam)
    +submitPaper(Submission sub)
  }

  class Exam {
    +String courseCode
    +String title
    +DateTime startTime
    +int durationMinutes
    +List~Question~ questions
    +publishResults()
  }

  class Question {
    +int questionNumber
    +String promptText
    +float maxMarks
    +gradeSubmission(String answer)
  }

  class Submission {
    +String submissionId
    +DateTime submittedAt
    +float awardedScore
    +String remarks
  }

  class Lecturer {
    +String staffId
    +String department
    +createExam(Course course)
    +reviewGrade(Submission sub)
  }

  Student "1" --> "*" Submission : submits
  Exam "1" *-- "*" Question : contains
  Submission "*" --> "1" Exam : belongs to
  Lecturer "1" --> "*" Exam : sets and grades
\`\`\``;
  }

  if (t.includes("insulin") || (t.includes("safety") && t.includes("critical"))) {
    return `\`\`\`mermaid
stateDiagram-v2
  [*] --> Standby
  Standby --> Sensing : Timer Interrupt (Every 10 min)
  Sensing --> Computation : Blood Sugar Level Acquired
  Computation --> SafeCheck : Calculate Required Insulin Unit
  
  state SafeCheck {
    [*] --> VerifyDoseLimits
    VerifyDoseLimits --> DoseAcceptable : Within Safe Threshold (<= 5 Units)
    VerifyDoseLimits --> DoseExceeded : Exceeds Safe Rate
    DoseExceeded --> EmergencyLockout : Sound Audio Alarm
  }

  DoseAcceptable --> Actuation : Inject Micropump Pulse
  Actuation --> Standby : Log Delivery & Reset Timer
  EmergencyLockout --> Standby : Manual Doctor/Patient Reset
\`\`\``;
  }

  if (t.includes("cyclomatic") || t.includes("program graph") || t.includes("basis path")) {
    return `\`\`\`mermaid
flowchart TD
  N1((1: Entry)) --> N2{2: If Condition A}
  N2 -->|True| N3[3: Process Branch 1]
  N2 -->|False| N4{4: While Loop B}
  N3 --> N4
  N4 -->|Loop True| N5[5: Loop Body Computation]
  N5 --> N4
  N4 -->|Loop False| N6((6: Exit Node))

  classDef decision fill:#1e3a8a,stroke:#3b82f6,stroke-width:2px,color:#fff;
  class N2,N4 decision;
\`\`\``;
  }

  if (t.includes("microservice") || t.includes("circuit breaker") || t.includes("grasp")) {
    return `\`\`\`mermaid
flowchart LR
  CLIENT[Web / Mobile Client] --> GATEWAY[API Gateway & Router]

  subgraph Resilience["Fault Tolerance Boundary"]
    GATEWAY --> CB[Circuit Breaker: CLOSED]
    CB -->|Normal Traffic| SERVICE_A[Course Service]
    CB -.->|Tripped / Failures >= Threshold| FALLBACK[Cached Fallback Response: OPEN]
  end

  GATEWAY --> SERVICE_B[Exam & Grading Service]
  SERVICE_A --> DB1[(Course PostgreSQL)]
  SERVICE_B --> DB2[(Grading Database)]
\`\`\``;
  }

  if (t.includes("formal design review") || t.includes("fdr") || t.includes("inspection")) {
    return `\`\`\`mermaid
flowchart TD
  A[1. Planning & Moderator Selection] --> B[2. Overview Presentation]
  B --> C[3. Individual Preparation by Reviewers]
  C --> D[4. Formal Review / Inspection Meeting]
  D --> E{Meeting Verdict}
  E -->|Accept as is| F[6. Formal Sign-off]
  E -->|Accept with rework| G[5. Author Corrects Defects]
  E -->|Reject & Re-review| A
  G --> H[Follow-up Verification by Moderator]
  H --> F
\`\`\``;
  }

  // Default clean revision flowchart
  return `\`\`\`mermaid
flowchart TD
  START([Start Exam Revision]) --> STEP1[1. Understand Theory & Core Definitions]
  STEP1 --> STEP2[2. Master Mathematical Formulas & Calculations]
  STEP2 --> STEP3[3. Trace Past Paper Questions & Model Answers]
  STEP3 --> STEP4{Is Diagram Required?}
  STEP4 -->|Yes| STEP5[Generate Mermaid Architectural Sketch]
  STEP4 -->|No| STEP6[Summarize Key Exam Pitfalls]
  STEP5 --> FINISH([High-Scoring Exam Answer])
  STEP6 --> FINISH
\`\`\``;
}

/**
 * Solves specific mathematical calculations
 */
function handleMathematicalCalculations(text: string): string | null {
  const lower = text.toLowerCase();

  // Cyclomatic complexity: E, N, P
  // Formula: V(G) = E - N + 2 or E - N + 2P or P + 1
  const matchENP = lower.match(/(?:e\s*=\s*(\d+))|(?:edges?\s*=\s*(\d+))/i);
  const matchNN = lower.match(/(?:n\s*=\s*(\d+))|(?:nodes?\s*=\s*(\d+))/i);
  const matchPP = lower.match(/(?:p\s*=\s*(\d+))|(?:predicate\s*nodes?\s*=\s*(\d+))|(?:connected\s*components?\s*=\s*(\d+))/i);

  if ((lower.includes("cyclomatic") || lower.includes("v(g)")) && (matchENP || lower.includes("edges"))) {
    const e = matchENP ? parseInt(matchENP[1] || matchENP[2], 10) : 21;
    const n = matchNN ? parseInt(matchNN[1] || matchNN[2], 10) : 17;
    const p = matchPP ? parseInt(matchPP[1] || matchPP[2] || matchPP[3], 10) : 5;

    const vgFormula1 = e - n + 2;
    const vgMultiComponent = e - n + 2 * (p > 1 ? p : 1);
    const vgPredicate = p + 1;

    return `### 🧮 Step-by-Step Cyclomatic Complexity Calculation

**Given Parameters:**
- Number of Edges ($E$) = **${e}**
- Number of Nodes / Vertices ($N$) = **${n}**
- Predicate Nodes or Connected Components ($P$) = **${p}**

---

#### 1. Standard McCabe Formula (Single Connected Graph, $P = 1$)
$$V(G) = E - N + 2$$
$$V(G) = ${e} - ${n} + 2 = ${vgFormula1}$$

#### 2. Formula for $P$ Predicate Nodes (Binary Decision Points)
$$V(G) = P + 1$$
$$V(G) = ${p} + 1 = ${vgPredicate}$$

#### 3. General Formula for Multi-Component Graph ($p$ Connected Sub-graphs)
$$V(G) = E - N + 2P$$
$$V(G) = ${e} - ${n} + 2(${p}) = ${e} - ${n} + ${2 * p} = ${vgMultiComponent}$$

---

**Academic Meaning & Exam Significance:**
1. **Linearly Independent Paths**: $V(G)$ defines the **upper bound on the number of basis paths** required to achieve 100% statement and branch coverage.
2. **Testing Effort**: The software testing team must design at minimum **${vgFormula1} basis test cases** to ensure every branch condition is evaluated at least once in both True and False states.
3. **Risk Profile**:
   - $1 - 10$: Simple program, low risk, high testability.
   - $11 - 20$: Moderate complexity, moderate risk.
   - $21 - 50$: Complex program, high risk; refactoring into smaller modular functions recommended.

${generateTopicDiagram("cyclomatic complexity")}`;
  }

  // Defect removal model calculation
  if (lower.includes("defect removal") || (lower.includes("100") && lower.includes("defect"))) {
    return `### 📊 Defect Removal Model: Step-by-Step Mathematical Solution

In SQA, the **Defect Removal Model** tracks how defects introduced in early phases propagate, amplify, and cost exponentially more to remediate in later phases.

#### Standard Problem Setup (UNZA CSC 4642 Exam Pattern)
- **Initial Injected Defects**: 100 defects introduced during Requirements Phase.
- **Phase Efficiencies**:
  - Requirements Inspection: 50% removal efficiency
  - Design Inspection: 60% removal efficiency, Amplification Factor = $1.5$
  - Coding / Unit Testing: 70% removal efficiency, Amplification Factor = $2.0$
  - System / Acceptance Testing: Final residual detection

---

| Phase | Incoming Defects | Amplified Defects | Removal Efficiency (%) | Defects Removed | Defects Passed Forward | Cost per Defect | Total Phase Cost |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Requirements** | 100 | 100 | 50% | **50** | **50** | $10 | $500 |
| **2. Design** | 50 | $50 \\times 1.5 = 75$ | 60% | **45** | **30** | $50 | $2,250 |
| **3. Coding / Unit Test**| 30 | $30 \\times 2.0 = 60$ | 70% | **42** | **18** | $250 | $10,500 |
| **4. System Testing** | 18 | 18 | 80% | **14** | **4** | $1,000 | $14,000 |
| **5. Production (Field)**| 4 | 4 | N/A | **4** | **0** | $10,000 | $40,000 |

---

#### Key Deductions for SQA Students:
1. **Defect Amplification**: A single requirements defect left uncorrected in design typically causes **$1.5$ to $3.0$ secondary defects** in code and interfaces.
2. **Defect Removal Efficiency (DRE)**:
   $$DRE = \\frac{E}{E + D}$$
   Where $E$ is defects found before release, and $D$ is defects found after release.
3. **Boehm's Economic Law of SQA**: A defect caught in production costs up to **100x to 1000x** more than finding it during requirements review.

${generateTopicDiagram("defect removal model")}`;
  }

  return null;
}

/**
 * Main offline response synthesizer
 */
export function generateOfflineTutorReply(
  prompt: string,
  files?: AttachedFileInput[],
  chatHistory?: ChatMessage[]
): string {
  const fullInput = prompt.trim();
  const searchIndex = buildGlobalSearchIndex(courses);

  // Check if files were uploaded and extract text
  let fileContext = "";
  if (files && files.length > 0) {
    const fileSummaries = files.map((f) => {
      const extracted = extractTextFromFile(f);
      return `### File: ${f.name} (${f.mimeType})\n${extracted}`;
    });
    fileContext = `\n\n[Uploaded Document Analysis]\n${fileSummaries.join("\n\n")}`;
  }

  const combinedQuery = `${fullInput} ${fileContext}`;

  // 1. Check for specific math calculations
  const mathAnswer = handleMathematicalCalculations(combinedQuery);
  if (mathAnswer) {
    return mathAnswer;
  }

  // 2. Check if a diagram is explicitly requested
  const isDiagramRequest = /draw|diagram|mermaid|flowchart|mindmap|uml|class diagram|sequence|architecture/i.test(fullInput);

  // 3. Search past paper questions in indexed courses
  const matchedPastQuestions = findMatchingPastPaperQuestions(combinedQuery, searchIndex);

  if (matchedPastQuestions.length > 0 && !isDiagramRequest) {
    const primary = matchedPastQuestions[0];
    const secondary = matchedPastQuestions.slice(1);

    let response = `### 📚 UNZA Verified Solution (${primary.courseCode} — ${primary.paperTitle})

**Question ${primary.questionNumber} (${primary.subQuestionLabel}):**  
> *${primary.questionText}*

---

${primary.answerText}
`;

    // If diagram helps this topic, append it
    const diagram = generateTopicDiagram(`${primary.courseCode} ${primary.questionTitle || ""} ${primary.questionText}`);
    response += `\n\n#### 📐 Visual Architectural Diagram\n${diagram}`;

    if (secondary.length > 0) {
      response += `\n\n---\n#### 🔗 Related UNZA Examination Questions:\n`;
      for (const item of secondary) {
        response += `- **${item.courseCode} ${item.paperTitle} Q${item.questionNumber}(${item.subQuestionLabel})**: *${item.questionText.slice(0, 120)}...*\n`;
      }
    }

    return response;
  }

  // 4. Topic-specific deep academic responses
  const qLower = combinedQuery.toLowerCase();

  // McCall Model
  if (qLower.includes("mccall") || qLower.includes("quality factor")) {
    return `### 🏛️ McCall's Software Quality Factor Model (1977)

McCall, Richards, and Walters categorized software quality into **3 operational perspectives** encompassing **11 fundamental quality factors**:

---

#### 1. Product Operation (How well does it perform during day-to-day use?)
1. **Correctness**: The extent to which software satisfies its specification and mission objectives (e.g., absence of calculation bugs, accuracy of outputs).
2. **Reliability**: The probability of failure-free operation under specified environmental conditions for a designated period (measured by MTBF).
3. **Efficiency**: The volume of computing hardware resources and code execution cycles required to fulfill functions (CPU, memory, bandwidth).
4. **Integrity**: The security control preventing unauthorized or malicious read/write access to programs and databases.
5. **Usability**: The ease of effort required for human operators to learn, prepare input for, and interpret output from the software.

#### 2. Product Revision (How easily can the software be modified or fixed?)
6. **Maintainability**: The effort required to identify, diagnose, and repair bugs or faults in operational software.
7. **Flexibility**: The capability to modify and adapt the software to new functional requirements and operational environments.
8. **Testability**: The effort required to execute verification procedures to ensure the program performs its intended functions correctly.

#### 3. Product Transition (How easily does it adapt to new platforms or systems?)
9. **Portability**: The effort required to transfer the software from one hardware configuration or operating system environment to another.
10. **Reusability**: The degree to which software components, modules, or packages can be reused in other applications.
11. **Interoperability**: The capability of the software system to exchange data and coordinate services with external independent systems.

---

#### Extended Factor Models (Common Exam Comparison):
- **Evans & Marciniak (1987)**: Added **Verifiability** (measuring verification compliance) and **Expandability** (architectural scalability).
- **Deutsch & Willis (1988)**: Added **Safety** (preventing human injury or hardware damage in safety-critical systems) and **Survivability** (graceful degradation during component failure).

${generateTopicDiagram("mccall factor model")}`;
  }

  // Formal Design Reviews vs Inspections vs Walkthroughs
  if (qLower.includes("formal design review") || qLower.includes("walkthrough") || qLower.includes("inspection") || qLower.includes("fagan")) {
    return `### 🔍 SQA Review Methodologies: Formal Design Reviews vs Inspections vs Walkthroughs

In SQA Topic 8, peer reviews and formal design reviews represent the primary defect-filtering mechanism before executable code is produced.

---

| Evaluation Dimension | Walkthrough | Fagan Inspection | Formal Design Review (FDR) |
| :--- | :--- | :--- | :--- |
| **Primary Purpose** | Informal knowledge sharing, education, and early sanity check. | Rigorous, structured defect detection using formal checklists. | Formal technical milestone assessment for client/management approval. |
| **Leader / Chair** | Usually the **Author** of the work product. | Independent trained **Moderator** (never the author). | **Project Manager** or Senior System Architect. |
| **Preparation** | Minimal or optional prior to the meeting. | **Mandatory** formal preparation by all inspectors with defect logging. | In-depth document review by stakeholders and client reps. |
| **Checklist Used** | Rare or informal guidelines. | **Mandatory standardized defect checklists** specific to work product. | Formal architectural & contractual compliance criteria. |
| **Formality & Data** | Low; no formal defect density metrics recorded. | **Very High**; defect metrics, inspection rate, and rework logging tracked. | High; formal sign-off report with approve/rework/reject decision. |
| **Typical Team Roles** | Author, Peer Developers. | Moderator, Author, Inspectors (2-4), Scribe/Recorder. | Project Lead, Lead Architect, SQA Engineer, Client/Customer Rep. |

---

#### The 6 Formal Inspection Phases (Fagan):
1. **Planning**: Moderator validates entry criteria and assigns roles.
2. **Overview**: Author briefs the team on architecture and context.
3. **Preparation**: Each inspector works individually against checklists to identify defects.
4. **Inspection Meeting**: Moderator leads orderly page-by-page review; Scribe logs defects without arguing solutions.
5. **Rework**: Author corrects logged defects.
6. **Follow-up**: Moderator verifies all corrections meet exit criteria.

${generateTopicDiagram("formal design review")}`;
  }

  // Software Engineering Process: Waterfall vs Agile vs Incremental
  if (qLower.includes("waterfall") || qLower.includes("agile") || qLower.includes("incremental") || qLower.includes("process model")) {
    return `### 🔄 Software Process Models: Waterfall vs Incremental vs Agile (CSC 3600 Exam Focus)

---

#### 1. Classical Waterfall Model (Linear-Sequential)
Comprises 5 discrete sequential phases:
1. **Requirements Analysis and Definition**: System services, constraints, and goals established via consultation with system users (SRS).
2. **System and Software Design**: Establishes overall system architecture; partitions requirements into hardware/software subsystems.
3. **Implementation and Unit Testing**: Realized as a set of programs or code units; individual units verified.
4. **Integration and System Testing**: Individual programs integrated and tested as a complete system to ensure specifications are met.
5. **Operation and Maintenance**: System installed and put into practical use; correcting undetected errors and enhancing services.

**Major Limitations of Waterfall**:
- **Inflexible Partitioning**: Hard to accommodate changing customer requirements after the process is underway.
- **Late Working Software**: A working version is not available until late in the lifecycle.
- **High Risk on Ambiguity**: Premature commitment to requirements often leads to delivering software that fails to meet actual user needs.

---

#### 2. Incremental Development
- Interleaves activities of specification, development, and validation.
- System is developed as a series of increments, with each increment delivering a portion of required functionality.
- **Advantages**:
  1. Early delivery of customer value.
  2. Lower risk of overall project failure.
  3. Customer feedback readily incorporated in subsequent increments.
- **Problems**:
  1. System architecture can degrade over time without continual refactoring.
  2. Difficult for large enterprise management wanting fixed-price, fixed-schedule contracts.

---

#### 3. The Agile Manifesto (4 Core Values & UNZA Essentials):
1. **Individuals and interactions** over processes and tools.
2. **Working software** over comprehensive documentation.
3. **Customer collaboration** over contract negotiation.
4. **Responding to change** over following a plan.

${generateTopicDiagram("process model")}`;
  }

  // Smart Campus Healthcare System (SCHS)
  if (qLower.includes("schs") || qLower.includes("smart campus")) {
    return `### 🏥 Smart Campus Healthcare System (SCHS) — Complete Architecture & Models

From UNZA CSC 3600 Assignment 1: The Smart Campus Healthcare System (SCHS) provides integrated healthcare management, triage, and emergency dispatch for UNZA students and faculty.

---

#### 1. System Stakeholders & External Actors
1. **Student / Patient**: Authenticates via Student ID, requests consultations, views prescription status, and syncs wearable bio-sensor vitals.
2. **Campus Clinic Medical Doctor / Nurse**: Accesses triage queue, reviews patient history, prescribes medication, and refers urgent cases.
3. **Campus Pharmacy**: Receives digital prescriptions, verifies dispensing, and tracks pharmaceutical inventory.
4. **Ambulance & Emergency Response**: Dispatched automatically when telemetry vitals breach safety thresholds (e.g. cardiac distress).
5. **Hospital Information System (HIS / UTH)**: Coordinates tertiary referral records with the University Teaching Hospital.

---

#### 2. Architectural Context Model
${generateTopicDiagram("schs context model")}`;
  }

  // If a diagram was specifically requested
  if (isDiagramRequest) {
    return `### 🎨 Mermaid Architecture Diagram

Here is the requested diagram generated by the offline AI tutor:

${generateTopicDiagram(fullInput)}

*Tip: You can copy the code above or embed it into your revision notes and past paper submissions.*`;
  }

  // Document upload fallback handling
  if (files && files.length > 0) {
    return `### 📄 Uploaded Past Paper & Document Analysis

**File(s) Processed**: ${files.map((f) => f.name).join(", ")}

#### Identified Topics & Academic Synthesis:
${fileContext.slice(0, 500)}...

#### Recommendations for this Paper:
1. **Review Definitions**: Ensure you distinguish between Fault, Error, and Failure.
2. **Show Calculations**: Always state the general formula before substituting numbers (e.g. $V(G) = E - N + 2$).
3. **Diagrams**: Supplement your written explanations with structured architectural flowcharts and class models.

${generateTopicDiagram(files[0].name)}`;
  }

  // General Academic Tutor Response
  return `### 🎓 UNZA Academic Study Assistant

You asked: **"${fullInput}"**

#### Core Academic Overview:
In computer science and software engineering examinations at the University of Zambia (UNZA), structured answers that combine **formal definitions**, **step-by-step methodologies**, and **architectural diagrams** earn full marks.

#### Recommended Action:
- Ask about specific courses: **CSC 4642 (SQA)**, **CSC 4630 (ASE)**, or **CSC 3600 (SE)**.
- Request step-by-step calculations: *e.g., "Calculate cyclomatic complexity with E=21, N=17"* or *"Show defect removal model with 100 defects"*.
- Ask for visual drawings: *e.g., "Draw the SCHS context model as a Mermaid diagram"*.
- Attach past paper PDFs or screenshots to solve all questions systematically.

${generateTopicDiagram(fullInput)}`;
}
