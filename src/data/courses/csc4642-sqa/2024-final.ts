import { Paper } from "@/types";

export const csc4642_2024Final: Paper = {
  id: "csc4642-2024-final",
  slug: "2024-final",
  title: "2024 Final Examination",
  year: 2024,
  duration: "3 Hours",
  totalMarks: 100,
  paperType: "Final Exam",
  venue: "NSLT",
  sections: [
    {
      id: "section-a",
      name: "Section A: Compulsory",
      instructions: "Answer ALL questions in this section (40 Marks).",
      compulsory: true,
      questions: [
        {
          id: "q1",
          number: "Question 1",
          title: "McCall Factor Model Metrics & Alternative Models",
          marks: 20,
          subQuestions: [
            {
              id: "q1-1",
              label: "1",
              marks: 15,
              question: "Based on the McCall Factor Model, state the quality factor best measured by each metric below: [15 marks]\na. Average time taken to fix a defect or issue.\nb. Number of user errors per task completed.\nc. Time taken for the system to respond to a user's request.\nd. Number of defects per size of the software (e.g., per 1,000 lines of code).\ne. Number of transactions processed in a given time frame.\nf. The percentage of test cases that pass during testing phases.\ng. Measurement of CPU, memory, and disk usage during operation.\nh. Average time between failures of the software.\ni. Count of unauthorised access attempts or breaches.\nj. Number of failures per time unit.\nk. Percentage of actions logged versus total actions taken by users.\nl. Count of configurable settings available to users.\nm. The percentage of time the software is operational and accessible.\nn. Average time taken by users to complete specific tasks.\no. Average time taken to implement changes in requirements.",
              answer: "a) **Maintainability** — Effort required to locate and fix an error in an operational program.\nb) **Usability** — Effort required to learn, operate, prepare input, and interpret output.\nc) **Correctness** (Availability dimension) — Acceptable reaction time.\nd) **Reliability** — Extent to which program performs without failure; failure rate.\ne) **Efficiency** — Amount of computing resources and code required to perform a function.\nf) **Testability** — Effort required to test a program to ensure intended function.\ng) **Efficiency** — Hardware resource consumption (CPU, memory, disk).\nh) **Reliability** — Mean Time Between Failures (MTBF).\ni) **Integrity** — Extent to which access by unauthorised persons can be controlled.\nj) **Reliability** — Maximum allowed software system failure rate.\nk) **Integrity** — Access audit and activity logging.\nl) **Flexibility** — Effort required to modify an operational program / configurability.\nm) **Correctness** (Availability dimension) — Uptime / accessibility percentage.\nn) **Usability** — Operability / effort required to complete tasks.\no) **Flexibility** — Effort to implement adaptive requirement changes.",
              keyPoints: [
                "a. Maintainability", "b. Usability", "c. Correctness",
                "d. Reliability", "e. Efficiency", "f. Testability",
                "g. Efficiency", "h. Reliability", "i. Integrity",
                "j. Reliability", "k. Integrity", "l. Flexibility",
                "m. Correctness", "n. Usability", "o. Flexibility"
              ],
              diagramType: "mccall-tree"
            },
            {
              id: "q1-2",
              label: "2",
              marks: 5,
              question: "Two other models for SQ factors are the Evans and Marciniak and the Deutsch and Willis models. List the five new quality factors introduced by both models. [5 marks]",
              answer: "1. **Verifiability** (Introduced by both models)\n2. **Expandability** (Introduced by both models)\n3. **Safety** (Introduced by Deutsch & Willis)\n4. **Manageability** (Introduced by Deutsch & Willis)\n5. **Survivability** (Introduced by Deutsch & Willis)",
              keyPoints: [
                "Verifiability: verifies verification procedures are in place",
                "Expandability: ease of expanding software storage or functions",
                "Safety: hazards prevention in safety-critical systems",
                "Manageability: administrative and management control features",
                "Survivability: continuity of service after heavy damage/cyberattack"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "section-b",
      name: "Section B: Essay Questions",
      instructions: "Answer any THREE (3) questions (60 Marks).",
      compulsory: false,
      questions: [
        {
          id: "q2",
          number: "Question 2",
          title: "Software Uniqueness, Environment & SQA Objectives",
          marks: 20,
          subQuestions: [
            {
              id: "q2-1a",
              label: "1a",
              marks: 6,
              question: "There are three major differences between software products and other industrial products. Identify and describe the differences. [6 marks]",
              answer: "1. **High Complexity:** Software products allow millions of operational paths; industrial products have at most a few thousand operational options.\n2. **Invisibility of the Product:** Software cannot be inspected by sight or touch to detect defects or omissions. Industrial products are physical and visible.\n3. **Limited Defect Detection Opportunities:** Opportunities to detect software bugs are limited exclusively to the development phase. Industrial products can be inspected across development, production planning, and manufacturing stages."
            },
            {
              id: "q2-1b",
              label: "1b",
              marks: 3,
              question: "State the way in which each difference from (a) affects SQA. [3 marks]",
              answer: "1. **Complexity → Systematic Testing:** Exhaustive testing is impossible; SQA must use systematic sampling techniques like path coverage, equivalence class partitioning, and boundary value analysis.\n2. **Invisibility → Execution & Formal Reviews:** Defects cannot be seen visually, so SQA must rely on dynamic execution testing and formal peer document reviews/inspections.\n3. **Limited Detection → Shift-Left Lifecycle Integration:** Because defects cannot be fixed on a physical assembly line, SQA activities must be integrated into every single development phase (shift-left philosophy)."
            },
            {
              id: "q2-2",
              label: "2",
              marks: 7,
              question: "Seven issues characterise the professional software development and maintenance environment. Identify these characteristics. [7 marks]",
              answer: "1. **Being Contracted:** Strict budget, timeline, and functional deliverables.\n2. **Customer-Supplier Relationship:** Working across organizational boundaries.\n3. **Requirement for Teamwork:** Work overload and specialized skill segregation.\n4. **Cooperation with Other Development Teams:** Parallel team alignment.\n5. **Need for System Interfaces:** Interoperating with other software/hardware systems.\n6. **Project Continuity during Team Turnover:** Staff transitions and onboarding.\n7. **Long-Term Maintenance:** Supporting the system for years after initial deployment."
            },
            {
              id: "q2-3",
              label: "3",
              marks: 4,
              question: "Explain the objectives of software quality assurance activities. [4 marks]",
              answer: "**Process-Oriented (Development Phase):**\n1. Assuring acceptable confidence that software conforms to functional and technical requirements.\n2. Assuring acceptable confidence that software conforms to managerial schedule and budget requirements.\n3. Initiating and managing continuous process improvement for higher development efficiency.\n\n**Product-Oriented (Maintenance Phase):**\n4. Assuring maintenance activities conform to technical, schedule, and budget constraints while enhancing long-term operational quality."
            }
          ]
        },
        {
          id: "q3",
          number: "Question 3",
          title: "Software Components, Error Taxonomy & Root Causes",
          marks: 20,
          subQuestions: [
            {
              id: "q3-1a",
              label: "1a",
              marks: 2,
              question: "A software system comprises four main components. Identify the four components of a software system. [2 marks]",
              answer: "1. Computer programs ('Code')\n2. Procedures\n3. Documentation\n4. Data"
            },
            {
              id: "q3-1b",
              label: "1b",
              marks: 6,
              question: "Explain how the quality of each component contributes to the quality of the developed software. [6 marks]",
              answer: "- **Code:** Must be correct, efficient, readable, and maintainable. Buggy code triggers system faults and failures.\n- **Procedures:** Must be clear, complete, and followed. Faulty user or operational procedures cause correct code to produce incorrect results.\n- **Documentation:** Must be accurate, clear, and up-to-date. Inaccurate documentation leads to user mistakes, configuration errors, and maintenance defects.\n- **Data:** Must be valid, accurate, and correctly structured. Corrupt or unvalidated inputs lead to garbage-in, garbage-out regardless of code quality."
            },
            {
              id: "q3-2",
              label: "2",
              marks: 3,
              question: "Distinguish among software error, software fault and software failure. [3 marks]",
              answer: "- **Software Error:** A human mistake (action or omission) by a developer, analyst, or designer that produces an incorrect artifact.\n- **Software Fault (Defect):** A static flaw in code or documentation resulting from an error. A fault may remain dormant indefinitely if the flawed code path is never executed.\n- **Software Failure:** A dynamic disruption during execution when a fault is activated by operational input.",
              diagramType: "error-chain"
            },
            {
              id: "q3-3a",
              label: "3a",
              marks: 3,
              question: "The faulty definition of requirements is one of the main causes of software errors. Identify three of the most common errors of this type. [3 marks]",
              answer: "1. Erroneous definition of requirements (inaccurate logic).\n2. Absence of vital requirements (omissions).\n3. Incomplete definition of requirements (missing edge cases or boundary criteria)."
            },
            {
              id: "q3-3b",
              label: "3b",
              marks: 2,
              question: "Identify the group(s) responsible for this type of error. [2 marks]",
              answer: "The client, customer representatives, and systems analysts responsible for eliciting, clarifying, and preparing the requirement definition document."
            },
            {
              id: "q3-4a",
              label: "4a",
              marks: 2,
              question: "Documentation errors are one of the main causes of software errors. Identify two of the most common errors of this type. [2 marks]",
              answer: "1. Omission of software functions from manuals and help files.\n2. Errors in instructions and explanations that lead users into dead ends or unintended states."
            },
            {
              id: "q3-4b",
              label: "4b",
              marks: 2,
              question: "Identify the group(s) responsible for this type of error. [2 marks]",
              answer: "Technical writers, documentation specialists, systems analysts, and developers."
            }
          ]
        },
        {
          id: "q4",
          number: "Question 4",
          title: "Contract Review & Proposal Evaluation",
          marks: 20,
          subQuestions: [
            {
              id: "q4-1",
              label: "1",
              marks: 10,
              question: "The objective of the proposal draft review is to make sure that a number of important activities have been satisfactorily carried out. Describe any five activities that need to be 'satisfactorily carried out'. [10 marks]",
              answer: "1. **Customer requirements clarified and documented:** Resolve ambiguities in the RFP and establish approved baseline requirements.\n2. **Alternative development approaches examined:** Evaluate off-the-shelf software, code reuse, partnerships, or subcontracting.\n3. **Formal aspects of the relationship specified:** Define communication protocols, milestones, acceptance criteria, and change control procedures.\n4. **Development risks identified and managed:** Assess technology risks, skill deficiencies, and schedule bottlenecks.\n5. **Adequate estimation of resources and timetable prepared:** Realistic staff effort, hardware/tool costs, and buffer scheduling."
            },
            {
              id: "q4-2a",
              label: "2a",
              marks: 4,
              question: "Describe two advantages of employing outsiders compared with insiders for a proposal draft review. [4 marks]",
              answer: "1. **Objectivity and Unbiased Assessment:** External reviewers have no political or emotional stake in winning or defending the proposal.\n2. **Specialized Niche Expertise:** Outsiders bring deep domain experience in specialized legal, compliance, or architecture standards."
            },
            {
              id: "q4-2b",
              label: "2b",
              marks: 4,
              question: "Describe two disadvantages of employing outsiders compared with insiders for a proposal draft review. [4 marks]",
              answer: "1. **Lack of Contextual and Organizational Knowledge:** Outsiders do not understand the internal team strengths, history, or company culture.\n2. **Higher Financial Cost and Scheduling Delay:** Outsider consultants require substantial fees and onboarding lead time."
            },
            {
              id: "q4-3",
              label: "3",
              marks: 2,
              question: "Project technical complexity impacts the extent of the contract review effort. What are the aspects that define 'Project technical complexity'? [2 marks]",
              answer: "1. Number of technologies and platforms integrated.\n2. Team familiarity with chosen technologies.\n3. Cutting-edge/novel technology vs. proven mature stacks.\n4. Number and nature of external interfaces."
            }
          ]
        },
        {
          id: "q5",
          number: "Question 5",
          title: "Defect Removal Model & Calculation Plan",
          marks: 20,
          subQuestions: [
            {
              id: "q5-1",
              label: "1",
              marks: 6,
              question: "Referring to the model for defect removal efficiency and costs, explain the six assumptions that rest at the foundations of the model. [6 marks]",
              answer: "1. **Linear Sequential Process:** Development follows a sequential waterfall model.\n2. **Phase-Introduced Defects:** A specific number of new defects originate in each development phase (POD).\n3. **QA Activities Act as Filters:** Quality gates remove a percentage (%FE) of entering defects and let the rest escape.\n4. **Incoming Defects Formula:** Entering defects = New defects (POD) + Passed defects from former phase (PD).\n5. **Cost Calculation:** Removal cost = Removed defects (RD) × Cost of Defect Removal (CDR).\n6. **Customer Detection:** All unremoved defects reaching operational release are discovered by the customer at peak penalty cost."
            },
            {
              id: "q5-2",
              label: "2",
              marks: 14,
              question: "Show the process-oriented illustration of the comprehensive plan for removing 100 defects that are spread across development phases as follows: POD: Req=15, Design=35, Code=30, Integration=10, Operation=10. Activity %FE and CDR: RSR (50%, cost 1), Design Review (50%, cost 2.5), Unit Test (50%, cost 6.5), Integration Test (50%, cost 16), Doc Review (50%, cost 16), System Test (50%, cost 40), Operation (100%, cost 110). [14 marks]",
              answer: "### Defect Removal Table\n\n| Phase | POD | PD | Total Entering | %FE | RD (Removed) | Escaped (PD to next) | CDR | Total Removal Cost (TRC) |\n|---|---|---|---|---|---|---|---|---|\n| **Req. Spec Review** | 15 | 0 | 15 | 50% | 7.5 | 7.5 | 1 | 7.5 |\n| **Design Review** | 35 | 7.5 | 42.5 | 50% | 21.25 | 21.25 | 2.5 | 53.125 |\n| **Unit Test (Code)** | 30 | 21.25 | 51.25 | 50% | 25.625 | 25.625 | 6.5 | 166.5625 |\n| **Integration Test** | 10 | 25.625 | 35.625 | 50% | 17.8125 | 17.8125 | 16 | 285.0000 |\n| **Doc Review** | 10 | 17.8125 | 27.8125 | 50% | 13.90625 | 13.90625 | 16 | 222.5000 |\n| **System Test** | 0 | 13.90625 | 13.90625 | 50% | 6.953125 | 6.953125 | 40 | 278.1250 |\n| **Operation** | 0 | 6.953125 | 6.953125 | 100% | 6.953125 | 0 | 110 | 764.84375 |\n| **TOTAL** | **100** | — | — | — | **100** | **0** | — | **1,777.65625** |\n\n**Total Defect Removal Cost = 1,777.65625 cost units.**",
              diagramType: "defect-removal"
            }
          ]
        },
        {
          id: "q6",
          number: "Question 6",
          title: "Defect Removal Model Verification & Analysis",
          marks: 20,
          subQuestions: [
            {
              id: "q6-1",
              label: "1",
              marks: 6,
              question: "Referring to the model for defect removal efficiency and costs, explain the six assumptions that rest at the foundations of the model. [6 marks]",
              answer: "1. Development is sequential (waterfall).\n2. New defects originate in each development phase.\n3. Quality assurance activities act as defect filters.\n4. Incoming defects equal accumulated passed defects plus phase-originated defects.\n5. Defect removal cost is proportional to the phase-specific removal unit cost.\n6. Residual defects escape to the customer and are 100% detected during operations."
            },
            {
              id: "q6-2",
              label: "2",
              marks: 14,
              question: "Show the process-oriented illustration of the comprehensive plan for removing 100 defects. [14 marks]",
              answer: "Applying the sequential filtering formula:\n\n1. **Req Spec Review:** POD=15, In=15, 50% removed = 7.5 defects. Cost = 7.5 × 1 = **7.5**.\n2. **Design Review:** POD=35, In=35+7.5=42.5. 50% removed = 21.25. Cost = 21.25 × 2.5 = **53.125**.\n3. **Unit Test:** POD=30, In=30+21.25=51.25. 50% removed = 25.625. Cost = 25.625 × 6.5 = **166.5625**.\n4. **Integration Test:** POD=10, In=10+25.625=35.625. 50% removed = 17.8125. Cost = 17.8125 × 16 = **285.00**.\n5. **Doc Review:** POD=10, In=10+17.8125=27.8125. 50% removed = 13.90625. Cost = 13.90625 × 16 = **222.50**.\n6. **System Test:** POD=0, In=13.90625. 50% removed = 6.953125. Cost = 6.953125 × 40 = **278.125**.\n7. **Operation:** POD=0, In=6.953125. 100% removed = 6.953125. Cost = 6.953125 × 110 = **764.84375**.\n\n**Total Defect Removal Cost = 1,777.65625 cost units.**",
              diagramType: "defect-removal"
            }
          ]
        },
        {
          id: "q7",
          number: "Question 7",
          title: "Formal Design Reviews, Peer Reviews & Process Flow",
          marks: 20,
          subQuestions: [
            {
              id: "q7-1a",
              label: "1a",
              marks: 3,
              question: "In what aspects are design reviews more formal than inspections? [3 marks]",
              answer: "Design reviews are formal contractual phase-gate approvals. They involve a formal presentation by the development team to a multi-stakeholder committee (senior technical leads, project managers, customer reps) who hold sole authority to grant **Full Approval**, **Partial Approval**, or **Denial of Approval** to advance. Inspections are internal peer reviews with no authority to halt or advance contractual phase gates."
            },
            {
              id: "q7-1b",
              label: "1b",
              marks: 3,
              question: "In what aspects are inspections more formal than walkthroughs? [3 marks]",
              answer: "Inspections follow a structured protocol with fixed assigned roles (Moderator, Reader, Recorder, Inspector) and comprehensive checklists. Walkthroughs are informal, unplanned sessions organized by the author, where the author reads the product and colleagues provide informal feedback without a moderator."
            },
            {
              id: "q7-2",
              label: "2",
              marks: 14,
              question: "Draw and describe the process flow of performing a formal design review, including roles and responsibilities. [14 marks]",
              answer: "### 1. Preparation Phase\n- **Review Leader:** Appoints 3-5 committee members, distributes design documents in advance, sets agenda.\n- **Review Team:** Reviews documents individually against checklists, compiles comments.\n- **Development Team:** Prepares a concise technical presentation addressing key architectural issues.\n\n### 2. Design Review Session\n- Presentation of design by Dev Team.\n- Discussion of defect list and technical solutions.\n- Committee votes on formal verdict: **Full Approval**, **Partial Approval**, or **Denial**.\n\n### 3. Post-Review & Follow-up\n- Review Leader publishes formal DR Report with assigned correction tasks and deadlines.\n- Development Team executes corrective action items.\n- Review Leader / assigned inspector verifies completion before project phase advance.",
              diagramType: "formal-review"
            }
          ]
        }
      ]
    }
  ]
};
