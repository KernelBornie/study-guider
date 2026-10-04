export interface QuestionAnswer {
  id: string;
  number: string;
  title: string;
  marks: number;
  compulsory: boolean;
  subQuestions: {
    label: string;
    text: string;
    marks: number;
    answer: string;
    keyPoints: string[];
    diagramType?: 'prototyping' | 'defect-removal' | 'formal-review' | 'mccall-tree' | 'error-chain';
  }[];
}

export const EXAM_META = {
  institution: "THE UNIVERSITY OF ZAMBIA",
  school: "School of Natural Sciences",
  department: "Department of Computer Science",
  courseCode: "CSC 4642",
  courseName: "SOFTWARE QUALITY ASSURANCE",
  examTitle: "FINAL EXAMINATION",
  date: "19th NOVEMBER, 2024",
  time: "14:00 – 17:00 HOURS",
  duration: "3 Hours",
  venue: "NSLT",
  totalMarks: 100,
  sectionAWeight: 40,
  sectionBWeight: 60,
  instructions: [
    "The question paper has TWO SECTIONS (A and B).",
    "Section A is compulsory. Answer ALL questions (40 Marks).",
    "Section B comprises FIVE (5) questions. Answer any THREE (3) questions (60 Marks).",
    "Clearly number your answers.",
    "Use the marks as a guide to the detail required in your answers while keeping your answers concise and relevant."
  ]
};

export const SECTION_A_QUESTIONS: QuestionAnswer[] = [
  {
    id: "q1",
    number: "QUESTION ONE",
    title: "McCall Factor Model Metrics & Alternative Models",
    marks: 20,
    compulsory: true,
    subQuestions: [
      {
        label: "1",
        text: "Based on the McCall Factor Model, state the quality factor that is best measured by each metric below: [15 marks]\na. Average time taken to fix a defect or issue.\nb. Number of user errors per task completed.\nc. Time taken for the system to respond to a user's request.\nd. Number of defects per size of the software (e.g., per 1,000 lines of code).\ne. Number of transactions processed in a given time frame.\nf. The percentage of test cases that pass during testing phases.\ng. Measurement of CPU, memory, and disk usage during operation.\nh. Average time between failures of the software.\ni. Count of unauthorised access attempts or breaches.\nj. Number of failures per time unit.\nk. Percentage of actions logged versus total actions taken by users.\nl. Count of configurable settings available to users.\nm. The percentage of time the software is operational and accessible.\nn. Average time taken by users to complete specific tasks.\no. Average time taken to implement changes in requirements.",
        marks: 15,
        answer: `Below is the classification of each metric into McCall's Software Quality Factor based on UNZA course notes (Unit 3 & Chapter 2):

a. Average time taken to fix a defect or issue:
→ Maintainability (Product Revision category).
Defines the effort required to locate and fix an error in an operational program ("Can I fix it?").

b. Number of user errors per task completed:
→ Usability (Product Operation category).
Measures the operational learning curve and error rate under the operability sub-factor ("Can I run it?").

c. Time taken for the system to respond to a user's request:
→ Correctness (Availability / Reaction Time dimension) [also reflects Efficiency of processing].
In McCall's model (Topic 3, slide 8–9), Correctness explicitly includes the Availability dimension: acceptable reaction time (e.g., respond within 3 seconds).

d. Number of defects per size of the software (e.g., per 1,000 lines of code - KLOC):
→ Reliability (Product Operation category).
Measures software defect density to evaluate failure-proneness and precision of operation.

e. Number of transactions processed in a given time frame:
→ Efficiency (Product Operation category).
Measures throughput and processing performance with respect to system resources.

f. The percentage of test cases that pass during testing phases:
→ Testability (Product Revision category).
Assesses the effort required to test the program and verify that it satisfies its intended functionality ("Can I test it?").

g. Measurement of CPU, memory, and disk usage during operation:
→ Efficiency (Product Operation category).
Deals directly with hardware resource consumption (memory, processor, storage) during software execution.

h. Average time between failures of the software (MTBF):
→ Reliability (Product Operation category).
Directly quantifies Mean Time Between Failures and continuity of failure-free operation.

i. Count of unauthorised access attempts or breaches:
→ Integrity (Product Operation category).
Measures system security and the extent to which access to software or data by unauthorised persons is prevented ("Is it secure?").

j. Number of failures per time unit (Failure Rate):
→ Reliability (Product Operation category).
Measures the operational failure rate over time against maximum allowed failure limits.

k. Percentage of actions logged versus total actions taken by users:
→ Integrity (Product Operation category - Access Audit sub-factor).
Measures the completeness of security auditing and logging to prevent and trace unauthorised actions.

l. Count of configurable settings available to users:
→ Flexibility (Product Revision category).
Measures the ease with which the software can be modified or tailored to new operating conditions or customer needs ("Can I change it?").

m. The percentage of time the software is operational and accessible (Uptime):
→ Correctness (Availability / Uptime dimension) [also closely relates to Reliability].
In McCall's framework, availability/uptime (e.g. 99.5% uptime) is defined as a dimension of Correctness.

n. Average time taken by users to complete specific tasks:
→ Usability (Product Operation category - Operability sub-factor).
Measures operational efficiency and the staff effort needed to operate the system.

o. Average time taken to implement changes in requirements:
→ Flexibility (Product Revision category).
Measures the effort and turn-around time required to implement adaptive and perfective modifications to an operational program.`,
        keyPoints: [
          "a. Maintainability (Effort to locate and fix bugs)",
          "b. Usability (Operability and human error rates)",
          "c. Correctness (Availability / reaction time dimension)",
          "d. Reliability (Defect density / failure tolerance)",
          "e. Efficiency (Throughput / processing performance)",
          "f. Testability (Verification efficiency)",
          "g. Efficiency (Hardware resource consumption)",
          "h. Reliability (MTBF - Mean Time Between Failures)",
          "i. Integrity (Access control security)",
          "j. Reliability (Failure frequency per time unit)",
          "k. Integrity (Access audit & activity logging)",
          "l. Flexibility (Configurability / adaptability)",
          "m. Correctness (Availability & uptime SLA)",
          "n. Usability (Task completion efficiency / training effort)",
          "o. Flexibility (Effort/latency to implement requirement updates)"
        ]
      },
      {
        label: "2",
        text: "Two other models for SQ factors are the Evans and Marciniak and the Deutsch and Willis models. List the five new quality factors introduced by both models. [5 marks]",
        marks: 5,
        answer: `Both alternative factor models from the late 1980s (Evans & Marciniak, 1987 with 12 factors; Deutsch & Willis, 1988 with 15 factors) excluded McCall's 'Testability' factor and introduced the following five new quality factors:

1. Verifiability (Introduced by BOTH Evans & Marciniak and Deutsch & Willis):
   Defines design and programming features that enable efficient verification of the software (e.g., modularity, simplicity, clear interfaces, and adherence to coding guidelines).

2. Expandability (Introduced by BOTH Evans & Marciniak and Deutsch & Willis):
   Refers to future efforts and architectural provisions needed to serve larger populations, improve services, or add new applications (largely covered under McCall's Flexibility).

3. Safety (Introduced by Deutsch & Willis):
   Aims to eliminate conditions hazardous to operators or equipment resulting from errors in process control software (e.g., automatic shutdown of a boiler if pressure/temperature exceeds thresholds).

4. Manageability (Introduced by Deutsch & Willis):
   Refers to administrative tools and procedures that support software modification during development and maintenance (e.g., configuration management, automated health monitoring, threshold alerts).

5. Survivability (Introduced by Deutsch & Willis):
   Refers to continuity of service under adverse conditions; defines the minimum time allowed between failures and maximum allowable recovery time (MTTR), bearing high similarity to McCall's Reliability.`,
        keyPoints: [
          "1. Verifiability (Both models - modularity, simplicity, adherence to standards for easy review/testing)",
          "2. Expandability (Both models - capability to scale to larger populations/services)",
          "3. Safety (Deutsch & Willis - eliminating hazardous conditions in process control)",
          "4. Manageability (Deutsch & Willis - administrative control, configuration management)",
          "5. Survivability (Deutsch & Willis - service continuity, MTBF, recovery time limits)"
        ]
      }
    ]
  },
  {
    id: "q2",
    number: "QUESTION TWO",
    title: "Software Uniqueness, Environment & SQA Objectives",
    marks: 20,
    compulsory: true,
    subQuestions: [
      {
        label: "1.a",
        text: "There are three major differences between software products and other industrial products. Identify and describe the differences. [6 marks]",
        marks: 6,
        answer: `According to UNZA Topic 1 (The Software Quality Challenge), software differs fundamentally from other manufactured industrial products in three critical ways:

1. High Complexity:
   Software products are inherently complex, allowing for millions of possible operational paths and execution states. Every condition, loop, branching statement, and user input multiplies the operational combinations. In contrast, industrial products (e.g., a washing machine or car engine) have a much lower degree of complexity, typically allowing at most a few thousand operational settings.

2. Invisibility:
   Software is an invisible product. It is impossible to detect defects, structural weaknesses, or omissions by sight (e.g., inspecting a CD, flash drive, or downloaded file tells you nothing about the software quality). In contrast, other industrial products are visible physical artifacts where defects, cracks, missing parts, or poor assembly can be observed visually.

3. Limited Defect Detection Opportunities:
   Opportunities to detect software defects are limited strictly to a single phase: the product development phase (requirements, design, coding, testing). Once delivered, software is duplicated rather than manufactured, so any remaining defects are already in the customer's hands. In contrast, for physical industrial products, opportunities to detect defects arise across all stages: product development (blueprints), production planning (tooling/prototypes), manufacturing (assembly lines), and final quality inspection.`,
        keyPoints: [
          "1. Complexity: Millions of possible operational paths vs. at most a few thousand in industrial products.",
          "2. Invisibility: Software cannot be inspected visually; bugs are concealed in code logic.",
          "3. Defect Detection: Only detected during the development phase, whereas industrial products have detection opportunities across design, planning, manufacturing, and assembly inspection."
        ]
      },
      {
        label: "1.b",
        text: "State the way in which each difference from (a) affects SQA. [3 marks]",
        marks: 3,
        answer: `Each characteristic directly dictates unique SQA methodologies:

1. Impact of High Complexity on SQA:
   Because exhaustive manual testing of millions of paths is mathematically impossible, SQA must adopt systematic, risk-focused strategies—such as McCabe's Cyclomatic Complexity to determine minimum independent paths for line coverage and Equivalence Class Partitioning (ECP) to sample representative input classes.

2. Impact of Invisibility on SQA:
   Because defects cannot be seen with the naked eye, SQA cannot rely on physical inspection. Instead, SQA must depend heavily on executing the software through formal testing (black box and white box) and conducting rigorous formal reviews, code inspections, and walkthroughs of written artifacts, ensuring end-to-end requirements traceability.

3. Impact of Limited Defect Detection on SQA:
   Because there is no separate "manufacturing inspection" stage before customer delivery, SQA cannot simply be an end-of-line gate. SQA activities (contract reviews, design reviews, inspections, unit/integration testing) must be deeply integrated into every single phase of the development lifecycle to catch and remove defects as early as possible.`,
        keyPoints: [
          "Complexity -> Demands structured, risk-based testing (path analysis, ECP) rather than ad-hoc testing.",
          "Invisibility -> Eliminates visual inspection; requires execution testing, static code analysis, and document reviews.",
          "Limited Detection -> Forces SQA to be integrated throughout all lifecycle phases ('shift left'), not just a final inspection."
        ]
      },
      {
        label: "2",
        text: "Seven issues characterise the professional software development and maintenance environment. Identify these characteristics. [7 marks]",
        marks: 7,
        answer: `According to UNZA Topic 1 (Section 1.2), the professional software engineering environment is defined by seven unique characteristics/difficulties:

1. Being Contracted:
   The project is bound by strict contractual obligations regarding budget, timeline, and functional requirements. If any of these are unrealistic, severe pressure is placed on quality.

2. Subjection to Customer–Supplier Relationship:
   There is a formal commercial relationship between the client (who pays) and the supplier (who builds), involving formal legal accountability, liability for delays, and approval gates.

3. Requirement for Teamwork:
   Professional software cannot be built by an individual alone; it demands teamwork, specialization (architects, UI designers, database administrators, testers), and division of labor, which introduces risks of work overload and communication breakdown.

4. Need for Cooperation and Coordination with Other Development Teams:
   Large software systems often require multiple internal and external teams working concurrently on interdependent modules, requiring continuous coordination to avoid interface mismatches.

5. Need for Interfaces with Other Software Systems:
   The system must seamlessly integrate with existing software packages, legacy databases, third-party APIs, hardware devices, and networks, creating multiple external points of failure.

6. Need to Continue Carrying Out a Project While the Team Changes:
   Staff turnover, personnel reassignments, and departures occur throughout long projects; the organization must ensure project continuity through documentation, standards, and structured handovers.

7. Need to Continue Maintaining the Software System for Years:
   Software is not discarded after delivery; it must be maintained, adapted, and corrected for many years (often decades) across evolving operating systems, user populations, and hardware platforms.`,
        keyPoints: [
          "1. Being contracted (budget, timeline, requirements constraints)",
          "2. Subjection to customer-supplier relationship (formal accountability)",
          "3. Requirement for teamwork (specialization, work overload risks)",
          "4. Need for cooperation with other development teams",
          "5. Need for interfaces with other software/hardware systems",
          "6. Need to maintain continuity despite team turnover",
          "7. Need for long-term maintenance over many years"
        ]
      },
      {
        label: "3",
        text: "Explain the objectives of software quality assurance activities. [4 marks]",
        marks: 4,
        answer: `According to UNZA course notes (Topic 2, Section 2.6), SQA activities are structured into two complementary dimensions: Process-Oriented (Development) and Product-Oriented (Maintenance):

A. Process-Oriented Objectives (Software Development):
1. Assure acceptable confidence of conformance to functional technical requirements:
   Verify that the software performs its required operations accurately, reliably, and completely as specified in requirements.
2. Assure acceptable confidence of conformance to managerial scheduling and budgetary requirements:
   Ensure that the project proceeds within agreed deadlines, milestones, and financial resource allocations.
3. Initiate and manage activities for continuous improvement and greater efficiency:
   Analyze defect patterns to refine development methodologies, lower fault generation rates, and reduce the overall cost of quality.

B. Product-Oriented Objectives (Software Maintenance):
4. Assure quality and efficiency in operational maintenance:
   Assure with acceptable confidence that corrective, adaptive, and perfective maintenance tasks conform to technical and budgetary constraints while continually optimizing support services.`,
        keyPoints: [
          "1. Conformance to functional technical requirements (does what it's supposed to do)",
          "2. Conformance to managerial scheduling and budgetary requirements (delivered on time/budget)",
          "3. Initiating process improvements for greater development & SQA efficiency",
          "4. Assuring quality, timeliness, and budget compliance during long-term maintenance"
        ]
      }
    ]
  }
];

export const SECTION_B_QUESTIONS: QuestionAnswer[] = [
  {
    id: "q3",
    number: "QUESTION THREE",
    title: "Software System Components, Error Taxonomy & Root Causes",
    marks: 20,
    compulsory: false,
    subQuestions: [
      {
        label: "1.a",
        text: "Identify the four components of a software system. [2 marks]",
        marks: 2,
        answer: `According to the IEEE and ISO definition adopted in UNZA SQA (Topic 2), a software system comprises four essential components:
1. Computer programs ("Code")
2. Procedures
3. Documentation
4. Data`,
        keyPoints: [
          "1. Computer programs ('Code')",
          "2. Procedures",
          "3. Documentation",
          "4. Data"
        ]
      },
      {
        label: "1.b",
        text: "Explain how the quality of each component contributes to the quality of the developed software? [6 marks]",
        marks: 6,
        answer: `Each component plays an indispensable role in overall system quality:

1. Computer Programs ("Code"):
   These are the executable instructions that activate computer hardware to perform required applications.
   • Contribution to Quality: The code must be algorithmically correct, efficient in resource utilization, readable, and structured for maintainability. Flaws in code result directly in syntax/logic faults that trigger system malfunctions.

2. Procedures:
   Procedures define the order, schedule, operating method, and person responsible for executing programs and processes (e.g., nightly database backups, batch runs, failover switching).
   • Contribution to Quality: Clear, complete, and followed procedures ensure that software is executed correctly in production. If operating procedures are erroneous, even mathematically flawless code will fail to produce valid outcomes.

3. Documentation:
   Encompasses artifacts for developers (requirements, architecture, design specs), users (user manuals, help menus), and maintenance staff (technical reference manuals, code comments).
   • Contribution to Quality: Accurate documentation prevents misunderstandings during development, prevents user errors and "dead ends", and drastically reduces the time and cost required for maintenance personnel to troubleshoot issues.

4. Data:
   Includes parameters, initialization lookup tables, error codes, and name lists that configure and adapt the software to a specific customer's operational context.
   • Contribution to Quality: Data must be accurate, valid, and properly structured. If configuration parameters or tax tables are incorrect, the system will output wrong results regardless of code perfection.`,
        keyPoints: [
          "Code: Directly determines correctness, performance, and failure rate.",
          "Procedures: Governs operational execution; flawed procedures invalidate good code.",
          "Documentation: Ensures correct implementation, user comprehension, and low-cost maintenance.",
          "Data: Drives business logic; wrong parameters produce wrong calculations."
        ]
      },
      {
        label: "2",
        text: "Distinguish among software error, software fault and software failure. [3 marks]",
        marks: 3,
        answer: `In SQA, the chain of defect causation is: Error → Fault → Failure:

1. Software Error:
   A human action that produces an incorrect result (ISO 24765). It is the original mistake made by a systems analyst, designer, or programmer.
   • Example: A programmer types '=' instead of '==' in a conditional statement, or misunderstands a tax calculation rule.

2. Software Fault (Defect):
   An imperfection, bug, or deficiency in a software work product (code, design, or documentation) resulting from an error that can cause incorrect functioning during a specific application.
   • Key Principle: Not all errors become faults; some errors exist in unexecuted code.
   • Example: In the Meteoro-X case study, the temperature limit was erroneously coded as 160°C instead of 60°C, embedding a fault in the firmware.

3. Software Failure:
   A dynamic event wherein a fault disrupts actual software use; the termination of the ability of a product to perform a required function within specified limits (ISO 25010).
   • Key Principle: A fault becomes a failure ONLY when it is 'activated'—when an execution path encounters the faulty logic under triggering conditions.
   • Example: In Meteoro-X, because the devices were deployed only in cold coastal zones where temperatures never reached 60°C, the fault was never activated and thus NEVER resulted in a software failure.`,
        keyPoints: [
          "Error = Human mistake (mental lapse, misunderstanding, typo).",
          "Fault (Defect) = Flaw or bug introduced into the software product.",
          "Failure = Dynamic breakdown during execution when a fault is activated."
        ],
        diagramType: "error-chain"
      },
      {
        label: "3.a",
        text: "Identify three of the most common errors of faulty requirement definition. [3 marks]",
        marks: 3,
        answer: `According to UNZA Topic 2 (Section 2.3), the three most common errors originating in requirements definition are:
1. Erroneous definition of requirements: The stated requirement itself is mathematically, technically, or logically incorrect (e.g., wrong billing formula).
2. Absence of vital requirements: Critical functions, edge cases, or exception handling are entirely omitted (e.g., omitting rollback requirements upon payment drop).
3. Incomplete definition of requirements: Requirements are vague or lack quantifiable acceptance criteria (e.g., stating 'the system must be fast' without response time thresholds).
(Alternatively: Inclusion of unnecessary requirements / gold-plating).`,
        keyPoints: [
          "1. Erroneous definition (wrong business logic)",
          "2. Absence of vital requirements (omitted critical states)",
          "3. Incomplete definition (unquantified, vague statements)"
        ]
      },
      {
        label: "3.b",
        text: "Identify the group(s) responsible for this type of error. [2 marks]",
        marks: 2,
        answer: `The primary group responsible is the Client and their representatives, as they formulate the initial Request for Proposals (RFP) and business requirements. 

However, the Systems Analysts and Software Development Proposal Team share secondary responsibility if they fail to clarify, verify, and resolve ambiguities during the pre-project contract review process.`,
        keyPoints: [
          "Primary: The Client and their user representatives.",
          "Secondary: System analysts and proposal review teams who fail to clarify ambiguities."
        ]
      },
      {
        label: "4.a",
        text: "Identify two of the most common errors of documentation errors. [2 marks]",
        marks: 2,
        answer: `According to UNZA Topic 2 (Section 2.3), two common documentation errors are:
1. Omission of software functions:
   The user or operator manual fails to document an existing software feature, leaving users unaware of the capability or leading them to apply incorrect manual workarounds.
2. Errors in explanations and instructions:
   User directions contain wrong instructions (e.g., telling the user to press F5 instead of F6), leading to user dead ends, data entry aborts, or erroneous operations.
(Also: Listing non-existent functions that were dropped during development but left in the manual).`,
        keyPoints: [
          "1. Omission of software functions from documentation",
          "2. Errors in instructions leading to dead ends or improper operations"
        ]
      },
      {
        label: "4.b",
        text: "Identify the group(s) responsible for this type of error. [2 marks]",
        marks: 2,
        answer: `The groups responsible are:
1. Documentation experts / technical writers who draft the manuals.
2. Systems analysts and software developers who modify system functionality, architecture, or screens but fail to inform the documentation team or update technical documents to reflect the changes.`,
        keyPoints: [
          "Technical writers and documentation specialists.",
          "Developers and analysts who modify code without maintaining documentation sync."
        ]
      }
    ]
  },
  {
    id: "q4",
    number: "QUESTION FOUR",
    title: "Contract Review: Proposal Draft, Outsider Audits & Complexity",
    marks: 20,
    compulsory: false,
    subQuestions: [
      {
        label: "1",
        text: "The objective of the proposal draft review is to make sure that a number of important activities have been satisfactorily carried out. Describe any five activities that need to be 'satisfactorily carried out'. [10 marks]",
        marks: 10,
        answer: `According to UNZA Topic 5 (Contract Review, Section 5.4), the proposal draft review examines the final draft proposal and its foundations before customer submission. Five critical activities that must be satisfactorily carried out are:

1. Clarification and Documentation of Customer Requirements:
   Ensure that the customer's requirements (often loosely stated in an RFP) are analyzed, clarified, and fully documented. If requirements are ambiguous or contradictory, written clarifications must be obtained from the client and formally approved by both parties.

2. Examination of Alternative Implementation Approaches:
   Examine alternative technological and organizational avenues to fulfill the project efficiently, such as reusing existing software modules, purchasing third-party COTS components, or partnering/subcontracting with specialized firms.

3. Specification of Formal Relationship Aspects:
   Clearly establish the formal rules governing the customer-supplier engagement, including formal communication channels, defined project deliverables and acceptance criteria, phase-approval procedures, test follow-up protocols, and the official change request procedure.

4. Identification and Resolution of Development Risks:
   Conduct a thorough risk analysis to identify potential failure points—such as technological knowledge gaps, lack of team familiarity with proposed tools, unrealistic schedules, or subcontractor dependencies—and prepare actionable Risk Management Actions (RMAs).

5. Adequate Estimation of Project Resources and Timetable:
   Prepare realistic, detailed estimates of required manpower (man-months per phase), specialized development facilities, software licenses, testing infrastructure, project schedules, and total budget (including subcontractor and consultant fees).`,
        keyPoints: [
          "1. Requirements clarified & documented (resolving ambiguities in RFP)",
          "2. Examination of alternative approaches (reuse, COTS, subcontracting)",
          "3. Specification of formal relationship (deliverables, acceptance, change procedures)",
          "4. Identification of development risks (know-how gaps, tight timelines)",
          "5. Adequate estimation of resources and timetable (man-months, budget, facilities)"
        ]
      },
      {
        label: "2.a",
        text: "Describe two advantages of employing outsiders compared with insiders for a proposal draft review? [4 marks]",
        marks: 4,
        answer: `Two key advantages of employing outside professionals for a proposal draft review are:

1. Objective and Unbiased Perspective:
   External reviewers are free from internal organizational politics, optimism bias, or emotional attachment to the proposal. They can independently scrutinize assumptions, challenge unrealistic estimates, and identify critical oversights that insiders might gloss over.

2. Access to Specialized Domain & Legal Expertise:
   Outsiders can provide specialized technical, architectural, or legal knowledge that the in-house team lacks, especially when bidding on projects involving unfamiliar cutting-edge technologies, foreign regulatory frameworks, or complex liability clauses.`,
        keyPoints: [
          "1. Greater objectivity & independence (unbiased assessment, free from internal politics)",
          "2. Specialized expertise (brings niche technological or legal know-how)"
        ]
      },
      {
        label: "2.b",
        text: "Describe two disadvantages of employing outsiders compared with insiders for a proposal draft review? [4 marks]",
        marks: 4,
        answer: `Two significant disadvantages of employing outsiders are:

1. Lack of Organizational Context and Intimate Knowledge:
   External reviewers are unfamiliar with the company's internal culture, working styles, true developer capabilities, historical performance, and existing reusable code assets. Consequently, their recommendations may be impractical or misaligned with organizational realities.

2. Higher Financial Costs and Schedule Overhead:
   Hiring external consultants requires substantial financial expenditures (consulting fees) and causes schedule delays while outside experts undergo onboarding and familiarize themselves with the project materials.`,
        keyPoints: [
          "1. Lack of internal context and intimate organizational knowledge",
          "2. Higher financial cost and extended review preparation time"
        ]
      },
      {
        label: "3",
        text: "Project technical complexity impacts the extent of the contract review effort. What are the aspects that define 'Project technical complexity'? [2 marks]",
        marks: 2,
        answer: `According to UNZA Topic 5 (Section 5.6), project technical complexity is defined by four core technical aspects:
1. The number of different technologies involved in the project.
2. The familiarity of the development team with those technologies.
3. Whether the technology is cutting-edge/experimental or well-established.
4. The number and intricacy of technical interfaces with external software, hardware, or networks.`,
        keyPoints: [
          "Number of technologies involved",
          "Team's familiarity with the technologies",
          "Cutting-edge vs. well-established technology",
          "Number and complexity of technical interfaces"
        ]
      }
    ]
  },
  {
    id: "q5",
    number: "QUESTION FIVE",
    title: "Development Process Mapping: Prototyping Model & SQA Integration",
    marks: 20,
    compulsory: false,
    subQuestions: [
      {
        label: "a",
        text: "Illustrate the prototyping process model. [8 marks]",
        marks: 8,
        answer: `The Prototyping Process Model is an iterative software lifecycle methodology particularly suited for small-to-medium systems with evolving requirements. 

Below is the complete structural diagram matching the UNZA SQA course model (Topic 7, slide 11):

[ Requirements Determination by Customer ]
                    │
                    ▼
          [ Prototype Design ] ◄─────────────────────────┐
                    │                                    │
                    ▼                                    │
       [ Prototype Implementation ]                      │
                    │                                    │
                    ▼                                    │
      [ Prototype Evaluation by Customer ]               │
                    │                                    │
                    ▼                                    │
          < Requirements Fulfilled? >                    │
                    │                                    │
           NO ──────┴───────► [ Demands for Corrections, │
                                Changes and Additions ] ─┘
                    │
                   YES
                    ▼
      [ System Tests and Acceptance Tests ]
                    │
                    ▼
          [ System Conversion ]
                    │
                    ▼
     [ System Operation and Maintenance ]

Key Process Mechanics:
• The cycle of (Prototype Design → Implementation → Customer Evaluation → Corrections) loops iteratively until the customer formally confirms that all requirements are fulfilled.
• Once accepted, the system progresses sequentially into rigorous System Tests, Acceptance Tests, Conversion (cutover), and long-term Operation and Maintenance.`,
        keyPoints: [
          "Draws Requirements Determination -> Prototype Design -> Implementation -> Customer Evaluation.",
          "Features conditional loop: 'Requirements Fulfilled?' -> If NO, demands for corrections -> loops back to Prototype Design.",
          "If YES -> proceeds to System/Acceptance Tests -> System Conversion -> Operation & Maintenance."
        ],
        diagramType: "prototyping"
      },
      {
        label: "b",
        text: "Describe the details that would be included in mapping the prototyping development process in the development plan? [8 marks]",
        marks: 8,
        answer: `According to UNZA Topic 6 (Development and Quality Plans, Section 6.3), mapping a development process (typically using a GANTT chart and process definitions) requires detailing the following components:

1. Decomposition of Iteration Phases:
   Explicit definition of each prototyping phase: Requirements capture, Initial prototype cycle, Iterative enhancement cycles, and Final system hardening.

2. Specification of Inputs and Outputs (Deliverables):
   For each phase, specify the exact incoming artifacts (e.g. user stories, client change logs) and outgoing deliverables (e.g. clickable UI mockups, prototype code builds, customer evaluation sign-off sheets).

3. Planned Development Activities:
   Clear list of specific tasks to be performed: rapid screen layout design, backend mock services, usability walkthrough sessions, and defect fixing.

4. Activity Durations and Timelines:
   Accurate estimation of duration (in days or weeks) for each task and each iteration cycle, displayed as horizontal bars on a GANTT chart.

5. Logical Sequence and Precedence:
   The dependency workflow between activities (e.g., prototype evaluation cannot begin until prototype implementation is complete; next iteration design cannot start until evaluation feedback is cataloged).

6. Resource Allocation and Staffing:
   Type and number of professional resources required per time interval (e.g., UX designer for 5 days, full-stack developer for 15 days, test coordinator).

7. SQA Activities Integration:
   Explicitly scheduling SQA checkpoints (design reviews, milestone reviews, usability audits, unit tests) within the project schedule so quality checks are not bypassed.

8. Defined Milestones and Exit Criteria:
   Explicit criteria marking completion of each iteration (e.g., maximum 3 iterations or 95% user task success rate before conversion).`,
        keyPoints: [
          "1. Phase decomposition (iterations)",
          "2. Inputs and outputs / deliverables",
          "3. Specific planned activities",
          "4. Activity duration estimates",
          "5. Logical precedence and sequence",
          "6. Resource and manpower allocations",
          "7. Embedded SQA activities and reviews",
          "8. Milestone definition and exit criteria"
        ]
      },
      {
        label: "c",
        text: "Describe four quality assurance activities that would be appropriate for integration within the prototyping development process. [4 marks]",
        marks: 4,
        answer: `Four SQA activities specifically suited for integration within the prototyping lifecycle are:

1. Requirements & Scope Baseline Review:
   A formal review conducted prior to prototype construction to define bounded functional objectives and prevent scope creep or feature bloat ('gold plating').

2. Structured Customer Usability Walkthroughs:
   Conducting guided user evaluation sessions using standardized scenario checklists to systematically gather user feedback on task completion times, workflow errors, and UI clarity.

3. Code and Architectural Inspection of Reusable Assets:
   Performing peer code reviews and inspections on core logic modules developed during prototyping to ensure they adhere to coding standards, modularity, and security guidelines before they are reused in the final system.

4. Formal System and Acceptance Testing:
   Comprehensive verification and validation conducted once the prototype design is approved to verify performance, scalability, boundary conditions, and full conformance before production conversion.`,
        keyPoints: [
          "1. Requirements baseline review (prevents gold plating)",
          "2. Structured user evaluation sessions with standardized checklists",
          "3. Code inspection of reusable architectural modules",
          "4. Formal system and acceptance testing prior to cutover"
        ]
      }
    ]
  },
  {
    id: "q6",
    number: "QUESTION SIX",
    title: "Defect Removal Model: Assumptions & 100-Defect Cost Calculation",
    marks: 20,
    compulsory: false,
    subQuestions: [
      {
        label: "1",
        text: "Referring to the model for defect removal efficiency and costs, explain the six assumptions that rest at the foundations of the model? [6 marks]",
        marks: 6,
        answer: `According to UNZA Topic 7 (Section 7.4 / slide 40–41), the Defect Removal Effectiveness and Cost Model rests on six fundamental assumptions:

1. Linear and Sequential Development:
   The software development process is assumed to be linear and sequential, strictly following the Waterfall model from requirements through operation.

2. Phase-Specific Defect Injection:
   A specific number of 'new' defects are introduced (injected) in each development phase (Phase Originated Defects – POD).

3. QA Activities as Imperfect Screening Filters:
   Review and testing activities act as filters that remove a defined percentage of entering defects (Filtering Effectiveness – %FE) and allow the remaining unremoved defects to escape.

4. Cumulative Incoming Defects:
   At each phase, the total incoming defects are the sum of defects that escaped from the preceding phase (Passed Defects – PD) plus the new defects originated in the current phase (POD): Total In = POD + PD.

5. Phase-Dependent Escalating Removal Costs:
   The cost of defect removal is calculated by multiplying the number of defects removed (RD) by the relative cost of removing a defect (CDR) for that phase (TRC = RD × CDR), with costs escalating sharply as the project advances downstream.

6. Ultimate Customer Detection in Operation:
   All remaining uncorrected defects that escape all development and testing filters are eventually passed to the customer and will be detected during the operational phase (where filtering effectiveness is 100% and unit removal cost is highest).`,
        keyPoints: [
          "1. Linear & sequential waterfall development process",
          "2. A specific number of new defects injected per phase (POD)",
          "3. QA activities act as percentage filters (%FE)",
          "4. Incoming defects = Escaped from prior phase (PD) + newly injected (POD)",
          "5. Removal cost = Removed Defects × Cost per Defect (TRC = RD × CDR)",
          "6. All surviving defects are detected by the customer in the operational phase"
        ]
      },
      {
        label: "2",
        text: "Consider the following SQA model, where the defect removal activities, effectiveness rates and representative average relative defect-removal costs are illustrated in the table. Show the process-oriented illustration of the comprehensive plan for removing 100 defects spread across development phases. [14 marks]",
        marks: 14,
        answer: `Given Data:
• Total Injected Defects = 100
  - Phase 1 (Req. Specification): POD = 15% of 100 = 15 defects
  - Phase 2 (Design): POD = 35% of 100 = 35 defects
  - Phase 3 (Coding - Code Unit Test): POD = 30% of 100 = 30 defects
  - Phase 4 (Integration Test): POD = 10% of 100 = 10 defects
  - Phase 5 (Documentation Review): POD = 10% of 100 = 10 defects
  - Phase 6 (System Test): POD = 0 defects
  - Phase 7 (Operation Phase): POD = 0 defects
  Total POD = 15 + 35 + 30 + 10 + 10 + 0 + 0 = 100 defects.

• Effectiveness Rates (%FE):
  - RSR = 50%, DR = 50%, UT = 50%, IT = 50%, DocR = 50%, ST = 50%, OP = 100%
• Relative Cost per Defect (CDR):
  - RSR = 1, DR = 2.5, UT = 6.5, IT = 16, DocR = 16, ST = 40, OP = 110

========================================================================
STEP-BY-STEP CALCULATION:
========================================================================

Phase 1: Requirement Specification Review (RSR)
• POD = 15, Escaped from previous (PD) = 0
• Total Entering (Din) = 15 + 0 = 15
• %FE = 50%
• Removed Defects (RD) = 15 × 0.50 = 7.5
• Escaped to Next Phase (PD) = 15 − 7.5 = 7.5
• CDR = 1 cost unit
• Phase Cost (TRC) = 7.5 × 1 = 7.5 cost units

Phase 2: Design Review (DR)
• POD = 35, Escaped from previous (PD) = 7.5
• Total Entering (Din) = 35 + 7.5 = 42.5
• %FE = 50%
• Removed Defects (RD) = 42.5 × 0.50 = 21.25
• Escaped to Next Phase (PD) = 42.5 − 21.25 = 21.25
• CDR = 2.5 cost units
• Phase Cost (TRC) = 21.25 × 2.5 = 53.125 cost units

Phase 3: Unit Test - Code (UT)
• POD = 30, Escaped from previous (PD) = 21.25
• Total Entering (Din) = 30 + 21.25 = 51.25
• %FE = 50%
• Removed Defects (RD) = 51.25 × 0.50 = 25.625
• Escaped to Next Phase (PD) = 51.25 − 25.625 = 25.625
• CDR = 6.5 cost units
• Phase Cost (TRC) = 25.625 × 6.5 = 166.5625 cost units

Phase 4: Integration Test (IT)
• POD = 10, Escaped from previous (PD) = 25.625
• Total Entering (Din) = 10 + 25.625 = 35.625
• %FE = 50%
• Removed Defects (RD) = 35.625 × 0.50 = 17.8125
• Escaped to Next Phase (PD) = 35.625 − 17.8125 = 17.8125
• CDR = 16 cost units
• Phase Cost (TRC) = 17.8125 × 16 = 285.000 cost units

Phase 5: Documentation Review (DocR)
• POD = 10, Escaped from previous (PD) = 17.8125
• Total Entering (Din) = 10 + 17.8125 = 27.8125
• %FE = 50%
• Removed Defects (RD) = 27.8125 × 0.50 = 13.90625
• Escaped to Next Phase (PD) = 27.8125 − 13.90625 = 13.90625
• CDR = 16 cost units
• Phase Cost (TRC) = 13.90625 × 16 = 222.500 cost units

Phase 6: System Test (ST)
• POD = 0, Escaped from previous (PD) = 13.90625
• Total Entering (Din) = 0 + 13.90625 = 13.90625
• %FE = 50%
• Removed Defects (RD) = 13.90625 × 0.50 = 6.953125
• Escaped to Next Phase (PD) = 13.90625 − 6.953125 = 6.953125
• CDR = 40 cost units
• Phase Cost (TRC) = 6.953125 × 40 = 278.125 cost units

Phase 7: Operation Phase (OP)
• POD = 0, Escaped from previous (PD) = 6.953125
• Total Entering (Din) = 6.953125
• %FE = 100%
• Removed Defects (RD) = 6.953125 × 1.00 = 6.953125
• Escaped to Next Phase (PD) = 0
• CDR = 110 cost units
• Phase Cost (TRC) = 6.953125 × 110 = 764.84375 cost units

========================================================================
SUMMARY CALCULATION TABLE:
========================================================================
Phase | POD | PD In | Total In | %FE | RD | PD Out | CDR | TRC (Cost Units)
1. Req. Spec Review | 15 | 0 | 15.000 | 50% | 7.500 | 7.500 | 1.0 | 7.500
2. Design Review | 35 | 7.500 | 42.500 | 50% | 21.250 | 21.250 | 2.5 | 53.125
3. Unit Test - Code | 30 | 21.250 | 51.250 | 50% | 25.625 | 25.625 | 6.5 | 166.5625
4. Integration Test | 10 | 25.625 | 35.625 | 50% | 17.8125 | 17.8125 | 16.0 | 285.000
5. Doc. Review | 10 | 17.8125 | 27.8125 | 50% | 13.90625 | 13.90625 | 16.0 | 222.500
6. System Test | 0 | 13.90625 | 13.90625 | 50% | 6.953125 | 6.953125 | 40.0 | 278.125
7. Operation Phase | 0 | 6.953125 | 6.953125 | 100% | 6.953125 | 0.000 | 110.0 | 764.84375
-----------------------------------------------------------------------------------------------
TOTALS | 100 | — | — | — | 100.000 | 0.000 | — | 1,777.65625 cost units

TOTAL COST OF DEFECT REMOVAL = 1,777.66 cost units.

Key Observation:
Even though only ~7 defects (6.953) reached the Operation Phase, they accounted for 764.84 cost units (over 43% of total removal cost). This demonstrates the dramatic financial benefit of early defect detection (the 'shift-left' principle).`,
        keyPoints: [
          "Calculates exact numbers for all 7 phases sequentially.",
          "Tracks Phase Originated Defects (POD) and Passed Defects (PD) across each phase.",
          "Verifies total detected defects = 100.0.",
          "Calculates Total Removal Cost (TRC) = 1,777.65625 ≈ 1,777.66 cost units.",
          "Shows process-oriented box flow diagram (as seen on slide 44)."
        ],
        diagramType: "defect-removal"
      }
    ]
  },
  {
    id: "q7",
    number: "QUESTION SEVEN",
    title: "Review Techniques Comparison & Formal Design Review Flow",
    marks: 20,
    compulsory: false,
    subQuestions: [
      {
        label: "1.a",
        text: "In what aspects are design reviews more formal than inspections? [3 marks]",
        marks: 3,
        answer: `According to UNZA Topic 8 (Reviews, Section 8.4 and 8.5), Design Reviews (DRs) are more formal than inspections in three principal aspects:

1. Authority and Approval Mandate:
   Design reviews are the ONLY review that possesses formal contractual and managerial authority to approve the design product for continuation to the next development phase (yielding Full Approval, Partial Approval, or Denial). Inspections are peer-level reviews that detect defects but do not have project-phase gate approval authority.

2. Committee Composition and Seniority:
   Design reviews are conducted by a formal committee comprising senior management, department heads, chief software engineers, and customer/user representatives. Inspections are conducted exclusively by peers of equivalent professional standing.

3. Formal Presentation Requirement:
   In a design review, the development team must prepare and deliver a formal presentation focusing on key design decisions and architectural challenges. In contrast, an inspection does not use presentations; the reader simply reads the product code or document line-by-line while participants inspect for defects.`,
        keyPoints: [
          "1. Contractual phase-approval authority (DR approves continuation; inspection does not)",
          "2. Senior committee with customer representation vs. internal peer group",
          "3. Formal presentation required vs. line-by-line reading"
        ]
      },
      {
        label: "1.b",
        text: "In what aspects are inspections more formal than walkthroughs? [3 marks]",
        marks: 3,
        answer: `According to UNZA Topic 8 (Section 8.5, slide 36), Inspections are more formal than walkthroughs in three distinct aspects:

1. Structured Meeting Planning and Roles:
   An inspection is a formally scheduled meeting initiated by the project team with predefined, fixed roles assigned to every participant: Moderator, Reader, Scribe/Recorder, and Inspectors. A walkthrough is informal, unplanned, and initiated by the author without fixed roles or an independent moderator.

2. Separation of Author and Reader:
   In an inspection, a designated Reader (not the author) reads through the code or document so the author can listen objectively without defensive bias. In a walkthrough, the author reads their own product while colleagues suggest improvements.

3. Formal Recording, Defect Classification, and Metrics:
   An inspection requires a dedicated Scribe to formally document each defect, classify it by severity level (Critical, Major, Minor), track action items to verified closure, and compute efficiency metrics (defect density, detection efficiency). Walkthroughs rely on informal note-taking by the author with no formal metrics or closure tracking.`,
        keyPoints: [
          "1. Formally planned meeting with designated roles (Moderator, Scribe, Reader)",
          "2. Dedicated reader presents the work (not the author)",
          "3. Formal defect logging by severity, action item tracking, and metric calculation"
        ]
      },
      {
        label: "2",
        text: "Draw and describe the process flow of performing a formal design review, including roles and responsibilities. [14 marks]",
        marks: 14,
        answer: `PROCESS FLOW OF A FORMAL DESIGN REVIEW (Based on UNZA Topic 8, slide 26):

[Development Team]              [Review Leader]               [Review Team]
        │                              │                            │
 1. Prepare design                     │                            │
    document & presentation            │                            │
        │                              │                            │
        ├─────────────────────────────►│                            │
        │    Submits design product    │                            │
        │                              │                            │
        │                       2. Appoint team,                    │
        │                          schedule review,                 │
        │                          prepare agenda                   │
        │                              │                            │
        │                              ├───────────────────────────►│
        │                              │  Distribute doc & schedule │
        │                              │                            │
        │                              │                     3. Read document
        │                              │                        using checklists,
        │                              │                        list comments
        │                              │                            │
        ▼                              ▼                            ▼
 ════════════════════════════════════════════════════════════════════════════
                     4. FORMAL REVIEW SESSION
    • Dev team presents design   • Review team comments   • Joint discussion
 ════════════════════════════════════════════════════════════════════════════
                                       │
                                       ▼
                             5. Review Report Issued
                             < Is Document Approved? >
                                       │
         ┌─────────────────────────────┼─────────────────────────────┐
         ▼                             ▼                             ▼
  [FULL APPROVAL]             [PARTIAL APPROVAL]               [NO APPROVAL]
  No corrections              Major corrections for            Major corrections
  required                    non-approved parts               required for whole
         │                             │                       project
         │              ┌──────────────┴──────────────┐              │
         │       Approved parts             Non-approved      Carry out major
         │              │                   parts corrected    corrections
         │              │                             │              │
         │              │                   Corrections       Corrected doc
         │              │                   reviewed          reviewed again
         │              │                             │              │
         │              │                   Approved? ───────────────┘
         │              │                      │ YES
         │              │               Follow-up report
         │              │                      │
         ▼              ▼                      ▼
    [ CARRY OUT NEXT PROJECT DEVELOPMENT PHASE ]

========================================================================
ROLES AND RESPONSIBILITIES:
========================================================================

1. Review Leader:
   • Profile: Must possess deep experience in similar systems, senior rank (equal or higher than project manager), good relations with the team, and MUST BE EXTERNAL to the project team (e.g., department manager, chief software engineer, SQA unit head).
   • Responsibilities:
     - Appoints review team members ensuring proper competence.
     - Schedules review sessions and sets the agenda.
     - Distributes the design documents well in advance.
     - Presides over and moderates the formal DR session.
     - Issues the official DR Report documenting findings, decisions, and action items.
     - Designates follow-up personnel to verify corrective actions.

2. Review Team (3–5 Members):
   • Profile: Majority non-project staff with diverse professional backgrounds (senior engineers, domain consultants, customer representatives, maintenance specialists).
   • Responsibilities:
     - Thoroughly read and analyze the design document prior to the session.
     - Use standard SQA checklists to uncover functional, architectural, and standards defects.
     - Attend the session, raise constructive questions, and evaluate technical viability.
     - Deliberate and vote on the formal approval recommendation.

3. Development Team:
   • Profile: The project leaders and engineers who authored the design artifact.
   • Responsibilities:
     - Produce complete, clear design documentation.
     - Prepare and deliver a focused presentation on main professional and architectural challenges.
     - Answer technical inquiries during the review session.
     - Perform all corrections, changes, and action items mandated by the DR report.`,
        keyPoints: [
          "Diagrams the 3 distinct roles: Development Team, Review Leader, Review Team.",
          "Traces 5 phases: Preparation, Scheduling/Distribution, Formal Session, Decision, Follow-up.",
          "Captures all 3 possible outcomes: Full Approval, Partial Approval (conditional), Denial of Approval.",
          "Details roles: Review Leader (senior, external), Review Team (3-5 diverse peers), Dev Team (presenters & correctors)."
        ],
        diagramType: "formal-review"
      }
    ]
  }
];
