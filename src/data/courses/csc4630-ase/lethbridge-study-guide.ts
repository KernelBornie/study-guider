import { Paper } from "@/types";

export const csc4630LethbridgeStudyGuide: Paper = {
  id: "csc4630-lethbridge-study-guide-2026",
  slug: "lethbridge-study-guide",
  title: "Complete Study Guide & Predicted Exam (Lethbridge & Laganière 2nd Edition)",
  year: 2026,
  venue: "The University of Zambia · School of Natural Sciences",
  duration: "3 Hours",
  totalMarks: 100,
  structure: "3 Sections (9 Questions)",
  category: "Study Paper",
  paperType: "Study Paper",
  sections: [
    {
      id: "section-a",
      name: "Section A — Compulsory",
      instructions: "Answer ALL THREE questions in this section (Compulsory). Each question carries 12 marks.",
      compulsory: true,
      questions: [
        {
          id: "q1",
          number: "Q1",
          topic: "Advanced Requirement Engineering",
          title: "Advanced Requirement Engineering",
          marks: 12,
          questions: [
            {
              id: "q1-a",
              subNumber: "1(a)",
              label: "1(a)",
              marks: 4,
              text: "Define requirements engineering and explain the four types of requirements. [4 marks]",
              question: "Define requirements engineering and explain the four types of requirements. [4 marks]",
              modelAnswer: `### Requirements Engineering & The Four Types of Requirements
*(Reference: Lethbridge & Laganière, 2005, Ch. 4, pp. 119–126)*

#### Definition of a Requirement (p. 119)
According to Lethbridge & Laganière (2005), a **requirement** is:
> *"A statement describing either 1) an aspect of what the proposed system must do, or 2) a constraint on the system's development. In either case, it must contribute in some way towards adequately solving the customer's problem; the set of requirements as a whole represents a negotiated agreement among all stakeholders."* (p. 119)

**Requirements engineering** is the disciplined, iterative process of discovering, analysing, documenting, validating, and managing the requirements of a software system to ensure that the delivered solution solves the client's real problem within cost, time, and environmental constraints.

#### The Four Types of Requirements (pp. 119–125)

1. **Functional Requirements (pp. 119–123):**
   - **Definition:** Describe what the software system must do—the direct services provided to users and external collaborating systems.
   - **Key Categories:**
     - *Inputs:* What data and commands the system must accept and under what operating conditions.
     - *Outputs:* What displays, reports, data streams, or hardware signals the system produces.
     - *Data Storage:* What data must be stored persistently that other systems or subsequent sessions manipulate.
     - *Computations:* The mathematical calculations, business rules, or transformations performed.
     - *Timing & Synchronisation:* The order and execution constraints of events, critically important in real-time systems.

2. **Quality Requirements (pp. 123–124):**
   - **Definition:** Constrain the design to meet specified non-functional quality attributes such as usability, efficiency, reliability, availability, recoverability, and maintainability.
   - **Crucial Rule:** Quality requirements must be **verifiable** (measurable). For example, rather than stating *"the system must be fast"*, state *"search results must appear in less than 1.0 second on average and in less than 3.0 seconds 95% of the time"* (p. 151).

3. **Platform Requirements (pp. 124–125):**
   - **Definition:** Constrain the computing hardware, operating system, and software technology environment in which the system must execute.
   - **Scope:** Specifies minimum processor architecture, memory thresholds (e.g. at least 512 MB RAM), supported operating systems (e.g. Linux kernel ≥ 5.4, Windows 11), database engines, and network protocols.

4. **Process Requirements (p. 125):**
   - **Definition:** Constrain the project plan, software development methodology, organizational standards, and delivery schedule.
   - **Scope:** Mandates development methodologies (e.g. Agile Scrum, XP, RUP), inspection standards, milestone deadlines, budget caps, and quality assurance audit frameworks.`,
              answer: `### Requirements Engineering & The Four Types of Requirements
*(Reference: Lethbridge & Laganière, 2005, Ch. 4, pp. 119–126)*

#### Definition of a Requirement (p. 119)
According to Lethbridge & Laganière (2005), a **requirement** is:
> *"A statement describing either 1) an aspect of what the proposed system must do, or 2) a constraint on the system's development. In either case, it must contribute in some way towards adequately solving the customer's problem; the set of requirements as a whole represents a negotiated agreement among all stakeholders."* (p. 119)

**Requirements engineering** is the disciplined, iterative process of discovering, analysing, documenting, validating, and managing the requirements of a software system to ensure that the delivered solution solves the client's real problem within cost, time, and environmental constraints.

#### The Four Types of Requirements (pp. 119–125)

1. **Functional Requirements (pp. 119–123):**
   - **Definition:** Describe what the software system must do—the direct services provided to users and external collaborating systems.
   - **Key Categories:**
     - *Inputs:* What data and commands the system must accept and under what operating conditions.
     - *Outputs:* What displays, reports, data streams, or hardware signals the system produces.
     - *Data Storage:* What data must be stored persistently that other systems or subsequent sessions manipulate.
     - *Computations:* The mathematical calculations, business rules, or transformations performed.
     - *Timing & Synchronisation:* The order and execution constraints of events, critically important in real-time systems.

2. **Quality Requirements (pp. 123–124):**
   - **Definition:** Constrain the design to meet specified non-functional quality attributes such as usability, efficiency, reliability, availability, recoverability, and maintainability.
   - **Crucial Rule:** Quality requirements must be **verifiable** (measurable). For example, rather than stating *"the system must be fast"*, state *"search results must appear in less than 1.0 second on average and in less than 3.0 seconds 95% of the time"* (p. 151).

3. **Platform Requirements (pp. 124–125):**
   - **Definition:** Constrain the computing hardware, operating system, and software technology environment in which the system must execute.
   - **Scope:** Specifies minimum processor architecture, memory thresholds (e.g. at least 512 MB RAM), supported operating systems (e.g. Linux kernel ≥ 5.4, Windows 11), database engines, and network protocols.

4. **Process Requirements (p. 125):**
   - **Definition:** Constrain the project plan, software development methodology, organizational standards, and delivery schedule.
   - **Scope:** Mandates development methodologies (e.g. Agile Scrum, XP, RUP), inspection standards, milestone deadlines, budget caps, and quality assurance audit frameworks.`,
              keyPoints: [
                "Lethbridge & Laganière (2005, p. 119) definition: statement of what system must do or constraint on development",
                "Functional requirements: inputs, outputs, data storage, computations, timing (pp. 119-123)",
                "Quality requirements: non-functional, must be verifiable/measurable (pp. 123-124)",
                "Platform requirements: hardware, OS, libraries, environment (pp. 124-125)",
                "Process requirements: methodologies, standards, milestones, budget (p. 125)"
              ]
            },
            {
              id: "q1-b",
              subNumber: "1(b)",
              label: "1(b)",
              marks: 4,
              text: "Explain requirements gathering techniques (observation, interviewing, brainstorming, prototyping, and JAD) and state the ten review criteria for individual requirements. [4 marks]",
              question: "Explain requirements gathering techniques (observation, interviewing, brainstorming, prototyping, and JAD) and state the ten review criteria for individual requirements. [4 marks]",
              modelAnswer: `### Requirements Gathering Techniques & Review Criteria
*(Reference: Lethbridge & Laganière, 2005, Ch. 4, pp. 138–152)*

#### 1. Requirements Gathering (Elicitation) Techniques (pp. 138–145)

- **Observation (p. 139):**
  - Involves "shadowing" users in their actual work environment, writing down or videotaping their workflows.
  - *Strength:* Discovers tacit knowledge, unwritten procedures, and subtle workarounds that users forget to mention during interviews.
- **Interviewing (pp. 139–141):**
  - Structured discussions with stakeholders using the journalistic "5 W's" (who, what, when, where, why).
  - Requires empathetic listening, paraphrasing to confirm understanding, asking about future vision, and identifying minimally acceptable solutions to avoid building "shelfware" (p. 140).
- **Brainstorming (pp. 142–144):**
  - Moderated sessions with 5–20 stakeholders focused around a specific "trigger question" (e.g. *"What features are vital to the system?"*).
  - Uses round-robin idea passing where ideas are written on sheets and passed clockwise to stimulate thought without premature criticism, followed by voting and prioritization.
- **Joint Application Development (JAD) (p. 144):**
  - Intensive 3–5 day off-site workshop bringing developers, users, and management together in seclusion.
  - Rapidly compresses months of requirements negotiation and document drafting into days.
- **Prototyping (pp. 144–145):**
  - Rapidly constructing paper prototypes or screen mock-ups.
  - Used strictly as an elicitation and validation tool to gain early stakeholder feedback; prototypes should generally be discarded, not evolved directly into production systems without architectural rigor.

#### 2. Ten Review Criteria for Individual Requirements (pp. 149–151)
To ensure requirements quality, each requirement must satisfy the following ten criteria:
1. **Cost-Benefit Balance:** Benefits must demonstrably outweigh implementation costs (p. 149).
2. **Current Problem Focus (Pareto 80–20 Rule):** Solves the real current problem rather than unnecessary "gold-plating" (p. 149).
3. **Clear & Consistent Notation:** Expressed in natural language with consistent style, active voice, and present tense (p. 149).
4. **Unambiguous:** Only one reasonable interpretation exists (p. 150).
5. **Logically Consistent:** No internal contradictions across the document or with higher-level standards (p. 150).
6. **Sufficient Quality:** Supports usability, reliability, security, and maintainability (p. 150).
7. **Realistic with Resources:** Feasible within technical capability, budget, and delivery timelines (p. 151).
8. **Verifiable:** System behavior can be measured or tested objectively to prove conformance (p. 151).
9. **Uniquely Identifiable & Traceable:** Assigned a discrete numbering scheme to maintain traceability between requirements and design (p. 151).
10. **Not Over-Constraining Design:** Specifies the "what" (business capability) rather than dictating the internal "how" (implementation details) (p. 151).`,
              answer: `### Requirements Gathering Techniques & Review Criteria
*(Reference: Lethbridge & Laganière, 2005, Ch. 4, pp. 138–152)*

#### 1. Requirements Gathering (Elicitation) Techniques (pp. 138–145)

- **Observation (p. 139):**
  - Involves "shadowing" users in their actual work environment, writing down or videotaping their workflows.
  - *Strength:* Discovers tacit knowledge, unwritten procedures, and subtle workarounds that users forget to mention during interviews.
- **Interviewing (pp. 139–141):**
  - Structured discussions with stakeholders using the journalistic "5 W's" (who, what, when, where, why).
  - Requires empathetic listening, paraphrasing to confirm understanding, asking about future vision, and identifying minimally acceptable solutions to avoid building "shelfware" (p. 140).
- **Brainstorming (pp. 142–144):**
  - Moderated sessions with 5–20 stakeholders focused around a specific "trigger question" (e.g. *"What features are vital to the system?"*).
  - Uses round-robin idea passing where ideas are written on sheets and passed clockwise to stimulate thought without premature criticism, followed by voting and prioritization.
- **Joint Application Development (JAD) (p. 144):**
  - Intensive 3–5 day off-site workshop bringing developers, users, and management together in seclusion.
  - Rapidly compresses months of requirements negotiation and document drafting into days.
- **Prototyping (pp. 144–145):**
  - Rapidly constructing paper prototypes or screen mock-ups.
  - Used strictly as an elicitation and validation tool to gain early stakeholder feedback; prototypes should generally be discarded, not evolved directly into production systems without architectural rigor.

#### 2. Ten Review Criteria for Individual Requirements (pp. 149–151)
To ensure requirements quality, each requirement must satisfy the following ten criteria:
1. **Cost-Benefit Balance:** Benefits must demonstrably outweigh implementation costs (p. 149).
2. **Current Problem Focus (Pareto 80–20 Rule):** Solves the real current problem rather than unnecessary "gold-plating" (p. 149).
3. **Clear & Consistent Notation:** Expressed in natural language with consistent style, active voice, and present tense (p. 149).
4. **Unambiguous:** Only one reasonable interpretation exists (p. 150).
5. **Logically Consistent:** No internal contradictions across the document or with higher-level standards (p. 150).
6. **Sufficient Quality:** Supports usability, reliability, security, and maintainability (p. 150).
7. **Realistic with Resources:** Feasible within technical capability, budget, and delivery timelines (p. 151).
8. **Verifiable:** System behavior can be measured or tested objectively to prove conformance (p. 151).
9. **Uniquely Identifiable & Traceable:** Assigned a discrete numbering scheme to maintain traceability between requirements and design (p. 151).
10. **Not Over-Constraining Design:** Specifies the "what" (business capability) rather than dictating the internal "how" (implementation details) (p. 151).`,
              keyPoints: [
                "Observation: shadowing and observing real workflows (p. 139)",
                "Interviewing: 5 W's, active listening, minimally acceptable solutions (pp. 139-141)",
                "Brainstorming: moderated trigger question, round-robin, voting (pp. 142-144)",
                "JAD: 3-5 day off-site intensive consensus session (p. 144)",
                "Prototyping: paper and mockups for requirements validation (pp. 144-145)",
                "10 Review criteria: Cost-benefit, Pareto 80-20, Clear notation, Unambiguous, Logically consistent, Quality, Realistic, Verifiable, Traceable, Not over-constraining (pp. 149-151)"
              ]
            },
            {
              id: "q1-c",
              subNumber: "1(c)",
              label: "1(c)",
              marks: 4,
              text: "Draw a use case diagram for a university library management system and describe the use case relationships (inclusion, extension, generalization). [4 marks]",
              question: "Draw a use case diagram for a university library management system and describe the use case relationships (inclusion, extension, generalization). [4 marks]",
              modelAnswer: `### Use Case Analysis & Library Management System Diagram
*(Reference: Lethbridge & Laganière, 2005, Ch. 4, pp. 127–138)*

#### Use Case Definition & Elements (pp. 127–130)
- **Use Case:** A typical sequence of actions that an actor performs in order to complete a given task (p. 127).
- **Actor:** A role that a user or external collaborating system plays when interacting with the system (e.g. Borrower, Librarian, Checkout Clerk, Accounting System) (p. 127).
- **Two-Column Step Format (p. 130):** Separates *Actor actions* from *System responses*, describing user interaction rather than internal computational algorithms.

#### Use Case Relationships (pp. 132–136)
1. **Inclusion (\`<<include>>\`):** Expresses common sub-tasks shared across multiple use cases (e.g. \`Verify Identification\` or \`Search Catalogue\`) to eliminate duplication (p. 133).
2. **Extension (\`<<extend>>\`):** Isolates optional, alternate, or exceptional interaction paths (e.g. \`Pay Overdue Fine\`, \`Handle Reserved Book\`) that execute only when specific extension points are reached (p. 133).
3. **Generalization:** Specialization hierarchy where specialized use cases inherit the intent and behavior of a generalized use case (e.g. \`Search by Title\` and \`Search by Author\` specialize \`Search Catalogue\`) (p. 133).

#### UML Use Case Diagram (University Library Management System)

\`\`\`mermaid
flowchart LR
  subgraph LibrarySystem["University Library Management System"]
    UC_SEARCH(["Search Catalogue"])
    UC_SEARCH_TITLE(["Search by Title"])
    UC_SEARCH_AUTHOR(["Search by Author"])
    UC_BORROW(["Borrow Book"])
    UC_RETURN(["Return Book"])
    UC_RESERVE(["Place Hold on Book"])
    UC_VERIFY(["<<include>><br/>Verify Student ID"])
    UC_FINE(["<<extend>><br/>Pay Overdue Fine"])
    UC_ADD_BOOK(["Add New Acquisition"])
  end

  STUDENT["🎓 Student (Borrower)"]
  CLERK["🧑‍💼 Checkout Clerk"]
  LIBRARIAN["📚 Chief Librarian"]

  STUDENT --> UC_SEARCH
  STUDENT --> UC_RESERVE
  
  CLERK --> UC_BORROW
  CLERK --> UC_RETURN
  
  LIBRARIAN --> UC_ADD_BOOK
  LIBRARIAN --> UC_BORROW

  UC_SEARCH_TITLE -.->|generalizes| UC_SEARCH
  UC_SEARCH_AUTHOR -.->|generalizes| UC_SEARCH

  UC_BORROW -.->|<<include>>| UC_VERIFY
  UC_RETURN -.->|<<extend>>| UC_FINE
\`\`\`

#### Structured Use Case: Borrow Book (pp. 130–132)
- **Actors:** Checkout Clerk (initiator), Student (beneficiary).
- **Preconditions:** Student possesses valid UNZA student card with zero blocking holds; book is available in library collection.
- **Steps:**
  1. *Actor action:* Clerk scans student barcode and book barcode.
  2. *System response:* System verifies enrollment status and confirms book loan eligibility.
  3. *Actor action:* Clerk confirms checkout transaction.
  4. *System response:* System creates a loan record, updates book status to 'on loan', sets return due date, and prints date slip.
- **Postconditions:** A new persistent loan record is established; catalog status reflects borrowed status.`,
              answer: `### Use Case Analysis & Library Management System Diagram
*(Reference: Lethbridge & Laganière, 2005, Ch. 4, pp. 127–138)*

#### Use Case Definition & Elements (pp. 127–130)
- **Use Case:** A typical sequence of actions that an actor performs in order to complete a given task (p. 127).
- **Actor:** A role that a user or external collaborating system plays when interacting with the system (e.g. Borrower, Librarian, Checkout Clerk, Accounting System) (p. 127).
- **Two-Column Step Format (p. 130):** Separates *Actor actions* from *System responses*, describing user interaction rather than internal computational algorithms.

#### Use Case Relationships (pp. 132–136)
1. **Inclusion (\`<<include>>\`):** Expresses common sub-tasks shared across multiple use cases (e.g. \`Verify Identification\` or \`Search Catalogue\`) to eliminate duplication (p. 133).
2. **Extension (\`<<extend>>\`):** Isolates optional, alternate, or exceptional interaction paths (e.g. \`Pay Overdue Fine\`, \`Handle Reserved Book\`) that execute only when specific extension points are reached (p. 133).
3. **Generalization:** Specialization hierarchy where specialized use cases inherit the intent and behavior of a generalized use case (e.g. \`Search by Title\` and \`Search by Author\` specialize \`Search Catalogue\`) (p. 133).

#### UML Use Case Diagram (University Library Management System)

\`\`\`mermaid
flowchart LR
  subgraph LibrarySystem["University Library Management System"]
    UC_SEARCH(["Search Catalogue"])
    UC_SEARCH_TITLE(["Search by Title"])
    UC_SEARCH_AUTHOR(["Search by Author"])
    UC_BORROW(["Borrow Book"])
    UC_RETURN(["Return Book"])
    UC_RESERVE(["Place Hold on Book"])
    UC_VERIFY(["<<include>><br/>Verify Student ID"])
    UC_FINE(["<<extend>><br/>Pay Overdue Fine"])
    UC_ADD_BOOK(["Add New Acquisition"])
  end

  STUDENT["🎓 Student (Borrower)"]
  CLERK["🧑‍💼 Checkout Clerk"]
  LIBRARIAN["📚 Chief Librarian"]

  STUDENT --> UC_SEARCH
  STUDENT --> UC_RESERVE
  
  CLERK --> UC_BORROW
  CLERK --> UC_RETURN
  
  LIBRARIAN --> UC_ADD_BOOK
  LIBRARIAN --> UC_BORROW

  UC_SEARCH_TITLE -.->|generalizes| UC_SEARCH
  UC_SEARCH_AUTHOR -.->|generalizes| UC_SEARCH

  UC_BORROW -.->|<<include>>| UC_VERIFY
  UC_RETURN -.->|<<extend>>| UC_FINE
\`\`\`

#### Structured Use Case: Borrow Book (pp. 130–132)
- **Actors:** Checkout Clerk (initiator), Student (beneficiary).
- **Preconditions:** Student possesses valid UNZA student card with zero blocking holds; book is available in library collection.
- **Steps:**
  1. *Actor action:* Clerk scans student barcode and book barcode.
  2. *System response:* System verifies enrollment status and confirms book loan eligibility.
  3. *Actor action:* Clerk confirms checkout transaction.
  4. *System response:* System creates a loan record, updates book status to 'on loan', sets return due date, and prints date slip.
- **Postconditions:** A new persistent loan record is established; catalog status reflects borrowed status.`,
              keyPoints: [
                "Use Case: sequence of actions to complete a task (p. 127)",
                "Actors: roles played by users or external systems (p. 127)",
                "<<include>> captures shared sub-interactions (p. 133)",
                "<<extend>> isolates optional/exceptional branches (p. 133)",
                "Generalization: specialization of use cases (p. 133)",
                "Mermaid use case diagram for university library management"
              ]
            }
          ]
        },
        {
          id: "q2",
          number: "Q2",
          topic: "Advanced Object Analysis",
          title: "Advanced Object Analysis",
          marks: 12,
          questions: [
            {
              id: "q2-a",
              subNumber: "2(a)",
              label: "2(a)",
              marks: 4,
              text: "Define and distinguish the foundational concepts of the object-oriented paradigm: object, class, inheritance, polymorphism, encapsulation, identity, and information hiding. [4 marks]",
              question: "Define and distinguish the foundational concepts of the object-oriented paradigm: object, class, inheritance, polymorphism, encapsulation, identity, and information hiding. [4 marks]",
              modelAnswer: `### Foundational Concepts of Object Orientation
*(Reference: Lethbridge & Laganière, 2005, Ch. 2, pp. 29–54)*

According to Lethbridge & Laganière (2005), the object-oriented paradigm organizes procedural abstractions in the context of data abstractions (p. 31). To qualify as truly object-oriented, a system must embody the following concepts:

1. **Object (p. 32):**
   - A chunk of structured data in a running software system that possesses **state** (properties/attributes) and **behaviour** (operations/methods). Objects represent distinct conceptual entities.

2. **Class (p. 33):**
   - The primary unit of data abstraction in OO programming. A software module that specifies the structure (instance variables) and procedures (methods) defining a set of similar objects, termed its **instances**.

3. **Identity (p. 52):**
   - The property that every runtime object possesses a distinct existence independent of its attribute values. Two distinct objects with identical attribute values are recognized as separate instances.

4. **Inheritance (p. 40):**
   - The implicit possession by a subclass of features (attributes, associations, operations) defined in its superclass. It establishes a generalization hierarchy adhering to the **isa rule** (*"a subclass is a superclass"*, p. 40).

5. **Polymorphism & Dynamic Binding (pp. 38, 50–51):**
   - **Polymorphism (p. 38):** A property of object-oriented software whereby an abstract operation can be executed in different ways across different classes.
   - **Dynamic Binding (pp. 50–51):** The runtime mechanism by which the virtual machine determines which concrete method to execute based on the actual class of the object currently stored in a variable, relieving programmers of explicit conditional switching.

6. **Encapsulation & Information Hiding (p. 53):**
   - **Encapsulation:** A class acts as a protective container packaging its data structure and member methods together.
   - **Information Hiding:** Enforcing access control (private instance variables, public accessors) so that outside clients see only the abstract interface, shielding internal representations from unauthorized or buggy modifications (p. 53).`,
              answer: `### Foundational Concepts of Object Orientation
*(Reference: Lethbridge & Laganière, 2005, Ch. 2, pp. 29–54)*

According to Lethbridge & Laganière (2005), the object-oriented paradigm organizes procedural abstractions in the context of data abstractions (p. 31). To qualify as truly object-oriented, a system must embody the following concepts:

1. **Object (p. 32):**
   - A chunk of structured data in a running software system that possesses **state** (properties/attributes) and **behaviour** (operations/methods). Objects represent distinct conceptual entities.

2. **Class (p. 33):**
   - The primary unit of data abstraction in OO programming. A software module that specifies the structure (instance variables) and procedures (methods) defining a set of similar objects, termed its **instances**.

3. **Identity (p. 52):**
   - The property that every runtime object possesses a distinct existence independent of its attribute values. Two distinct objects with identical attribute values are recognized as separate instances.

4. **Inheritance (p. 40):**
   - The implicit possession by a subclass of features (attributes, associations, operations) defined in its superclass. It establishes a generalization hierarchy adhering to the **isa rule** (*"a subclass is a superclass"*, p. 40).

5. **Polymorphism & Dynamic Binding (pp. 38, 50–51):**
   - **Polymorphism (p. 38):** A property of object-oriented software whereby an abstract operation can be executed in different ways across different classes.
   - **Dynamic Binding (pp. 50–51):** The runtime mechanism by which the virtual machine determines which concrete method to execute based on the actual class of the object currently stored in a variable, relieving programmers of explicit conditional switching.

6. **Encapsulation & Information Hiding (p. 53):**
   - **Encapsulation:** A class acts as a protective container packaging its data structure and member methods together.
   - **Information Hiding:** Enforcing access control (private instance variables, public accessors) so that outside clients see only the abstract interface, shielding internal representations from unauthorized or buggy modifications (p. 53).`,
              keyPoints: [
                "Object: runtime instance with state and behaviour (p. 32)",
                "Class: data abstraction module defining instances (p. 33)",
                "Identity: distinct runtime reference regardless of attribute equality (p. 52)",
                "Inheritance: implicit possession of superclass features via isa rule (p. 40)",
                "Polymorphism & dynamic binding: runtime method resolution (pp. 38, 50-51)",
                "Encapsulation & information hiding: private fields, public API (p. 53)"
              ]
            },
            {
              id: "q2-b",
              subNumber: "2(b)",
              label: "2(b)",
              marks: 4,
              text: "Explain class diagrams, associations, multiplicity ranges, association classes, and reflexive associations. Draw an illustrative class diagram for a university course registration system. [4 marks]",
              question: "Explain class diagrams, associations, multiplicity ranges, association classes, and reflexive associations. Draw an illustrative class diagram for a university course registration system. [4 marks]",
              modelAnswer: `### UML Class Diagrams, Associations & University Registration Model
*(Reference: Lethbridge & Laganière, 2005, Ch. 5, pp. 172–181)*

#### 1. Core Class Diagram Elements (pp. 172–181)
- **Associations & Multiplicities (pp. 173–175):** An association represents a structural relationship between classes whose links persist at runtime. Multiplicity specifies how many instances of class A link to an instance of class B: \`1\` (exactly one), \`*\` or \`0..*\` (zero or more), \`0..1\` (optional), \`1..*\` (at least one), or intervals such as \`1..3\`.
- **Association Classes (pp. 179–180):** When an attribute belongs to the relationship itself rather than either class individually (e.g. a student's \`grade\` in a specific course), an **association class** is introduced. Any many-to-many relationship with an association class can be systematically transformed into two one-to-many associations (p. 180).
- **Reflexive Associations (pp. 180–181):** An association connecting a class to itself. Can be asymmetric (requiring explicit role names like \`prerequisite\` and \`successor\` on \`Course\`, or \`supervisor\` and \`subordinate\` on \`Employee\`) or symmetric (e.g. \`isMutuallyExclusiveWith\`).

#### 2. University Course Registration System Class Diagram

\`\`\`mermaid
classDiagram
  class Student {
    -String studentNumber
    -String name
    -String programOfStudy
    +getEnrolledCourses() List
  }

  class Course {
    -String courseCode
    -String title
    -int credits
    +getPrerequisites() List
  }

  class CourseSection {
    -int sectionNumber
    -String semester
    -int maxClassSize
    +isFull() boolean
    +openRegistration()
  }

  class Registration {
    -Date registrationDate
    -String grade
    +calculateGrade()
  }

  class Professor {
    -String employeeNumber
    -String name
    -String department
    +assignTeaching()
  }

  Student "1" --> "*" Registration : undertakes
  Registration "*" --> "1" CourseSection : inSection
  Course "1" *-- "1..*" CourseSection : offers
  Professor "1" --> "*" CourseSection : instructs
  Course "0..*" --> "0..*" Course : prerequisite / successor
\`\`\`

- **Key Structural Features:**
  - \`Registration\` serves as the association class resolving the many-to-many association between \`Student\` and \`CourseSection\`, maintaining the \`grade\` attribute (p. 179).
  - \`Course\` exhibits an asymmetric reflexive association representing course prerequisites (p. 180).
  - \`CourseSection\` represents the concrete occurrence of an abstract \`Course\` (Abstraction-Occurrence pattern, p. 223).`,
              answer: `### UML Class Diagrams, Associations & University Registration Model
*(Reference: Lethbridge & Laganière, 2005, Ch. 5, pp. 172–181)*

#### 1. Core Class Diagram Elements (pp. 172–181)
- **Associations & Multiplicities (pp. 173–175):** An association represents a structural relationship between classes whose links persist at runtime. Multiplicity specifies how many instances of class A link to an instance of class B: \`1\` (exactly one), \`*\` or \`0..*\` (zero or more), \`0..1\` (optional), \`1..*\` (at least one), or intervals such as \`1..3\`.
- **Association Classes (pp. 179–180):** When an attribute belongs to the relationship itself rather than either class individually (e.g. a student's \`grade\` in a specific course), an **association class** is introduced. Any many-to-many relationship with an association class can be systematically transformed into two one-to-many associations (p. 180).
- **Reflexive Associations (pp. 180–181):** An association connecting a class to itself. Can be asymmetric (requiring explicit role names like \`prerequisite\` and \`successor\` on \`Course\`, or \`supervisor\` and \`subordinate\` on \`Employee\`) or symmetric (e.g. \`isMutuallyExclusiveWith\`).

#### 2. University Course Registration System Class Diagram

\`\`\`mermaid
classDiagram
  class Student {
    -String studentNumber
    -String name
    -String programOfStudy
    +getEnrolledCourses() List
  }

  class Course {
    -String courseCode
    -String title
    -int credits
    +getPrerequisites() List
  }

  class CourseSection {
    -int sectionNumber
    -String semester
    -int maxClassSize
    +isFull() boolean
    +openRegistration()
  }

  class Registration {
    -Date registrationDate
    -String grade
    +calculateGrade()
  }

  class Professor {
    -String employeeNumber
    -String name
    -String department
    +assignTeaching()
  }

  Student "1" --> "*" Registration : undertakes
  Registration "*" --> "1" CourseSection : inSection
  Course "1" *-- "1..*" CourseSection : offers
  Professor "1" --> "*" CourseSection : instructs
  Course "0..*" --> "0..*" Course : prerequisite / successor
\`\`\`

- **Key Structural Features:**
  - \`Registration\` serves as the association class resolving the many-to-many association between \`Student\` and \`CourseSection\`, maintaining the \`grade\` attribute (p. 179).
  - \`Course\` exhibits an asymmetric reflexive association representing course prerequisites (p. 180).
  - \`CourseSection\` represents the concrete occurrence of an abstract \`Course\` (Abstraction-Occurrence pattern, p. 223).`,
              keyPoints: [
                "Associations and multiplicities: 1, *, 0..1, 1..*, intervals (pp. 173-178)",
                "Association class: holds attributes belonging to the relationship (pp. 179-180)",
                "Reflexive associations: asymmetric with role names vs symmetric (pp. 180-181)",
                "Mermaid diagram of Student, Course, CourseSection, Registration, Professor"
              ]
            },
            {
              id: "q2-c",
              subNumber: "2(c)",
              label: "2(c)",
              marks: 4,
              text: "Compare aggregation and composition with lifecycle and propagation rules, and explain Object Constraint Language (OCL) with two concrete constraint examples. [4 marks]",
              question: "Compare aggregation and composition with lifecycle and propagation rules, and explain Object Constraint Language (OCL) with two concrete constraint examples. [4 marks]",
              modelAnswer: `### Aggregation vs Composition & Object Constraint Language (OCL)
*(Reference: Lethbridge & Laganière, 2005, Ch. 5, pp. 188–195)*

#### 1. Aggregation versus Composition (pp. 188–191)

| Feature | Aggregation (\`◇\`) (p. 188) | Composition (\`◆\`) (p. 189) |
| :--- | :--- | :--- |
| **Relationship** | Weak "part-whole" / shared aggregation. | Strong "part-whole" with strict ownership. |
| **UML Symbol** | Open (hollow) diamond next to aggregate. | Solid (filled-in) diamond next to composite. |
| **Lifecycle Dependency** | **Independent:** Parts can exist before or after the whole is destroyed. | **Coincident:** If the whole is destroyed, the parts are destroyed as well. Parts have no independent life. |
| **Multiplicity** | Can be shared by multiple aggregates (\`*\`). | Part belongs to at most **one** composite (\`1\` or \`0..1\`). |
| **Propagation** | Minimal propagation. | Strong **propagation**: operations on the composite (delete, translate, scale) automatically propagate to all parts (p. 190). |
| **Example** | \`Vehicle\` ◇— \`VehiclePart\`; \`Country\` ◇— \`Region\`. | \`Building\` ◆— \`Room\`; \`Polygon\` ◆— \`LineSegment\`. |

*Rule of Thumb:* *"When in doubt, leave it out"*—marking a non-aggregation with a diamond is an error, while leaving it as an ordinary association is never wrong (p. 190).

#### 2. Object Constraint Language (OCL) (pp. 193–195)
- **Definition:** A formal, declarative, side-effect-free specification language developed by IBM and standardized by the OMG to express logical assertions, invariants, and navigation rules that cannot be captured graphically in UML (pp. 193–194).
- **Core Syntax Elements:**
  - \`context <ClassName> inv:\` establishes a class invariant that must evaluate to \`true\` for all instances at all times (p. 195).
  - Navigation using dot notation (\`.\`) and collection navigation using arrow notation (\`->\`).
  - Collection operators: \`->size()\`, \`->forAll()\`, \`->sum()\`, \`->first()\`, \`->last()\`.

#### Two Concrete OCL Invariant Examples (pp. 193–195):

**Example 1: End-points of a LineSegment must never coincide (p. 193)**
\`\`\`ocl
context LineSegment inv:
  startPoint <> endPoint
\`\`\`
*Explanation:* The start point and end point objects of any line segment must be distinct coordinates.

**Example 2: A Polygon must form a closed loop of segments (p. 195)**
\`\`\`ocl
context Polygon inv:
  edge->first().startPoint = edge->last().endPoint
\`\`\`
*Explanation:* In an ordered sequence of edges forming a polygon, the starting point of the first edge must match the ending point of the final edge.`,
              answer: `### Aggregation vs Composition & Object Constraint Language (OCL)
*(Reference: Lethbridge & Laganière, 2005, Ch. 5, pp. 188–195)*

#### 1. Aggregation versus Composition (pp. 188–191)

| Feature | Aggregation (\`◇\`) (p. 188) | Composition (\`◆\`) (p. 189) |
| :--- | :--- | :--- |
| **Relationship** | Weak "part-whole" / shared aggregation. | Strong "part-whole" with strict ownership. |
| **UML Symbol** | Open (hollow) diamond next to aggregate. | Solid (filled-in) diamond next to composite. |
| **Lifecycle Dependency** | **Independent:** Parts can exist before or after the whole is destroyed. | **Coincident:** If the whole is destroyed, the parts are destroyed as well. Parts have no independent life. |
| **Multiplicity** | Can be shared by multiple aggregates (\`*\`). | Part belongs to at most **one** composite (\`1\` or \`0..1\`). |
| **Propagation** | Minimal propagation. | Strong **propagation**: operations on the composite (delete, translate, scale) automatically propagate to all parts (p. 190). |
| **Example** | \`Vehicle\` ◇— \`VehiclePart\`; \`Country\` ◇— \`Region\`. | \`Building\` ◆— \`Room\`; \`Polygon\` ◆— \`LineSegment\`. |

*Rule of Thumb:* *"When in doubt, leave it out"*—marking a non-aggregation with a diamond is an error, while leaving it as an ordinary association is never wrong (p. 190).

#### 2. Object Constraint Language (OCL) (pp. 193–195)
- **Definition:** A formal, declarative, side-effect-free specification language developed by IBM and standardized by the OMG to express logical assertions, invariants, and navigation rules that cannot be captured graphically in UML (pp. 193–194).
- **Core Syntax Elements:**
  - \`context <ClassName> inv:\` establishes a class invariant that must evaluate to \`true\` for all instances at all times (p. 195).
  - Navigation using dot notation (\`.\`) and collection navigation using arrow notation (\`->\`).
  - Collection operators: \`->size()\`, \`->forAll()\`, \`->sum()\`, \`->first()\`, \`->last()\`.

#### Two Concrete OCL Invariant Examples (pp. 193–195):

**Example 1: End-points of a LineSegment must never coincide (p. 193)**
\`\`\`ocl
context LineSegment inv:
  startPoint <> endPoint
\`\`\`
*Explanation:* The start point and end point objects of any line segment must be distinct coordinates.

**Example 2: A Polygon must form a closed loop of segments (p. 195)**
\`\`\`ocl
context Polygon inv:
  edge->first().startPoint = edge->last().endPoint
\`\`\`
*Explanation:* In an ordered sequence of edges forming a polygon, the starting point of the first edge must match the ending point of the final edge.`,
              keyPoints: [
                "Aggregation (open diamond): weak part-whole, independent lifecycles (p. 188)",
                "Composition (filled diamond): coincident lifecycle, whole deletion destroys parts (p. 189)",
                "Propagation: operations on composite propagate to components (p. 190)",
                "OCL: declarative, side-effect-free logic specification (pp. 193-195)",
                "LineSegment invariant and Polygon closed loop examples (p. 195)"
              ]
            }
          ]
        },
        {
          id: "q3",
          number: "Q3",
          topic: "Advanced Object Design",
          title: "Advanced Object Design",
          marks: 12,
          questions: [
            {
              id: "q3-a",
              subNumber: "3(a)",
              label: "3(a)",
              marks: 5,
              text: "Explain at least five design patterns (Singleton, Observer, Adapter, Façade, Proxy, Factory, Delegation, Abstraction–Occurrence, Player–Role) specifying their context, problem, forces, and solution. [5 marks]",
              question: "Explain at least five design patterns (Singleton, Observer, Adapter, Façade, Proxy, Factory, Delegation, Abstraction–Occurrence, Player–Role) specifying their context, problem, forces, and solution. [5 marks]",
              modelAnswer: `### Object-Oriented Design Patterns Catalog
*(Reference: Lethbridge & Laganière, 2005, Ch. 6, pp. 221–251)*

A **pattern** is the outline of a reusable solution to a general problem encountered in a particular context (p. 222). Five foundational patterns:

#### 1. The Singleton Pattern (pp. 231–232)
- **Context:** Classes in a software system where exactly one instance must exist (e.g. \`Company\`, \`MainWindow\`, \`ConfigurationManager\`).
- **Problem:** How do you guarantee that no more than one instance of a class can ever be created while providing global access?
- **Forces:** Public constructors cannot guarantee exclusivity. Global variables are unsafe.
- **Solution:** Provide a private static variable (\`theInstance\`), a private constructor to prevent external instantiation, and a public static accessor method (\`getInstance()\`) that performs lazy instantiation and returns the single instance.

#### 2. The Observer Pattern (pp. 232–234)
- **Context:** Two-way associations between modules where state changes in one object must notify one or more other objects without hardcoding direct references.
- **Problem:** How do you reduce interconnection between modules so that an object communicates changes without knowing the concrete classes of its receivers?
- **Forces:** Direct bidirectional associations create tight coupling, preventing reuse and independent testing.
- **Solution:** Create an abstract \`Observable\` class maintaining a dynamic collection of \`Observer\` interfaces. Observers register via \`addObserver()\`. When state changes, \`notifyObservers()\` invokes the \`update()\` callback on all registered observers.

#### 3. The Adapter Pattern (pp. 236–238)
- **Context:** You need to integrate an existing, third-party, or legacy class (\`Adaptee\`) into a hierarchy, but its method signatures do not match the target interface.
- **Problem:** How do you obtain the power of polymorphism when reusing a class whose interface differs from the expected hierarchy?
- **Forces:** The developer cannot modify the third-party source code. Multiple inheritance is unavailable or undesirable (e.g. in Java).
- **Solution:** Create an \`Adapter\` class implementing the target interface and holding an association to the \`Adaptee\`. The polymorphic methods in the adapter delegate their work directly to the adaptee's methods.

#### 4. The Façade Pattern (pp. 238–239)
- **Context:** A complex subsystem or package contains dozens of interacting classes, but client subsystems only require access to a few high-level functions.
- **Problem:** How do you simplify the view that outside programmers have of a complex package and reduce external dependencies?
- **Forces:** Direct client access to internal classes creates widespread ripple effects whenever internal subsystem details change.
- **Solution:** Create a single \`Façade\` class exposing a clean, simplified set of public methods that coordinate internal classes, shielding outside packages from internal complexity.

#### 5. The Proxy Pattern (pp. 241–243)
- **Context:** Accessing "heavyweight" objects (residing in remote databases or over networks) involves significant time delays and memory consumption.
- **Problem:** How do you avoid loading large numbers of heavyweight objects into memory until they are strictly required?
- **Forces:** Loading the whole database at start-up causes memory exhaustion and latency; but domain logic wants to treat objects as if they were in local memory.
- **Solution:** Create a lightweight \`Proxy\` class sharing the same common interface as the \`HeavyWeight\` class. The proxy acts as a local placeholder; upon method invocation, it transparently loads the heavyweight instance and delegates the call (lazy loading).

*(Supplementary: Abstraction–Occurrence p. 223, General Hierarchy p. 226, Player–Role p. 228, Delegation p. 234, Factory p. 243).*`,
              answer: `### Object-Oriented Design Patterns Catalog
*(Reference: Lethbridge & Laganière, 2005, Ch. 6, pp. 221–251)*

A **pattern** is the outline of a reusable solution to a general problem encountered in a particular context (p. 222). Five foundational patterns:

#### 1. The Singleton Pattern (pp. 231–232)
- **Context:** Classes in a software system where exactly one instance must exist (e.g. \`Company\`, \`MainWindow\`, \`ConfigurationManager\`).
- **Problem:** How do you guarantee that no more than one instance of a class can ever be created while providing global access?
- **Forces:** Public constructors cannot guarantee exclusivity. Global variables are unsafe.
- **Solution:** Provide a private static variable (\`theInstance\`), a private constructor to prevent external instantiation, and a public static accessor method (\`getInstance()\`) that performs lazy instantiation and returns the single instance.

#### 2. The Observer Pattern (pp. 232–234)
- **Context:** Two-way associations between modules where state changes in one object must notify one or more other objects without hardcoding direct references.
- **Problem:** How do you reduce interconnection between modules so that an object communicates changes without knowing the concrete classes of its receivers?
- **Forces:** Direct bidirectional associations create tight coupling, preventing reuse and independent testing.
- **Solution:** Create an abstract \`Observable\` class maintaining a dynamic collection of \`Observer\` interfaces. Observers register via \`addObserver()\`. When state changes, \`notifyObservers()\` invokes the \`update()\` callback on all registered observers.

#### 3. The Adapter Pattern (pp. 236–238)
- **Context:** You need to integrate an existing, third-party, or legacy class (\`Adaptee\`) into a hierarchy, but its method signatures do not match the target interface.
- **Problem:** How do you obtain the power of polymorphism when reusing a class whose interface differs from the expected hierarchy?
- **Forces:** The developer cannot modify the third-party source code. Multiple inheritance is unavailable or undesirable (e.g. in Java).
- **Solution:** Create an \`Adapter\` class implementing the target interface and holding an association to the \`Adaptee\`. The polymorphic methods in the adapter delegate their work directly to the adaptee's methods.

#### 4. The Façade Pattern (pp. 238–239)
- **Context:** A complex subsystem or package contains dozens of interacting classes, but client subsystems only require access to a few high-level functions.
- **Problem:** How do you simplify the view that outside programmers have of a complex package and reduce external dependencies?
- **Forces:** Direct client access to internal classes creates widespread ripple effects whenever internal subsystem details change.
- **Solution:** Create a single \`Façade\` class exposing a clean, simplified set of public methods that coordinate internal classes, shielding outside packages from internal complexity.

#### 5. The Proxy Pattern (pp. 241–243)
- **Context:** Accessing "heavyweight" objects (residing in remote databases or over networks) involves significant time delays and memory consumption.
- **Problem:** How do you avoid loading large numbers of heavyweight objects into memory until they are strictly required?
- **Forces:** Loading the whole database at start-up causes memory exhaustion and latency; but domain logic wants to treat objects as if they were in local memory.
- **Solution:** Create a lightweight \`Proxy\` class sharing the same common interface as the \`HeavyWeight\` class. The proxy acts as a local placeholder; upon method invocation, it transparently loads the heavyweight instance and delegates the call (lazy loading).

*(Supplementary: Abstraction–Occurrence p. 223, General Hierarchy p. 226, Player–Role p. 228, Delegation p. 234, Factory p. 243).*`,
              keyPoints: [
                "Singleton: private constructor, static instance, getInstance() (p. 231)",
                "Observer: Observable subject, Observer interface, update() callback (p. 232)",
                "Adapter: wraps incompatible Adaptee to target interface via delegation (p. 236)",
                "Façade: simplifies complex subsystem API, reducing external coupling (p. 238)",
                "Proxy: lightweight placeholder for heavyweight database/network object (p. 241)"
              ]
            },
            {
              id: "q3-b",
              subNumber: "3(b)",
              label: "3(b)",
              marks: 4,
              text: "Draw a UML sequence diagram for a student course registration use case, detailing lifelines, live activations, object creation, and combined fragments. [4 marks]",
              question: "Draw a UML sequence diagram for a student course registration use case, detailing lifelines, live activations, object creation, and combined fragments. [4 marks]",
              modelAnswer: `### UML Sequence Diagram for Student Registration
*(Reference: Lethbridge & Laganière, 2005, Ch. 8, pp. 286–291)*

#### Core Sequence Diagram Concepts (pp. 286–289)
- **Lifeline:** Vertical dashed line indicating the chronological existence of an object or actor (time progresses downwards).
- **Activation Box:** Narrow rectangle on the lifeline indicating when an object possesses live execution activation (running code).
- **Synchronous Call:** Solid arrow with solid arrowhead (\`->>\`).
- **Object Creation:** Dashed arrow pointing to the newly instantiated object box with label \`create\` or \`<<create>>\` (p. 286).
- **Combined Fragments (p. 288):**
  - \`opt [condition]\`: Optional sequence executed only when the guard evaluates to true.
  - \`loop [min..max]\`: Iteration sequence repeated for collections.

#### Mermaid Sequence Diagram

\`\`\`mermaid
sequenceDiagram
  autonumber
  actor Student as 🧑‍🎓 Student
  participant UI as :RegistrationUI
  participant Section as :CourseSection
  participant Course as :Course
  participant Reg as :Registration

  Student->>UI: selectCourseSection(courseID, secNum)
  activate UI
  UI->>Section: requestToRegister(aStudent)
  activate Section

  Section->>Course: prereq := getPrerequisite()
  activate Course
  Course-->>Section: prerequisiteCourse
  deactivate Course

  Section->>Student: hasPrereq := hasPassedCourse(prereq)
  activate Student
  Student-->>Section: booleanResult (true)
  deactivate Student

  opt [hasPrereq && !isFull()]
    Section->>Reg: create(Section, aStudent)
    activate Reg
    Reg->>Section: addToRegistrationList(this)
    Reg->>Student: addToSchedule(this)
    Reg-->>Section: registrationInstance
    deactivate Reg
  end

  Section-->>UI: confirmRegistrationStatus()
  deactivate Section
  UI-->>Student: displayRegistrationConfirmation()
  deactivate UI
\`\`\`

*Explanation:* The diagram models the exact interaction flow from Figure 8.4 (p. 288), illustrating the check for prerequisites, the \`opt\` fragment guarding admission, and the creation of the association entity \`Registration\` linking the student and section.`,
              answer: `### UML Sequence Diagram for Student Registration
*(Reference: Lethbridge & Laganière, 2005, Ch. 8, pp. 286–291)*

#### Core Sequence Diagram Concepts (pp. 286–289)
- **Lifeline:** Vertical dashed line indicating the chronological existence of an object or actor (time progresses downwards).
- **Activation Box:** Narrow rectangle on the lifeline indicating when an object possesses live execution activation (running code).
- **Synchronous Call:** Solid arrow with solid arrowhead (\`->>\`).
- **Object Creation:** Dashed arrow pointing to the newly instantiated object box with label \`create\` or \`<<create>>\` (p. 286).
- **Combined Fragments (p. 288):**
  - \`opt [condition]\`: Optional sequence executed only when the guard evaluates to true.
  - \`loop [min..max]\`: Iteration sequence repeated for collections.

#### Mermaid Sequence Diagram

\`\`\`mermaid
sequenceDiagram
  autonumber
  actor Student as 🧑‍🎓 Student
  participant UI as :RegistrationUI
  participant Section as :CourseSection
  participant Course as :Course
  participant Reg as :Registration

  Student->>UI: selectCourseSection(courseID, secNum)
  activate UI
  UI->>Section: requestToRegister(aStudent)
  activate Section

  Section->>Course: prereq := getPrerequisite()
  activate Course
  Course-->>Section: prerequisiteCourse
  deactivate Course

  Section->>Student: hasPrereq := hasPassedCourse(prereq)
  activate Student
  Student-->>Section: booleanResult (true)
  deactivate Student

  opt [hasPrereq && !isFull()]
    Section->>Reg: create(Section, aStudent)
    activate Reg
    Reg->>Section: addToRegistrationList(this)
    Reg->>Student: addToSchedule(this)
    Reg-->>Section: registrationInstance
    deactivate Reg
  end

  Section-->>UI: confirmRegistrationStatus()
  deactivate Section
  UI-->>Student: displayRegistrationConfirmation()
  deactivate UI
\`\`\`

*Explanation:* The diagram models the exact interaction flow from Figure 8.4 (p. 288), illustrating the check for prerequisites, the \`opt\` fragment guarding admission, and the creation of the association entity \`Registration\` linking the student and section.`,
              keyPoints: [
                "Lifelines and activation boxes indicating live execution (p. 286)",
                "Synchronous messages and return arrows",
                "<<create>> message instantiating Registration object (p. 286)",
                "Combined fragment 'opt [hasPrereq]' for conditional execution (p. 288)",
                "Clean Mermaid sequence diagram matching Lethbridge Figure 8.4"
              ]
            },
            {
              id: "q3-c",
              subNumber: "3(c)",
              label: "3(c)",
              marks: 3,
              text: "Draw a UML state machine diagram for the lifecycle of a course section or automated device, showing states, transitions, guard conditions, elapsed-time triggers, and actions. [3 marks]",
              question: "Draw a UML state machine diagram for the lifecycle of a course section or automated device, showing states, transitions, guard conditions, elapsed-time triggers, and actions. [3 marks]",
              modelAnswer: `### UML State Machine Diagram
*(Reference: Lethbridge & Laganière, 2005, Ch. 8, pp. 292–300)*

#### State Diagram Syntax & Semantics (pp. 292–298)
- **State (p. 293):** A condition or situation in the life of an object during which it satisfies some condition, performs an activity, or waits for an event. Rounded rectangles indicate states.
- **Transition:** Instantaneous change from one state to another triggered by an event.
- **Syntax of Transition Label (p. 297):** \`event [guardCondition] / action\`
- **Special Elements:**
  - *Start State:* Filled black circle.
  - *End State:* Circled black target dot.
  - *Guard Condition:* Boolean check in brackets evaluated only when the event occurs (p. 299).
  - *Actions:* Instantaneous operations preceded by a slash (\`/\`).
  - *Activities:* Work taking time inside a state (\`do / activity\`, p. 297).

#### Mermaid State Diagram (CourseSection Lifecycle, pp. 295, 300)

\`\`\`mermaid
stateDiagram-v2
  [*] --> Planned

  Planned --> OpenNotEnoughStudents : openRegistration

  state Open {
    OpenNotEnoughStudents --> OpenEnoughStudents : [classSize >= minimum]
    OpenEnoughStudents --> OpenNotEnoughStudents : studentDrops [classSize < minimum]
    OpenEnoughStudents --> Closed : [classSize >= maximum]
  }

  OpenNotEnoughStudents --> Canceled : closeRegistration [classSize < minimum]
  OpenNotEnoughStudents --> Canceled : cancel / unregisterStudents
  OpenEnoughStudents --> Closed : closeRegistration
  OpenEnoughStudents --> Canceled : cancel / unregisterStudents

  Closed --> [*]
  Canceled --> [*]
\`\`\`

*Explanation:* This state diagram models Figure 8.14 and Figure 8.19 (pp. 295, 300). A \`CourseSection\` begins in \`Planned\`. Upon opening registration, it enters the composite \`Open\` state as \`OpenNotEnoughStudents\`. When the class size reaches minimum, it moves to \`OpenEnoughStudents\`. If registration closes before meeting minimum enrolment, it transitions to \`Canceled\`; otherwise it moves to \`Closed\`.`,
              answer: `### UML State Machine Diagram
*(Reference: Lethbridge & Laganière, 2005, Ch. 8, pp. 292–300)*

#### State Diagram Syntax & Semantics (pp. 292–298)
- **State (p. 293):** A condition or situation in the life of an object during which it satisfies some condition, performs an activity, or waits for an event. Rounded rectangles indicate states.
- **Transition:** Instantaneous change from one state to another triggered by an event.
- **Syntax of Transition Label (p. 297):** \`event [guardCondition] / action\`
- **Special Elements:**
  - *Start State:* Filled black circle.
  - *End State:* Circled black target dot.
  - *Guard Condition:* Boolean check in brackets evaluated only when the event occurs (p. 299).
  - *Actions:* Instantaneous operations preceded by a slash (\`/\`).
  - *Activities:* Work taking time inside a state (\`do / activity\`, p. 297).

#### Mermaid State Diagram (CourseSection Lifecycle, pp. 295, 300)

\`\`\`mermaid
stateDiagram-v2
  [*] --> Planned

  Planned --> OpenNotEnoughStudents : openRegistration

  state Open {
    OpenNotEnoughStudents --> OpenEnoughStudents : [classSize >= minimum]
    OpenEnoughStudents --> OpenNotEnoughStudents : studentDrops [classSize < minimum]
    OpenEnoughStudents --> Closed : [classSize >= maximum]
  }

  OpenNotEnoughStudents --> Canceled : closeRegistration [classSize < minimum]
  OpenNotEnoughStudents --> Canceled : cancel / unregisterStudents
  OpenEnoughStudents --> Closed : closeRegistration
  OpenEnoughStudents --> Canceled : cancel / unregisterStudents

  Closed --> [*]
  Canceled --> [*]
\`\`\`

*Explanation:* This state diagram models Figure 8.14 and Figure 8.19 (pp. 295, 300). A \`CourseSection\` begins in \`Planned\`. Upon opening registration, it enters the composite \`Open\` state as \`OpenNotEnoughStudents\`. When the class size reaches minimum, it moves to \`OpenEnoughStudents\`. If registration closes before meeting minimum enrolment, it transitions to \`Canceled\`; otherwise it moves to \`Closed\`.`,
              keyPoints: [
                "States, transitions, start and end targets (p. 293)",
                "Label syntax: event [guard] / action (p. 297)",
                "Nested substates grouping related behavior (p. 299)",
                "Mermaid stateDiagram-v2 illustrating CourseSection lifecycle (pp. 295, 300)"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "section-b",
      name: "Section B — Answer any TWO",
      instructions: "Answer any TWO (2) questions from this section. Each question carries 20 marks.",
      compulsory: false,
      questions: [
        {
          id: "q4",
          number: "Q4",
          topic: "Architectural Analysis and Patterns",
          title: "Architectural Analysis and Patterns",
          marks: 20,
          questions: [
            {
              id: "q4-a",
              subNumber: "4(a)",
              label: "4(a)",
              marks: 10,
              text: "Explain the fundamental software design principles: divide and conquer, increasing cohesion (all seven types), reducing coupling (all nine types), keeping abstraction high, designing for flexibility, portability, testability, and defensive design by contract. [10 marks]",
              question: "Explain the fundamental software design principles: divide and conquer, increasing cohesion (all seven types), reducing coupling (all nine types), keeping abstraction high, designing for flexibility, portability, testability, and defensive design by contract. [10 marks]",
              modelAnswer: `### Principles Leading to Good Software Design
*(Reference: Lethbridge & Laganière, 2005, Ch. 9, pp. 314–336)*

Lethbridge & Laganière formulate eleven foundational design principles that govern maintainable, extensible software architectures:

#### 1. Divide and Conquer (p. 314)
- Partition complex systems into smaller, independently understandable subsystems, packages, classes, and methods. Enables parallel team development and localized maintenance.

#### 2. Increase Cohesion Where Possible (pp. 315–321)
Cohesion measures the degree to which elements inside a module belong together. The authors establish a strict hierarchy from highest (most desirable) to lowest (Table 9.1, p. 316):
1. **Functional Cohesion (Highest):** Module performs exactly one computation with no side effects (e.g. \`Math.sin()\`, p. 315).
2. **Layer Cohesion:** Related services are grouped into a strict vertical hierarchy where higher layers only call lower layers (p. 317).
3. **Communicational Cohesion:** All procedures operating on the same data are grouped together (e.g. a well-designed domain class, p. 318).
4. **Sequential Cohesion:** Output of one procedure is direct input to the next in sequence (p. 319).
5. **Procedural Cohesion:** Procedures executed one after another are grouped together (p. 320).
6. **Temporal Cohesion:** Operations performed during the same execution phase (e.g. start-up initialization) are kept together (p. 320).
7. **Utility Cohesion (Lowest):** Convenient grouping of otherwise unrelated utility functions (e.g. \`java.lang.Math\`, p. 320).

#### 3. Reduce Coupling Where Possible (pp. 321–329)
Coupling measures interdependencies between modules. The authors rank coupling from strongest (worst) to weakest (best) (Table 9.2, p. 323):
1. **Content Coupling (Worst):** One component surreptitiously modifies private internal data of another (always avoid, p. 322).
2. **Common Coupling:** Modules share global variables (severely restrict, p. 324).
3. **Control Coupling:** One routine controls another via an explicit flag or command string (resolve using polymorphism, p. 325).
4. **Stamp Coupling:** An entire application class is passed when only a few fields are needed (replace with an interface or primitive arguments, p. 325).
5. **Data Coupling:** Passing primitive variables or strings as arguments (p. 326).
6. **Routine Call Coupling:** Routines calling each other (encapsulate repeated sequences, p. 327).
7. **Type Use Coupling:** Declaring a variable of an external type (use the most general interface like \`List\`, p. 327).
8. **Inclusion / Import Coupling:** Importing packages or files (import only what is needed, p. 328).
9. **External Coupling:** Dependencies on third-party libraries, hardware, or OS (isolate behind Façade, p. 328).

#### 4–11. Remaining Design Principles (pp. 329–336)
- **Principle 4: Keep Abstraction as High as Possible (p. 329):** Hide low-level details using interfaces, polymorphism, and default values.
- **Principle 5: Increase Reusability Where Possible (p. 330):** Generalize components, avoid domain lock-in, provide hooks for extensions.
- **Principle 6: Reuse Existing Designs and Code (p. 331):** Avoid code cloning; encapsulate duplicate routines into reusable methods.
- **Principle 7: Design for Flexibility (p. 331):** Avoid hardcoded constants; externalize configurations to files.
- **Principle 8: Anticipate Obsolescence (p. 332):** Avoid early vendor-specific libraries and undocumented platform features.
- **Principle 9: Design for Portability (p. 333):** Avoid OS-specific file paths and hardware word assumptions.
- **Principle 10: Design for Testability (p. 334):** Separate UI from business logic so API can be exercised headless; build automated test harnesses.
- **Principle 11: Design Defensively & Design by Contract (pp. 334–336):** Validate preconditions, establish postconditions and class invariants, and leverage runtime assertions (\`assert\`).`,
              answer: `### Principles Leading to Good Software Design
*(Reference: Lethbridge & Laganière, 2005, Ch. 9, pp. 314–336)*

Lethbridge & Laganière formulate eleven foundational design principles that govern maintainable, extensible software architectures:

#### 1. Divide and Conquer (p. 314)
- Partition complex systems into smaller, independently understandable subsystems, packages, classes, and methods. Enables parallel team development and localized maintenance.

#### 2. Increase Cohesion Where Possible (pp. 315–321)
Cohesion measures the degree to which elements inside a module belong together. The authors establish a strict hierarchy from highest (most desirable) to lowest (Table 9.1, p. 316):
1. **Functional Cohesion (Highest):** Module performs exactly one computation with no side effects (e.g. \`Math.sin()\`, p. 315).
2. **Layer Cohesion:** Related services are grouped into a strict vertical hierarchy where higher layers only call lower layers (p. 317).
3. **Communicational Cohesion:** All procedures operating on the same data are grouped together (e.g. a well-designed domain class, p. 318).
4. **Sequential Cohesion:** Output of one procedure is direct input to the next in sequence (p. 319).
5. **Procedural Cohesion:** Procedures executed one after another are grouped together (p. 320).
6. **Temporal Cohesion:** Operations performed during the same execution phase (e.g. start-up initialization) are kept together (p. 320).
7. **Utility Cohesion (Lowest):** Convenient grouping of otherwise unrelated utility functions (e.g. \`java.lang.Math\`, p. 320).

#### 3. Reduce Coupling Where Possible (pp. 321–329)
Coupling measures interdependencies between modules. The authors rank coupling from strongest (worst) to weakest (best) (Table 9.2, p. 323):
1. **Content Coupling (Worst):** One component surreptitiously modifies private internal data of another (always avoid, p. 322).
2. **Common Coupling:** Modules share global variables (severely restrict, p. 324).
3. **Control Coupling:** One routine controls another via an explicit flag or command string (resolve using polymorphism, p. 325).
4. **Stamp Coupling:** An entire application class is passed when only a few fields are needed (replace with an interface or primitive arguments, p. 325).
5. **Data Coupling:** Passing primitive variables or strings as arguments (p. 326).
6. **Routine Call Coupling:** Routines calling each other (encapsulate repeated sequences, p. 327).
7. **Type Use Coupling:** Declaring a variable of an external type (use the most general interface like \`List\`, p. 327).
8. **Inclusion / Import Coupling:** Importing packages or files (import only what is needed, p. 328).
9. **External Coupling:** Dependencies on third-party libraries, hardware, or OS (isolate behind Façade, p. 328).

#### 4–11. Remaining Design Principles (pp. 329–336)
- **Principle 4: Keep Abstraction as High as Possible (p. 329):** Hide low-level details using interfaces, polymorphism, and default values.
- **Principle 5: Increase Reusability Where Possible (p. 330):** Generalize components, avoid domain lock-in, provide hooks for extensions.
- **Principle 6: Reuse Existing Designs and Code (p. 331):** Avoid code cloning; encapsulate duplicate routines into reusable methods.
- **Principle 7: Design for Flexibility (p. 331):** Avoid hardcoded constants; externalize configurations to files.
- **Principle 8: Anticipate Obsolescence (p. 332):** Avoid early vendor-specific libraries and undocumented platform features.
- **Principle 9: Design for Portability (p. 333):** Avoid OS-specific file paths and hardware word assumptions.
- **Principle 10: Design for Testability (p. 334):** Separate UI from business logic so API can be exercised headless; build automated test harnesses.
- **Principle 11: Design Defensively & Design by Contract (pp. 334–336):** Validate preconditions, establish postconditions and class invariants, and leverage runtime assertions (\`assert\`).`,
              keyPoints: [
                "Divide and conquer: partitioning into subsystems, packages, classes (p. 314)",
                "Cohesion hierarchy: Functional > Layer > Communicational > Sequential > Procedural > Temporal > Utility (pp. 315-320)",
                "Coupling hierarchy: Content > Common > Control > Stamp > Data > Routine > Type Use > Import > External (pp. 321-328)",
                "Design by Contract: preconditions, postconditions, invariants, assert (pp. 334-336)"
              ]
            },
            {
              id: "q4-b",
              subNumber: "4(b)",
              label: "4(b)",
              marks: 10,
              text: "Analyse the five major architectural patterns: Multi-Layer, Client-Server, Model-View-Controller (MVC), Pipe-and-Filter, and Broker. Provide an architectural comparison table and a system architecture diagram. [10 marks]",
              question: "Analyse the five major architectural patterns: Multi-Layer, Client-Server, Model-View-Controller (MVC), Pipe-and-Filter, and Broker. Provide an architectural comparison table and a system architecture diagram. [10 marks]",
              modelAnswer: `### Architectural Patterns Analysis & Comparison
*(Reference: Lethbridge & Laganière, 2005, Ch. 9, pp. 347–362)*

Software architecture is the process of designing the global organization of a system, dividing it into subsystems, deciding how these interact, and determining their interfaces (p. 342).

#### The Five Major Architectural Patterns (pp. 347–362)

1. **Multi-Layer Pattern (p. 347):**
   - Organizes components into hierarchical horizontal layers where each layer provides services via an API to the layer immediately above it, and accesses only the layer below.
2. **Client–Server Pattern (p. 349):**
   - Distributes computation across a network between server providers (listening on known ports) and client requesters. May be thin-client or fat-client (p. 84).
3. **Model–View–Controller (MVC) Pattern (p. 355):**
   - Specialization of the multi-layer pattern for interactive systems: separates the **Model** (data/logic), **View** (display rendering), and **Controller** (input event handling). Uses the Observer pattern to keep views updated.
4. **Pipe-and-Filter (Transformational) Pattern (p. 353):**
   - Processes continuous streams of data through a sequence of transformational filters connected by pipes. Filters operate concurrently and autonomously without shared state.
5. **Broker Pattern (p. 351):**
   - Transparently distributes objects across heterogeneous networks. A central Broker decouples clients and servers; clients invoke remote objects through local proxies as if they were in-memory.

#### Architectural Comparison Table

| Pattern | Structural Organization | Communication Protocol | Main Advantages | Primary Limitations | Typical Applications |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Multi-Layer** (p. 347) | Hierarchical horizontal tiers | Procedure calls via API | High abstraction, layer exchangeability, testability | Layer hopping performance overhead | Operating systems, enterprise backends |
| **Client–Server** (p. 349) | Central server + remote clients | Network messages (TCP/IP, HTTP) | Centralized data integrity, multi-user concurrency | Server bottleneck, network dependency | Web applications, banking systems |
| **MVC** (p. 355) | Triad: Model, View, Controller | Observer notifications + method calls | Multiple views for same model, high UI flexibility | Excessive complexity for simple UIs | Desktop applications, interactive web frontends |
| **Pipe-and-Filter** (p. 353) | Pipeline of autonomous filter units | Data streams via pipes | High reusability, easy reconfiguration, concurrency | Inefficient for interactive random access | Compilers, audio/video streaming, ETL pipelines |
| **Broker** (p. 351) | Client Proxy + Broker + Server Object | Remote procedure calls (CORBA, RMI) | Location transparency, language interoperability | Broker latency, complex failure modes | Distributed enterprise objects, microservices |

#### Mermaid Architectural Diagram (Composite System Architecture)

\`\`\`mermaid
flowchart TD
  subgraph ClientSide["Client Tier (MVC Architecture)"]
    VIEW["View Component (HTML/React UI)"]
    CTRL["Controller (Event Handlers)"]
    VIEW -->|User Events| CTRL
  end

  subgraph BrokerTier["Distribution & Broker Tier"]
    PROXY["Client Proxy Object"]
    BROKER["Object Request Broker (ORB)"]
    CTRL -->|Invokes API| PROXY
    PROXY -->|Object Request| BROKER
  end

  subgraph ServerSide["Server Tier (Multi-Layer Architecture)"]
    SERVICE["Business Logic Services"]
    MODEL["Domain Model"]
    BROKER -->|Dispatches| SERVICE
    SERVICE --> MODEL
    MODEL -.->|Observer Notification| VIEW
  end

  subgraph PipelineTier["Background Processing (Pipe-and-Filter)"]
    P1["Raw Data Ingest"] -->|Pipe| F1["Filter: Validation"]
    F1 -->|Pipe| F2["Filter: Encryption"]
    F2 -->|Pipe| DB[("Persistent Database Storage")]
  end

  SERVICE --> P1
\`\`\``,
              answer: `### Architectural Patterns Analysis & Comparison
*(Reference: Lethbridge & Laganière, 2005, Ch. 9, pp. 347–362)*

Software architecture is the process of designing the global organization of a system, dividing it into subsystems, deciding how these interact, and determining their interfaces (p. 342).

#### The Five Major Architectural Patterns (pp. 347–362)

1. **Multi-Layer Pattern (p. 347):**
   - Organizes components into hierarchical horizontal layers where each layer provides services via an API to the layer immediately above it, and accesses only the layer below.
2. **Client–Server Pattern (p. 349):**
   - Distributes computation across a network between server providers (listening on known ports) and client requesters. May be thin-client or fat-client (p. 84).
3. **Model–View–Controller (MVC) Pattern (p. 355):**
   - Specialization of the multi-layer pattern for interactive systems: separates the **Model** (data/logic), **View** (display rendering), and **Controller** (input event handling). Uses the Observer pattern to keep views updated.
4. **Pipe-and-Filter (Transformational) Pattern (p. 353):**
   - Processes continuous streams of data through a sequence of transformational filters connected by pipes. Filters operate concurrently and autonomously without shared state.
5. **Broker Pattern (p. 351):**
   - Transparently distributes objects across heterogeneous networks. A central Broker decouples clients and servers; clients invoke remote objects through local proxies as if they were in-memory.

#### Architectural Comparison Table

| Pattern | Structural Organization | Communication Protocol | Main Advantages | Primary Limitations | Typical Applications |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Multi-Layer** (p. 347) | Hierarchical horizontal tiers | Procedure calls via API | High abstraction, layer exchangeability, testability | Layer hopping performance overhead | Operating systems, enterprise backends |
| **Client–Server** (p. 349) | Central server + remote clients | Network messages (TCP/IP, HTTP) | Centralized data integrity, multi-user concurrency | Server bottleneck, network dependency | Web applications, banking systems |
| **MVC** (p. 355) | Triad: Model, View, Controller | Observer notifications + method calls | Multiple views for same model, high UI flexibility | Excessive complexity for simple UIs | Desktop applications, interactive web frontends |
| **Pipe-and-Filter** (p. 353) | Pipeline of autonomous filter units | Data streams via pipes | High reusability, easy reconfiguration, concurrency | Inefficient for interactive random access | Compilers, audio/video streaming, ETL pipelines |
| **Broker** (p. 351) | Client Proxy + Broker + Server Object | Remote procedure calls (CORBA, RMI) | Location transparency, language interoperability | Broker latency, complex failure modes | Distributed enterprise objects, microservices |

#### Mermaid Architectural Diagram (Composite System Architecture)

\`\`\`mermaid
flowchart TD
  subgraph ClientSide["Client Tier (MVC Architecture)"]
    VIEW["View Component (HTML/React UI)"]
    CTRL["Controller (Event Handlers)"]
    VIEW -->|User Events| CTRL
  end

  subgraph BrokerTier["Distribution & Broker Tier"]
    PROXY["Client Proxy Object"]
    BROKER["Object Request Broker (ORB)"]
    CTRL -->|Invokes API| PROXY
    PROXY -->|Object Request| BROKER
  end

  subgraph ServerSide["Server Tier (Multi-Layer Architecture)"]
    SERVICE["Business Logic Services"]
    MODEL["Domain Model"]
    BROKER -->|Dispatches| SERVICE
    SERVICE --> MODEL
    MODEL -.->|Observer Notification| VIEW
  end

  subgraph PipelineTier["Background Processing (Pipe-and-Filter)"]
    P1["Raw Data Ingest"] -->|Pipe| F1["Filter: Validation"]
    F1 -->|Pipe| F2["Filter: Encryption"]
    F2 -->|Pipe| DB[("Persistent Database Storage")]
  end

  SERVICE --> P1
\`\`\``,
              keyPoints: [
                "Multi-Layer, Client-Server, MVC, Pipe-and-Filter, Broker defined (pp. 347-356)",
                "Full comparison table covering structure, protocol, pros, cons, and systems",
                "Mermaid diagram combining MVC, Broker, Layered server, and Pipe-and-Filter"
              ]
            }
          ]
        },
        {
          id: "q5",
          number: "Q5",
          topic: "Designing a Persistence Framework with patterns",
          title: "Designing a Persistence Framework with patterns",
          marks: 20,
          questions: [
            {
              id: "q5-a",
              subNumber: "5(a)",
              label: "5(a)",
              marks: 6,
              text: "Explain persistence concepts in object-oriented software engineering: object-relational impedance mismatch, persistence lifecycle, caching, and transaction atomicity. [6 marks]",
              question: "Explain persistence concepts in object-oriented software engineering: object-relational impedance mismatch, persistence lifecycle, caching, and transaction atomicity. [6 marks]",
              modelAnswer: `### Core Persistence Concepts in Software Engineering
*(Reference: Lethbridge & Laganière, 2005, Ch. 5, 6, 9, pp. 200, 242–245, 352)*

1. **Object-Relational Impedance Mismatch:**
   - In object-oriented programming, data is organized into rich networks of objects featuring identity, inheritance hierarchies, polymorphism, and encapsulated associations.
   - Relational databases represent data strictly in two-dimensional normalized tables composed of scalar data types, foreign keys, and mathematical relation theory.
   - *Impedance Mismatch Manifestations:*
     - *Identity vs Primary Key:* Objects possess inherent runtime pointer identity; tables require explicit unique keys.
     - *Inheritance:* Relational schemas lack native subclassing; persistence frameworks must map inheritance to single-table, table-per-class, or table-per-concrete-class strategies.
     - *Associations vs Foreign Keys:* Objects support bidirectional references and polymorphic links; SQL foreign keys are directional references between rows.

2. **Persistence Lifecycle & State:**
   - Objects transition through explicit lifecycle states: *Transient* (newly instantiated in memory, not yet associated with a database record), *Persistent* (saved and synchronized with a database row), and *Detached* (loaded in memory but disconnected from the active persistence context/transaction).

3. **Transaction Atomicity & ACID Properties (p. 352):**
   - In many business operations, such as booking a student or debiting an account, multiple database rows must be updated simultaneously.
   - **Atomicity:** Guarantees that all related database operations succeed together or none of them are committed (all-or-nothing). If any step fails, the persistence framework rolls back all modifications to prevent database corruption.

4. **Caching & Cache Management Pattern (p. 245):**
   - Disk and network operations are orders of magnitude slower than RAM access. A persistence framework maintains an in-memory cache of previously loaded objects. Subsequent requests for the same entity are served from the cache without round-tripping to the database, provided cache consistency is guaranteed.`,
              answer: `### Core Persistence Concepts in Software Engineering
*(Reference: Lethbridge & Laganière, 2005, Ch. 5, 6, 9, pp. 200, 242–245, 352)*

1. **Object-Relational Impedance Mismatch:**
   - In object-oriented programming, data is organized into rich networks of objects featuring identity, inheritance hierarchies, polymorphism, and encapsulated associations.
   - Relational databases represent data strictly in two-dimensional normalized tables composed of scalar data types, foreign keys, and mathematical relation theory.
   - *Impedance Mismatch Manifestations:*
     - *Identity vs Primary Key:* Objects possess inherent runtime pointer identity; tables require explicit unique keys.
     - *Inheritance:* Relational schemas lack native subclassing; persistence frameworks must map inheritance to single-table, table-per-class, or table-per-concrete-class strategies.
     - *Associations vs Foreign Keys:* Objects support bidirectional references and polymorphic links; SQL foreign keys are directional references between rows.

2. **Persistence Lifecycle & State:**
   - Objects transition through explicit lifecycle states: *Transient* (newly instantiated in memory, not yet associated with a database record), *Persistent* (saved and synchronized with a database row), and *Detached* (loaded in memory but disconnected from the active persistence context/transaction).

3. **Transaction Atomicity & ACID Properties (p. 352):**
   - In many business operations, such as booking a student or debiting an account, multiple database rows must be updated simultaneously.
   - **Atomicity:** Guarantees that all related database operations succeed together or none of them are committed (all-or-nothing). If any step fails, the persistence framework rolls back all modifications to prevent database corruption.

4. **Caching & Cache Management Pattern (p. 245):**
   - Disk and network operations are orders of magnitude slower than RAM access. A persistence framework maintains an in-memory cache of previously loaded objects. Subsequent requests for the same entity are served from the cache without round-tripping to the database, provided cache consistency is guaranteed.`,
              keyPoints: [
                "Impedance mismatch: identity, inheritance, associations vs relational tables",
                "Persistence lifecycle: Transient, Persistent, Detached states",
                "Transaction atomicity: all-or-nothing consistency (p. 352)",
                "Caching: in-memory object retention for performance (p. 245)"
              ]
            },
            {
              id: "q5-b",
              subNumber: "5(b)",
              label: "5(b)",
              marks: 8,
              text: "Explain how the Broker pattern, Proxy pattern (for lazy loading), and Data Access Object (DAO) pattern cooperate in a persistence framework. Provide Java structural skeletons. [8 marks]",
              question: "Explain how the Broker pattern, Proxy pattern (for lazy loading), and Data Access Object (DAO) pattern cooperate in a persistence framework. Provide Java structural skeletons. [8 marks]",
              modelAnswer: `### Cooperating Design Patterns for Persistence
*(Reference: Lethbridge & Laganière, 2005, Ch. 6, 9, pp. 241–243, 351)*

A robust persistence framework decouples business domain logic from physical storage engines by combining three complementary design patterns:

#### 1. The Broker Pattern (p. 351)
- **Role:** Acts as an intermediary coordinating mapping, caching, and connection management. Domain classes call the broker (\`PersistenceBroker.save(object)\`, \`find(Class, id)\`) without containing SQL or driver code.

#### 2. The Proxy Pattern for Lazy Loading (pp. 241–243)
- **Role:** Resolves performance bottlenecks. When loading an object with many associations (e.g. \`Student\` with 50 completed courses), loading everything eagerly causes memory bloat. The framework returns a lightweight \`Proxy\` that loads the heavyweight list only when \`getGrades()\` is actually invoked.

#### 3. The Data Access Object (DAO) Pattern
- **Role:** Encapsulates raw CRUD SQL operations for a specific entity into a distinct interface, shielding the persistence broker and domain model from specific database SQL dialects.

#### Java Implementation Skeletons

\`\`\`java
// 1. Common Interface for Lazy Loading (Proxy Pattern, p. 242)
public interface StudentIF {
    String getStudentNumber();
    String getName();
    List<Registration> getRegistrations();
}

// 2. Real Heavyweight Domain Entity
public class PersistentStudent implements StudentIF {
    private String studentNumber;
    private String name;
    private List<Registration> registrations;

    public PersistentStudent(String id, String name, List<Registration> regs) {
        this.studentNumber = id;
        this.name = name;
        this.registrations = regs;
    }
    public String getStudentNumber() { return studentNumber; }
    public String getName() { return name; }
    public List<Registration> getRegistrations() { return registrations; }
}

// 3. Lightweight Lazy Proxy (Proxy Pattern, p. 242)
public class StudentProxy implements StudentIF {
    private String studentNumber;
    private String name;
    private PersistentStudent realStudent = null; // Lazy loaded

    public StudentProxy(String id, String name) {
        this.studentNumber = id;
        this.name = name;
    }
    public String getStudentNumber() { return studentNumber; }
    public String getName() { return name; }
    public List<Registration> getRegistrations() {
        if (realStudent == null) {
            // Lazy load from database via Persistence Broker when accessed
            realStudent = PersistenceBroker.getInstance().loadStudent(studentNumber);
        }
        return realStudent.getRegistrations();
    }
}

// 4. Data Access Object (DAO) Interface
public interface StudentDAO {
    void insert(StudentIF student);
    StudentIF findById(String id);
    void update(StudentIF student);
    void delete(String id);
}
\`\`\``,
              answer: `### Cooperating Design Patterns for Persistence
*(Reference: Lethbridge & Laganière, 2005, Ch. 6, 9, pp. 241–243, 351)*

A robust persistence framework decouples business domain logic from physical storage engines by combining three complementary design patterns:

#### 1. The Broker Pattern (p. 351)
- **Role:** Acts as an intermediary coordinating mapping, caching, and connection management. Domain classes call the broker (\`PersistenceBroker.save(object)\`, \`find(Class, id)\`) without containing SQL or driver code.

#### 2. The Proxy Pattern for Lazy Loading (pp. 241–243)
- **Role:** Resolves performance bottlenecks. When loading an object with many associations (e.g. \`Student\` with 50 completed courses), loading everything eagerly causes memory bloat. The framework returns a lightweight \`Proxy\` that loads the heavyweight list only when \`getGrades()\` is actually invoked.

#### 3. The Data Access Object (DAO) Pattern
- **Role:** Encapsulates raw CRUD SQL operations for a specific entity into a distinct interface, shielding the persistence broker and domain model from specific database SQL dialects.

#### Java Implementation Skeletons

\`\`\`java
// 1. Common Interface for Lazy Loading (Proxy Pattern, p. 242)
public interface StudentIF {
    String getStudentNumber();
    String getName();
    List<Registration> getRegistrations();
}

// 2. Real Heavyweight Domain Entity
public class PersistentStudent implements StudentIF {
    private String studentNumber;
    private String name;
    private List<Registration> registrations;

    public PersistentStudent(String id, String name, List<Registration> regs) {
        this.studentNumber = id;
        this.name = name;
        this.registrations = regs;
    }
    public String getStudentNumber() { return studentNumber; }
    public String getName() { return name; }
    public List<Registration> getRegistrations() { return registrations; }
}

// 3. Lightweight Lazy Proxy (Proxy Pattern, p. 242)
public class StudentProxy implements StudentIF {
    private String studentNumber;
    private String name;
    private PersistentStudent realStudent = null; // Lazy loaded

    public StudentProxy(String id, String name) {
        this.studentNumber = id;
        this.name = name;
    }
    public String getStudentNumber() { return studentNumber; }
    public String getName() { return name; }
    public List<Registration> getRegistrations() {
        if (realStudent == null) {
            // Lazy load from database via Persistence Broker when accessed
            realStudent = PersistenceBroker.getInstance().loadStudent(studentNumber);
        }
        return realStudent.getRegistrations();
    }
}

// 4. Data Access Object (DAO) Interface
public interface StudentDAO {
    void insert(StudentIF student);
    StudentIF findById(String id);
    void update(StudentIF student);
    void delete(String id);
}
\`\`\``,
              keyPoints: [
                "Broker pattern: mediates between domain layer and data stores (p. 351)",
                "Proxy pattern: transparent placeholder for lazy-loading heavyweight data (pp. 241-243)",
                "DAO pattern: encapsulates CRUD SQL operations behind interface",
                "Java skeletons showing StudentIF, StudentProxy, PersistentStudent, and StudentDAO"
              ]
            },
            {
              id: "q5-c",
              subNumber: "5(c)",
              label: "5(c)",
              marks: 6,
              text: "Draw a layered persistence architecture diagram showing presentation, domain entities, persistence broker/DAO, and database engines, and walk through a query transaction. [6 marks]",
              question: "Draw a layered persistence architecture diagram showing presentation, domain entities, persistence broker/DAO, and database engines, and walk through a query transaction. [6 marks]",
              modelAnswer: `### Layered Persistence Architecture Diagram & Query Transaction Flow
*(Reference: Lethbridge & Laganière, 2005, Ch. 9, pp. 317, 347, 351)*

#### 1. Layered Persistence Architecture Diagram

\`\`\`mermaid
flowchart TD
  subgraph PresentationLayer["1. Presentation Layer (UI)"]
    UI["Web / Desktop GUI Controllers"]
  end

  subgraph DomainLayer["2. Domain Business Layer"]
    STUDENT["Student Entity"]
    COURSE["Course Entity"]
    REG["Registration Entity"]
  end

  subgraph PersistenceFramework["3. Persistence Framework (Broker & DAOs)"]
    BROKER["PersistenceBroker (Singleton)"]
    CACHE["Identity Map / In-Memory Cache"]
    DAO_S["StudentDAO"]
    DAO_C["CourseDAO"]
    PROXY["Lazy StudentProxy"]
    BROKER --> CACHE
    BROKER --> DAO_S
    BROKER --> DAO_C
    DAO_S -.-> PROXY
  end

  subgraph DatabaseLayer["4. Physical Storage Layer"]
    RDBMS[("Relational Database (PostgreSQL)")]
    NOSQL[("Document Archive Store")]
  end

  UI -->|Invokes Service| DomainLayer
  DomainLayer -->|find / save| BROKER
  DAO_S -->|JDBC SQL| RDBMS
  DAO_C -->|SQL Queries| RDBMS
\`\`\`

#### 2. Step-by-Step Walkthrough of a Query Transaction:
1. **User Request:** UI Controller receives a request to view student records for \`studentNumber = '20240123'\`.
2. **Broker Query:** Controller queries \`PersistenceBroker.findStudent('20240123')\`.
3. **Cache Lookup:** Broker first inspects the in-memory Cache (Identity Map). If present, it returns the cached instance immediately with zero database I/O.
4. **DAO Execution:** On cache miss, the Broker directs \`StudentDAO\` to execute a parameterized SQL query (\`SELECT * FROM students WHERE id = ?\`).
5. **Proxy Instantiation:** \`StudentDAO\` builds a \`StudentProxy\` containing the student's scalar fields (name, ID). It does not immediately query the large \`Registration\` history.
6. **Lazy Load on Demand:** When the UI requests \`student.getRegistrations()\`, the \`StudentProxy\` transparently invokes the Broker to load the associated records from the database.`,
              answer: `### Layered Persistence Architecture Diagram & Query Transaction Flow
*(Reference: Lethbridge & Laganière, 2005, Ch. 9, pp. 317, 347, 351)*

#### 1. Layered Persistence Architecture Diagram

\`\`\`mermaid
flowchart TD
  subgraph PresentationLayer["1. Presentation Layer (UI)"]
    UI["Web / Desktop GUI Controllers"]
  end

  subgraph DomainLayer["2. Domain Business Layer"]
    STUDENT["Student Entity"]
    COURSE["Course Entity"]
    REG["Registration Entity"]
  end

  subgraph PersistenceFramework["3. Persistence Framework (Broker & DAOs)"]
    BROKER["PersistenceBroker (Singleton)"]
    CACHE["Identity Map / In-Memory Cache"]
    DAO_S["StudentDAO"]
    DAO_C["CourseDAO"]
    PROXY["Lazy StudentProxy"]
    BROKER --> CACHE
    BROKER --> DAO_S
    BROKER --> DAO_C
    DAO_S -.-> PROXY
  end

  subgraph DatabaseLayer["4. Physical Storage Layer"]
    RDBMS[("Relational Database (PostgreSQL)")]
    NOSQL[("Document Archive Store")]
  end

  UI -->|Invokes Service| DomainLayer
  DomainLayer -->|find / save| BROKER
  DAO_S -->|JDBC SQL| RDBMS
  DAO_C -->|SQL Queries| RDBMS
\`\`\`

#### 2. Step-by-Step Walkthrough of a Query Transaction:
1. **User Request:** UI Controller receives a request to view student records for \`studentNumber = '20240123'\`.
2. **Broker Query:** Controller queries \`PersistenceBroker.findStudent('20240123')\`.
3. **Cache Lookup:** Broker first inspects the in-memory Cache (Identity Map). If present, it returns the cached instance immediately with zero database I/O.
4. **DAO Execution:** On cache miss, the Broker directs \`StudentDAO\` to execute a parameterized SQL query (\`SELECT * FROM students WHERE id = ?\`).
5. **Proxy Instantiation:** \`StudentDAO\` builds a \`StudentProxy\` containing the student's scalar fields (name, ID). It does not immediately query the large \`Registration\` history.
6. **Lazy Load on Demand:** When the UI requests \`student.getRegistrations()\`, the \`StudentProxy\` transparently invokes the Broker to load the associated records from the database.`,
              keyPoints: [
                "4-Tier architecture: Presentation, Domain, Persistence Framework, Storage",
                "Broker coordinates caching, DAO delegation, and proxy creation",
                "Step-by-step query transaction walkthrough with cache check and lazy loading"
              ]
            }
          ]
        },
        {
          id: "q6",
          number: "Q6",
          topic: "Aspect-Oriented Software Development",
          title: "Aspect-Oriented Software Development",
          marks: 20,
          questions: [
            {
              id: "q6-a",
              subNumber: "6(a)",
              label: "6(a)",
              marks: 8,
              text: "Define the core concepts of Aspect-Oriented Software Development (AOSD): cross-cutting concerns, code tangling, code scattering, aspect, join point, pointcut, advice, and introduction. [8 marks]",
              question: "Define the core concepts of Aspect-Oriented Software Development (AOSD): cross-cutting concerns, code tangling, code scattering, aspect, join point, pointcut, advice, and introduction. [8 marks]",
              modelAnswer: `### Foundations of Aspect-Oriented Software Development (AOSD)
*(Reference: Sommerville, 2016, Web Ch. 31; Laddad, AspectJ in Action)*

In traditional object-oriented systems, certain systemic concerns cannot be neatly modularized into individual classes. These are **cross-cutting concerns**. AOSD provides explicit modular language constructs to encapsulate them:

1. **Cross-Cutting Concerns:**
   - System-wide requirements—such as security authentication, transaction logging, error tracing, profiling, and cache management—that span across multiple unrelated modules in an application.

2. **Code Tangling vs Code Scattering:**
   - **Code Tangling:** Occurs when a single class or method contains business logic intertwined with non-functional concerns (e.g. banking transfer logic mixed with logging, authorization checks, and transaction commit/rollback code).
   - **Code Scattering:** Occurs when the same concern's implementation code is duplicated across dozens or hundreds of different classes throughout the codebase, severely degrading maintainability.

3. **Aspect:**
   - The primary modular unit in AOSD (analogous to a class in OOP) that encapsulates a cross-cutting concern. An aspect packages pointcuts and advice together.

4. **Join Point:**
   - A well-defined, identifiable execution point in the runtime lifecycle of a program. Examples include method execution, method call, constructor invocation, field access, or exception handling.

5. **Pointcut:**
   - A declarative predicate expression that selects a specific set of join points and exposes contextual data at those points. For example:
     \`execution(* com.unza.services.*.*(..))\` matches all method executions in the services package.

6. **Advice:**
   - The actual implementation code executed at join points matched by a pointcut. Three primary types:
     - *Before Advice:* Executes prior to join point execution.
     - *After Advice:* Executes after join point completion (normally, returning, or throwing).
     - *Around Advice:* Surrounds the join point, controlling whether the original join point executes via \`proceed()\`.

7. **Introduction (Inter-Type Declarations):**
   - The mechanism allowing an aspect to declare additional methods, fields, or interface implementations on behalf of existing target classes without modifying their source files.`,
              answer: `### Foundations of Aspect-Oriented Software Development (AOSD)
*(Reference: Sommerville, 2016, Web Ch. 31; Laddad, AspectJ in Action)*

In traditional object-oriented systems, certain systemic concerns cannot be neatly modularized into individual classes. These are **cross-cutting concerns**. AOSD provides explicit modular language constructs to encapsulate them:

1. **Cross-Cutting Concerns:**
   - System-wide requirements—such as security authentication, transaction logging, error tracing, profiling, and cache management—that span across multiple unrelated modules in an application.

2. **Code Tangling vs Code Scattering:**
   - **Code Tangling:** Occurs when a single class or method contains business logic intertwined with non-functional concerns (e.g. banking transfer logic mixed with logging, authorization checks, and transaction commit/rollback code).
   - **Code Scattering:** Occurs when the same concern's implementation code is duplicated across dozens or hundreds of different classes throughout the codebase, severely degrading maintainability.

3. **Aspect:**
   - The primary modular unit in AOSD (analogous to a class in OOP) that encapsulates a cross-cutting concern. An aspect packages pointcuts and advice together.

4. **Join Point:**
   - A well-defined, identifiable execution point in the runtime lifecycle of a program. Examples include method execution, method call, constructor invocation, field access, or exception handling.

5. **Pointcut:**
   - A declarative predicate expression that selects a specific set of join points and exposes contextual data at those points. For example:
     \`execution(* com.unza.services.*.*(..))\` matches all method executions in the services package.

6. **Advice:**
   - The actual implementation code executed at join points matched by a pointcut. Three primary types:
     - *Before Advice:* Executes prior to join point execution.
     - *After Advice:* Executes after join point completion (normally, returning, or throwing).
     - *Around Advice:* Surrounds the join point, controlling whether the original join point executes via \`proceed()\`.

7. **Introduction (Inter-Type Declarations):**
   - The mechanism allowing an aspect to declare additional methods, fields, or interface implementations on behalf of existing target classes without modifying their source files.`,
              keyPoints: [
                "Cross-cutting concerns: concerns spanning multiple unrelated classes",
                "Code tangling (concerns mixed in single method) vs Scattering (duplicated across classes)",
                "Aspect: modular unit encapsulating cross-cutting concern",
                "Join point (execution point), Pointcut (query predicate), Advice (action code: before/after/around)",
                "Introduction: inter-type declarations extending class structure"
              ]
            },
            {
              id: "q6-b",
              subNumber: "6(b)",
              label: "6(b)",
              marks: 6,
              text: "Compare compile-time weaving, post-compile (binary) weaving, and load-time/runtime weaving in terms of performance, tooling, and dynamic flexibility. [6 marks]",
              question: "Compare compile-time weaving, post-compile (binary) weaving, and load-time/runtime weaving in terms of performance, tooling, and dynamic flexibility. [6 marks]",
              modelAnswer: `### Comparison of Aspect Weaving Mechanisms
*(Reference: Sommerville, 2016, Web Ch. 31; Eclipse AspectJ Documentation)*

**Weaving** is the critical composition process by which aspect advice instructions are integrated into the core target application code to produce an integrated executable system.

#### The Three Primary Weaving Approaches

| Aspect | Compile-Time Weaving (CTW) | Post-Compile / Binary Weaving | Load-Time / Runtime Weaving (LTW) |
| :--- | :--- | :--- | :--- |
| **When Applied** | During compilation from source code. | After compilation, on existing class files/JARs. | When JVM ClassLoader loads classes into memory. |
| **Tooling Required** | Specialized compiler (e.g. \`ajc\` for AspectJ). | Bytecode weaver tool processing compiled JARs. | Java Virtual Machine agent (\`-javaagent\`) or dynamic proxy runtime. |
| **Execution Performance** | **Optimal:** Zero runtime interception overhead. Inlined bytecode executes as native code. | **Optimal:** Bytecode is pre-woven, running at full native JVM speed. | **Slight Overhead:** Minor delay during class loading and proxy interception. |
| **Source Code Dependency** | Requires complete source code access for both classes and aspects. | Works on third-party commercial libraries without source code. | Works on dynamically loaded bytecode and runtime plugins. |
| **Dynamic Adaptability** | **Static:** Aspects cannot be added, removed, or reconfigured without recompilation. | **Static:** Requires re-weaving JAR files. | **Highly Dynamic:** Aspects can be toggled on/off at runtime via configuration. |
| **Typical Use Cases** | Safety-critical systems, core domain services, high-throughput microservices. | Extending third-party closed-source SDKs and legacy binary frameworks. | Spring AOP, enterprise transaction interceptors, runtime monitoring agents. |`,
              answer: `### Comparison of Aspect Weaving Mechanisms
*(Reference: Sommerville, 2016, Web Ch. 31; Eclipse AspectJ Documentation)*

**Weaving** is the critical composition process by which aspect advice instructions are integrated into the core target application code to produce an integrated executable system.

#### The Three Primary Weaving Approaches

| Aspect | Compile-Time Weaving (CTW) | Post-Compile / Binary Weaving | Load-Time / Runtime Weaving (LTW) |
| :--- | :--- | :--- | :--- |
| **When Applied** | During compilation from source code. | After compilation, on existing class files/JARs. | When JVM ClassLoader loads classes into memory. |
| **Tooling Required** | Specialized compiler (e.g. \`ajc\` for AspectJ). | Bytecode weaver tool processing compiled JARs. | Java Virtual Machine agent (\`-javaagent\`) or dynamic proxy runtime. |
| **Execution Performance** | **Optimal:** Zero runtime interception overhead. Inlined bytecode executes as native code. | **Optimal:** Bytecode is pre-woven, running at full native JVM speed. | **Slight Overhead:** Minor delay during class loading and proxy interception. |
| **Source Code Dependency** | Requires complete source code access for both classes and aspects. | Works on third-party commercial libraries without source code. | Works on dynamically loaded bytecode and runtime plugins. |
| **Dynamic Adaptability** | **Static:** Aspects cannot be added, removed, or reconfigured without recompilation. | **Static:** Requires re-weaving JAR files. | **Highly Dynamic:** Aspects can be toggled on/off at runtime via configuration. |
| **Typical Use Cases** | Safety-critical systems, core domain services, high-throughput microservices. | Extending third-party closed-source SDKs and legacy binary frameworks. | Spring AOP, enterprise transaction interceptors, runtime monitoring agents. |`,
              keyPoints: [
                "Compile-time weaving: ajc compiler merges aspects at build time, max speed",
                "Binary weaving: weaves pre-compiled JARs without source code access",
                "Load-time weaving: JVM classloader weaves classes on demand, dynamic adaptability",
                "Full comparative table on timing, performance, tooling, flexibility"
              ]
            },
            {
              id: "q6-c",
              subNumber: "6(c)",
              label: "6(c)",
              marks: 6,
              text: "Provide a concrete AspectJ implementation example for logging and security verification across business service methods. Contrast the architecture with traditional scattered implementations. [6 marks]",
              question: "Provide a concrete AspectJ implementation example for logging and security verification across business service methods. Contrast the architecture with traditional scattered implementations. [6 marks]",
              modelAnswer: `### AspectJ Implementation Example & Architectural Comparison
*(Reference: Sommerville, 2016, Web Ch. 31)*

#### 1. Concrete AspectJ Aspect Definition
The following aspect intercepts all execution methods in the student service layer, providing automated authentication checks, performance profiling, and audit logging:

\`\`\`java
package com.unza.aspects;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import java.util.logging.Logger;

@Aspect
public class SecurityAndAuditAspect {
    private static final Logger log = Logger.getLogger("AuditLog");

    // Pointcut matching all public service operations
    @Pointcut("execution(public * com.unza.services.*Service.*(..))")
    public void businessServiceMethods() {}

    // Around advice managing security and performance timing
    @Around("businessServiceMethods()")
    public Object enforceSecurityAndLog(ProceedingJoinPoint pjp) throws Throwable {
        String methodName = pjp.getSignature().toShortString();
        
        // 1. Pre-execution Security Check
        if (!SecurityContext.getCurrentUser().isAuthenticated()) {
            log.warning("Unauthorized access attempted on " + methodName);
            throw new SecurityException("Authentication required for " + methodName);
        }

        long startTime = System.currentTimeMillis();
        log.info("START operation: " + methodName);

        try {
            // 2. Proceed to actual core business logic execution
            Object result = pjp.proceed();
            
            long duration = System.currentTimeMillis() - startTime;
            log.info("SUCCESS operation: " + methodName + " executed in " + duration + " ms");
            return result;
        } catch (Throwable t) {
            log.severe("FAILED operation: " + methodName + " error: " + t.getMessage());
            throw t;
        }
    }
}
\`\`\`

#### 2. Architectural Comparison: Scattered vs Aspect-Oriented

\`\`\`mermaid
flowchart TD
  subgraph Scattered["Traditional Scattered Architecture (Tangling & Scattering)"]
    direction TB
    S1["StudentService<br/>- Business Logic<br/>- Auth Check (scattered)<br/>- Audit Log (scattered)"]
    C1["CourseService<br/>- Business Logic<br/>- Auth Check (scattered)<br/>- Audit Log (scattered)"]
    G1["GradeService<br/>- Business Logic<br/>- Auth Check (scattered)<br/>- Audit Log (scattered)"]
  end

  subgraph AspectOriented["AOSD Clean Modular Architecture"]
    direction TB
    S2["StudentService<br/>(Pure Business Logic)"]
    C2["CourseService<br/>(Pure Business Logic)"]
    G2["GradeService<br/>(Pure Business Logic)"]
    ASPECT["SecurityAndAuditAspect<br/>(Encapsulated Pointcuts & Around Advice)"]
    ASPECT -.->|Woven into| S2
    ASPECT -.->|Woven into| C2
    ASPECT -.->|Woven into| G2
  end
\`\`\`

#### Benefits of the Aspect-Oriented Approach:
1. **Zero Tangling:** Service classes contain 100% pure business logic; no boilerplate logging or authorization code.
2. **Zero Scattering:** Changing audit logging format or switching authentication protocols requires editing **one aspect file**, eliminating ripple changes across hundreds of classes.`,
              answer: `### AspectJ Implementation Example & Architectural Comparison
*(Reference: Sommerville, 2016, Web Ch. 31)*

#### 1. Concrete AspectJ Aspect Definition
The following aspect intercepts all execution methods in the student service layer, providing automated authentication checks, performance profiling, and audit logging:

\`\`\`java
package com.unza.aspects;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import java.util.logging.Logger;

@Aspect
public class SecurityAndAuditAspect {
    private static final Logger log = Logger.getLogger("AuditLog");

    // Pointcut matching all public service operations
    @Pointcut("execution(public * com.unza.services.*Service.*(..))")
    public void businessServiceMethods() {}

    // Around advice managing security and performance timing
    @Around("businessServiceMethods()")
    public Object enforceSecurityAndLog(ProceedingJoinPoint pjp) throws Throwable {
        String methodName = pjp.getSignature().toShortString();
        
        // 1. Pre-execution Security Check
        if (!SecurityContext.getCurrentUser().isAuthenticated()) {
            log.warning("Unauthorized access attempted on " + methodName);
            throw new SecurityException("Authentication required for " + methodName);
        }

        long startTime = System.currentTimeMillis();
        log.info("START operation: " + methodName);

        try {
            // 2. Proceed to actual core business logic execution
            Object result = pjp.proceed();
            
            long duration = System.currentTimeMillis() - startTime;
            log.info("SUCCESS operation: " + methodName + " executed in " + duration + " ms");
            return result;
        } catch (Throwable t) {
            log.severe("FAILED operation: " + methodName + " error: " + t.getMessage());
            throw t;
        }
    }
}
\`\`\`

#### 2. Architectural Comparison: Scattered vs Aspect-Oriented

\`\`\`mermaid
flowchart TD
  subgraph Scattered["Traditional Scattered Architecture (Tangling & Scattering)"]
    direction TB
    S1["StudentService<br/>- Business Logic<br/>- Auth Check (scattered)<br/>- Audit Log (scattered)"]
    C1["CourseService<br/>- Business Logic<br/>- Auth Check (scattered)<br/>- Audit Log (scattered)"]
    G1["GradeService<br/>- Business Logic<br/>- Auth Check (scattered)<br/>- Audit Log (scattered)"]
  end

  subgraph AspectOriented["AOSD Clean Modular Architecture"]
    direction TB
    S2["StudentService<br/>(Pure Business Logic)"]
    C2["CourseService<br/>(Pure Business Logic)"]
    G2["GradeService<br/>(Pure Business Logic)"]
    ASPECT["SecurityAndAuditAspect<br/>(Encapsulated Pointcuts & Around Advice)"]
    ASPECT -.->|Woven into| S2
    ASPECT -.->|Woven into| C2
    ASPECT -.->|Woven into| G2
  end
\`\`\`

#### Benefits of the Aspect-Oriented Approach:
1. **Zero Tangling:** Service classes contain 100% pure business logic; no boilerplate logging or authorization code.
2. **Zero Scattering:** Changing audit logging format or switching authentication protocols requires editing **one aspect file**, eliminating ripple changes across hundreds of classes.`,
              keyPoints: [
                "AspectJ code with @Aspect, @Pointcut, and @Around advice",
                "Intercepts service calls, performs authentication and timing",
                "Mermaid comparison between scattered and aspect-oriented architecture",
                "Eliminates code tangling and scattering"
              ]
            }
          ]
        },
        {
          id: "q7",
          number: "Q7",
          topic: "Advanced Software testing techniques",
          title: "Advanced Software testing techniques",
          marks: 20,
          questions: [
            {
              id: "q7-a",
              subNumber: "7(a)",
              label: "7(a)",
              marks: 6,
              text: "Differentiate between failure, defect (fault), and error. Explain black-box vs glass-box (white-box) testing, formal test case structure, and test case severity levels. [6 marks]",
              question: "Differentiate between failure, defect (fault), and error. Explain black-box vs glass-box (white-box) testing, formal test case structure, and test case severity levels. [6 marks]",
              modelAnswer: `### Foundations of Software Testing & Quality Assurance
*(Reference: Lethbridge & Laganière, 2005, Ch. 10, pp. 371–376, 398–400)*

#### 1. Failure vs Defect vs Error (pp. 371–373)
The authors establish rigorous definitions to distinguish these concepts:
- **Error (p. 372):** A slip-up or inappropriate decision made by a software developer that leads to the introduction of a defect into the system (e.g. inverted \`>\` and \`<\` operator).
- **Defect / Fault (p. 372):** A flaw in any artifact (requirements, design, or source code) that contributes, or may potentially contribute, to the occurrence of one or more failures.
- **Failure (p. 372):** An unacceptable behavior exhibited by a running system (e.g. system crash, wrong calculation, frozen screen).

Human Error → Code Defect (Fault) → Observed Failure

*Rule:* Human errors introduce defects; defects lie dormant until executed, at which point they cause visible failures.

#### 2. Black-Box versus Glass-Box (White-Box) Testing (pp. 373–376)
- **Black-Box Testing (p. 373):** Testers treat the system as an opaque box. They provide inputs and observe outputs based solely on requirements without visibility into source code, internal variables, or algorithms.
- **Glass-Box (Structural / White-Box) Testing (p. 374):** Testers look inside the program structure. They analyze flow graphs, branch decisions, and variable paths to achieve measured statement and branch coverage targets.

#### 3. Formal Test Case Structure (pp. 398–399)
Each formal test case in a test plan must contain:
1. **Identification & Classification:** Unique test case number, title, tested subsystem, and importance/severity level.
2. **Instructions:** Explicit steps to put the system in the initial state and provide inputs.
3. **Expected Result:** What the system should output and what state it must enter.
4. **Cleanup:** Steps to restore database/file system state to prevent test contamination.

#### 4. Levels of Test Case Importance (p. 399)
- **Level 1 (First-Pass Critical):** Verifies basic execution and safety; failure halts further testing.
- **Level 2 (General Test Cases):** Verifies core day-to-day functions; system is usable if passed.
- **Level 3 (Lesser Importance / Cosmetic):** Tests secondary features, UI styling, and input redundancy.`,
              answer: `### Foundations of Software Testing & Quality Assurance
*(Reference: Lethbridge & Laganière, 2005, Ch. 10, pp. 371–376, 398–400)*

#### 1. Failure vs Defect vs Error (pp. 371–373)
The authors establish rigorous definitions to distinguish these concepts:
- **Error (p. 372):** A slip-up or inappropriate decision made by a software developer that leads to the introduction of a defect into the system (e.g. inverted \`>\` and \`<\` operator).
- **Defect / Fault (p. 372):** A flaw in any artifact (requirements, design, or source code) that contributes, or may potentially contribute, to the occurrence of one or more failures.
- **Failure (p. 372):** An unacceptable behavior exhibited by a running system (e.g. system crash, wrong calculation, frozen screen).

Human Error → Code Defect (Fault) → Observed Failure

*Rule:* Human errors introduce defects; defects lie dormant until executed, at which point they cause visible failures.

#### 2. Black-Box versus Glass-Box (White-Box) Testing (pp. 373–376)
- **Black-Box Testing (p. 373):** Testers treat the system as an opaque box. They provide inputs and observe outputs based solely on requirements without visibility into source code, internal variables, or algorithms.
- **Glass-Box (Structural / White-Box) Testing (p. 374):** Testers look inside the program structure. They analyze flow graphs, branch decisions, and variable paths to achieve measured statement and branch coverage targets.

#### 3. Formal Test Case Structure (pp. 398–399)
Each formal test case in a test plan must contain:
1. **Identification & Classification:** Unique test case number, title, tested subsystem, and importance/severity level.
2. **Instructions:** Explicit steps to put the system in the initial state and provide inputs.
3. **Expected Result:** What the system should output and what state it must enter.
4. **Cleanup:** Steps to restore database/file system state to prevent test contamination.

#### 4. Levels of Test Case Importance (p. 399)
- **Level 1 (First-Pass Critical):** Verifies basic execution and safety; failure halts further testing.
- **Level 2 (General Test Cases):** Verifies core day-to-day functions; system is usable if passed.
- **Level 3 (Lesser Importance / Cosmetic):** Tests secondary features, UI styling, and input redundancy.`,
              keyPoints: [
                "Error (human slip) -> Defect (code flaw) -> Failure (runtime symptom) (pp. 371-373)",
                "Black-box (requirements-driven) vs Glass-box (internal structure/coverage) (pp. 373-376)",
                "Test case structure: ID, instructions, expected result, cleanup (pp. 398-399)",
                "Severity levels: Level 1 (critical pass), Level 2 (general), Level 3 (cosmetic) (p. 399)"
              ]
            },
            {
              id: "q7-b",
              subNumber: "7(b)",
              label: "7(b)",
              marks: 8,
              text: "Explain equivalence partitioning, boundary value analysis, McCabe's Cyclomatic Complexity V(G) = E − N + 2P, and basis path testing with a worked algorithm example. [8 marks]",
              question: "Explain equivalence partitioning, boundary value analysis, McCabe's Cyclomatic Complexity V(G) = E − N + 2P, and basis path testing with a worked algorithm example. [8 marks]",
              modelAnswer: `### Equivalence Partitioning, Cyclomatic Complexity & Basis Path Testing
*(Reference: Lethbridge & Laganière, 2005, Ch. 10, pp. 376–388)*

#### 1. Equivalence Partitioning & Boundary Testing (pp. 376–380)
- **Equivalence Classes (p. 377):** Partitioning input ranges into sets of data where the program is presumed to treat all members identically. A tester runs one representative test per class.
- **Boundary Value Analysis (p. 380):** High-yield strategy testing values at the extreme edges of classes (e.g. min, min+1, max-1, max), where off-by-one and logical comparison defects concentrate.

*Worked Example: Month Validation (int input 1..12, Table 10.1, p. 377):*
- *Invalid (smaller):* [-2^31 .. 0] → Boundary test at 0
- *Valid Month:* [1 .. 12] → Boundary tests at 1, 12
- *Invalid (larger):* [13 .. 2^31-1] → Boundary test at 13

#### 2. McCabe's Cyclomatic Complexity & Basis Path Testing (pp. 374–376)
- **Cyclomatic Complexity Formula:**
  \`V(G) = E - N + 2P\`
  Where:
  - \`E\` = number of edges in the control flow graph
  - \`N\` = number of nodes in the control flow graph
  - \`P\` = number of connected components (typically 1 for a single method)
  - Alternatively: \`V(G) = \\text{Predicate Nodes} + 1\`

#### Worked Example: Control Flow Graph & Basis Paths

Consider the following student examination grading method:
\`\`\`java
public char computeGrade(int mark, boolean attendedExam) {
  if (!attendedExam) {          // Node 1 (Predicate)
    return 'X';                 // Node 2
  }
  if (mark >= 75) {             // Node 3 (Predicate)
    return 'A';                 // Node 4
  } else if (mark >= 50) {      // Node 5 (Predicate)
    return 'P';                 // Node 6
  } else {
    return 'F';                 // Node 7
  }
}
\`\`\`

\`\`\`mermaid
flowchart TD
  START([Start]) --> N1{1: !attendedExam?}
  N1 -->|True| N2[2: Return 'X']
  N1 -->|False| N3{3: mark >= 75?}
  N3 -->|True| N4[4: Return 'A']
  N3 -->|False| N5{5: mark >= 50?}
  N5 -->|True| N6[6: Return 'P']
  N5 -->|False| N7[7: Return 'F']
  N2 --> END([End])
  N4 --> END
  N6 --> END
  N7 --> END
\`\`\`

- **Graph Metrics:**
  - Nodes \`N = 8\` (Start, 1, 2, 3, 4, 5, 6, 7, End combined = 8 functional nodes)
  - Edges \`E = 10\`
  - Connected components \`P = 1\`
  - \`V(G) = E - N + 2P = 10 - 8 + 2(1) = 4\`
  - (Check with predicate nodes: 3 predicates + 1 = 4).

#### The 4 Independent Basis Paths:
1. **Path 1:** Start → 1 → 2 → End (Test: \`attendedExam = false\`, expected \`'X'\`)
2. **Path 2:** Start → 1 → 3 → 4 → End (Test: \`attendedExam = true, mark = 85\`, expected \`'A'\`)
3. **Path 3:** Start → 1 → 3 → 5 → 6 → End (Test: \`attendedExam = true, mark = 60\`, expected \`'P'\`)
4. **Path 4:** Start → 1 → 3 → 5 → 7 → End (Test: \`attendedExam = true, mark = 35\`, expected \`'F'\`)

*Guaranteed Coverage:* Executing these 4 independent basis paths guarantees 100% statement coverage and 100% branch/edge coverage without testing redundant permutations.`,
              answer: `### Equivalence Partitioning, Cyclomatic Complexity & Basis Path Testing
*(Reference: Lethbridge & Laganière, 2005, Ch. 10, pp. 376–388)*

#### 1. Equivalence Partitioning & Boundary Testing (pp. 376–380)
- **Equivalence Classes (p. 377):** Partitioning input ranges into sets of data where the program is presumed to treat all members identically. A tester runs one representative test per class.
- **Boundary Value Analysis (p. 380):** High-yield strategy testing values at the extreme edges of classes (e.g. min, min+1, max-1, max), where off-by-one and logical comparison defects concentrate.

*Worked Example: Month Validation (int input 1..12, Table 10.1, p. 377):*
- *Invalid (smaller):* [-2^31 .. 0] → Boundary test at 0
- *Valid Month:* [1 .. 12] → Boundary tests at 1, 12
- *Invalid (larger):* [13 .. 2^31-1] → Boundary test at 13

#### 2. McCabe's Cyclomatic Complexity & Basis Path Testing (pp. 374–376)
- **Cyclomatic Complexity Formula:**
  \`V(G) = E - N + 2P\`
  Where:
  - \`E\` = number of edges in the control flow graph
  - \`N\` = number of nodes in the control flow graph
  - \`P\` = number of connected components (typically 1 for a single method)
  - Alternatively: \`V(G) = \\text{Predicate Nodes} + 1\`

#### Worked Example: Control Flow Graph & Basis Paths

Consider the following student examination grading method:
\`\`\`java
public char computeGrade(int mark, boolean attendedExam) {
  if (!attendedExam) {          // Node 1 (Predicate)
    return 'X';                 // Node 2
  }
  if (mark >= 75) {             // Node 3 (Predicate)
    return 'A';                 // Node 4
  } else if (mark >= 50) {      // Node 5 (Predicate)
    return 'P';                 // Node 6
  } else {
    return 'F';                 // Node 7
  }
}
\`\`\`

\`\`\`mermaid
flowchart TD
  START([Start]) --> N1{1: !attendedExam?}
  N1 -->|True| N2[2: Return 'X']
  N1 -->|False| N3{3: mark >= 75?}
  N3 -->|True| N4[4: Return 'A']
  N3 -->|False| N5{5: mark >= 50?}
  N5 -->|True| N6[6: Return 'P']
  N5 -->|False| N7[7: Return 'F']
  N2 --> END([End])
  N4 --> END
  N6 --> END
  N7 --> END
\`\`\`

- **Graph Metrics:**
  - Nodes \`N = 8\` (Start, 1, 2, 3, 4, 5, 6, 7, End combined = 8 functional nodes)
  - Edges \`E = 10\`
  - Connected components \`P = 1\`
  - \`V(G) = E - N + 2P = 10 - 8 + 2(1) = 4\`
  - (Check with predicate nodes: 3 predicates + 1 = 4).

#### The 4 Independent Basis Paths:
1. **Path 1:** Start → 1 → 2 → End (Test: \`attendedExam = false\`, expected \`'X'\`)
2. **Path 2:** Start → 1 → 3 → 4 → End (Test: \`attendedExam = true, mark = 85\`, expected \`'A'\`)
3. **Path 3:** Start → 1 → 3 → 5 → 6 → End (Test: \`attendedExam = true, mark = 60\`, expected \`'P'\`)
4. **Path 4:** Start → 1 → 3 → 5 → 7 → End (Test: \`attendedExam = true, mark = 35\`, expected \`'F'\`)

*Guaranteed Coverage:* Executing these 4 independent basis paths guarantees 100% statement coverage and 100% branch/edge coverage without testing redundant permutations.`,
              keyPoints: [
                "Equivalence classes: representative partition testing (p. 377)",
                "Boundary testing: extreme limits where bugs congregate (p. 380)",
                "McCabe's formula: V(G) = E - N + 2P (p. 374)",
                "Full worked flow graph, calculating V(G) = 4 and deriving 4 basis paths",
                "Guarantees 100% branch and statement coverage"
              ]
            },
            {
              id: "q7-c",
              subNumber: "7(c)",
              label: "7(c)",
              marks: 6,
              text: "Describe the Test-Driven Development (TDD) cycle (Red-Green-Refactor), integration testing strategies (Big Bang, Top-down with stubs, Bottom-up with drivers, Sandwich), and regression testing with the ripple effect. [6 marks]",
              question: "Describe the Test-Driven Development (TDD) cycle (Red-Green-Refactor), integration testing strategies (Big Bang, Top-down with stubs, Bottom-up with drivers, Sandwich), and regression testing with the ripple effect. [6 marks]",
              modelAnswer: `### TDD Cycle, Integration Strategies & Regression Testing
*(Reference: Lethbridge & Laganière, 2005, Ch. 10, pp. 401–407)*

#### 1. Test-Driven Development (TDD) Cycle (pp. 401–402)
TDD reverses conventional development by writing automated tests **before** implementation code:

\`\`\`mermaid
flowchart LR
  RED["1. RED:<br/>Write automated test that FAILS"] --> GREEN["2. GREEN:<br/>Write minimal code to PASS"]
  GREEN --> REFACTOR["3. REFACTOR:<br/>Clean code while preserving PASS"]
  REFACTOR --> RED
\`\`\`

- **Red:** Write a failing test verifying a new requirement or edge case.
- **Green:** Implement the simplest possible production code that causes the test to pass.
- **Refactor:** Clean up code duplication, improve design, and eliminate architectural flaws while keeping test suite green.

#### 2. Integration Testing Strategies (Figure 10.8, pp. 402–406)
- **Big Bang Testing (p. 402):** Integrates all modules at once and tests the completed system. Inefficient for large systems because defect localization is extremely difficult.
- **Top-Down Testing (p. 403):** Begins with user interface layers. Lower unfinished subsystems are simulated with **stubs** (minimal dummy methods returning static data).
- **Bottom-Up Testing (p. 404):** Begins with low-level databases and utility routines. Higher layers are replaced with **drivers / test harnesses** that feed synthetic inputs to lower APIs.
- **Sandwich (Mixed) Testing (p. 405):** Combines top-down testing of UI (using stubs) with bottom-up testing of database/network tiers (using drivers), meeting in the middle domain layer. Considered the most cost-effective integration strategy.

#### 3. Regression Testing & The Ripple Effect (pp. 406–407)
- **The Ripple Effect (p. 406):** Fixing a bug frequently introduces new unintended defects into other modules because the developer overlooks distant side effects.
- **Regression Testing:** Re-running a carefully chosen subset of past test cases after any software modification to ensure existing capabilities remain uncompromised.
- **Law of Conservation of Bugs (p. 407):** *"The number of bugs remaining in a large system is proportional to the number of bugs already fixed."* Defect-ridden code remains failure-prone without structural refactoring.`,
              answer: `### TDD Cycle, Integration Strategies & Regression Testing
*(Reference: Lethbridge & Laganière, 2005, Ch. 10, pp. 401–407)*

#### 1. Test-Driven Development (TDD) Cycle (pp. 401–402)
TDD reverses conventional development by writing automated tests **before** implementation code:

\`\`\`mermaid
flowchart LR
  RED["1. RED:<br/>Write automated test that FAILS"] --> GREEN["2. GREEN:<br/>Write minimal code to PASS"]
  GREEN --> REFACTOR["3. REFACTOR:<br/>Clean code while preserving PASS"]
  REFACTOR --> RED
\`\`\`

- **Red:** Write a failing test verifying a new requirement or edge case.
- **Green:** Implement the simplest possible production code that causes the test to pass.
- **Refactor:** Clean up code duplication, improve design, and eliminate architectural flaws while keeping test suite green.

#### 2. Integration Testing Strategies (Figure 10.8, pp. 402–406)
- **Big Bang Testing (p. 402):** Integrates all modules at once and tests the completed system. Inefficient for large systems because defect localization is extremely difficult.
- **Top-Down Testing (p. 403):** Begins with user interface layers. Lower unfinished subsystems are simulated with **stubs** (minimal dummy methods returning static data).
- **Bottom-Up Testing (p. 404):** Begins with low-level databases and utility routines. Higher layers are replaced with **drivers / test harnesses** that feed synthetic inputs to lower APIs.
- **Sandwich (Mixed) Testing (p. 405):** Combines top-down testing of UI (using stubs) with bottom-up testing of database/network tiers (using drivers), meeting in the middle domain layer. Considered the most cost-effective integration strategy.

#### 3. Regression Testing & The Ripple Effect (pp. 406–407)
- **The Ripple Effect (p. 406):** Fixing a bug frequently introduces new unintended defects into other modules because the developer overlooks distant side effects.
- **Regression Testing:** Re-running a carefully chosen subset of past test cases after any software modification to ensure existing capabilities remain uncompromised.
- **Law of Conservation of Bugs (p. 407):** *"The number of bugs remaining in a large system is proportional to the number of bugs already fixed."* Defect-ridden code remains failure-prone without structural refactoring.`,
              keyPoints: [
                "TDD cycle: Red (failing test) -> Green (minimal pass) -> Refactor (clean) (pp. 401-402)",
                "Integration: Big Bang vs Top-down (stubs) vs Bottom-up (drivers) vs Sandwich (pp. 402-406)",
                "Ripple effect: bug fixes introducing new defects (p. 406)",
                "Regression testing: re-verifying existing functionality after changes (p. 406)",
                "Law of conservation of bugs (p. 407)"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "section-c",
      name: "Section C — Answer any ONE",
      instructions: "Answer any ONE (1) question from this section. Each question carries 20 marks.",
      compulsory: false,
      questions: [
        {
          id: "q8",
          number: "Q8",
          // TODO: confirm with lecturer
          topic: "Topic 8 — Service-Oriented & Systems of Systems",
          title: "Service-Oriented Architecture and Systems of Systems",
          marks: 20,
          questions: [
            {
              id: "q8-a",
              subNumber: "8(a)",
              label: "8(a)",
              marks: 8,
              text: "Define Service-Oriented Architecture (SOA), explain its core principles, benefits, and architectural challenges. [8 marks]",
              question: "Define Service-Oriented Architecture (SOA), explain its core principles, benefits, and architectural challenges. [8 marks]",
              modelAnswer: `### Service-Oriented Architecture (SOA)
*(Reference: Lethbridge & Laganière, 2005, Ch. 9, pp. 358–360; Sommerville, 2016, Ch. 18)*

#### 1. Definition (p. 358)
> *"Service-oriented architecture organizes an application as a collection of services that communicate with each other through well-defined interfaces... accessible through the Internet that can be integrated with other web services to form a Web-based application."* (p. 358)

A **service** is a self-contained, loosely coupled software entity with a well-defined interface that performs a specific business activity.

#### 2. Core Architectural Principles
1. **Loose Coupling (p. 359):** Services interact across network boundaries using open, standard protocols without knowledge of internal programming languages, databases, or operating platforms.
2. **Service Autonomy:** Each service controls its own runtime environment, execution logic, and persistent storage.
3. **Discoverability:** Services publish metadata descriptions to registries so consumers can discover endpoints dynamically.
4. **Standardized Service Contract:** Services expose formal public interfaces specifying input data types, output schemas, and fault responses.
5. **Composability:** Services can be orchestrated into higher-level workflows to execute complex business processes.

#### 3. Key Benefits of SOA
- **Interoperability (p. 359):** Integrates heterogeneous software stacks across disparate organizations (e.g. Java J2EE client accessing a C# .NET bank payment service).
- **Legacy Asset Reuse:** Existing mainframe and database investments can be wrapped as Web services without complete rewrites.
- **Enterprise Agility & Scalability:** Services can be independently scaled horizontally across clusters and cloud environments.

#### 4. Architectural Challenges
- **Security & Trust (p. 359):** Opening endpoints to network calls introduces vulnerabilities (tampering, eavesdropping, denial of service). Requires HTTPS, token authentication (OAuth2/JWT), and encryption.
- **Network Latency & Distributed Fallacies:** Remote network calls are orders of magnitude slower than local procedure calls; network failures must be handled defensively with circuit breakers.
- **Distributed Transaction Complexity:** Coordinating atomic ACID transactions across independent microservices requires distributed saga patterns rather than local database locks.`,
              answer: `### Service-Oriented Architecture (SOA)
*(Reference: Lethbridge & Laganière, 2005, Ch. 9, pp. 358–360; Sommerville, 2016, Ch. 18)*

#### 1. Definition (p. 358)
> *"Service-oriented architecture organizes an application as a collection of services that communicate with each other through well-defined interfaces... accessible through the Internet that can be integrated with other web services to form a Web-based application."* (p. 358)

A **service** is a self-contained, loosely coupled software entity with a well-defined interface that performs a specific business activity.

#### 2. Core Architectural Principles
1. **Loose Coupling (p. 359):** Services interact across network boundaries using open, standard protocols without knowledge of internal programming languages, databases, or operating platforms.
2. **Service Autonomy:** Each service controls its own runtime environment, execution logic, and persistent storage.
3. **Discoverability:** Services publish metadata descriptions to registries so consumers can discover endpoints dynamically.
4. **Standardized Service Contract:** Services expose formal public interfaces specifying input data types, output schemas, and fault responses.
5. **Composability:** Services can be orchestrated into higher-level workflows to execute complex business processes.

#### 3. Key Benefits of SOA
- **Interoperability (p. 359):** Integrates heterogeneous software stacks across disparate organizations (e.g. Java J2EE client accessing a C# .NET bank payment service).
- **Legacy Asset Reuse:** Existing mainframe and database investments can be wrapped as Web services without complete rewrites.
- **Enterprise Agility & Scalability:** Services can be independently scaled horizontally across clusters and cloud environments.

#### 4. Architectural Challenges
- **Security & Trust (p. 359):** Opening endpoints to network calls introduces vulnerabilities (tampering, eavesdropping, denial of service). Requires HTTPS, token authentication (OAuth2/JWT), and encryption.
- **Network Latency & Distributed Fallacies:** Remote network calls are orders of magnitude slower than local procedure calls; network failures must be handled defensively with circuit breakers.
- **Distributed Transaction Complexity:** Coordinating atomic ACID transactions across independent microservices requires distributed saga patterns rather than local database locks.`,
              keyPoints: [
                "SOA definition: collection of loosely coupled services communicating via standard APIs (p. 358)",
                "Core principles: loose coupling, autonomy, discoverability, standard contracts, composability",
                "Benefits: platform interoperability, legacy reuse, scalable enterprise architecture (p. 359)",
                "Challenges: security, network latency, distributed transactions (p. 359)"
              ]
            },
            {
              id: "q8-b",
              subNumber: "8(b)",
              label: "8(b)",
              marks: 6,
              text: "Explain the Web Services technology stack (WSDL, SOAP, UDDI) and compare it with the RESTful architectural style. [6 marks]",
              question: "Explain the Web Services technology stack (WSDL, SOAP, UDDI) and compare it with the RESTful architectural style. [6 marks]",
              modelAnswer: `### The Web Services Stack vs RESTful Architecture
*(Reference: Lethbridge & Laganière, 2005, Ch. 9, pp. 358–359; Sommerville, 2016, Ch. 18)*

#### 1. The Classic Big-Web-Services Stack (WSDL, SOAP, UDDI) (p. 358)
- **WSDL (Web Services Description Language):**
  - An XML-based grammar for describing what a Web service does, its operations, parameters, data types, and network endpoints. Serves as the formal contract between service and client.
- **SOAP (Simple Object Access Protocol):**
  - An XML-based messaging envelope protocol for exchanging structured information across HTTP/SMTP. Supports complex enterprise WS-Security, WS-AtomicTransaction standards.
- **UDDI (Universal Description, Discovery and Integration):**
  - A directory and registry specification where service providers publish their WSDL contracts, allowing clients to query and discover service endpoints dynamically.

#### 2. The RESTful Architectural Style (Fielding, 2000; Sommerville, 2016)
- **Representational State Transfer (REST):**
  - An architectural style using the native capabilities of HTTP.
  - Treats entities as **resources** addressed by unique **URIs** (e.g. \`/students/20240123\`).
  - Uses standard HTTP verbs: \`GET\` (read), \`POST\` (create), \`PUT\` (update), \`DELETE\` (remove).
  - Employs lightweight data representations, primarily JSON.

#### Comparative Analysis

| Feature | SOAP / WSDL Stack | RESTful Architecture |
| :--- | :--- | :--- |
| **Architectural Model** | Formal remote procedure call protocol. | Resource-oriented architectural style. |
| **Payload Format** | Strict, verbose XML envelope. | Lightweight JSON, XML, or plain text. |
| **Transport** | Protocol-independent (HTTP, SMTP, TCP). | Tied directly to the HTTP/HTTPS protocol. |
| **Contract** | Strict machine-readable contract (WSDL). | Informal (OpenAPI/Swagger) or schema-on-read. |
| **Caching** | Complex; POST requests cannot be cached by HTTP proxies. | Native HTTP caching on GET requests. |
| **Best Suited For** | High-security banking, enterprise transactions. | Web applications, mobile APIs, cloud microservices. |`,
              answer: `### The Web Services Stack vs RESTful Architecture
*(Reference: Lethbridge & Laganière, 2005, Ch. 9, pp. 358–359; Sommerville, 2016, Ch. 18)*

#### 1. The Classic Big-Web-Services Stack (WSDL, SOAP, UDDI) (p. 358)
- **WSDL (Web Services Description Language):**
  - An XML-based grammar for describing what a Web service does, its operations, parameters, data types, and network endpoints. Serves as the formal contract between service and client.
- **SOAP (Simple Object Access Protocol):**
  - An XML-based messaging envelope protocol for exchanging structured information across HTTP/SMTP. Supports complex enterprise WS-Security, WS-AtomicTransaction standards.
- **UDDI (Universal Description, Discovery and Integration):**
  - A directory and registry specification where service providers publish their WSDL contracts, allowing clients to query and discover service endpoints dynamically.

#### 2. The RESTful Architectural Style (Fielding, 2000; Sommerville, 2016)
- **Representational State Transfer (REST):**
  - An architectural style using the native capabilities of HTTP.
  - Treats entities as **resources** addressed by unique **URIs** (e.g. \`/students/20240123\`).
  - Uses standard HTTP verbs: \`GET\` (read), \`POST\` (create), \`PUT\` (update), \`DELETE\` (remove).
  - Employs lightweight data representations, primarily JSON.

#### Comparative Analysis

| Feature | SOAP / WSDL Stack | RESTful Architecture |
| :--- | :--- | :--- |
| **Architectural Model** | Formal remote procedure call protocol. | Resource-oriented architectural style. |
| **Payload Format** | Strict, verbose XML envelope. | Lightweight JSON, XML, or plain text. |
| **Transport** | Protocol-independent (HTTP, SMTP, TCP). | Tied directly to the HTTP/HTTPS protocol. |
| **Contract** | Strict machine-readable contract (WSDL). | Informal (OpenAPI/Swagger) or schema-on-read. |
| **Caching** | Complex; POST requests cannot be cached by HTTP proxies. | Native HTTP caching on GET requests. |
| **Best Suited For** | High-security banking, enterprise transactions. | Web applications, mobile APIs, cloud microservices. |`,
              keyPoints: [
                "WSDL: XML-based interface and endpoint description contract (p. 358)",
                "SOAP: XML envelope protocol for structured messages",
                "UDDI: registry directory for discovering services",
                "REST: resource URIs, standard HTTP verbs, JSON format",
                "Detailed comparison table covering payload, transport, contract, caching"
              ]
            },
            {
              id: "q8-c",
              subNumber: "8(c)",
              label: "8(c)",
              marks: 6,
              text: "Define Systems of Systems (SoS) engineering and explain the four types of SoS (Directed, Acknowledged, Collaborative, Virtual) with real-world examples. [6 marks]",
              question: "Define Systems of Systems (SoS) engineering and explain the four types of SoS (Directed, Acknowledged, Collaborative, Virtual) with real-world examples. [6 marks]",
              modelAnswer: `### Systems of Systems (SoS) Engineering
*(Reference: Sommerville, 2016, Ch. 20; Maier, 1998)*

#### 1. Definition & Core Characteristics
A **System of Systems (SoS)** is an integration of a finite number of constituent systems which are operationally and managerially independent, which collaborate to achieve common goals not achievable by any individual constituent system alone.

*Key Characteristics (Maier's Criteria):*
- **Operational Independence:** Constituent systems can operate independently and perform useful purpose if detached from the SoS.
- **Managerial Independence:** Constituent systems are managed, funded, and evolved separately by distinct organizations.
- **Emergent Behaviour:** The SoS delivers emergent capabilities that do not reside in any single constituent system.
- **Evolutionary Development:** The SoS evolves over time as constituent systems change, join, or leave.
- **Geographic Distribution:** Constituents are distributed across physical sites.

#### 2. The Four Types of Systems of Systems

1. **Directed SoS:**
   - **Characteristics:** Built and managed from the top down to fulfill specific objectives. Constituent systems are subordinated to a central authority, though they retain operational independence when separated.
   - **Example:** An Integrated National Air Defense Command (integrates independent radar systems, missile batteries, fighter jets, and command bunkers under a single central military commander).

2. **Acknowledged SoS:**
   - **Characteristics:** Possesses recognized objectives, a designated manager, and shared governance; however, constituent systems retain their own independent management, funding, and development priorities. Changes are negotiated rather than mandated.
   - **Example:** A National Healthcare Integrated Network (UTH Central Hospital, provincial hospitals, blood bank services, and medical billing agencies collaborating under a Ministry of Health framework).

3. **Collaborative SoS:**
   - **Characteristics:** Constituent systems interact voluntarily to fulfill mutually agreed goals without central management or coercive control. Governance relies on voluntary consensus and open standards.
   - **Example:** The Global Internet (autonomous ISPs, DNS root servers, and border gateway routers cooperating via IETF RFC protocols).

4. **Virtual SoS:**
   - **Characteristics:** Lacks central management and centrally agreed common purposes. Large-scale systemic behavior emerges organically from opportunistic interactions.
   - **Example:** The World Wide Web and global cryptocurrency networks.

#### 3. Mermaid SoS Integration Diagram

\`\`\`mermaid
flowchart TD
  subgraph SoS["National Emergency Healthcare SoS (Acknowledged SoS)"]
    direction TB
    SYS1["UTH Hospital Management System<br/>(Independent Hospital)"]
    SYS2["National Ambulance Dispatch Fleet<br/>(Emergency Operations)"]
    SYS3["Central Blood Transfusion Service<br/>(Autonomous Blood Bank)"]
    SYS4["National Health Insurance Agency<br/>(Billing & Identity)"]
  end

  SYS2 -->|GPS Trauma Notification| SYS1
  SYS1 -->|Emergency Blood Request| SYS3
  SYS1 -->|Claim Processing| SYS4
  SYS2 -->|Patient Transport Logs| SYS4
\`\`\``,
              answer: `### Systems of Systems (SoS) Engineering
*(Reference: Sommerville, 2016, Ch. 20; Maier, 1998)*

#### 1. Definition & Core Characteristics
A **System of Systems (SoS)** is an integration of a finite number of constituent systems which are operationally and managerially independent, which collaborate to achieve common goals not achievable by any individual constituent system alone.

*Key Characteristics (Maier's Criteria):*
- **Operational Independence:** Constituent systems can operate independently and perform useful purpose if detached from the SoS.
- **Managerial Independence:** Constituent systems are managed, funded, and evolved separately by distinct organizations.
- **Emergent Behaviour:** The SoS delivers emergent capabilities that do not reside in any single constituent system.
- **Evolutionary Development:** The SoS evolves over time as constituent systems change, join, or leave.
- **Geographic Distribution:** Constituents are distributed across physical sites.

#### 2. The Four Types of Systems of Systems

1. **Directed SoS:**
   - **Characteristics:** Built and managed from the top down to fulfill specific objectives. Constituent systems are subordinated to a central authority, though they retain operational independence when separated.
   - **Example:** An Integrated National Air Defense Command (integrates independent radar systems, missile batteries, fighter jets, and command bunkers under a single central military commander).

2. **Acknowledged SoS:**
   - **Characteristics:** Possesses recognized objectives, a designated manager, and shared governance; however, constituent systems retain their own independent management, funding, and development priorities. Changes are negotiated rather than mandated.
   - **Example:** A National Healthcare Integrated Network (UTH Central Hospital, provincial hospitals, blood bank services, and medical billing agencies collaborating under a Ministry of Health framework).

3. **Collaborative SoS:**
   - **Characteristics:** Constituent systems interact voluntarily to fulfill mutually agreed goals without central management or coercive control. Governance relies on voluntary consensus and open standards.
   - **Example:** The Global Internet (autonomous ISPs, DNS root servers, and border gateway routers cooperating via IETF RFC protocols).

4. **Virtual SoS:**
   - **Characteristics:** Lacks central management and centrally agreed common purposes. Large-scale systemic behavior emerges organically from opportunistic interactions.
   - **Example:** The World Wide Web and global cryptocurrency networks.

#### 3. Mermaid SoS Integration Diagram

\`\`\`mermaid
flowchart TD
  subgraph SoS["National Emergency Healthcare SoS (Acknowledged SoS)"]
    direction TB
    SYS1["UTH Hospital Management System<br/>(Independent Hospital)"]
    SYS2["National Ambulance Dispatch Fleet<br/>(Emergency Operations)"]
    SYS3["Central Blood Transfusion Service<br/>(Autonomous Blood Bank)"]
    SYS4["National Health Insurance Agency<br/>(Billing & Identity)"]
  end

  SYS2 -->|GPS Trauma Notification| SYS1
  SYS1 -->|Emergency Blood Request| SYS3
  SYS1 -->|Claim Processing| SYS4
  SYS2 -->|Patient Transport Logs| SYS4
\`\`\``,
              keyPoints: [
                "SoS definition: operational & managerial independence, emergent behavior (Sommerville Ch. 20)",
                "Directed: centralized authority and command (Air Defense)",
                "Acknowledged: shared objectives, designated manager, autonomous units (National Health)",
                "Collaborative: voluntary cooperation via standards (The Internet)",
                "Virtual: no central authority, emergent behaviors (World Wide Web)",
                "Mermaid diagram of National Emergency Healthcare SoS"
              ]
            }
          ]
        },
        {
          id: "q9",
          number: "Q9",
          // TODO: confirm with lecturer
          topic: "Topic 9 — Real-Time & Embedded Systems",
          title: "Real-Time and Embedded Software Engineering",
          marks: 20,
          questions: [
            {
              id: "q9-a",
              subNumber: "9(a)",
              label: "9(a)",
              marks: 6,
              text: "Differentiate hard, soft, and firm real-time systems, and explain the key technical characteristics of embedded software systems. [6 marks]",
              question: "Differentiate hard, soft, and firm real-time systems, and explain the key technical characteristics of embedded software systems. [6 marks]",
              modelAnswer: `### Real-Time Systems & Embedded Software Engineering
*(Reference: Lethbridge & Laganière, 2005, Ch. 1, 10, pp. 4–5, 391; Sommerville, 2016, Ch. 21)*

#### 1. Real-Time Systems Classification
A **real-time software system** is one where system correctness depends not only on the logical correctness of the computational outputs, but also on the **time at which results are produced** (p. 5).
- **Hard Real-Time Systems (p. 5):**
  - Missing a timing deadline leads to total system failure, physical damage, or catastrophic loss of life.
  - *Examples:* Anti-lock braking systems (ABS), nuclear reactor shutdown systems, cardiac pacemakers, fly-by-wire flight control.
- **Soft Real-Time Systems (p. 5):**
  - Deadlines are important, but missing a deadline merely degrades quality of service without system destruction. Late results retain partial value.
  - *Examples:* Video streaming players (minor frame drop), online gaming networks, automatic teller machines.
- **Firm Real-Time Systems:**
  - A missed deadline does not result in catastrophic physical destruction, but the late computational result has zero utility (e.g. financial algorithmic high-frequency trading where an outdated quote is useless).

#### 2. Technical Characteristics of Embedded Software (pp. 4–5)
Lethbridge & Laganière emphasize several distinguishing features of embedded systems:
1. **Dedicated Hardware Deployment:** Software is embedded directly into specialized physical devices (microwave ovens, washing machines, automobiles, avionics) rather than general-purpose PCs (p. 4).
2. **Permanent Storage (ROM/Flash):** Users cannot easily upgrade or swap the software without replacing the physical device (p. 4).
3. **Severe Resource Bounds:** Operates under constrained memory, low CPU clock speeds, and strict battery/power budgets.
4. **Reactive & Continuous Operation:** Continuously monitors external sensors (temperature, pressure, speed) and controls physical actuators in response to environment stimuli (p. 5).
5. **Direct Hardware Interfacing:** Interacts directly with memory-mapped registers, device drivers, and hardware interrupts rather than rich operating system abstractions.`,
              answer: `### Real-Time Systems & Embedded Software Engineering
*(Reference: Lethbridge & Laganière, 2005, Ch. 1, 10, pp. 4–5, 391; Sommerville, 2016, Ch. 21)*

#### 1. Real-Time Systems Classification
A **real-time software system** is one where system correctness depends not only on the logical correctness of the computational outputs, but also on the **time at which results are produced** (p. 5).
- **Hard Real-Time Systems (p. 5):**
  - Missing a timing deadline leads to total system failure, physical damage, or catastrophic loss of life.
  - *Examples:* Anti-lock braking systems (ABS), nuclear reactor shutdown systems, cardiac pacemakers, fly-by-wire flight control.
- **Soft Real-Time Systems (p. 5):**
  - Deadlines are important, but missing a deadline merely degrades quality of service without system destruction. Late results retain partial value.
  - *Examples:* Video streaming players (minor frame drop), online gaming networks, automatic teller machines.
- **Firm Real-Time Systems:**
  - A missed deadline does not result in catastrophic physical destruction, but the late computational result has zero utility (e.g. financial algorithmic high-frequency trading where an outdated quote is useless).

#### 2. Technical Characteristics of Embedded Software (pp. 4–5)
Lethbridge & Laganière emphasize several distinguishing features of embedded systems:
1. **Dedicated Hardware Deployment:** Software is embedded directly into specialized physical devices (microwave ovens, washing machines, automobiles, avionics) rather than general-purpose PCs (p. 4).
2. **Permanent Storage (ROM/Flash):** Users cannot easily upgrade or swap the software without replacing the physical device (p. 4).
3. **Severe Resource Bounds:** Operates under constrained memory, low CPU clock speeds, and strict battery/power budgets.
4. **Reactive & Continuous Operation:** Continuously monitors external sensors (temperature, pressure, speed) and controls physical actuators in response to environment stimuli (p. 5).
5. **Direct Hardware Interfacing:** Interacts directly with memory-mapped registers, device drivers, and hardware interrupts rather than rich operating system abstractions.`,
              keyPoints: [
                "Real-time: correctness depends on both logic and time of delivery (p. 5)",
                "Hard real-time: deadline miss causes catastrophe (ABS, pacemakers)",
                "Soft real-time: deadline miss degrades QoS (video streaming)",
                "Firm real-time: late result has zero utility but causes no crash",
                "Embedded software: dedicated hardware, ROM deployment, reactive continuous operation (pp. 4-5)"
              ]
            },
            {
              id: "q9-b",
              subNumber: "9(b)",
              label: "9(b)",
              marks: 8,
              text: "Explain concurrency and timing defects in real-time systems: deadlock (Coffman conditions), livelock, and critical races, and describe prevention and synchronization techniques. [8 marks]",
              question: "Explain concurrency and timing defects in real-time systems: deadlock (Coffman conditions), livelock, and critical races, and describe prevention and synchronization techniques. [8 marks]",
              modelAnswer: `### Concurrency & Timing Defects in Real-Time Systems
*(Reference: Lethbridge & Laganière, 2005, Ch. 10, pp. 391–394)*

Concurrent execution involves multiple threads of control interacting over shared resources. Defects in coordination produce severe failures:

#### 1. Deadlock (pp. 391–393)
- **Defect:** A situation where two or more threads are permanently stopped, waiting for each other to release resources before either can proceed (p. 391).
- **The Four Coffman Conditions for Deadlock:**
  1. *Mutual Exclusion:* Resources cannot be shared simultaneously.
  2. *Hold and Wait:* Threads hold allocated resources while requesting new ones.
  3. *No Preemption:* Resources cannot be forcibly seized from holding threads.
  4. *Circular Wait:* A closed chain of threads exists where Thread A waits for resource held by Thread B, which waits for resource held by Thread A (Figure 10.4, p. 392).
- **Prevention Techniques:**
  - *Strict Global Resource Ordering:* Impose a strict linear numbering on all resources; threads must acquire resources in strictly increasing order, making circular wait mathematically impossible.
  - *Lock Timeouts:* Acquire locks using timed attempts (\`tryLock()\`); if lock acquisition fails within threshold, release all held locks and retry.

#### 2. Livelock (p. 392)
- **Defect:** A failure where two or more processes actively change state and consume CPU cycles in reaction to each other, but the system never escapes a closed loop of states to make forward progress (Figure 10.5, p. 392).
- **Prevention Techniques:**
  - *Randomized Exponential Backoff:* When collision occurs, processes delay retrying by randomized wait intervals (used in Ethernet CSMA/CD).

#### 3. Critical Races / Race Conditions (pp. 393–394)
- **Defect:** A flaw where two concurrent threads access shared data without synchronization, and the correctness of the final state depends arbitrarily on non-deterministic thread scheduling timing (Figures 10.6, 10.7, pp. 393–394).
- **Prevention Techniques:**
  - *Mutual Exclusion:* Guard critical sections using semaphores, mutex locks, or Java's \`synchronized\` keyword.
  - *Atomic Primitives:* Use atomic CPU instructions (\`compareAndSet\`, \`AtomicInteger\`) to perform thread-safe state transitions without lock overhead.

#### Mermaid Diagram: Concurrency Defects & Deadlock

\`\`\`mermaid
sequenceDiagram
  autonumber
  participant ThreadA as 🧵 Thread A
  participant Lock1 as 🔒 Resource 1
  participant Lock2 as 🔒 Resource 2
  participant ThreadB as 🧵 Thread B

  ThreadA->>Lock1: lock(Resource 1) [Acquired]
  ThreadB->>Lock2: lock(Resource 2) [Acquired]
  
  Note over ThreadA,ThreadB: Circular Wait Deadlock
  ThreadA-->>Lock2: requestLock(Resource 2) [Blocks!]
  ThreadB-->>Lock1: requestLock(Resource 1) [Blocks!]
  
  Note over ThreadA,ThreadB: Both threads permanently frozen (Deadlock, p. 392)
\`\`\``,
              answer: `### Concurrency & Timing Defects in Real-Time Systems
*(Reference: Lethbridge & Laganière, 2005, Ch. 10, pp. 391–394)*

Concurrent execution involves multiple threads of control interacting over shared resources. Defects in coordination produce severe failures:

#### 1. Deadlock (pp. 391–393)
- **Defect:** A situation where two or more threads are permanently stopped, waiting for each other to release resources before either can proceed (p. 391).
- **The Four Coffman Conditions for Deadlock:**
  1. *Mutual Exclusion:* Resources cannot be shared simultaneously.
  2. *Hold and Wait:* Threads hold allocated resources while requesting new ones.
  3. *No Preemption:* Resources cannot be forcibly seized from holding threads.
  4. *Circular Wait:* A closed chain of threads exists where Thread A waits for resource held by Thread B, which waits for resource held by Thread A (Figure 10.4, p. 392).
- **Prevention Techniques:**
  - *Strict Global Resource Ordering:* Impose a strict linear numbering on all resources; threads must acquire resources in strictly increasing order, making circular wait mathematically impossible.
  - *Lock Timeouts:* Acquire locks using timed attempts (\`tryLock()\`); if lock acquisition fails within threshold, release all held locks and retry.

#### 2. Livelock (p. 392)
- **Defect:** A failure where two or more processes actively change state and consume CPU cycles in reaction to each other, but the system never escapes a closed loop of states to make forward progress (Figure 10.5, p. 392).
- **Prevention Techniques:**
  - *Randomized Exponential Backoff:* When collision occurs, processes delay retrying by randomized wait intervals (used in Ethernet CSMA/CD).

#### 3. Critical Races / Race Conditions (pp. 393–394)
- **Defect:** A flaw where two concurrent threads access shared data without synchronization, and the correctness of the final state depends arbitrarily on non-deterministic thread scheduling timing (Figures 10.6, 10.7, pp. 393–394).
- **Prevention Techniques:**
  - *Mutual Exclusion:* Guard critical sections using semaphores, mutex locks, or Java's \`synchronized\` keyword.
  - *Atomic Primitives:* Use atomic CPU instructions (\`compareAndSet\`, \`AtomicInteger\`) to perform thread-safe state transitions without lock overhead.

#### Mermaid Diagram: Concurrency Defects & Deadlock

\`\`\`mermaid
sequenceDiagram
  autonumber
  participant ThreadA as 🧵 Thread A
  participant Lock1 as 🔒 Resource 1
  participant Lock2 as 🔒 Resource 2
  participant ThreadB as 🧵 Thread B

  ThreadA->>Lock1: lock(Resource 1) [Acquired]
  ThreadB->>Lock2: lock(Resource 2) [Acquired]
  
  Note over ThreadA,ThreadB: Circular Wait Deadlock
  ThreadA-->>Lock2: requestLock(Resource 2) [Blocks!]
  ThreadB-->>Lock1: requestLock(Resource 1) [Blocks!]
  
  Note over ThreadA,ThreadB: Both threads permanently frozen (Deadlock, p. 392)
\`\`\``,
              keyPoints: [
                "Deadlock: threads permanently frozen waiting for each other (p. 391)",
                "4 Coffman conditions: Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait",
                "Deadlock prevention: global resource ordering and lock timeouts",
                "Livelock: active state changes consuming CPU without forward progress (p. 392)",
                "Critical race: unsynchronized access depending on thread timing (pp. 393-394)",
                "Prevention via mutex locks, semaphores, and synchronized critical sections"
              ]
            },
            {
              id: "q9-c",
              subNumber: "9(c)",
              label: "9(c)",
              marks: 6,
              text: "Explain Rate Monotonic Scheduling (RMS) and Earliest Deadline First (EDF) scheduling algorithms, the Liu & Layland utilization bound, and the Priority Inversion problem with its remedies. [6 marks]",
              question: "Explain Rate Monotonic Scheduling (RMS) and Earliest Deadline First (EDF) scheduling algorithms, the Liu & Layland utilization bound, and the Priority Inversion problem with its remedies. [6 marks]",
              modelAnswer: `### Real-Time Task Scheduling & Priority Inversion
*(Reference: Sommerville, 2016, Ch. 21; Liu & Layland, 1973; Buttazzo, Hard Real-Time Computing)*

In real-time embedded systems, a real-time scheduler assigns CPU time to periodic and aperiodic tasks to ensure all deadlines are met.

#### 1. Rate Monotonic Scheduling (RMS)
- **Classification:** Static-priority, preemptive scheduling for periodic tasks.
- **Rule:** Task priority is inversely proportional to its period:
  Shorter Period Ti ⇒ Higher Priority Pi
- **Liu & Layland Schedulability Bound (1973):**
  A set of n periodic tasks with computation times Ci and periods Ti is guaranteed schedulable if total CPU utilization U satisfies:
  U = ∑(Ci / Ti) ≤ n(2^(1/n) − 1)
  - For n = 1: U ≤ 1.0 (100%)
  - For n = 2: U ≤ 2(2^(0.5) − 1) ≈ 0.828 (82.8%)
  - For n = 3: U ≤ 3(2^(1/3) − 1) ≈ 0.780 (78.0%)
  - As n → ∞: U ≤ ln(2) ≈ 0.693 (69.3% utilization bound)

#### 2. Earliest Deadline First (EDF) Scheduling
- **Classification:** Dynamic-priority preemptive scheduling.
- **Rule:** The task with the nearest absolute deadline is assigned highest priority dynamically at runtime.
- **Schedulability Bound:**
  U = ∑(Ci / Ti) ≤ 1.0 (100%)
  - EDF is **theoretically optimal**: it can achieve up to 100% CPU utilization without missing a single deadline.
  - *Limitation:* Under transient overload (U > 1.0), EDF suffers from the "domino effect", where many tasks miss deadlines unpredictably.

#### 3. The Priority Inversion Problem
- **Definition:** Occurs when a high-priority task is blocked waiting for a shared resource held by a low-priority task, and an intermediate-priority task preempts the low-priority task, indirectly delaying the high-priority task indefinitely.
- **Historic Disaster:** The 1997 Mars Pathfinder spacecraft reset repeatedly on Mars due to priority inversion between the high-priority attitude control thread, a low-priority meteorological task holding an information bus mutex, and medium-priority communications tasks.
- **Remedies:**
  1. **Priority Inheritance Protocol (PIP):** When a high-priority task blocks on a resource held by a low-priority task, the low-priority task temporarily inherits the high priority until it releases the resource.
  2. **Priority Ceiling Protocol (PCP):** Each shared resource is assigned a priority ceiling equal to the highest priority of any task that may access it. A task can only acquire the resource if its priority exceeds all active ceilings, preventing deadlocks and bounding blocking time.`,
              answer: `### Real-Time Task Scheduling & Priority Inversion
*(Reference: Sommerville, 2016, Ch. 21; Liu & Layland, 1973; Buttazzo, Hard Real-Time Computing)*

In real-time embedded systems, a real-time scheduler assigns CPU time to periodic and aperiodic tasks to ensure all deadlines are met.

#### 1. Rate Monotonic Scheduling (RMS)
- **Classification:** Static-priority, preemptive scheduling for periodic tasks.
- **Rule:** Task priority is inversely proportional to its period:
  Shorter Period Ti ⇒ Higher Priority Pi
- **Liu & Layland Schedulability Bound (1973):**
  A set of n periodic tasks with computation times Ci and periods Ti is guaranteed schedulable if total CPU utilization U satisfies:
  U = ∑(Ci / Ti) ≤ n(2^(1/n) − 1)
  - For n = 1: U ≤ 1.0 (100%)
  - For n = 2: U ≤ 2(2^(0.5) − 1) ≈ 0.828 (82.8%)
  - For n = 3: U ≤ 3(2^(1/3) − 1) ≈ 0.780 (78.0%)
  - As n → ∞: U ≤ ln(2) ≈ 0.693 (69.3% utilization bound)

#### 2. Earliest Deadline First (EDF) Scheduling
- **Classification:** Dynamic-priority preemptive scheduling.
- **Rule:** The task with the nearest absolute deadline is assigned highest priority dynamically at runtime.
- **Schedulability Bound:**
  U = ∑(Ci / Ti) ≤ 1.0 (100%)
  - EDF is **theoretically optimal**: it can achieve up to 100% CPU utilization without missing a single deadline.
  - *Limitation:* Under transient overload (U > 1.0), EDF suffers from the "domino effect", where many tasks miss deadlines unpredictably.

#### 3. The Priority Inversion Problem
- **Definition:** Occurs when a high-priority task is blocked waiting for a shared resource held by a low-priority task, and an intermediate-priority task preempts the low-priority task, indirectly delaying the high-priority task indefinitely.
- **Historic Disaster:** The 1997 Mars Pathfinder spacecraft reset repeatedly on Mars due to priority inversion between the high-priority attitude control thread, a low-priority meteorological task holding an information bus mutex, and medium-priority communications tasks.
- **Remedies:**
  1. **Priority Inheritance Protocol (PIP):** When a high-priority task blocks on a resource held by a low-priority task, the low-priority task temporarily inherits the high priority until it releases the resource.
  2. **Priority Ceiling Protocol (PCP):** Each shared resource is assigned a priority ceiling equal to the highest priority of any task that may access it. A task can only acquire the resource if its priority exceeds all active ceilings, preventing deadlocks and bounding blocking time.`,
              keyPoints: [
                "RMS: static priority based on rate (shorter period = higher priority)",
                "Liu & Layland bound: U <= n(2^(1/n) - 1), approaches ~69.3% for large n",
                "EDF: dynamic priority based on nearest deadline, optimal up to 100% utilization",
                "Priority inversion (Mars Pathfinder incident) and resolution via Priority Inheritance / Ceiling Protocols"
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Backwards compatibility alias
export const csc4630_LethbridgeStudyGuide = csc4630LethbridgeStudyGuide;
