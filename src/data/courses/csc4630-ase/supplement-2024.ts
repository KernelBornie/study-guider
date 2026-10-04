import { Paper } from "@/types";

export const csc4630_2024Supplement: Paper = {
  id: "csc4630-2024-supplement",
  slug: "2024-final-supplement",
  title: "2024 Final Examination Supplement (UNZA Format)",
  year: 2024,
  duration: "3 Hours",
  totalMarks: 100,
  paperType: "Final Exam",
  venue: "The University of Zambia · Department of Computer Science",
  sections: [
    {
      id: "section-a-compulsory",
      name: "Section A: Compulsory Questions (50 Marks)",
      instructions: "Answer BOTH Question A3 and Question A4 (25 Marks each).",
      compulsory: true,
      questions: [
        {
          id: "qa3",
          number: "Question A3",
          title: "Requirements Engineering and Use Case Modelling",
          marks: 25,
          subQuestions: [
            {
              id: "qa3-a",
              label: "a",
              marks: 10,
              question: "Define the four types of requirements. Explain how each contributes to the overall success of a software system. [10 marks]",
              answer: "### The Four Types of Requirements (Lethbridge & Laganière, 2005)\n\n1. **Functional Requirements:**\n   - *Definition:* Describe what the system should do: the precise inputs it must accept, outputs it must produce, data it must store, computations it must execute, and the timing/synchronization of operations (p. 119).\n   - *Contribution to Success:* Ensures the software satisfies user mission objectives and delivers core business value. Without complete functional requirements, the software simply fails to do what users need.\n\n2. **Quality Requirements (Non-Functional):**\n   - *Definition:* Constrain the design to meet specified levels of quality, such as usability, response time, throughput, reliability, availability, recoverability, maintainability, and reusability (p. 123).\n   - *Contribution to Success:* Ensures the software performs effectively and dependably under real-world operational load. A functionally correct system that crashes or responds too slowly will be rejected by users.\n\n3. **Platform Requirements:**\n   - *Definition:* Constrain the computing environment and technology stack of the system, including target operating systems, hardware architectures, database engines, and network protocols (p. 124).\n   - *Contribution to Success:* Guarantees compatibility with existing customer infrastructure, hardware budgets, and deployment constraints, preventing costly retrofitting.\n\n4. **Process Requirements:**\n   - *Definition:* Constrain the project plan and development methods, including software engineering methodologies (e.g. Agile/Scrum), documentation standards, budget limits, quality gateways, and release deadlines (p. 125).\n   - *Contribution to Success:* Guarantees predictable, auditable, and manageable delivery within time and financial boundaries, minimizing project failure and contractual disputes.\n\n> **Summary:** Functional requirements ensure the system does the **right things**; Quality requirements ensure it does them **well**; Platform requirements ensure it runs in the **intended environment**; Process requirements ensure it is delivered **on time and within budget**.",
              keyPoints: [
                "1. Functional Requirements: Inputs, outputs, data storage, computations (Lethbridge p. 119)",
                "2. Quality Requirements: Usability, throughput, reliability, maintainability (Lethbridge p. 123)",
                "3. Platform Requirements: Computing hardware, OS, and technology constraints (Lethbridge p. 124)",
                "4. Process Requirements: Development methodology, budget, and delivery milestones (Lethbridge p. 125)",
                "Each requirement type addresses a vital dimension of system viability"
              ]
            },
            {
              id: "qa3-b",
              label: "b",
              marks: 15,
              question: "Draw a use case diagram for a University Library Management System. Identify at least three actors and five use cases. Describe two use cases in detail using the standard use case template. [15 marks]",
              answer: "### University Library Management System\n\n#### 1. Actors Identified:\n- **Borrower (Student / Faculty):** External user searching items, borrowing books, reserving titles, and viewing loan statuses.\n- **Librarian:** Library staff member managing catalog inventory, processing borrowings/returns, and issuing fine assessments.\n- **Library Assistant:** Front-desk clerk supporting checkouts and inventory scanning.\n\n#### 2. Use Case Diagram (Mermaid):\n```mermaid\nflowchart LR\n  subgraph ULMS[\"University Library Management System\"]\n    UC1([\"Search Catalogue\"])\n    UC2([\"Borrow Item\"])\n    UC3([\"Return Item\"])\n    UC4([\"Reserve Item\"])\n    UC5([\"Add Book to Inventory\"])\n    UC6([\"Remove Book\"])\n    UC7([\"Manage Fines\"])\n  end\n\n  BORROWER[\"🧑‍🎓 Borrower\"] --> UC1\n  BORROWER --> UC2\n  BORROWER --> UC3\n  BORROWER --> UC4\n\n  LIBRARIAN[\"📚 Librarian\"] --> UC1\n  LIBRARIAN --> UC2\n  LIBRARIAN --> UC3\n  LIBRARIAN --> UC5\n  LIBRARIAN --> UC6\n  LIBRARIAN --> UC7\n```\n\n---\n\n#### 3. Detailed Use Case 1: Borrow Item\n\n| Element | Specification |\n| :--- | :--- |\n| **Use Case Name** | Borrow Item |\n| **Actors** | Borrower (Initiator), Librarian (Facilitator) |\n| **Goal** | To borrow one or more library items for an approved borrowing period |\n| **Preconditions** | 1. Borrower holds an active, unblocked university library card.<br/>2. Borrower has no overdue items or outstanding unpaid fines.<br/>3. The requested item is currently available in the library collection. |\n| **Main Success Scenario (Steps)** | 1. Borrower presents selected book(s) and student ID card to the Librarian.<br/>2. Librarian scans the borrower's card barcode; the system verifies eligibility and loan limits.<br/>3. Librarian scans the item's barcode.<br/>4. The system validates availability and records the loan with an automated due date calculation.<br/>5. Librarian stamps the due date inside the book slip.<br/>6. System prints a loan transaction receipt and displays loan confirmation to the Librarian.<br/>7. Borrower leaves with the borrowed book(s). |\n| **Extensions (Alternative Flows)** | **2a. Borrower has unpaid fines:** System flags account lockout; Librarian informs borrower; transaction aborted.<br/>**3a. Item is on reference hold:** System displays non-circulating error; item cannot be borrowed. |\n| **Postconditions** | The loan record is persisted in the database; item status changes to `Borrowed`; item is linked to the borrower's account with due date set. |\n\n---\n\n#### 4. Detailed Use Case 2: Search Catalogue\n\n| Element | Specification |\n| :--- | :--- |\n| **Use Case Name** | Search Catalogue |\n| **Actors** | Borrower, Librarian, Guest |\n| **Goal** | To find specific items in the university library collection and check their shelf availability |\n| **Preconditions** | The library search portal is operational and connected to the catalog database. |\n| **Main Success Scenario (Steps)** | 1. User navigates to the search interface and enters search criteria (Title, Author, ISBN, or Keyword).<br/>2. User submits the search query.<br/>3. System queries the catalog index and returns a paginated list of matching items with summary metadata.<br/>4. User selects a specific title from the results.<br/>5. System displays full bibliographic details, physical shelf call number, library branch, and current availability status (Available, On Loan, Reserved). |\n| **Extensions (Alternative Flows)** | **3a. No matching items found:** System displays \"No items match your criteria\" with spelling suggestions and related subject categories. |\n| **Postconditions** | User is provided with call number and item availability information without altering database state. |",
              keyPoints: [
                "Three actors: Borrower, Librarian, Assistant",
                "Seven core use cases: Search, Borrow, Return, Reserve, Add, Remove, Manage Fines",
                "Mermaid use case diagram",
                "Two fully dressed use cases (Borrow Item & Search Catalogue) with pre/postconditions and steps"
              ]
            }
          ]
        },
        {
          id: "qa4",
          number: "Question A4",
          title: "Object-Oriented Analysis and Design Patterns",
          marks: 25,
          subQuestions: [
            {
              id: "qa4-a",
              label: "a",
              marks: 10,
              question: "Explain the difference between an association and a generalization in UML class diagrams. Give one concrete example of each. [10 marks]",
              answer: "### Association vs Generalization in UML Class Diagrams\n\n| Criterion | Association | Generalization |\n| :--- | :--- | :--- |\n| **Definition** | A structural relationship between instances of two classes representing a set of runtime links (p. 36). | A taxonomic relationship between a specialized subclass and an immediate generalized superclass (p. 39). |\n| **Conceptual Relationship** | **\"Has-a\"** or structural interaction (*peer-to-peer relationship*). | **\"Is-a\"** taxonomic classification (*parent-child hierarchy*). |\n| **UML Notation** | Solid line connecting classes, optionally with open arrowheads (navigability), association names, and multiplicities at ends. | Solid line ending with a **hollow triangle** pointing directly to the superclass. |\n| **Timing & State** | Exists between **separate object instances at runtime**. Links can be created, updated, or destroyed dynamically. | Exists between **classes at design/compile time**. Inherited statically by all instances. |\n| **Inheritance** | No feature inheritance; classes remain completely independent entities. | Subclass **inherits all attributes, associations, and operations** of the superclass. |\n| **Liskov Substitution** | Does not apply. | **Liskov Substitution Principle applies:** Subclass instances can seamlessly substitute for superclass variables. |\n\n#### Concrete Examples:\n- **Association Example:** `Student` and `Course`. A `Student` registers for a `Course` (many-to-many: `Student * -- * Course`). Both are separate objects interacting at runtime.\n- **Generalization Example:** `GraduateStudent` is a subclass of `Student`. A `GraduateStudent` *is-a* `Student`. It inherits `name`, `studentID`, and `register()`, while introducing specialized attributes like `thesisTitle` and `supervisorName`.",
              keyPoints: [
                "Association: 'Has-a' / structural link between separate runtime instances (Lethbridge p. 36)",
                "Generalization: 'Is-a' design-time inheritance relationship (Lethbridge p. 39)",
                "Visual notation: line with multiplicities vs line with hollow triangle",
                "Concrete examples: Student-Course (association) vs GraduateStudent-Student (generalization)"
              ]
            },
            {
              id: "qa4-b",
              label: "b",
              marks: 15,
              question: "Draw a UML class diagram for an Online Examination System. Include at least five classes, attributes, operations, associations, multiplicities, and one generalization. Explain the purpose of the Observer pattern in this system. [15 marks]",
              answer: "### Online Examination System UML Class Diagram\n\n```mermaid\nclassDiagram\n  class Student {\n    +String studentID\n    +String name\n    +String programme\n    +sitExam(Exam exam)\n    +viewResult(Submission sub)\n    +update(ResultNotification notif)\n  }\n\n  class Exam {\n    +String examID\n    +String title\n    +int durationMinutes\n    +DateTime startTime\n    +addQuestion(Question q)\n    +publishResults()\n  }\n\n  class Submission {\n    +String submissionID\n    +DateTime submittedAt\n    +float score\n    +calculateScore()\n  }\n\n  class Question {\n    <<abstract>>\n    +String questionID\n    +String text\n    +float maxMarks\n    +gradeAnswer(String response)\n  }\n\n  class MultipleChoiceQuestion {\n    +List~String~ options\n    +int correctOptionIndex\n    +gradeAnswer(String response)\n  }\n\n  class EssayQuestion {\n    +int wordLimit\n    +String rubricGuidelines\n    +gradeAnswer(String response)\n  }\n\n  class Lecturer {\n    +String staffID\n    +String name\n    +String department\n    +createExam(Course course)\n    +markSubmission(Submission sub)\n  }\n\n  Student \"1\" --> \"*\" Submission : submits\n  Exam \"1\" *-- \"1..*\" Question : contains\n  Exam \"1\" --> \"*\" Submission : evaluated in\n  Lecturer \"1\" --> \"*\" Exam : authors and marks\n\n  Question <|-- MultipleChoiceQuestion : generalization\n  Question <|-- EssayQuestion : generalization\n```\n\n---\n\n### Purpose of the Observer Pattern in the Examination System\n\nIn the Online Examination System, the **Observer Pattern** (Lethbridge & Laganière, 2005, p. 232) decouples the grading engine from the student communication subsystem:\n\n1. **Roles:**\n   - **Subject / Observable:** `Exam` (or `ResultManager`). Maintains a dynamic subscription registry of registered student observers.\n   - **Observer:** `Student` (implements an `ExamObserver` interface declaring `update(ResultEvent event)`).\n\n2. **Decoupled Event Flow:**\n   - When a Lecturer marks the final submission and calls `Exam.publishResults()`, the `Exam` instance iterates through its observer list and invokes `update()` on all registered `Student` instances.\n   - Students receive immediate real-time notifications via email, SMS, or web portal push notifications without the `Exam` class having direct coupling or hardcoded dependencies on notification transports.\n\n3. **Benefits:**\n   - **Low Coupling:** The `Exam` core class does not depend on notification mechanics.\n   - **Extensibility:** New observers (e.g. `DeanAuditLogger`, `AcademicRegistryService`) can subscribe to result publication events without modifying existing exam grading code.",
              keyPoints: [
                "UML Class Diagram: Student, Exam, Submission, Question, Lecturer",
                "Generalization: Abstract Question → MultipleChoiceQuestion & EssayQuestion",
                "Observer Pattern: Exam (Observable) notifies Student (Observer) upon publishResults()",
                "Low coupling, high cohesion, open/closed principle"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "section-b-electives",
      name: "Section B: Elective Essay Questions (Choose any TWO)",
      instructions: "Answer any TWO questions from this section (25 Marks each).",
      compulsory: false,
      questions: [
        {
          id: "qb5",
          number: "Question B5",
          title: "Persistence Frameworks and Patterns (DAO vs Broker vs Proxy)",
          marks: 25,
          subQuestions: [
            {
              id: "qb5-a",
              label: "a",
              marks: 12,
              question: "Explain the Data Access Object (DAO) pattern. Discuss how it improves maintainability and testability in a persistence framework. [12 marks]",
              answer: "### Data Access Object (DAO) Pattern\n\n#### 1. Pattern Overview & Structure\nThe **Data Access Object (DAO)** pattern provides an abstract, unified interface to a database or other underlying persistence mechanism (Bennett et al., 2010). It completely isolates business logic and domain classes from low-level database operations, SQL queries, and storage APIs.\n\n```mermaid\nclassDiagram\n  class StudentDAO {\n    <<interface>>\n    +findById(int id) Student\n    +findAll() List~Student~\n    +save(Student s) void\n    +delete(int id) void\n  }\n\n  class StudentDAOPostgreSQL {\n    -Connection dbConn\n    +findById(int id) Student\n    +findAll() List~Student~\n    +save(Student s) void\n    +delete(int id) void\n  }\n\n  class StudentDAOMockMemory {\n    -Map~int, Student~ storage\n    +findById(int id) Student\n    +findAll() List~Student~\n    +save(Student s) void\n    +delete(int id) void\n  }\n\n  StudentDAO <|.. StudentDAOPostgreSQL : implements\n  StudentDAO <|.. StudentDAOMockMemory : implements\n  StudentService --> StudentDAO : depends on interface\n```\n\n---\n\n#### 2. How DAO Improves Maintainability\n1. **Zero Database Coupling:** Domain models (`Student`, `Course`) contain zero SQL, JDBC, or database driver imports. Changes to database schemas, column names, or SQL dialects (e.g. migrating from PostgreSQL to MongoDB) require modifying only the concrete DAO class, leaving the domain and service layers untouched.\n2. **Centralized Query Management:** Queries are consolidated in specialized DAO repositories rather than scattered across controllers, services, and UI scripts.\n\n#### 3. How DAO Improves Testability\n1. **Fast Unit Testing with Mocking:** In unit tests, developers can substitute `StudentDAOPostgreSQL` with `StudentDAOMockMemory` or a Mockito stub without spawning a physical database server.\n2. **Deterministic Test Scenarios:** Tests can simulate specific database error conditions (connection timeouts, deadlock, integrity violations) trivially by programming mock DAO responses.",
              keyPoints: [
                "DAO defines an abstract interface separating domain logic from persistence APIs",
                "Maintainability: Schema changes isolated to DAO; zero SQL in business layer",
                "Testability: Fast unit testing using in-memory mock DAOs without live databases"
              ]
            },
            {
              id: "qb5-b",
              label: "b",
              marks: 13,
              question: "Compare and contrast the Broker pattern and the Proxy pattern in the context of persistence. Give one concrete example of when each is most appropriate. [13 marks]",
              answer: "### Broker Pattern vs Proxy Pattern in Persistence\n\n| Evaluation Aspect | Broker Pattern | Proxy Pattern |\n| :--- | :--- | :--- |\n| **Primary Intent** | Decouples business logic from heterogeneous data sources; manages mapping, connections, and transactions across multiple backends. | Provides a lightweight surrogate/placeholder for a heavyweight object, loading the real object from storage **only on demand** (lazy loading). |\n| **Architectural Scope** | System-level architectural pattern managing distributed communications and persistence routing. | Object-level structural design pattern controlling access to a single persistent entity. |\n| **Structural Flow** | ClientService → PersistenceBroker → Database(s) | ClientService → StudentProxy → RealPersistentStudent |\n| **Transparency** | Hides *where* and *how* data is stored across different databases. | Hides *when* the expensive object data is loaded into memory. |\n| **Performance Optimization** | Optimizes via connection pooling, distributed caching, and global transaction management. | Optimizes via **Lazy Loading** (deferring expensive queries until attributes are accessed). |\n\n---\n\n#### Concrete Use-Case Examples:\n- **Broker Pattern Appropriate Example:** An enterprise health system that must persist sensitive patient records to an encrypted PostgreSQL database, historical telemetry to MongoDB, and session cache to Redis. A `PersistenceBroker` routes queries to the appropriate engine transparently.\n- **Proxy Pattern Appropriate Example:** A `Course` object that contains 5,000 enrolled `Student` objects and their high-resolution exam scans. Loading 5,000 full records whenever a course title is listed would exhaust server memory. A `StudentProxy` loads basic IDs initially, fetching the complete student transcript and exam scans only when `student.getExamPaper()` is explicitly invoked.",
              keyPoints: [
                "Broker: System-level pattern routing queries across multiple data sources",
                "Proxy: Object-level surrogate implementing Lazy Loading for heavyweight objects",
                "Broker example: Heterogeneous multi-database persistence routing",
                "Proxy example: Deferring loading of large collections and binary blobs"
              ]
            }
          ]
        },
        {
          id: "qb6",
          number: "Question B6",
          title: "Aspect-Oriented Software Development (AOSD)",
          marks: 25,
          subQuestions: [
            {
              id: "qb6-a",
              label: "a",
              marks: 10,
              question: "Define aspect, join point, pointcut, advice, and weaving. Explain how these concepts address cross-cutting concerns. [10 marks]",
              answer: "### Aspect-Oriented Software Development (Sommerville, 2016, Web Ch. 31)\n\n#### 1. Definitions of Core Concepts:\n- **Aspect:** A modular unit that encapsulates a **cross-cutting concern** (a system-wide behaviour that affects multiple independent classes, such as logging, security, or transaction management).\n- **Join Point:** A well-defined point in program execution where an aspect can be woven (e.g., method call, method execution, constructor execution, exception throw, or field access).\n- **Pointcut:** An expression that selects and filters specific **join points** where advice should be applied (e.g., `execution(public * com.unza.service.*.*(..))`).\n- **Advice:** The action code executed at a join point matching a pointcut. Types include **Before** (prior to execution), **After** (upon completion), and **Around** (intercepts, can abort or alter return values).\n- **Weaving:** The engineering process of linking aspects into the base code to produce a unified executable. Can occur at **compile-time**, **load-time**, or **runtime**.\n\n---\n\n#### 2. How AOSD Addresses Cross-Cutting Concerns:\nIn traditional OOP, cross-cutting concerns suffer from two severe design flaws:\n1. **Code Tangling:** Business logic classes are cluttered with non-functional logging, security checks, and transaction boundaries.\n2. **Code Scattering:** The same logging or authentication logic is duplicated across hundreds of separate methods throughout the codebase.\n\nAOSD extracts these concerns into centralized, dedicated **Aspect modules**, eliminating both tangling and scattering.",
              keyPoints: [
                "Aspect: Modular unit encapsulating a cross-cutting concern",
                "Join Point: Execution event where advice can attach",
                "Pointcut: Predicate expression matching sets of join points",
                "Advice: Code executed (before, after, around)",
                "Weaving: Insertion of aspects (compile-time, load-time, runtime)",
                "Resolves code tangling (clutter) and code scattering (duplication)"
              ]
            },
            {
              id: "qb6-b",
              label: "b",
              marks: 15,
              question: "Using AspectJ syntax, write an aspect that logs the entry and exit of all public methods in a service package. Explain the benefits of this approach compared to scattering logging code. [15 marks]",
              answer: "### AspectJ Logging Aspect Implementation\n\n```java\npackage com.unza.aspects;\n\nimport org.aspectj.lang.JoinPoint;\nimport org.aspectj.lang.annotation.Aspect;\nimport org.aspectj.lang.annotation.Before;\nimport org.aspectj.lang.annotation.AfterReturning;\nimport org.aspectj.lang.annotation.Pointcut;\n\n@Aspect\npublic class ServiceLoggingAspect {\n\n    // Pointcut matching execution of all public methods in any class under com.unza.service\n    @Pointcut(\"execution(public * com.unza.service..*.*(..))\")\n    public void publicServiceMethods() {}\n\n    // Before Advice: Logs method entry with method signature and argument values\n    @Before(\"publicServiceMethods()\")\n    public void logMethodEntry(JoinPoint joinPoint) {\n        String methodName = joinPoint.getSignature().toShortString();\n        Object[] args = joinPoint.getArgs();\n        System.out.println(\"[AUDIT ENTRY] >>> Invoking: \" + methodName + \" | Parameters: \" + java.util.Arrays.toString(args));\n    }\n\n    // After Returning Advice: Logs successful completion and returned result\n    @AfterReturning(pointcut = \"publicServiceMethods()\", returning = \"result\")\n    public void logMethodExit(JoinPoint joinPoint, Object result) {\n        String methodName = joinPoint.getSignature().toShortString();\n        System.out.println(\"[AUDIT EXIT] <<< Completed: \" + methodName + \" | Returned: \" + result);\n    }\n}\n```\n\n---\n\n### Benefits Compared to Scattered Logging:\n1. **Zero Code Tangling:** Business logic in service classes (`StudentService`, `ExamService`) remains 100% clean and focused purely on core algorithms without hundreds of `logger.info()` statements.\n2. **Zero Code Scattering:** All audit logging logic resides in a single file (`ServiceLoggingAspect.java`). If audit formatting or log destinations change (e.g. sending to ElasticSearch), only this aspect is updated.\n3. **Guaranteed Consistency:** Developers cannot forget to log a method; the pointcut automatically intercepts newly created service methods.\n4. **Pluggability:** Logging can be enabled or disabled in production builds simply by including or omitting the aspect without touching business code.",
              keyPoints: [
                "AspectJ aspect definition with @Aspect, @Pointcut, @Before, @AfterReturning",
                "Matches public methods in com.unza.service package",
                "Eliminates tangling: Services contain pure business logic",
                "Eliminates scattering: Logging centralized in 1 aspect module",
                "Pluggable: Can be enabled/disabled without modifying source code"
              ]
            }
          ]
        },
        {
          id: "qb7",
          number: "Question B7",
          title: "Advanced Software Testing & Basis Path Coverage",
          marks: 25,
          subQuestions: [
            {
              id: "qb7-a",
              label: "a",
              marks: 10,
              question: "Explain the difference between black-box testing and glass-box testing. Give one example of when each is most appropriate. [10 marks]",
              answer: "### Black-Box vs Glass-Box (White-Box) Testing\n\n#### 1. Black-Box Testing (Functional Testing)\n- **Concept:** Evaluates system behaviour strictly against specified functional requirements from an external viewpoint, treating internal code and mechanisms as an opaque black box (Lethbridge & Laganière, p. 373).\n- **Basis:** Requirement specifications, use cases, user stories, boundary conditions.\n- **Most Appropriate For:** **System Testing and User Acceptance Testing (UAT).** For example, testing an e-commerce checkout flow by simulating a customer submitting credit card credentials across different browsers to verify payment success and receipt rendering.\n\n#### 2. Glass-Box Testing (Structural / White-Box Testing)\n- **Concept:** Tests internal logic structures, branch conditions, execution paths, and memory states with direct access to source code and architectural models (p. 374).\n- **Basis:** Control flow graphs, line coverage, cyclomatic complexity basis paths.\n- **Most Appropriate For:** **Unit Testing and Safety-Critical Algorithm Verification.** For example, testing an automated tax calculation function or cryptographic encryption routine where every conditional branch (`if-else`, loops) and boundary check must be guaranteed to execute without null-pointer exceptions.",
              keyPoints: [
                "Black-box: Requirements-driven, external, no code knowledge needed (Lethbridge p. 373)",
                "Glass-box: Code-driven, internal paths, examines logic and branches (Lethbridge p. 374)",
                "Black-box appropriate for User Acceptance and System testing",
                "Glass-box appropriate for Unit testing and safety-critical algorithms"
              ]
            },
            {
              id: "qb7-b",
              label: "b",
              marks: 15,
              question: "Calculate the cyclomatic complexity for a program graph with E = 21, N = 17, P = 5. Show all steps. Then describe how many test cases are needed for basis path coverage and why. [15 marks]",
              answer: "### Cyclomatic Complexity Calculation & Basis Path Analysis\n\n#### 1. Given Graph Parameters:\n- Number of Edges (E) = 21\n- Number of Nodes (N) = 17\n- Number of Connected Components (P) = 5\n\n#### 2. General McCabe Formula for Multi-Component Graphs:\nV(G) = E - N + 2P\n\n#### 3. Step-by-Step Calculation:\nV(G) = 21 - 17 + 2(5)\nV(G) = 21 - 17 + 10\nV(G) = 4 + 10 = 14\n\n*(Note: If the graph is considered as a single strongly connected program where P = 1, V(G) = 21 - 17 + 2 = 6. For P = 5 distinct subroutines or components, V(G) = 14.)*\n\n---\n\n#### 4. Basis Path Coverage Requirements:\n- **Number of Test Cases Required:** Exactly **14 test cases** (or 6 for a single connected component).\n- **Why Basis Path Coverage:**\n  1. **Linearly Independent Basis:** V(G) mathematically defines the maximum number of linearly independent execution paths through the control graph. An independent path introduces at least one new edge not covered by previous paths.\n  2. **100% Statement and Branch Guarantee:** Executing this minimal basis set of 14 test cases guarantees that every statement in the program is executed at least once and every decision branch evaluates to both True and False.\n  3. **Protection Against Combinatorial Explosion:** A module with multiple branches can have hundreds of theoretical paths; basis path testing provides an optimal, mathematically verified minimum test suite.",
              keyPoints: [
                "Formula: V(G) = E - N + 2P",
                "Calculation: 21 - 17 + 2(5) = 4 + 10 = 14",
                "Exactly 14 test cases required for basis path coverage",
                "Guarantees 100% statement and branch coverage without combinatorial explosion"
              ]
            }
          ]
        },
        {
          id: "qb8",
          number: "Question B8",
          title: "Service-Oriented Architecture (SOA) and Systems of Systems (SoS)",
          marks: 25,
          subQuestions: [
            {
              id: "qb8-a",
              label: "a",
              marks: 12,
              question: "Define Service-Oriented Architecture (SOA) and explain its key benefits and challenges. Illustrate your answer with a diagram. [12 marks]",
              answer: "### Service-Oriented Architecture (SOA)\n\n**Definition:** Service-Oriented Architecture (SOA) is an architectural pattern in which software systems obtain business capabilities by invoking standard, loosely coupled, interoperable services over a network (Lethbridge & Laganière, 2005, p. 358; Sommerville, 2016).\n\n```mermaid\nflowchart TD\n  CONSUMER[\"Service Consumer<br/>(Web / Mobile Application)\"]\n  REGISTRY[\"Service Registry<br/>(Service Discovery / UDDI)\"]\n  PROVIDER[\"Service Provider<br/>(REST API / SOAP Web Service)\"]\n\n  PROVIDER -->|\"1. Publish Service (WSDL / OpenAPI)\"| REGISTRY\n  CONSUMER -->|\"2. Find / Discover Service\"| REGISTRY\n  CONSUMER -->|\"3. Bind & Invoke (HTTP / JSON / SOAP)\"| PROVIDER\n```\n\n---\n\n#### Key Benefits:\n1. **Loose Coupling:** Service consumers only know the public contract/interface; implementation details can be refactored independently.\n2. **Reusability:** Enterprise services (authentication, payment processing, notification) are built once and shared across multiple systems.\n3. **Interoperability:** Standard protocols (HTTP, JSON, XML, REST) bridge heterogeneous platforms (Java, .NET, Python, Node).\n4. **Scalability:** High-traffic services can be horizontally scaled and deployed independently.\n\n#### Key Challenges:\n1. **Network Latency & Reliability:** Distributed remote procedure calls introduce network overhead, packet loss, and latency risks.\n2. **Complex Security Boundaries:** Exposing services across networks requires sophisticated authentication (OAuth2, JWT, mTLS).\n3. **Distributed Transaction Management:** Traditional ACID database transactions are difficult across services, requiring eventual consistency and Saga patterns.",
              keyPoints: [
                "SOA definition: Loosely coupled services communicating over standard protocols",
                "Find-Bind-Publish triangle: Consumer, Registry, Provider",
                "Benefits: Loose coupling, reuse, platform interoperability, scalability",
                "Challenges: Network latency, distributed security, transaction complexity"
              ]
            },
            {
              id: "qb8-b",
              label: "b",
              marks: 13,
              question: "Describe the four types of Systems of Systems (SoS). For each type, provide one real-world example and explain the main engineering challenge. [13 marks]",
              answer: "### Four Types of Systems of Systems (SoS) (Sommerville, 2016, p. 522)\n\nA System of Systems (SoS) consists of independent component systems that collaborate to achieve emergent operational capabilities.\n\n| SoS Type | Governance & Description | Real-World Example | Primary Engineering Challenge |\n| :--- | :--- | :--- | :--- |\n| **1. Directed** | Built and managed for a specific purpose. Component systems are subordinated to a **central controlling authority** that mandates standards. | **Integrated Air Defense System** (combining radar stations, missile batteries, and fighter jets). | Ensuring all diverse vendor hardware and legacy military systems strictly comply with central command timing and protocols. |\n| **2. Acknowledged** | Recognized collective objectives and designated management, but component systems retain **independent ownership and objectives**. Participation is cooperative. | **National Healthcare System** (connecting public teaching hospitals like UTH, private clinics, diagnostic labs, and insurance funds). | Balancing centralized health data standards with autonomous hospital IT budgets and local management priorities. |\n| **3. Collaborative** | Component systems cooperate voluntarily without any central management or enforcement authority. Shared governance through **consensual standards**. | **The Internet** (interconnected autonomous system networks collaborating via BGP, TCP/IP, and DNS). | Maintaining system-wide interoperability, routing stability, and security without central administrative power. |\n| **4. Virtual** | **No central management and no agreed-upon central purpose.** System capabilities emerge spontaneously from interactions of independent systems. | **Global Social Media & Financial Information Ecosystems** (news feeds, micro-investor sentiment, automated trading bots). | Managing unpredictable **emergent behaviours**, cascading flash crashes, and misinformation propagation without governance. |",
              keyPoints: [
                "Directed: Central authority (Air defense); Challenge: Mandating central compliance",
                "Acknowledged: Recognized manager but autonomous units (National Health System); Challenge: Alignment",
                "Collaborative: Voluntary cooperation with agreed standards (Internet); Challenge: Interoperability without control",
                "Virtual: No central management or common purpose (Social media/crypto ecosystem); Challenge: Uncontrolled emergent behaviour"
              ]
            }
          ]
        },
        {
          id: "qb9",
          number: "Question B9",
          title: "Real-Time and Embedded Software Engineering",
          marks: 25,
          subQuestions: [
            {
              id: "qb9-a",
              label: "a",
              marks: 10,
              question: "Differentiate between hard real-time and soft real-time systems. Give two examples of each. [10 marks]",
              answer: "### Hard Real-Time vs Soft Real-Time Systems (Sommerville, 2016, p. 540)\n\nIn real-time software engineering, system correctness depends not only on logical results but also on the **exact point in time at which the results are produced**.\n\n| Dimension | Hard Real-Time Systems | Soft Real-Time Systems |\n| :--- | :--- | :--- |\n| **Deadline Strictness** | Deadlines are **absolute and rigid**. | Deadlines are **desirable and flexible**. |\n| **Failure Consequence** | Missing a deadline is **catastrophic**, causing loss of human life, equipment destruction, or total system failure. | Missing a deadline **degrades quality of service (QoS)** but the system remains safe and operational. |\n| **Timing Analysis** | Requires **Worst-Case Execution Time (WCET)** analysis and formal mathematical verification. | Utilizes **Average-Case Execution Time** analysis and statistical queueing models. |\n| **Design Focus** | Determinism, fault tolerance, fail-safe fallbacks, pre-emptive static priority scheduling. | Throughput, graceful degradation, buffer smoothing, dynamic adaptation. |\n\n#### Concrete Real-World Examples:\n- **Hard Real-Time Examples:**\n  1. **Medical Insulin Pump:** Must acquire glucose sensor data and verify dosage calculations within strict timer interrupts; overdue actuation can administer fatal overdoses.\n  2. **Automotive Airbag Controller:** Must deploy within 20–30 milliseconds of crash impact sensor trigger; deploying 50ms late causes catastrophic injury.\n\n- **Soft Real-Time Examples:**\n  1. **Video Streaming (e.g. YouTube/Netflix):** If network latency delays packet arrival, frame rates drop or buffer pauses occur, but the system does not crash.\n  2. **Online Multiplayer Gaming:** Network packet lag causes visual jitter, but the game continues running safely.",
              keyPoints: [
                "Hard real-time: Missing deadline is catastrophic; requires worst-case execution analysis",
                "Soft real-time: Missing deadline degrades quality of service; average-case analysis",
                "Hard examples: Medical insulin pump, automotive airbag controller",
                "Soft examples: Video streaming, online multiplayer gaming"
              ]
            },
            {
              id: "qb9-b",
              label: "b",
              marks: 15,
              question: "Explain deadlock, livelock, and critical race in real-time systems. For each, describe one prevention technique and illustrate with a simple diagram. [15 marks]",
              answer: "### Concurrency Defects in Real-Time Systems (Lethbridge & Laganière, 2005)\n\n#### 1. Deadlock\n- **Definition:** A condition where two or more concurrent processes are permanently blocked because each holds a resource the other needs, creating a circular wait (p. 391).\n- **Illustration:**\n```\nThread A: Holds Resource R1  ──▶  Waits for Resource R2\n     ▲                                      │\n     │                                      ▼\nThread B: Waits for Resource R1  ◀──  Holds Resource R2\n```\n- **Prevention Technique — Resource Ordering:** Assign a global strict numeric hierarchy to all shared resources. All threads must acquire resources in ascending order (R1 before R2), mathematically eliminating circular wait conditions.\n\n---\n\n#### 2. Livelock\n- **Definition:** A condition where concurrent processes continuously change their internal execution states in response to each other, but **no process makes forward progress** (active infinite loop) (p. 392).\n- **Illustration:**\n```\nProcess 1: Detects collision  ──▶ Yields resource  ──▶ Retries immediately\n     ▲                                                      │\n     │                                                      ▼\nProcess 2: Retries immediately ◀── Yields resource ◀── Detects collision\n```\n- **Prevention Technique — Randomized Exponential Backoff:** When resource contention or collision occurs, each process delays its retry by a randomized duration (e.g. Ethernet CSMA/CD backoff algorithm), breaking synchronous contention loops.\n\n---\n\n#### 3. Critical Race (Race Condition)\n- **Definition:** A defect where the output or integrity of shared state depends on the arbitrary, non-deterministic execution order of concurrent threads (p. 393).\n- **Illustration:**\n```\nThread A: Reads Balance ($100) ───────────────▶ Writes Balance = $150 (+$50)\n                         │                             │\n                         ▼                             ▼\nThread B:         Reads Balance ($100) ──────────────▶ Writes Balance = $80 (-$20)\n                                                      [Thread A's $50 deposit lost!]\n```\n- **Prevention Technique — Mutual Exclusion & Atomic Variables:** Wrap shared memory accesses within mutex locks, synchronized critical sections, or hardware-supported atomic compare-and-swap (CAS) primitives.",
              keyPoints: [
                "Deadlock: Circular wait causing permanent freeze; Prevention: Resource ordering hierarchy",
                "Livelock: Active state changing with zero progress; Prevention: Randomized exponential backoff",
                "Critical Race: Non-deterministic order corrupting shared state; Prevention: Mutex locks / atomic primitives"
              ]
            }
          ]
        }
      ]
    }
  ]
};
