import { Paper } from "@/types";

export const csc4630_2026MoodleQuiz: Paper = {
  id: "csc4630-2026-moodle-quiz",
  slug: "moodle-ase-quiz-2026",
  title: "CSC 4630 Moodle Assessment Quiz (60 Questions with Verified Answers)",
  year: 2026,
  duration: "1 Hour 30 Mins",
  totalMarks: 60,
  paperType: "Quiz",
  venue: "UNZA Moodle Online Examination",
  sections: [
    {
      id: "part-1",
      name: "Part 1: Requirements Engineering, Use Cases & i* Modelling (Q1–Q20)",
      instructions: "Questions 1 through 20 covering functional vs non-functional requirements, i* goal models, essential use cases, and domain concepts.",
      compulsory: true,
      questions: [
        {
          id: "m-q1",
          number: "Question 1",
          title: "Requirements Classification (Functional vs Non-Functional)",
          marks: 1,
          subQuestions: [
            {
              id: "m-q1-1",
              label: "Q1",
              marks: 1,
              question: "Match each requirement statement to its correct classification:\n1. The system shall be available 99.9% of the time excluding scheduled maintenance.\n2. The system shall support at least 500 concurrent users without degraded response time.\n3. The system shall allow a nurse to record a patient's vital signs.\n4. The system shall encrypt all patient records at rest using AES-256.",
              answer: "### Correct Classifications:\n- **1. Available 99.9% of the time:** → **Non-functional (reliability / availability)**\n- **2. Support 500 concurrent users:** → **Non-functional (performance / scalability)**\n- **3. Allow a nurse to record vital signs:** → **Functional**\n- **4. Encrypt patient records at rest using AES-256:** → **Non-functional (security)**\n\n*Rationale:* Functional requirements specify specific behaviours, actions, and services the system must execute. Non-functional requirements specify quality constraints, operational thresholds, and security properties.",
              keyPoints: ["Availability = Non-functional", "Concurrency = Non-functional", "Record vitals = Functional", "AES-256 Encryption = Non-functional"]
            }
          ]
        },
        {
          id: "m-q2",
          number: "Question 2",
          title: "Multiplicity in Design Class Diagrams",
          marks: 1,
          subQuestions: [
            {
              id: "m-q2-1",
              label: "Q2",
              marks: 1,
              question: "A design class diagram shows Sale \"1\" -- \"1..*\" SalesLineItem. What does this multiplicity tell you?\na. A Sale can exist with zero SalesLineItems\nb. SalesLineItems can be shared across multiple Sales simultaneously\nc. Each Sale must have at least one SalesLineItem, and each SalesLineItem belongs to exactly one Sale\nd. The multiplicity has no bearing on referential integrity",
              answer: "**Correct Answer: c**\n\n*Explanation:* The multiplicity `1..*` on the `SalesLineItem` end indicates that a `Sale` must contain one or more line items (cannot be empty). The `1` on the `Sale` end indicates that each `SalesLineItem` is linked to exactly one parent `Sale` instance.",
              keyPoints: ["Each Sale must have at least one SalesLineItem", "Each SalesLineItem belongs to exactly one Sale"]
            }
          ]
        },
        {
          id: "m-q3",
          number: "Question 3",
          title: "Sequence Diagram Message Types",
          marks: 1,
          subQuestions: [
            {
              id: "m-q3-1",
              label: "Q3",
              marks: 1,
              question: "In a sequence diagram, a message arrow pointing to the TOP of a newly appearing object's lifeline (rather than to an existing activation bar) typically represents:\na. A create message - the message that instantiates a new object\nb. A return value being passed back\nc. A synchronous call to an existing object\nd. A destroy message",
              answer: "**Correct Answer: a**\n\n*Explanation:* In UML sequence diagrams, a `<<create>>` message (or arrow pointing directly to the head of the object lifeline box) represents object instantiation at runtime.",
              keyPoints: ["Arrow to top of lifeline = Create / instantiation message"]
            }
          ]
        },
        {
          id: "m-q4",
          number: "Question 4",
          title: "i* Modelling: Softgoal Dependency",
          marks: 1,
          subQuestions: [
            {
              id: "m-q4-1",
              label: "Q4",
              marks: 1,
              question: "In an i* model, the Store Manager actor depends on the POS System to keep transaction processing \"reasonably responsive under load\" - there is no crisp success criterion. This is best modelled as a:\na. Goal dependency\nb. Task dependency\nc. Softgoal dependency\nd. Resource dependency",
              answer: "**Correct Answer: c**\n\n*Explanation:* In the i* (iStar) framework, a **Softgoal** represents a goal that has no sharp or crisp criteria for fulfillment, typically representing non-functional qualities (e.g. \"reasonably responsive\", \"user-friendly\").",
              keyPoints: ["No crisp success criterion = Softgoal dependency"]
            }
          ]
        },
        {
          id: "m-q5",
          number: "Question 5",
          title: "System Sequence Diagram (SSD) Elements",
          marks: 1,
          subQuestions: [
            {
              id: "m-q5-1",
              label: "Q5",
              marks: 1,
              question: "Match each SSD element to its correct description:\n1. Return value\n2. Actor lifeline\n3. System event\n4. System lifeline",
              answer: "### Correct Matches:\n- **Return value:** Data sent back from the system to the actor, shown as a dashed arrow.\n- **Actor lifeline:** The vertical line representing the external actor across the interaction.\n- **System event:** A message from an external actor that triggers the system to respond, e.g. `enterItem()`.\n- **System lifeline:** The single black-box lifeline representing the whole system, not individual objects.",
              keyPoints: ["Return value = dashed arrow", "Actor lifeline = vertical line for external actor", "System event = actor trigger message", "System lifeline = single black-box system"]
            }
          ]
        },
        {
          id: "m-q6",
          number: "Question 6",
          title: "Abstract Classes in UML Class Diagrams",
          marks: 1,
          subQuestions: [
            {
              id: "m-q6-1",
              label: "Q6",
              marks: 1,
              question: "In a UML class diagram, a class named \"Payment\" is written in italics, with concrete subclasses \"CashPayment\" and \"CreditCardPayment\" (not italicised) beneath it. This notation indicates that:\na. Payment has no attributes\nb. Payment is a deprecated class scheduled for removal\nc. Payment is an abstract class and cannot be instantiated directly - only its concrete subclasses can be instantiated\nd. Payment is an interface, not a class",
              answer: "**Correct Answer: c**\n\n*Explanation:* Under standard UML notation, an italicized class name indicates an **abstract class**. Abstract classes define common attributes and methods but cannot be instantiated directly without concrete subclasses.",
              keyPoints: ["Italicized class name in UML = Abstract class"]
            }
          ]
        },
        {
          id: "m-q7",
          number: "Question 7",
          title: "Essential vs Concrete Use Case Style",
          marks: 1,
          subQuestions: [
            {
              id: "m-q7-1",
              label: "Q7",
              marks: 1,
              question: "Which use case step is written in ESSENTIAL (technology-independent) style rather than concrete style?\na. Cashier scans the product's barcode using the laser scanner\nb. Cashier identifies the product to the system\nc. Cashier types the product SKU into the numeric keypad\nd. Cashier clicks the \"Add Item\" button on the touchscreen",
              answer: "**Correct Answer: b**\n\n*Explanation:* Essential use case style specifies user intent and system responsibilities without referencing specific GUI widgets, hardware peripherals (laser scanners, keypads), or technological mechanisms. \"Cashier identifies the product to the system\" is pure essential style.",
              keyPoints: ["Essential style focuses on intent without technology/GUI mechanics"]
            }
          ]
        },
        {
          id: "m-q8",
          number: "Question 8",
          title: "Domain Model Multiplicity Interpretation",
          marks: 1,
          subQuestions: [
            {
              id: "m-q8-1",
              label: "Q8",
              marks: 1,
              question: "A domain model shows Store \"1\" -- \"*\" Sale, meaning one Store is associated with many Sales. A student misreads this as \"one Sale belongs to many Stores.\" What is the correct interpretation of the multiplicity \"1\" on the Store end?\na. Each Sale is associated with exactly one Store\nb. Stores and Sales have no fixed relationship\nc. The \"1\" applies to the Sale class, not the Store class\nd. Each Store is associated with exactly one Sale",
              answer: "**Correct Answer: a**\n\n*Explanation:* In UML associations, multiplicity on the target end indicates how many instances of that target class relate to one instance of the opposite class. The `1` next to `Store` means: \"For any given `Sale`, it is associated with exactly one `Store`\".",
              keyPoints: ["Multiplicity at the end indicates instances related to the opposite class"]
            }
          ]
        },
        {
          id: "m-q9",
          number: "Question 9",
          title: "Conceptual Classes in Domain Models",
          marks: 1,
          subQuestions: [
            {
              id: "m-q9-1",
              label: "Q9",
              marks: 1,
              question: "Using the \"conceptual class category list\" approach, which of the following is the STRONGEST candidate for a domain model conceptual class in a retail POS system, as opposed to a design-only artefact?\na. CacheManager\nb. HttpRequestHandler\nc. Sale (a real-world business transaction)\nd. DatabaseConnectionPool",
              answer: "**Correct Answer: c**\n\n*Explanation:* Domain models represent real-world concepts in the problem domain, not software implementation artifacts. `Sale` represents an actual business event/transaction. `CacheManager`, `HttpRequestHandler`, and `DatabaseConnectionPool` are purely software design constructs.",
              keyPoints: ["Sale is a real-world business concept; others are software design artifacts"]
            }
          ]
        },
        {
          id: "m-q10",
          number: "Question 10",
          title: "Requirement Interdependencies",
          marks: 1,
          subQuestions: [
            {
              id: "m-q10-1",
              label: "Q10",
              marks: 1,
              question: "Requirement A: \"The system shall allow cash payments.\" Requirement B: \"The system shall reconcile the cash drawer at end of shift.\" B cannot be meaningfully implemented or tested unless A exists. This interdependency is best classified as:\na. Conflicts-with\nb. Duplicates\nc. Unrelated\nd. Requires / depends-on",
              answer: "**Correct Answer: d**\n\n*Explanation:* When one requirement cannot function, be implemented, or be tested without another requirement being in place, it has a **Requires / depends-on** structural relationship.",
              keyPoints: ["B depends on A = Requires / depends-on relationship"]
            }
          ]
        },
        {
          id: "m-q11",
          number: "Question 11",
          title: "Branching Logic in Operation Contracts",
          marks: 1,
          subQuestions: [
            {
              id: "m-q11-1",
              label: "Q11",
              marks: 1,
              question: "Given a \"Process Sale\" use case with the extension \"if payment is declined, display an error and remain on the payment screen\", where should this branching logic be captured in the operation contract for makePayment()?\na. It should not be captured in the contract at all, only in the SSD\nb. It belongs only in the domain model as a new association\nc. It should be captured as a precondition on enterItem()\nd. As an alternative postcondition (or a separate contract) describing the state when the payment fails, distinct from the successful-payment postcondition",
              answer: "**Correct Answer: d**\n\n*Explanation:* In Craig Larman's operation contract methodology, conditional execution and alternative outcomes are documented as alternative postconditions or distinct contracts covering failure states.",
              keyPoints: ["Alternative postconditions capture branching outcomes in operation contracts"]
            }
          ]
        },
        {
          id: "m-q12",
          number: "Question 12",
          title: "Identifying Ambiguous Requirements",
          marks: 1,
          subQuestions: [
            {
              id: "m-q12-1",
              label: "Q12",
              marks: 1,
              question: "Which of the following requirement statements is the WEAKEST because it is untestable and ambiguous?\na. The system shall log every failed login attempt with a timestamp\nb. The system should be reasonably fast and easy for cashiers to use\nc. The system shall complete a checkout transaction in under 3 seconds for 95% of transactions\nd. The system shall reject a payment if the card is declined by the payment gateway",
              answer: "**Correct Answer: b**\n\n*Explanation:* Words like \"reasonably fast\" and \"easy to use\" lack verifiable, quantifiable metrics. A requirement must be measurable and testable to establish clear acceptance criteria.",
              keyPoints: ["Untestable/vague words like 'reasonably fast' make a requirement weak"]
            }
          ]
        },
        {
          id: "m-q13",
          number: "Question 13",
          title: "i* Modelling: Goal Dependency",
          marks: 1,
          subQuestions: [
            {
              id: "m-q13-1",
              label: "Q13",
              marks: 1,
              question: "In an i* model, a Cashier actor depends on the POS System actor to \"process the sale correctly\", with no fixed method specified for how it is achieved. What type of dependency is this?\na. Goal dependency\nb. Task dependency\nc. Softgoal dependency\nd. Resource dependency",
              answer: "**Correct Answer: a**\n\n*Explanation:* In i* (iStar), a **Goal Dependency** specifies a condition or state to be satisfied without dictating the exact operational procedure or task for achieving it.",
              keyPoints: ["State to be achieved without fixed method = Goal dependency"]
            }
          ]
        },
        {
          id: "m-q14",
          number: "Question 14",
          title: "Common SSD Modelling Errors",
          marks: 1,
          subQuestions: [
            {
              id: "m-q14-1",
              label: "Q14",
              marks: 1,
              question: "A student draws an SSD that includes lifelines for \"Cashier\", \"POS System\", \"Sale\", and \"Payment\", with internal messages shown between Sale and Payment. What is the error?\na. SSDs cannot include a Cashier actor\nb. SSDs cannot show return messages\nc. An SSD should only show the external actor and the system as a single black-box lifeline - it should not expose internal object collaborations like Sale-to-Payment\nd. SSDs must always include exactly three lifelines",
              answer: "**Correct Answer: c**\n\n*Explanation:* By definition, a System Sequence Diagram (SSD) treats the system as a **single black-box** entity `:System`. Internal domain/design classes (`Sale`, `Payment`) and internal object collaborations belong exclusively in design-level Sequence Diagrams, never in an SSD.",
              keyPoints: ["SSDs show external actors and system as a black box; no internal objects"]
            }
          ]
        },
        {
          id: "m-q15",
          number: "Question 15",
          title: "Conflicting Requirements Analysis",
          marks: 1,
          subQuestions: [
            {
              id: "m-q15-1",
              label: "Q15",
              marks: 1,
              question: "Requirement A: \"The system shall allow managers to override any price at the register with no approval step, for speed.\" Requirement B: \"All price overrides shall require a second manager's electronic approval before completing.\" These two requirements:\na. Are both non-functional requirements\nb. Are duplicates of the same requirement\nc. Conflict with each other and must be resolved with stakeholders before design\nd. Have a requires/depends-on relationship",
              answer: "**Correct Answer: c**\n\n*Explanation:* Requirement A mandates zero approval steps for overrides, while Requirement B mandates a mandatory second approval step. They are mutually exclusive contradictory requirements that must be reconciled during requirements engineering.",
              keyPoints: ["Directly contradictory requirements = Conflict to be resolved"]
            }
          ]
        },
        {
          id: "m-q16",
          number: "Question 16",
          title: "Sequence Diagram Combined Fragment: alt",
          marks: 1,
          subQuestions: [
            {
              id: "m-q16-1",
              label: "Q16",
              marks: 1,
              question: "A sequence diagram needs to show that EITHER a discount is applied OR a full-price charge is applied, depending on a condition - exactly one of two mutually exclusive branches always executes. The correct combined fragment to use is:\na. loop, since one branch must repeat\nb. alt (alternative), with two operands separated by a dashed line, each with its own guard condition\nc. par (parallel), since both could happen at once\nd. opt (optional), since only one branch is optional",
              answer: "**Correct Answer: b**\n\n*Explanation:* The `alt` (alternative) fragment represents mutually exclusive choice (`if-then-else`). The operands are separated by a horizontal dashed line with guard conditions `[condition]` and `[else]`.",
              keyPoints: ["alt fragment represents mutually exclusive conditional branches"]
            }
          ]
        },
        {
          id: "m-q17",
          number: "Question 17",
          title: "Requirements Format for Compliance",
          marks: 1,
          subQuestions: [
            {
              id: "m-q17-1",
              label: "Q17",
              marks: 1,
              question: "A government agency project requires formally reviewed, traceable, detailed documentation for audit and contractual compliance. Which requirements technique is generally more appropriate than lightweight user stories in this context?\na. One-line user stories only\nb. Informal sticky notes with no structure\nc. Verbal agreements with no written record\nd. Fully dressed (detailed) use cases",
              answer: "**Correct Answer: d**\n\n*Explanation:* Fully dressed use cases provide formal pre/postconditions, main success scenarios, detailed extension branches, and stakeholder interest lists needed for contractual sign-offs and regulatory auditing.",
              keyPoints: ["Fully dressed use cases provide auditability and contractual traceability"]
            }
          ]
        },
        {
          id: "m-q18",
          number: "Question 18",
          title: "Requirements Elicitation & Decomposition",
          marks: 1,
          subQuestions: [
            {
              id: "m-q18-1",
              label: "Q18",
              marks: 1,
              question: "During elicitation, a stakeholder says: \"The system needs to be secure.\" As the requirements engineer, your best next step is to:\na. Write it into the SRS exactly as stated and move on\nb. Ask clarifying questions to decompose this into specific, testable security requirements (e.g. authentication method, encryption standard, audit logging)\nc. Assign it to the Controller class in the design model\nd. Convert it directly into an operation contract postcondition",
              answer: "**Correct Answer: b**\n\n*Explanation:* High-level vague stakeholder statements must be elicited and decomposed into precise, quantifiable, and testable sub-requirements (encryption algorithms, authentication thresholds, role-based permissions).",
              keyPoints: ["Decompose vague qualities into testable technical specifications"]
            }
          ]
        },
        {
          id: "m-q19",
          number: "Question 19",
          title: "FURPS+ Requirements Model",
          marks: 1,
          subQuestions: [
            {
              id: "m-q19-1",
              label: "Q19",
              marks: 1,
              question: "A requirement states: \"The point-of-sale system shall process a standard checkout transaction in under 3 seconds during peak hours.\" Which FURPS+ category does this belong to?\na. Usability\nb. Functionality\nc. Supportability\nd. Performance",
              answer: "**Correct Answer: d**\n\n*Explanation:* Under the FURPS+ taxonomy (Functionality, Usability, Reliability, Performance, Supportability), response times, throughput, and latency constraints belong directly under **Performance**.",
              keyPoints: ["Transaction response time under 3s = Performance"]
            }
          ]
        },
        {
          id: "m-q20",
          number: "Question 20",
          title: "Association Navigability in Class Diagrams",
          marks: 1,
          subQuestions: [
            {
              id: "m-q20-1",
              label: "Q20",
              marks: 1,
              question: "A class diagram shows an association between Sale and Store with an open arrowhead pointing FROM Sale TO Store, and no arrowhead on the Store-to-Sale direction. This notation indicates:\na. Sale can navigate to (reference) Store, but Store does not hold a direct reference back to Sale\nb. Store can navigate to Sale, but not the reverse\nc. The association is actually a generalisation, not a navigable link\nd. Navigation is possible in both directions equally",
              answer: "**Correct Answer: a**\n\n*Explanation:* An open arrowhead indicates **unidirectional navigability**. An arrow pointing from `Sale` to `Store` means `Sale` instances maintain a direct reference to their associated `Store`, while `Store` does not have a reference to navigate back to `Sale`.",
              keyPoints: ["Arrow from Sale to Store = Unidirectional navigability from Sale to Store"]
            }
          ]
        }
      ]
    },
    {
      id: "part-2",
      name: "Part 2: Interaction Diagrams, Larman Contracts & Prioritization (Q21–Q40)",
      instructions: "Questions 21 through 40 covering MoSCoW, sequence diagrams, operation contracts, i* goal trees, and class models.",
      compulsory: true,
      questions: [
        {
          id: "m-q21",
          number: "Question 21",
          title: "MoSCoW Scope Prioritization",
          marks: 1,
          subQuestions: [
            {
              id: "m-q21-1",
              label: "Q21",
              marks: 1,
              question: "A small agile team needs a fast, low-overhead way to negotiate scope for the next 2-week sprint with a client who is not analytically inclined. Which technique fits best?\na. Formal cognitive walkthrough\nb. Cost-value approach with weighted scoring matrices\nc. MoSCoW\nd. Full i* actor-dependency modelling",
              answer: "**Correct Answer: c**\n\n*Explanation:* MoSCoW (Must have, Should have, Could have, Won't have this time) is the premier lightweight, fast, stakeholder-accessible prioritization technique for agile sprint scope negotiation.",
              keyPoints: ["MoSCoW provides fast, low-overhead scope categorization"]
            }
          ]
        },
        {
          id: "m-q22",
          number: "Question 22",
          title: "Operation Contract Postcondition Validity",
          marks: 1,
          subQuestions: [
            {
              id: "m-q22-1",
              label: "Q22",
              marks: 1,
              question: "Which of the following is NOT a valid postcondition statement in an operation contract, according to Larman's conventions?\na. A Payment instance was created\nb. A SalesLineItem was associated with the Sale\nc. The Sale's isComplete attribute was set to true\nd. The system checks whether the item exists in the catalog",
              answer: "**Correct Answer: d**\n\n*Explanation:* In Craig Larman's operation contracts, postconditions describe **changes in the state of domain objects** (instances created/deleted, associations formed/broken, attributes modified). \"The system checks...\" describes procedural internal actions, not state changes.",
              keyPoints: ["Postconditions describe changes of state in past tense; procedural checks are invalid"]
            }
          ]
        },
        {
          id: "m-q23",
          number: "Question 23",
          title: "Generalization in Domain Models",
          marks: 1,
          subQuestions: [
            {
              id: "m-q23-1",
              label: "Q23",
              marks: 1,
              question: "A domain model shows \"CashPayment\" and \"CreditCardPayment\" both as subclasses of an abstract \"Payment\" conceptual class. This use of generalisation is appropriate mainly because:\na. Payment cannot be a conceptual class on its own\nb. both subclasses share common attributes/associations (amount, Sale) while differing in type-specific details, avoiding duplication\nc. subclasses are required for every domain model regardless of need\nd. it makes the diagram look more complete",
              answer: "**Correct Answer: b**\n\n*Explanation:* Generalization is justified when subclasses share common conceptual properties (e.g. `amount`, timestamp, association to `Sale`) while encapsulating distinct specialized attributes/behaviour (e.g. `cardNumber`, `authCode`).",
              keyPoints: ["Subclasses share common properties while specializing unique attributes"]
            }
          ]
        },
        {
          id: "m-q24",
          number: "Question 24",
          title: "Synchronous Calls in Sequence Diagrams",
          marks: 1,
          subQuestions: [
            {
              id: "m-q24-1",
              label: "Q24",
              marks: 1,
              question: "A sequence diagram shows Register calling processPayment() on PaymentGateway with a solid filled arrowhead, and Register's activation bar continues without any activity until a return message arrives. This indicates:\na. A synchronous call - Register is blocked waiting for PaymentGateway to finish and return control\nb. A self-message with no return\nc. An asynchronous call - Register continues other work immediately\nd. An error - synchronous calls cannot have activation bars",
              answer: "**Correct Answer: a**\n\n*Explanation:* In UML sequence diagrams, a solid filled arrowhead denotes a **synchronous call**, where the caller pauses/blocks execution until the called operation completes and yields control.",
              keyPoints: ["Solid filled arrowhead = Synchronous blocking call"]
            }
          ]
        },
        {
          id: "m-q25",
          number: "Question 25",
          title: "i* Strategic Rationale: AND-Decomposition",
          marks: 1,
          subQuestions: [
            {
              id: "m-q25-1",
              label: "Q25",
              marks: 1,
              question: "In an i* Strategic Rationale model, a top-level goal \"Increase Sales Revenue\" is broken down into sub-goals \"Reduce Checkout Time\" AND \"Increase Basket Size\", where BOTH sub-goals must be satisfied to satisfy the parent goal. This decomposition link type is:\na. AND-decomposition\nb. Means-end link\nc. Contribution link\nd. OR-decomposition",
              answer: "**Correct Answer: a**\n\n*Explanation:* An **AND-decomposition** link requires all connected sub-elements to be fulfilled to achieve the higher-level parent goal.",
              keyPoints: ["Both sub-goals required = AND-decomposition"]
            }
          ]
        },
        {
          id: "m-q26",
          number: "Question 26",
          title: "Interaction Diagrams: Sequence vs Communication",
          marks: 1,
          subQuestions: [
            {
              id: "m-q26-1",
              label: "Q26",
              marks: 1,
              question: "You need to document a payment protocol where the EXACT ORDER and TIMING of messages between the POS system and a mobile money gateway is critical for the marking scheme and for debugging timeout issues. Which interaction diagram is the better choice?\na. Communication diagram, because timing is shown more clearly through numbered links\nb. Sequence diagram, because it makes time-ordering and duration explicit via lifelines and activation bars\nc. Domain model, because it shows conceptual classes\nd. Class diagram, because it shows the protocol structure",
              answer: "**Correct Answer: b**\n\n*Explanation:* Sequence diagrams place time on the vertical axis, making temporal sequence, message ordering, concurrency, and lifelines explicit and intuitive.",
              keyPoints: ["Sequence diagrams emphasize explicit time-ordering along vertical lifelines"]
            }
          ]
        },
        {
          id: "m-q27",
          number: "Question 27",
          title: "Challenging MoSCoW Prioritization",
          marks: 1,
          subQuestions: [
            {
              id: "m-q27-1",
              label: "Q27",
              marks: 1,
              question: "During MoSCoW prioritisation, a stakeholder insists a \"nice to have\" reporting dashboard should be classified as \"Must have\" even though the system is fully usable without it. As requirements engineer, the correct challenge to raise is:\na. Reclassify it as a non-functional requirement instead\nb. Remove it from the requirements list entirely\nc. Immediately agree, since stakeholders always know best\nd. Ask whether the system can ship and deliver core business value without this feature - if yes, it is not a true Must-have",
              answer: "**Correct Answer: d**\n\n*Explanation:* The acid test for a \"Must have\" requirement is: *\"If this feature is not delivered, is the entire system illegal, useless, or impossible to launch?\"* If the system can ship without it, it is a Should or Could have.",
              keyPoints: ["Must-have test: Can the system ship and deliver core value without it?"]
            }
          ]
        },
        {
          id: "m-q28",
          number: "Question 28",
          title: "Translating Use Cases into Sequence Messages",
          marks: 1,
          subQuestions: [
            {
              id: "m-q28-1",
              label: "Q28",
              marks: 1,
              question: "Given the use case step \"System records the sale and displays the total to the cashier\", the MOST accurate translation into sequence diagram messages is:\na. A class diagram association, not a sequence diagram message\nb. A single message with no return value\nc. Two messages: one for recording (e.g. Sale calculates/updates its total) and a return/display message back toward the actor showing the total\nd. No message needed, since this step is purely descriptive",
              answer: "**Correct Answer: c**\n\n*Explanation:* The action encompasses both internal state update (`record / calculateTotal`) and an output return communication displaying the result to the actor.",
              keyPoints: ["Action + Display translates to state-update message plus return message"]
            }
          ]
        },
        {
          id: "m-q29",
          number: "Question 29",
          title: "SRS Formal Acronym",
          marks: 1,
          subQuestions: [
            {
              id: "m-q29-1",
              label: "Q29",
              marks: 1,
              question: "What three-letter acronym refers to the formal document that consolidates a system's requirements, often required for contractual or audit purposes?",
              answer: "**Correct Answer: SRS** (Software Requirements Specification)",
              keyPoints: ["SRS = Software Requirements Specification"]
            }
          ]
        },
        {
          id: "m-q30",
          number: "Question 30",
          title: "Sequence Diagram Combined Fragment: opt",
          marks: 1,
          subQuestions: [
            {
              id: "m-q30-1",
              label: "Q30",
              marks: 1,
              question: "A sequence diagram needs to show a single optional step - printing a gift receipt - which happens ONLY if the customer requests it, with no alternative action if they don't. The correct fragment is:\na. par (parallel)\nb. loop\nc. alt (alternative), since there must be two branches\nd. opt (optional), a single guarded operand that may or may not execute",
              answer: "**Correct Answer: d**\n\n*Explanation:* The `opt` fragment represents a single optional branch with a guard condition `[customer wants gift receipt]`. If the guard is true, it executes; otherwise it is skipped.",
              keyPoints: ["Single conditional branch without alternative = opt fragment"]
            }
          ]
        },
        {
          id: "m-q31",
          number: "Question 31",
          title: "Actor-Goal Modelling Notation Name",
          marks: 1,
          subQuestions: [
            {
              id: "m-q31-1",
              label: "Q31",
              marks: 1,
              question: "What is the name of the actor-goal modelling notation that uses actors, goals, softgoals, tasks, and resources connected by dependency links?",
              answer: "**Correct Answer: i*** (or iStar)",
              keyPoints: ["i* (iStar) framework created by Eric Yu"]
            }
          ]
        },
        {
          id: "m-q32",
          number: "Question 32",
          title: "Lifeline Destruction Marker",
          marks: 1,
          subQuestions: [
            {
              id: "m-q32-1",
              label: "Q32",
              marks: 1,
              question: "An \"X\" mark drawn at the bottom of an object's lifeline in a sequence diagram indicates:\na. The object is destroyed / its lifecycle ends at that point\nb. The object is temporarily inactive but still exists\nc. An error occurred in the message call\nd. The object is being created",
              answer: "**Correct Answer: a**\n\n*Explanation:* A large 'X' at the conclusion of an object lifeline represents an explicit **destruction occurrence** (e.g. garbage collection or `delete`).",
              keyPoints: ["'X' at bottom of lifeline = object destruction / lifecycle termination"]
            }
          ]
        },
        {
          id: "m-q33",
          number: "Question 33",
          title: "Operation Contract Postcondition Categories",
          marks: 1,
          subQuestions: [
            {
              id: "m-q33-1",
              label: "Q33",
              marks: 1,
              question: "\"A new instance of Sale was created and associated with the Store\" is an example of which combination of operation-contract postcondition types?\na. Attribute modification only\nb. Association broken\nc. Instance deletion\nd. Instance creation AND association formed",
              answer: "**Correct Answer: d**\n\n*Explanation:* This statement covers two of Larman's four core postcondition categories: **Instance creation** (`Sale was created`) and **Association formed** (`associated with Store`).",
              keyPoints: ["Instance creation + Association formed"]
            }
          ]
        },
        {
          id: "m-q34",
          number: "Question 34",
          title: "Sequence Diagram Combined Fragment: par",
          marks: 1,
          subQuestions: [
            {
              id: "m-q34-1",
              label: "Q34",
              marks: 1,
              question: "A sequence diagram needs to show that \"print receipt\" and \"update inventory\" happen concurrently/independently of each other after payment is confirmed. The correct combined fragment is:\na. loop\nb. par (parallel)\nc. opt (optional)\nd. alt (alternative)",
              answer: "**Correct Answer: b**\n\n*Explanation:* The `par` fragment designates **parallel / concurrent execution**, where events in separate sub-frames may be interleaved in any order.",
              keyPoints: ["Concurrent independent execution = par fragment"]
            }
          ]
        },
        {
          id: "m-q35",
          number: "Question 35",
          title: "Stakeholder Conflict Resolution",
          marks: 1,
          subQuestions: [
            {
              id: "m-q35-1",
              label: "Q35",
              marks: 1,
              question: "A hospital records system project has a sponsor (finance director), end users (nurses), a regulator (health ministry), and IT operations staff. Whose requirement carries the most weight when there is a direct conflict between a usability request from nurses and a mandatory data-retention rule from the regulator?\na. The nurses', because end users always take priority\nb. The regulator's requirement, because compliance requirements are typically non-negotiable constraints\nc. IT operations, because they maintain the system\nd. The sponsor's, because they fund the project",
              answer: "**Correct Answer: b**\n\n*Explanation:* Regulatory, statutory, and legal compliance mandates represent hard non-negotiable constraints. Software that violates ministry regulations cannot legally operate.",
              keyPoints: ["Legal and regulatory constraints override user preference requests"]
            }
          ]
        },
        {
          id: "m-q36",
          number: "Question 36",
          title: "Essential Components of User Stories",
          marks: 1,
          subQuestions: [
            {
              id: "m-q36-1",
              label: "Q36",
              marks: 1,
              question: "A user story reads: \"As a cashier, I want a checkout button.\" What is this user story missing that most limits its usefulness for prioritisation and design?\na. An operation contract\nb. The rationale/benefit (\"so that...\") explaining why the feature matters\nc. The actor role\nd. A UML class diagram",
              answer: "**Correct Answer: b**\n\n*Explanation:* Standard Connextra user story syntax: *\"As a [role], I want [feature], SO THAT [business value / rationale]\"*. Without the benefit clause, the business justification cannot be judged or prioritized.",
              keyPoints: ["Missing 'so that...' benefit/value clause"]
            }
          ]
        },
        {
          id: "m-q37",
          number: "Question 37",
          title: "Translating Analysis to Design Sequence Diagrams",
          marks: 1,
          subQuestions: [
            {
              id: "m-q37-1",
              label: "Q37",
              marks: 1,
              question: "When translating an analysis-level use case into a design-level sequence diagram, the artefact that most directly determines which system operations appear as messages, and what their pre/postconditions must satisfy, is the:\na. Stakeholder list\nb. Operation contract, together with the SSD system events for that use case\nc. Class diagram alone, with no reference to contracts\nd. Deployment diagram",
              answer: "**Correct Answer: b**\n\n*Explanation:* The System Sequence Diagram identifies the incoming system operations, and the **Operation Contracts** detail the required state changes that the collaborating design objects must satisfy.",
              keyPoints: ["Operation contracts + SSD system events drive sequence diagram design"]
            }
          ]
        },
        {
          id: "m-q38",
          number: "Question 38",
          title: "UML Realisation Notation",
          marks: 1,
          subQuestions: [
            {
              id: "m-q38-1",
              label: "Q38",
              marks: 1,
              question: "A class diagram shows \"CreditCardPayment\" connected to an interface \"PaymentMethod\" with a dashed line and a hollow triangular arrowhead. This notation represents:\na. Composition - CreditCardPayment owns PaymentMethod\nb. Realisation - CreditCardPayment implements the PaymentMethod interface\nc. Generalisation - CreditCardPayment is a subclass of PaymentMethod\nd. Dependency - CreditCardPayment merely uses PaymentMethod temporarily",
              answer: "**Correct Answer: b**\n\n*Explanation:* A **dashed line with a hollow triangular arrowhead** represents **Realisation** (a class implementing an interface). In contrast, a solid line with hollow triangle represents Generalisation (inheritance).",
              keyPoints: ["Dashed line + hollow triangle = Realisation / interface implementation"]
            }
          ]
        },
        {
          id: "m-q39",
          number: "Question 39",
          title: "UML Interface Stereotype",
          marks: 1,
          subQuestions: [
            {
              id: "m-q39-1",
              label: "Q39",
              marks: 1,
              question: "In a class diagram, a UML element labelled with the stereotype <<interface>> above its name, containing only method signatures and no attributes, most likely represents:\na. An interface defining a contract of operations that implementing classes must provide, without any implementation or state\nb. An abstract domain model concept\nc. A concrete class with hidden attributes\nd. A database table definition",
              answer: "**Correct Answer: a**\n\n*Explanation:* The `<<interface>>` stereotype defines a formal contract of behaviour containing operation signatures that conforming classes must implement.",
              keyPoints: ["<<interface>> defines operation contracts with no implementation state"]
            }
          ]
        },
        {
          id: "m-q40",
          number: "Question 40",
          title: "Guarded opt Fragment Interpretation",
          marks: 1,
          subQuestions: [
            {
              id: "m-q40-1",
              label: "Q40",
              marks: 1,
              question: "In a sequence diagram, a combined fragment labelled \"opt\" surrounds a single message \"applyDiscount(sale)\" with the guard condition [total > 1000]. What does this indicate?\na. applyDiscount(sale) is only invoked if total exceeds 1000; otherwise the message is skipped entirely\nb. applyDiscount(sale) is invoked exactly once per line item in the sale\nc. The fragment indicates the message is asynchronous\nd. applyDiscount(sale) always executes, and the guard is purely documentation",
              answer: "**Correct Answer: a**\n\n*Explanation:* An `opt` fragment with a guard `[condition]` executes its enclosed interactions only when the guard evaluates to true. If false, the fragment is bypassed.",
              keyPoints: ["Message executes only when guard condition is satisfied"]
            }
          ]
        }
      ]
    },
    {
      id: "part-3",
      name: "Part 3: Domain Models, Contracts, Design & Prioritization (Q41–Q60)",
      instructions: "Questions 41 through 60 covering Cost-Value prioritization, domain vs design models, operation contracts, and SSD loops.",
      compulsory: true,
      questions: [
        {
          id: "m-q41",
          number: "Question 41",
          title: "Cost-Value Prioritization Technique",
          marks: 1,
          subQuestions: [
            {
              id: "m-q41-1",
              label: "Q41",
              marks: 1,
              question: "A product owner has limited development budget and needs to rank requirements by the ratio of stakeholder-perceived value to implementation cost. Which technique is most appropriate?\na. Cost-value approach\nb. i* goal modelling\nc. MoSCoW\nd. FURPS+ categorisation",
              answer: "**Correct Answer: a**\n\n*Explanation:* The **Cost-Value Approach** (Karlsson & Ryan) calculates relative value using AHP (Analytic Hierarchy Process) paired against relative implementation cost, plotting requirements on a value-vs-cost matrix.",
              keyPoints: ["Ratio of stakeholder value to cost = Cost-value approach"]
            }
          ]
        },
        {
          id: "m-q42",
          number: "Question 42",
          title: "Attributes vs Conceptual Classes in Domain Models",
          marks: 1,
          subQuestions: [
            {
              id: "m-q42-1",
              label: "Q42",
              marks: 1,
              question: "A domain model shows \"Sale\" with an attribute named \"customer\" holding a full Customer name and address. What is the more correct modelling choice?\na. Leave it as an attribute, since names are always simple data types\nb. Delete the Customer concept entirely since it is not needed\nc. Model Customer as a separate conceptual class, with an association from Sale to Customer, rather than an embedded attribute\nd. Convert Sale into a subclass of Customer",
              answer: "**Correct Answer: c**\n\n*Explanation:* Craig Larman's fundamental domain modelling rule: *\"If an entity is not represented by a primitive data type (number, string, date), model it as a conceptual class, not an attribute.\"* A Customer has multiple properties and identity.",
              keyPoints: ["Complex entities must be modeled as separate conceptual classes"]
            }
          ]
        },
        {
          id: "m-q43",
          number: "Question 43",
          title: "No Methods in Domain Models Rule",
          marks: 1,
          subQuestions: [
            {
              id: "m-q43-1",
              label: "Q43",
              marks: 1,
              question: "A student's domain model shows an association where \"Payment\" has a method named calculateChange(). What is wrong with this domain model?\na. Payment should not be a conceptual class at all\nb. Associations cannot exist between Payment and other classes\nc. Domain model conceptual classes should not have methods/operations - those belong in the design model\nd. calculateChange() should return a boolean, not a value",
              answer: "**Correct Answer: c**\n\n*Explanation:* A domain model illustrates real-world conceptual vocabulary, not software design objects. It displays conceptual classes, attributes, and associations, but **NO software operations or methods**.",
              keyPoints: ["Domain models show concepts and attributes only; NO methods"]
            }
          ]
        },
        {
          id: "m-q44",
          number: "Question 44",
          title: "Self-Messages in Sequence Diagrams",
          marks: 1,
          subQuestions: [
            {
              id: "m-q44-1",
              label: "Q44",
              marks: 1,
              question: "In a sequence diagram, an arrow that starts and ends on the SAME object's lifeline (looping back to itself) represents:\na. An asynchronous broadcast to all objects\nb. A self-message - the object invokes one of its own operations\nc. A return message from another object\nd. A destroy message",
              answer: "**Correct Answer: b**\n\n*Explanation:* A looping arrow starting and ending on the same lifeline is a **self-message**, representing internal method invocation within the same object instance.",
              keyPoints: ["Looping arrow on same lifeline = Self-message"]
            }
          ]
        },
        {
          id: "m-q45",
          number: "Question 45",
          title: "Domain Model Class vs Design Model Class",
          marks: 1,
          subQuestions: [
            {
              id: "m-q45-1",
              label: "Q45",
              marks: 1,
              question: "Given the class \"Sale\" appears in the domain model with only the attributes date and time (no methods, no visibility markers), and the same-named \"Sale\" class appears later in the design model with methods like addLineItem() and getTotal(), this illustrates that:\na. the design model is a subset of the domain model with fewer attributes\nb. the domain model and design model must always use different class names\nc. operation contracts are unnecessary once a domain model exists\nd. the domain model represents a real-world concept while the design class represents a software implementation of a similar-named responsibility",
              answer: "**Correct Answer: d**\n\n*Explanation:* The domain model represents real-world entities in the problem domain, while the Design Class Diagram represents programmatic classes in software architecture fulfilling responsibilities.",
              keyPoints: ["Domain class = real-world concept; Design class = software implementation"]
            }
          ]
        },
        {
          id: "m-q46",
          number: "Question 46",
          title: "System Events in System Sequence Diagrams",
          marks: 1,
          subQuestions: [
            {
              id: "m-q46-1",
              label: "Q46",
              marks: 1,
              question: "In a System Sequence Diagram, what general term is used for the messages exchanged between an actor and the system that trigger a system response?",
              answer: "**Correct Answer: System Events** (or system operations)",
              keyPoints: ["Input messages from actors to the system are system events"]
            }
          ]
        },
        {
          id: "m-q47",
          number: "Question 47",
          title: "Making Vague Requirements Testable",
          marks: 1,
          subQuestions: [
            {
              id: "m-q47-1",
              label: "Q47",
              marks: 1,
              question: "Which addition would make the requirement \"The system shall provide fast search results\" testable and acceptance-ready?\na. Rewriting it as a user story with no numbers\nb. Adding it to the domain model as an attribute\nc. Adding a measurable threshold, e.g. \"search results shall be returned within 1 second for catalogues of up to 50,000 items\"\nd. Removing the word \"search\"",
              answer: "**Correct Answer: c**\n\n*Explanation:* Introducing concrete quantitative thresholds (e.g. latency under 1 second for 50,000 catalog entries) makes the non-functional requirement objectively verifiable during QA testing.",
              keyPoints: ["Add quantifiable threshold with workload boundaries"]
            }
          ]
        },
        {
          id: "m-q48",
          number: "Question 48",
          title: "Writing High-Quality Operation Postconditions",
          marks: 1,
          subQuestions: [
            {
              id: "m-q48-1",
              label: "Q48",
              marks: 1,
              question: "For the operation enterItem(itemID, quantity) in a \"Process Sale\" use case, which is the BEST-written postcondition?\na. A SalesLineItem instance li was created and associated with the current Sale; li.quantity was set to quantity; li was associated with a ProductSpecification matching itemID\nb. If the item is not found, display an error message\nc. The cashier enters the item ID using the barcode scanner\nd. The system displays the item description and running total on screen",
              answer: "**Correct Answer: a**\n\n*Explanation:* Option (a) rigorously states the postconditions using Larman's past-tense state changes: instance creation (`li created`), association formation (`associated with Sale` and `ProductSpecification`), and attribute modification (`li.quantity set to quantity`).",
              keyPoints: ["Instance created, associations formed, attribute set in past tense"]
            }
          ]
        },
        {
          id: "m-q49",
          number: "Question 49",
          title: "Preconditions vs Postconditions Distinction",
          marks: 1,
          subQuestions: [
            {
              id: "m-q49-1",
              label: "Q49",
              marks: 1,
              question: "In an operation contract, which statement correctly distinguishes preconditions from postconditions?\na. Preconditions describe assumptions that must be true before the operation executes; postconditions describe the state of the system after it completes\nb. Postconditions describe the algorithm used to implement the operation\nc. Preconditions and postconditions are interchangeable terms for the same concept\nd. Preconditions describe what happens during the operation; postconditions describe what must be true before it starts",
              answer: "**Correct Answer: a**\n\n*Explanation:* Preconditions define necessary prior system state (assumptions before execution). Postconditions define the resulting state of domain objects upon successful completion.",
              keyPoints: ["Preconditions = prior assumptions; Postconditions = resulting state"]
            }
          ]
        },
        {
          id: "m-q50",
          number: "Question 50",
          title: "Domain Modelling: Attributes vs Classes Context",
          marks: 1,
          subQuestions: [
            {
              id: "m-q50-1",
              label: "Q50",
              marks: 1,
              question: "In a domain model for a library system, should \"Book Genre\" (e.g. Fiction, Non-fiction, Reference) be modelled as an attribute of Book or as its own conceptual class?\na. Always as its own class, regardless of context\nb. Always as an attribute, regardless of context\nc. As its own conceptual class if genres have their own properties/behaviour and are referenced by many books (many-to-many), otherwise as a simple attribute\nd. As a subclass of Book in every case",
              answer: "**Correct Answer: c**\n\n*Explanation:* If Genre has its own attributes (e.g., shelving location, loan period rules) or exists as a shared entity, model it as a conceptual class. If it is purely a primitive descriptive string with no behaviour, an attribute suffices.",
              keyPoints: ["Model as class if it has properties/behaviour/many-to-many links"]
            }
          ]
        },
        {
          id: "m-q51",
          number: "Question 51",
          title: "Cognitive Walkthrough Usability Evaluation",
          marks: 1,
          subQuestions: [
            {
              id: "m-q51-1",
              label: "Q51",
              marks: 1,
              question: "A team wants to evaluate whether a novice cashier can figure out, without training, how to process a return - by having an expert step through the task simulating the novice's likely thought process at each screen. This technique is called a:\na. Stakeholder interview\nb. Regression test\nc. Use case review\nd. Cognitive walkthrough",
              answer: "**Correct Answer: d**\n\n*Explanation:* A **Cognitive Walkthrough** is a formal usability review method where evaluators step through action sequences, answering whether a user will formulate the correct intention and understand system responses.",
              keyPoints: ["Cognitive walkthrough simulates novice user mental models during tasks"]
            }
          ]
        },
        {
          id: "m-q52",
          number: "Question 52",
          title: "Operation Contract Cross References",
          marks: 1,
          subQuestions: [
            {
              id: "m-q52-1",
              label: "Q52",
              marks: 1,
              question: "The \"Cross References\" section of an operation contract typically lists:\na. the database tables affected by the operation\nb. the GUI screen mockups related to the operation\nc. the test cases that must pass before release\nd. the use case(s) that the operation supports or is associated with",
              answer: "**Correct Answer: d**\n\n*Explanation:* In Larman's contract template, Cross References tie the system operation directly back to the specific Use Case(s) from which it originated.",
              keyPoints: ["Cross References point to the supporting Use Case"]
            }
          ]
        },
        {
          id: "m-q53",
          number: "Question 53",
          title: "Identifying Black-Box System Events",
          marks: 1,
          subQuestions: [
            {
              id: "m-q53-1",
              label: "Q53",
              marks: 1,
              question: "For a \"Process Sale\" use case, which of the following is correctly written as a system event for an SSD (as opposed to an internal design-level message)?\na. enterItem(itemID, quantity)\nb. Inventory.decrementStock(itemID)\nc. Sale.addLineItem(item)\nd. ProductCatalog.lookupPrice(itemID)",
              answer: "**Correct Answer: a**\n\n*Explanation:* `enterItem(itemID, quantity)` represents an input system event initiated by the Cashier across the system boundary. The others (`decrementStock`, `addLineItem`, `lookupPrice`) are internal object-to-object collaboration messages.",
              keyPoints: ["enterItem() is an external system event crossing the system boundary"]
            }
          ]
        },
        {
          id: "m-q54",
          number: "Question 54",
          title: "UML Self-Message Name",
          marks: 1,
          subQuestions: [
            {
              id: "m-q54-1",
              label: "Q54",
              marks: 1,
              question: "What is the name of the UML sequence diagram message type used when an object invokes one of its own operations, shown as an arrow looping back to the same lifeline?",
              answer: "**Correct Answer: Self-Message** (or local call)",
              keyPoints: ["Self-message loops back to the same object lifeline"]
            }
          ]
        },
        {
          id: "m-q55",
          number: "Question 55",
          title: "Identifying System Operations for Contracts",
          marks: 1,
          subQuestions: [
            {
              id: "m-q55-1",
              label: "Q55",
              marks: 1,
              question: "Given a \"Process Sale\" main success scenario with steps: 1. Cashier starts new sale. 2. Cashier enters item ID. 3. System records item and shows total. 4. Cashier ends sale. 5. Cashier enters payment. Which pair correctly lists two system operations to define contracts for?\na. makeNewSale() and enterItem()\nb. Sale and Payment (domain classes, not operations)\nc. Cashier and Register (actors/devices, not operations)\nd. Store and Product (domain classes, not operations)",
              answer: "**Correct Answer: a**\n\n*Explanation:* System operations represent external operations exposed by the system interface, such as `makeNewSale()` and `enterItem()`. Sale, Payment, Cashier, and Store are classes/actors, not operations.",
              keyPoints: ["makeNewSale() and enterItem() are operational method calls"]
            }
          ]
        },
        {
          id: "m-q56",
          number: "Question 56",
          title: "Composition vs Aggregation in UML",
          marks: 1,
          subQuestions: [
            {
              id: "m-q56-1",
              label: "Q56",
              marks: 1,
              question: "A Sale \"owns\" its SalesLineItems such that if the Sale is deleted, all its SalesLineItems are deleted too, and a SalesLineItem cannot exist independently or be transferred to another Sale. This relationship should be modelled as:\na. Aggregation (shared, non-exclusive ownership)\nb. Simple association\nc. Composition\nd. Generalisation",
              answer: "**Correct Answer: c**\n\n*Explanation:* **Composition** (solid filled black diamond) denotes strong, exclusive composite-whole ownership where part instances live and die with the composite whole.",
              keyPoints: ["Exclusive ownership with coincident lifetime = Composition (solid black diamond)"]
            }
          ]
        },
        {
          id: "m-q57",
          number: "Question 57",
          title: "Business Rules Classification",
          marks: 1,
          subQuestions: [
            {
              id: "m-q57-1",
              label: "Q57",
              marks: 1,
              question: "\"Discounts greater than 20% require manager approval\" is best classified in requirements documentation as a:\na. Business rule that constrains how a functional requirement (applying a discount) may be carried out\nb. Non-functional performance requirement\nc. UML association in the domain model\nd. Pure functional requirement with no constraints",
              answer: "**Correct Answer: a**\n\n*Explanation:* A **Business Rule** defines policy, governance, or operational constraints that restrict how business transactions and functional requirements are executed.",
              keyPoints: ["Business rule constrains functional transaction execution"]
            }
          ]
        },
        {
          id: "m-q58",
          number: "Question 58",
          title: "Requirements Traceability Matrix Purpose",
          marks: 1,
          subQuestions: [
            {
              id: "m-q58-1",
              label: "Q58",
              marks: 1,
              question: "The main purpose of a requirements traceability matrix linking requirements to use cases, design elements, and test cases is to:\na. Replace the need for a domain model\nb. Automatically generate the operation contracts\nc. Ensure every requirement is addressed by design and verified by a test, and to assess impact when a requirement changes\nd. Prioritise requirements using cost-value scoring",
              answer: "**Correct Answer: c**\n\n*Explanation:* A Requirements Traceability Matrix (RTM) maintains forward and backward linkages, guaranteeing that no requirement is forgotten, every feature is tested, and scope changes can be evaluated for impact.",
              keyPoints: ["RTM ensures complete design coverage, verification by tests, and change impact analysis"]
            }
          ]
        },
        {
          id: "m-q59",
          number: "Question 59",
          title: "CRC Cards Exploration Technique",
          marks: 1,
          subQuestions: [
            {
              id: "m-q59-1",
              label: "Q59",
              marks: 1,
              question: "What is the name of the technique using index cards to list a class's name, responsibilities, and collaborators, often used to explore candidate classes and their interactions?",
              answer: "**Correct Answer: CRC cards** (Class-Responsibility-Collaborator cards)",
              keyPoints: ["CRC = Class-Responsibility-Collaborator cards"]
            }
          ]
        },
        {
          id: "m-q60",
          number: "Question 60",
          title: "Loop Frames in System Sequence Diagrams",
          marks: 1,
          subQuestions: [
            {
              id: "m-q60-1",
              label: "Q60",
              marks: 1,
              question: "In an SSD for \"Process Sale\", the cashier repeats \"enterItem(itemID, quantity)\" for each product scanned before ending the sale. The correct way to show this repetition in the SSD is:\na. Enclose the enterItem() message in a loop frame with a guard such as [more items]\nb. Replace enterItem() with a single message called processAllItems()\nc. Show enterItem() only once, since repetition is implied without notation\nd. Draw a separate SSD for every possible number of items",
              answer: "**Correct Answer: a**\n\n*Explanation:* Iteration in sequence diagrams is modeled using a combined fragment with operator `loop` and a guard condition `[more items]`, enclosing the repeated system event.",
              keyPoints: ["Enclose repeated message in loop frame with [more items] guard"]
            }
          ]
        }
      ]
    }
  ]
};
