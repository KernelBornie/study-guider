import { Paper } from "@/types";

export const csc3600_Assignment1: Paper = {
  id: "csc3600-assignment-1",
  slug: "assignment-1",
  title: "Assignment 1 — Smart Campus Healthcare System (SCHS)",
  year: 2026,
  duration: "Take-home",
  totalMarks: 100,
  paperType: "Assessment",
  sections: [
    {
      id: "section-a",
      name: "Assignment Tasks",
      instructions:
        "Model the Smart Campus Healthcare System (SCHS) using the required UML diagrams and architectural workflows.",
      compulsory: true,
      questions: [
        {
          id: "as1-q1",
          number: "Question 1",
          title: "Context Model Diagram",
          marks: 30,
          subQuestions: [
            {
              id: "as1-q1-1",
              label: "1",
              marks: 30,
              question:
                "Draw and describe a context model diagram showing SCHS, its external actors, and the external systems it interacts with.",
              answer:
                "### Context Model Architecture:\n\n```text\n+------------------------------------+       +---------------------------------+\n|    University Student Database     |       |          NHIMA System           |\n|   (Verify registration/status)     |       |   (Verify insurance coverage)   |\n+-----------------+------------------+       +----------------+----------------+\n                  |                                           |\n                  +-------------------+   +-------------------+\n                                      |   |\n                                      v   v\n+---------------+           +------------------------+           +-------------------+\n|    Student    | --------> |                        | <-------- |    Receptionist   |\n| (Book, view)  |           |     Smart Campus       |           | (Walk-ins, queue) |\n+---------------+           |   Healthcare System    |           +-------------------+\n                            |         (SCHS)         |\n+---------------+           |                        |           +-------------------+\n|    Doctor     | --------> |                        | <-------- |     Pharmacist    |\n| (Diagnose, rx)|           +------------------------+           | (Dispense, stock) |\n+---------------+                     ^   ^                      +-------------------+\n                                      |   |\n                  +-------------------+   +-------------------+\n                  |                                           |\n+-----------------+------------------+       +----------------+----------------+\n|      Online Payment Gateway        |       |   SMS / Email Alert Service     |\n|    (Mobile Money / Visa APIs)      |       |  (Appointment & pickup alerts)  |\n+------------------------------------+       +---------------------------------+\n```\n\n**External Actors Interacting with SCHS:**\n- **Student:** Registers, logs in, books clinic appointments, views diagnoses and prescriptions.\n- **Receptionist:** Registers walk-in students, verifies student and NHIMA insurance status, confirms check-in, and assigns queue tokens.\n- **Doctor:** Accesses patient consultation history, enters clinical diagnoses, issues digital prescriptions, and requests lab investigations.\n- **Pharmacist:** Views authorized doctor prescriptions, verifies medication availability, dispenses drugs, and updates inventory stock levels.\n- **Administrator:** Configures medical departments, assigns staff accounts, reviews patient volume analytics, and generates audit reports.\n\n**External Systems Integrated:**\n- **University Student Information System (SIS):** Validates active student enrolment and biographical information.\n- **National Health Insurance Management Authority (NHIMA):** Validates real-time patient insurance eligibility.\n- **Mobile Payment Gateway:** Processes consultation or medication co-payments via Mobile Money and debit cards.\n- **SMS/Email Gateway:** Dispatches instant booking confirmations and prescription pickup reminders.",
            },
          ],
        },
        {
          id: "as1-q2",
          number: "Question 2",
          title: "Use Case Diagram",
          marks: 40,
          subQuestions: [
            {
              id: "as1-q2-1",
              label: "1",
              marks: 40,
              question:
                "Develop a comprehensive use case diagram for SCHS detailing all primary actors and their associated use cases.",
              answer:
                "### Detailed Use Case Catalog by Actor:\n\n1. **Student Actor:**\n   - `UC-1: Register Account / Login`\n   - `UC-2: Book Clinic Appointment` *(Includes: Select Department, Choose Doctor, Pick Date & Slot)*\n   - `UC-3: Cancel / Reschedule Appointment`\n   - `UC-4: View Electronic Prescriptions & Lab Results`\n   - `UC-5: Receive Automated Appointment & Drug Reminders`\n\n2. **Receptionist Actor:**\n   - `UC-6: Register Walk-In Patient`\n   - `UC-7: Verify Student Status` *(Extends to University SIS)*\n   - `UC-8: Verify NHIMA Insurance Coverage`\n   - `UC-9: Check-in Patient & Issue Queue Ticket`\n   - `UC-10: Update Patient Demographic Details`\n\n3. **Doctor Actor:**\n   - `UC-11: View Daily Consultation Queue`\n   - `UC-12: Access Patient Longitudinal Health Record`\n   - `UC-13: Record Diagnosis & Clinical Notes`\n   - `UC-14: Generate Electronic Prescription` *(Includes: Drug dosage & interaction check)*\n   - `UC-15: Order Laboratory & Diagnostic Tests`\n\n4. **Pharmacist Actor:**\n   - `UC-16: Retrieve Pending Prescriptions`\n   - `UC-17: Dispense Medication & Mark Fulfilled`\n   - `UC-18: Manage Pharmacy Inventory & Restock Levels`\n   - `UC-19: Flag Out-of-Stock Medication & Propose Alternatives`\n\n5. **Administrator Actor:**\n   - `UC-20: Manage User Roles & Permissions (RBAC)`\n   - `UC-21: Configure Clinic Departments & Working Schedules`\n   - `UC-22: Generate Clinical & Financial Audit Reports`",
            },
          ],
        },
        {
          id: "as1-q3",
          number: "Question 3",
          title: "Activity Diagram",
          marks: 30,
          subQuestions: [
            {
              id: "as1-q3-1",
              label: "1",
              marks: 30,
              question:
                "Draw and describe an activity diagram for the end-to-end appointment booking and payment workflow in SCHS.",
              answer:
                "### Appointment Booking & Payment Workflow Activity Flow:\n\n```text\n      (●) [Start: Student Logged In]\n             |\n             v\n   [Select Clinic Department]\n             |\n             v\n       [Choose Doctor]\n             |\n             v\n[Select Preferred Date & Time Slot]\n             |\n             v\n    < Doctor Available? >\n       /             \\\n  [NO]/               \\[YES]\n     v                 v\n[Display Slot     [Initiate Booking & Review Fees]\n Taken Message]        |\n     |                 v\n     |          [Select Payment Method: NHIMA / Mobile Money]\n     |                 |\n     |                 v\n     |          < Covered by NHIMA? >\n     |             /               \\\n     |        [YES]                 \\[NO]\n     |           /                   v\n     |          /             [Send Prompt to Payment Gateway]\n     |         /                     |\n     |        /                      v\n     |       /             < Payment Successful? >\n     |      /                 /             \\\n     |     /             [YES]               \\[NO]\n     |    /                 /                 v\n     |   /                 /             < Retry Payment? >\n     |  /                 /                 /          \\\n     | /                 /             [YES]/            \\[NO]\n     |/                 /                  /               v\n     |                 /       [Return to Payment]   [Cancel Booking]\n     |                /                                    |\n     v               v                                     v\n[Loop Back to Slot Selection]                            (X) [End]\n                     |\n                     v\n         [Confirm Appointment Reservation]\n                     |\n                     v\n       [Generate Digital Queue Ticket]\n                     |\n                     v\n   [Send SMS / Email Confirmation Notice]\n                     |\n                     v\n                  (◉) [End Successful]\n```",
            },
          ],
        },
      ],
    },
  ],
};
