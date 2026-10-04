import { Paper } from "@/types";

export const csc4630_LethbridgeStudyGuide: Paper = {
  id: "csc4630-lethbridge-study-guide",
  slug: "lethbridge-study-guide",
  title: "Complete Study Guide & Predicted Exam (Lethbridge & Laganière 2nd Edition)",
  year: 2026,
  duration: "3 Hours",
  totalMarks: 100,
  paperType: "Final Exam",
  venue: "The University of Zambia · School of Natural Sciences",
  sections: [
    {
      id: "part-1-topics-1-5",
      name: "Part 1: Requirements, Object Analysis, Design Patterns & Architecture (Topics 1–5)",
      instructions: "Core theoretical foundations and exam-ready models from Chapters 2, 4, 5, 6, 8, and 9.",
      compulsory: true,
      questions: [
        {
          id: "lsg-q1",
          number: "Topic 1",
          title: "Advanced Requirements Engineering & Domain Analysis",
          marks: 20,
          subQuestions: [
            {
              id: "lsg-q1-1",
              label: "1.1",
              marks: 8,
              question: "Define requirements engineering and explain the four types of requirements. [8 marks]",
              answer: "### Requirements Engineering (Sommerville, 2016; Lethbridge & Laganière, 2005)\n\n**Definition:** Requirements engineering is the disciplined process of establishing the services that the customer requires from a software system and the environmental/operational constraints under which it must operate.\n\n#### The Four Types of Requirements:\n1. **Functional Requirements:** Describe what the system should do—inputs, outputs, data storage, computations, and timing of services (p. 119).\n2. **Quality Requirements:** Constrain the design to meet specified non-functional quality levels such as usability, efficiency, reliability, availability, and maintainability (p. 123).\n3. **Platform Requirements:** Constrain the hardware, operating system, network, and technology environment in which the system must execute (p. 124).\n4. **Process Requirements:** Constrain the project plan, engineering methodology (e.g. Scrum), development standards, and delivery milestones/budget (p. 125).",
              keyPoints: ["Requirements engineering definition", "Functional, Quality, Platform, Process requirements"]
            },
            {
              id: "lsg-q1-2",
              label: "1.2",
              marks: 12,
              question: "Draw a use case diagram for an online examination system and describe two use cases in detail. [12 marks]",
              answer: "### Online Examination System Use Case Diagram\n\n```mermaid\nflowchart LR\n  subgraph OES[\"Online Examination System\"]\n    UC_LOGIN([\"Login & Authenticate\"])\n    UC_SIT([\"Sit Exam\"])\n    UC_SUBMIT([\"Submit Exam Responses\"])\n    UC_RESULTS([\"View Results\"])\n    UC_CREATE([\"Create / Set Exam\"])\n    UC_MARK([\"Mark Exam Submissions\"])\n  end\n\n  STUDENT[\"🧑‍🎓 Student\"] --> UC_LOGIN\n  STUDENT --> UC_SIT\n  STUDENT --> UC_SUBMIT\n  STUDENT --> UC_RESULTS\n\n  LECTURER[\"👨‍🏫 Lecturer\"] --> UC_LOGIN\n  LECTURER --> UC_CREATE\n  LECTURER --> UC_MARK\n  LECTURER --> UC_RESULTS\n```\n\n---\n\n#### Detailed Use Case 1: Sit Exam\n- **Actors:** Student\n- **Goals:** Complete and submit an examination paper within allotted time.\n- **Preconditions:** Student is logged in; exam session is active and unexpired.\n- **Main Steps:**\n  1. Student selects active exam → System displays questions.\n  2. Student inputs responses → System saves draft answers automatically.\n  3. Student confirms submission → System seals responses and issues confirmation.\n- **Postconditions:** Exam responses recorded; student marked as completed.\n\n#### Detailed Use Case 2: Mark Exam\n- **Actors:** Lecturer\n- **Goals:** Assess and award scores for submitted student answers.\n- **Preconditions:** Exam closed; submissions available.\n- **Main Steps:**\n  1. Lecturer selects exam → System displays submission queue.\n  2. Lecturer inputs marks and feedback → System computes running totals.\n  3. Lecturer publishes results → System updates student records.\n- **Postconditions:** Marks saved and published for viewing.",
              keyPoints: ["Mermaid use case diagram for online examination", "Sit Exam and Mark Exam detailed templates"]
            }
          ]
        },
        {
          id: "lsg-q2",
          number: "Topic 2",
          title: "Advanced Object Analysis & University Registration Class Diagram",
          marks: 20,
          subQuestions: [
            {
              id: "lsg-q2-1",
              label: "2.1",
              marks: 8,
              question: "Define the following object-oriented concepts: (i) Object, (ii) Class, (iii) Inheritance, (iv) Polymorphism. [8 marks]",
              answer: "### Core Object-Oriented Concepts (Lethbridge & Laganière, 2005)\n\n1. **Object:** A chunk of structured data in a running software system that encapsulates properties (state/attributes) and behaviour (operations/methods) (p. 32).\n2. **Class:** A software module and blueprint that represents and defines a set of similar objects, its instances (p. 33).\n3. **Inheritance:** The mechanism by which a subclass implicitly possesses all features (attributes, associations, operations) defined in its superclass (p. 40).\n4. **Polymorphism:** A property of object-oriented software by which an abstract operation may be executed in different ways across different classes in a hierarchy (p. 38).",
              keyPoints: ["Object = runtime entity with state and behaviour", "Class = blueprint module", "Inheritance = subclass acquires features", "Polymorphism = operation executes differently across types"]
            },
            {
              id: "lsg-q2-2",
              label: "2.2",
              marks: 12,
              question: "Draw a UML class diagram for a university course registration system with at least 5 classes, attributes, operations, associations, and multiplicities. [12 marks]",
              answer: "### University Course Registration Class Diagram\n\n```mermaid\nclassDiagram\n  class Student {\n    +String studentID\n    +String name\n    +String programme\n    +register(Course c)\n    +drop(Course c)\n  }\n\n  class Course {\n    +String courseCode\n    +String title\n    +int credits\n    +getPrerequisites()\n  }\n\n  class Registration {\n    +DateTime registrationDate\n    +float grade\n    +calculateGrade()\n  }\n\n  class CourseSection {\n    +String sectionID\n    +String semester\n    +int capacity\n    +addStudent(Student s)\n    +isFull() boolean\n  }\n\n  class Lecturer {\n    +String staffID\n    +String name\n    +String department\n    +teach(CourseSection sec)\n  }\n\n  Student \"1\" --> \"*\" Registration : initiates\n  Registration \"*\" --> \"1\" CourseSection : pertains to\n  Course \"1\" *-- \"1..*\" CourseSection : offers\n  Lecturer \"1\" --> \"*\" CourseSection : teaches\n```\n\n- **Abstraction-Occurrence Pattern:** `Course` represents the Abstraction, while `CourseSection` represents specific Occurrences (e.g. Semester 1 vs Semester 2).\n- **Association Class:** `Registration` models the many-to-many relationship between `Student` and `CourseSection`, holding grade and registration date.",
              keyPoints: ["5 classes: Student, Course, Registration, CourseSection, Lecturer", "Multiplicities and associations", "Abstraction-occurrence pattern between Course and CourseSection"]
            }
          ]
        },
        {
          id: "lsg-q3",
          number: "Topic 3",
          title: "Design Patterns: Singleton & Sequence Modelling",
          marks: 20,
          subQuestions: [
            {
              id: "lsg-q3-1",
              label: "3.1",
              marks: 10,
              question: "Explain the Singleton design pattern with a UML diagram and Java implementation. Discuss forces and antipatterns. [10 marks]",
              answer: "### The Singleton Pattern (Lethbridge & Laganière, 2005, p. 231)\n\n**Intent:** Ensures that a class has **only one instance** and provides a global, unified point of access to it.\n\n```mermaid\nclassDiagram\n  class Company {\n    -Company theCompany$ \n    -Company()\n    +getInstance()$ Company\n    +getCompanyName() String\n  }\n```\n\n```java\npublic class Company {\n    // Private static instance variable\n    private static Company theCompany;\n\n    // Private constructor prevents external instantiation\n    private Company() {}\n\n    // Public static accessor with lazy initialization\n    public static synchronized Company getInstance() {\n        if (theCompany == null) {\n            theCompany = new Company();\n        }\n        return theCompany;\n    }\n}\n```\n\n- **Forces:** If public constructors are allowed, multiple instances can be spawned, causing state conflicts. The single instance must be globally accessible to all system components.\n- **Antipatterns to Avoid:** Overuse of Singletons effectively introduces hidden global state, creating tight coupling and making automated unit testing difficult.",
              keyPoints: ["Private constructor + private static instance + public static getInstance()", "Forces: Guaranteed single instance", "Antipattern: Hidden global state and testing difficulty"]
            },
            {
              id: "lsg-q3-2",
              label: "3.2",
              marks: 10,
              question: "Draw a sequence diagram for a student registering for a course section. Show the creation of a Registration object. [10 marks]",
              answer: "### Sequence Diagram for Student Registration\n\n```mermaid\nsequenceDiagram\n  autonumber\n  actor Student\n  participant GUI as :RegistrationUI\n  participant Section as :CourseSection\n  participant Reg as :Registration\n\n  Student->>GUI: requestToRegister(studentID)\n  GUI->>Section: requestToRegister(studentID)\n  Section->>Section: checkCapacity()\n  Section->>Reg: <<create>>(studentID, sectionID)\n  Reg-->>Section: regInstance\n  Section->>Section: addToRegisteredList(regInstance)\n  Section-->>GUI: registrationSuccess\n  GUI-->>Student: displayConfirmation(scheduleDetails)\n```\n\n*Explanation:* The sequence diagram visualizes message chronology from top to bottom, including internal validation, the `<<create>>` instantiation of the `Registration` object, and the confirmation return flow.",
              keyPoints: ["Sequence diagram with Student, UI, CourseSection, Registration", "<<create>> instantiation of Registration object", "Return confirmation flow"]
            }
          ]
        },
        {
          id: "lsg-q4",
          number: "Topic 4",
          title: "Architectural Patterns: Multi-Layer, Client-Server, MVC",
          marks: 20,
          subQuestions: [
            {
              id: "lsg-q4-1",
              label: "4.1",
              marks: 10,
              question: "Compare and contrast Multi-Layer, Client-Server, and Model-View-Controller (MVC) architectural patterns. [10 marks]",
              answer: "### Architectural Patterns Comparison (Lethbridge & Laganière, 2005)\n\n| Aspect | Multi-Layer Pattern | Client–Server Pattern | Model-View-Controller (MVC) |\n| :--- | :--- | :--- | :--- |\n| **Structural Organization** | Stacked horizontal layers; each layer communicates only with the layer below. | Distributed network architecture dividing system into client requesters and server providers. | Triad dividing functional data (Model), user display (View), and input handling (Controller). |\n| **Communication Style** | Strict top-down procedure calls via well-defined APIs. | Network message protocols (HTTP, TCP, RPC, WebSockets). | Controller updates Model; Model notifies View via Observer pattern; View forwards input to Controller. |\n| **Primary Application** | Operating systems, network stacks, enterprise backends. | Distributed web applications, database servers, banking terminals. | Interactive graphical user interfaces (GUI), desktop tools, web frameworks. |\n| **Key Advantage** | High abstraction; layers can be modified or replaced without affecting upper tiers. | Centralized data integrity, load distribution across multiple machines. | Decouples business logic from UI representation, enabling multiple views for the same model. |\n| **Key Limitation** | Can introduce performance overhead from passing through multiple layers. | Network latency, single point of failure if server crashes. | High architectural complexity for simple, static user interfaces. |",
              keyPoints: [
                "Multi-Layer: Hierarchical stack, API boundaries",
                "Client-Server: Requesters and providers over network",
                "MVC: Model (business data), View (UI), Controller (events/input)",
                "Comparison table covering structure, communication, use cases, pros, cons"
              ]
            },
            {
              id: "lsg-q4-2",
              label: "4.2",
              marks: 10,
              question: "Explain the Client-Server architectural pattern and discuss its advantages and disadvantages. [10 marks]",
              answer: "### Client-Server Architectural Pattern (Lethbridge & Laganière, 2005, p. 349)\n\n**Definition:** A distributed software architecture where at least one component acts as a **Server** (listening for and servicing requests) and multiple components act as **Clients** (initiating connections and requesting services).\n\n```mermaid\nflowchart LR\n  CLIENT1[\"Client 1<br/>(Student Portal)\"] -->|\"Request Service\"| SERVER[\"UNZA Central Application Server\"]\n  CLIENT2[\"Client 2<br/>(Lecturer Gradebook)\"] -->|\"Request Service\"| SERVER\n  CLIENT3[\"Client 3<br/>(Mobile App)\"] -->|\"Request Service\"| SERVER\n  SERVER --> DB[(\"Central PostgreSQL Database\")]\n```\n\n#### Advantages:\n1. **Work Distribution:** Computational loads are partitioned between client presentation and server processing.\n2. **Centralized Data Integrity:** Critical databases reside securely on the server, simplifying backup, encryption, and concurrency control.\n3. **Simultaneous Multi-User Access:** Thousands of users can query the system concurrently from remote locations.\n4. **Independent Evolution:** User interfaces can be updated on clients without rewriting server business logic.\n\n#### Disadvantages:\n1. **Network Vulnerability:** System functionality ceases if the network fails.\n2. **Performance Bottlenecks:** A single server can be overwhelmed by concurrent peak loads without load balancing.\n3. **Security Risks:** Data in transit across public networks requires encryption (HTTPS, TLS).",
              keyPoints: [
                "Server listens and processes; Client initiates requests",
                "Advantages: Work distribution, centralized data integrity, multi-user concurrency",
                "Disadvantages: Network dependence, server bottleneck, security exposure"
              ]
            }
          ]
        },
        {
          id: "lsg-q5",
          number: "Topic 5",
          title: "Designing a Persistence Framework with the Broker Pattern",
          marks: 20,
          subQuestions: [
            {
              id: "lsg-q5-1",
              label: "5.1",
              marks: 20,
              question: "Explain the Broker pattern and how it supports persistence. Provide an architectural diagram and explain its contribution to decoupling and testability. [20 marks]",
              answer: "### The Broker Pattern in Persistence Frameworks (Bennett et al., 2010; Lethbridge & Laganière, 2005)\n\n**Definition:** The **Persistence Broker Pattern** provides an indirection layer that decouples domain business objects from the physical database engines, handling mapping, query generation, and connection pooling transparently.\n\n```mermaid\nflowchart TD\n  APP[\"Domain Application Layer<br/>(Student, Course, Registration)\"] -->|\"1. Query / Save Object\"| BROKER[\"Persistence Broker Engine\"]\n  \n  subgraph PersistenceFramework[\"Persistence Broker Subsystem\"]\n    BROKER --> MAPPER[\"Object-Relational Mapper (ORM)\"]\n    BROKER --> POOL[\"Connection Pool & Transaction Manager\"]\n  end\n\n  MAPPER -->|\"SQL Query\"| DB1[(\"Primary Database<br/>PostgreSQL\")]\n  MAPPER -->|\"Document Store\"| DB2[(\"Archive Database<br/>MongoDB\")]\n```\n\n---\n\n#### How the Broker Supports Persistence:\n1. **Domain Isolation:** The domain model classes (`Student`, `Course`) contain zero SQL or database driver code. The broker inspects object metadata and maps fields to tables dynamically.\n2. **Multi-Database Support:** The broker can route transactions across heterogeneous backends (e.g. relational database for grades, document database for exam scans).\n3. **Transaction Management:** The broker coordinates commit and rollback boundaries across multiple operations.\n\n#### Contribution to Decoupling and Testability:\n- **Decoupling:** Business analysts and programmers can redesign database schemas or swap database vendors (e.g., MySQL to PostgreSQL) without rewriting a single line of business logic.\n- **Testability:** Unit test suites can inject an in-memory mock broker that stores objects in a hash map, executing unit tests in milliseconds without requiring a live database server.",
              keyPoints: [
                "Broker pattern provides indirection between domain classes and databases",
                "Zero SQL in domain layer; handles mapping, connection pools, and transactions",
                "Decouples schema changes from business logic",
                "Supports fast mock testing in memory without physical database servers"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "part-2-topics-6-9",
      name: "Part 2: Aspect-Oriented, Testing, SOA & Real-Time Systems (Topics 6–9)",
      instructions: "Advanced topics covering AspectJ, basis path testing, Systems of Systems, and real-time concurrency.",
      compulsory: false,
      questions: [
        {
          id: "lsg-q6",
          number: "Topic 6 & 7",
          title: "Aspect-Oriented Software Development & Advanced Testing",
          marks: 20,
          subQuestions: [
            {
              id: "lsg-q6-1",
              label: "6.1",
              marks: 10,
              question: "Define aspect, join point, pointcut, advice, and weaving. Explain the difference between compile-time and runtime weaving. [10 marks]",
              answer: "### Aspect-Oriented Concepts (Sommerville, 2016, Web Ch. 31)\n\n1. **Aspect:** A modular construct encapsulating a cross-cutting concern (e.g. `SecurityAspect`, `LoggingAspect`).\n2. **Join Point:** A specific point in code execution (e.g. method execution, field access) where aspect behaviour can hook.\n3. **Pointcut:** A predicate query expression selecting matching join points.\n4. **Advice:** The action code executed at selected join points (Before, After, or Around).\n5. **Weaving:** The composition process inserting aspects into the core codebase.\n\n#### Compile-Time vs Runtime Weaving:\n- **Compile-Time Weaving:** The aspect compiler (e.g. `ajc`) processes source code or Java bytecode at build time, injecting advice instructions directly into classes before execution. **Advantage:** Maximum execution performance with zero runtime overhead.\n- **Runtime Weaving:** Aspects are intercepted dynamically during program execution using JVM dynamic proxies or reflection. **Advantage:** High flexibility to toggle aspects on/off dynamically, but introduces slight performance overhead.",
              keyPoints: [
                "Aspect, Join Point, Pointcut, Advice, Weaving definitions",
                "Compile-time weaving: Bytecode modified at build time for max performance",
                "Runtime weaving: Intercepted dynamically at runtime via proxies"
              ]
            },
            {
              id: "lsg-q7-1",
              label: "7.1",
              marks: 10,
              question: "Differentiate between failure, defect, and error. Calculate cyclomatic complexity for E=21, N=17, P=5 and explain basis path testing. [10 marks]",
              answer: "### Error, Defect, Failure & Basis Path Testing\n\n1. **Error:** Human developer mistake or cognitive slip-up (e.g. typing `+` instead of `-`).\n2. **Defect (Fault):** The flaw in source code, design, or requirements resulting from an error.\n3. **Failure:** The unacceptable outward behavioural deviation observed when a defect is executed.\n\nHuman Error → Code Defect → Runtime Failure\n\n---\n\n#### Cyclomatic Complexity Calculation:\nV(G) = E - N + 2P\nV(G) = 21 - 17 + 2(5) = 4 + 10 = 14\n\n- **Basis Path Testing:** A testing technique that derives a minimal set of linearly independent paths through the program graph. Testing these 14 paths guarantees 100% statement and branch coverage.",
              keyPoints: [
                "Error (human) → Defect (code) → Failure (observed behaviour)",
                "Formula: V(G) = E - N + 2P = 21 - 17 + 10 = 14",
                "Basis path testing guarantees branch and statement coverage"
              ]
            }
          ]
        },
        {
          id: "lsg-q8",
          number: "Topic 8 & 9",
          title: "Systems of Systems & Real-Time Embedded Systems",
          marks: 20,
          subQuestions: [
            {
              id: "lsg-q8-1",
              label: "8.1",
              marks: 10,
              question: "Describe the four types of Systems of Systems (Directed, Acknowledged, Collaborative, Virtual) with examples. [10 marks]",
              answer: "### The Four Types of Systems of Systems (SoS) (Sommerville, 2016, p. 522)\n\n1. **Directed SoS:** Built and managed under central administrative authority. Example: Integrated Air Defense Command.\n2. **Acknowledged SoS:** Recognized collective goals and designated manager, but component systems retain independent funding and ownership. Example: National Healthcare Network (UTH, provincial clinics, labs).\n3. **Collaborative SoS:** Voluntary cooperation without central authority; governed by consensual standards. Example: The Internet (DNS, BGP, IP).\n4. **Virtual SoS:** No central management and no agreed-upon purpose; behaviour emerges dynamically from component interactions. Example: Global social media networks.",
              keyPoints: [
                "Directed: Central authority (Air defense)",
                "Acknowledged: Designated manager, autonomous units (National Health)",
                "Collaborative: Voluntary cooperation, no central boss (The Internet)",
                "Virtual: No management, emergent interactions (Social networks)"
              ]
            },
            {
              id: "lsg-q9-1",
              label: "9.1",
              marks: 10,
              question: "Explain deadlock, livelock, and critical race in real-time systems, and discuss prevention strategies for each. [10 marks]",
              answer: "### Concurrency Defects in Real-Time Systems (Lethbridge & Laganière, 2005)\n\n1. **Deadlock:** Concurrent processes permanently frozen waiting for resources held by each other in a circular chain. *Prevention:* Strict global resource ordering.\n2. **Livelock:** Processes actively change state in response to collisions, but none makes forward progress. *Prevention:* Randomized exponential backoff.\n3. **Critical Race:** Execution outcome depends on arbitrary thread scheduling timing. *Prevention:* Mutual exclusion (mutex locks), synchronized critical sections, atomic variables.",
              keyPoints: [
                "Deadlock: Circular wait → Resource ordering",
                "Livelock: Active loop without progress → Exponential backoff",
                "Critical race: Non-deterministic thread race → Mutex locks"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "part-3-predicted-exam",
      name: "Part 3: Complete Predicted Final Examination with Model Answers",
      instructions: "Full 3-hour UNZA examination paper (Section A: 40 marks, Section B: 60 marks).",
      compulsory: false,
      questions: [
        {
          id: "pe-sec-a",
          number: "Section A (Compulsory)",
          title: "Short Answer Questions Q1 to Q7 [40 Marks]",
          marks: 40,
          subQuestions: [
            {
              id: "pe-a-all",
              label: "Q1-Q7",
              marks: 40,
              question: "Answer all questions in Section A:\n1. Define requirement, use case, architectural pattern, and aspect. [8m]\n2. Explain the difference between verification and validation. [4m]\n3. Draw a use case diagram for an online banking system. [8m]\n4. Explain the Broker pattern and its role in persistence. [6m]\n5. Calculate cyclomatic complexity for E=21, N=17, P=5. [4m]\n6. List four types of systems of systems. [4m]\n7. Differentiate between hard and soft real-time systems. [6m]",
              answer: "### Model Answers for Predicted Exam Section A\n\n1. **Definitions:**\n   - *Requirement:* A statement of what a proposed system must do or a constraint on development (p. 119).\n   - *Use Case:* A typical sequence of actions an actor performs to complete a goal (p. 127).\n   - *Architectural Pattern:* A high-level template for global organization of software subsystems (p. 347).\n   - *Aspect:* A modular unit encapsulating a cross-cutting concern (Sommerville Ch. 31).\n\n2. **Verification vs Validation:**\n   - *Verification:* \"Are we building the product right?\" Ensures design conforms to specifications.\n   - *Validation:* \"Are we building the right product?\" Ensures software meets user needs.\n\n3. **Online Banking Use Case Diagram:**\n```mermaid\nflowchart LR\n  CUSTOMER[\"👤 Customer\"] --> UC1([\"Login\"])\n  CUSTOMER --> UC2([\"Check Balance\"])\n  CUSTOMER --> UC3([\"Transfer Funds\"])\n  CUSTOMER --> UC4([\"Pay Bills\"])\n  BANK[\"🏦 Core Bank\"] --> UC3\n  BANK --> UC4\n```\n\n4. **Broker Pattern:** Decouples business logic from physical databases, providing abstraction, connection pooling, and multi-database support.\n\n5. **Cyclomatic Complexity Calculation:**\n   V(G) = E - N + 2P = 21 - 17 + 2(5) = 4 + 10 = 14\n\n6. **Four SoS Types:** Directed, Acknowledged, Collaborative, Virtual.\n\n7. **Hard vs Soft Real-Time:** Missing a hard deadline is catastrophic (insulin pump); missing a soft deadline degrades quality of service without system failure (video stream).",
              keyPoints: [
                "Full solutions for Section A Questions 1 to 7",
                "Includes definitions, V&V, banking diagram, Broker pattern, math, SoS, and real-time"
              ]
            }
          ]
        },
        {
          id: "pe-sec-b",
          number: "Section B (Essays)",
          title: "Essay Questions B1 to B5 [60 Marks]",
          marks: 60,
          subQuestions: [
            {
              id: "pe-b-all",
              label: "B1-B5",
              marks: 60,
              question: "Model answers for Section B Essays:\n- B1: Requirements Engineering (4 activities, activity diagram, elicitation challenges) [20m]\n- B2: Object Analysis and Design (Stereotypes: Entity/Boundary/Control, Library class diagram, Singleton) [20m]\n- B3: Architecture and Persistence (MVC vs Layered vs Client-Server, Broker pattern, Layered persistence diagram) [20m]\n- B4: Aspect-Oriented & Testing (AOP definitions, TDD cycle Red-Green-Refactor, Black-box vs White-box) [20m]\n- B5: Service-Oriented & Real-Time (SOA benefits, SoS types, Rate Monotonic & Earliest Deadline First scheduling) [20m]",
              answer: "### Model Answers for Predicted Exam Section B\n\n#### Question B1: Requirements Engineering\n- **4 Activities:** Elicitation, Specification, Validation, Negotiation.\n- **Submitting Exam Activity Diagram:**\n```mermaid\nflowchart TD\n  START([\"Start\"]) --> SUBMIT[\"Submit Paper\"]\n  SUBMIT --> REVIEW{\"Reviewer Decision\"}\n  REVIEW -->|Accept| PASS([\"Pass\"])\n  REVIEW -->|Rework| REWORK[\"Rework\"]\n  REWORK --> SUBMIT\n  REVIEW -->|Reject| FAIL([\"Fail\"])\n```\n- **Elicitation Challenges:** Communication gaps, volatile changing requirements, political/budget constraints.\n\n#### Question B2: Object Analysis and Design\n- **Class Stereotypes:** Entity (persistent business data), Boundary (user/external interface), Control (coordination/workflow logic).\n- **Singleton Pattern:** Enforces single instance with private constructor and static `getInstance()`.\n\n#### Question B3: Architecture & Persistence\n- **Layered Persistence Stack:** Presentation Layer → Domain Logic → Data Access Objects (DAO) → Database Engine.\n- **Broker Pattern:** Decouples SQL from domain entities; supports multiple databases and fast in-memory mocking.\n\n#### Question B4: Aspect-Oriented Programming & Testing\n- **TDD Cycle:**\n```mermaid\nflowchart LR\n  RED[\"1. Red: Write Failing Test\"] --> GREEN[\"2. Green: Write Minimal Code to Pass\"]\n  GREEN --> REFACTOR[\"3. Refactor: Clean Code & Architecture\"]\n  REFACTOR --> RED\n```\n- **Testing:** Black-box verifies functional specifications; White-box verifies code branches and paths.\n\n#### Question B5: Service-Oriented & Real-Time Systems\n- **SOA Benefits:** Loose coupling, high reusability, platform interoperability, horizontal scalability.\n- **Real-Time Scheduling:**\n  - *Rate Monotonic Scheduling (RMS):* Static priority (shorter period = higher priority).\n  - *Earliest Deadline First (EDF):* Dynamic priority (earliest deadline = highest priority, up to 100% CPU utilization).",
              keyPoints: [
                "Complete essay model answers for B1, B2, B3, B4, B5",
                "Includes diagrams: Exam activity diagram, TDD cycle, persistence stack, RMS/EDF scheduling"
              ]
            }
          ]
        }
      ]
    }
  ]
};
