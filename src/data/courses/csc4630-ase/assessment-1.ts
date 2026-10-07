import { Paper } from "@/types";

export const csc4630_Assessment1: Paper = {
  id: "csc4630-assessment-1",
  slug: "assessment-1",
  title: "Continuous Assessment 1 (Advanced Requirements & Design Patterns)",
  year: 2024,
  duration: "1 Hour 30 Mins",
  totalMarks: 30,
  paperType: "Assessment",
  venue: "School of Natural Sciences · UNZA Computer Lab",
  sections: [
    {
      id: "section-a",
      name: "Section A: Theory & Goal Modelling (15 Marks)",
      instructions: "Answer all questions in this section.",
      compulsory: true,
      questions: [
        {
          id: "ca1-q1",
          number: "Question 1",
          title: "Goal-Oriented Requirements Engineering (GORE)",
          marks: 15,
          subQuestions: [
            {
              id: "ca1-q1-1",
              label: "1.1",
              marks: 7,
              question: "Differentiate between hard goals and soft goals in KAOS requirements engineering. Provide two concrete examples of each in a university registration system. [7 marks]",
              answer: `### Hard Goals versus Soft Goals in KAOS
*(Reference: van Lamsweerde, 2009; Lethbridge & Laganière, 2005, Ch. 4)*

1. **Hard Goals (Functional Goals):**
   - **Definition:** Specific, measurable objectives with crisp pass/fail satisfaction criteria. A hard goal is either completely achieved or not achieved.
   - **University Registration Examples:**
     - *Goal 1:* "Achieve[StudentRegisteredForCourse]" — System ensures valid students are enrolled in chosen sections when pre-requisites are met.
     - *Goal 2:* "Maintain[ClassCapacityEnforced]" — System guarantees enrolment never exceeds the assigned lecture theatre capacity.

2. **Soft Goals (Non-Functional / Quality Goals):**
   - **Definition:** Objectives without crisp satisfaction boundaries. They cannot be definitively satisfied, but rather are **satisficed** (sufficiently met to an acceptable degree).
   - **University Registration Examples:**
     - *Goal 1:* "Maximize[PortalUsability]" — Streamline navigation so 95% of first-time students register without help-desk assistance.
     - *Goal 2:* "Minimize[RegistrationLatency]" — Keep average transaction confirmation times under 1.5 seconds during peak semester registration rushes.`,
              keyPoints: [
                "Hard goals: crisp binary satisfaction criteria (pass/fail)",
                "Soft goals: satisficed to acceptable degree (non-functional/quality)",
                "Examples: Achieve[StudentRegistered] vs Maximize[Usability]"
              ]
            },
            {
              id: "ca1-q1-2",
              label: "1.2",
              marks: 8,
              question: "Draw a KAOS goal refinement tree showing how the root goal 'Achieve[DegreeAuditAccurate]' is refined into sub-goals and assigned to agents. [8 marks]",
              answer: `### KAOS Goal Refinement Tree (Degree Audit)

\`\`\`mermaid
flowchart TD
  ROOT["Goal: Achieve[DegreeAuditAccurate]"] --> AND_NODE((AND))
  
  AND_NODE --> G1["Goal: Achieve[CourseCreditsVerified]"]
  AND_NODE --> G2["Goal: Achieve[PrerequisitesChecked]"]
  AND_NODE --> G3["Goal: Achieve[GPAComputed]"]

  G1 --> AGENT_SYS["🤖 Agent: Student Records System"]
  G2 --> AGENT_SYS
  G3 --> AGENT_SYS
  
  ROOT -.-> OBSTACLE["Obstacle: Incomplete Transcripts Transferred"]
  OBSTACLE --> RESOLVE["Goal: Achieve[ManualTranscriptVerification]"]
  RESOLVE --> AGENT_OFFICER["👤 Agent: Academic Registrar"]
\`\`\`

*Explanation:* KAOS structures requirements by decomposing high-level strategic intentions into operational sub-goals via AND-refinement until leaf goals can be assigned to automated software agents or human operational agents.`,
              keyPoints: [
                "AND-refinement of root goal into sub-goals",
                "Assignment of operational leaf goals to automated and human agents",
                "Obstacle identification and resolution"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "section-b",
      name: "Section B: Design Patterns Application (15 Marks)",
      instructions: "Answer Question 2.",
      compulsory: true,
      questions: [
        {
          id: "ca1-q2",
          number: "Question 2",
          title: "Observer & Factory Patterns Implementation",
          marks: 15,
          subQuestions: [
            {
              id: "ca1-q2-1",
              label: "2.1",
              marks: 8,
              question: "Explain how the Observer pattern decouples an online Gradebook from multiple notification services (SMS, Email, Student Portal). [8 marks]",
              answer: `### The Observer Pattern for Decoupled Notifications
*(Reference: Lethbridge & Laganière, 2005, Ch. 6, pp. 232–234)*

#### Decoupling Mechanism:
In a university grade publishing workflow, when a lecturer posts exam results, notifications must be dispatched to students across multiple channels:
- If the \`Gradebook\` domain class directly imported \`SMSService\`, \`EmailService\`, and \`PortalWebSocket\`, it would exhibit strong **Common and Stamp Coupling** (pp. 323–325). Any change or addition of a new notification channel (e.g. WhatsApp) would require modifying the core \`Gradebook\` class.
- By applying the **Observer Pattern**, \`Gradebook\` extends \`Observable\` (or maintains an observer collection). Notification services implement the \`Observer\` interface containing the \`update(Observable o, Object arg)\` callback.
- When grades are approved, \`Gradebook\` calls \`notifyObservers(newGradeEvent)\`. The \`Gradebook\` has zero awareness of how many channels exist or how they format outgoing alerts.

\`\`\`mermaid
classDiagram
  class Observable {
    +addObserver(Observer o)
    +notifyObservers(Object event)
  }

  class Gradebook {
    -Map grades
    +publishGrade(Student s, Course c, float g)
  }

  class Observer {
    <<interface>>
    +update(Observable o, Object event)*
  }

  class EmailNotifier {
    +update(Observable o, Object event)
  }

  class SMSNotifier {
    +update(Observable o, Object event)
  }

  class PortalNotifier {
    +update(Observable o, Object event)
  }

  Observable <|-- Gradebook
  Observer <|.. EmailNotifier
  Observer <|.. SMSNotifier
  Observer <|.. PortalNotifier
  Observable "1" o--> "*" Observer : maintains
\`\`\``,
              keyPoints: [
                "Gradebook acts as Observable subject; channels implement Observer interface",
                "notifyObservers() dispatches events without knowing concrete subscriber classes",
                "Eliminates tight coupling and supports adding channels without modifying core code"
              ]
            },
            {
              id: "ca1-q2-2",
              label: "2.2",
              marks: 7,
              question: "Explain the Factory pattern (Lethbridge Ch. 6, p. 243) and discuss why modifying a reusable framework to add application-specific classes is considered an antipattern. [7 marks]",
              answer: `### The Factory Pattern & Framework Extension
*(Reference: Lethbridge & Laganière, 2005, Ch. 6, pp. 243–246)*

#### Intent & Structure (p. 244):
The **Factory Pattern** enables a reusable framework to instantiate application-specific subclasses without modifying the framework source code or knowing concrete class names at compile time.
- The framework defines an abstract \`GenericClass\` and a generic factory interface \`Factory\` with a creation method \`createInstance()\`.
- The application developer implements \`AppSpecificClass\` extending \`GenericClass\`, and an \`AppSpecificFactory\` implementing \`Factory\`.
- The framework is configured with \`setFactory(new AppSpecificFactory())\`. When new objects are required, the framework calls the factory, receiving new application objects polymorphically.

#### Why Modifying Framework Source is an Antipattern (p. 244):
1. **Maintenance Nightmare:** Modifying framework internals to hardcode \`new AppSpecificClass()\` destroys framework reusability. When the framework vendor releases a security update or patch, local modifications must be manually re-applied.
2. **Violation of the Open-Closed Principle:** Frameworks should be *open for extension, closed for modification*.
3. **Multi-Tenant Incompatibility:** Modifying the framework prevents the same framework binary from serving different applications with different entity types simultaneously.`,
              keyPoints: [
                "Factory delegates instantiation of application-specific classes (p. 243)",
                "Framework calls createInstance() on factory interface without hardcoded class names",
                "Modifying framework code destroys reusability and breaks upstream upgradeability (p. 244)"
              ]
            }
          ]
        }
      ]
    }
  ]
};
