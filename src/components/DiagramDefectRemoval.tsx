import React, { useState } from 'react';
import { 
  ArrowDown, 
  DollarSign, 
  Calculator, 
  Layers, 
  AlertCircle, 
  TrendingDown, 
  ArrowRight,
  Filter,
  CheckCircle2,
  Sliders,
  Sparkles
} from 'lucide-react';

interface PhaseData {
  id: number;
  name: string;
  code: string;
  pod: number;
  feDefault: number;
  cdr: number;
  category: "review" | "testing" | "operation";
}

export const DiagramDefectRemoval: React.FC = () => {
  const [shiftLeft, setShiftLeft] = useState(false);
  const [selectedPhaseId, setSelectedPhaseId] = useState<number>(1);

  const basePhases: PhaseData[] = [
    { id: 1, name: "Requirements Specification Review", code: "RSR", pod: 15, feDefault: 0.50, cdr: 1.0, category: "review" },
    { id: 2, name: "Design Review", code: "DR", pod: 35, feDefault: 0.50, cdr: 2.5, category: "review" },
    { id: 3, name: "Unit Test - Code", code: "UT", pod: 30, feDefault: 0.50, cdr: 6.5, category: "testing" },
    { id: 4, name: "Integration Test", code: "IT", pod: 10, feDefault: 0.50, cdr: 16.0, category: "testing" },
    { id: 5, name: "Documentation Review", code: "DocR", pod: 10, feDefault: 0.50, cdr: 16.0, category: "review" },
    { id: 6, name: "System Test", code: "ST", pod: 0, feDefault: 0.50, cdr: 40.0, category: "testing" },
    { id: 7, name: "Operation Phase", code: "OP", pod: 0, feDefault: 1.00, cdr: 110.0, category: "operation" }
  ];

  // Calculate the chain
  const computeRows = (isShifted: boolean) => {
    let carriedPD = 0;
    let runningCost = 0;
    let runningRemoved = 0;

    return basePhases.map((phase) => {
      // In shift-left, early reviews have higher effectiveness
      let fe = phase.feDefault;
      if (isShifted) {
        if (phase.code === "RSR") fe = 0.80;
        else if (phase.code === "DR") fe = 0.75;
        else if (phase.code === "UT") fe = 0.60;
      }

      const pod = phase.pod;
      const pdIn = carriedPD;
      const totalIn = pod + pdIn;
      const rd = totalIn * fe;
      const pdOut = totalIn - rd;
      const trc = rd * phase.cdr;

      carriedPD = pdOut;
      runningCost += trc;
      runningRemoved += rd;

      return {
        ...phase,
        fe,
        pdIn,
        totalIn,
        rd,
        pdOut,
        trc,
        runningCost,
        runningRemoved,
      };
    });
  };

  const currentRows = computeRows(shiftLeft);
  const examRows = computeRows(false);

  const totalInjected = currentRows.reduce((acc, r) => acc + r.pod, 0);
  const totalRemoved = currentRows.reduce((acc, r) => acc + r.rd, 0);
  const totalCost = currentRows.reduce((acc, r) => acc + r.trc, 0);
  const examTotalCost = examRows.reduce((acc, r) => acc + r.trc, 0);

  const activePhase = currentRows.find(r => r.id === selectedPhaseId) || currentRows[0];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 text-slate-100 shadow-2xl space-y-6">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase font-mono flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-emerald-400" />
            Exam Diagram & Mathematics · Question Six (14 Marks)
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
            Process-Oriented Defect Removal Plan (100 Defects)
          </h3>
          <p className="text-xs text-slate-400 max-w-2xl mt-1 leading-relaxed">
            UNZA Topic 7 (Slides 43–45) · Step-by-step defect filtering pipeline across 7 lifecycle phases showing injected defects, filtering membranes, escape rates, and cost accumulation.
          </p>
        </div>

        {/* Shift-Left Strategy Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShiftLeft(!shiftLeft)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
              shiftLeft 
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-lg shadow-emerald-500/10' 
                : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <TrendingDown className="w-4 h-4 text-emerald-400" />
            <span>{shiftLeft ? "Viewing: Shift-Left Optimization" : "Simulate Shift-Left Savings"}</span>
          </button>
        </div>
      </div>

      {/* Formulas & Notation Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/90 p-4 rounded-xl border border-slate-800 text-xs font-mono">
        <div className="space-y-0.5">
          <span className="text-slate-500 text-[10px] block">1. Total Inflow:</span>
          <span className="text-cyan-300 font-bold">Total In = POD + PD In</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-slate-500 text-[10px] block">2. Filtered (Removed):</span>
          <span className="text-emerald-300 font-bold">RD = Total In × %FE</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-slate-500 text-[10px] block">3. Escaped Downstream:</span>
          <span className="text-rose-300 font-bold">PD Out = Total In - RD</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-slate-500 text-[10px] block">4. Phase Cost (Units):</span>
          <span className="text-amber-300 font-bold">TRC = RD × CDR</span>
        </div>
      </div>

      {/* Shift Left Callout Banner */}
      {shiftLeft && (
        <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex flex-wrap items-center justify-between gap-3 animate-in fade-in">
          <div>
            <strong className="text-white font-semibold">Shift-Left Optimization Active:</strong> By investing in earlier peer reviews (Requirements Review boosted from 50% to 80% and Design Review from 50% to 75%), total removal cost drops from{' '}
            <span className="font-mono text-rose-300 font-bold">{examTotalCost.toFixed(2)} cu</span> to{' '}
            <span className="font-mono text-emerald-200 font-bold">{totalCost.toFixed(2)} cu</span>!
            <span className="ml-2 font-bold text-white bg-emerald-600/30 px-2 py-0.5 rounded border border-emerald-500/40">
              Saves {(examTotalCost - totalCost).toFixed(2)} cost units ({(((examTotalCost - totalCost) / examTotalCost) * 100).toFixed(1)}% savings)
            </span>
          </div>
          <button
            onClick={() => setShiftLeft(false)}
            className="text-xs font-mono underline text-emerald-400 hover:text-white shrink-0"
          >
            Reset to 2024 Exam Values
          </button>
        </div>
      )}

      {/* THE PROCESS-ORIENTED PIPELINE DIAGRAM */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono flex items-center gap-2">
            <span>📊</span>
            <span>Process-Oriented Sequential Filter Pipeline (7 Stages)</span>
          </h4>
          <span className="text-[11px] text-slate-500 font-mono">
            Click any phase chamber to inspect mathematics
          </span>
        </div>

        <div className="space-y-3">
          {currentRows.map((row, index) => {
            const isLast = index === currentRows.length - 1;
            const isSelected = selectedPhaseId === row.id;

            return (
              <div key={row.id} className="relative">
                {/* Visual Pipeline Station Chamber */}
                <div 
                  onClick={() => setSelectedPhaseId(row.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-3 items-center ${
                    isSelected
                      ? 'bg-slate-800/95 border-blue-400 shadow-xl ring-2 ring-blue-500/20'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-950'
                  }`}
                >
                  {/* Left: Phase Title, Code & Badge */}
                  <div className="md:col-span-3 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-lg text-xs font-bold font-mono flex items-center justify-center shrink-0 ${
                        row.category === "review" ? "bg-purple-600 text-white" :
                        row.category === "testing" ? "bg-blue-600 text-white" : "bg-rose-600 text-white"
                      }`}>
                        {row.id}
                      </span>
                      <div>
                        <div className="font-bold text-xs text-white leading-tight">{row.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          Code: <span className="text-cyan-400 font-semibold">{row.code}</span> · {row.category.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Middle-Left: Inflow Box (POD + PD In = Total In) */}
                  <div className="md:col-span-3 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-xs font-mono">
                    <div className="text-[10px] text-slate-400 flex justify-between">
                      <span>INFLOW CHAMBER:</span>
                      <span className="text-slate-500">Total In</span>
                    </div>
                    <div className="text-slate-200 mt-0.5">
                      POD = <span className="text-cyan-400 font-bold">{row.pod}</span> + PD = <span className="text-amber-400 font-bold">{row.pdIn.toFixed(3)}</span>
                    </div>
                    <div className="text-xs font-semibold text-white border-t border-slate-800 mt-1 pt-1 flex justify-between">
                      <span>Total Entering:</span>
                      <span className="font-bold text-cyan-300">{row.totalIn.toFixed(3)} defects</span>
                    </div>
                  </div>

                  {/* Middle-Right: Filter & Removal (Filter membrane %FE, Removed RD, Escaped PD Out) */}
                  <div className="md:col-span-3 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-xs font-mono">
                    <div className="text-[10px] text-slate-400 flex justify-between">
                      <span>FILTERING MEMBRANE:</span>
                      <span className="text-emerald-400 font-bold">{(row.fe * 100).toFixed(0)}% %FE</span>
                    </div>
                    <div className="text-emerald-300 font-bold mt-0.5">
                      RD (Removed) = {row.rd.toFixed(3)}
                    </div>
                    <div className="text-[11px] text-rose-400 border-t border-slate-800 mt-1 pt-1 flex justify-between">
                      <span>PD Out (Escapes):</span>
                      <span className="font-bold">{row.pdOut.toFixed(3)}</span>
                    </div>
                  </div>

                  {/* Right: Cost Chamber (CDR, TRC) */}
                  <div className="md:col-span-3 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800 text-xs font-mono text-right">
                    <div className="text-[10px] text-slate-400 flex justify-between">
                      <span>UNIT COST (CDR):</span>
                      <span className="text-slate-300 font-bold">{row.cdr} cu/defect</span>
                    </div>
                    <div className="text-slate-300 mt-0.5">
                      {row.rd.toFixed(3)} × {row.cdr} cu
                    </div>
                    <div className="text-sm font-bold text-amber-300 border-t border-slate-800 mt-1 pt-1">
                      TRC: {row.trc.toFixed(3)} cu
                    </div>
                  </div>
                </div>

                {/* Connecting Escape Tube Flowing Downward to Next Phase */}
                {!isLast && (
                  <div className="flex items-center justify-center my-1.5">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-rose-400/90 bg-rose-950/30 px-3 py-1 rounded-full border border-rose-500/30 shadow-sm">
                      <span>Escaped Defects ({row.pdOut.toFixed(3)}) Flow Downward</span>
                      <ArrowDown className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SELECTED PHASE DETAILED MATH INSPECTOR */}
      <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase">
            Phase #{activePhase.id} Inspector · {activePhase.name} ({activePhase.code})
          </span>
          <span className="text-slate-400 font-mono text-[11px]">
            Cumulative Cost to this phase: <strong className="text-amber-300">{activePhase.runningCost.toFixed(3)} cu</strong> ({((activePhase.runningCost / totalCost) * 100).toFixed(1)}% of total)
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-mono text-xs">
          <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
            <span className="text-slate-500 text-[10px] block">Inflow Calculation:</span>
            <div className="text-white mt-1">
              POD ({activePhase.pod}) + PD ({activePhase.pdIn.toFixed(3)}) = <strong className="text-cyan-300">{activePhase.totalIn.toFixed(3)}</strong>
            </div>
          </div>
          <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
            <span className="text-slate-500 text-[10px] block">Removal Calculation:</span>
            <div className="text-white mt-1">
              {activePhase.totalIn.toFixed(3)} × {(activePhase.fe * 100).toFixed(0)}% = <strong className="text-emerald-300">{activePhase.rd.toFixed(3)}</strong>
            </div>
          </div>
          <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
            <span className="text-slate-500 text-[10px] block">Escape Calculation:</span>
            <div className="text-white mt-1">
              {activePhase.totalIn.toFixed(3)} - {activePhase.rd.toFixed(3)} = <strong className="text-rose-300">{activePhase.pdOut.toFixed(3)}</strong>
            </div>
          </div>
          <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
            <span className="text-slate-500 text-[10px] block">Cost Calculation:</span>
            <div className="text-white mt-1">
              {activePhase.rd.toFixed(3)} × {activePhase.cdr} cu = <strong className="text-amber-300">{activePhase.trc.toFixed(3)} cu</strong>
            </div>
          </div>
        </div>
      </div>

      {/* VERIFIED EXAM SUMMARY TABLE */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
            Official Exam Summary Table (Verified 14 Marks Solution)
          </h4>
          <span className="text-[11px] text-slate-500 font-mono">Complete 3-decimal precision</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse font-mono">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-900/90 text-slate-300 text-[11px]">
                <th className="p-2.5">Phase</th>
                <th className="p-2.5 text-right text-cyan-300">POD</th>
                <th className="p-2.5 text-right text-slate-400">PD In</th>
                <th className="p-2.5 text-right text-white">Total In</th>
                <th className="p-2.5 text-right text-emerald-400">%FE</th>
                <th className="p-2.5 text-right text-emerald-300">RD</th>
                <th className="p-2.5 text-right text-rose-400">PD Out</th>
                <th className="p-2.5 text-right text-slate-300">CDR</th>
                <th className="p-2.5 text-right text-amber-300">TRC (Cost Units)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {currentRows.map((r) => (
                <tr key={r.id} className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-2.5 text-slate-200 font-sans font-medium">
                    {r.id}. {r.name} ({r.code})
                  </td>
                  <td className="p-2.5 text-right text-cyan-300">{r.pod.toFixed(1)}</td>
                  <td className="p-2.5 text-right text-slate-400">{r.pdIn.toFixed(3)}</td>
                  <td className="p-2.5 text-right text-white font-bold">{r.totalIn.toFixed(3)}</td>
                  <td className="p-2.5 text-right text-emerald-400 font-bold">{(r.fe * 100).toFixed(0)}%</td>
                  <td className="p-2.5 text-right text-emerald-300 font-bold">{r.rd.toFixed(3)}</td>
                  <td className="p-2.5 text-right text-rose-400">{r.pdOut.toFixed(3)}</td>
                  <td className="p-2.5 text-right text-slate-300">{r.cdr.toFixed(1)}</td>
                  <td className="p-2.5 text-right text-amber-300 font-bold">{r.trc.toFixed(3)}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-slate-700 bg-slate-900 font-bold text-xs">
                <td className="p-2.5 text-white font-sans uppercase">TOTALS (Full Plan)</td>
                <td className="p-2.5 text-right text-cyan-300">{totalInjected.toFixed(1)}</td>
                <td className="p-2.5 text-right text-slate-400">—</td>
                <td className="p-2.5 text-right text-white">—</td>
                <td className="p-2.5 text-right text-slate-400">—</td>
                <td className="p-2.5 text-right text-emerald-300 text-sm">{totalRemoved.toFixed(3)}</td>
                <td className="p-2.5 text-right text-slate-400">0.000</td>
                <td className="p-2.5 text-right text-slate-400">—</td>
                <td className="p-2.5 text-right text-amber-300 text-sm">{totalCost.toFixed(3)} cu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Critical Exam Takeaways Callout */}
      <div className="p-4 bg-blue-950/30 border border-blue-500/30 rounded-xl text-xs space-y-2">
        <div className="font-bold text-blue-300 flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4 text-blue-400" />
          Three Critical Exam Takeaways (Topic 7, Slide 45):
        </div>
        <p className="text-slate-300 leading-relaxed space-y-1">
          1. <strong>All 100 injected defects are accounted for:</strong> Sum of removed defects (7.5 + 21.25 + 25.625 + 17.8125 + 13.90625 + 6.953125 + 6.953125) = <strong className="text-white">100.000</strong>.<br />
          2. <strong>The Astronomical Cost of Operation Defects:</strong> The Operation Phase removes only <strong className="text-rose-300">6.953 defects (under 7% of all defects)</strong>, yet accounts for <strong className="text-amber-300">764.84 cost units (over 43% of the total budget)</strong> because CDR is 110.<br />
          3. <strong>Total Removal Cost for 2024 Exam:</strong> <strong className="text-amber-300 font-mono font-bold">1,777.65625 cost units</strong>.
        </p>
      </div>
    </div>
  );
};
