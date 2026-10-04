import { Paper } from "@/types";

export const csc4642_Assessment1: Paper = {
  id: "csc4642-assessment-1",
  slug: "assessment-1",
  title: "Assessment 1 (2024)",
  year: 2024,
  duration: "1 Hour",
  totalMarks: 20,
  paperType: "Assessment",
  sections: [
    {
      id: "section-a",
      name: "Section A: Quality Factor Mapping",
      instructions: "Map each requirement statement to the most appropriate McCall software quality factor (1 Mark each = 20 Marks).",
      compulsory: true,
      questions: [
        {
          id: "a1-q1",
          number: "Question 1",
          title: "Requirements to McCall Quality Factors Mapping",
          marks: 20,
          subQuestions: [
            {
              id: "a1-1",
              label: "1",
              marks: 1,
              question: "The software must accurately calculate the total price of items in a shopping cart.",
              answer: "**Correctness** — Conformance to functional specifications and accurate arithmetic calculations."
            },
            {
              id: "a1-2",
              label: "2",
              marks: 1,
              question: "The application must integrate seamlessly with external payment gateways and inventory management systems.",
              answer: "**Interoperability** — Effort required to couple this system with other external software systems."
            },
            {
              id: "a1-3",
              label: "3",
              marks: 1,
              question: "A new warehouse clerk shall be able to enter a customer order on the system within a typical 8-hour business day.",
              answer: "**Usability** (Learnability / Operability) — Effort required for a new user to achieve operational competence."
            },
            {
              id: "a1-4",
              label: "4",
              marks: 1,
              question: "The architecture should allow the addition of new features without requiring a complete system overhaul.",
              answer: "**Flexibility** — Effort required to modify an operational program to support new requirements."
            },
            {
              id: "a1-5",
              label: "5",
              marks: 1,
              question: "The software to be developed for use by the church organisation may be adapted later for private club use.",
              answer: "**Flexibility** — Adaptability of software to new operational contexts and user groups."
            },
            {
              id: "a1-6",
              label: "6",
              marks: 1,
              question: "Web applications shall be developed to adhere to Hypertext Markup Language (HTML) guidelines and standards.",
              answer: "**Correctness** — Conformance to professional standards and technical coding specifications."
            },
            {
              id: "a1-7",
              label: "7",
              marks: 1,
              question: "At least 20 percent of the processor capacity and storage space available to the system shall be unused at peak load seasonal periods.",
              answer: "**Efficiency** — Resource utilization (execution performance and storage headroom under peak load)."
            },
            {
              id: "a1-8",
              label: "8",
              marks: 1,
              question: "The system must implement checksums to verify that data has not been altered during transmission.",
              answer: "**Integrity** — Protection against unauthorized data alteration and security/tampering control."
            },
            {
              id: "a1-9",
              label: "9",
              marks: 1,
              question: "The application should use no more than 60% of CPU resources on average during normal usage.",
              answer: "**Efficiency** — Execution performance and hardware resource constraints."
            },
            {
              id: "a1-10",
              label: "10",
              marks: 1,
              question: "Accuracy of warehouse temperature readings will be within plus or minus two degrees Celsius.",
              answer: "**Correctness** — Precision of calculation and measurement accuracy as specified in requirements."
            },
            {
              id: "a1-11",
              label: "11",
              marks: 1,
              question: "The firmware of medical laboratory equipment is required to process its results according to a standard data structure that can then serve as input for a number of standard laboratory Information Systems.",
              answer: "**Interoperability** — Standardized interfaces enabling communication with multiple outside systems."
            },
            {
              id: "a1-12",
              label: "12",
              marks: 1,
              question: "The account update process shall roll back all related updates when any update fails to commit.",
              answer: "**Reliability** — Fault tolerance, rollback failure recovery, and maintaining consistency upon errors."
            },
            {
              id: "a1-13",
              label: "13",
              marks: 1,
              question: "The baselined version 2 of the spreadsheet must be able to access information from the previous baselined version.",
              answer: "**Portability** (Backward compatibility across system environments and versions)."
            },
            {
              id: "a1-14",
              label: "14",
              marks: 1,
              question: "A new consumer type code must be able to be added to the product within 12 business hours.",
              answer: "**Maintainability** — Effort required to diagnose, modify, and verify a change in operational software."
            },
            {
              id: "a1-15",
              label: "15",
              marks: 1,
              question: "The software must run on Windows, macOS, and Linux environments without requiring modifications.",
              answer: "**Portability** — Effort required to transport software from one hardware/operating system platform to another."
            },
            {
              id: "a1-16",
              label: "16",
              marks: 1,
              question: "Its heart attack detection function is required to have a failure rate of less than one per million cases.",
              answer: "**Reliability** — Maximum allowed failure rate in safety-critical operations."
            },
            {
              id: "a1-17",
              label: "17",
              marks: 1,
              question: "A staff member should be able to handle at least 60 service calls a day.",
              answer: "**Efficiency** — Processing throughput capacity per unit of operational time."
            },
            {
              id: "a1-18",
              label: "18",
              marks: 1,
              question: "The size of a SW module will not exceed 30 statements.",
              answer: "**Maintainability** — Modular simplicity designed to minimize debugging effort."
            },
            {
              id: "a1-19",
              label: "19",
              marks: 1,
              question: "Development of functionality to support the Electronic Funds Transfer (EFT) payment option shall be modularised.",
              answer: "**Verifiability** / **Maintainability** — Modular construction to facilitate formal verification and testing."
            },
            {
              id: "a1-20",
              label: "20",
              marks: 1,
              question: "All SmartMeter systems will provide a standard interface that can be used by meter operators for installation and maintenance purposes without disturbing any meter seals and reinstating any tamper detection covers.",
              answer: "**Interoperability** / **Maintainability** — Standardized maintenance interface interoperability."
            }
          ]
        }
      ]
    }
  ]
};
