import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DiagramPrototyping } from "@/components/DiagramPrototyping";
import { DiagramDefectRemoval } from "@/components/DiagramDefectRemoval";
import { DiagramFormalDesignReview } from "@/components/DiagramFormalDesignReview";
import { DiagramMcCallTree } from "@/components/DiagramMcCallTree";
import { DiagramErrorChain } from "@/components/DiagramErrorChain";
import { DiagramWhiteBoxTesting } from "@/components/DiagramWhiteBoxTesting";
import MermaidDiagram from "@/components/MermaidDiagram";
import { 
  ArrowLeft, 
  PenTool, 
  Layers, 
  Sparkles, 
  BookOpen, 
  Search, 
  GitBranch, 
  ShieldCheck, 
  Cpu, 
  Database,
  Compass
} from "lucide-react";

interface DiagramItem {
  id: string;
  course: "csc3600" | "csc4642" | "csc4630";
  topic: string;
  title: string;
  description: string;
  code?: string;
  component?: "mccall" | "defect" | "fdr" | "prototyping" | "error" | "whitebox";
  tags: string[];
}

const ALL_DIAGRAMS: DiagramItem[] = [
  // --- CSC 3600: UML & System Models (Topics 1 - 10) ---
  {
    id: "uml-t1-foodco",
    course: "csc3600",
    topic: "Topic 1",
    title: "Context Model — FoodCo Product Costing System",
    description: "Demarcates the system boundary between internal costing algorithms and external bureaus (Payroll, Mini-computer Accounting, Computer Bureau) and stakeholders (Production Planning, Finance Director, Factory Manager).",
    tags: ["Context Model", "FoodCo", "System Boundary", "External Systems"],
    code: `flowchart TD
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
  FOODCO <--> CB`,
  },
  {
    id: "uml-t1-schs",
    course: "csc3600",
    topic: "Topic 1",
    title: "Context Model — Smart Campus Healthcare System (SCHS)",
    description: "Clinic core engine interactions with campus students, clinical actors (Doctor, Pharmacist, Receptionist), University SIS, NHIMA national insurance, and mobile money payment gateways.",
    tags: ["Context Model", "SCHS", "UNZA Clinic", "NHIMA", "APIs"],
    code: `flowchart TD
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
  SCHS <--> PAY["💳 Mobile Money / Payment Gateway<br/>(Consultation & co-payments)"]`,
  },
  {
    id: "uml-t2-mentcare",
    course: "csc3600",
    topic: "Topic 2",
    title: "Use Case Diagram — Mentcare Psychiatric System",
    description: "Psychiatric clinical workflows partitioned by actor: Doctor consultations, prescription generation, patient registration, and emergency data transfers.",
    tags: ["Use Case", "Mentcare", "Psychiatry", "Actors"],
    code: `flowchart LR
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
  RECEPT --> UC7`,
  },
  {
    id: "uml-t2-include-extend",
    course: "csc3600",
    topic: "Topic 2",
    title: "Use Case Relationships — «include» vs «extend»",
    description: "Clear architectural distinction: «include» is mandatory and unconditional (base invokes inclusion); «extend» is optional and conditional on extension points.",
    tags: ["Use Case", "«include»", "«extend»", "Relationships"],
    code: `flowchart LR
  BASE1["Assign Staff to Campaign"] -->|«include»| REQ["Find Campaign Record"]
  OPT["Print Campaign Summary"] -.->|«extend»| BASE2["Check Campaign Budget"]`,
  },
  {
    id: "uml-t3-library",
    course: "csc3600",
    topic: "Topic 3",
    title: "Class Diagram — Library Management System",
    description: "Static structural model detailing Book, Member, Loan, and Librarian classes with 3 compartments (Name, Attributes, Methods) and exact multiplicity constraints.",
    tags: ["Class Diagram", "Associations", "Multiplicity", "Library"],
    code: `classDiagram
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
  Librarian "1" -- "*" Loan : oversees`,
  },
  {
    id: "uml-t3-agg-comp",
    course: "csc3600",
    topic: "Topic 3",
    title: "Class Diagram — Aggregation vs Composition",
    description: "Hollow diamond aggregation (weak 'has-a', independent life) vs filled diamond composition (strong 'has-a', lifetime coincident ownership).",
    tags: ["Class Diagram", "Aggregation", "Composition", "Relationships"],
    code: `classDiagram
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
  House "1" *-- "*" Room : Composition (lifetime bound)`,
  },
  {
    id: "uml-t4-atm",
    course: "csc3600",
    topic: "Topic 4",
    title: "Sequence Diagram — ATM Cash Withdrawal",
    description: "Time-ordered interaction sequence between Customer, ATM UI, CardReader, Account Database, and physical Cash Dispenser with step-by-step numbering.",
    tags: ["Sequence Diagram", "ATM", "Transactions", "Lifelines"],
    code: `sequenceDiagram
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
  ATM-->>Customer: Eject ATM Card`,
  },
  {
    id: "uml-t5-comm",
    course: "csc3600",
    topic: "Topic 5",
    title: "Communication Diagram — SCHS Appointment Booking",
    description: "Emphasizes object links and structural relationships rather than the time axis. Messages are numbered with invocation sequences (1:, 2:, 3:).",
    tags: ["Communication Diagram", "SCHS", "Collaboration", "Links"],
    code: `flowchart TD
  STU[":Student"]
  UI[":AppointmentUI"]
  CTRL[":AppointmentController"]
  DB[(":Database")]
  NOTIF["NotificationService"]

  STU -->|"1: login()<br/>4: bookAppointment()"| UI
  UI -->|"2: authenticate()<br/>5: createAppointment()"| CTRL
  CTRL -->|"3: verify()<br/>6: save()"| DB
  CTRL -->|"7: sendAlert()"| NOTIF`,
  },
  {
    id: "uml-t6-clinic",
    course: "csc3600",
    topic: "Topic 6",
    title: "Activity Diagram with Swimlanes — Clinic Patient Visit",
    description: "Multi-role workflow partitioning organizational responsibilities across Patient, Receptionist, Doctor, and Pharmacist swimlanes.",
    tags: ["Activity Diagram", "Swimlanes", "Healthcare", "Workflow"],
    code: `flowchart TD
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

  INV --> FINISH`,
  },
  {
    id: "uml-t7-campaign",
    course: "csc3600",
    topic: "Topic 7",
    title: "State Machine Diagram — Campaign Lifecycle (Agate Ltd)",
    description: "State transitions from Commissioned -> Active (Advert Prep, Scheduling, Running) -> Completed -> Paid with guard conditions.",
    tags: ["State Machine", "Agate", "Lifecycle", "States"],
    code: `stateDiagram-v2
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
  Paid --> [*]`,
  },
  {
    id: "uml-t8-components",
    course: "csc3600",
    topic: "Topic 8",
    title: "Component Diagram — SCHS Application Tier Architecture",
    description: "Modular software packaging showing Application Tier components, Service Data Access component, and Database storage tier.",
    tags: ["Component Diagram", "SCHS", "Architecture", "Interfaces"],
    code: `flowchart TD
  subgraph APP_TIER ["SCHS Application Tier"]
    PM["Patient Management Component"]
    AM["Appointment Management Component"]
    RXM["Prescription Management Component"]
  end

  subgraph INTEGRATION_TIER ["Service & Integration Tier"]
    DAC["Database Access Component (DAC)"]
    SEC["Security & Auth Component"]
  end

  subgraph STORAGE_TIER ["Database Tier"]
    DB[("Relational Patient Database")]
  end

  PM -->|requires| DAC
  AM -->|requires| DAC
  RXM -->|requires| DAC
  PM -->|requires| SEC
  AM -->|requires| SEC
  RXM -->|requires| SEC
  DAC --> DB`,
  },
  {
    id: "uml-t9-banking",
    course: "csc3600",
    topic: "Topic 9",
    title: "Deployment Diagram — Multi-Tier Internet Banking",
    description: "Physical hardware node topology connecting Customer device, DMZ Web Server, Spring Boot Application Cluster, and Clustered DB Node.",
    tags: ["Deployment", "Banking", "Hardware Topology", "Security"],
    code: `flowchart TD
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
  APP_NODE -->|"JDBC / SSL (Port 5432)"| DB_NODE`,
  },
  {
    id: "uml-t10-packages",
    course: "csc3600",
    topic: "Topic 10",
    title: "Package Diagram — Four-Layer Enterprise Architecture",
    description: "Modular package decomposition across Presentation (UI), Business Logic, Data Access (DAL), and Database storage tiers.",
    tags: ["Package Diagram", "Layered Architecture", "Decoupling"],
    code: `flowchart TD
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
  DATA_PKG -->|«import»| DB_PKG`,
  },

  // --- CSC 4642: Software Quality Assurance Exam Process Flows ---
  {
    id: "sqa-mccall",
    course: "csc4642",
    topic: "Question 1",
    title: "McCall's Quality Factor Tree (11 Factors + 5 Alternatives)",
    description: "Hierarchical tree diagram classifying software quality into Product Operation, Product Revision, and Product Transition with exact 2024 UNZA metrics.",
    tags: ["McCall Tree", "11 Factors", "Alternative Models", "Metrics"],
    component: "mccall"
  },
  {
    id: "sqa-error",
    course: "csc4642",
    topic: "Question 3",
    title: "Error → Fault (Defect) → Failure Causation Chain",
    description: "The foundational SQA causation chain with the Activation Gate, including the Meteoro-X firmware and Pharmacy cash register case studies.",
    tags: ["Error Chain", "Fault", "Failure", "Activation Gate", "Case Studies"],
    component: "error"
  },
  {
    id: "sqa-prototyping",
    course: "csc4642",
    topic: "Question 5a",
    title: "The Prototyping Process Model (Iterative SDLC)",
    description: "Closed-loop prototyping cycle: Requirements Determination -> Design -> Implementation -> Evaluation -> Acceptance Decision -> Full Production.",
    tags: ["Prototyping", "SDLC", "Iterative Loop", "Acceptance Gate"],
    component: "prototyping"
  },
  {
    id: "sqa-defect",
    course: "csc4642",
    topic: "Question 6",
    title: "Process-Oriented Defect Removal Plan (100 Defects)",
    description: "7-phase sequential defect filtering pipeline showing POD, PD, %FE, RD, and TRC calculations (1,777.66 total cost units) with Shift-Left comparison.",
    tags: ["Defect Removal", "Cost Model", "100 Defects", "%FE Filter", "Shift-Left"],
    component: "defect"
  },
  {
    id: "sqa-fdr",
    course: "csc4642",
    topic: "Question 7",
    title: "Formal Design Review (FDR) Swimlane Process Flow",
    description: "Multi-actor swimlane workflow across Development Team, Review Leader, and Review Team with Full Approval, Partial Approval, and Denial pathways.",
    tags: ["Design Review", "FDR", "Swimlanes", "3 Outcomes", "Follow-up"],
    component: "fdr"
  },
  {
    id: "sqa-whitebox",
    course: "csc4642",
    topic: "Question B6",
    title: "White Box Testing: Program Flow Graph & Cyclomatic Complexity",
    description: "Program Flow Graph (PFG), McCabe's 3 formulas (E-N+2, P+1, R = 6), and the 6 independent basis paths for the ITS Taximeter Module.",
    tags: ["White Box Testing", "PFG", "McCabe", "Cyclomatic Complexity", "ITS Taximeter"],
    component: "whitebox"
  },

  // --- CSC 4630: Advanced Software Engineering Models ---
  {
    id: "ase-kaos-gore",
    course: "csc4630",
    topic: "Question 1",
    title: "KAOS Goal-Oriented Requirements Engineering (GORE) Conflict Resolution Tree",
    description: "Goal decomposition resolving the conflict between 'Data Confidentiality' (Security) and 'One-Click Access' (Usability) through Risk-Based Adaptive Authentication.",
    tags: ["GORE", "KAOS", "Goal Trees", "Conflict Resolution", "Security vs Usability"],
    code: `flowchart TD
  ROOT["Strategic Business Goal:<br/>Empower Secure & Frictionless Digital Banking"] --> SG1["Achieve [Sensitive Data Confidentiality]"]
  ROOT --> SG2["Achieve [Seamless User Usability]"]

  SG1 --> CONFLICT{{"⚠️ Operational Conflict:<br/>High friction vs Zero protection"}}
  SG2 --> CONFLICT

  CONFLICT --> RESOLVE["OR-Refinement:<br/>Risk-Based Adaptive Authentication"]
  
  RESOLVE --> B1["Branch A (Low Risk Session / Known IP):<br/>Passkey / Biometric One-Click Sign-in"]
  RESOLVE --> B2["Branch B (High Risk / High-Value Wire):<br/>Step-Up Cryptographic Multi-Factor Auth"]

  classDef goal fill:#1e1b4b,stroke:#818cf8,stroke-width:2px,color:#ffffff;
  classDef conflict fill:#881337,stroke:#f43f5e,stroke-width:2px,color:#ffffff;
  classDef solution fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#ffffff;

  class ROOT,SG1,SG2 goal;
  class CONFLICT conflict;
  class RESOLVE,B1,B2 solution;`,
  },
  {
    id: "ase-grasp",
    course: "csc4630",
    topic: "Question 2",
    title: "GRASP Controller & Responsibility Assignment Workflow",
    description: "Decoupling presentation from domain logic: Use-Case Controller coordination pattern preserving High Cohesion and Low Coupling.",
    tags: ["GRASP", "Controller", "Information Expert", "High Cohesion", "Low Coupling"],
    code: `flowchart TD
  UI["UI / Presentation Boundary<br/>(:ProcessSaleView)"] -->|"1: submitOrder(cartId)"| CTRL["Use-Case Controller<br/>(:ProcessSaleHandler)"]
  
  CTRL -->|"2: calculateTotal()"| SALE["Information Expert<br/>(:Sale)"]
  SALE -->|"3: getLinePrice()"| ITEM["Line Items<br/>(:SalesLineItem)"]
  
  CTRL -->|"4: processPayment(amt)"| PAY["Payment Gateway Adapter<br/>(:PaymentService)"]
  CTRL -->|"5: save()"| REPO["Persistence Repository<br/>(:SaleRepository)"]

  classDef ui fill:#022c22,stroke:#10b981,stroke-width:2px,color:#ffffff;
  classDef ctrl fill:#312e81,stroke:#6366f1,stroke-width:2px,color:#ffffff;
  classDef domain fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#ffffff;

  class UI ui;
  class CTRL ctrl;
  class SALE,ITEM,PAY,REPO domain;`,
  },
  {
    id: "ase-gof-patterns",
    course: "csc4630",
    topic: "Question 3",
    title: "GoF Strategy Pattern vs State Pattern Architecture",
    description: "Architectural comparison: Strategy injects interchangeable algorithms externally; State changes class behavior dynamically as internal state transitions.",
    tags: ["Design Patterns", "Strategy Pattern", "State Pattern", "GoF"],
    code: `classDiagram
  class OrderContext {
    -PaymentStrategy paymentStrategy
    +setPaymentStrategy(PaymentStrategy s)
    +checkout(double amount)
  }

  class PaymentStrategy {
    <<interface>>
    +pay(double amount) bool
  }

  class MobileMoneyStrategy {
    -String phoneNumber
    +pay(double amount) bool
  }

  class CreditCardStrategy {
    -String cardNumber
    +pay(double amount) bool
  }

  OrderContext o-- PaymentStrategy : uses strategy
  PaymentStrategy <|.. MobileMoneyStrategy : implements
  PaymentStrategy <|.. CreditCardStrategy : implements`,
  }
];

export default function DiagramsPage() {
  const [activeCourseTab, setActiveCourseTab] = useState<"all" | "csc3600" | "csc4642" | "csc4630">("csc3600");
  const [selectedDiagramId, setSelectedDiagramId] = useState<string>("uml-t1-foodco");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDiagrams = ALL_DIAGRAMS.filter((item) => {
    const matchesCourse = activeCourseTab === "all" || item.course === activeCourseTab;
    if (!matchesCourse) return false;
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.topic.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  const activeDiagram = ALL_DIAGRAMS.find((x) => x.id === selectedDiagramId) || filteredDiagrams[0] || ALL_DIAGRAMS[0];

  const renderActiveComponent = (componentName?: string) => {
    switch (componentName) {
      case "mccall":
        return <DiagramMcCallTree />;
      case "defect":
        return <DiagramDefectRemoval />;
      case "fdr":
        return <DiagramFormalDesignReview />;
      case "prototyping":
        return <DiagramPrototyping />;
      case "error":
        return <DiagramErrorChain />;
      case "whitebox":
        return <DiagramWhiteBoxTesting />;
      default:
        return null;
    }
  };

  const getCourseBadge = (course: string) => {
    switch (course) {
      case "csc3600":
        return { label: "CSC 3600", full: "Software Engineering", color: "bg-blue-600 text-white" };
      case "csc4642":
        return { label: "CSC 4642", full: "Software Quality Assurance", color: "bg-purple-600 text-white" };
      case "csc4630":
        return { label: "CSC 4630", full: "Advanced Software Engineering", color: "bg-emerald-600 text-white" };
      default:
        return { label: "General", full: "Computer Science", color: "bg-slate-700 text-white" };
    }
  };

  const activeBadge = getCourseBadge(activeDiagram.course);

  return (
    <div className="space-y-8 pb-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400 border-b border-slate-800 pb-3">
        <Link to="/" className="hover:text-white transition-colors">Courses</Link>
        <span>/</span>
        <span className="text-slate-200 font-semibold">Visual Diagrams Gallery</span>
      </div>

      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-5 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1.5 font-mono">
              <Compass className="w-3.5 h-3.5 text-blue-400" />
              UNZA Multi-Course Architectural Diagrams & Process Models
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Interactive Architecture, UML & Process Flow Diagrams
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
              Crystal-clear vector diagrams, zoomable canvases, high-resolution PNG/SVG exports, and verified mark allocations for UNZA Software Engineering (CSC 3600), Software Quality Assurance (CSC 4642), and Advanced Software Engineering (CSC 4630).
            </p>
          </div>

          {/* Course Gallery Switcher */}
          <div className="flex flex-wrap bg-slate-950 p-1.5 rounded-xl border border-slate-800 shadow-inner gap-1">
            <button
              onClick={() => {
                setActiveCourseTab("csc3600");
                const first = ALL_DIAGRAMS.find(d => d.course === "csc3600");
                if (first) setSelectedDiagramId(first.id);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCourseTab === "csc3600"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>CSC 3600: UML Models</span>
            </button>
            <button
              onClick={() => {
                setActiveCourseTab("csc4642");
                const first = ALL_DIAGRAMS.find(d => d.course === "csc4642");
                if (first) setSelectedDiagramId(first.id);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCourseTab === "csc4642"
                  ? "bg-purple-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>CSC 4642: SQA Process Flows</span>
            </button>
            <button
              onClick={() => {
                setActiveCourseTab("csc4630");
                const first = ALL_DIAGRAMS.find(d => d.course === "csc4630");
                if (first) setSelectedDiagramId(first.id);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCourseTab === "csc4630"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>CSC 4630: Advanced SE</span>
            </button>
          </div>
        </div>

        {/* Quick Selector Strip & Search Bar */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto overflow-x-auto pb-1">
            {filteredDiagrams.map((u) => (
              <button
                key={u.id}
                onClick={() => setSelectedDiagramId(u.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border whitespace-nowrap ${
                  selectedDiagramId === u.id
                    ? "bg-blue-600 border-blue-400 text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                }`}
              >
                <span className="text-[10px] text-blue-300 font-mono mr-1">{u.topic}:</span>
                <span>{u.title.split("—")[0].trim()}</span>
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter diagrams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 font-mono"
            />
          </div>
        </div>
      </div>

      {/* Main Interactive Diagram Display */}
      {activeDiagram.component ? (
        <div className="space-y-4">
          {renderActiveComponent(activeDiagram.component)}
        </div>
      ) : activeDiagram.code ? (
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-mono text-blue-400 font-semibold flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${activeBadge.color}`}>
                    {activeBadge.label}
                  </span>
                  <span>· {activeDiagram.topic} · {activeBadge.full}</span>
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">{activeDiagram.title}</h2>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeDiagram.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded-full bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeDiagram.description}
            </p>

            {/* Rendered Live Diagram */}
            <MermaidDiagram code={activeDiagram.code} title={activeDiagram.title} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
