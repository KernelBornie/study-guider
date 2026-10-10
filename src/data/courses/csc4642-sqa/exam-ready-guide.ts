import { Paper } from "@/types";

export const csc4642_ExamReadyGuide: Paper = {
  id: "csc4642-exam-ready-guide",
  slug: "exam-ready-study-guide",
  title: "SQA Exam Ready Material — Complete Study Guide & Model Answers",
  year: 2026,
  duration: "3 Hours",
  totalMarks: 100,
  paperType: "Final Exam",
  venue: "UNZA Computer Science Department",
  sections: [
    {
      id: "section-a",
      name: "Section A: Short Answer Questions (40 Marks)",
      instructions: "Answer ALL questions in this section (Compulsory).",
      compulsory: true,
      questions: [
        {
          id: "a1",
          number: "Question A1",
          title: "IEEE Software Quality Definition & Two Dimensions",
          marks: 5,
          subQuestions: [
            {
              id: "a1-1",
              label: "a",
              marks: 5,
              question: "Define software quality according to IEEE and explain the two dimensions. [5 marks]",
              answer: "### IEEE Definition of Software Quality\n\nIEEE defines software quality as:\n1. **The degree to which a system, component, or process meets specified requirements.**\n2. **The degree to which a system, component, or process meets customer or user needs or expectations.**\n\n#### The Two Dimensions of Software Quality:\n- **Dimension 1 — Conformance to Requirements:** *\"Did you build what you said you would build?\"* Focuses on written specifications, contractual obligations, and explicit functional/performance criteria.\n- **Dimension 2 — Meeting User Needs/Expectations:** *\"Did you build what the user actually wanted?\"* Focuses on usability, implicit expectations, and real-world fitness for purpose.\n\n> **Key Exam Takeaway:** A software product can meet 100% of written specifications but still fail the customer if the specifications themselves were incomplete or flawed. True quality requires satisfying both dimensions.",
              keyPoints: [
                "IEEE 2-part definition: meets specified requirements + meets customer/user needs and expectations",
                "Dimension 1: Conformance to requirements (written specifications)",
                "Dimension 2: Meeting user needs/expectations (implicit & operational value)",
                "Distinction: Software can conform to poor requirements but still fail the user"
              ]
            }
          ]
        },
        {
          id: "a2",
          number: "Question A2",
          title: "Distinction Between Error, Fault, and Failure",
          marks: 6,
          subQuestions: [
            {
              id: "a2-1",
              label: "a",
              marks: 6,
              question: "Distinguish between software errors, software faults, and software failures. Use examples to illustrate. [6 marks]",
              answer: "### Error, Fault, and Failure — The Critical Distinction\n\n| Term | Definition | Key Point | Real-World Example |\n| :--- | :--- | :--- | :--- |\n| **Error** | A human action that produces an incorrect result (ISO 24765). Can be a grammatical mistake (syntax error) or logical mistake (logic error). | The original mistake made by a person (developer/analyst). | Missing semicolon in code; using `=` instead of `==` in PHP (`if ($i = 1)`). |\n| **Fault (Defect)** | A software error that causes incorrect functioning during a specific application. An imperfection in code/documentation. | Not all errors become faults; only if in executable logic that can affect function. | Meteoro-X weather unit coded with a limit of 160°C instead of 60°C. |\n| **Failure** | A fault that disrupts actual software use. Termination of the ability of a product to perform a required function (ISO 25010). | A fault becomes a failure **only when activated** during operation. | If Meteoro-X is deployed in extreme heat (>60°C), hardware shuts down or burns out. |\n\n#### The Chain of Causation:\nHuman Error → Software Fault (Defect) → Operational Failure (if activated)\n\n**Example 1 — Meteoro-X:**\n- Requirement: Block operation when temperature exceeds 60°C.\n- Programmer coded 160°C (Error → Fault).\n- Equipment was used exclusively in coastal areas where temperature never exceeded 60°C → **Fault never activated → NO failure occurred.**\n\n**Example 2 — Pharmacy Cash Register:**\n- Requirement: Prevent sales > $75 to customers owing > $200.\n- Programmer mistakenly created limit of $500 (Defect).\n- No client could purchase > $500 (credit card company limit was $400) → **Defect never activated → NO failure occurred.**",
              keyPoints: [
                "Error: Human action producing incorrect result (syntax or logic mistake)",
                "Fault (Defect): Imperfection in software that causes incorrect functioning",
                "Failure: Termination of ability to perform required function; requires activation",
                "Chain: Error → Fault → Failure",
                "Meteoro-X & Pharmacy Cash Register examples"
              ],
              diagramType: "error-chain"
            }
          ]
        },
        {
          id: "a3",
          number: "Question A3",
          title: "The Four Elements of Software (IEEE/ISO)",
          marks: 4,
          subQuestions: [
            {
              id: "a3-1",
              label: "a",
              marks: 4,
              question: "List the four elements of software according to IEEE/ISO and explain why each is important to SQA. [4 marks]",
              answer: "### The Four Elements of Software (IEEE/ISO Definition)\n\nSoftware is far more than just executable code. SQA mandates quality across all four components:\n\n1. **Computer Programs (\"Code\"):**\n   - Executable instructions, machine code, source code, scripts, and configuration files that activate the computer hardware.\n   - *SQA Importance:* Must be logically correct, readable, efficient, and maintainable.\n\n2. **Procedures:**\n   - Define the order, sequence, schedule, method, and responsible personnel for operating software programs (e.g., nightly 2:00 AM backup and database optimization procedures).\n   - *SQA Importance:* If procedures are incorrect or vague, even 100% bug-free code will produce catastrophic operational failures.\n\n3. **Documentation:**\n   - Artifacts for developers (SRS, architectural design), end users (user manuals, release notes), and maintenance personnel (API references, maintenance manuals).\n   - *SQA Importance:* Outdated or inaccurate documentation leads to user errors, maintenance disasters, and audit non-compliance.\n\n4. **Data:**\n   - Configuration parameters, tax tables, postal codes, and lookup tables that adapt generic software to specific client environments.\n   - *SQA Importance:* Inaccurate data tables (e.g., wrong VAT percentage) immediately corrupt system outputs regardless of code quality.\n\n> **Summary:** SQA must encompass **code quality, procedural quality, documentation quality, and data quality**.",
              keyPoints: [
                "1. Programs (Code): Executable instructions needing correctness and maintainability",
                "2. Procedures: Operational schedule, order, method, and person responsible",
                "3. Documentation: Specifications, manuals, guides for developers and users",
                "4. Data: Tables, parameters, and lists adapting software to specific domains",
                "SQA covers all 4 dimensions"
              ]
            }
          ]
        },
        {
          id: "a4",
          number: "Question A4",
          title: "The Six Classes of SQA System Components",
          marks: 6,
          subQuestions: [
            {
              id: "a4-1",
              label: "a",
              marks: 6,
              question: "Name the six classes of SQA system components and briefly describe each. [6 marks]",
              answer: "### The Six Classes of SQA System Components\n\n1. **Pre-Project Quality Components:**\n   - Contract reviews, proposal evaluations, development plans, and quality plans. Assure that commitments, schedules, and budgets are realistically established before coding begins.\n\n2. **Software Project Life Cycle Components:**\n   - Formal design reviews (DRs), peer reviews (inspections and walkthroughs), expert opinions, software testing, maintenance SQA, and subcontractor quality controls.\n\n3. **Infrastructure SQA Components:**\n   - Standard operating procedures (SOPs), work instructions, document templates, checklists, staff training/retraining/certification, preventive/corrective action mechanisms, configuration management, and documentation control.\n\n4. **Software Quality Management Components:**\n   - Project progress control, software quality metrics (defect densities, MTBF), and software quality cost accounting (prevention, appraisal, internal/external failure costs).\n\n5. **Standardisation, Certification, and Assessment Components:**\n   - Quality management standards (ISO 9000-3, CMM/CMMI) focusing on organisational infrastructure, and project process standards (ISO/IEC 12207, IEEE 1012) guiding engineering methodologies.\n\n6. **Human SQA Components:**\n   - Top management (quality policy and resource allocation), SQA Unit (steering force and auditors), SQA trustees/special-interest members, SQA committees, and voluntary quality forums.",
              keyPoints: [
                "1. Pre-Project: Contract reviews and project plans",
                "2. Project Life Cycle: Reviews, testing, maintenance, subcontractor control",
                "3. Infrastructure: Procedures, templates, checklists, training, configuration management",
                "4. Management: Progress control, metrics, quality costs",
                "5. Standards & Certification: ISO 9000-3, CMM, ISO/IEC 12207, IEEE 1012",
                "6. Human SQA: Management, SQA Unit, committees, trustees, forums"
              ]
            }
          ]
        },
        {
          id: "a5",
          number: "Question A5",
          title: "Contract Review & Its Two Stages",
          marks: 5,
          subQuestions: [
            {
              id: "a5-1",
              label: "a",
              marks: 5,
              question: "What is contract review? Explain its two distinct stages. [5 marks]",
              answer: "### Contract Review and Its Two Stages\n\n**Definition:** Contract review is the SQA component designed to guide the formal examination of proposal drafts and contract document drafts before commitments are finalized with clients, project partners, or subcontractors.\n\n#### The Two Stages of Contract Review:\n1. **Stage 1 — Proposal Draft Review:**\n   - *Timing:* Conducted **before** submitting the official proposal to a prospective customer.\n   - *Scope:* Examines customer requirement documents (RFPs), oral explanations, cost and resource estimates, timetable feasibility, partner/subcontractor agreements, and development risks.\n   - *Action:* The proposal team introduces necessary technical, scheduling, and pricing modifications.\n\n2. **Stage 2 — Contract Draft Review:**\n   - *Timing:* Conducted **before** formal contract signature.\n   - *Scope:* Examines the final contract draft against the approved proposal, verifying that all verbal agreements made during negotiations are explicitly documented and that no unagreed additions, deletions, or clauses were introduced.\n   - *Action:* The legal department and project leadership finalize contractual and commercial adjustments.",
              keyPoints: [
                "Definition: Oversight of proposals and contracts to prevent bad commitments",
                "Stage 1: Proposal Draft Review (before submission to customer, checks RFP, feasibility, costs)",
                "Stage 2: Contract Draft Review (before signing, checks negotiated understandings, legal clauses)",
                "Protects against unrealistic schedules, vague requirements, and cost overruns"
              ]
            }
          ]
        },
        {
          id: "a6",
          number: "Question A6",
          title: "Elements of a Project Development Plan",
          marks: 5,
          subQuestions: [
            {
              id: "a6-1",
              label: "a",
              marks: 5,
              question: "List five elements of a software project development plan and explain the purpose of each. [5 marks]",
              answer: "### Five Elements of a Development Plan\n\n1. **Project Products:**\n   - *Purpose:* Explicitly defines all deliverables (design specifications, code builds, test reports, user manuals, training workshops) along with expected completion dates.\n\n2. **Project Interfaces:**\n   - *Purpose:* Identifies all hardware interfaces, software package dependencies, external databases, and inter-team boundaries to prevent integration failure.\n\n3. **Methodology and Development Tools:**\n   - *Purpose:* Specifies software engineering methodologies (e.g. Agile/Scrum, Waterfall) and development tools (IDEs, compilers, CASE tools, CI/CD pipelines) appropriate for team experience.\n\n4. **Software Development Standards and Procedures:**\n   - *Purpose:* Establishes professional coding conventions, architectural guidelines, and international frameworks (such as IEEE/EIA 12207.0) to ensure uniformity across modules.\n\n5. **Map of Development Process (GANTT Chart):**\n   - *Purpose:* Visualizes sequence, start dates, durations, dependencies, and resource allocations for each phase, incorporating quality checkpoints and reviews.",
              keyPoints: [
                "1. Project Products: Deliverables and completion dates",
                "2. Project Interfaces: Hardware, software, and inter-team integration points",
                "3. Methodology & Tools: Development paradigm and CASE tools",
                "4. Standards & Procedures: Coding guidelines and IEEE 12207 compliance",
                "5. Map of Process (GANTT): Timeline, sequence, and dependency schedule"
              ]
            }
          ]
        },
        {
          id: "a7",
          number: "Question A7",
          title: "Verification, Validation, and Qualification",
          marks: 4,
          subQuestions: [
            {
              id: "a7-1",
              label: "a",
              marks: 4,
              question: "Define verification and validation. Give the key question and nature of each. [4 marks]",
              answer: "### Verification vs Validation vs Qualification\n\n#### 1. Verification\n- **Definition:** The process of evaluating a system or component to determine whether the products of a given development phase satisfy the conditions imposed at the start of that phase.\n- **Key Question:** *\"Are we building the system right?\"*\n- **Nature:** Objective technical process (code inspections, design analysis, static analysis, unit testing).\n\n#### 2. Validation\n- **Definition:** The process of evaluating a system or component during or at the end of the development process to determine whether it satisfies specified customer requirements and intended use.\n- **Key Question:** *\"Are we building the right system?\"*\n- **Nature:** Subjective evaluation process (prototyping, user acceptance testing, field trials).\n\n> **Qualification:** Determining whether a system or component is legally, contractually, and operationally suitable for live production deployment.",
              keyPoints: [
                "Verification: 'Are we building the system right?' (Objective, phase-to-phase conformance)",
                "Validation: 'Are we building the right system?' (Subjective, customer satisfaction and fitness for use)",
                "Qualification: Certification for operational deployment"
              ]
            }
          ]
        },
        {
          id: "a8",
          number: "Question A8",
          title: "Comparison: Inspections vs Walkthroughs",
          marks: 5,
          subQuestions: [
            {
              id: "a8-1",
              label: "a",
              marks: 5,
              question: "Compare inspections and walkthroughs in a structured comparison table. [5 marks]",
              answer: "### Peer Reviews: Formal Inspection vs Walkthrough\n\n| Feature | Fagan Inspection | Walkthrough |\n| :--- | :--- | :--- |\n| **Formality** | **Formal** structured engineering activity | **Informal** peer review session |\n| **Initiator** | Project team / SQA Unit | Work product Author |\n| **Leadership** | Trained independent **Moderator** | The **Author** leads and presents |\n| **Participant Roles** | Fixed formal roles: Moderator, Author, Reader, Inspectors, Scribe | Informal: Author and peer reviewers |\n| **Meeting Planning** | Pre-scheduled with strict entry/exit criteria | Often ad hoc or brief advance notice |\n| **Advance Preparation** | **Mandatory** individual preparation using checklists | Optional or minimal advance review |\n| **Checklists Used** | Standardized defect checklists mandatory | Rarely used or informal |\n| **Defect Recording** | Formal logging by designated Scribe | Author takes informal personal notes |\n| **Metrics Collected** | Defect density, inspection rate (pages/hr), rework hours | No formal metrics collected |",
              keyPoints: [
                "Inspection: Formal, moderator-led, fixed roles, checklists, formal metrics and report",
                "Walkthrough: Informal, author-led, open discussion, no moderator, author takes notes",
                "Inspection detects defects; walkthrough focuses on education and walkthrough logic"
              ],
              diagramType: "formal-review"
            }
          ]
        }
      ]
    },
    {
      id: "section-b",
      name: "Section B: Essay / Long Answer Questions (60 Marks)",
      instructions: "QUESTION B6 IS COMPULSORY. Answer Question B6 and ANY THREE other questions (15 Marks each).",
      compulsory: false,
      questions: [
        {
          id: "b1",
          number: "Question B1",
          title: "The Nine Causes of Software Errors with Examples",
          marks: 15,
          subQuestions: [
            {
              id: "b1-1",
              label: "a",
              marks: 15,
              question: "Explain the nine causes of software errors, giving a concrete real-world example for each. [15 marks]",
              answer: "### The Nine Causes of Software Errors (Topic 2)\n\nSoftware errors stem from technical, managerial, and communication shortcomings across the project lifecycle:\n\n1. **Faulty Requirement Definition:**\n   - *Explanation:* Requirements are erroneous, missing vital details, incomplete, or contain conflicting statements.\n   - *Example:* An SRS specifies \"the system must be fast and responsive\" without defining millisecond throughput or concurrent user thresholds.\n\n2. **Client–Developer Communication Failures:**\n   - *Explanation:* Oral or written misunderstandings between the customer and developers regarding business rules.\n   - *Example:* Client requests a monthly summary of \"all customers\" meaning active customers with recent purchases, but developers pull all archived historical records.\n\n3. **Deliberate Deviation from Software Requirements:**\n   - *Explanation:* Developers intentionally cut corners to meet deadlines, save effort, or implement unapproved \"improvements\".\n   - *Example:* A programmer reuses an existing legacy login module with MD5 hashing instead of implementing the contractually mandated AES-256 multi-factor authentication.\n\n4. **Logical Design Errors:**\n   - *Explanation:* System architects or engineers specify erroneous algorithms, incorrect boundary conditions, or omit system states.\n   - *Example:* An e-commerce discount algorithm allows cart balance to drop below $0.00, resulting in the company paying the customer.\n\n5. **Coding Errors:**\n   - *Explanation:* Syntax and logic mistakes made by programmers due to language quirks, off-by-one errors, or CASE tool misuse.\n   - *Example:* Using `<` instead of `<=` in array loops, leading to `IndexOutOfBoundsException` or skipping the final transaction.\n\n6. **Non-Compliance with Documentation and Coding Instructions:**\n   - *Explanation:* Team members fail to adhere to coding standards, naming conventions, or documentation protocols.\n   - *Example:* Mixing camelCase, PascalCase, and snake_case across modules, causing integration mismatches and making maintenance costly.\n\n7. **Shortcomings of the Testing Process:**\n   - *Explanation:* Incomplete test plans, testing only the happy path, neglecting boundary values, or failing to verify bug fixes.\n   - *Example:* Testing an ATM withdrawal only for valid balances, omitting tests for empty card slots, network timeouts, and zero cash dispensers.\n\n8. **Procedure Errors:**\n   - *Explanation:* Inaccurate or confusing instructions for operating the software during routine tasks or recovery.\n   - *Example:* The disaster recovery guide directs the operator to press F5 to abort, when F5 actually initiates permanent database wiping.\n\n9. **Documentation Errors:**\n   - *Explanation:* Omission of vital functions in user manuals, inaccurate error code explanations, or listing deprecated features.\n   - *Example:* The API reference manual documents endpoints that were removed in version 2.0, causing client integration failures.",
              keyPoints: [
                "1. Faulty requirements", "2. Communication failures", "3. Deliberate deviations",
                "4. Logical design errors", "5. Coding errors", "6. Non-compliance with standards",
                "7. Testing shortcomings", "8. Procedure errors", "9. Documentation errors"
              ]
            }
          ]
        },
        {
          id: "b2",
          number: "Question B2",
          title: "McCall's Factor Model & Alternative Models",
          marks: 15,
          subQuestions: [
            {
              id: "b2-1",
              label: "a",
              marks: 15,
              question: "Describe McCall's software quality factor model, listing all 11 factors under their 3 categories. Contrast with Evans & Marciniak and Deutsch & Willis alternative models. [15 marks]",
              answer: "### McCall's Software Quality Factor Model (1977)\n\nMcCall organizes software quality into **3 operational categories** containing **11 factors**:\n\n#### 1. Product Operation (Day-to-day functional performance)\n1. **Correctness:** The extent to which software meets its specification and fulfils user mission objectives (accuracy, completeness, availability).\n2. **Reliability:** The probability of failure-free operation under specified conditions over a given time interval (MTBF, failure rate).\n3. **Efficiency:** The volume of computing hardware resources (CPU, RAM, bandwidth) required to perform functions.\n4. **Integrity:** The capability to control and restrict unauthorized access to software functions and confidential data.\n5. **Usability:** The effort required for users to learn, prepare inputs for, and operate the system.\n\n#### 2. Product Revision (Ease of maintenance and adaptation)\n6. **Maintainability:** The effort required to identify, isolate, and repair defects in operational software.\n7. **Flexibility:** The ease of modifying software to accommodate new features or changing requirements.\n8. **Testability:** The effort required to verify that software satisfies requirements and performs without error.\n\n#### 3. Product Transition (Ease of adaptation to new environments)\n9. **Portability:** The ease of transferring the software from one hardware/OS platform to another.\n10. **Reusability:** The extent to which software components can be utilized in new software projects.\n11. **Interoperability:** The effort required to couple software modules with external applications or firmware.\n\n---\n\n#### Alternative Software Quality Models:\n- **Evans & Marciniak (1987) — 12 Factors:**\n  - Excluded *Testability*.\n  - Added **Verifiability** (architectural simplicity and modularity to facilitate verification) and **Expandability** (capacity to scale storage and processing).\n- **Deutsch & Willis (1988) — 15 Factors:**\n  - Excluded *Testability*.\n  - Included *Verifiability* and *Expandability*.\n  - Added **Safety** (preventing hazardous conditions in safety-critical systems), **Manageability** (administrative tools supporting change control), and **Survivability** (graceful degradation and rapid recovery after partial failures).",
              keyPoints: [
                "Product Operation: Correctness, Reliability, Efficiency, Integrity, Usability",
                "Product Revision: Maintainability, Flexibility, Testability",
                "Product Transition: Portability, Reusability, Interoperability",
                "Evans & Marciniak: Added Verifiability, Expandability; removed Testability",
                "Deutsch & Willis: Added Safety, Manageability, Survivability"
              ],
              diagramType: "mccall-tree"
            }
          ]
        },
        {
          id: "b3",
          number: "Question B3",
          title: "Defect Removal Model Calculation & Analysis",
          marks: 15,
          subQuestions: [
            {
              id: "b3-1",
              label: "a",
              marks: 15,
              question: "Explain the defect removal effectiveness and cost model. Calculate the total removal cost (TRC) for the following project scenario: [15 marks]\n\nGiven QA Activities & Costs:\n- Requirements Specification Review (RSR): 60% effectiveness, Cost 1\n- Design Inspection (DI): 50% effectiveness, Cost 5\n- Code Inspection (CIUT): 40% effectiveness, Cost 10\n- Code Unit Test (CUT): 20% effectiveness, Cost 10\n- Integration Test (IST): 30% effectiveness, Cost 20\n- Operation Phase Detection (OPD): 100% effectiveness, Cost 40\n\nDefects Injected:\n- Requirements: 15\n- Design: 35\n- Code: 30\n- Integration: 10\n- Operation: 10",
              answer: "### Defect Removal Effectiveness and Cost Model Solution\n\n#### Model Formulas:\nTotal Defects Entering Phase = Phase Originated Defects (POD) + Passed Defects (PD)\nRemoved Defects (RD) = Total In × % Filtering Effectiveness (%FE)\nPassed Defects Forward (PD) = Total In - RD\nTotal Removal Cost (TRC) = RD × Cost of Defect Removal (CDR)\n\n---\n\n#### Phase-by-Phase Calculation:\n\n1. **Phase 1: Requirements Specification Review (RSR)**\n   - POD = 15, PD = 0 → Total In = 15\n   - RD = 15 × 0.60 = 9\n   - PD = 15 - 9 = 6\n   - TRC = 9 × 1 = 9\n\n2. **Phase 2: Design Inspection (DI)**\n   - POD = 35, PD = 6 → Total In = 41\n   - RD = 41 × 0.50 = 20.5\n   - PD = 41 - 20.5 = 20.5\n   - TRC = 20.5 × 5 = 102.5\n\n3. **Phase 3: Code Inspection (CIUT)**\n   - POD = 30, PD = 20.5 → Total In = 50.5\n   - RD = 50.5 × 0.40 = 20.2\n   - PD = 50.5 - 20.2 = 30.3\n   - TRC = 20.2 × 10 = 202.0\n\n4. **Phase 4: Code Unit Test (CUT)**\n   - POD = 0, PD = 30.3 → Total In = 30.3\n   - RD = 30.3 × 0.20 = 6.06\n   - PD = 30.3 - 6.06 = 24.24\n   - TRC = 6.06 × 10 = 60.6\n\n5. **Phase 5: Integration Test (IST)**\n   - POD = 10, PD = 24.24 → Total In = 34.24\n   - RD = 34.24 × 0.30 = 10.272\n   - PD = 34.24 - 10.272 = 23.968\n   - TRC = 10.272 × 20 = 205.44\n\n6. **Phase 6: Operation Phase Detection (OPD)**\n   - POD = 10, PD = 23.968 → Total In = 33.968\n   - RD = 33.968 × 1.00 = 33.968\n   - PD = 0\n   - TRC = 33.968 × 40 = 1358.72\n\n---\n\n#### Complete Summary Table:\n\n| Phase | POD | PD | Total In | %FE | RD | CDR | TRC |\n| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n| **RSR** | 15 | 0 | 15.000 | 60% | 9.000 | 1 | 9.00 |\n| **DI** | 35 | 6.000 | 41.000 | 50% | 20.500 | 5 | 102.50 |\n| **CIUT**| 30 | 20.500| 50.500 | 40% | 20.200 | 10 | 202.00 |\n| **CUT** | 0 | 30.300| 30.300 | 20% | 6.060 | 10 | 60.60 |\n| **IST** | 10 | 24.240| 34.240 | 30% | 10.272 | 20 | 205.44 |\n| **OPD** | 10 | 23.968| 33.968 | 100%| 33.968 | 40 | 1358.72|\n\n**TRC_total = 9 + 102.5 + 202 + 60.6 + 205.44 + 1358.72 = 1938.26 cost units**\n\n> **SQA Economic Insight:** Notice that **1358.72 out of 1938.26 (over 70%)** of the entire project quality budget is consumed in the Operation Phase alone, even though only 33.968 residual defects escaped! This proves Boehm's principle: finding defects early yields astronomical cost savings.",
              keyPoints: [
                "POD, PD, %FE, RD, CDR, TRC definitions",
                "RSR: RD=9, PD=6, TRC=9",
                "DI: RD=20.5, PD=20.5, TRC=102.5",
                "CIUT: RD=20.2, PD=30.3, TRC=202",
                "CUT: RD=6.06, PD=24.24, TRC=60.6",
                "IST: RD=10.272, PD=23.968, TRC=205.44",
                "OPD: RD=33.968, PD=0, TRC=1358.72",
                "Total TRC = 1938.26 cost units"
              ],
              diagramType: "defect-removal"
            }
          ]
        },
        {
          id: "b4",
          number: "Question B4",
          title: "Four Software Development Models Compared",
          marks: 15,
          subQuestions: [
            {
              id: "b4-1",
              label: "a",
              marks: 15,
              question: "Describe the four software development models discussed in Topic 7 and explain their differences in a summary table. [15 marks]",
              answer: "### Four Software Development Models (Topic 7)\n\n1. **Waterfall (Classic SDLC):**\n   - Linear-sequential engineering framework with distinct phases (Requirements → Design → Coding → Testing → Installation → Maintenance).\n   - Formal phase gates evaluate deliverables before proceeding.\n   - *Best For:* Stable, well-understood systems with strict contractual boundaries.\n\n2. **Prototyping Model:**\n   - Cyclic generation of rapid mockups evaluated directly by end users.\n   - *Advantages:* Shorter feedback loops, precise requirements elicitation, easy user comprehension.\n   - *Disadvantages:* Risk of diminished architectural flexibility and premature release of incomplete prototypes.\n   - *Best For:* Small-to-medium interactive applications with ambiguous client requirements.\n\n3. **Spiral Model:**\n   - Risk-driven iterative model where each spiral loop comprises four sectors: Planning, Risk Analysis/Resolution, Engineering, and Customer Evaluation.\n   - *Boehm's Win-Win Spiral (1998):* Introduces structured negotiation to ensure the customer is satisfied while developer constraints (budget, timeline) are protected.\n   - *Best For:* Large, complex, high-risk aerospace and mission-critical systems.\n\n4. **Object-Oriented Component-Based Model:**\n   - Emphasizes assembling systems from pre-verified, reusable software component libraries.\n   - *Advantages:* Rapid delivery, reduced defect rates (components are already tested), low maintenance overhead.\n   - *Best For:* Enterprise applications with strong modularity and existing repository libraries.\n\n---\n\n#### Comparative Model Summary Table:\n\n| Model | Core Paradigm | Best Suited For | Key Engineering Feature |\n| :--- | :--- | :--- | :--- |\n| **Waterfall** | Linear sequential | Stable, fully documented requirements | Phase-by-phase review gates |\n| **Prototyping** | Iterative user-driven | Unclear UI and user interaction needs | Rapid tangible user feedback |\n| **Spiral** | Iterative risk-driven | Large, complex, safety-critical projects | Explicit risk assessment in every cycle |\n| **Object-Oriented** | Component reuse | Enterprise systems with modular architecture | Assembly of pre-tested components |",
              keyPoints: [
                "Waterfall: Linear sequential, phase-by-phase review, stable requirements",
                "Prototyping: Iterative, user feedback, rapid mockups, good for ambiguous UI",
                "Spiral: Risk-driven, iterative, Boehm Win-Win negotiation, complex projects",
                "Object-Oriented: Component-based, reuse of pre-tested libraries, cost efficient"
              ],
              diagramType: "prototyping"
            }
          ]
        },
        {
          id: "b5",
          number: "Question B5",
          title: "The SQA Role in Reviews & Formal Design Reviews",
          marks: 15,
          subQuestions: [
            {
              id: "b5-1",
              label: "a",
              marks: 15,
              question: "Discuss the SQA role in reviews and describe the complete formal design review (FDR) process. [15 marks]",
              answer: "### SQA Role in Reviews and the FDR Process\n\n#### 1. SQA Role in Reviews\nSQA acts in four essential capacities during review activities:\n- **Quality Gatekeeper:** Enforces entry and exit criteria; verifies that work products meet standards before passing downstream.\n- **Process Auditor:** Ensures review guidelines, timing, roles, and checklists are rigorously adhered to without deviation.\n- **Independent Evaluator:** Provides impartial technical oversight, challenging unwarranted assumptions and ensuring traceability.\n- **Customer's Internal Representative:** Verifies that customer needs, contractual clauses, and usability requirements are defended.\n\n**SQA Responsibilities:**\n1. *Planning:* Formulating the review schedule, appointing qualified participants, and establishing criteria.\n2. *Supervision:* Overseeing review sessions to maintain constructive focus and role adherence.\n3. *Documentation:* Verifying formal logging, defect classification, and severity tracking.\n4. *Continuous Improvement:* Analyzing defect densities to improve development processes.\n\n---\n\n#### 2. The Formal Design Review (FDR) Process\nAn FDR is the only mandatory milestone review required to approve transition to the next development phase.\n\n- **Participants:**\n  - *Review Leader:* Senior engineer, external to the project team, with proven track record.\n  - *Review Team:* 3–5 members, majority external to project team, ensuring diversity of perspectives.\n- **Preparations:** Leader distributes design documents in advance; reviewers read materials and formulate comments using checklists; development team prepares concise presentation.\n- **Session Agenda:**\n  1. Brief presentation by development team.\n  2. In-depth comments and questions by reviewers.\n  3. Discussion of open items and risk analysis.\n  4. Committee verdict: **Full Approval**, **Partial Approval (with required rework)**, or **Denial/Re-review**.\n- **Post-Review:** Issue formal FDR report detailing summary, findings, assigned action items, responsible individuals, and verification deadlines.",
              keyPoints: [
                "SQA roles: Gatekeeper, process auditor, independent evaluator, customer representative",
                "FDR definition: Milestone review required for phase transition approval",
                "Participants: External senior leader, 3-5 member diverse team",
                "Outcomes: Full approval, partial approval with action items, or denial",
                "FDR report: Formal action items, owners, deadlines, and follow-up"
              ],
              diagramType: "formal-review"
            }
          ]
        },
        {
          id: "b6",
          number: "Question B6 (COMPULSORY)",
          title: "White Box Testing: Coverage, Flow Graphs & McCabe's Complexity",
          marks: 15,
          subQuestions: [
            {
              id: "b6-1",
              label: "a",
              marks: 15,
              question: "Explain white box testing in detail. Include path coverage vs line coverage, flow charts, program flow graphs, and McCabe's cyclomatic complexity. Calculate V(G) for the ITS taximeter module with E=21, N=17, P=5. [15 marks]",
              answer: "### White Box Testing (Structural / Glass Box Testing)\n\n#### 1. Definition and Core Concept\nWhite box testing takes into account the **internal mechanism, code structure, and logic paths** of a system or component (Topic 9). It investigates the correctness of internal data calculations and decision branching.\n- *Contrast:* Black box testing ignores internal logic and evaluates only input-to-output functional compliance.\n\n#### 2. Path Coverage vs Line Coverage\n\n| Aspect | Path Coverage | Line (Statement) Coverage |\n| :--- | :--- | :--- |\n| **Scope** | Tests **all possible execution paths** through the program | Tests **all code lines** at least once |\n| **Measurement** | % paths covered | % code lines executed |\n| **Advantage** | Comprehensive logical coverage; catches compound branch bugs | Far fewer test cases required; rapid execution |\n| **Disadvantage** | Practically impossible for complex modules due to combinatorial explosion | Leaves most combination paths and state transitions untested |\n| **ITS Taximeter Example** | Requires at least **24 test cases** | Requires at least **3 test cases** |\n\n#### 3. Flow Charts and Program Flow Graphs (PFG)\n- **Flow Chart:** Graphical representation using diamonds for conditional decisions and rectangles for sequential process blocks.\n- **Program Flow Graph:** Abstract representation consisting of **Nodes** (sequential code blocks) and **Edges** (transfer of control). Decision nodes have ≥ 2 outgoing edges.\n\n#### 4. McCabe's Cyclomatic Complexity Metrics\nMcCabe's metric V(G) defines the **upper bound on the number of linearly independent paths** needed to achieve complete branch/line coverage.\n\n**Three Mathematical Formulas:**\n1. V(G) = R (where R is the number of regions, including the outside unbounded region)\n2. V(G) = E - N + 2 (where E = edges, N = nodes)\n3. V(G) = P + 1 (where P = predicate / decision nodes with > 1 outgoing edge)\n\n#### 5. Calculation for the ITS Taximeter Module:\nGiven parameters for the ITS Taximeter:\n- Number of Regions (R) = 6\n- Number of Edges (E) = 21\n- Number of Nodes (N) = 17\n- Number of Decision Nodes (P) = 5 (Nodes 2, 5, 8, 11, 14)\n\n**Calculation:**\nV(G) = E - N + 2 = 21 - 17 + 2 = 6\nV(G) = P + 1 = 5 + 1 = 6\nV(G) = R = 6\n\n**Interpretation:**\n- The ITS Taximeter module has **exactly 6 linearly independent paths**.\n- The testing team must construct a minimum basis set of **6 independent test cases** to ensure every line and branch is exercised.\n- Complexity rating: 6 < 10, classified as **moderate complexity, low risk, and easily testable**.",
              keyPoints: [
                "White box definition: structural/glass box examining internal paths and logic",
                "Path coverage (24 test cases for ITS) vs Line coverage (3 test cases for ITS)",
                "Flowchart (diamonds/rectangles) vs Program Flow Graph (nodes/edges)",
                "Three formulas: V(G)=R, V(G)=E-N+2, V(G)=P+1",
                "Calculation: 21 - 17 + 2 = 6; 5 + 1 = 6; R = 6",
                "Result: 6 independent paths, moderate complexity"
              ],
              diagramType: "whitebox"
            }
          ]
        },
        {
          id: "b7",
          number: "Question B7",
          title: "Black Box Testing & Equivalence Class Partitioning (ECP)",
          marks: 15,
          subQuestions: [
            {
              id: "b7-1",
              label: "a",
              marks: 15,
              question: "Explain black box testing and Equivalence Class Partitioning (ECP). Demonstrate with the Golden Splash Swimming Centre ticket pricing system. [15 marks]",
              answer: "### Black Box Testing and Equivalence Class Partitioning (ECP)\n\n#### 1. Black Box Testing\nBlack box (functional) testing treats software as an opaque box, evaluating compliance with specified functional requirements strictly through input stimuli and observable outputs without inspecting internal code.\n\n#### 2. Equivalence Class Partitioning (ECP)\nECP is a primary black-box test design technique that divides the input domain into mutually exclusive partitions of equivalent data:\n- **Valid Equivalence Classes:** Contain legitimate values expected to produce valid outcomes.\n- **Invalid Equivalence Classes:** Contain illegitimate, out-of-range, or erroneous values expected to trigger error handling.\n- **Heuristic:** If one test value in an equivalence class passes/fails, all other values in that same class will behave identically.\n\n---\n\n#### 3. Golden Splash Swimming Centre Case Study\nTicket pricing depends on four input variables:\n1. **Day of week:** Weekday (Mon–Fri) vs Weekend (Sat, Sun).\n2. **Visitor status:** One-Time visitor (OT) vs Member (M).\n3. **Entry hour:** Regular hours (06:00–19:00) vs Evening hours (19:01–24:00).\n4. **Visitor age:** Child (0–16.00), Adult (16.01–60.00), Senior (60.01–120.00).\n\n#### Equivalence Classes Table:\n\n| Variable | Valid Equivalence Classes | Representing Value | Boundary Values | Invalid Equivalence Classes | Representing Value |\n| :--- | :--- | :--- | :--- | :--- | :--- |\n| **Day of Week** | (1) Mon–Fri<br/>(2) Sat, Sun | Wednesday<br/>Saturday | Friday, Monday<br/>Sunday | Any alphanumeric non-day | \"Mox\", \"13\" |\n| **Visitor Status**| (1) OT (One-time)<br/>(2) M (Member) | OT<br/>M | N/A | Non-existing status code | \"88\", \"VIP\" |\n| **Entry Hour** | (1) 06.00–19.00<br/>(2) 19.01–24.00 | 11:30<br/>21:15 | 06:00, 19:00<br/>19:01, 24:00 | Hours < 06:00 or > 24:00<br/>Non-time string | 04:30, 25:00<br/>\"@\" |\n| **Visitor Age** | (1) 0.00–16.00<br/>(2) 16.01–60.00<br/>(3) 60.01–120.00 | 8.4 years<br/>42.7 years<br/>65.0 years | 0.0, 16.0<br/>16.01, 60.0<br/>60.01, 120.0 | Negative age (< 0)<br/>Age > 120<br/>Non-numeric string | -5<br/>150.1<br/>\"TTR\" |\n\n> **Testing Strategy:** Test cases are formed by selecting representing values from every valid equivalence class and boundary values on partition edges (16.00, 16.01, 60.00, 60.01), along with one test case per invalid class to verify exception handling.",
              keyPoints: [
                "Black box testing ignores internal logic, tests requirements",
                "ECP divides input domain into valid and invalid partitions",
                "One test represents the entire equivalence class",
                "Golden Splash variables: Day, Status, Entry Hour, Age",
                "Complete ECP table with valid, invalid, representing, and boundary values"
              ]
            }
          ]
        }
      ]
    }
  ]
};
