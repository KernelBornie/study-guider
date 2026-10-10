import { Paper } from "@/types";

export const csc3600_StudyGuideModules: Paper = {
  id: "csc3600-sommerville-modules",
  slug: "sommerville-modules-guide",
  title: "Sommerville 18-Module Comprehensive Study Guide & Review Questions",
  year: 2026,
  duration: "Self-Paced / Comprehensive",
  totalMarks: 320,
  paperType: "Study Paper",
  venue: "UNZA Department of Computer Science",
  sections: [
    // -------------------------------------------------------------
    // PART 1: MODULES 1–6 (Core SE, Agile, Requirements, Modeling, Architecture)
    // -------------------------------------------------------------
    {
      id: "part-1-fundamentals",
      name: "Part 1: Modules 1–6 (Fundamentals, Processes, Agile, RE, Modeling & Architecture)",
      instructions: "Comprehensive Sommeville review questions with marks and full model answers for Modules 1 through 6.",
      compulsory: true,
      questions: [
        {
          id: "mod-1",
          number: "Module 1",
          title: "Introduction to Software Engineering & Case Studies (Q1–Q14)",
          marks: 50,
          subQuestions: [
            {
              id: "m1-q1",
              label: "Q1",
              marks: 2,
              question: "Define software engineering. (2 marks)",
              answer: "Software engineering is an engineering discipline concerned with all aspects of software production from early stages of system specification through to maintaining the system after it has gone into use. It involves using appropriate theories and methods to solve problems bearing in mind organizational and financial constraints.",
              keyPoints: ["Engineering discipline", "All aspects of software production", "Specification to maintenance", "Organizational & financial constraints"]
            },
            {
              id: "m1-q2",
              label: "Q2",
              marks: 4,
              question: "List and briefly explain four essential attributes of good software. (4 marks)",
              answer: "1. **Maintainability:** Software should be written so it can evolve to meet changing customer needs.\n2. **Dependability and Security:** Software should not cause physical or economic damage on failure; malicious users should not access the system.\n3. **Efficiency:** Software should not waste system resources (memory, processor cycles).\n4. **Acceptability:** Software must be acceptable to users (understandable, usable, compatible).",
              keyPoints: ["Maintainability", "Dependability & Security", "Efficiency", "Acceptability"]
            },
            {
              id: "m1-q3",
              label: "Q3",
              marks: 3,
              question: "Distinguish between generic software products and customized software products. (3 marks)",
              answer: `| Generic Products | Customized Products |
| :--- | :--- |
| Stand-alone systems sold to any customer in an open market | Commissioned and financed by a specific customer |
| Specification owned and controlled by developer | Specification owned and controlled by customer |
| Examples: Word processors, CAD tools, project management software | Examples: Embedded avionics, air traffic control, banking core systems |
| Developer decides on releases and modifications | Customer specifies and directs change decisions |`,
              keyPoints: ["Generic: open market, developer owns spec", "Customized: bespoke client, customer owns spec"]
            },
            {
              id: "m1-q4",
              label: "Q4",
              marks: 2,
              question: "Identify the four fundamental software process activities. (2 marks)",
              answer: "1. **Software specification:** Defining what the system should do and its operational constraints.\n2. **Software development (design & implementation):** Designing and programming the software.\n3. **Software validation:** Checking that the software meets customer requirements.\n4. **Software evolution:** Modifying software to adapt to changing customer and market requirements.",
              keyPoints: ["Specification", "Development", "Validation", "Evolution"]
            },
            {
              id: "m1-q5",
              label: "Q5",
              marks: 2,
              question: "What is meant by software validation? (2 marks)",
              answer: "Software validation is the process of checking that the software conforms to its specification and meets the real, genuine operational needs of the customer ('building the right product').",
              keyPoints: ["Conforms to specification and meets real user needs"]
            },
            {
              id: "m1-q6",
              label: "Q6",
              marks: 2,
              question: "Explain the term software evolution. (2 marks)",
              answer: "Software evolution is the ongoing process whereby an existing software system is modified and improved after it has gone into live use to reflect changing user needs, business circumstances, and hardware/software platforms.",
              keyPoints: ["Modification after live deployment to meet changing requirements"]
            },
            {
              id: "m1-q7",
              label: "Q7",
              marks: 3,
              question: "Why is professional software not simply the programs developed? (3 marks)",
              answer: "Professional software comprises not just the source code and executable programs, but also the associated system and user documentation, configuration files, libraries, support infrastructure, and installation guides. Furthermore, professional software is developed by teams for use by third parties rather than personal single-user scripts.",
              keyPoints: ["Programs + documentation + configuration + libraries", "Engineered for others, not personal scripts"]
            },
            {
              id: "m1-q8",
              label: "Q8",
              marks: 3,
              question: "What are the key challenges facing modern software engineering? (3 marks)",
              answer: "1. **Heterogeneity:** Software must operate across distributed networks encompassing diverse computing hardware, cloud infrastructures, and mobile devices.\n2. **Business and Social Change:** Organizations demand rapid turnaround to keep pace with hyper-competitive markets and emerging legislation.\n3. **Security and Trust:** Software permeates critical societal infrastructure, making dependability and cyber-resilience mandatory.\n4. **Scale:** Software must scale from tiny ultra-low-power IoT nodes to massive global planetary data centers.",
              keyPoints: ["Heterogeneity", "Business and Social Change", "Security and Trust", "Scale"]
            },
            {
              id: "m1-q9",
              label: "Q9",
              marks: 4,
              question: "Case Study: Explain why the insulin pump control system is classified as safety-critical. (4 marks)",
              answer: "The insulin pump control system is safety-critical because failure can cause severe human injury or death. An underdose leads to dangerously elevated blood sugar (hyperglycemia) causing permanent organ failure, blindness, or kidney disease. An overdose causes acute hypoglycemia, diabetic shock, irreversible coma, or sudden death.",
              keyPoints: ["Direct risk to human life", "Underdose -> hyperglycemia", "Overdose -> hypoglycemia/coma"]
            },
            {
              id: "m1-q10",
              label: "Q10",
              marks: 6,
              question: "Case Study: Identify three functional requirements for the insulin pump system. (6 marks)",
              answer: "1. **Monitor blood glucose level:** Continuously poll and interpret readings from the physical subcutaneous glucose sensor.\n2. **Calculate insulin dose:** Compute required basal and bolus micro-doses based on glucose level and rate of change.\n3. **Deliver insulin:** Actuate the micro-pump motor to inject the required insulin volume into the patient safely.",
              keyPoints: ["Monitor glucose", "Compute dose", "Actuate pump delivery"]
            },
            {
              id: "m1-q11",
              label: "Q11",
              marks: 6,
              question: "Case Study: Identify three important non-functional requirements for the insulin pump system. (6 marks)",
              answer: "1. **High Reliability:** Sensor readings and dose delivery computations must not crash or produce corrupt floating-point calculations.\n2. **High Availability:** Must be available 24/7 with zero downtime since diabetic patients require constant basal coverage.\n3. **Safety Interlock:** Physical and software interlocks must prevent delivery exceeding maximum hourly physiological limits.",
              keyPoints: ["Reliability", "Availability", "Safety interlocks"]
            },
            {
              id: "m1-q12",
              label: "Q12",
              marks: 6,
              question: "Case Study: Identify three functional requirements of the Mentcare psychiatric system. (6 marks)",
              answer: "1. **Individual care management:** Clinicians can create, edit, search, and review psychiatric patient medical histories.\n2. **Patient safety monitoring:** Automatically inspect patient records and issue warnings if patients miss treatment or express suicidal tendencies.\n3. **Administrative reporting:** Generate monthly anonymized statistics on patient numbers, treatment outcomes, and facility loads.",
              keyPoints: ["Individual care management", "Patient safety warnings", "Administrative reporting"]
            },
            {
              id: "m1-q13",
              label: "Q13",
              marks: 4,
              question: "Case Study: Identify two non-functional requirements for Mentcare. (4 marks)",
              answer: "1. **Privacy and Confidentiality:** Patient psychiatric notes must be strictly encrypted and access restricted to authorized personnel.\n2. **High Availability:** System must remain online continuously in clinical psychiatric emergency rooms where urgent history lookup is necessary.",
              keyPoints: ["Confidentiality", "High Availability"]
            },
            {
              id: "m1-q14",
              label: "Q14",
              marks: 4,
              question: "Case Study: Discuss two ethical issues in developing Mentcare. (4 marks)",
              answer: "1. **Confidentiality vs Public Interest:** Respecting patient record privacy while fulfilling legal obligations to alert authorities if a patient poses an active threat to themselves or others.\n2. **System Availability vs Human Safety:** Guaranteeing system reliability so that false warnings do not cause inappropriate patient confinement, nor missed warnings lead to self-harm.",
              keyPoints: ["Confidentiality vs public duty", "System safety vs individual liberty"]
            }
          ]
        },
        {
          id: "mod-2",
          number: "Module 2",
          title: "Software Processes (Waterfall, Incremental, Spiral & V&V) (Q1–Q11)",
          marks: 45,
          subQuestions: [
            {
              id: "m2-q1",
              label: "Q1",
              marks: 2,
              question: "State two disadvantages of the waterfall model. (2 marks)",
              answer: "1. Inflexible partitioning into distinct stages makes it difficult and expensive to accommodate changing customer requirements.\n2. Working software is only delivered at the end of the lifecycle, delaying customer feedback and value delivery.",
              keyPoints: ["Inflexible partitioning", "Late delivery of working software"]
            },
            {
              id: "m2-q2",
              label: "Q2",
              marks: 2,
              question: "What is a software prototype? (2 marks)",
              answer: "A software prototype is an initial executable version of a system or subsystem used to demonstrate concepts, explore design options, and elicit/validate customer requirements before full-scale engineering.",
              keyPoints: ["Initial version to demonstrate concepts and elicit requirements"]
            },
            {
              id: "m2-q3",
              label: "Q3",
              marks: 6,
              question: "Describe the waterfall model of software development. (6 marks)",
              answer: "The waterfall model is a plan-driven process model where all process activities are planned in advance and progress is tracked against the plan. It consists of separate, distinct, sequential phases where each phase must be fully complete and documented before moving to the next. It is suited for large systems engineering projects where a system is developed at several separate sites.",
              keyPoints: ["Plan-driven", "Sequential distinct phases", "Advance planning & milestone tracking"]
            },
            {
              id: "m2-q4",
              label: "Q4",
              marks: 10,
              question: "Explain the five phases of the waterfall model. (10 marks)",
              answer: "1. **Requirements analysis and definition:** Services and constraints are discovered and documented in an SRS.\n2. **System and software design:** Overall architecture is established and components partitioned.\n3. **Implementation and unit testing:** Design is coded into program units and tested individually.\n4. **Integration and system testing:** Units are assembled into a complete system and tested.\n5. **Operation and maintenance:** Deployed into live use, fixing bugs and evolving functionality.",
              keyPoints: ["Requirements", "Design", "Implementation & unit test", "Integration & system test", "Operation & maintenance"]
            },
            {
              id: "m2-q5",
              label: "Q5",
              marks: 4,
              question: "State two situations where the waterfall model is appropriate. (4 marks)",
              answer: "1. When requirements are well-understood, clearly defined, and changes will be strictly limited during development.\n2. For large systems engineering projects developed at multiple sites by subcontracted teams needing rigid interface coordination.",
              keyPoints: ["Stable requirements", "Multi-team distributed contracting"]
            },
            {
              id: "m2-q6",
              label: "Q6",
              marks: 6,
              question: "Explain the concept of incremental development. (6 marks)",
              answer: "Incremental development interleaves specification, development, and validation activities. The system is developed as a sequence of versions (increments), where each increment adds functionality to prior releases. Customers evaluate and provide continuous feedback on running demonstrations.",
              keyPoints: ["Interleaved activities", "Sequence of increments", "Continuous customer demonstration"]
            },
            {
              id: "m2-q7",
              label: "Q7",
              marks: 6,
              question: "Discuss four advantages of incremental development. (6 marks)",
              answer: "1. Reduced cost of accommodating changing requirements.\n2. Easier to obtain customer feedback on working software.\n3. More rapid delivery of useful software.\n4. Customers gain early business value from early increments.",
              keyPoints: ["Lower cost of change", "Better customer feedback", "Rapid delivery", "Early value"]
            },
            {
              id: "m2-q8",
              label: "Q8",
              marks: 6,
              question: "Describe two problems with incremental development. (6 marks)",
              answer: "1. **Process visibility is compromised:** Managers need regular deliverables to measure progress, but generating full documentation for every small version is not cost-effective.\n2. **System structure degrades:** Regular changes corrupt the underlying software architecture unless time and effort are spent on refactoring.",
              keyPoints: ["Lack of process visibility/documentation", "Architectural degradation without refactoring"]
            },
            {
              id: "m2-q9",
              label: "Q9",
              marks: 8,
              question: "Explain the requirements engineering process and its activities. (8 marks)",
              answer: "1. **Requirements elicitation and analysis:** Interacting with stakeholders to discover real requirements.\n2. **Requirements specification:** Documenting requirements in user-facing and technical formats.\n3. **Requirements validation:** Checking for consistency, completeness, and realism.\n4. **Requirements management:** Tracking changes over time.",
              keyPoints: ["Elicitation", "Specification", "Validation", "Management"]
            },
            {
              id: "m2-q10",
              label: "Q10",
              marks: 6,
              question: "Describe three stages of software testing. (6 marks)",
              answer: "1. **Component (Unit) testing:** Individual functions or classes tested in isolation.\n2. **System testing:** Integrated components tested as a complete whole.\n3. **Customer (Acceptance) testing:** Tested with real customer data to verify business fit.",
              keyPoints: ["Component testing", "System testing", "Customer testing"]
            },
            {
              id: "m2-q11",
              label: "Q11",
              marks: 6,
              question: "Explain the difference between verification and validation. (6 marks)",
              answer: "Verification asks: *'Are we building the product right?'* (checking conformance to specification).\nValidation asks: *'Are we building the right product?'* (checking software meets the customer's actual operational needs).",
              keyPoints: ["Verification = building product right", "Validation = building right product"]
            }
          ]
        },
        {
          id: "mod-3",
          number: "Module 3",
          title: "Agile Software Development (Scrum, XP & Agile Manifesto) (Q1–Q6)",
          marks: 30,
          subQuestions: [
            {
              id: "m3-q1",
              label: "Q1",
              marks: 2,
              question: "State the four key values of the Agile Manifesto. (2 marks)",
              answer: "1. **Individuals and interactions** over processes and tools.\n2. **Working software** over comprehensive documentation.\n3. **Customer collaboration** over contract negotiation.\n4. **Responding to change** over following a plan.",
              keyPoints: ["Individuals & interactions", "Working software", "Customer collaboration", "Responding to change"]
            },
            {
              id: "m3-q2",
              label: "Q2",
              marks: 3,
              question: "What is Extreme Programming (XP)? (3 marks)",
              answer: "Extreme Programming (XP) is an influential agile development method that takes iterative development to extreme levels: new versions are built several times daily, increments delivered every two weeks, test-first development is mandated, and all tests must pass for every build.",
              keyPoints: ["Iterative development pushed to extremes", "Frequent builds", "Test-first", "Pair programming"]
            },
            {
              id: "m3-q3",
              label: "Q3",
              marks: 8,
              question: "Describe four key XP practices. (8 marks)",
              answer: "1. **Incremental planning:** Requirements are recorded on story cards and prioritized by customer value.\n2. **Small releases:** Minimal useful functionality is developed first in 2-week iterations.\n3. **Test-first development:** Automated unit tests are written before implementing functionality.\n4. **Refactoring:** Continuous code restructuring is performed to keep design clean and maintainable.",
              keyPoints: ["Incremental planning", "Small releases", "Test-first development", "Refactoring"]
            },
            {
              id: "m3-q4",
              label: "Q4",
              marks: 4,
              question: "What is pair programming and its four benefits? (4 marks)",
              answer: "Pair programming involves two developers working collaboratively at the same workstation. Benefits:\n1. Supports collective code ownership.\n2. Serves as continuous informal peer review.\n3. Encourages aggressive refactoring.\n4. Spreads institutional system knowledge across the entire team.",
              keyPoints: ["Two programmers at one screen", "Collective ownership", "Continuous review", "Knowledge spreading"]
            },
            {
              id: "m3-q5",
              label: "Q5",
              marks: 6,
              question: "Describe the Scrum framework. (6 marks)",
              answer: "Scrum is an agile project management framework for iterative development:\n- Organized into fixed-length iterations called **Sprints** (usually 2–4 weeks).\n- Work items are prioritized in a **Product Backlog**.\n- Team selects items into a **Sprint Backlog** during Sprint Planning.\n- Holds 15-minute **Daily Scrums** (standups) to synchronize work.\n- Delivers a potentially shippable product increment evaluated in a **Sprint Review** and **Retrospective**.",
              keyPoints: ["Sprints (2-4 weeks)", "Product & Sprint Backlog", "Daily Scrum", "Sprint Review & Retrospective"]
            },
            {
              id: "m3-q6",
              label: "Q6",
              marks: 3,
              question: "What is the role of the Product Owner in Scrum? (3 marks)",
              answer: "The Product Owner represents the customer and business stakeholders. Responsibilities include defining product backlog items, prioritizing features based on business value, answering requirements questions, and accepting or rejecting completed work.",
              keyPoints: ["Represents customer", "Prioritizes Product Backlog", "Accepts/rejects increments"]
            }
          ]
        },
        {
          id: "mod-4-5-6",
          number: "Modules 4–6",
          title: "Requirements Engineering, System Modeling & Architecture (Q1–Q18)",
          marks: 45,
          subQuestions: [
            {
              id: "m4-q1",
              label: "Mod 4: RE",
              marks: 15,
              question: "Explain the types of requirements (Functional vs Non-Functional), user vs system requirements, validation, and misuse cases.",
              answer: `### Requirements Engineering Key Concepts

1. **User vs System Requirements:**
   - *User Requirements:* High-level natural language statements and diagrams specifying services and operational constraints for clients and non-technical managers.
   - *System Requirements:* Detailed structured documentation outlining precise functions, data models, and interface constraints defining what engineers must build.

2. **Functional vs Non-Functional Requirements:**
   - *Functional:* Direct services the system must provide (e.g. "Calculate patient insulin dose", "Allow students to book appointments").
   - *Non-Functional:* Constraints on services (e.g. performance throughput, 99.9% availability, encryption standards).

3. **Requirements Validation:**
   - Checks validity, consistency, completeness, realism, and verifiability. Critical because requirements errors discovered late in production cost up to 100x more to fix than coding bugs.

4. **Misuse Cases:**
   - Scenarios representing malicious or harmful interactions (shown as black ellipses in UML) used to identify security threats and formulate counter-requirements.`,
              keyPoints: ["User vs System requirements", "Functional vs Non-functional", "Requirements validation (validity, completeness)", "Misuse cases for security"]
            },
            {
              id: "m5-q1",
              label: "Mod 5: Modeling",
              marks: 15,
              question: "Explain the four system modeling perspectives and the five primary UML diagram categories.",
              answer: `### System Modeling Perspectives & UML

**Four Perspectives:**
1. **External Perspective:** Models system operational context and environment boundary.
2. **Interaction Perspective:** Models communications between users, systems, and collaborating objects.
3. **Structural Perspective:** Models static organization of system code, classes, and data entities.
4. **Behavioral Perspective:** Models dynamic runtime responses to events and operational workflows.

**Five Primary UML Diagrams:**
- **Activity Diagram:** Process flow, concurrency, and workflows.
- **Use Case Diagram:** External interactions, actors, and functional goals.
- **Sequence Diagram:** Time-ordered chronological message interactions between lifelines.
- **Class Diagram:** Static object structure, attributes, methods, associations, and multiplicity.
- **State Machine Diagram:** Object lifecycles and transitions between states triggered by events.`,
              keyPoints: ["External, Interaction, Structural, Behavioral perspectives", "Activity, Use Case, Sequence, Class, State diagrams"]
            },
            {
              id: "m6-q1",
              label: "Mod 6: Arch",
              marks: 15,
              question: "Explain why architectural design is important and describe MVC, Layered, Repository, and Client-Server architectural patterns.",
              answer: `### Software Architecture & Core Patterns

**Why Architecture is Important:**
1. **Stakeholder Communication:** Provides an understandable high-level abstraction for discussion with non-technical sponsors.
2. **Early System Analysis:** Allows early verification of non-functional properties (performance, maintainability, resilience).
3. **Large-scale Reuse:** Reusable across an entire family or product line of related systems.

**Key Patterns:**
- **Model-View-Controller (MVC):** Separates system data (Model) from presentation (View) and user input control (Controller). Supports multiple synchronized views.
- **Layered Architecture:** Decomposes systems into stacked layers where each layer consumes services only from the layer below. Supports incremental replacement.
- **Repository Pattern:** Centralized data repository accessed by independent components. Best for data-intensive tools (e.g. IDEs, compilers).
- **Client-Server Pattern:** Networked clients request services from centralized servers. Enables distributed computing and shared databases.`,
              keyPoints: ["Architecture importance: communication, analysis, reuse", "MVC pattern", "Layered pattern", "Repository pattern", "Client-Server pattern"]
            }
          ]
        }
      ]
    },
    // -------------------------------------------------------------
    // PART 2: MODULES 7–12 (Design, Testing, Evolution, Dependability, Reliability, Safety)
    // -------------------------------------------------------------
    {
      id: "part-2-engineering-dependability",
      name: "Part 2: Modules 7–12 (Design, Testing, Evolution, Dependability & Safety)",
      instructions: "Sommerville review questions and detailed model answers for Modules 7 through 12.",
      compulsory: true,
      questions: [
        {
          id: "mod-7-8-9",
          number: "Modules 7–9",
          title: "Design & Implementation, Software Testing & Software Evolution",
          marks: 45,
          subQuestions: [
            {
              id: "m7-q1",
              label: "Mod 7: Design",
              marks: 15,
              question: "Explain Object-Oriented Design, the Observer Pattern, Configuration Management, and Host-Target development.",
              answer: `### Module 7: Design & Implementation

1. **Object-Oriented Design (OOD):**
   - Designs classes, attributes, methods, and relationships. Objects encapsulate data and state with operations, creating a direct mapping between problem domain real-world entities and software units.

2. **Observer Pattern:**
   - Decouples an observed object (Subject) from its displays (Observers). When Subject state changes, all registered Observers are automatically notified and updated. Supports loose coupling.

3. **Configuration Management:**
   - Manages changes across the software lifecycle via:
     a) *Version management:* Tracking independent revisions and branches.
     b) *System integration:* Assembling compatible module versions into builds.
     c) *Problem tracking:* Logging and tracking bug fixes.
     d) *Release management:* Coordinating customer-facing deployment releases.

4. **Host-Target Development:**
   - Code is developed and compiled on a host machine (e.g. powerful workstation) but deployed and executed on a separate target hardware platform (e.g. embedded microcontroller).`,
              keyPoints: ["OOD encapsulates data and operations", "Observer pattern decouples state from presentation", "Configuration management activities", "Host-target development"]
            },
            {
              id: "m8-q1",
              label: "Mod 8: Testing",
              marks: 15,
              question: "Explain Validation vs Defect Testing, the three stages of development testing, Test-Driven Development, and Equivalence Partitioning.",
              answer: `### Module 8: Software Testing

1. **Validation vs Defect Testing:**
   - *Validation Testing:* Shows that software satisfies user requirements using normal, realistic inputs.
   - *Defect Testing:* Intentionally exposes defects and faults using unusual, extreme, and malformed inputs.

2. **Three Stages of Development Testing:**
   - *Unit Testing:* Testing individual methods and classes in isolation.
   - *Component Testing:* Testing groups of integrated units via component interfaces.
   - *System Testing:* Testing the fully assembled system for end-to-end interactions and emergent properties.

3. **Test-Driven Development (TDD):**
   - Write automated unit tests *before* writing code. Cycle: Write failing test -> write minimal code to pass test -> refactor code. Delivers regression protection and high test coverage.

4. **Equivalence Partitioning:**
   - Partitions input domains into subsets where all values are expected to behave equivalently. Tests boundary values and partition midpoints to minimize test cases while maximizing coverage.`,
              keyPoints: ["Validation vs Defect testing", "Unit -> Component -> System testing", "TDD Red-Green-Refactor", "Equivalence partitioning & boundary values"]
            },
            {
              id: "m9-q1",
              label: "Mod 9: Evolution",
              marks: 15,
              question: "Explain Software Evolution, Legacy Systems, three types of maintenance, strategic legacy options, and Reengineering vs Refactoring.",
              answer: `### Module 9: Software Evolution

1. **Software Evolution:**
   - The ongoing adaptation of software systems to satisfy changing organizational and technological demands.

2. **Legacy Systems:**
   - Older, established systems built with legacy languages and obsolete hardware that remain vital to core organizational business operations.

3. **Three Types of Maintenance:**
   - *Fault repairs (Corrective):* Fixing bugs and security vulnerabilities.
   - *Environmental adaptation (Adaptive):* Modifying software to operate on new OS, database, or hardware platforms.
   - *Functionality addition (Perfective):* Implementing new features to satisfy evolving business requirements.

4. **Strategic Options for Legacy Systems:**
   - *Scrap:* Decommission system if business processes have shifted.
   - *Maintain:* Keep stable systems running with minor patches.
   - *Reengineer:* Redocument and restructure code to restore maintainability.
   - *Replace:* Replace with modern custom software or COTS/ERP package.

5. **Reengineering vs Refactoring:**
   - *Refactoring:* Continuous small improvements made during active development to reduce complexity without changing behavior.
   - *Reengineering:* Major legacy transformation reconstructing architecture, data schemas, and documentation to extend lifespan.`,
              keyPoints: ["Evolution is vital for system survival", "Legacy systems: obsolete technology, critical business value", "Corrective, Adaptive, Perfective maintenance", "Refactoring (small) vs Reengineering (large)"]
            }
          ]
        },
        {
          id: "mod-10-11-12",
          number: "Modules 10–12",
          title: "Dependable Systems, Reliability Engineering & Safety Engineering",
          marks: 45,
          subQuestions: [
            {
              id: "m10-q1",
              label: "Mod 10: Dependability",
              marks: 15,
              question: "Explain the importance of dependability, the five dependability properties, redundancy and diversity, and dependable processes.",
              answer: `### Module 10: Dependable Systems

1. **Importance of Dependability:**
   - System failures disrupt thousands of users, cause immense financial damage, erode user trust, and in critical domains cause loss of life or environmental catastrophe.

2. **Five Dependability Properties:**
   - **Availability:** Probability that the system is operational and delivered for use at any given time.
   - **Reliability:** Probability of failure-free operation over a specified period.
   - **Safety:** Assurance that the system will not cause damage to people or the environment.
   - **Security:** Ability to withstand and resist accidental or deliberate malicious attacks.
   - **Resilience:** Ability to maintain essential core services in the presence of disruptive events.

3. **Redundancy and Diversity:**
   - *Redundancy:* Including spare capacity or duplicate components.
   - *Diversity:* Implementing redundant components using completely different designs, languages, or teams to prevent common-mode failures.

4. **Dependable Processes:**
   - Documented, auditable, standardized, and robust software processes incorporating rigorous V&V checkpoints.`,
              keyPoints: ["Five properties: Availability, Reliability, Safety, Security, Resilience", "Redundancy (duplicates) + Diversity (different types)", "Dependable processes are auditable and standardized"]
            },
            {
              id: "m11-q1",
              label: "Mod 11: Reliability",
              marks: 15,
              question: "Explain the Fault-Error-Failure model, the three approaches to reliability, and the three reliability metrics (POFOD, ROCOF, AVAIL).",
              answer: `### Module 11: Reliability Engineering

1. **Fault-Error-Failure Model:**
   - **Human Error:** A developer mistake or misunderstanding.
   - **System Fault (Bug):** The physical manifestation of error in code or specification.
   - **System Error:** An internal erroneous system state during execution.
   - **System Failure:** Observable deviation from expected specification at runtime.

2. **Three Approaches to Improving Reliability:**
   - *Fault Avoidance:* Using defensive programming, strong type systems, and formal specs to prevent injecting faults.
   - *Fault Detection and Removal:* Rigorous testing, reviews, and inspections to discover and fix faults before delivery.
   - *Fault Tolerance:* Architectural mechanisms (e.g. recovery blocks, exception handlers) enabling systems to maintain operation despite active runtime faults.

3. **Three Reliability Metrics:**
   - **POFOD (Probability of Failure on Demand):** Probability that a transaction request triggers failure. (Used for safety/protection shutdown systems).
   - **ROCOF (Rate of Occurrence of Failures):** Frequency of failures observed per operational unit time. (Used for continuous 24/7 telecommunications).
   - **AVAIL (Availability):** Ratio of operational uptime to total time: $\\text{AVAIL} = \\frac{\\text{MTTF}}{\\text{MTTF} + \\text{MTTR}}$.`,
              keyPoints: ["Error -> Fault -> Internal Error State -> Failure", "Fault avoidance, detection/removal, tolerance", "POFOD, ROCOF, Availability"]
            },
            {
              id: "m12-q1",
              label: "Mod 12: Safety",
              marks: 15,
              question: "Explain Safety-Critical Systems, the Hazard-Driven Safety Process, Safety Cases, and Fault Tree Analysis (FTA).",
              answer: `### Module 12: Safety Engineering

1. **Safety-Critical Systems:**
   - Systems where operational failure can cause human death, bodily injury, or catastrophic physical destruction (e.g. medical infusion pumps, railway signalling, avionics flight controls).

2. **Hazard-Driven Safety Specification:**
   - *Hazard Identification:* Cataloging potential hazards into a Hazard Register.
   - *Hazard Assessment:* Evaluating severity and likelihood of each hazard.
   - *Hazard Analysis:* Determining root causes and contributory system states.
   - *Risk Reduction:* Formulating safety requirements to prevent, detect, or mitigate hazards.

3. **Safety Case:**
   - A structured, auditable body of documented evidence demonstrating that a system is adequately safe to operate within its prescribed environment.

4. **Fault Tree Analysis (FTA):**
   - A top-down deductive hazard analysis technique. Begins with a top-level catastrophe/hazard at the root and traces backward through logical AND/OR gates to uncover combinations of component failures that cause the hazard.`,
              keyPoints: ["Safety-critical failure causes physical harm", "Hazard identification, assessment, analysis, risk reduction", "Safety case: documented proof of safety", "FTA: top-down logic gate root-cause decomposition"]
            }
          ]
        }
      ]
    },
    // -------------------------------------------------------------
    // PART 3: MODULES 13–18 (Security, Resilience, Reuse, CBSE, Distributed, Services)
    // -------------------------------------------------------------
    {
      id: "part-3-modern-distributed",
      name: "Part 3: Modules 13–18 (Security, Resilience, Reuse, CBSE, Distributed & Services)",
      instructions: "Sommerville review questions and detailed model answers for Modules 13 through 18, plus quick reference comparison tables.",
      compulsory: true,
      questions: [
        {
          id: "mod-13-14-15",
          number: "Modules 13–15",
          title: "Security Engineering, Resilience Engineering & Software Reuse",
          marks: 45,
          subQuestions: [
            {
              id: "m13-q1",
              label: "Mod 13: Security",
              marks: 15,
              question: "Explain Security Engineering, the CIA triad, the risk assessment process, and top security design guidelines.",
              answer: `### Module 13: Security Engineering

1. **Security Dimensions (The CIA Triad):**
   - **Confidentiality:** Information is protected from unauthorized disclosure.
   - **Integrity:** Information and software cannot be modified or corrupted by unauthorized parties.
   - **Availability:** Authorized users maintain timely, reliable access to assets.

2. **Security Risk Assessment Process:**
   - Asset Identification -> Asset Valuation -> Threat Identification -> Vulnerability Analysis -> Risk Estimation -> Security Controls Identification -> Requirements Definition.

3. **Top Security Design Guidelines:**
   - *Defense in depth:* Multiple concentric security perimeters.
   - *Fail securely:* In failure states, default to closed/locked rather than open.
   - *Balance security and usability:* Avoid overly punitive security measures that cause users to bypass controls.
   - *Log user actions:* Maintain tamper-evident audit trails.
   - *Compartmentalize assets:* Limit blast radius if one subsystem is breached.`,
              keyPoints: ["CIA Triad: Confidentiality, Integrity, Availability", "Risk assessment process", "Defense in depth, fail securely, compartmentalize assets"]
            },
            {
              id: "m14-q1",
              label: "Mod 14: Resilience",
              marks: 15,
              question: "Define Resilience Engineering, explain the four resilience activities, and describe Reason's Swiss Cheese model.",
              answer: `### Module 14: Resilience Engineering

1. **Resilience Engineering:**
   - The capability of an operational system to maintain continuity of critical business services in the presence of disruptive shocks, hardware crashes, or hostile cyber-attacks.

2. **Four Resilience Activities:**
   - **Recognition:** Early detection of anomalies and symptoms of operational degradation.
   - **Resistance:** Active measures to minimize damage and prevent localized faults from propagating.
   - **Recovery:** Rapidly restoring essential, mission-critical services in degraded mode.
   - **Reinstatement:** Restoring full non-critical services and standard operational state.

3. **Reason's Swiss Cheese Model:**
   - Defensive barriers are depicted as slices of Swiss cheese.
   - Holes represent latent conditions and active human/software vulnerabilities that constantly change position and size.
   - An accident occurs only when holes across multiple defensive layers align simultaneously, allowing an operational hazard to penetrate all barriers.`,
              keyPoints: ["Maintains critical services during disruption", "Recognition, Resistance, Recovery, Reinstatement", "Swiss cheese model: alignment of latent vulnerabilities"]
            },
            {
              id: "m15-q1",
              label: "Mod 15: Reuse",
              marks: 15,
              question: "Explain the benefits and challenges of software reuse, software product lines, and application frameworks.",
              answer: `### Module 15: Software Reuse

1. **Benefits of Software Reuse:**
   - Faster time-to-market, lower overall development costs, higher dependability (reused code is already production-tested), and effective utilization of specialist expertise.

2. **Challenges of Software Reuse:**
   - High initial investment creating component libraries, 'Not-Invented-Here' cultural resistance, maintenance overhead as underlying components evolve, and lack of specialized search tooling.

3. **Software Product Lines:**
   - A family of software applications sharing a core architectural foundation and common components, where each individual application is customized and configured for specific market niches or client needs.

4. **Application Frameworks:**
   - Reusable collections of abstract and concrete classes designed to implement a generic architecture for a specific category of applications (e.g. Django, Spring, React). Developers customize behavior via inheritance and callback hooks.`,
              keyPoints: ["Accelerated delivery & proven dependability", "Product lines: shared core architecture + specific variants", "Application frameworks provide skeleton architecture"]
            }
          ]
        },
        {
          id: "mod-16-17-18",
          number: "Modules 16–18",
          title: "CBSE, Distributed Systems & Service-Oriented SE",
          marks: 45,
          subQuestions: [
            {
              id: "m16-q1",
              label: "Mod 16: CBSE",
              marks: 15,
              question: "Define a software component, list five essential characteristics, and explain component interfaces and composition types.",
              answer: `### Module 16: Component-Based Software Engineering (CBSE)

1. **Software Component Definition:**
   - An independent, deployable software unit conforming to a standard component model that can be assembled with other components without modification.

2. **Five Essential Characteristics:**
   - **Composable:** All interactions occur strictly through published interfaces.
   - **Deployable:** Stand-alone and independently installable.
   - **Documented:** Clear interface specification and usage guidelines.
   - **Independent:** Free from implicit dependencies on internal implementation details.
   - **Standardized:** Conforms to an established industry component standard (e.g. COM, JavaBeans, OSGi).

3. **Component Interfaces:**
   - *Provides Interface:* Services and APIs the component exposes to consumers.
   - *Requires Interface:* Services the component depends upon from external providers.

4. **Three Types of Composition:**
   - *Sequential Composition:* Component A executes and passes its output as input to Component B.
   - *Hierarchical Composition:* Component A calls Component B as an internal subroutine.
   - *Additive Composition:* Two components are grouped together to expose a unified combined interface.`,
              keyPoints: ["Composable, Deployable, Documented, Independent, Standardized", "Provides vs Requires interfaces", "Sequential, Hierarchical, Additive composition"]
            },
            {
              id: "m17-q1",
              label: "Mod 17: Distributed",
              marks: 15,
              question: "Define distributed systems, list five advantages, compare thin-client vs fat-client, and describe peer-to-peer architecture.",
              answer: `### Module 17: Distributed Software Engineering

1. **Distributed System Definition:**
   - A collection of independent, autonomous computers connected via a network that appears to end-users as a single coherent computing system.

2. **Five Key Advantages:**
   - Resource sharing, openness, concurrency, scalability, and fault tolerance.

3. **Thin-Client vs Fat-Client Architectures:**
   - *Thin-Client:* Only presentation logic runs on client (e.g. web browser); all business logic and data storage reside on servers. Simple client administration, but heavy network and server load.
   - *Fat-Client:* Presentation and business logic execute on the client device; only database storage resides on servers. Leverages client CPU power, but complex deployment and update management.

4. **Peer-to-Peer (P2P) Architecture:**
   - A decentralized network architecture where all participating nodes (peers) act as both clients and servers with equal privileges, eliminating centralized points of failure (e.g. BitTorrent, blockchain).`,
              keyPoints: ["Independent computers appearing as single system", "Thin-client (server-heavy) vs Fat-client (client-heavy)", "P2P: decentralized, peers act as client & server"]
            },
            {
              id: "m18-q1",
              label: "Mod 18: Services",
              marks: 15,
              question: "Define a Web Service, describe SOA, compare SOAP vs RESTful services, and explain core standards (WSDL, SOAP, REST).",
              answer: `### Module 18: Service-Oriented Software Engineering

1. **Web Service Definition:**
   - A loosely coupled, reusable software module encapsulating discrete functionality, programmatically accessible over the Internet using standard protocols.

2. **Service-Oriented Architecture (SOA):**
   - An architectural approach where applications are constructed by orchestrating independently published, platform-neutral services communicating over networks.

3. **SOAP vs REST Comparison:**
   | Feature | SOAP-Based Services | RESTful Web Services |
   | :--- | :--- | :--- |
   | **Philosophy** | Operation-oriented (RPC) | Resource-oriented (URI) |
   | **Protocol / Data Format** | XML-only payload wrapped in SOAP envelopes | Lightweight JSON, XML, or HTML |
   | **Standards** | Complex WS-* stack (WSDL, WS-Security) | Standard HTTP methods (GET, POST, PUT, DELETE) |
   | **Overhead** | Higher processing and bandwidth overhead | Lightweight, stateless, lower latency |
   | **Best Used For** | Formal enterprise B2B banking transactions | Web apps, mobile applications, microservices |

4. **Core Standards:**
   - **SOAP:** XML message exchange protocol.
   - **WSDL:** Web Services Description Language defining service operations and endpoints.
   - **REST:** Representational State Transfer using URI resource identifiers and stateless HTTP verbs.`,
              keyPoints: ["Web services: loosely coupled reusable network endpoints", "SOA: orchestrates independent services", "SOAP (XML, rigid WS-*) vs REST (JSON, HTTP verbs, lightweight)"]
            }
          ]
        }
      ]
    },
    // -------------------------------------------------------------
    // PART 4: QUICK REFERENCE TABLES & EXAM PREPARATION TIPS
    // -------------------------------------------------------------
    {
      id: "part-4-quick-reference-exam-tips",
      name: "Part 4: Quick Reference Tables & Exam Preparation Tips",
      instructions: "High-yield reference comparison tables and Sommerville exam preparation checklists.",
      compulsory: false,
      questions: [
        {
          id: "m-ref-tables",
          number: "Reference Tables",
          title: "Quick Reference Tables (Processes, UML, Testing & Dependability)",
          marks: 0,
          subQuestions: [
            {
              id: "m-ref-tab-1",
              label: "1",
              marks: 0,
              question: "Software Process Models Comparison Table",
              answer: `### Software Process Models Comparison

| Model | Key Feature | When to Use |
| :--- | :--- | :--- |
| **Waterfall** | Sequential phases with formal stage gates | Well-understood, stable requirements; multi-site subcontracting |
| **Incremental** | Interleaved specification, development, and validation | Changing requirements; rapid delivery of business value |
| **Spiral** | Explicit risk analysis and iterative risk resolution | High-risk, complex, novel systems engineering projects |
| **Agile** | Rapid delivery, small teams, customer collaboration | Small/medium systems with rapidly evolving needs |
| **RUP** | Architecture-centric, use-case driven | Large-scale enterprise systems development |`,
              keyPoints: ["Waterfall, Incremental, Spiral, Agile, RUP comparison"]
            },
            {
              id: "m-ref-tab-2",
              label: "2",
              marks: 0,
              question: "UML Diagrams Summary Table",
              answer: `### UML Diagrams Summary

| Diagram | Type | Primary Purpose |
| :--- | :--- | :--- |
| **Use Case** | Behavioral | Interactions between external actors and system services |
| **Class** | Structural | Static classes, attributes, operations, and associations |
| **Sequence** | Behavioral | Time-ordered chronological message interactions |
| **Communication** | Behavioral | Structural layout and collaboration links between objects |
| **Activity** | Behavioral | Process workflows, concurrent branches, and swimlanes |
| **State Machine** | Behavioral | Dynamic transitions between states triggered by events |
| **Component** | Structural | Software modules, provided interfaces, and required interfaces |
| **Deployment** | Structural | Physical execution nodes and hardware distribution |`,
              keyPoints: ["UML behavioral vs structural diagrams summary"]
            },
            {
              id: "m-ref-tab-3",
              label: "3",
              marks: 0,
              question: "Testing Types Summary Table",
              answer: `### Testing Types Summary

| Testing Stage | Purpose | Executed By |
| :--- | :--- | :--- |
| **Unit Testing** | Test individual program functions, methods, or classes | Developers |
| **Component Testing** | Test integrated groups of units via component interfaces | Developers |
| **System Testing** | Test complete integrated system for emergent properties | Dedicated Test Team |
| **Release Testing** | Validate complete system against requirements before delivery | Independent QA Team |
| **User (Acceptance) Testing** | Verify system meets operational needs in user environment | End Users / Customer |`,
              keyPoints: ["Unit, Component, System, Release, User testing summary"]
            },
            {
              id: "m-ref-tab-4",
              label: "4",
              marks: 0,
              question: "Dependability Properties Summary Table",
              answer: `### Dependability Properties Summary

| Property | Description | Measurement Metric |
| :--- | :--- | :--- |
| **Availability** | Probability system is operational and ready for use when needed | $\\text{AVAIL} = \\frac{\\text{MTTF}}{\\text{MTTF} + \\text{MTTR}}$ |
| **Reliability** | Probability of failure-free operation over specified time | $\\text{POFOD}$ (Demand), $\\text{ROCOF}$ (Rate) |
| **Safety** | Judgment of likelihood system will not cause damage to people/environment | Qualitative / Hazard Severity Indices |
| **Security** | Judgment of likelihood system resists unauthorized intrusions and attacks | Vulnerability classification, penetration testing |
| **Resilience** | Capability to maintain critical services during disruptive events | Recovery time, service degradation limits |`,
              keyPoints: ["Availability, Reliability, Safety, Security, Resilience"]
            }
          ]
        },
        {
          id: "m-exam-prep",
          number: "Exam Tips",
          title: "Exam Preparation Tips, Key Formulas & Ethical Principles",
          marks: 0,
          subQuestions: [
            {
              id: "m-exam-tip-1",
              label: "1",
              marks: 0,
              question: "Sommerville Exam Preparation Strategy: Core Question Patterns",
              answer: `### Common Exam Question Categories

1. **Definitions:**
   - Software engineering, requirements (functional vs non-functional), verification vs validation, software evolution, software component, distributed system, web service.

2. **Comparisons:**
   - Verification vs Validation
   - Functional vs Non-functional requirements
   - Thin-Client vs Fat-Client architectures
   - SOAP vs RESTful web services
   - Waterfall vs Agile incremental development
   - Aggregation vs Composition

3. **Processes & Workflows:**
   - Requirements engineering process (Elicitation -> Specification -> Validation -> Management)
   - Three stages of testing (Unit -> Component -> System -> Acceptance)
   - Software evolution types (Corrective, Adaptive, Perfective)
   - Hazard-driven safety specification process (Identification -> Assessment -> Analysis -> Reduction)

4. **UML Diagrams:**
   - Draw Use Case diagrams with actors and system boundary
   - Draw Sequence diagrams with chronological messages
   - Draw Activity diagrams with swimlanes and decision diamonds
   - Draw State Machine diagrams with transitions, guards, and actions
   - Interpret and draw Class diagrams with multiplicity and associations

5. **Sommerville Case Studies:**
   - **Insulin Pump:** Safety-critical control system, sensor sampling, dose calculation, micro-pump actuation, fail-safe interlocks.
   - **Mentcare:** Psychiatric health management, privacy/confidentiality, safety monitoring (suicide prevention), regulatory reporting.
   - **Smart Campus Healthcare System (SCHS):** UNZA student clinic, SIS database integration, NHIMA national insurance, appointment booking.`,
              keyPoints: ["Definitions, Comparisons, Processes, UML Diagrams, Case Studies"]
            },
            {
              id: "m-exam-tip-2",
              label: "2",
              marks: 0,
              question: "Key Formulas and Reliability Metrics",
              answer: `### Key Formulas and Metrics

| Metric | Formula / Description |
| :--- | :--- |
| **POFOD** | Probability of Failure on Demand (e.g. $10^{-3}$ = 1 failure per 1,000 service demands) |
| **ROCOF** | Rate of Occurrence of Failures (number of failures per operational unit time) |
| **AVAIL** | $\\text{Availability} = \\frac{\\text{Uptime}}{\\text{Uptime} + \\text{Downtime}} = \\frac{\\text{MTTF}}{\\text{MTTF} + \\text{MTTR}}$ |
| **Cyclomatic Complexity** | $V(G) = E - N + 2 = P + 1$ (McCabe basis path count; $E$ = edges, $N$ = nodes, $P$ = predicate decision nodes) |`,
              keyPoints: ["POFOD, ROCOF, Availability, Cyclomatic Complexity"]
            },
            {
              id: "m-exam-tip-3",
              label: "3",
              marks: 0,
              question: "Five Ethical Considerations in Software Engineering",
              answer: `### Ethical Considerations

1. **Confidentiality:** Respect the confidentiality of employer and client records regardless of whether a formal non-disclosure agreement was signed.
2. **Competence:** Do not misrepresent your level of competence or knowingly accept work that is outside your technical capabilities.
3. **Intellectual Property:** Protect intellectual property rights, copyrights, and patents belonging to employers, clients, and authors.
4. **Computer Misuse:** Do not use software engineering skills to inappropriately access, damage, or compromise computer systems belonging to others.
5. **Public Safety:** Act consistently with the public interest; refuse to release software if doing so endangers human safety or health.`,
              keyPoints: ["Confidentiality, Competence, IP, Computer Misuse, Public Safety"]
            }
          ]
        }
      ]
    }
  ]
};
