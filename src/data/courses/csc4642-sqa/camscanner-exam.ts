import { Paper } from "@/types";

export const csc4642_CamScannerExam: Paper = {
  id: "csc4642-camscanner-exam",
  slug: "camscanner-exam",
  title: "CamScanner Past Paper (DOC-20261003)",
  year: 2024,
  duration: "3 Hours",
  totalMarks: 100,
  paperType: "Final Exam",
  sections: [
    {
      id: "section-a",
      name: "Compulsory Examination Questions",
      instructions: "Answer ALL questions in this paper.",
      compulsory: true,
      questions: [
        {
          id: "cs-q1",
          number: "Question 1",
          title: "Control Flow Graph & Cyclomatic Complexity",
          marks: 20,
          subQuestions: [
            {
              id: "cs-q1-code",
              label: "Program Code",
              marks: 0,
              question: "Consider the following program:\n```text\nIF A = 10 THEN\n    IF B > C THEN\n        A = B\n    ELSE\n        A = C\n    ENDIF\nENDIF\nPrint A\nPrint B\nPrint C\n```",
              answer: "The program evaluates whether variable A equals 10. If true, it compares B and C to assign the larger value to A. Finally, it prints A, B, and C."
            },
            {
              id: "cs-q1-1",
              label: "I",
              marks: 5,
              question: "Develop the Flow Chart for the program. [5 marks]",
              answer: "```mermaid\nflowchart TD\n  N1[\"1. Start: Node 1\"] --> N2{\"2. A = 10?\"}\n  N2 -->|Yes| N3{\"3. B > C?\"}\n  N2 -->|No| N6[\"6. Print A, B, C\"]\n  N3 -->|Yes| N4[\"4. A = B\"]\n  N3 -->|No| N5[\"5. A = C\"]\n  N4 --> N6\n  N5 --> N6\n  N6 --> N7[\"7. End\"]\n```\n\n```text\n             [Start: Node 1]\n                    |\n                    v\n             < A = 10? > (Node 2)\n             /         \\\n       [YES]           [NO]\n         /               \\\n        v                 |\n   < B > C? > (Node 3)    |\n     /     \\              |\n  [YES]   [NO]            |\n   /         \\            |\n  v           v           |\n[A = B]    [A = C]        |\n(Node 4)   (Node 5)       |\n   \\         /            |\n    \\       /             |\n     v     v              |\n    [Print A, B, C] <-----+ (Node 6)\n          |\n          v\n       [End] (Node 7)\n```"
            },
            {
              id: "cs-q1-2",
              label: "II",
              marks: 5,
              question: "Develop the Program Flow Graph for the program. [5 marks]",
              answer: "### Flow Graph Representation:\n- **Nodes (N = 7):**\n  - Node 1: Entry / Start\n  - Node 2: Decision `A = 10`\n  - Node 3: Decision `B > C`\n  - Node 4: Assignment `A = B`\n  - Node 5: Assignment `A = C`\n  - Node 6: Sequential `Print A, B, C`\n  - Node 7: Exit / End\n- **Edges (E = 8):**\n  - 1 → 2 (Entry to first condition)\n  - 2 → 3 (`A = 10` is TRUE)\n  - 2 → 6 (`A = 10` is FALSE, skips nested if)\n  - 3 → 4 (`B > C` is TRUE)\n  - 3 → 5 (`B > C` is FALSE)\n  - 4 → 6 (Merge to print statements)\n  - 5 → 6 (Merge to print statements)\n  - 6 → 7 (Print to Exit)"
            },
            {
              id: "cs-q1-3",
              label: "III",
              marks: 2,
              question: "Compute the Cyclomatic Complexity of the program. [2 marks]",
              answer: "### Method 1: Edge-Node Formula\nV(G) = E - N + 2\nV(G) = 8 - 7 + 2 = 3\n\n### Method 2: Predicate Node Formula\nV(G) = P + 1\nWhere predicate nodes with binary branches are Node 2 (`A = 10`) and Node 3 (`B > C`), so P = 2:\nV(G) = 2 + 1 = 3\n\n### Method 3: Enclosed Regions\nTwo enclosed regions + one unbounded outer region = 3."
            },
            {
              id: "cs-q1-4",
              label: "IV",
              marks: 5,
              question: "Show the set of independent paths resulting from your computation in (iii). [5 marks]",
              answer: "The set of 3 linearly independent paths forming the basis set:\n\n1. **Path 1 (False at outer condition):**\n   `1 → 2 → 6 → 7`\n   *(Condition: A ≠ 10)*\n\n2. **Path 2 (True outer, True inner):**\n   `1 → 2 → 3 → 4 → 6 → 7`\n   *(Conditions: A = 10 and B > C)*\n\n3. **Path 3 (True outer, False inner):**\n   `1 → 2 → 3 → 5 → 6 → 7`\n   *(Conditions: A = 10 and B ≤ C)*"
            },
            {
              id: "cs-q1-5",
              label: "V",
              marks: 3,
              question: "Comment on the overall complexity of the program based on the Cyclomatic Complexity you computed. [3 marks]",
              answer: "A Cyclomatic Complexity of **3** indicates a **simple, low-risk, and highly maintainable program**. According to McCabe's complexity scale (V(G) ≤ 10), the program has low cognitive load, is easy to understand, and requires only 3 test cases to achieve 100% basis path coverage."
            }
          ]
        },
        {
          id: "cs-q2",
          number: "Question 2",
          title: "McCall Model, Metric Mapping & Zambian Fintech Case",
          marks: 20,
          subQuestions: [
            {
              id: "cs-q2-1",
              label: "I",
              marks: 5,
              question: "List McCall's 11 quality factors, grouped by category. [5 marks]",
              answer: "- **Product Operation (5 factors):** Correctness, Reliability, Efficiency, Integrity, Usability\n- **Product Revision (3 factors):** Maintainability, Flexibility, Testability\n- **Product Transition (3 factors):** Portability, Reusability, Interoperability",
              diagramType: "mccall-tree"
            },
            {
              id: "cs-q2-2",
              label: "II",
              marks: 5,
              question: "State the quality factor best measured by each metric below: [5 marks]\na. Mean size of documentation per module\nb. Average learning time required for a new user to achieve proficiency\nc. Proportion of modules reused in multiple applications\nd. Number of failures encountered during stress testing under peak load\ne. Percentage of functions accessible through shortcuts/automation\nf. Effort required to transfer the software from one environment/platform to another\ng. Time taken to detect and diagnose a malfunction after it occurs\nh. Ratio of valid outputs produced compared to total outputs generated\ni. Frequency of patches to meet new security threats\nj. Number of interactions required to complete a workflow",
              answer: "a. **Maintainability**\nb. **Usability** (Learnability)\nc. **Reusability**\nd. **Reliability**\ne. **Usability** (Efficiency / Operability)\nf. **Portability**\ng. **Maintainability**\nh. **Correctness**\ni. **Integrity**\nj. **Usability**"
            },
            {
              id: "cs-q2-3a",
              label: "III.a",
              marks: 4,
              question: "A Zambian fintech company recently launched a mobile money transfer app. After release, customers reported frequent crashes, delayed transactions, and security concerns. Explain four key quality attributes that were likely compromised. [4 marks]",
              answer: "1. **Reliability:** Compromised due to frequent app crashes and service interruptions during transfers.\n2. **Efficiency:** Compromised due to high transaction latency and slow server response times under peak mobile network loads.\n3. **Integrity:** Compromised due to customer security concerns, lack of tamper detection, or weak encryption.\n4. **Correctness:** Compromised because delayed and crashing transactions fail to complete business logic accurately as expected."
            },
            {
              id: "cs-q2-3b",
              label: "III.b",
              marks: 6,
              question: "For each attribute, propose specific SQA techniques that could have prevented the issue. [6 marks]",
              answer: "| Compromised Attribute | Preventative SQA Technique |\n|---|---|\n| **Reliability** | Stress testing under erratic network conditions, Automated regression testing, Chaos engineering |\n| **Efficiency** | Load testing, Profiling database queries, Concurrency and queue benchmarking |\n| **Integrity** | Penetration testing, Automated vulnerability scanning, Rigorous security audits of access control and APIs |\n| **Correctness** | Equivalence class partitioning on transaction amounts, Unit test coverage of edge cases, Automated formal reviews |"
            }
          ]
        },
        {
          id: "cs-q3",
          number: "Question 3",
          title: "Error Taxonomy & Course Registration System Scenario",
          marks: 20,
          subQuestions: [
            {
              id: "cs-q3-1",
              label: "I",
              marks: 3,
              question: "Distinguish among software error, software fault and software failure. [3 marks]",
              answer: "- **Software Error:** A human mistake made during analysis, design, or coding.\n- **Software Fault:** An incorrect internal state or bug residing in a code or document artifact resulting from the error.\n- **Software Failure:** A runtime deviation from expected behaviour that disrupts user operations when the fault is executed.",
              diagramType: "error-chain"
            },
            {
              id: "cs-q3-2a",
              label: "II.a",
              marks: 6,
              question: "A software company built a university course registration system. According to the requirements, the system should prevent students from enrolling in more than six courses per semester. During implementation: The developer mistakenly coded the limit as 10 courses. Most students rarely register for more than five courses, since university policy recommends taking between 4-6. After release, an ambitious student attempted to register for nine courses. The system allowed the registration to proceed, resulting in an academic overload.\nIdentify and clearly define the software error, software fault, and software failure in this scenario. [6 marks]",
              answer: "- **The Software Error:** The human mistake made by the programmer when writing the conditional check (`if (count > 10)` instead of `if (count > 6)`).\n- **The Software Fault:** The static defect residing in the codebase that accepts course counts up to 10 without rejecting the request.\n- **The Software Failure:** The dynamic event where the ambitious student registered for 9 courses, and the system accepted it, causing an academic overload in the database."
            },
            {
              id: "cs-q3-2b",
              label: "II.b",
              marks: 3,
              question: "Explain why the software fault did not lead to a software failure for most students. [3 marks]",
              answer: "Because most students registered for 5 or fewer courses, which fell below both the intended limit (6) and the faulty limit (10). Therefore, the faulty code branch was never activated for regular students. A fault only causes a failure when activated by dynamic operational input that triggers the flawed logic."
            },
            {
              id: "cs-q3-2c",
              label: "II.c",
              marks: 8,
              question: "Based on the nine causes of software errors, identify four likely causes that may have led to this error. Justify your choices. [8 marks]",
              answer: "1. **Coding Error:** A simple keystroke error or mental slip where the developer typed `10` instead of `6`.\n2. **Faulty Requirement Definition:** The requirements document may have been ambiguous or mentioned 'maximum credits' in a way that the developer misinterpreted as 10 courses.\n3. **Client-Developer Communication Failure:** Inadequate clarification meetings between the university registrar and the programming team.\n4. **Shortcomings of the Testing Process:** Test cases failed to test the boundary condition (registering 7 courses) which would have immediately flagged the defect before production deployment."
            }
          ]
        },
        {
          id: "cs-q4",
          number: "Question 4",
          title: "Bus Ticket System: Equivalence Partitioning & Boundary Value Analysis",
          marks: 20,
          subQuestions: [
            {
              id: "cs-q4-1",
              label: "I",
              marks: 2,
              question: "What are the variables in the bus ticket system? [2 marks]",
              answer: "1. **Day of Week:** Weekday (Mon–Fri) vs. Weekend (Sat–Sun)\n2. **Mode of Payment:** Cash vs. Card\n3. **Time of Travel:** Peak hours vs. Off-peak hours\n4. **Passenger Category / Age:** Child (0–13), Adult (13.01–60), Senior (60.01–120), Special Needs"
            },
            {
              id: "cs-q4-2",
              label: "II",
              marks: 4,
              question: "List the valid equivalence classes for the module. [4 marks]",
              answer: "- **Day of Week:** EC1: Weekday (Monday–Friday), EC2: Weekend (Saturday–Sunday)\n- **Payment Mode:** EC3: Cash, EC4: Card\n- **Time of Travel:** EC5: Peak (05:00–09:00), EC6: Off-Peak (09:01–23:45)\n- **Passenger Age:** EC7: Child (0 ≤ age ≤ 13), EC8: Adult (13 < age ≤ 60), EC9: Senior (60 < age ≤ 120), EC10: Special Needs Category"
            },
            {
              id: "cs-q4-3",
              label: "III",
              marks: 4,
              question: "Suggest representational values for each of the valid equivalence classes. [4 marks]",
              answer: "- **Day of Week:** Wednesday (EC1), Sunday (EC2)\n- **Payment Mode:** Cash (EC3), Card (EC4)\n- **Time of Travel:** 07:30 (EC5), 14:15 (EC6)\n- **Passenger Age:** Age 7 (EC7), Age 32 (EC8), Age 72 (EC9), 'Wheelchair Access' (EC10)"
            },
            {
              id: "cs-q4-4",
              label: "IV",
              marks: 2,
              question: "What are the boundary values for the valid equivalence classes? [2 marks]",
              answer: "- **Passenger Age Boundaries:** 0, 13, 13.01, 60, 60.01, 120\n- **Time Boundaries:** 05:00, 09:00, 09:01, 23:45"
            },
            {
              id: "cs-q4-5",
              label: "V",
              marks: 4,
              question: "List the invalid equivalence classes for the module. [4 marks]",
              answer: "- **Invalid Day:** Non-day strings (e.g., 'Holiday', 'Mox', numeric values)\n- **Invalid Payment:** Cheque, Crypto, foreign currency\n- **Invalid Time:** Times between 23:46 and 04:59 (system closed), negative times, non-time text\n- **Invalid Age:** Negative numbers (age < 0), unrealistic age (> 120), non-numeric characters"
            },
            {
              id: "cs-q4-6",
              label: "VI",
              marks: 4,
              question: "Suggest representational values for each of the invalid equivalence classes. [4 marks]",
              answer: "- **Day:** 'Funday', 'XYZ'\n- **Payment:** 'Bitcoin', '88'\n- **Time:** '03:15', '24:01', 'AM:PM'\n- **Age:** -5, 145, 'Twenty'"
            }
          ]
        },
        {
          id: "cs-q5",
          number: "Question 5",
          title: "Testing Objectives, Integration Strategies (Top-Down vs Bottom-Up)",
          marks: 20,
          subQuestions: [
            {
              id: "cs-q5-1",
              label: "I",
              marks: 3,
              question: "State the three direct objectives of testing. [3 marks]",
              answer: "1. **Identify and reveal defects:** Execute software under controlled conditions to uncover as many software faults as possible.\n2. **Attain acceptable quality level:** Verify that after defect removal, software satisfies functional and quality standards.\n3. **Perform testing within budget and timetable:** Maximize defect detection density efficiently within planned resource constraints."
            },
            {
              id: "cs-q5-2",
              label: "II",
              marks: 5,
              question: "State the five key aspects that should characterise the definition of testing. [5 marks]",
              answer: "1. **Formality:** Conducted in accordance with formally approved test plans.\n2. **Specialized Team:** Performed by an independent, trained, unbiased testing team.\n3. **Execution of Programs:** Requires dynamic execution of software with actual test data (distinguishing testing from static review).\n4. **Approved Test Procedures:** Follows formalized execution protocols and test methodologies.\n5. **Approved Test Cases:** Guided by predetermined inputs, expected results, and pass/fail criteria."
            },
            {
              id: "cs-q5-3a",
              label: "III.a",
              marks: 8,
              question: "Consider the following system: Module M12 is integrated with five lower-level Modules and only one upper-level Module. Illustrate and describe both top-down and bottom-up testing of the system. [8 marks]",
              answer: "### Architecture Hierarchy:\n```mermaid\nflowchart TD\n  M0[\"Upper-Level M0\"] --> M12[\"Module M12\"]\n  M12 --> L1[\"Lower Module L1\"]\n  M12 --> L2[\"Lower Module L2\"]\n  M12 --> L3[\"Lower Module L3\"]\n  M12 --> L4[\"Lower Module L4\"]\n  M12 --> L5[\"Lower Module L5\"]\n```\n\n```text\n       [Upper-Level M0]\n              |\n            [M12]\n    /    /    |    \\    \\\n  [L1] [L2] [L3]  [L4]  [L5]\n```\n\n### Top-Down Testing Strategy:\n- Testing begins at the top with Module M0, then incorporates M12.\n- Lower-level modules L1–L5 are replaced by **stubs** (dummy simulator routines).\n- Stubs are progressively substituted with real modules as testing proceeds downwards.\n\n### Bottom-Up Testing Strategy:\n- Testing begins at the terminal leaf level by testing modules L1, L2, L3, L4, and L5 individually.\n- Because the calling module (M12) is not yet integrated, a **driver** (test harness) is developed to simulate M12, feed inputs, and collect outputs from L1–L5.\n- Once verified, M12 is tested, and finally a driver simulates M0."
            },
            {
              id: "cs-q5-3b",
              label: "III.b",
              marks: 4,
              question: "Discuss how stubs and drivers are used in top-down and bottom-up testing of the system. [4 marks]",
              answer: "- **Stubs (Used in Top-Down Testing):** Dummy subordinate routines that stand in for lower-level modules not yet integrated. They simulate basic functionality by returning hardcoded values or mocking responses so the higher-level caller (M12) can be exercised.\n- **Drivers (Used in Bottom-Up Testing):** Test harness programs written to act as the calling parent module. They set up test inputs, invoke the lower-level module under test (L1–L5), capture the returned results, and compare them with expected outputs."
            }
          ]
        }
      ]
    }
  ]
};
