import { Paper } from "@/types";

export const csc4642_Assessment2: Paper = {
  id: "csc4642-assessment-2",
  slug: "assessment-2",
  title: "Assessment 2 (2024)",
  year: 2024,
  duration: "1 Hour",
  totalMarks: 100,
  paperType: "Assessment",
  sections: [
    {
      id: "section-a",
      name: "Section A: Compulsory",
      instructions: "Answer ALL questions in this section (100 Marks).",
      compulsory: true,
      questions: [
        {
          id: "a2-q1",
          number: "Question 1",
          title: "Process-Oriented Defect Removal Plan (100 Defects)",
          marks: 60,
          subQuestions: [
            {
              id: "a2-q1-1",
              label: "1",
              marks: 60,
              question: "Consider the following SQA model, where the defect removal activities, effectiveness rates and representative average relative defect-removal costs are illustrated in the following table:\n- RSR: 60%, Cost 1\n- DI: 50%, Cost 5\n- CI: 40%, Cost 10\n- CUT: 20%, Cost 10\n- IT: 30%, Cost 20\n- OPD: 100%, Cost 40\nDefect distribution: Req=15, Design=35, Code=30, Integration=10, Operation=10.\nShow the process-oriented illustration of the comprehensive plan for removing 100 defects. [60 marks]",
              answer: "### Step-by-Step Mathematical Computation:\n\n1. **Requirements Specification Review (RSR):**\n   - Entering Defects = POD(15) + PD(0) = **15.0**\n   - Removed Defects (RD) = 15 × 60% = **9.0**\n   - Escaped (PD to Design) = 15 - 9.0 = **6.0**\n   - Phase Cost = 9.0 × 1 = **9.0**\n\n2. **Design Inspection (DI):**\n   - Entering Defects = POD(35) + PD(6.0) = **41.0**\n   - Removed Defects (RD) = 41.0 × 50% = **20.5**\n   - Escaped (PD to Code) = 41.0 - 20.5 = **20.5**\n   - Phase Cost = 20.5 × 5 = **102.5**\n\n3. **Code Inspection (CI):**\n   - Entering Defects = POD(30) + PD(20.5) = **50.5**\n   - Removed Defects (RD) = 50.5 × 40% = **20.2**\n   - Escaped (PD to CUT) = 50.5 - 20.2 = **30.3**\n   - Phase Cost = 20.2 × 10 = **202.0**\n\n4. **Code Unit Test (CUT):**\n   - Entering Defects = POD(0) + PD(30.3) = **30.3**\n   - Removed Defects (RD) = 30.3 × 20% = **6.06**\n   - Escaped (PD to IT) = 30.3 - 6.06 = **24.24**\n   - Phase Cost = 6.06 × 10 = **60.6**\n\n5. **Integration Test (IT):**\n   - Entering Defects = POD(10) + PD(24.24) = **34.24**\n   - Removed Defects (RD) = 34.24 × 30% = **10.272**\n   - Escaped (PD to OPD) = 34.24 - 10.272 = **23.968**\n   - Phase Cost = 10.272 × 20 = **205.44**\n\n6. **Operational Defect Detection (OPD):**\n   - Entering Defects = POD(10) + PD(23.968) = **33.968**\n   - Removed Defects (RD) = 33.968 × 100% = **33.968**\n   - Escaped = **0**\n   - Phase Cost = 33.968 × 40 = **1,358.72**\n\n### Comprehensive Defect Removal Table:\n\n| Phase | POD | PD | Total In | %FE | RD (Removed) | Escaped | CDR | Total Removal Cost (TRC) |\n|---|---|---|---|---|---|---|---|---|\n| **RSR** | 15 | 0 | 15.000 | 60% | 9.000 | 6.000 | 1 | 9.00 |\n| **DI** | 35 | 6.000 | 41.000 | 50% | 20.500 | 20.500 | 5 | 102.50 |\n| **CI** | 30 | 20.500 | 50.500 | 40% | 20.200 | 30.300 | 10 | 202.00 |\n| **CUT** | 0 | 30.300 | 30.300 | 20% | 6.060 | 24.240 | 10 | 60.60 |\n| **IT** | 10 | 24.240 | 34.240 | 30% | 10.272 | 23.968 | 20 | 205.44 |\n| **OPD** | 10 | 23.968 | 33.968 | 100% | 33.968 | 0.000 | 40 | 1,358.72 |\n| **TOTAL** | **100** | — | — | — | **100.000** | **0** | — | **1,938.26** |\n\n**Total Removal Cost = 1,938.26 cost units.**",
              diagramType: "defect-removal"
            }
          ]
        },
        {
          id: "a2-q2",
          number: "Question 2",
          title: "Design Review (DR) Session Agenda & Effectiveness",
          marks: 40,
          subQuestions: [
            {
              id: "a2-q2-a",
              label: "a",
              marks: 20,
              question: "Outline the typical DR session agenda. [20 marks]",
              answer: "The typical Formal Design Review session is strictly time-boxed (usually 90–120 minutes) and follows this four-part agenda:\n\n1. **Short Presentation of the Design Document by the Development Team Leader:**\n   - Focuses strictly on core architectural issues, design trade-offs, and critical algorithms.\n   - Avoids reading the document page-by-page.\n\n2. **Presentation of Review Team Comments & Defect Findings:**\n   - Review team members present the comments and defects identified during their pre-review study.\n   - Uses the standardized review checklist.\n\n3. **Discussion of Comments and Corrections:**\n   - Interactive professional discussion to clarify ambiguities and confirm whether identified items are defects, enhancements, or non-issues.\n   - Reaches consensus on required corrective actions.\n\n4. **Formal Decision by the Review Committee:**\n   - Committee deliberates and issues an official formal verdict:\n     - **Full Approval:** Design is authorized; team proceeds to coding.\n     - **Partial Approval:** Minor defects must be corrected and approved without a full re-review.\n     - **Denial of Approval:** Major architectural flaws require substantial redesign and a new formal review session.",
              diagramType: "formal-review"
            },
            {
              id: "a2-q2-b",
              label: "b",
              marks: 20,
              question: "Explain two (2) ways by which the DR session can influence the effectiveness of DRs. [20 marks]",
              answer: "1. **Focus on Substantive Architectural Issues over Trivial Details:**\n   - A well-chaired DR session prevents participants from getting bogged down in formatting, syntax, or stylistic debates ('bikeshedding'). By prioritizing high-level structural decisions, data schemas, security models, and system interfaces, the session detects catastrophic defects that testing cannot easily reveal.\n\n2. **Synergy of Diverse Stakeholder Perspectives:**\n   - Having senior professionals, lead developers, QA specialists, and customer representatives in the same focused session creates cross-functional synergy. A defect overlooked by the developer may be immediately flagged by the customer rep as a violation of business policy, or by an infrastructure engineer as a scalability bottleneck, ensuring comprehensive defect detection.",
              diagramType: "formal-review"
            }
          ]
        }
      ]
    }
  ]
};
