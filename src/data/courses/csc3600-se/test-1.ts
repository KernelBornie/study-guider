import { Paper } from "@/types";

export const csc3600_Test1: Paper = {
  id: "csc3600-test-1",
  slug: "test-1",
  title: "Test 1 — Chapters 1–7 (Software Engineering Fundamentals)",
  year: 2025,
  duration: "2 Hours",
  totalMarks: 70,
  paperType: "Test",
  sections: [
    // ---------------------------------------------------------------
    // SECTION A — Short Answer (30 marks)
    // ---------------------------------------------------------------
    {
      id: "section-a",
      name: "Section A: Short Answer",
      instructions: "Answer ALL questions.",
      compulsory: true,
      questions: [
        {
          id: "q1",
          number: "Question 1",
          title: "Define software engineering",
          marks: 2,
          subQuestions: [
            {
              id: "q1-1",
              label: "1",
              marks: 2,
              question: "Define software engineering.",
              answer:
                "**Software engineering** is an engineering discipline concerned with **all aspects of software production**, from the early stages of system specification through to maintaining the system after it has gone into use. It uses appropriate theories and methods to solve problems, bearing in mind **organizational and financial constraints**.",
              keyPoints: [
                "Engineering discipline",
                "All aspects of production",
                "Specification → maintenance",
                "Organizational + financial constraints"
              ],
            },
          ],
        },
        {
          id: "q2",
          number: "Question 2",
          title: "Essential attributes of good software",
          marks: 4,
          subQuestions: [
            {
              id: "q2-1",
              label: "1",
              marks: 4,
              question: "List and briefly explain four essential attributes of good software.",
              answer:
                "1. **Maintainability** — Software should be written in such a way that it can evolve to meet the changing needs of customers.\n\n2. **Dependability and security** — Software must not cause physical or economic damage in the event of system failure. Malicious users should not be able to access or damage the system.\n\n3. **Efficiency** — Software should not make wasteful use of system resources such as memory and processor cycles.\n\n4. **Acceptability** — Software must be acceptable to the type of users for which it is designed. This means it must be understandable, usable, and compatible with other systems.",
              keyPoints: [
                "Maintainability (evolvability)",
                "Dependability & Security (reliability + security)",
                "Efficiency (resource optimization)",
                "Acceptability (understandable, usable)"
              ],
            },
          ],
        },
        {
          id: "q3",
          number: "Question 3",
          title: "Generic vs customised products",
          marks: 3,
          subQuestions: [
            {
              id: "q3-1",
              label: "1",
              marks: 3,
              question: "Distinguish between generic software products and customized software products.",
              answer:
                "- **Generic products:** Stand-alone systems produced by a development organization and marketed/sold on the open market to any customer who wishes to buy them (e.g., graphics programs, CAD software, project management tools). The **specification is owned by the software developer**.\n\n- **Customized (bespoke) products:** Systems commissioned by a specific customer to meet their own particular business needs (e.g., embedded control systems, air traffic control software, traffic monitoring systems). The **specification is owned by the customer**, who decides on changes.",
            },
          ],
        },
        {
          id: "q4",
          number: "Question 4",
          title: "Fundamental software process activities",
          marks: 2,
          subQuestions: [
            {
              id: "q4-1",
              label: "1",
              marks: 2,
              question: "Identify the four fundamental software process activities.",
              answer:
                "1. **Software specification:** Defining what the system should do and the constraints on its operation.\n2. **Software development:** Designing and programming the software.\n3. **Software validation:** Checking that the software does what the customer wants.\n4. **Software evolution:** Modifying the software to reflect changing customer and market requirements.",
            },
          ],
        },
        {
          id: "q5",
          number: "Question 5",
          title: "Software validation",
          marks: 2,
          subQuestions: [
            {
              id: "q5-1",
              label: "1",
              marks: 2,
              question: "What is meant by software validation?",
              answer:
                "**Software validation** is the process of checking that the software **conforms to its specification** and **meets the real needs of the users/customer** (*\"Are we building the right product?\"*). It is intended to show that a system meets the requirements and expectations of the system customer.",
            },
          ],
        },
        {
          id: "q6",
          number: "Question 6",
          title: "Waterfall model — disadvantages",
          marks: 2,
          subQuestions: [
            {
              id: "q6-1",
              label: "1",
              marks: 2,
              question: "State two disadvantages of the waterfall model.",
              answer:
                "1. **Inflexible partitioning:** The project is partitioned into distinct stages, making it difficult to respond to changing customer requirements after the process has started.\n2. **High risk when requirements evolve:** It is only appropriate when **requirements are well-understood** and changes will be fairly limited during the design process. Late discovery of design flaws can cause massive budget and schedule overruns.",
            },
          ],
        },
        {
          id: "q7",
          number: "Question 7",
          title: "Software prototype",
          marks: 2,
          subQuestions: [
            {
              id: "q7-1",
              label: "1",
              marks: 2,
              question: "What is a software prototype?",
              answer:
                "A **software prototype** is an initial, executable version of a system used to **demonstrate concepts, explore design options, and elicit feedback**. In requirements engineering, it helps stakeholders clarify unclear requirements; in system design, it allows developers to experiment with user interfaces and architectural trade-offs.",
            },
          ],
        },
        {
          id: "q8",
          number: "Question 8",
          title: "Software evolution",
          marks: 2,
          subQuestions: [
            {
              id: "q8-1",
              label: "1",
              marks: 2,
              question: "Explain the term software evolution.",
              answer:
                "**Software evolution** is the process where operational software is **modified to reflect changing customer, market, and organizational requirements** after it has gone into active use. Because business environments are inherently dynamic, the software supporting the enterprise must continually adapt to remain useful and relevant.",
            },
          ],
        },
        {
          id: "q9",
          number: "Question 9",
          title: "Agile Manifesto values",
          marks: 1,
          subQuestions: [
            {
              id: "q9-1",
              label: "1",
              marks: 1,
              question: "State two key values of the Agile Manifesto.",
              answer:
                "1. **Individuals and interactions** over processes and tools.\n2. **Working software** over comprehensive documentation.\n\n*(Other values: Customer collaboration over contract negotiation; Responding to change over following a plan.)*",
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------
    // SECTION B — Answer ANY TWO (40 marks)
    // ---------------------------------------------------------------
    {
      id: "section-b",
      name: "Section B: Long Answer",
      instructions: "Answer ANY TWO questions. Each question is worth 20 marks.",
      compulsory: false,
      questions: [
        {
          id: "q10",
          number: "Question 10",
          title: "Waterfall Model",
          marks: 20,
          subQuestions: [
            {
              id: "q10-a",
              label: "a",
              marks: 6,
              question: "Describe the waterfall model of software development.",
              answer:
                "The **waterfall model** is a classic **plan-driven process model** where all process activities are planned in advance and progress is measured against this schedule.\n\nIt consists of **separate and distinct phases** of specification and development. In principle, each phase must be completely finished, reviewed, and signed off before moving to the next. The output of one phase serves as the input to the next.\n\nIt is mostly used for large systems engineering projects developed at several geographical sites, where the plan-driven nature helps coordinate concurrent multidisciplinary work.",
            },
            {
              id: "q10-b",
              label: "b",
              marks: 10,
              question: "Explain the five phases of the waterfall model.",
              answer:
                "1. **Requirements analysis and definition:** System services, constraints, and goals are established by consultation with system users and defined in detail in a system specification.\n\n2. **System and software design:** The systems design process establishes an overall system architecture. Software design involves identifying and describing the fundamental software system abstractions and their relationships.\n\n3. **Implementation and unit testing:** The software design is realized as a set of programs or program units. Unit testing involves verifying that each unit meets its specification.\n\n4. **Integration and system testing:** Individual program units or programs are integrated and tested as a complete system to ensure that the software requirements have been met. After testing, the software is delivered to the customer.\n\n5. **Operation and maintenance:** The system is installed and put into practical use. Maintenance involves fixing errors discovered after release, improving implementation of units, and enhancing system services as new requirements are discovered.",
            },
            {
              id: "q10-c",
              label: "c",
              marks: 4,
              question: "State two situations where the waterfall model is appropriate.",
              answer:
                "1. When the **requirements are well-understood** and changes will be fairly limited during the design process.\n2. For **large, multi-site systems engineering projects** (e.g., aerospace, military, infrastructure) where hardware and software are developed concurrently by subcontracting partners and a detailed baseline plan is required for contract management.",
            },
          ],
        },
        {
          id: "q11",
          number: "Question 11",
          title: "Incremental Development",
          marks: 20,
          subQuestions: [
            {
              id: "q11-a",
              label: "a",
              marks: 6,
              question: "Explain the concept of incremental development.",
              answer:
                "**Incremental development** is a software process model where **specification, development, and validation are interleaved** rather than sequential. The system is developed as a **series of increments or versions**, with each increment adding functional increments to the prior baseline.\n\nIt may be implemented as plan-driven, agile, or a hybrid. Early increments include the most urgent customer requirements, allowing stakeholders to experiment with running software early and provide continuous feedback.",
            },
            {
              id: "q11-b",
              label: "b",
              marks: 6,
              question: "Discuss four advantages of incremental development.",
              answer:
                "1. **Reduced cost of accommodating changes:** Rework and re-documentation required due to changing customer requirements are much less than in the waterfall model.\n\n2. **Easier customer feedback:** Customers can comment on demonstrations of the software and see how much has actually been implemented.\n\n3. **Rapid delivery of useful software:** Increments can be released and deployed to customers quickly, delivering immediate business value.\n\n4. **Early validation of high-risk components:** Highest priority and high-risk requirements are addressed in the earliest increments, uncovering architectural bottlenecks early.",
            },
            {
              id: "q11-c",
              label: "c",
              marks: 6,
              question: "Describe two problems associated with incremental development.",
              answer:
                "1. **Process visibility is lower:** Managers need regular deliverables to measure progress. In rapid incremental delivery, it is often not cost-effective to produce detailed specification documents for every minor version.\n\n2. **System architecture tends to degrade:** Regular additions and changes corrupt the software structure unless development teams invest continuous time and budget into refactoring. Without refactoring, incorporating further changes becomes increasingly difficult and expensive.",
            },
          ],
        },
        {
          id: "q12",
          number: "Question 12",
          title: "Requirements Engineering",
          marks: 20,
          subQuestions: [
            {
              id: "q12-a",
              label: "a",
              marks: 8,
              question: "Explain the requirements engineering process.",
              answer:
                "The **requirements engineering (RE) process** is the structured process of establishing what services are required from a system and the constraints under which it must operate.\n\nIt is an **iterative cycle** composed of three main activities:\n\n1. **Requirements elicitation and analysis:** Interacting with system stakeholders (users, managers, domain experts) to discover their needs, business rules, and operational constraints.\n\n2. **Requirements specification:** Translating the elicited information into formal user and system requirement documents (using natural language, user stories, or mathematical models).\n\n3. **Requirements validation:** Systematically checking that the specified requirements are realistic, consistent, complete, verifiable, and truly reflect customer intentions.",
            },
            {
              id: "q12-b",
              label: "b",
              marks: 6,
              question: "Describe three stages of software testing.",
              answer:
                "1. **Component (Unit) testing:** Individual program components (functions, classes, modules) are tested in isolation by developers to ensure they conform to unit design specs.\n\n2. **System testing:** Integrated components are assembled into a complete system and tested to verify functional and non-functional requirements and test emergent properties (security, performance).\n\n3. **Customer (Acceptance) testing:** The complete system is tested with real operational customer data in the customer's target environment to verify that it meets actual operational needs before signing off.",
            },
            {
              id: "q12-c",
              label: "c",
              marks: 6,
              question: "Explain the difference between verification and validation.",
              answer:
                "- **Verification:** *\"Are we building the product right?\"*\n  Checking whether the software conforms to its stated technical specification and coding standards (e.g., code reviews, inspections, static analysis, unit tests).\n\n- **Validation:** *\"Are we building the right product?\"*\n  Checking whether the software meets the real needs and expectations of the customer and end-users (e.g., usability testing, customer acceptance testing, operational field trials).\n\nTogether, **Verification and Validation (V&V)** demonstrates that the system is fit for purpose.",
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------------
    // SECTION C — Case Study (20 marks) — Answer ONE
    // ---------------------------------------------------------------
    {
      id: "section-c",
      name: "Section C: Case Study",
      instructions: "Answer ONE question only (20 Marks).",
      compulsory: false,
      questions: [
        {
          id: "q13",
          number: "Question 13",
          title: "Case Study 1: Insulin Pump Control System",
          marks: 20,
          subQuestions: [
            {
              id: "q13-a",
              label: "a",
              marks: 4,
              question: "Explain why the insulin pump control system is classified as a safety-critical system.",
              answer:
                "The insulin pump is classified as **safety-critical** because **system failure or malfunction can cause direct physical injury, severe medical consequences, or death**.\n\n- If the system **under-delivers insulin**, the patient suffers from **hyperglycemia**, leading to diabetic ketoacidosis and irreversible organ damage (kidney and eye failure).\n- If the system **over-delivers insulin**, blood sugar drops catastrophically (**hypoglycemia**), inducing diabetic coma, brain damage, or immediate fatality.\n\nTherefore, the system has zero tolerance for operational failure.",
            },
            {
              id: "q13-b",
              label: "b",
              marks: 6,
              question: "Identify and describe three functional requirements for the insulin pump system.",
              answer:
                "1. **Monitor blood sugar level:** The system shall periodically read and process data from the subcutaneous glucose sensor.\n\n2. **Calculate required insulin dosage:** The system shall execute safe medical dosage algorithms based on the current blood glucose reading, rate of change, and previous insulin injection history.\n\n3. **Deliver insulin via micro-pump:** The system shall send precise electrical drive pulses to the micro-pump actuator to deliver the exact computed micro-dose of insulin into the bloodstream.",
            },
            {
              id: "q13-c",
              label: "c",
              marks: 6,
              question: "Identify and explain three important non-functional requirements for this system.",
              answer:
                "1. **Reliability:** The software must deliver a mean time between failures (MTBF) exceeding thousands of hours and must never inject incorrect dosage.\n\n2. **Availability:** The system must be available 24/7/365 to deliver scheduled basal doses and emergency boluses without rebooting or hanging.\n\n3. **Fail-Safe Operation / Safety:** In the event of any hardware or software anomaly (low battery, sensor fault, reservoir block), the pump must transition to a safe state (audible alarm, stop delivery) without endangering patient life.",
            },
            {
              id: "q13-d",
              label: "d",
              marks: 4,
              question: "Suggest two software engineering practices or techniques that could be used to improve the reliability and safety of this system. Briefly justify your answer.",
              answer:
                "1. **Formal Specification and Model Checking:** Using mathematical formal methods (such as Z or B notation) and automated state verification to prove that dangerous dosage states can never occur under any combination of inputs.\n\n2. **N-Version Programming / Redundant Sensor Voting:** Implementing independent algorithms or dual sensor checks that compare readings before executing pump delivery, catching individual sensor or arithmetic errors.",
            },
          ],
        },
        {
          id: "q14",
          number: "Question 14",
          title: "Case Study 2: Mentcare Patient Management System",
          marks: 20,
          subQuestions: [
            {
              id: "q14-a",
              label: "a",
              marks: 6,
              question: "Identify and describe three functional requirements of the Mentcare system.",
              answer:
                "1. **Individual Care Management:** The system shall allow authorized clinicians to create, edit, view, and summarize patient psychiatric medical records and treatment histories.\n\n2. **Patient Safety Monitoring & Alert Generation:** The system shall continuously monitor patient status and automatically flag warnings to medical staff if patients are at risk of self-harm, missed mandatory appointments, or risk to others.\n\n3. **Administrative and Statutory Reporting:** The system shall generate periodic management reports showing total patient throughput, compulsory sectioning statistics, drugs prescribed, and associated costs.",
            },
            {
              id: "q14-b",
              label: "b",
              marks: 4,
              question: "Identify and explain two non-functional requirements that are particularly important for this system.",
              answer:
                "1. **Confidentiality / Privacy:** Psychiatric health records are legally protected under health data regulations. Unauthorized disclosure must be prevented by role-based access control and strong cryptographic storage.\n\n2. **High Availability:** The system must be available whenever emergency consultations take place so clinicians can verify critical medication dosages, allergy contraindications, and suicide risk indicators in real time.",
            },
            {
              id: "q14-c",
              label: "c",
              marks: 4,
              question: "Discuss two ethical or privacy issues that software engineers must consider when developing the Mentcare system.",
              answer:
                "1. **Duty of Confidentiality:** Software engineers must safeguard patient confidentiality even without non-disclosure agreements. Unencrypted logs, test database leaks, or backdoors can lead to severe personal stigma for psychiatric patients.\n\n2. **Public Safety and Harm Prevention:** Engineers must ensure safety alerts (e.g., violent or suicidal tendencies) are prioritized and transmitted accurately without false negatives, balancing individual patient privacy against societal safety.",
            },
            {
              id: "q14-d",
              label: "d",
              marks: 6,
              question: "Suggest three security mechanisms that could be implemented to protect patient data within the system.",
              answer:
                "1. **Multi-Factor Authentication (MFA) & Smart Card Access:** Health staff must use clinical smart cards and PIN/biometric verification before accessing psychiatric records.\n\n2. **Role-Based Access Control (RBAC):** Restrict data fields based on clinical role (e.g., administrative receptionists see scheduling but cannot view psychiatric clinical notes; psychiatrists see diagnoses but not financial billing accounts).\n\n3. **End-to-End Encryption & Immutable Audit Logging:** Encrypt all patient data at rest (AES-256) and in transit (TLS 1.3), with tamper-proof audit trails recording every read, edit, and print action.",
            },
          ],
        },
      ],
    },
  ],
};
