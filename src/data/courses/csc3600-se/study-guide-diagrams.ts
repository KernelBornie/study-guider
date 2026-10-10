import { Paper } from "@/types";

export const csc3600_StudyGuideDiagrams: Paper = {
  id: "csc3600-diagrams-guide",
  slug: "diagram-study-guide",
  title: "UML & Architectural Diagrams Study Guide (Topics 1–10 & Exam Questions)",
  year: 2026,
  duration: "Self-Paced / Comprehensive",
  totalMarks: 260,
  paperType: "Study Paper",
  venue: "UNZA Department of Computer Science",
  sections: [
    {
      id: "section-a-diagrams",
      name: "Section A: Diagram-Based Questions & UML Models (Topics 1–10)",
      instructions: "Master all 10 UML and architectural modeling diagrams with exact notation, case studies, and model solutions.",
      compulsory: true,
      questions: [
        {
          id: "diag-t1",
          number: "Topic 1",
          title: "Context Models (SCHS, Mentcare, Weather Station & FoodCo)",
          marks: 20,
          subQuestions: [
            {
              id: "diag-t1-1",
              label: "1",
              marks: 10,
              question: "Draw and explain a context model for the FoodCo product costing system.",
              answer: `### Context Model — FoodCo Product Costing System

A context model illustrates the operational context of a system — it defines the **system boundary** and identifies what lies **outside** the boundary (external systems, actors, and data flows).

\`\`\`mermaid
flowchart TD
  subgraph EXTERNAL_ENTITIES ["External Stakeholders & Data Providers"]
    PP["Production Planning<br/>(Allocation Lists & Schedules)"]
    FD["Finance Director<br/>(Cost Reports & Budgets)"]
    FM["Factory Manager<br/>(Production Data & Staff Records)"]
  end

  subgraph BOUNDARY ["SYSTEM BOUNDARY"]
    FOODCO["FoodCo Product Costing System"]
  end

  subgraph EXTERNAL_SYSTEMS ["External Connected Systems"]
    PB["Payroll Bureau"]
    MCA["Mini-computer Accounting"]
    CB["Computer Bureau"]
  end

  PP -->|"Allocation lists & schedules"| FOODCO
  FOODCO -->|"Cost reports & budgets"| FD
  FM -->|"Production data"| FOODCO
  FOODCO <--> PB
  FOODCO <--> MCA
  FOODCO <--> CB
\`\`\`

**Key Data & Interaction Flows:**
1. **Production Planning:** Supplies allocation lists and shift schedules to determine labour requirements.
2. **Finance Director:** Receives consolidated cost reports, variance analyses, and budgetary statements.
3. **Factory Manager:** Provides direct plant production data, throughput logs, and staff timesheets.
4. **Payroll Bureau:** Interchanges wage rates, hours worked, and employee classifications.
5. **Mini-computer Accounting & Computer Bureau:** Provides ledger postings and external audit computing services.`,
              keyPoints: [
                "Defines system boundary (inside vs outside)",
                "Identifies connected systems: Payroll Bureau, Accounting, Computer Bureau",
                "Identifies stakeholders: Production Planning, Finance Director, Factory Manager",
                "Arrows represent directional information/data flows"
              ]
            },
            {
              id: "diag-t1-2",
              label: "2",
              marks: 10,
              question: "What is the purpose of a context model? State five key objectives. [4 marks]",
              answer: `### Purpose of a Context Model

A context model serves to:
1. **Define the system boundary:** Explicitly demarcate what functionality is inside the system versus what belongs to external environments.
2. **Identify external systems and actors:** Reveal all interacting human roles, peripheral hardware, and external software suites.
3. **Map information flows:** Document data inputs and outputs passing across system boundaries.
4. **Foster stakeholder alignment:** Provide a clear, high-level structural overview accessible to non-technical clients and executive sponsors.
5. **Assist in scope definition and project planning:** Ensure contractual boundaries are unambiguous, preventing scope creep and uncosted integration obligations.`,
              keyPoints: [
                "Define system boundary",
                "Identify external systems and actors",
                "Map information flows",
                "Facilitate stakeholder communication",
                "Prevent scope creep during project planning"
              ]
            }
          ]
        },
        {
          id: "diag-t1-schs-mentcare",
          number: "Topic 1 (Supp)",
          title: "Context Models for SCHS, Mentcare & Weather Station",
          marks: 20,
          subQuestions: [
            {
              id: "diag-t1-schs",
              label: "SCHS",
              marks: 10,
              question: "Present the Context Model for the Smart Campus Healthcare System (SCHS) showing external actors and integrated university/national systems.",
              answer: `### Context Model — Smart Campus Healthcare System (SCHS)

\`\`\`mermaid
flowchart TD
  STUDENT["🎓 Student<br/>(Register, Book, View Rx)"] --> SCHS
  RECEPT["📋 Receptionist<br/>(Walk-ins, Queue Token)"] --> SCHS
  DOCTOR["🩺 Doctor<br/>(Diagnosis, Prescription)"] --> SCHS
  PHARM["💊 Pharmacist<br/>(Dispense, Stock Update)"] --> SCHS

  subgraph BOUNDARY ["SYSTEM BOUNDARY"]
    SCHS["Smart Campus Healthcare System<br/>(SCHS Core Engine)"]
  end

  SCHS <--> SIS["🏛️ University Student Database<br/>(Verify registration & status)"]
  SCHS <--> NHIMA["🏥 NHIMA National Insurance<br/>(Verify insurance coverage)"]
  SCHS <--> SMS["📲 SMS / Email Gateway<br/>(Appointment & drug alerts)"]
  SCHS <--> PAY["💳 Mobile Money / Payment Gateway<br/>(Consultation & co-payments)"]
\`\`\`

**Core Architectural Interfaces:**
- **Student Information System (SIS):** Authenticates active student enrolment, academic year, and faculty status.
- **NHIMA Insurance API:** Real-time lookup of policy status, principal contributor ID, and benefit eligibility.
- **Payment Gateway:** Integrates Airtel Money, MTN Mobile Money, and card rails for out-of-pocket fees.
- **SMS/Email Gateway:** Automated dispatch of booking tokens, schedule reminders, and prescription ready notifications.`,
              keyPoints: [
                "Actors: Student, Receptionist, Doctor, Pharmacist",
                "External Systems: SIS Database, NHIMA Insurance, SMS Gateway, Payment Gateway"
              ]
            },
            {
              id: "diag-t1-mentcare-weather",
              label: "Mentcare & Weather",
              marks: 10,
              question: "Illustrate the Context Models for the Mentcare Mental Health System and the Remote Weather Station.",
              answer: `### Mentcare Mental Health System Context Model

\`\`\`mermaid
flowchart TD
  PRS["Patient Record System «system»"] --> MENTCARE
  MRS["Management Reporting System «system»"] --> MENTCARE
  AS["Admissions System «system»"] --> MENTCARE

  subgraph BOUNDARY ["Mentcare Boundary"]
    MENTCARE["Mentcare Psychiatric System «system»"]
  end

  MENTCARE --> HCS["Health Statistics System"]
  MENTCARE --> APPT["Appointments System"]
  MENTCARE --> RX["Prescription System"]
\`\`\`

---

### Remote Weather Station Context Model

\`\`\`mermaid
flowchart TD
  WIS["Weather Information System «system»"] <-->|1..n| WS["Weather Station «system»"]
  WS <--> SAT["Satellite Communications «system»"]
  WS <-->|1..n| CS["Control System «system»"]
\`\`\`

The weather station gathers atmospheric observations autonomously and communicates periodic summary reports to the central Weather Information System via satellite communications links, while maintaining control loop coordination with remote instruments.`,
              keyPoints: [
                "Mentcare: Patient Record System, Admissions, Reporting, Rx, Statistics",
                "Weather Station: Weather Info System, Satellite Comms, Control Systems"
              ]
            }
          ]
        },
        {
          id: "diag-t2",
          number: "Topic 2",
          title: "Use Case Diagrams (SCHS, Agate, Include/Extend & Mentcare)",
          marks: 20,
          subQuestions: [
            {
              id: "diag-t2-1",
              label: "1",
              marks: 10,
              question: "Draw a use case diagram for the Mentcare system showing interactions for a Doctor and a Medical Receptionist.",
              answer: `### Use Case Diagram — Mentcare Psychiatric Patient Management System

\`\`\`mermaid
flowchart LR
  subgraph MENTCARE ["Mentcare Patient Management System"]
    UC1(["View Patient Information"])
    UC2(["Edit Patient Record"])
    UC3(["Setup Consultation"])
    UC4(["Prescribe Medication"])
    UC5(["Register Patient"])
    UC6(["Transfer Patient Data"])
    UC7(["Contact Patient / Emergency Kin"])
  end

  DOCTOR["🩺 Doctor"] --> UC1
  DOCTOR --> UC2
  DOCTOR --> UC3
  DOCTOR --> UC4

  RECEPT["📋 Medical Receptionist"] --> UC1
  RECEPT --> UC5
  RECEPT --> UC6
  RECEPT --> UC7
\`\`\`

**Roles & Interactions:**
- **Doctor:** Accesses longitudinal psychiatric clinical history, edits clinical progress notes, organizes scheduled consultations, and issues psychotropic prescriptions.
- **Medical Receptionist:** Registers new patient entries, transfers records between clinics, verifies demographic details, and contacts patients/caregivers for follow-up appointments.`,
              keyPoints: [
                "Actors: Doctor and Medical Receptionist",
                "Doctor use cases: View, Edit, Setup consultation, Prescribe",
                "Receptionist use cases: Register, Transfer data, Contact patient",
                "Both actors share read access to patient info"
              ]
            },
            {
              id: "diag-t2-2",
              label: "2",
              marks: 10,
              question: "Write a fully dressed use case description for 'Assign staff to work on a campaign' (Agate Ltd case study). Explain include vs extend relationships with diagrams.",
              answer: `### Use Case Description: Assign Staff to Work on a Campaign

| Specification Field | Description |
| :--- | :--- |
| **Use Case Name** | Assign Staff to Work on a Campaign |
| **Primary Actor** | Campaign Manager |
| **Preconditions** | 1. Campaign record exists in the system.<br/>2. Staff members exist in the active personnel registry. |
| **Postconditions** | Selected staff member is allocated to the campaign with start date and role logged. |
| **Purpose** | To record and govern which creative/administrative personnel are deployed to an advertising campaign. |

**Main Success Scenario (Normal Flow):**
1. Campaign Manager searches for and selects an active campaign.
2. System displays current campaign staffing roster and retrieves available staff members not currently allocated.
3. Campaign Manager selects one or more staff members and designates role/grade.
4. System validates budget allocation limits against staff hourly charge rates.
5. System logs the assignment and displays confirmation notice.

**Alternative & Exception Flows:**
- *1a. Campaign not found:* System alerts manager; option to create new campaign or re-enter search.
- *3a. Staff member overallocated:* System displays workload warning; manager must override or pick alternative.

---

### Include («include») vs Extend («extend») Relationships

\`\`\`mermaid
flowchart LR
  ASSIGN["Assign Staff to Campaign"] -->|«include»| FIND["Find Campaign Record"]
  PRINT["Print Campaign Summary"] -.->|«extend»| BUDGET["Check Campaign Budget"]
\`\`\`

- **«include» (Mandatory):** The base use case *always* invokes the included behavior as an essential step. Example: You cannot assign staff without finding the campaign record first.
- **«extend» (Optional):** The extending use case adds optional behavior to the base use case only under specific conditions (extension points). Example: Printing a campaign summary is an optional action when checking campaign budget.`,
              keyPoints: [
                "Use Case template: Actor, Pre/Postconditions, Purpose, Normal flow, Alternative flows",
                "«include»: Unconditional, mandatory sub-routine (arrow points to included case)",
                "«extend»: Conditional, optional extension (arrow points to extended base case)"
              ]
            }
          ]
        },
        {
          id: "diag-t3",
          number: "Topic 3",
          title: "Class Diagrams, Associations, Multiplicities & Inheritance",
          marks: 20,
          subQuestions: [
            {
              id: "diag-t3-1",
              label: "1",
              marks: 10,
              question: "Draw a class diagram for a Library Management System showing Book, Member, Loan, and Librarian classes with attributes, operations, and multiplicity.",
              answer: `### Class Diagram — Library Management System

\`\`\`mermaid
classDiagram
  class Book {
    -String isbn
    -String title
    -String author
    -String publisher
    -int year
    -int copies
    +addBook() bool
    +removeBook() bool
    +updateCopies(int delta) void
    +isAvailable() bool
  }

  class Member {
    -String memberId
    -String name
    -String address
    -String phone
    -String email
    +borrowBook(String isbn) Loan
    +returnBook(String loanId) bool
    +renewLoan(String loanId) bool
    +searchBook(String query) List~Book~
  }

  class Loan {
    -String loanId
    -Date loanDate
    -Date dueDate
    -Date returnDate
    -double fine
    +calculateFine() double
    +renewLoan() bool
    +isOverdue() bool
  }

  class Librarian {
    -String librarianId
    -String name
    -String employeeNo
    +issueBook(Member m, Book b) Loan
    +returnBook(Loan l) bool
    +addMember(Member m) void
    +removeMember(String id) void
    +generateReport() Report
  }

  Book "1" -- "*" Loan : borrowed through
  Member "1" -- "*" Loan : borrows
  Librarian "1" -- "*" Loan : oversees
\`\`\`

**Multiplicity Notation Guide:**
- \`1\`: Exactly one instance.
- \`0..1\`: Zero or one (optional).
- \`*\` or \`0..*\`: Zero or more.
- \`1..*\`: One or more (mandatory relationship).`,
              keyPoints: [
                "Three compartments: Class Name, Attributes, Operations",
                "Book (1) to Loan (*) relationship",
                "Member (1) to Loan (*) relationship",
                "Visibility: '-' private, '+' public, '#' protected"
              ]
            },
            {
              id: "diag-t3-2",
              label: "2",
              marks: 10,
              question: "Explain the difference between Aggregation and Composition with clear diagrams and software engineering examples. [6 marks]",
              answer: `### Aggregation vs Composition

| Dimension | Aggregation (Weak 'has-a') | Composition (Strong 'has-a') |
| :--- | :--- | :--- |
| **Notation** | Open / hollow diamond (\`◇\`) | Filled diamond (\`◆\`) |
| **Lifecycle Dependency** | Independent. Child can survive destruction of parent. | Dependent. Child dies when parent is destroyed. |
| **Multiplicity on Whole** | Can be shared across multiple wholes. | Strict ownership (at most 1 parent whole). |
| **Example** | \`Department ◇─── Professor\` | \`House ◆─── Room\` / \`Order ◆─── OrderItem\` |

\`\`\`mermaid
classDiagram
  class Department {
    +String deptName
  }
  class Professor {
    +String name
    +String researchArea
  }
  class House {
    +String address
  }
  class Room {
    +String roomType
    +double squareMeters
  }

  Department "1" o-- "*" Professor : Aggregation (independent life)
  House "1" *-- "*" Room : Composition (lifetime bound)
\`\`\`

- **Aggregation:** A Professor belongs to a Department, but if the Department is dissolved, the Professor remains employed and exists independently.
- **Composition:** A Room is a physical part of a House. If the House is demolished, its Rooms cease to exist.`,
              keyPoints: [
                "Aggregation: Hollow diamond, weak relationship, independent lifecycles",
                "Composition: Filled diamond, strong relationship, coincident lifecycles"
              ]
            }
          ]
        },
        {
          id: "diag-t4",
          number: "Topic 4",
          title: "Sequence Diagrams (SCHS, Agate & ATM Cash Withdrawal)",
          marks: 20,
          subQuestions: [
            {
              id: "diag-t4-1",
              label: "1",
              marks: 10,
              question: "Draw a sequence diagram for an ATM Cash Withdrawal demonstrating user, UI, controller, account database, and cash dispenser interactions.",
              answer: `### Sequence Diagram — ATM Cash Withdrawal

\`\`\`mermaid
sequenceDiagram
  autonumber
  actor Customer
  participant ATM as :ATM UI
  participant CR as :CardReader
  participant BankDB as :AccountDB
  participant Dispenser as :CashDispenser

  Customer->>ATM: Insert ATM Card
  ATM->>CR: readCard()
  CR-->>ATM: cardData (AccountNo, Expiry)

  Customer->>ATM: Enter PIN (****)
  ATM->>BankDB: validatePIN(AccountNo, PIN)
  BankDB-->>ATM: PIN Authorized (OK)

  Customer->>ATM: Select Withdrawal ($100)
  ATM->>BankDB: checkBalance(AccountNo, $100)
  BankDB-->>ATM: Balance Sufficient

  ATM->>BankDB: debitAccount(AccountNo, $100)
  BankDB-->>ATM: Debit Confirmed

  ATM->>Dispenser: dispenseCash($100)
  Dispenser-->>Customer: Deliver Cash Notes
  ATM-->>Customer: Print Transaction Receipt
  ATM-->>Customer: Eject ATM Card
\`\`\`

**Key Sequence Diagram Conventions:**
- **Lifelines:** Dashed vertical lines showing object presence over time.
- **Activation boxes:** Rectangular bars indicating active control or method execution.
- **Solid arrows with solid heads:** Synchronous procedure calls.
- **Dashed arrows:** Asynchronous or return messages.`,
              keyPoints: [
                "Objects: Customer, ATM UI, CardReader, AccountDB, CashDispenser",
                "Chronological message sequence with step-by-step numbering",
                "Card validation -> PIN check -> balance verification -> debit -> dispense -> receipt"
              ]
            },
            {
              id: "diag-t4-2",
              label: "2",
              marks: 10,
              question: "Draw a sequence diagram for the SCHS Book Appointment workflow.",
              answer: `### Sequence Diagram — SCHS Appointment Booking

\`\`\`mermaid
sequenceDiagram
  autonumber
  actor Student as :Student
  participant UI as :AppointmentUI
  participant Ctrl as :AppointmentController
  participant DB as :Database
  participant SMS as :NotificationService

  Student->>UI: login(studentId, password)
  UI->>Ctrl: authenticateUser(studentId, hash)
  Ctrl->>DB: queryUser(studentId)
  DB-->>Ctrl: userRecord
  Ctrl-->>UI: Auth Success

  Student->>UI: bookAppointment(deptId, date, slot)
  UI->>Ctrl: createAppointment(studentId, deptId, date, slot)
  Ctrl->>DB: checkDoctorAvailability(deptId, date, slot)
  DB-->>Ctrl: slotAvailable = true

  Ctrl->>DB: saveAppointment(appointmentData)
  DB-->>Ctrl: appointmentId created
  Ctrl->>SMS: sendBookingConfirmation(phone, details)
  SMS-->>Student: SMS: "Appointment Confirmed for 10:30 AM"
  Ctrl-->>UI: return confirmationPayload
  UI-->>Student: Display Booking Confirmed Screen
\`\`\``,
              keyPoints: [
                "Lifelines for Student, UI, Controller, DB, and SMS Gateway",
                "Availability check before state persistence"
              ]
            }
          ]
        },
        {
          id: "diag-t5-t6",
          number: "Topics 5 & 6",
          title: "Communication & Activity Diagrams (Swimlanes & Workflows)",
          marks: 20,
          subQuestions: [
            {
              id: "diag-t5-1",
              label: "Topic 5",
              marks: 10,
              question: "Explain Communication Diagrams and convert the sequence of booking an appointment into a communication diagram.",
              answer: `### Communication Diagram — SCHS Book Appointment

Unlike sequence diagrams which emphasize **time ordering**, a communication diagram emphasizes the **structural layout and links** between collaborating objects. Messages are labeled with sequence numbers (e.g. \`1:\`, \`1.1:\`, \`2:\`).

\`\`\`mermaid
flowchart TD
  STU[":Student"]
  UI[":AppointmentUI"]
  CTRL[":AppointmentController"]
  DB[(":Database")]
  NOTIF["NotificationService"]

  STU -->|"1: login()<br/>4: bookAppointment()"| UI
  UI -->|"2: authenticate()<br/>5: createAppointment()"| CTRL
  CTRL -->|"3: verify()<br/>6: save()"| DB
  CTRL -->|"7: sendAlert()"| NOTIF
\`\`\`

**Sequence numbering scheme:**
- Top-level operations use simple integers (\`1:\`, \`2:\`).
- Nested procedural calls use dot-notation (\`2.1:\`, \`2.2:\`).`,
              keyPoints: [
                "Emphasizes object links rather than time axis",
                "Numbered message labels indicate invocation sequence"
              ]
            },
            {
              id: "diag-t6-1",
              label: "Topic 6",
              marks: 10,
              question: "Draw an Activity Diagram with Swimlanes (Partitions) for a Clinic Patient Visit showing Customer, Receptionist, Doctor, and Pharmacist.",
              answer: `### Activity Diagram with Swimlanes — Clinic Patient Visit

\`\`\`mermaid
flowchart TD
  subgraph Customer ["👤 Student / Patient"]
    A([● Start]) --> ARRIVE["Arrive at Clinic"]
    WAIT_DOC["Wait in Waiting Area"]
    WAIT_PHARM["Wait at Pharmacy"]
    FINISH([● End])
  end

  subgraph Receptionist ["📋 Receptionist"]
    ARRIVE --> REG["Register Patient & Check Eligibility"]
    REG --> QUEUE["Assign Queue Token"]
  end

  QUEUE --> WAIT_DOC

  subgraph Doctor ["🩺 Doctor"]
    WAIT_DOC --> CONSULT["Conduct Consultation & Examination"]
    CONSULT --> DIAG["Record Diagnosis in System"]
    DIAG --> RX["Issue Electronic Prescription"]
  end

  RX --> WAIT_PHARM

  subgraph Pharmacist ["💊 Pharmacist"]
    WAIT_PHARM --> DISPENSE["Dispense Medication & Counsel"]
    DISPENSE --> INV["Update Drug Inventory"]
  end

  INV --> FINISH
\`\`\`

**Activity Diagram Notation Elements:**
- **Initial node (\`●\`):** Start of workflow execution.
- **Activity / Action state (Rounded rectangle):** Step or computational task performed.
- **Decision diamond (\`◇\`):** Branching condition with mutually exclusive guard expressions.
- **Fork / Join bars (Solid horizontal/vertical bars):** Concurrent, parallel threads of execution.
- **Activity final node (\`◉\`):** Termination of all flows in the activity.`,
              keyPoints: [
                "Swimlanes divide responsibility by organizational role",
                "Initial node, action states, transitions, final node",
                "Clear handoffs between Patient, Receptionist, Doctor, and Pharmacist"
              ]
            }
          ]
        },
        {
          id: "diag-t7-t8",
          number: "Topics 7 & 8",
          title: "State Machine & Component Diagrams (Agate, Microwave & SCHS)",
          marks: 20,
          subQuestions: [
            {
              id: "diag-t7-1",
              label: "Topic 7",
              marks: 10,
              question: "Draw a State Machine Diagram for a Campaign object (Agate Ltd case study) and for a Microwave Oven.",
              answer: `### State Machine Diagram — Campaign Lifecycle (Agate Ltd)

\`\`\`mermaid
stateDiagram-v2
  [*] --> Commissioned: create() / assignManager(), assignStaff()
  Commissioned --> Active: start() / setCampaignActive()
  
  state Active {
    [*] --> AdvertPreparation
    AdvertPreparation --> Scheduling: advertsApproved
    Scheduling --> RunningAdverts: scheduleApproved
    RunningAdverts --> [*]: allRunsComplete
  }

  Active --> Completed: campaignCompleted() / recordCompletion()
  Completed --> Paid: paymentReceived() [payment >= budget]
  Paid --> [*]
\`\`\`

---

### State Machine Diagram — Microwave Oven Controller

\`\`\`mermaid
stateDiagram-v2
  [*] --> Waiting: powerOn
  
  Waiting --> HalfPower: halfPower() / set power = 300W
  Waiting --> FullPower: fullPower() / set power = 600W
  Waiting --> SetTime: timer() / get digits

  HalfPower --> SetTime: timer()
  FullPower --> SetTime: timer()

  SetTime --> Enabled: doorClosed
  Enabled --> Operation: start() / run magnetron
  Enabled --> Disabled: doorOpen
  
  Operation --> Disabled: doorOpen / stop magnetron
  Operation --> Waiting: cookingTimeElapsed / beep(5)
  Operation --> Waiting: cancel() / stop magnetron

  Disabled --> Enabled: doorClosed
\`\`\``,
              keyPoints: [
                "State notation: Rounded rectangle with state name and 'do:' activities",
                "Transitions: event [guard condition] / action",
                "Hierarchical states (nested sub-states inside Active)"
              ]
            },
            {
              id: "diag-t8-1",
              label: "Topic 8",
              marks: 10,
              question: "Draw a Component Diagram for SCHS showing Provided and Required interfaces.",
              answer: `### Component Diagram — SCHS Application Architecture

\`\`\`mermaid
flowchart TD
  subgraph SCHS_APP ["SCHS Application Tier"]
    PM["Patient Management Component"]
    AM["Appointment Management Component"]
    RXM["Prescription Management Component"]
  end

  subgraph CORE_TIER ["Integration & Service Tier"]
    DAC["Database Access Component"]
    SEC["Security & Auth Component"]
  end

  subgraph STORAGE_TIER ["Database Storage Tier"]
    DB[("Relational Database Component")]
  end

  PM -->|requires| DAC
  AM -->|requires| DAC
  RXM -->|requires| DAC

  PM -->|requires| SEC
  AM -->|requires| SEC

  DAC -->|provides/requires| DB
\`\`\`

**Component Diagram Symbols:**
- **Component:** Encapsulated software module with well-defined interfaces.
- **Provided Interface (Ball / Circle):** Services the component offers to external consumers.
- **Required Interface (Socket / Semicircle):** Services the component depends upon from external providers.`,
              keyPoints: [
                "Components: Patient, Appointment, Rx, DB Access, Security, DB Storage",
                "Provided vs Required interfaces"
              ]
            }
          ]
        },
        {
          id: "diag-t9-t10",
          number: "Topics 9 & 10",
          title: "Deployment & Package Diagrams (SCHS, Internet Banking & Layering)",
          marks: 20,
          subQuestions: [
            {
              id: "diag-t9-1",
              label: "Topic 9",
              marks: 10,
              question: "Draw a Deployment Diagram for an Internet Banking System and for SCHS.",
              answer: `### Deployment Diagram — Internet Banking System

\`\`\`mermaid
flowchart TD
  subgraph CLIENT_NODE ["«device» Customer PC / Mobile"]
    BROWSER["«execution environment» Web Browser"]
  end

  subgraph DMZ_NODE ["«device» Web Server Node"]
    WEBSERVER["«execution environment» Nginx / Node.js<br/>Banking Web App"]
  end

  subgraph APP_NODE ["«device» Application Server Node"]
    APPSERVER["«execution environment» Spring Boot / Enterprise App<br/>Transaction & Ledger Engine"]
  end

  subgraph DB_NODE ["«device» Clustered Database Server Node"]
    DBMS[("«database» Enterprise Oracle DB / PostgreSQL<br/>Encrypted Financial Data")]
  end

  CLIENT_NODE -->|"HTTPS / TLS 1.3 (Port 443)"| DMZ_NODE
  DMZ_NODE -->|"gRPC / REST over mTLS"| APP_NODE
  APP_NODE -->|"JDBC / SSL (Port 5432)"| DB_NODE
\`\`\`

**Deployment Diagram Elements:**
- **Node (3D box):** Physical hardware processor or virtual machine execution host.
- **Artifact / Component:** Concrete software package deployed onto a node.
- **Communication link:** Network connection with annotated protocol (e.g. HTTPS, JDBC, TCP/IP).`,
              keyPoints: [
                "Nodes: Customer Client, Web Server, App Server, DB Server",
                "Communication paths with security protocols: HTTPS, JDBC, TLS"
              ]
            },
            {
              id: "diag-t10-1",
              label: "Topic 10",
              marks: 10,
              question: "Draw a Package Diagram for a Layered Enterprise Architecture and for SCHS.",
              answer: `### Package Diagram — Four-Layer Enterprise Architecture

\`\`\`mermaid
flowchart TD
  subgraph UI_PKG ["«package» Presentation Layer (UI)"]
    VIEWS["Views & UI Templates"]
    CTRLS["HTTP Controllers"]
  end

  subgraph BIZ_PKG ["«package» Business Logic Layer"]
    SERVICES["Application Services"]
    ENTITIES["Domain Entities & Rules"]
  end

  subgraph DATA_PKG ["«package» Data Access Layer (DAL)"]
    DAOS["Data Access Objects (DAOs)"]
    MAPPERS["ORM Data Mappers"]
  end

  subgraph DB_PKG ["«package» Database Layer"]
    TABLES["Relational Tables & Views"]
    PROCS["Stored Procedures"]
  end

  UI_PKG -->|«import»| BIZ_PKG
  BIZ_PKG -->|«import»| DATA_PKG
  DATA_PKG -->|«import»| DB_PKG
\`\`\`

**Package Coupling Rules:**
- Higher layers depend strictly on immediately lower layers (or clean interfaces).
- Lower layers have zero coupling to or knowledge of higher layers.
- Supports independent evolution, automated testing, and layer swapping.`,
              keyPoints: [
                "Packages: Presentation, Business Logic, Data Access, Database",
                "Unidirectional «import» dependencies maintain separation of concerns"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "section-b-review-questions",
      name: "Section B: Comprehensive Review Questions by Chapter",
      instructions: "Official chapter-by-chapter review questions and verified answers covering Chapters 1 through 18.",
      compulsory: true,
      questions: [
        {
          id: "sec-b-ch1",
          number: "Chapter 1",
          title: "Introduction to Software Engineering",
          marks: 13,
          subQuestions: [
            {
              id: "sec-b-c1-q1",
              label: "Q1",
              marks: 2,
              question: "What is software engineering? (2 marks)",
              answer: "Software engineering is an engineering discipline that is concerned with all aspects of software production from the early stages of system specification through to maintaining the system after it has gone into use.",
              keyPoints: ["Engineering discipline", "All aspects of production", "Specification to maintenance"]
            },
            {
              id: "sec-b-c1-q2",
              label: "Q2",
              marks: 4,
              question: "List four essential attributes of good software. (4 marks)",
              answer: "1. **Maintainability**\n2. **Dependability and security**\n3. **Efficiency**\n4. **Acceptability**",
              keyPoints: ["Maintainability", "Dependability and security", "Efficiency", "Acceptability"]
            },
            {
              id: "sec-b-c1-q3",
              label: "Q3",
              marks: 3,
              question: "Distinguish between generic and customized software products. (3 marks)",
              answer: "Generic products are stand-alone systems sold to any customer; specification owned by developer. Customized products are commissioned by specific customer; specification owned by customer.",
              keyPoints: ["Generic: open market, developer owns spec", "Customized: bespoke client, customer owns spec"]
            },
            {
              id: "sec-b-c1-q4",
              label: "Q4",
              marks: 2,
              question: "What are the four fundamental software process activities? (2 marks)",
              answer: "1. Software specification\n2. Software development\n3. Software validation\n4. Software evolution",
              keyPoints: ["Specification", "Development", "Validation", "Evolution"]
            },
            {
              id: "sec-b-c1-q5",
              label: "Q5",
              marks: 2,
              question: "Explain the difference between software engineering and computer science. (2 marks)",
              answer: "Computer science focuses on theory and fundamentals; software engineering is concerned with the practicalities of developing and delivering useful software.",
              keyPoints: ["Computer science: theory & fundamentals", "Software engineering: practical development & delivery"]
            }
          ]
        },
        {
          id: "sec-b-ch2",
          number: "Chapter 2",
          title: "Software Processes",
          marks: 16,
          subQuestions: [
            {
              id: "sec-b-c2-q1",
              label: "Q1",
              marks: 2,
              question: "What is a software process? (2 marks)",
              answer: "A software process is a set of related activities that leads to the production of a software system.",
              keyPoints: ["Set of related activities leading to software production"]
            },
            {
              id: "sec-b-c2-q2",
              label: "Q2",
              marks: 5,
              question: "Describe the waterfall model. (5 marks)",
              answer: "The waterfall model is a plan-driven process with separate phases: requirements analysis and definition, system and software design, implementation and unit testing, integration and system testing, operation and maintenance. Each phase must be complete before the next begins.",
              keyPoints: ["Plan-driven", "Separate sequential phases", "Stage-gate completion before next phase"]
            },
            {
              id: "sec-b-c2-q3",
              label: "Q3",
              marks: 4,
              question: "What are the advantages of incremental development? (4 marks)",
              answer: "1. Reduced cost of accommodating changing requirements\n2. Easier to get customer feedback\n3. More rapid delivery of useful software\n4. Customers gain value earlier",
              keyPoints: ["Reduced cost of change", "Customer feedback", "Rapid delivery", "Early value"]
            },
            {
              id: "sec-b-c2-q4",
              label: "Q4",
              marks: 5,
              question: "Explain the spiral model. (5 marks)",
              answer: "The spiral model is a risk-driven process model with phases: determine objectives and identify alternatives, identify and resolve risks, develop next level of product, review and plan next phase. The number of loops varies by project.",
              keyPoints: ["Risk-driven meta-model", "Iterative loops", "Risk resolution before development"]
            }
          ]
        },
        {
          id: "sec-b-ch3",
          number: "Chapter 3",
          title: "Agile Software Development",
          marks: 17,
          subQuestions: [
            {
              id: "sec-b-c3-q1",
              label: "Q1",
              marks: 4,
              question: "State the four values of the Agile Manifesto. (4 marks)",
              answer: "1. Individuals and interactions over processes and tools\n2. Working software over comprehensive documentation\n3. Customer collaboration over contract negotiation\n4. Responding to change over following a plan",
              keyPoints: ["Individuals & interactions", "Working software", "Customer collaboration", "Responding to change"]
            },
            {
              id: "sec-b-c3-q2",
              label: "Q2",
              marks: 5,
              question: "Describe Extreme Programming (XP). (5 marks)",
              answer: "XP is an agile method with practices including: incremental planning, small releases, simple design, test-first development, refactoring, pair programming, collective ownership, continuous integration, sustainable pace, and on-site customer.",
              keyPoints: ["Test-first", "Small releases", "Pair programming", "Continuous refactoring"]
            },
            {
              id: "sec-b-c3-q3",
              label: "Q3",
              marks: 5,
              question: "Explain Scrum. (5 marks)",
              answer: "Scrum is an agile method focused on managing iterative development. It has three phases: initial planning, sprint cycles (2-4 weeks), and project closure. Key roles include Product Owner, ScrumMaster, and development team. Daily Scrum meetings review progress.",
              keyPoints: ["Sprints (2-4 weeks)", "Product Owner & ScrumMaster", "Daily standup", "Sprint Backlog"]
            },
            {
              id: "sec-b-c3-q4",
              label: "Q4",
              marks: 3,
              question: "What are the benefits of pair programming? (3 marks)",
              answer: "1. Supports collective ownership\n2. Acts as informal review\n3. Encourages refactoring\n4. Spreads knowledge across team",
              keyPoints: ["Collective ownership", "Informal code review", "Knowledge spreading"]
            }
          ]
        },
        {
          id: "sec-b-ch4",
          number: "Chapter 4",
          title: "Requirements Engineering",
          marks: 19,
          subQuestions: [
            {
              id: "sec-b-c4-q1",
              label: "Q1",
              marks: 4,
              question: "Distinguish between functional and non-functional requirements. (4 marks)",
              answer: "Functional requirements describe what the system should do. Non-functional requirements are constraints on services or functions (timing, standards, etc.).",
              keyPoints: ["Functional: system services & behavior", "Non-functional: constraints & quality attributes"]
            },
            {
              id: "sec-b-c4-q2",
              label: "Q2",
              marks: 6,
              question: "Explain the requirements engineering process. (6 marks)",
              answer: "The process includes:\n1. Requirements elicitation and analysis\n2. Requirements specification\n3. Requirements validation\n4. Requirements management",
              keyPoints: ["Elicitation & analysis", "Specification", "Validation", "Management"]
            },
            {
              id: "sec-b-c4-q3",
              label: "Q3",
              marks: 3,
              question: "What is requirements validation? (3 marks)",
              answer: "Requirements validation is concerned with demonstrating that requirements define the system the customer really wants. Checks include validity, consistency, completeness, realism, and verifiability.",
              keyPoints: ["Demonstrates requirements meet user desires", "Checks: validity, consistency, completeness"]
            },
            {
              id: "sec-b-c4-q4",
              label: "Q4",
              marks: 6,
              question: "Describe three fact-finding techniques. (6 marks)",
              answer: "1. **Interviews:** Structured meetings with stakeholders\n2. **Observation:** Watching people work in real operational context\n3. **Questionnaires:** Written survey forms distributed to large user cohorts",
              keyPoints: ["Interviews", "Observation", "Questionnaires"]
            }
          ]
        },
        {
          id: "sec-b-ch5",
          number: "Chapter 5",
          title: "System Modeling",
          marks: 17,
          subQuestions: [
            {
              id: "sec-b-c5-q1",
              label: "Q1",
              marks: 2,
              question: "What is system modeling? (2 marks)",
              answer: "System modeling is the process of developing abstract models of a system, with each model presenting a different view or perspective.",
              keyPoints: ["Abstract models presenting different views"]
            },
            {
              id: "sec-b-c5-q2",
              label: "Q2",
              marks: 8,
              question: "Describe four modeling perspectives. (8 marks)",
              answer: "1. **External:** Models context/environment\n2. **Interaction:** Models interactions between system and environment\n3. **Structural:** Models organization of system\n4. **Behavioral:** Models dynamic behavior",
              keyPoints: ["External", "Interaction", "Structural", "Behavioral"]
            },
            {
              id: "sec-b-c5-q3",
              label: "Q3",
              marks: 3,
              question: "What is the purpose of a use case diagram? (3 marks)",
              answer: "Use case diagrams show interactions between a system and its environment. They identify actors, use cases, and system boundaries.",
              keyPoints: ["Interactions with environment", "Actors, use cases, boundaries"]
            },
            {
              id: "sec-b-c5-q4",
              label: "Q4",
              marks: 4,
              question: "Explain sequence diagrams. (4 marks)",
              answer: "Sequence diagrams model interactions between actors and objects, showing the sequence of interactions in a use case. Objects are listed horizontally with vertical lifelines, and interactions are shown as annotated arrows.",
              keyPoints: ["Time-ordered interactions", "Lifelines & activation boxes"]
            }
          ]
        },
        {
          id: "sec-b-ch6",
          number: "Chapter 6",
          title: "Architectural Design",
          marks: 16,
          subQuestions: [
            {
              id: "sec-b-c6-q1",
              label: "Q1",
              marks: 3,
              question: "What is architectural design? (3 marks)",
              answer: "Architectural design is concerned with understanding how a software system should be organized and designing the overall structure, identifying main components and their relationships.",
              keyPoints: ["Decomposition into communicating components"]
            },
            {
              id: "sec-b-c6-q2",
              label: "Q2",
              marks: 5,
              question: "Describe the MVC pattern. (5 marks)",
              answer: "The Model-View-Controller pattern separates presentation from system data:\n- **Model:** Manages system data and operations\n- **View:** Defines and manages data presentation\n- **Controller:** Manages user interaction",
              keyPoints: ["Model: data", "View: presentation", "Controller: interaction"]
            },
            {
              id: "sec-b-c6-q3",
              label: "Q3",
              marks: 4,
              question: "What is a layered architecture? (4 marks)",
              answer: "A layered architecture organizes the system into layers with related functionality. Each layer provides services to the layer above, with lowest layers representing core services.",
              keyPoints: ["Hierarchical layers", "Each layer serves the one above"]
            },
            {
              id: "sec-b-c6-q4",
              label: "Q4",
              marks: 4,
              question: "Explain the client-server pattern. (4 marks)",
              answer: "In client-server architecture, functionality is organized into services delivered by servers. Clients access servers to use services. Servers can be distributed across a network.",
              keyPoints: ["Servers provide services to networked clients"]
            }
          ]
        },
        {
          id: "sec-b-ch7",
          number: "Chapter 7",
          title: "Design and Implementation",
          marks: 12,
          subQuestions: [
            {
              id: "sec-b-c7-q1",
              label: "Q1",
              marks: 3,
              question: "What is object-oriented design? (3 marks)",
              answer: "Object-oriented design involves designing object classes and relationships. Objects include data and operations, can be understood as stand-alone entities, and have clear mapping between real-world entities and controlling objects.",
              keyPoints: ["Encapsulates data and operations", "Maps real-world entities to software"]
            },
            {
              id: "sec-b-c7-q2",
              label: "Q2",
              marks: 5,
              question: "Describe the Observer pattern. (5 marks)",
              answer: "The Observer pattern separates display of object state from the object itself. When state changes, all displays are notified and updated. Subject knows only abstract Observer, minimizing coupling.",
              keyPoints: ["Decouples state from views", "Automatic notification of changes"]
            },
            {
              id: "sec-b-c7-q3",
              label: "Q3",
              marks: 4,
              question: "What is configuration management? (4 marks)",
              answer: "Configuration management involves:\n1. Version management\n2. System integration\n3. Problem tracking\n4. Release management",
              keyPoints: ["Version management", "System integration", "Problem tracking", "Release management"]
            }
          ]
        },
        {
          id: "sec-b-ch8",
          number: "Chapter 8",
          title: "Software Testing",
          marks: 16,
          subQuestions: [
            {
              id: "sec-b-c8-q1",
              label: "Q1",
              marks: 2,
              question: "What is software testing? (2 marks)",
              answer: "Software testing is intended to show that a program does what it is intended to do and to discover program defects before it is put into use.",
              keyPoints: ["Shows program intent", "Discovers defects before live use"]
            },
            {
              id: "sec-b-c8-q2",
              label: "Q2",
              marks: 4,
              question: "Distinguish between validation and defect testing. (4 marks)",
              answer: "Validation testing demonstrates software meets requirements using expected use cases. Defect testing finds inputs where behavior is incorrect using deliberately obscure tests.",
              keyPoints: ["Validation: expected normal inputs", "Defect: intentionally obscure test inputs"]
            },
            {
              id: "sec-b-c8-q3",
              label: "Q3",
              marks: 6,
              question: "Describe three stages of testing. (6 marks)",
              answer: "1. **Component testing:** Individual components tested independently\n2. **System testing:** Testing system as a whole\n3. **Customer testing:** Testing with customer data",
              keyPoints: ["Component testing", "System testing", "Customer testing"]
            },
            {
              id: "sec-b-c8-q4",
              label: "Q4",
              marks: 4,
              question: "What is test-driven development? (4 marks)",
              answer: "TDD interleaves testing and code development. Tests are written before code, run (initially fail), then code is implemented and tests re-run. Benefits include code coverage, regression testing, simplified debugging.",
              keyPoints: ["Red-Green-Refactor", "Write tests before code"]
            }
          ]
        },
        {
          id: "sec-b-ch9",
          number: "Chapter 9",
          title: "Software Evolution",
          marks: 11,
          subQuestions: [
            {
              id: "sec-b-c9-q1",
              label: "Q1",
              marks: 2,
              question: "What is software evolution? (2 marks)",
              answer: "Software evolution is the process of changing existing software systems to meet new requirements.",
              keyPoints: ["Changing existing systems to satisfy new requirements"]
            },
            {
              id: "sec-b-c9-q2",
              label: "Q2",
              marks: 3,
              question: "What are legacy systems? (3 marks)",
              answer: "Legacy systems are older systems using obsolete technology that still fulfill important business functions. They are difficult to maintain and evolve.",
              keyPoints: ["Older obsolete tech", "Fulfills critical business function"]
            },
            {
              id: "sec-b-c9-q3",
              label: "Q3",
              marks: 6,
              question: "Describe three types of software maintenance. (6 marks)",
              answer: "1. **Fault repairs:** Fix bugs and vulnerabilities\n2. **Environmental adaptation:** Adapt to new platforms\n3. **Functionality addition:** Add new features",
              keyPoints: ["Fault repairs", "Environmental adaptation", "Functionality addition"]
            }
          ]
        },
        {
          id: "sec-b-ch10",
          number: "Chapter 10",
          title: "Dependable Systems",
          marks: 9,
          subQuestions: [
            {
              id: "sec-b-c10-q1",
              label: "Q1",
              marks: 5,
              question: "What are the five dependability properties? (5 marks)",
              answer: "1. Availability\n2. Reliability\n3. Safety\n4. Security\n5. Resilience",
              keyPoints: ["Availability", "Reliability", "Safety", "Security", "Resilience"]
            },
            {
              id: "sec-b-c10-q2",
              label: "Q2",
              marks: 4,
              question: "What is redundancy and diversity? (4 marks)",
              answer: "Redundancy is spare capacity included in a system. Diversity means redundant components are of different types, increasing chances they won't fail the same way.",
              keyPoints: ["Redundancy: duplicate capacity", "Diversity: different component designs"]
            }
          ]
        },
        {
          id: "sec-b-ch11",
          number: "Chapter 11",
          title: "Reliability Engineering",
          marks: 10,
          subQuestions: [
            {
              id: "sec-b-c11-q1",
              label: "Q1",
              marks: 4,
              question: "Distinguish between reliability and availability. (4 marks)",
              answer: "Reliability is probability of failure-free operation over time. Availability is probability system is operational when demanded. Availability depends on both failure rate and repair time.",
              keyPoints: ["Reliability: failure-free duration", "Availability: uptime probability"]
            },
            {
              id: "sec-b-c11-q2",
              label: "Q2",
              marks: 6,
              question: "What are the three reliability metrics? (6 marks)",
              answer: "1. **POFOD:** Probability of Failure on Demand\n2. **ROCOF:** Rate of Occurrence of Failures\n3. **AVAIL:** Availability",
              keyPoints: ["POFOD", "ROCOF", "AVAIL"]
            }
          ]
        },
        {
          id: "sec-b-ch12",
          number: "Chapter 12",
          title: "Safety Engineering",
          marks: 9,
          subQuestions: [
            {
              id: "sec-b-c12-q1",
              label: "Q1",
              marks: 3,
              question: "What are safety-critical systems? (3 marks)",
              answer: "Safety-critical systems are systems where failure can lead to human injury or death.",
              keyPoints: ["Failure risks human life or bodily injury"]
            },
            {
              id: "sec-b-c12-q2",
              label: "Q2",
              marks: 2,
              question: "What is a hazard? (2 marks)",
              answer: "A hazard is a condition with the potential for causing or contributing to an accident.",
              keyPoints: ["Condition with accident potential"]
            },
            {
              id: "sec-b-c12-q3",
              label: "Q3",
              marks: 4,
              question: "Describe fault tree analysis. (4 marks)",
              answer: "Fault tree analysis starts with a hazard at the root and works backwards to discover possible causes. It identifies system states leading to the hazard and continues decomposition until root causes are reached.",
              keyPoints: ["Top-down hazard decomposition to root causes"]
            }
          ]
        },
        {
          id: "sec-b-ch13",
          number: "Chapter 13",
          title: "Security Engineering",
          marks: 6,
          subQuestions: [
            {
              id: "sec-b-c13-q1",
              label: "Q1",
              marks: 3,
              question: "What are the three security dimensions? (3 marks)",
              answer: "1. Confidentiality\n2. Integrity\n3. Availability",
              keyPoints: ["Confidentiality", "Integrity", "Availability"]
            },
            {
              id: "sec-b-c13-q2",
              label: "Q2",
              marks: 3,
              question: "What is a security policy? (3 marks)",
              answer: "A security policy sets out fundamental security conditions for an organization, defining what assets must be protected, level of protection required, responsibilities, and existing procedures.",
              keyPoints: ["Fundamental organizational security conditions and rules"]
            }
          ]
        },
        {
          id: "sec-b-ch14",
          number: "Chapter 14",
          title: "Resilience Engineering",
          marks: 6,
          subQuestions: [
            {
              id: "sec-b-c14-q1",
              label: "Q1",
              marks: 2,
              question: "What is resilience? (2 marks)",
              answer: "Resilience is a judgment of how well a system can maintain continuity of critical services in the presence of disruptive events.",
              keyPoints: ["Maintains critical services during disruptive events"]
            },
            {
              id: "sec-b-c14-q2",
              label: "Q2",
              marks: 4,
              question: "Describe the four resilience activities. (4 marks)",
              answer: "1. Recognition\n2. Resistance\n3. Recovery\n4. Reinstatement",
              keyPoints: ["Recognition", "Resistance", "Recovery", "Reinstatement"]
            }
          ]
        },
        {
          id: "sec-b-ch15",
          number: "Chapter 15",
          title: "Software Reuse",
          marks: 7,
          subQuestions: [
            {
              id: "sec-b-c15-q1",
              label: "Q1",
              marks: 4,
              question: "What are the benefits of software reuse? (4 marks)",
              answer: "1. Accelerated development\n2. Effective use of specialists\n3. Increased dependability\n4. Lower development costs",
              keyPoints: ["Speed", "Specialists", "Dependability", "Lower costs"]
            },
            {
              id: "sec-b-c15-q2",
              label: "Q2",
              marks: 3,
              question: "What is a software product line? (3 marks)",
              answer: "A software product line is a set of applications with a common architecture and shared components, each specialized for specific requirements.",
              keyPoints: ["Common architecture with specialized variants"]
            }
          ]
        },
        {
          id: "sec-b-ch16",
          number: "Chapter 16",
          title: "Component-Based Software Engineering",
          marks: 7,
          subQuestions: [
            {
              id: "sec-b-c16-q1",
              label: "Q1",
              marks: 2,
              question: "What is a software component? (2 marks)",
              answer: "A software component is an independent software unit that can be composed with other components to create a software system, conforming to a standard component model.",
              keyPoints: ["Independent unit conforming to standard model"]
            },
            {
              id: "sec-b-c16-q2",
              label: "Q2",
              marks: 5,
              question: "What are the essential characteristics of components? (5 marks)",
              answer: "1. Composable\n2. Deployable\n3. Documented\n4. Independent\n5. Standardized",
              keyPoints: ["Composable", "Deployable", "Documented", "Independent", "Standardized"]
            }
          ]
        },
        {
          id: "sec-b-ch17",
          number: "Chapter 17",
          title: "Distributed Software Engineering",
          marks: 7,
          subQuestions: [
            {
              id: "sec-b-c17-q1",
              label: "Q1",
              marks: 2,
              question: "What is a distributed system? (2 marks)",
              answer: "A distributed system is a collection of independent computers that appears to the user as a single coherent system.",
              keyPoints: ["Independent computers appearing as coherent whole"]
            },
            {
              id: "sec-b-c17-q2",
              label: "Q2",
              marks: 5,
              question: "What are the benefits of distributed systems? (5 marks)",
              answer: "1. Resource sharing\n2. Openness\n3. Concurrency\n4. Scalability\n5. Fault tolerance",
              keyPoints: ["Resource sharing", "Openness", "Concurrency", "Scalability", "Fault tolerance"]
            }
          ]
        },
        {
          id: "sec-b-ch18",
          number: "Chapter 18",
          title: "Service-Oriented Software Engineering",
          marks: 6,
          subQuestions: [
            {
              id: "sec-b-c18-q1",
              label: "Q1",
              marks: 2,
              question: "What is a web service? (2 marks)",
              answer: "A web service is a loosely coupled, reusable software component that encapsulates discrete functionality, accessed using standard Internet and XML-based protocols.",
              keyPoints: ["Loosely coupled reusable component accessed via Internet"]
            },
            {
              id: "sec-b-c18-q2",
              label: "Q2",
              marks: 4,
              question: "What are RESTful services? (4 marks)",
              answer: "RESTful services are based on Representational State Transfer. Resources have unique URLs and use HTTP operations (POST, GET, PUT, DELETE). They are stateless and support multiple representations.",
              keyPoints: ["Resource-based URIs", "HTTP verbs", "Stateless"]
            }
          ]
        }
      ]
    },
    {
      id: "section-c-exam-style",
      name: "Section C: Comprehensive Exam-Style Questions with Model Answers",
      instructions: "Answer ALL eight 20-mark exam questions covering waterfall, incremental development, requirements, safety-critical systems, Mentcare, UML, testing, and architecture.",
      compulsory: true,
      questions: [
        {
          id: "ex-q1",
          number: "Question 1",
          title: "Waterfall Model of Software Development",
          marks: 20,
          subQuestions: [
            {
              id: "ex-q1-a",
              label: "a",
              marks: 6,
              question: "Describe the waterfall model of software development. [6 marks]",
              answer: "The **waterfall model** is a classic plan-driven software process model where all project activities are planned in advance and progress is tracked against predetermined milestones. It comprises separate, distinct, sequential phases where each phase must be formally verified and approved before proceeding to the next. Artifacts (specifications, designs, code, test plans) are fully produced and signed off. It is predominantly suited for large, distributed multi-site systems engineering projects where interface stability is paramount.",
              keyPoints: ["Plan-driven", "Separate sequential phases", "Formal stage gates and sign-offs", "Suited for large, distributed projects"]
            },
            {
              id: "ex-q1-b",
              label: "b",
              marks: 10,
              question: "Explain the five phases of the waterfall model. [10 marks]",
              answer: `1. **Requirements analysis and definition:** System services, functional capabilities, user constraints, and operational targets are established through stakeholder consultations and documented into an official Software Requirements Specification (SRS).
2. **System and software design:** The overall architectural structure is partitioned into hardware and software subsystems. Software design represents abstractions, data structures, and component interfaces.
3. **Implementation and unit testing:** Software design is translated into executable program source code. Each unit is tested independently to verify it conforms to design specifications.
4. **Integration and system testing:** Individual software units and subsystems are integrated into a complete system and tested to verify emergent non-functional properties and customer requirements.
5. **Operation and maintenance:** The system is installed and deployed into real operation. Maintenance entails fixing latent faults, adapting to environmental platform changes, and adding new functionality.`,
              keyPoints: ["Requirements analysis", "System and software design", "Implementation & unit testing", "Integration & system testing", "Operation & maintenance"]
            },
            {
              id: "ex-q1-c",
              label: "c",
              marks: 4,
              question: "State two situations where the waterfall model is appropriate. [4 marks]",
              answer: `1. **Stable and well-understood requirements:** When requirements are thoroughly established upfront and unlikely to alter significantly during development (e.g. compilers, avionics, re-implementations).
2. **Multi-site distributed engineering:** For massive systems developed concurrently across several subcontracted organisations where rigid contractual interfaces and formal advance planning are required to coordinate teams.`,
              keyPoints: ["Well-understood requirements", "Multi-team distributed contracting"]
            }
          ]
        },
        {
          id: "ex-q2",
          number: "Question 2",
          title: "Incremental Development",
          marks: 20,
          subQuestions: [
            {
              id: "ex-q2-a",
              label: "a",
              marks: 6,
              question: "Explain the concept of incremental development. [6 marks]",
              answer: "Incremental development is a software process strategy where **specification, development, and validation are interleaved** rather than sequential. The target software is delivered as a series of usable versions or increments, with each increment delivering a tangible subset of user functionality. Priority requirements are incorporated into early increments. Stakeholders can inspect and interact with working software early, providing continuous real-world feedback.",
              keyPoints: ["Interleaved specification, development, and validation", "Delivered as series of versions/increments", "Early working software demonstration"]
            },
            {
              id: "ex-q2-b",
              label: "b",
              marks: 6,
              question: "Discuss four advantages of incremental development. [6 marks]",
              answer: `1. **Reduced cost of changing requirements:** The amount of analysis and documentation that has to be reworked is vastly lower than in plan-driven waterfall models.
2. **Continuous customer feedback:** Customers observe running software increments, validating whether functionality solves actual workflow problems.
3. **Rapid delivery of valuable functionality:** Customers can deploy high-priority business services months before the entire system is finished.
4. **Early value realization and lower failure risk:** Essential business value is harvested early, and the likelihood of complete project abandonment is drastically reduced.`,
              keyPoints: ["Lower cost of change", "Easier customer feedback", "Rapid delivery of early increments", "Early business value"]
            },
            {
              id: "ex-q2-c",
              label: "c",
              marks: 8,
              question: "Describe two major problems associated with incremental development. [6 marks]",
              answer: `1. **Process visibility is compromised:** Managers require regular documentation and formal milestones to assess contractual progress. If systems are developed rapidly in small increments, it is not cost-effective or practical to produce comprehensive documents for every increment.
2. **System architecture tends to degrade:** Regular additions and adaptive modifications corrupt the underlying structural architecture unless developers continuously spend time refactoring and re-architecting code.`,
              keyPoints: ["Lack of process visibility / documentation cost", "Architectural degradation without continual refactoring"]
            }
          ]
        },
        {
          id: "ex-q3",
          number: "Question 3",
          title: "Requirements Engineering & Testing Verification/Validation",
          marks: 20,
          subQuestions: [
            {
              id: "ex-q3-a",
              label: "a",
              marks: 8,
              question: "Explain the requirements engineering process and its four main activities. [8 marks]",
              answer: `The requirements engineering process identifies, documents, and maintains the services a system must provide and the constraints under which it must operate.

1. **Requirements elicitation and analysis:** Collaborating with stakeholders (users, managers, domain experts) through interviews, workshops, observation, and prototyping to discover real needs.
2. **Requirements specification:** Formulating user requirements and detailed system requirements in natural language, structured templates, and graphical models (SRS).
3. **Requirements validation:** Systematically evaluating specifications for validity, consistency, completeness, realism, and verifiability to avoid costly downstream redesign.
4. **Requirements management:** Managing requirement changes as organizational priorities, legislation, and technologies evolve throughout project life.`,
              keyPoints: ["Elicitation & analysis", "Specification", "Validation", "Management"]
            },
            {
              id: "ex-q3-b",
              label: "b",
              marks: 6,
              question: "Describe three stages of software testing. [6 marks]",
              answer: `1. **Component (Unit) testing:** Testing individual program functions, classes, or modules independently in isolation to verify algorithmic correctness and boundary behavior.
2. **System testing:** Integrating all components into a complete working system to verify component interactions, end-to-end workflows, and emergent system properties (throughput, reliability, security).
3. **Customer (Acceptance) testing:** Testing the completed system with actual customer personnel using real operational data to verify it meets operational business needs prior to formal contractual acceptance.`,
              keyPoints: ["Component testing", "System testing", "Customer / Acceptance testing"]
            },
            {
              id: "ex-q3-c",
              label: "c",
              marks: 6,
              question: "Explain the difference between verification and validation (Boehm's definitions). [6 marks]",
              answer: `| Dimension | Verification | Validation |
| :--- | :--- | :--- |
| **Guiding Question** | *"Are we building the product right?"* | *"Are we building the right product?"* |
| **Objective** | Ensure software strictly conforms to its written specifications and design models. | Ensure software satisfies the real, genuine operational needs of the customer. |
| **Perspective** | Internal engineering correctness (code vs spec). | External user fitness-for-purpose (spec vs user need). |
| **Techniques** | Inspections, code reviews, automated unit testing, static analysis. | User acceptance testing, beta testing, field trials, prototypes. |`,
              keyPoints: ["Verification: Building the product right (conforms to spec)", "Validation: Building the right product (meets user need)"]
            }
          ]
        },
        {
          id: "ex-q4",
          number: "Question 4",
          title: "Safety-Critical Systems: Insulin Pump Control System",
          marks: 20,
          subQuestions: [
            {
              id: "ex-q4-a",
              label: "a",
              marks: 4,
              question: "Explain why the insulin pump control system is classified as safety-critical. [4 marks]",
              answer: "The automated insulin pump is classified as a **safety-critical system** because software malfunction or algorithmic error can directly cause severe bodily injury, long-term physical damage, or human death. Delivering too little insulin causes hyperglycemia (long-term blindness, kidney failure, neuropathy); delivering an overdose of insulin triggers rapid hypoglycemia, resulting in diabetic coma, brain damage, or immediate death. The software operates continuously with no human doctor in the control loop.",
              keyPoints: ["Malfunction directly risks human life", "Underdose -> hyperglycemia (organ damage)", "Overdose -> hypoglycemia (coma/death)"]
            },
            {
              id: "ex-q4-b",
              label: "b",
              marks: 6,
              question: "Identify and describe three functional requirements for the insulin pump system. [6 marks]",
              answer: `1. **Continuous Blood Glucose Monitoring:** The system shall sample blood glucose sensor readings at fixed intervals (every 10 minutes) and convert analogue sensor signals into digital blood sugar levels (mg/dL or mmol/L).
2. **Automated Dose Calculation:** The system shall compute the required basal and bolus insulin dosage based on current blood sugar readings, the rate of change of blood sugar, and historical insulin delivery log.
3. **Physical Micro-Pump Actuation:** The system shall dispatch precise step-motor control pulses to the micro-pump hardware to deliver the calculated dose safely within physiological upper-bound thresholds.`,
              keyPoints: ["Sample blood glucose sensor", "Compute safe insulin dosage", "Actuate physical micro-pump"]
            },
            {
              id: "ex-q4-c",
              label: "c",
              marks: 6,
              question: "Identify three important non-functional requirements for the insulin pump system. [6 marks]",
              answer: `1. **Reliability:** The probability of failure on demand (POFOD) shall not exceed 10⁻⁵ demands, and the Mean Time Between Failures (MTBF) shall exceed 50,000 continuous operating hours.
2. **Availability:** The system shall maintain an operational availability of ≥ 99.999%, ensuring insulin delivery is never suspended due to internal lockups.
3. **Safety Interlock:** Under no circumstances shall single-fault conditions or arithmetic overflows cause the system to deliver more than the maximum daily physiological dose (safety interlock assertion).`,
              keyPoints: ["Reliability (POFOD, MTBF)", "Availability (99.999% uptime)", "Safety interlock / maximum dose containment"]
            },
            {
              id: "ex-q4-d",
              label: "d",
              marks: 4,
              question: "Suggest two software engineering practices to improve safety and reliability. [4 marks]",
              answer: `1. **Formal Specification and Safety Analysis:** Employ formal algebraic or state-machine specifications accompanied by Fault Tree Analysis (FTA) and Hazard & Operability Studies (HAZOP) prior to writing code.
2. **Defensive Programming and Hardware Redundancy:** Use dual-channel self-checking processors with independent shut-off valves, software assertions, array bounds checks, and watchdog timers to guarantee fail-safe shutdown upon anomaly.`,
              keyPoints: ["Formal specification + Fault Tree Analysis", "Defensive programming + dual-channel hardware interlocks"]
            }
          ]
        },
        {
          id: "ex-q5",
          number: "Question 5",
          title: "Mentcare Psychiatric Patient Management System",
          marks: 20,
          subQuestions: [
            {
              id: "ex-q5-a",
              label: "a",
              marks: 6,
              question: "Identify and describe three functional requirements of the Mentcare system. [6 marks]",
              answer: `1. **Individual Care Management:** Clinicians and clinical psychologists shall be able to create, review, update, and search longitudinal psychiatric patient treatment records.
2. **Active Clinical Monitoring & Safety Warnings:** The system shall automatically monitor patient records and alert clinical staff if a patient misses scheduled medication, displays suicidal ideation, or becomes overdue for treatment.
3. **Administrative & Health Statistics Reporting:** The system shall generate monthly regulatory reports detailing clinic patient throughput, bed occupancy, and drug prescription trends without exposing patient identities.`,
              keyPoints: ["Individual care management", "Active clinical monitoring / suicide alerts", "Administrative regulatory reporting"]
            },
            {
              id: "ex-q5-b",
              label: "b",
              marks: 4,
              question: "Identify and explain two non-functional requirements for Mentcare. [4 marks]",
              answer: `1. **Confidentiality / Privacy:** Patient psychiatric records must be encrypted at rest and in transit; unauthorized disclosure of psychiatric diagnoses can destroy patient livelihoods and violate national health privacy acts.
2. **High Availability:** The system must be available 24/7 (99.9% uptime) in emergency psychiatric wards; unavailability during an acute psychotic crisis could prevent clinicians from knowing life-critical allergy or violence history.`,
              keyPoints: ["Confidentiality & encryption", "24/7 Availability in acute care"]
            },
            {
              id: "ex-q5-c",
              label: "c",
              marks: 4,
              question: "Discuss two ethical issues in developing Mentcare. [4 marks]",
              answer: `1. **Patient Privacy vs Public Safety:** Balancing patient confidentiality against the obligation to alert authorities or clinicians when a patient is assessed as an active threat to themselves or the community.
2. **Algorithm Bias and Clinical Autonomy:** Ensuring automated safety warning algorithms assist clinicians without substituting professional human diagnostic judgment or unfairly flagging vulnerable individuals.`,
              keyPoints: ["Privacy vs public safety disclosure", "Algorithmic bias vs clinical autonomy"]
            },
            {
              id: "ex-q5-d",
              label: "d",
              marks: 6,
              question: "Suggest three security mechanisms for Mentcare. [6 marks]",
              answer: `1. **Multi-Factor Authentication (MFA) & Smart Cards:** Medical staff must authenticate via two-factor credentials and smart identity tokens.
2. **Role-Based Access Control (RBAC):** Restrict record visibility according to strict medical roles (e.g. receptionists see appointment slots, only attending psychiatrists see clinical notes).
3. **Tamper-Evident Audit Logging:** Every read, edit, print, or export event is recorded in an immutable audit ledger documenting staff ID, timestamp, patient ID, and action.`,
              keyPoints: ["MFA & smart cards", "Role-Based Access Control (RBAC)", "Tamper-evident audit logging"]
            }
          ]
        },
        {
          id: "ex-q6",
          number: "Question 6",
          title: "UML Modeling: Library System Use Case, Class & Sequence",
          marks: 20,
          subQuestions: [
            {
              id: "ex-q6-a",
              label: "a",
              marks: 8,
              question: "Draw a use case diagram for a Library Management System showing Member and Librarian actors. [8 marks]",
              answer: `### Use Case Diagram — Library Management System

\`\`\`mermaid
flowchart LR
  subgraph LMS ["Library Management System"]
    UC1(["Borrow Book"])
    UC2(["Return Book"])
    UC3(["Search Catalogue"])
    UC4(["Renew Loan"])
    UC5(["Add New Book"])
    UC6(["Remove Book"])
    UC7(["Register Member"])
    UC8(["Generate Circulation Report"])
  end

  MEMBER["🧑 Member"] --> UC1
  MEMBER --> UC2
  MEMBER --> UC3
  MEMBER --> UC4

  LIBRARIAN["📚 Librarian"] --> UC1
  LIBRARIAN --> UC2
  LIBRARIAN --> UC5
  LIBRARIAN --> UC6
  LIBRARIAN --> UC7
  LIBRARIAN --> UC8
\`\`\``,
              keyPoints: ["Actors: Member and Librarian", "Use cases: Borrow, Return, Search, Renew, Add Book, Register Member, Reports"]
            },
            {
              id: "ex-q6-b",
              label: "b",
              marks: 8,
              question: "Draw a class diagram for the library system showing Book, Member, Loan, and Librarian classes. [8 marks]",
              answer: `### Class Diagram — Library Management System

\`\`\`mermaid
classDiagram
  class Book {
    -String isbn
    -String title
    -String author
    -int copies
    +addBook()
    +removeBook()
    +isAvailable() bool
  }

  class Member {
    -String memberId
    -String name
    -String phone
    +borrowBook()
    +returnBook()
    +renewLoan()
  }

  class Loan {
    -String loanId
    -Date loanDate
    -Date dueDate
    -Date returnDate
    +calculateFine() double
    +isOverdue() bool
  }

  class Librarian {
    -String librarianId
    -String name
    +issueBook()
    +returnBook()
    +addMember()
  }

  Book "1" -- "*" Loan : subject of
  Member "1" -- "*" Loan : borrows
  Librarian "1" -- "*" Loan : administers
\`\`\``,
              keyPoints: ["Book, Member, Loan, Librarian classes", "Attributes, methods, and multiplicities"]
            },
            {
              id: "ex-q6-c",
              label: "c",
              marks: 4,
              question: "Draw a sequence diagram for borrowing a book. [4 marks]",
              answer: `### Sequence Diagram — Borrow Book

\`\`\`mermaid
sequenceDiagram
  autonumber
  actor M as :Member
  participant UI as :LoanUI
  participant Ctrl as :LoanController
  participant B as :Book
  participant DB as :Database

  M->>UI: enterISBN(isbn)
  UI->>Ctrl: verifyAvailability(isbn)
  Ctrl->>B: isAvailable()
  B-->>Ctrl: true
  M->>UI: confirmBorrow()
  UI->>Ctrl: createLoan(memberId, isbn)
  Ctrl->>DB: saveLoanRecord()
  DB-->>Ctrl: success
  Ctrl-->>UI: displayLoanReceipt(dueDate)
  UI-->>M: Book Borrowed Successfully
\`\`\``,
              keyPoints: ["Member -> LoanUI -> Controller -> Book -> DB", "Check availability before persisting loan"]
            }
          ]
        },
        {
          id: "ex-q7",
          number: "Question 7",
          title: "Software Testing, Levels, TDD & Equivalence Partitioning",
          marks: 20,
          subQuestions: [
            {
              id: "ex-q7-a",
              label: "a",
              marks: 6,
              question: "Explain the difference between verification and validation with examples. [6 marks]",
              answer: "Verification checks whether software strictly conforms to design specifications (code syntax, algorithm compliance, unit tests). Validation checks whether the software solves the customer's actual business need (user acceptance, usability). For example, a calculator function that computes `x * y` instead of `x + y` violates verification; a system that executes perfectly but generates reports in an unusable format that the finance director rejects violates validation.",
              keyPoints: ["Verification: conforms to specification", "Validation: meets real customer needs"]
            },
            {
              id: "ex-q7-b",
              label: "b",
              marks: 6,
              question: "Describe three levels of testing: Unit testing, Integration testing, and System testing. [6 marks]",
              answer: `1. **Unit Testing:** Tests individual functions, procedures, or object classes in isolation from external dependencies, utilizing test stubs and mocks to verify edge cases and boundary conditions.
2. **Integration Testing:** Tests component interfaces and communication protocols between two or more integrated subsystems to detect mismatch errors, parameter discrepancies, and data conversion faults.
3. **System Testing:** Tests the fully assembled application in an environment resembling production to verify end-to-end functionality, performance, security, and compliance with the SRS.`,
              keyPoints: ["Unit testing", "Integration testing", "System testing"]
            },
            {
              id: "ex-q7-c",
              label: "c",
              marks: 4,
              question: "Explain Test-Driven Development (TDD) and its advantages. [4 marks]",
              answer: `**Test-Driven Development (TDD)** is an agile practice where developers write automated unit tests *before* writing code.
1. Write a failing test for a small requirement increment.
2. Run tests to confirm it fails (Red).
3. Write minimum necessary code to pass the test (Green).
4. Refactor code while keeping tests green (Refactor).

**Advantages:** Guaranteed high test coverage, built-in regression suite, simplified debugging, and cleaner modular design.`,
              keyPoints: ["Red-Green-Refactor cycle", "Write tests before code", "High code coverage & regression protection"]
            },
            {
              id: "ex-q7-d",
              label: "d",
              marks: 4,
              question: "What is Equivalence Partitioning in test case design? Provide an example. [4 marks]",
              answer: `**Equivalence Partitioning** is a black-box test design technique that divides the input domain into partitions of equivalent data where the system is expected to treat all values in a partition identically. Test cases are selected from each partition (especially at boundary values and midpoints).

*Example:* An input accepting integers from 1 to 100 has:
- Invalid partition: numbers < 1 (Test: 0)
- Valid partition: numbers 1 to 100 (Test: 1, 50, 100)
- Invalid partition: numbers > 100 (Test: 101)`,
              keyPoints: ["Divides inputs into equivalence classes", "Boundary value testing", "Reduces number of test cases while maintaining coverage"]
            }
          ]
        },
        {
          id: "ex-q8",
          number: "Question 8",
          title: "Software Architecture: MVC, Layered & Client-Server",
          marks: 20,
          subQuestions: [
            {
              id: "ex-q8-a",
              label: "a",
              marks: 4,
              question: "What is architectural design and why is it critically important? [4 marks]",
              answer: "Architectural design is the early development activity concerned with understanding how a software system should be structured and decomposing it into major communicating subsystems. It is critical because it dictates non-functional quality attributes (performance, reliability, security, maintainability), enables early stakeholder communication, facilitates system analysis, and supports large-scale software reuse.",
              keyPoints: ["Decomposition into communicating subsystems", "Dictates non-functional quality attributes", "Enables stakeholder communication"]
            },
            {
              id: "ex-q8-b",
              label: "b",
              marks: 6,
              question: "Describe the Model-View-Controller (MVC) architectural pattern. [6 marks]",
              answer: `The **Model-View-Controller (MVC)** architectural pattern decouples user interface presentation from core domain business logic and data storage:
- **Model:** Encapsulates application data state, persistence schemas, and core domain business logic.
- **View:** Defines and renders presentation layouts and graphical user interfaces for users.
- **Controller:** Interprets user inputs (clicks, keypresses, HTTP requests), modifies Model state, and selects appropriate Views to display.

**Benefit:** Multiple divergent views (e.g. desktop web, mobile view, spreadsheet export) can operate simultaneously on the same Model without code duplication.`,
              keyPoints: ["Model: data & business logic", "View: presentation & UI", "Controller: user input handling", "Decouples presentation from data"]
            },
            {
              id: "ex-q8-c",
              label: "c",
              marks: 6,
              question: "Compare Layered and Client-Server architectural patterns. [6 marks]",
              answer: `| Dimension | Layered Architecture | Client-Server Architecture |
| :--- | :--- | :--- |
| **Organization** | Decomposed into hierarchical tiers (UI, Logic, DAL, DB). | Decomposed into service-delivering Servers and consuming Clients. |
| **Interaction** | Each layer relies only on the layer beneath it. | Distributed clients make network requests to servers over protocols. |
| **Primary Strength** | Separation of concerns; whole layers can be replaced if interface stays stable. | Distribution of workloads across separate network hosts; shared database access. |
| **Limitation** | Performance overhead passing through intermediate layers. | Server can become a single point of failure and network bottleneck. |`,
              keyPoints: ["Layered: hierarchical tiers, local decoupling", "Client-Server: distributed clients querying centralized servers"]
            },
            {
              id: "ex-q8-d",
              label: "d",
              marks: 4,
              question: "Draw a component diagram for a simple three-tier software system. [4 marks]",
              answer: `### Component Diagram — Three-Tier Architecture

\`\`\`mermaid
flowchart LR
  UI["«component»<br/>User Interface<br/>(Client Browser)"] -->|"HTTP / JSON"| BIZ["«component»<br/>Business Logic<br/>(Application Server)"]
  BIZ -->|"SQL / JDBC"| DATA["«component»<br/>Data Access & Storage<br/>(Database Server)"]
\`\`\`

The User Interface component invokes services on the Business Logic component, which in turn queries the Data Access & Storage component.`,
              keyPoints: ["Three-tier component diagram: UI -> Business Logic -> Data Access"]
            }
          ]
        }
      ]
    },
    {
      id: "section-d-reference",
      name: "Section D: Quick References, Case Studies & Ethical Principles",
      instructions: "High-yield summaries of UML symbols, Sommerville case studies, reliability formulas, and ACM/IEEE ethics.",
      compulsory: false,
      questions: [
        {
          id: "ref-summary",
          number: "Reference Guide",
          title: "UML Symbols, Case Studies, Formulas & ACM/IEEE Ethics",
          marks: 0,
          subQuestions: [
            {
              id: "ref-sub-1",
              label: "1",
              marks: 0,
              question: "Summarize the 4 core Sommerville Case Studies (Agate Ltd, FoodCo Ltd, Mentcare, and SCHS).",
              answer: `### 1. Agate Ltd (Campaign Management)
- **Domain:** Advertising Agency in Birmingham, UK.
- **Key Entities:** Client, Campaign, Advert, StaffMember, Grade, GradeRate, ConceptNote.
- **Core Workflows:** Add client, commission campaign, assign staff with hourly grade rates, verify budget vs advert costs, mark completed, record payment.

### 2. FoodCo Ltd (Factory Production Costing)
- **Domain:** Food Processing & Packaging Plant in East Anglia, UK.
- **Key Entities:** ProductionLine, ProductionRun, Operative, Supervisor, Product, DailyProductionRecord.
- **Core Workflows:** Allocate factory staff to lines, record employee arrival/departure, monitor line breakdowns, compute actual vs planned product costs.

### 3. Mentcare (Psychiatric Patient Information)
- **Domain:** Mental health clinic patient records and safety monitoring.
- **Key Concerns:** Extreme confidentiality, 24/7 availability, safety alerts for suicidal patients, regulatory reporting.

### 4. Smart Campus Healthcare System (SCHS)
- **Domain:** University of Zambia student medical clinic.
- **Actors:** Student, Receptionist, Doctor, Pharmacist, Administrator.
- **External Integrations:** University SIS Database, NHIMA National Health Insurance, Mobile Money Payment Gateway, SMS/Email Alert Gateway.`,
              keyPoints: ["Agate: Advertising campaigns", "FoodCo: Food manufacturing costing", "Mentcare: Mental healthcare safety", "SCHS: UNZA campus clinic"]
            },
            {
              id: "ref-sub-2",
              label: "2",
              marks: 0,
              question: "List key reliability formulas and metrics (POFOD, ROCOF, MTTF, Availability, Cyclomatic Complexity, Function Points).",
              answer: `### Key Formulas & Metrics

| Metric | Formula / Description | Interpretation |
| :--- | :--- | :--- |
| **POFOD** | Probability of Failure on Demand | Likelihood that a request will trigger system failure (e.g. 0.001 = 1 failure per 1,000 requests). Used in safety-critical systems. |
| **ROCOF** | Rate of Occurrence of Failures | Number of failures observed per operational time unit (e.g. 2 failures per 100 hours). Used for continuous systems. |
| **MTTF** | Mean Time To Failure = 1 / ROCOF | Average elapsed operating time between successive system failures. |
| **Availability** | $\\text{Availability} = \\frac{\\text{Uptime}}{\\text{Uptime} + \\text{Downtime}}$ | Ratio of time the system is delivered and ready for use. 99.9% = "Three Nines". |
| **Cyclomatic Complexity** | $V(G) = E - N + 2 = P + 1$ | Upper bound on linearly independent basis execution paths (McCabe). $E$ = edges, $N$ = nodes, $P$ = predicate nodes. |
| **Function Points (FP)** | Weighted sum of inputs, outputs, inquiries, files, interfaces | Technology-independent software size estimation metric. |`,
              keyPoints: ["POFOD, ROCOF, MTTF", "Availability ratio", "Cyclomatic Complexity V(G) = E - N + 2", "Function Points"]
            },
            {
              id: "ref-sub-3",
              label: "3",
              marks: 0,
              question: "State the eight principles of the ACM/IEEE Software Engineering Code of Ethics.",
              answer: `### ACM/IEEE Code of Ethics — Eight Principles

1. **PUBLIC:** Software engineers shall act consistently with the public interest, safeguarding health, safety, and welfare.
2. **CLIENT AND EMPLOYER:** Software engineers shall act in a manner that is in the best interests of their client and employer, consistent with the public interest.
3. **PRODUCT:** Software engineers shall ensure that their products and related modifications meet the highest professional standards possible.
4. **JUDGMENT:** Software engineers shall maintain integrity and independence in their professional judgment.
5. **MANAGEMENT:** Software engineering managers and leaders shall subscribe to and promote an ethical approach to the management of software development and maintenance.
6. **PROFESSION:** Software engineers shall advance the integrity and reputation of the profession consistent with the public interest.
7. **COLLEAGUES:** Software engineers shall be fair to and supportive of their colleagues.
8. **SELF:** Software engineers shall participate in lifelong learning regarding the practice of their profession and promote an ethical approach to software practice.`,
              keyPoints: ["1. Public", "2. Client & Employer", "3. Product", "4. Judgment", "5. Management", "6. Profession", "7. Colleagues", "8. Self"]
            }
          ]
        }
      ]
    }
  ]
};
