import { Paper } from "@/types";

export const csc4642_WhiteBoxTestingGuide: Paper = {
  id: "csc4642-white-box-testing",
  slug: "white-box-testing-guide",
  title: "White Box Testing — Comprehensive Revision Guide & Worked Examples (Topic 9)",
  year: 2026,
  duration: "3 Hours",
  totalMarks: 100,
  paperType: "Test",
  venue: "UNZA Computer Science Department",
  sections: [
    {
      id: "section-1-theory",
      name: "Part 1: White Box Testing Core Theory & Foundations",
      instructions: "Fundamental principles, strategies, and architectural models.",
      compulsory: true,
      questions: [
        {
          id: "wbt-q1",
          number: "Topic 1",
          title: "Definition, Core Idea, and White Box vs Black Box Testing",
          marks: 10,
          subQuestions: [
            {
              id: "wbt-q1-1",
              label: "1.1",
              marks: 10,
              question: "Define white box testing and contrast it with black box testing across objectives, knowledge requirements, focus, and error detection capabilities. [10 marks]",
              answer: "### 1. Definition and Core Idea\n**White box testing** (also called **structural testing** or **glass box testing**) is testing that takes into account the **internal mechanism** of a system or component (Topic 9, p. 27). It examines internal calculation paths in order to identify bugs and investigates the correctness of code structure (Topic 9, p. 26).\n\nIt is the direct opposite of **black box testing**, which ignores internal mechanism and focuses exclusively on outputs generated from selected inputs.\n\n> **Core Distinction:**\n> - **Black Box:** Functionality testing — *WHAT* the software does.\n> - **White Box:** Structural testing — *HOW* the software does it internally.\n\n---\n\n### 2. White Box vs Black Box Comparison Table\n\n| Aspect | White Box Testing | Black Box Testing |\n| :--- | :--- | :--- |\n| **Also Called** | Structural / Glass Box / Open Box testing | Functional / Behavioural / Closed Box testing |\n| **Primary Focus** | Internal code, logic paths, loops, conditions | Input stimuli and observable output responses |\n| **Knowledge Required** | Programming language syntax, code access, algorithms | System specifications, user requirements, domain rules |\n| **Typical Example** | Verifying branch coverage of nested `if-else` loops | Clicking a dropdown list and verifying values expand |\n| **Main Strength** | Uncovers logic bugs, arithmetic faults, dead code, memory leaks | Detects missing functional requirements and usability issues |\n| **Primary Weakness** | Impractical for full system path coverage; expensive | Blind to internal calculation bugs and hidden security flaws |\n| **Who Performs It** | Software developers, white-box test engineers | Independent QA testers, business analysts, end users |",
              keyPoints: [
                "White box: Structural/glass box examining internal code and logic paths",
                "Black box: Functional testing evaluating inputs vs outputs",
                "Comparison: focus, knowledge needed, examples, strengths, and weaknesses"
              ]
            }
          ]
        },
        {
          id: "wbt-q2",
          number: "Topic 2",
          title: "Coverage Strategies: Path Coverage vs Line Coverage",
          marks: 15,
          subQuestions: [
            {
              id: "wbt-q2-1",
              label: "2.1",
              marks: 15,
              question: "Explain path coverage and line coverage. Discuss their advantages, disadvantages, and the practical challenges of path explosion. [15 marks]",
              answer: "### Coverage Strategies: Path Coverage vs Line Coverage\n\nIn white box testing, an application may possess thousands or millions of possible execution trajectories. Two primary coverage metrics are used:\n\n#### 1. Path Coverage\n- **Definition:** Plans tests to exercise **every possible execution path** through the code.\n- **Measurement:**\n  Path Coverage (%) = (Number of paths exercised / Total possible paths) × 100\n- **Advantage:** Provides the most thorough, complete logical coverage; identifies complex multi-condition interactions.\n- **Disadvantage:** **Combinatorial Explosion.** In any program containing loops or sequential branches, the total number of paths grows exponentially (2^n for n sequential `if` statements). It is practically impossible for non-trivial modules.\n- **Application:** Reserved strictly for **safety-critical and high-risk modules** (e.g., flight control, medical insulin pumps, financial clearing engines).\n\n#### 2. Line (Statement) Coverage\n- **Definition:** Plans tests to ensure that **every single line of executable source code** is executed at least once.\n- **Measurement:**\n  Line Coverage (%) = (Lines of code executed / Total executable code lines) × 100\n- **Advantage:** Requires dramatically fewer test cases than path coverage; cost-effective and easy to measure with automated profilers.\n- **Disadvantage:** Weakest white-box metric. Leaves the majority of branch combinations and condition states untested. A program can achieve 100% line coverage and still harbor severe logic errors.\n\n---\n\n#### Imperial Taxi Services (ITS) Comparison:\n- **Full Path Coverage:** Requires at least **24 test cases** (exhaustive & resource-intensive).\n- **Full Line Coverage:** Requires only **3 test cases** (cheaper but leaves paths untested).",
              keyPoints: [
                "Path coverage: All possible paths; complete but suffers from combinatorial explosion",
                "Line coverage: All lines executed at least once; cheap but leaves paths untested",
                "ITS example: 24 test cases (path) vs 3 test cases (line)",
                "Path coverage reserved for safety-critical modules"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "section-2-its-taximeter",
      name: "Part 2: Worked Example — Imperial Taxi Services (ITS) Taximeter",
      instructions: "Comprehensive case study with complete flowchart, program flow graph, path calculations, and McCabe complexity.",
      compulsory: true,
      questions: [
        {
          id: "wbt-q3",
          number: "Topic 3",
          title: "ITS Taximeter Module Architecture & Flowchart",
          marks: 15,
          subQuestions: [
            {
              id: "wbt-q3-1",
              label: "3.1",
              marks: 15,
              question: "Describe the ITS Taximeter module rules, nodes, decisions, and present the complete Mermaid flowchart. [15 marks]",
              answer: "### Imperial Taxi Services (ITS) Taximeter Module\n\nThe ITS Taximeter calculates passenger taxi fares based on five independent operational conditions:\n1. **Distance (D):** If D > 1000 yards, add 25¢ per 250 yards; otherwise no extra charge.\n2. **Waiting Time (WT):** If WT > 3 minutes, add 20¢ per 2 minutes; otherwise no extra charge.\n3. **Suitcases (S):** If S > 1, add $1 per suitcase; otherwise no extra charge.\n4. **Regular Client:** If regular client, apply a 10% discount; otherwise no discount.\n5. **Night Journey:** If journey occurs between 20:00 and 06:00, add a 25% night supplement; otherwise no supplement.\n\n#### Module Architecture:\n- **Total Nodes (N):** 17 nodes (1 to 17)\n- **Total Edges (E):** 21 directed edges\n- **Decision Nodes (P):** 5 decision points (Nodes 2, 5, 8, 11, 14)\n\n```mermaid\nflowchart TD\n  N1[\"1. Charge Minimal Base Fare\"]\n  N2{\"2. Distance D > 1000?\"}\n  N3[\"3. Add 25c / 250 yds\"]\n  N4[\"4. No Extra Distance Charge\"]\n  N5{\"5. Waiting Time WT > 3?\"}\n  N6[\"6. Add 20c / 2 mins\"]\n  N7[\"7. No Extra Waiting Charge\"]\n  N8{\"8. Suitcases S > 1?\"}\n  N9[\"9. Add $1 / Suitcase\"]\n  N10[\"10. No Suitcase Surcharge\"]\n  N11{\"11. Regular Client?\"}\n  N12[\"12. Apply 10% Discount\"]\n  N13[\"13. No Discount\"]\n  N14{\"14. Night Journey?\"}\n  N15[\"15. Add 25% Supplement\"]\n  N16[\"16. No Night Supplement\"]\n  N17[\"17. Print Receipt & Total\"]\n\n  N1 --> N2\n  N2 -->|Yes| N3\n  N2 -->|No| N4\n  N3 --> N5\n  N4 --> N5\n  N5 -->|Yes| N6\n  N5 -->|No| N7\n  N6 --> N8\n  N7 --> N8\n  N8 -->|Yes| N9\n  N8 -->|No| N10\n  N9 --> N11\n  N10 --> N11\n  N11 -->|Yes| N12\n  N11 -->|No| N13\n  N12 --> N14\n  N13 --> N14\n  N14 -->|Yes| N15\n  N14 -->|No| N16\n  N15 --> N17\n  N16 --> N17\n```",
              keyPoints: [
                "ITS Taximeter rules: Distance, Waiting Time, Suitcases, Regular Client, Night Journey",
                "17 Nodes, 21 Edges, 5 Decisions (Nodes 2, 5, 8, 11, 14)",
                "Complete sequential branching flowchart"
              ]
            }
          ]
        },
        {
          id: "wbt-q4",
          number: "Topic 4",
          title: "McCabe's Cyclomatic Complexity & Independent Paths Table",
          marks: 20,
          subQuestions: [
            {
              id: "wbt-q4-1",
              label: "4.1",
              marks: 20,
              question: "Calculate McCabe's Cyclomatic Complexity V(G) for the ITS taximeter using all three formulas. Derive the 6 independent basis paths and construct the Independent Paths Table showing newly added edges. [20 marks]",
              answer: "### McCabe's Cyclomatic Complexity: ITS Taximeter Module\n\nMcCabe's cyclomatic complexity defines the **number of linearly independent execution paths** needed to achieve full line/branch coverage.\n\n#### The Three Formulas:\n1. **Formula 1 (Regions):**\n   V(G) = R\n   Where R is the number of enclosed planar regions plus 1 for the infinite outer region.\n   R = 5 enclosed + 1 outer = 6\n\n2. **Formula 2 (Edges and Nodes):**\n   V(G) = E - N + 2\n   Given E = 21, N = 17:\n   V(G) = 21 - 17 + 2 = 6\n\n3. **Formula 3 (Predicate Nodes):**\n   V(G) = P + 1\n   Given P = 5 decisions (Nodes 2, 5, 8, 11, 14 with 2 leaving edges):\n   V(G) = 5 + 1 = 6\n\n**V(G) = 6 ⇒ Exactly 6 linearly independent paths are required.**\n\n---\n\n### Independent Paths Table for ITS Taximeter\nAn **independent path** must introduce **at least one edge** not traversed by any previously defined path:\n\n| Path No. | Complete Node Sequence | New Edges Added by Path | Count of New Edges |\n| :--- | :--- | :--- | :--- |\n| **Path 1** | `1-2-3-5-6-8-9-11-12-17` *(Baseline)* | (1,2), (2,3), (3,5), (5,6), (6,8), (8,9), (9,11), (11,12), (12,17) | **9 edges** |\n| **Path 2** | `1-2-4-5-6-8-9-11-12-17` | (2,4), (4,5) | **2 edges** |\n| **Path 3** | `1-2-3-5-7-8-9-11-12-17` | (5,7), (7,8) | **2 edges** |\n| **Path 4** | `1-2-3-5-6-8-10-11-12-17` | (8,10), (10,11) | **2 edges** |\n| **Path 5** | `1-2-3-5-6-8-9-11-13-14-15-17` | (11,13), (13,14), (14,15), (15,17) | **4 edges** |\n| **Path 6** | `1-2-3-5-6-8-9-11-13-14-16-17` | (14,16), (16,17) | **2 edges** |\n\n**Total Edges Covered Across 6 Basis Paths = 9 + 2 + 2 + 2 + 4 + 2 = 21 edges (100% Edge Coverage!)**\n\n#### Complexity Risk Interpretation:\n- **V(G) < 5:** Simple program, very easy to understand and test.\n- **5 ≤ V(G) ≤ 10:** **Moderate complexity, well-structured, easy to test.** *(ITS falls here with V(G)=6)*\n- **11 ≤ V(G) ≤ 20:** Complex program, moderate risk; modular refactoring suggested.\n- **21 ≤ V(G) ≤ 50:** High complexity, error-prone, difficult to test.\n- **V(G) > 50:** Un-testable, critical hazard; immediate decomposition required.",
              keyPoints: [
                "Three formulas: V(G)=R=6, V(G)=E-N+2=21-17+2=6, V(G)=P+1=5+1=6",
                "Basis set of 6 independent paths",
                "Paths table showing newly added edges summing to all 21 edges",
                "Interpretation: V(G)=6 means moderate complexity and low risk"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "section-3-predicted-questions",
      name: "Part 3: 10 Predicted UNZA Exam Questions & 6-Day Revision Plan",
      instructions: "High-yield model exam questions and structured revision timetable.",
      compulsory: false,
      questions: [
        {
          id: "wbt-q5",
          number: "Question 1 to 5",
          title: "High-Yield Questions 1–5: Testing Strategies & McCabe Basis Paths",
          marks: 20,
          subQuestions: [
            {
              id: "wbt-q5-1",
              label: "Q1-5",
              marks: 20,
              question: "Provide exam model answers for Predicted Questions 1 to 5:\n1. Define white box testing and distinguish it from black box testing. [10m]\n2. Explain path coverage vs line coverage. [15m]\n3. Using the ITS taximeter, explain the difference between full path coverage and full line coverage with test case counts. [10m]\n4. State the three formulas for McCabe's cyclomatic complexity and calculate V(G) for E=21, N=17, P=5. [10m]\n5. Explain how McCabe's cyclomatic complexity supports basic path testing. [10m]",
              answer: "### Model Answers for Predicted Exam Questions 1 to 5\n\n#### Question 1: White Box vs Black Box Testing [10 marks]\n- **White Box:** Structural/glass box testing examining internal logic paths, decision branching, and code correctness (how it works).\n- **Black Box:** Functional testing evaluating input-to-output compliance against specifications (what it does) without internal code knowledge.\n- *Example:* White box verifies all conditional branches of an `if-else` statement; Black box clicks an \"Add Customer\" button and verifies the record displays on screen.\n\n#### Question 2: Path Coverage vs Line Coverage [15 marks]\n- **Path Coverage:** Covers all execution routes. Catches compound condition errors, but suffers from combinatorial explosion (2^n). Impractical for large systems; applied to safety-critical units.\n- **Line Coverage:** Ensures every line executes once. Requires far fewer tests, but leaves unexercised branch combinations untested.\n\n#### Question 3: ITS Taximeter Coverage Comparison [10 marks]\n- **Full Path Coverage:** 2 × 2 × 2 × 2 × 2 = 2^5 = 32 logical paths, of which **at least 24 valid paths** must be tested. Exhaustive and expensive.\n- **Full Line Coverage:** Requires **only 3 test cases** (Paths 1, 2, and 6) to execute every statement from Node 1 to Node 17.\n\n#### Question 4: McCabe Formulas & Calculation [10 marks]\n- V(G) = R\n- V(G) = E - N + 2 = 21 - 17 + 2 = 6\n- V(G) = P + 1 = 5 + 1 = 6\n- *Interpretation:* Exactly 6 basis paths needed; moderate complexity, testable.\n\n#### Question 5: How Cyclomatic Complexity Supports Basic Path Testing [10 marks]\n1. Quantifies procedural complexity as an objective numerical metric.\n2. Establishes the exact upper bound of linearly independent paths required.\n3. Enables testers to design a minimal basis set of test cases that guarantees 100% statement and branch coverage without combinatorial explosion.",
              keyPoints: [
                "Q1: White box (internal) vs Black box (external)",
                "Q2: Path coverage (exhaustive) vs Line coverage (efficient)",
                "Q3: ITS requires 24 path test cases vs 3 line test cases",
                "Q4: V(G)=6 from all 3 formulas",
                "Q5: Complexity establishes upper bound of independent test paths"
              ]
            }
          ]
        },
        {
          id: "wbt-q6",
          number: "Question 6 to 10",
          title: "High-Yield Questions 6–10 & Six-Day Revision Plan",
          marks: 20,
          subQuestions: [
            {
              id: "wbt-q6-1",
              label: "Q6-10",
              marks: 20,
              question: "Provide model answers for Predicted Questions 6 to 10:\n6. Compare white box and black box testing in a summary table. [10m]\n7. Discuss limitations of path coverage and when to apply it. [10m]\n8. Explain the difference between flowcharts and program flow graphs. [10m]\n9. Interpret a module with V(G)=6. [5m]\n10. Write short notes on Structural testing, Glass box testing, Data processing correctness, and ECP. [10m]\nInclude the Six-Day Revision Plan.",
              answer: "### Model Answers for Predicted Questions 6 to 10\n\n#### Question 6: Comparison Table [10 marks]\n| Aspect | White Box Testing | Black Box Testing |\n| :--- | :--- | :--- |\n| **Focus** | Internal code, logic, paths | Inputs and outputs |\n| **Knowledge Needed** | Programming / internal design | Requirements / specifications |\n| **Example** | Checking code branches, loops | Checking dropdown expands |\n| **Main Strength** | Finds logic and calculation faults | Finds missing or incorrect functionality |\n| **Main Weakness** | Impractical for large systems | May miss internal logic errors |\n| **Who Performs** | Developers / white-box testers | Independent testers / end users |\n\n#### Question 7: Limitations of Path Coverage [10 marks]\n- **Limitations:** Combinatorial explosion (2^n paths), vast resources, time-consuming preparation.\n- **When Appropriate:** Safety-critical systems (medical, aerospace), high-risk financial modules, and legally regulated code.\n\n#### Question 8: Flowchart vs Program Flow Graph [10 marks]\n- **Flowchart:** Diamonds = decisions; Rectangles = software process sections.\n- **Program Flow Graph:** Nodes = software sections; Edges = sequence of execution; Nodes with ≥ 2 leaving edges = decisions.\n\n#### Question 9: Interpret V(G)=6 [5 marks]\n- Module has **moderate complexity** (< 10).\n- Exactly **6 independent paths** must be tested for full line coverage.\n\n#### Question 10: Short Notes [10 marks]\n1. *Structural Testing:* White box testing taking into account internal code structure.\n2. *Glass Box Testing:* Synonym for white box emphasizing transparency into internal logic.\n3. *Data Processing Correctness:* Tests validating algorithmic accuracy and boundary limits.\n4. *Equivalence Class Partitioning:* Black box method dividing inputs into valid/invalid partitions.\n\n---\n\n### Six-Day Revision Plan for White Box Testing\n\n| Day | Study Focus | Specific Reference |\n| :--- | :--- | :--- |\n| **Day 1** | Definitions: White box, black box, structural, glass box. | Topic 9, pp. 24–27 |\n| **Day 2** | Path coverage vs Line coverage; combinatorial explosion. | Topic 9, pp. 29–31 |\n| **Day 3** | Flow charts and program flow graphs; ITS Taximeter example. | Topic 9, pp. 32–37 |\n| **Day 4** | McCabe's Cyclomatic Complexity: 3 formulas, calculation. | Topic 9, pp. 38–42 |\n| **Day 5** | Comparison table, advantages/disadvantages, ECP contrast. | Topic 9, pp. 43–47 |\n| **Day 6** | Practice calculations, basis path derivation, formula revision. | Worked Example Workshop |",
              keyPoints: [
                "Q6: Comparison table", "Q7: Path coverage limits", "Q8: Flowchart vs PFG",
                "Q9: V(G)=6 interpretation", "Q10: Short notes", "6-Day structured revision timetable"
              ]
            }
          ]
        }
      ]
    }
  ]
};
