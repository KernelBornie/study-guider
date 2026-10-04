import { Paper } from "@/types";

export const csc4642_2023Final: Paper = {
  id: "csc4642-2023-final",
  slug: "2023-final",
  title: "2023 Final Examination",
  year: 2023,
  duration: "3 Hours",
  totalMarks: 100,
  paperType: "Final Exam",
  sections: [
    {
      id: "section-a",
      name: "Questions (Answer any FIVE)",
      instructions: "Answer any FIVE (5) questions (20 Marks each = 100 Marks).",
      compulsory: false,
      questions: [
        {
          id: "2023-q1",
          number: "Question 1",
          title: "Software Differences & Professional Environment",
          marks: 20,
          subQuestions: [
            {
              id: "2023-q1-1a",
              label: "1a",
              marks: 6,
              question: "There are three major differences between software products and other industrial products. Identify and describe the differences. [6 marks]",
              answer: "1. **High Complexity:** Software allows millions of operational paths and combinations. Industrial products have far lower complexity (at most a few thousand operational states).\n2. **Invisibility of the Product:** Software is abstract and intangible; defects cannot be detected visually or physically. Industrial products are physical and defects are visually identifiable.\n3. **Limited Defect Detection Opportunities:** Detection is confined solely to the development process. For industrial products, defect detection opportunities occur in design, production planning, and manufacturing lines."
            },
            {
              id: "2023-q1-1b",
              label: "1b",
              marks: 4,
              question: "Discuss the ways in which these differences affect SQA. [4 marks]",
              answer: "1. **Complexity:** Requires systematic sampling methods like Equivalence Class Partitioning and Boundary Value Analysis rather than brute-force testing.\n2. **Invisibility:** Forces SQA to focus on comprehensive code reviews, inspections, and formal document validations.\n3. **Limited Defect Detection:** SQA must be proactive across all early phases (shift-left) because there is no manufacturing line later to intercept defects."
            },
            {
              id: "2023-q1-2",
              label: "2",
              marks: 7,
              question: "Seven issues characterise the professional software development and maintenance environment. Identify these characteristics. [7 marks]",
              answer: "1. Being contracted – governed by strict budgets, timelines, and legal commitments.\n2. Subjection to customer-supplier relationship dynamics.\n3. Requirement for teamwork – workload distribution and specialty pooling.\n4. Need for cooperation and coordination with other development teams.\n5. Need for interfaces with external software and hardware systems.\n6. Need to maintain project continuity amidst staff turnover.\n7. Need to continue maintaining and supporting the system over years."
            },
            {
              id: "2023-q1-3",
              label: "3",
              marks: 3,
              question: "It is claimed that no significant SQA activities are expected to take place during the phase of production planning for software products. Discuss this claim. [3 marks]",
              answer: "This claim is **valid**. Unlike physical industrial goods where 'production' involves tooling, stamping, and assembly lines requiring extensive QA, software 'production' is merely bit replication (copying code onto media or deploying to servers). Therefore, manufacturing SQA is virtually nonexistent in software—all substantial quality activities must be concentrated in the development phase."
            }
          ]
        },
        {
          id: "2023-q2",
          number: "Question 2",
          title: "Software Components, Taxonomy & Causes of Errors",
          marks: 20,
          subQuestions: [
            {
              id: "2023-q2-1a",
              label: "1a",
              marks: 2,
              question: "A software system comprises four main components. List the four components of a software system. [2 marks]",
              answer: "1. Computer programs ('Code')\n2. Procedures\n3. Documentation\n4. Data"
            },
            {
              id: "2023-q2-1b",
              label: "1b",
              marks: 4,
              question: "Explain how the quality of each component contributes to the quality of the developed software. [4 marks]",
              answer: "- **Code:** Executes operational functions; bad code creates runtime faults.\n- **Procedures:** Prescribes rules for operation; wrong procedures cause operators to execute tasks wrongly.\n- **Documentation:** Guides configuration and maintenance; flawed documentation causes misuse.\n- **Data:** Input parameters and database records; corrupted data causes incorrect output regardless of code."
            },
            {
              id: "2023-q2-2",
              label: "2",
              marks: 6,
              question: "Define the following terms: [6 marks]\na. Software Error\nb. Software Fault\nc. Software Failure",
              answer: "- **a. Software Error:** A human mistake made by a programmer, analyst, or architect during software creation.\n- **b. Software Fault:** A flaw or bug in a document or code artifact resulting from an error.\n- **c. Software Failure:** The dynamic event where the software delivers an incorrect result or crashes because a fault was executed."
            },
            {
              id: "2023-q2-3",
              label: "3",
              marks: 8,
              question: "List and briefly describe the various causes of software errors. [8 marks]",
              answer: "1. **Faulty requirement definition:** Ambiguous, missing, or contradictory user requirements.\n2. **Client-developer communication failures:** Misunderstood requests and terminology clashes.\n3. **Deliberate deviations from requirements:** Developer bypassing specs to save time or add unrequested features.\n4. **Logical design errors:** Flawed algorithms, state loops, or edge-case handling.\n5. **Coding errors:** Syntax slips, boundary condition mistakes, and typos.\n6. **Non-compliance with documentation/coding instructions:** Violating standards.\n7. **Shortcomings of testing process:** Inadequate test coverage or unverified test results.\n8. **Procedure errors:** Incorrect installation, deployment, or recovery steps.\n9. **Documentation errors:** Incomplete user manuals or wrong configuration instructions."
            }
          ]
        },
        {
          id: "2023-q3",
          number: "Question 3",
          title: "McCall Quality Model & 18 Requirements Mapping",
          marks: 20,
          subQuestions: [
            {
              id: "2023-q3-1a",
              label: "1a",
              marks: 1.5,
              question: "Name the three (3) factor categories belonging to McCall's factor model. [1.5 marks]",
              answer: "1. **Product Operation**\n2. **Product Revision**\n3. **Product Transition**"
            },
            {
              id: "2023-q3-1b",
              label: "1b",
              marks: 5.5,
              question: "List the quality factors under each category from (a). [5.5 marks]",
              answer: "- **Product Operation (5 factors):** Correctness, Reliability, Efficiency, Integrity, Usability\n- **Product Revision (3 factors):** Maintainability, Flexibility, Testability\n- **Product Transition (3 factors):** Portability, Reusability, Interoperability",
              diagramType: "mccall-tree"
            },
            {
              id: "2023-q3-1c",
              label: "1c",
              marks: 3,
              question: "Name the other two alternative models for SQ factors. [3 marks]",
              answer: "1. **Evans & Marciniak Model (1987)** (12 factors)\n2. **Deutsch & Willis Model (1988)** (15 factors)"
            },
            {
              id: "2023-q3-2",
              label: "2",
              marks: 10,
              question: "Based on items from (b), state the quality factor that best fits each requirement below: [10 marks]",
              answer: "| # | Exam Requirement | Quality Factor |\n|---|---|---|\n| i | A new warehouse clerk shall be able to enter a customer order on the system within a typical 8-hour business day. | **Usability** |\n| ii | The software to be developed for use by the church management may be adapted later for private club use. | **Flexibility** |\n| iii | Web applications shall be developed to adhere to Hypertext Markup Language (HTML) guidelines and standards. | **Correctness** |\n| iv | The billing system shall be able to process invoices and payments in multiple different currencies. | **Interoperability** |\n| v | The data transmission process shall confirm the receiving terminal is in a ready state prior to the start of transmission. | **Reliability** |\n| vi | At least 20 percent of the processor capacity and storage space available to the system shall be unused at peak load seasonal periods. | **Efficiency** |\n| vii | Accuracy of warehouse temperature readings will be within plus or minus two degrees Celsius. | **Correctness** |\n| viii | The loan origination system shall perform all calculations with rounding to five (5) decimal places before rounding for presentation to two decimal places. | **Correctness** |\n| ix | The firmware of medical laboratory equipment is required to process its results according to a standard data structure that can then serve as input for a number of standard laboratory Information Systems. | **Interoperability** |\n| x | The account update process shall roll back all related updates when any update fails to commit. | **Reliability** |\n| xi | The baselined version 2 of the spreadsheet must be able to access information from the previous baselined version. | **Portability** |\n| xii | A new consumer type code must be able to be added to the product within 12 business hours. | **Maintainability** |\n| xiii | The system shall be developed for Microsoft Vista and Macintosh operating system platforms. | **Portability** |\n| xiv | Its heart attack detection function is required to have a failure rate of less than one per million cases. | **Reliability** |\n| xv | A staff member should be able to handle at least 60 service calls a day. | **Efficiency** |\n| xvi | The size of a SW module will not exceed 30 statements. | **Maintainability** |\n| xvii | Development of functionality to support the Electronic Funds Transfer (EFT) payment option shall be modularized. | **Verifiability** |\n| xviii | All SmartMeter systems will provide a standard interface that can be used by meter operators for installation and maintenance purposes without disturbing any meter seals and reinstating any tamper detection covers. | **Interoperability** |"
            }
          ]
        },
        {
          id: "2023-q4",
          number: "Question 4",
          title: "Contract Review & Internal Project Management",
          marks: 20,
          subQuestions: [
            {
              id: "2023-q4-1",
              label: "1",
              marks: 4,
              question: "Explain two (2) advantages and two (2) disadvantages of employing outsiders compared with insiders for a proposal draft review. [4 marks]",
              answer: "**Advantages:**\n1. **Unbiased Objectivity:** Free of internal politics, pressure, and confirmation bias.\n2. **Specialized Competency:** Brings rare niche expertise (security certifications, regulatory laws).\n\n**Disadvantages:**\n1. **Lack of Internal Context:** Unaware of existing code debt, team interpersonal dynamics, and tooling.\n2. **Financial Cost & Onboarding Delay:** Expensive consultancy rates and time needed to review background."
            },
            {
              id: "2023-q4-2a",
              label: "2a",
              marks: 4,
              question: "Explain four (4) benefits of full-scale development and quality plans to the internal developer. [4 marks]",
              answer: "1. Avoids losses from unrealistic timetables and under-budgeting.\n2. Protects firm's internal reputation and reduces conflicts with user departments.\n3. Better project visibility, coordination, and resource scheduling.\n4. Protects the development team from scope creep without formal change requests."
            },
            {
              id: "2023-q4-2b",
              label: "2b",
              marks: 4,
              question: "Explain four (4) benefits to internal customers. [4 marks]",
              answer: "1. Lower risk of late project completion and unexpected budget overruns.\n2. Clear visibility into development milestones and deliverables.\n3. Opportunity to provide early feedback during planned milestone reviews.\n4. Assurance of product quality and lower risk of disrupted business operations."
            },
            {
              id: "2023-q4-3",
              label: "3",
              marks: 8,
              question: "The project's organization is an important element of the development plan. List the four (4) components of the organization element and identify which are based on project mapping. [8 marks]",
              answer: "**Four Components:**\n1. Team structure, indicating leaders and hierarchy.\n2. Professional requirements and qualifications (certifications, required languages).\n3. Number of team members required for each period.\n4. Specific names of team leaders and team members assigned.\n\n**Derived from Project Mapping:**\n- **Component 3 (Staff count per period)** is directly calculated from scheduled activities and effort estimates.\n- **Component 1 (Team structure)** is mapped directly to development phases and activity breakdown."
            }
          ]
        },
        {
          id: "2023-q5",
          number: "Question 5",
          title: "Defect Removal Model Calculation & Peer Review Metrics",
          marks: 20,
          subQuestions: [
            {
              id: "2023-q5-1",
              label: "1",
              marks: 6,
              question: "Referring to the model for defect removal efficiency and costs: Outline the six (6) assumptions that rest at the foundations of the model. [6 marks]",
              answer: "1. Linear sequential (waterfall) progression.\n2. New defects originate in each development phase.\n3. Quality assurance activities act as filters with specific effectiveness rates.\n4. Incoming defects equal accumulated escaped defects plus new phase defects.\n5. Removal cost equals removed defects multiplied by unit defect removal cost.\n6. Escaped defects reaching the customer are completely detected in production."
            },
            {
              id: "2023-q5-2",
              label: "2",
              marks: 10,
              question: "Calculate the total defect removal cost for the 100-defect model: Activities: RSR (60%, cost 2), Design Inspection (70%, cost 3), Code Review (30%, cost 4), Code Inspection (20%, cost 5), CUT (60%, cost 10), IT (20%, cost 30), OPD (100%, cost 80). Defect distribution: Req=15, Design=35, Code=30, Integration=10, Operation=10. [10 marks]",
              answer: "### Defect Removal Table\n\n| Phase | POD | PD | Total Entering | %FE | RD (Removed) | Escaped (PD to next) | CDR | TRC |\n|---|---|---|---|---|---|---|---|---|\n| **RSR** | 15 | 0 | 15 | 60% | 9.000 | 6.000 | 2 | 18.000 |\n| **DI** | 35 | 6.000 | 41.000 | 70% | 28.700 | 12.300 | 3 | 86.100 |\n| **Code Review** | 30 | 12.300 | 42.300 | 30% | 12.690 | 29.610 | 4 | 50.760 |\n| **Code Inspect.** | 0 | 29.610 | 29.610 | 20% | 5.922 | 23.688 | 5 | 29.610 |\n| **CUT** | 0 | 23.688 | 23.688 | 60% | 14.2128 | 9.4752 | 10 | 142.128 |\n| **IT** | 10 | 9.4752 | 19.4752 | 20% | 3.89504 | 15.58016 | 30 | 116.8512 |\n| **OPD** | 10 | 15.58016 | 25.58016 | 100% | 25.58016 | 0 | 80 | 2,046.4128 |\n| **TOTAL** | **100** | — | — | — | **100** | **0** | — | **2,489.862** |\n\n**Total Defect Removal Cost ≈ 2,489.86 cost units.**",
              diagramType: "defect-removal"
            },
            {
              id: "2023-q5-3",
              label: "3",
              marks: 4,
              question: "Define the following metrics of peer review efficiency: [4 marks]\na. Peer review detection efficiency\nb. Peer review defect detection density",
              answer: "- **a. Peer Review Detection Efficiency:** The average hours worked by the review team per defect detected (Total Review Effort Hours ÷ Number of Defects Detected).\n- **b. Peer Review Defect Detection Density:** The average number of defects detected per page or unit of size of the reviewed document (Number of Defects Detected ÷ Number of Pages Reviewed)."
            }
          ]
        },
        {
          id: "2023-q6",
          number: "Question 6",
          title: "Formal Design Reviews vs Peer Reviews & FDR Workflow",
          marks: 20,
          subQuestions: [
            {
              id: "2023-q6-1",
              label: "1",
              marks: 6,
              question: "Explain the two (2) major differences between formal design reviews and peer review methods. [6 marks]",
              answer: "1. **Approval Authority / Phase-Gate Power:** A formal design review is a mandatory contract milestone with sole authority to approve passage to the subsequent development stage. Peer reviews (inspections, walkthroughs) are collegial defect-detection tools without authority to halt or approve projects.\n2. **Composition of Participants:** Formal design reviews involve a designated committee containing senior professionals, project managers, and external customer reps. Peer reviews involve colleagues of comparable rank without supervisory authority over the authors."
            },
            {
              id: "2023-q6-2",
              label: "2",
              marks: 14,
              question: "Draw and describe the process flow of performing a formal design review, including roles and responsibilities. [14 marks]",
              answer: "### 1. Preparation Phase\n- **Review Leader:** Appoints 3-5 members, schedules sessions, distributes design documents.\n- **Review Team:** Studies documents using checklists, submits preliminary comments.\n- **Development Team:** Prepares a focused presentation on key architectural trade-offs.\n\n### 2. Review Session\n- Dev Team presentation → Review Team comments → Discussion → Committee Decision:\n  - **Full Approval:** Advance immediately.\n  - **Partial Approval:** Minor corrections needed.\n  - **Denial:** Major rework and re-review required.\n\n### 3. Post-Review Follow-up\n- Review Leader compiles DR Report with tasks and deadlines.\n- Dev Team corrects defects.\n- Verification verifies fixes before phase advancement.",
              diagramType: "formal-review"
            }
          ]
        },
        {
          id: "2023-q7",
          number: "Question 7",
          title: "Intra-organisational SQA Framework & Prototyping",
          marks: 20,
          subQuestions: [
            {
              id: "2023-q7-1",
              label: "1",
              marks: 12,
              question: "The intra-organisational SQA framework comprises a range of SQA components. Name and state the goal of each component in the SQA framework. [12 marks]",
              answer: "1. **Pre-project quality components:** Assure that project commitments, resources, budgets, and development plans are soundly defined before contracts are signed.\n2. **Software project life cycle components:** Provide defect detection and prevention throughout development (design reviews, testing, inspections).\n3. **Infrastructure SQA components:** Prevent faults, lower fault rates, and boost productivity (procedures, templates, checklists, training).\n4. **Software quality management components:** Support managerial control over project milestones, costs, and quality metrics.\n5. **Standardisation, certification, and assessment components:** Align organizational processes with international standards (ISO 9001, CMMI) and evaluate process maturity.\n6. **Human SQA components:** Develop, maintain, and support human involvement through SQA committees, trustees, and specialized training."
            },
            {
              id: "2023-q7-2a",
              label: "2a",
              marks: 4,
              question: "List at least four (4) advantages of prototyping compared to the SDLC methodology for small to medium-sized projects. [4 marks]",
              answer: "1. Shorter overall development duration.\n2. Substantial savings of development resources and man-days.\n3. Superior fit to customer requirements and reduced risk of customer dissatisfaction.\n4. Faster and more intuitive comprehension of the new system by end-users.",
              diagramType: "prototyping"
            },
            {
              id: "2023-q7-2b",
              label: "2b",
              marks: 2,
              question: "Explain why the advantages of prototyping cannot be realised for large software systems. [2 marks]",
              answer: "For large, architecturally complex systems, building an operational prototype is prohibitively expensive and time-consuming. A prototype cannot adequately simulate full transaction throughput, distributed concurrency, data migration, and security requirements without virtually building the entire production system."
            },
            {
              id: "2023-q7-2c",
              label: "2c",
              marks: 2,
              question: "In what ways can prototyping support the development of large-scale projects? [2 marks]",
              answer: "1. **Critical Subsystem Prototyping:** Prototyping high-risk architectural bottlenecks.\n2. **User Interface / UX Prototyping:** Validating user interfaces to clarify requirements before backend implementation.\n3. **Feasibility Spike Testing:** Prototyping proof-of-concept integrations with third-party legacy systems."
            }
          ]
        }
      ]
    }
  ]
};
