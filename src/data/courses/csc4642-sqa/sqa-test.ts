import { Paper } from "@/types";

export const csc4642_SqaTest: Paper = {
  id: "csc4642-sqa-test",
  slug: "sqa-test",
  title: "SQA Mid-Term Test",
  year: 2024,
  duration: "1.5 Hours",
  totalMarks: 44,
  paperType: "Test",
  sections: [
    {
      id: "section-a",
      name: "Compulsory Test Questions",
      instructions: "Answer ALL questions.",
      compulsory: true,
      questions: [
        {
          id: "test-q1",
          number: "Question 1",
          title: "Defect Removal Foundations & Empirical Survey Components",
          marks: 18,
          subQuestions: [
            {
              id: "test-q1-1",
              label: "1",
              marks: 12,
              question: "Outline the six (6) assumptions that form the foundations of the defect removal model. [12 marks]",
              answer: "1. **Linear Sequential Process:** Development follows a sequential waterfall model.\n2. **Phase-Introduced Defects:** A specific number of new defects originate in each development phase.\n3. **QA Activities Act as Filters:** Review and test activities serve as quality filters, removing a fraction of entering defects and letting the rest pass through.\n4. **Incoming Defects Summation:** At each phase, incoming defects = unremoved defects escaped from the former phase + new defects introduced in the current phase.\n5. **Cost Calculation Formula:** Removal cost = number of defects removed × relative cost of removing a defect in that phase.\n6. **Operational Customer Detection:** All remaining defects that pass undetected through to production will be detected by the customer/end-users."
            },
            {
              id: "test-q1-2",
              label: "2",
              marks: 6,
              question: "State the three (3) components of the model's data that are based on published survey results. [6 marks]",
              answer: "1. **Defect Origin Distribution (POD):** The percentage distribution of where defects are introduced across the lifecycle (typically: Requirements ~15%, Design ~35%, Coding ~40%, Documentation ~10%).\n2. **Defect Removal Effectiveness Rates (%FE):** Empirical percentages indicating what proportion of entering defects each specific QA activity (reviews, unit tests, integration tests) is capable of filtering out.\n3. **Relative Cost of Defect Removal (CDR):** The exponentially escalating cost multiplier for removing a defect at each successive development and operational phase (e.g., Cost 1 in Requirements vs. Cost 100+ in Operations)."
            }
          ]
        },
        {
          id: "test-q2",
          number: "Question 2",
          title: "Review Methods Objectives & The Author's Role",
          marks: 26,
          subQuestions: [
            {
              id: "test-q2-1",
              label: "1",
              marks: 12,
              question: "List the four (4) direct objectives and two (2) indirect objectives attached to the various review methods. [12 marks]",
              answer: "### Direct Objectives (Immediate Quality Goals):\n1. **Detect Analysis and Design Errors:** Uncover omissions, logical contradictions, and specification ambiguities early.\n2. **Identify New Risks:** Detect emergent project risks affecting budget, schedule, or technical feasibility.\n3. **Identify Deviations from Standards:** Ensure full compliance with organizational templates, coding standards, and documentation style rules.\n4. **Approve Product for Phase Gate Advancement:** Provide the formal validation required for the development team to advance to the next project phase.\n\n### Indirect Objectives (Organizational Learning Goals):\n1. **Knowledge Exchange and Peer Learning:** Serve as an informal forum for developers to share technical know-how, architectural patterns, and lessons learned.\n2. **Defect Root Cause Tracking:** Systematically record defect frequencies and categories to enable long-term corrective actions and process improvement."
            },
            {
              id: "test-q2-2a",
              label: "2a",
              marks: 4,
              question: "Mention at least two (2) arguments in favour of an author's participation in a review. [4 marks]",
              answer: "1. **Immediate Clarification of Design Intent:** The author has intimate knowledge of the rationale behind architectural decisions and can immediately explain nuances that reviewers might misunderstand.\n2. **Rapid Learning and Unambiguous Feedback:** Participating directly enables the author to grasp the exact nature of defects discovered, eliminating misunderstandings and accelerating corrective rework."
            },
            {
              id: "test-q2-2b",
              label: "2b",
              marks: 10,
              question: "Explain the differences in the part played by the author in each of the review methods discussed in class (DR, Inspection and Walkthrough). [10 marks]",
              answer: "### 1. Formal Design Review (DR):\n- The author (development team lead) prepares the formal presentation, presents the architectural document to the committee, answers committee inquiries, and takes responsibility for executing required corrections after formal approval or conditional approval.\n\n### 2. Software Inspection:\n- The author provides the product and briefing, but does **not** lead the meeting. A designated **Reader** paraphrases the code/document line-by-line while the author listens, observes objectively, and answers questions only when asked. The **Recorder** logs defects and the **Moderator** maintains focus.\n\n### 3. Software Walkthrough:\n- The author is the **initiator and leader** of the session. The author reads their own product step-by-step to colleagues, explains their logic, and takes notes as team members suggest defects and improvements in an informal setting.",
              diagramType: "formal-review"
            }
          ]
        }
      ]
    }
  ]
};
