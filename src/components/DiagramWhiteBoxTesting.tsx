import React, { useState } from 'react';
import { 
  Calculator, 
  GitBranch, 
  CheckCircle, 
  Layers, 
  Info, 
  ArrowRight, 
  ShieldCheck,
  Zap,
  Play
} from 'lucide-react';
import MermaidDiagram from '@/components/MermaidDiagram';

export const DiagramWhiteBoxTesting: React.FC = () => {
  const [selectedFormula, setSelectedFormula] = useState<'edges' | 'predicates' | 'regions'>('edges');
  const [activePathIndex, setActivePathIndex] = useState<number | null>(0);

  const basisPaths = [
    {
      id: 1,
      name: "Basis Path 1 (Day Rate, Under Minimum)",
      path: "1 → 2 → 3 → 15 → 16 → 17",
      condition: "Daytime + Distance < Minimum Fare Threshold",
      result: "Charge minimum flat base fee",
      color: "border-sky-500/40 text-sky-300"
    },
    {
      id: 2,
      name: "Basis Path 2 (Day Rate, Normal Distance)",
      path: "1 → 2 → 4 → 5 → 6 → 15 → 16 → 17",
      condition: "Daytime + Distance >= Minimum + Normal Traffic",
      result: "Calculate standard per-km daytime fare",
      color: "border-emerald-500/40 text-emerald-300"
    },
    {
      id: 3,
      name: "Basis Path 3 (Day Rate, Heavy Traffic Idle)",
      path: "1 → 2 → 4 → 5 → 7 → 8 → 9 → 15 → 16 → 17",
      condition: "Daytime + Heavy Traffic (Speed < 10 km/h)",
      result: "Add waiting/idle time congestion surcharge",
      color: "border-amber-500/40 text-amber-300"
    },
    {
      id: 4,
      name: "Basis Path 4 (Night Rate, Standard Run)",
      path: "1 → 2 → 4 → 5 → 7 → 8 → 10 → 11 → 12 → 15 → 16 → 17",
      condition: "Nighttime hours (22:00–06:00) + Normal run",
      result: "Apply 25% nighttime premium multiplier",
      color: "border-purple-500/40 text-purple-300"
    },
    {
      id: 5,
      name: "Basis Path 5 (Night Rate, Peak Holiday)",
      path: "1 → 2 → 4 → 5 → 7 → 8 → 10 → 11 → 13 → 14 → 15 → 16 → 17",
      condition: "Nighttime + Public Holiday calendar flag",
      result: "Apply statutory double-rate tariff",
      color: "border-rose-500/40 text-rose-300"
    },
    {
      id: 6,
      name: "Basis Path 6 (Special Airport/Out-of-Town Zone)",
      path: "1 → 2 → 4 → 5 → 7 → 8 → 10 → 11 → 13 → 14(alt) → 15 → 16 → 17",
      condition: "Crossed municipal boundary / Airport tollway",
      result: "Include fixed return-journey boundary surcharge",
      color: "border-cyan-500/40 text-cyan-300"
    }
  ];

  const pfgMermaid = `flowchart TD
  N1(["1: Start Module"]) --> N2{"2: Day or Night?"}
  N2 -->|"Day: Under Min"| N3["3: Base Minimum Flat Fee"]
  N2 -->|"Standard Distance"| N4["4: Calculate Base Km"]
  
  N3 --> N15["15: Aggregate Surcharges"]
  N4 --> N5{"5: Traffic Congestion?"}
  
  N5 -->|"Normal Speed"| N6["6: Standard Rate Mileage"]
  N5 -->|"Low Speed / Idle"| N7["7: Compute Waiting Minutes"]
  
  N6 --> N15
  N7 --> N8{"8: Tariff Band?"}
  
  N8 -->|"Standard Day"| N9["9: Day Congestion Surcharge"]
  N8 -->|"Night Mode"| N10["10: Night Tariff (25% Multiplier)"]
  
  N9 --> N15
  N10 --> N11{"11: Holiday Calendar?"}
  
  N11 -->|"Standard Night"| N12["12: Standard Night Fare"]
  N11 -->|"Public Holiday"| N13["13: Double Holiday Rate"]
  
  N12 --> N15
  N13 --> N14{"14: Airport / Outer Zone?"}
  
  N14 -->|"Zone Surcharge"| N15
  N14 -->|"Within Metro"| N15
  
  N15 --> N16["16: Compute VAT & Round to 50n"]
  N16 --> N17(["17: Print Receipt / End"])

  classDef predicate fill:#4338ca,stroke:#818cf8,stroke-width:2px,color:#ffffff;
  classDef process fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#f8fafc;
  classDef terminal fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#ffffff;

  class N2,N5,N8,N11,N14 predicate;
  class N3,N4,N6,N7,N9,N10,N12,N13,N15,N16 process;
  class N1,N17 terminal;`;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 text-slate-100 shadow-2xl space-y-6">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase font-mono flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5 text-indigo-400" />
            UNZA Topic 9 · Question B6 Compulsory (15 Marks)
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
            White Box Testing: Program Flow Graph & McCabe's Cyclomatic Complexity
          </h3>
          <p className="text-xs text-slate-400 max-w-2xl mt-1 leading-relaxed">
            The foundational structural testing model applied to the <strong>ITS Taximeter Module</strong>. Illustrates the control flow graph, 5 decision nodes, 6 linearly independent basis execution paths, and the 3 mathematical formulas.
          </p>
        </div>

        {/* Metric Formula Pills */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs shadow-inner">
          <button
            onClick={() => setSelectedFormula('edges')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedFormula === 'edges' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Formula 1: E - N + 2
          </button>
          <button
            onClick={() => setSelectedFormula('predicates')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedFormula === 'predicates' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Formula 2: P + 1
          </button>
          <button
            onClick={() => setSelectedFormula('regions')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedFormula === 'regions' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Formula 3: R (Regions)
          </button>
        </div>
      </div>

      {/* FORMULA MATHEMATICAL PROOF STRIP */}
      <div className="p-4 bg-indigo-950/40 border border-indigo-500/40 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
        <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] text-indigo-300 font-bold uppercase block">Formula 1: Edges & Nodes</span>
          <div className="text-sm font-bold text-white">V(G) = E - N + 2</div>
          <div className="text-emerald-300 font-bold">21 - 17 + 2 = 6 Paths</div>
          <div className="text-[11px] text-slate-400">Edges (E) = 21 · Nodes (N) = 17</div>
        </div>

        <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] text-indigo-300 font-bold uppercase block">Formula 2: Predicate Nodes</span>
          <div className="text-sm font-bold text-white">V(G) = P + 1</div>
          <div className="text-emerald-300 font-bold">5 + 1 = 6 Paths</div>
          <div className="text-[11px] text-slate-400">Predicate Decisions (P) = 5 (Nodes 2, 5, 8, 11, 14)</div>
        </div>

        <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
          <span className="text-[10px] text-indigo-300 font-bold uppercase block">Formula 3: Planar Regions</span>
          <div className="text-sm font-bold text-white">V(G) = R</div>
          <div className="text-emerald-300 font-bold">R = 6 Regions</div>
          <div className="text-[11px] text-slate-400">5 Enclosed Loops + 1 Outer Unbounded Region</div>
        </div>
      </div>

      {/* LIVE PROGRAM FLOW GRAPH (PFG) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono flex items-center gap-2">
            <span>📈</span>
            <span>Program Flow Graph (PFG) · ITS Taximeter Module</span>
          </h4>
          <span className="text-[11px] text-indigo-400 font-mono font-semibold">
            Nodes 2, 5, 8, 11, 14 are Predicates (Out-degree &gt; 1)
          </span>
        </div>

        <MermaidDiagram code={pfgMermaid} title="ITS Taximeter Program Flow Graph" />
      </div>

      {/* BASIS SET OF 6 INDEPENDENT PATHS */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-400 uppercase">
              Basis Set of 6 Independent Paths
            </span>
            <h4 className="text-sm font-bold text-white mt-0.5">
              Minimum Test Cases to Achieve 100% Branch & Statement Coverage
            </h4>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-xl border border-emerald-500/40">
            6 Tests &lt; 24 Exhaustive Path Tests
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {basisPaths.map((bp, idx) => {
            const isSelected = activePathIndex === idx;
            return (
              <div
                key={bp.id}
                onClick={() => setActivePathIndex(idx)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer space-y-2 ${
                  isSelected
                    ? 'bg-slate-800 border-indigo-400 shadow-lg ring-2 ring-indigo-500/30'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-300">
                    Path #{bp.id}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {bp.name.split('(')[1]?.replace(')', '') || 'Normal'}
                  </span>
                </div>
                <div className="text-xs font-mono font-semibold text-emerald-300 bg-slate-950 p-2 rounded-lg border border-slate-800/80 overflow-x-auto">
                  {bp.path}
                </div>
                <div className="text-[11px] text-slate-300 leading-snug">
                  <strong>Trigger:</strong> {bp.condition}
                </div>
                <div className="text-[10px] text-cyan-300/90 italic">
                  <strong>Outcome:</strong> {bp.result}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PATH VS LINE COVERAGE COMPARISON */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
        <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
          Coverage Comparison: Path Coverage vs Line Coverage (15 Marks Theory)
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5">
            <span className="font-bold text-cyan-400 text-xs font-mono block">Path Coverage (Exhaustive)</span>
            <p className="text-slate-300 leading-relaxed">
              Exercises every single combinatorial combination of decision outcomes. Catches compound branch bugs. However, suffers from <strong>combinatorial explosion</strong> (the ITS taximeter has <strong>24 possible paths</strong>, while real systems have millions).
            </p>
          </div>

          <div className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5">
            <span className="font-bold text-emerald-400 text-xs font-mono block">Line / Statement Coverage</span>
            <p className="text-slate-300 leading-relaxed">
              Requires every executable statement to be executed at least once. The ITS taximeter module requires only <strong>3 test cases</strong> for 100% statement coverage, but leaves critical branch combinations untested.
            </p>
          </div>
        </div>

        <div className="p-3 bg-blue-950/30 border border-blue-500/30 rounded-xl text-xs text-blue-200 flex items-center justify-between">
          <span>
            <strong>McCabe's Synthesis:</strong> Cyclomatic complexity V(G) = 6 establishes the exact optimal basis set—testing all 6 independent paths achieves 100% branch and statement coverage without the 24-test explosion!
          </span>
        </div>
      </div>
    </div>
  );
};
