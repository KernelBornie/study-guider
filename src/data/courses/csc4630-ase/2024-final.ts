import { Paper } from "@/types";

export const csc4630_2024Final: Paper = {
  id: "csc4630-2024-final",
  slug: "2024-final",
  title: "2024 Final Examination",
  year: 2024,
  duration: "3 Hours",
  totalMarks: 100,
  paperType: "Final Exam",
  sections: [
    {
      id: "section-a",
      name: "Section A: Compulsory",
      instructions: "Answer ALL questions in this section.",
      compulsory: true,
      questions: [
        {
          id: "ase-q1",
          number: "Question 1",
          title: "Goal-Oriented Requirements Engineering (GORE)",
          marks: 25,
          subQuestions: [
            {
              id: "ase-q1-1",
              label: "1a",
              marks: 10,
              question: "Explain Goal-Oriented Requirements Engineering (GORE) and discuss how it fundamentally differs from traditional requirements engineering approaches.",
              answer: "**Goal-Oriented Requirements Engineering (GORE)** is an elicitation and modeling framework that treats stakeholder objectives ('goals') as first-class citizens rather than immediately focusing on functional specifications and features.\n\n### Fundamental Differences:\n- **Why vs. What:** Traditional RE begins by asking *'What should the system do?'* (features), often producing premature solutions. GORE begins by inquiring *'Why is this system needed?'* (underlying stakeholder intentions).\n- **AND/OR Goal Refinement:** Higher-level strategic objectives are systematically decomposed into sub-goals using AND-refinements (all sub-goals required) and OR-refinements (representing design alternatives).\n- **Conflict & Obstacle Resolution:** GORE explicitly detects conflicting stakeholder goals and models anti-goals (threats, obstacles) to derive robust defensive requirements.\n- **Traceability & Completeness:** Provides bidirectional traceability from enterprise-level business goals directly down to operational software requirements assigned to software agents."
            },
            {
              id: "ase-q1-2",
              label: "1b",
              marks: 15,
              question: "Using the KAOS (Knowledge Acquisition in Automated Specification) methodology, illustrate how a goal tree resolves conflicts between 'System Security' and 'User Usability'.",
              answer: "### KAOS Conflict Analysis Framework:\n1. **High-Level Strategic Goals:**\n   - Goal 1: *Achieve [Sensitive Data Confidentiality]* (Security requirement)\n   - Goal 2: *Achieve [Seamless One-Click User Authentication]* (Usability requirement)\n2. **Obstacle / Conflict Boundary:**\n   - Strict multi-factor authentication (MFA) on every screen satisfies Goal 1 but violates Goal 2 (high cognitive friction).\n   - Complete passwordless bypass satisfies Goal 2 but risks credential exploitation (violating Goal 1).\n3. **OR-Refinement & Conflict Resolution:**\n   - The conflict is resolved through an OR-decomposition introducing **Risk-Based Adaptive Authentication**:\n     - *Branch A (Low-Risk Session / Known Device):* Passive biometric or single-step authentication.\n     - *Branch B (High-Risk Session / Unknown IP / High-Value Transfer):* Prompt step-up MFA and cryptographic verification.\n   - Both parent goals are satisfied under bounded operational contexts."
            }
          ]
        },
        {
          id: "ase-q2",
          number: "Question 2",
          title: "GRASP Principles & Responsibility-Driven Design",
          marks: 25,
          subQuestions: [
            {
              id: "ase-q2-1",
              label: "2a",
              marks: 15,
              question: "Describe the core GRASP (General Responsibility Assignment Software Patterns) principles: Information Expert, Creator, Low Coupling, High Cohesion, and Controller.",
              answer: "- **Information Expert:** Assign a responsibility to the class that possesses the information needed to fulfill it. (e.g., `Sale` calculates total because it contains `SalesLineItem` records).\n- **Creator:** Class B should be responsible for creating an instance of Class A if B aggregates, contains, records, or closely uses instances of A.\n- **Controller:** Assign the responsibility for receiving or handling a system event message to a non-UI coordinator class representing the overall system or use-case workflow.\n- **Low Coupling:** Assign responsibilities so that dependency relationships between modules remain low, maximizing maintainability and testability.\n- **High Cohesion:** Assign responsibilities such that the duties of a class are strongly related, focused, and manageable, preventing bloated 'God classes'."
            },
            {
              id: "ase-q2-2",
              label: "2b",
              marks: 10,
              question: "Differentiate between a Facade Controller and a Use-Case Controller. When should each be chosen?",
              answer: "- **Facade Controller:** A single handler class representing the entire root system or subsystem (e.g., `RegisterController` or `HospitalSystemHandler`). Best for small, straightforward systems with few system operations.\n- **Use-Case Controller:** A dedicated controller class per business use case (e.g., `ProcessSaleHandler`, `RegisterStudentHandler`). Best for medium-to-large applications to prevent the controller from becoming bloated with too many unrelated event operations (protecting High Cohesion)."
            }
          ]
        }
      ]
    },
    {
      id: "section-b",
      name: "Section B: Architectural Patterns & Design",
      instructions: "Answer any TWO (2) questions in this section.",
      compulsory: false,
      questions: [
        {
          id: "ase-q3",
          number: "Question 3",
          title: "GoF Design Patterns: Creational, Structural & Behavioral",
          marks: 25,
          subQuestions: [
            {
              id: "ase-q3-1",
              label: "3a",
              marks: 12,
              question: "Compare and contrast the Abstract Factory and Factory Method patterns in terms of intent, structure, and extensibility.",
              answer: "- **Intent:**\n  - *Factory Method:* Uses inheritance to defer the instantiation of a single product to subclasses.\n  - *Abstract Factory:* Uses object composition to create whole families of related or dependent objects without specifying their concrete classes.\n- **Structure:**\n  - *Factory Method:* A single creator interface/abstract class with `createProduct()` method overridden by concrete creators.\n  - *Abstract Factory:* An interface declaring multiple factory methods (`createButton()`, `createWindow()`), implemented by concrete factories (e.g., `MacFactory`, `WindowsFactory`).\n- **Extensibility:**\n  - Adding a new product family in Abstract Factory is easy (create a new concrete factory).\n  - Adding a new product type to existing families is difficult because the Abstract Factory interface must be altered."
            },
            {
              id: "ase-q3-2",
              label: "3b",
              marks: 13,
              question: "Explain the Strategy Pattern vs State Pattern. Both share similar class diagrams; what distinguishes their runtime behavior and intent?",
              answer: "- **Intent:**\n  - *Strategy:* Configures a client object with an interchangeable algorithm or business rule chosen externally by the client (e.g., payment method: Card vs. Mobile Money).\n  - *State:* Allows an object to alter its behavior when its internal state changes; from the client's perspective, the object appears to change its class (e.g., Document: Draft → UnderReview → Published).\n- **Runtime Transitions:**\n  - In Strategy, the strategy is typically injected once and rarely switches on its own during execution.\n  - In State, state objects frequently trigger transitions to other concrete state objects based on contextual events."
            }
          ]
        },
        {
          id: "ase-q4",
          number: "Question 4",
          title: "Software Architecture & Microservices Tactics",
          marks: 25,
          subQuestions: [
            {
              id: "ase-q4-1",
              label: "4a",
              marks: 12,
              question: "Evaluate the trade-offs between Monolithic Architecture and Microservices Architecture regarding scalability, data consistency, and operational complexity.",
              answer: "### 1. Scalability:\n- *Monolith:* Scales vertically or requires replicating the entire application instance, consuming redundant resources.\n- *Microservices:* Scales horizontally and independently per bottleneck service (e.g., scale Payment service 10x during peak sales while Catalog stays at 1x).\n\n### 2. Data Consistency:\n- *Monolith:* ACID transactions with single database and foreign key constraints ensure immediate consistency.\n- *Microservices:* Database-per-service pattern forces eventual consistency; requires Saga patterns or distributed 2-Phase Commit (2PC), increasing edge-case failure modes.\n\n### 3. Operational Complexity:\n- *Monolith:* Simple CI/CD deployment pipeline, single log stream, straightforward local debugging.\n- *Microservices:* Requires container orchestration (Kubernetes), distributed tracing, API gateways, circuit breakers, and network mesh management."
            },
            {
              id: "ase-q4-2",
              label: "4b",
              marks: 13,
              question: "Define the Circuit Breaker pattern in distributed systems. Detail its three operational states and state transition triggers.",
              answer: "The **Circuit Breaker** pattern prevents cascading failures in distributed networks by intercepting remote service calls and detecting recurring timeouts or crashes.\n\n### Three States:\n1. **Closed (Normal Operation):** Calls pass through directly. The breaker counts failures within a sliding time window. If failure threshold (e.g., >50% failure rate) is exceeded, it trips to **Open**.\n2. **Open (Failing Fast):** Remote calls are immediately aborted without touching the downstream network. A fallback error or cached result is returned instantly to protect client threads. A cooldown timer starts.\n3. **Half-Open (Testing Recovery):** Once the cooldown expires, the breaker allows a trial batch of requests through. If successful, it resets to **Closed**. If any test call fails, it reverts immediately to **Open**."
            }
          ]
        }
      ]
    }
  ]
};
