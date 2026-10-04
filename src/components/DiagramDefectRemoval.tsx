import React, { useState } from 'react';
import { ArrowDown, DollarSign, Calculator, Layers, AlertCircle, TrendingDown, ArrowRight } from 'lucide-react';

interface PhaseData {
  id: number;
  name: string;
  code: string;
  pod: number;
  feDefault: number;
  cdr: number;
}

export const DiagramDefectRemoval: React.FC = () => {
  const [shiftLeft, setShiftLeft] = useState(false);

  const basePhases: PhaseData[] = [
    { id: 1, name: "Requirements Specification Review", code: "RSR", pod: 15, feDefault: 0.50, cdr: 1.0 },
    { id: 2, name: "Design Review", code: "DR", pod: 35, feDefault: 0.50, cdr: 2.5 },
    { id: 3, name: "Unit Test - Code", code: "UT", pod: 30, feDefault: 0.50, cdr: 6.5 },
    { id: 4, name: "Integration Test", code: "IT", pod: 10, feDefault: 0.50, cdr: 16.0 },
    { id: 5, name: "Documentation Review", code: "DocR", pod: 10, feDefault: 0.50, cdr: 16.0 },
    { id: 6, name: "System Test", code: "ST", pod: 0, feDefault: 0.50, cdr: 40.0 },
    { id: 7, name: "Operation Phase", code: "OP", pod: 0, feDefault: 1.00, cdr: 110.0 }
  ];

  // Calculate the chain
  const computeRows = (isShifted: boolean) => {
    let carriedPD = 0;
    return basePhases.map((phase) => {
      // In shift-left, early reviews have higher effectiveness
      let fe = phase.feDefault;
      if (isShifted) {
        if (phase.code === "RSR") fe = 0.80;
        else if (phase.code === "DR") fe = 0.70;
        else if (phase.code === "UT") fe = 0.60;
      }

      const pod = phase.pod;
      const pdIn = carriedPD;
      const totalIn = pod + pdIn;
      const rd = totalIn * fe;
      const pdOut = totalIn - rd;
      const trc = rd * phase.cdr;

      carriedPD = pdOut;

      return {
        ...phase,
        fe,
        pdIn,
        totalIn,
        rd,
        pdOut,
        trc
      };
    });
  };

  const currentRows = computeRows(shiftLeft);
  const examRows = computeRows(false);

  const totalInjected = currentRows.reduce((acc, r) => acc + r.pod, 0);
  const totalRemoved = currentRows.reduce((acc, r) => acc + r.rd, 0);
  const totalCost = currentRows.reduce((acc, r) => acc + r.trc, 0);
  const examTotalCost = examRows.reduce((acc, r) => acc + r.trc, 0);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">Exam Diagram & Math · Question Six</span>
          <h3 className="text-lg font-bold text-white">Process-Oriented Defect Removal Plan (100 Defects)</h3>
          <p className="text-xs text-slate-400">UNZA Topic 7, Slide 43–45 · Complete Step-by-Step Flow & Cost Accumulation</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShiftLeft(!shiftLeft)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              shiftLeft 
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
            }`}
          >
            <TrendingDown className="w-3.5 h-3.5" />
            {shiftLeft ? "Viewing: Shift-Left Scenario" : "Switch to Shift-Left Comparison"}
          </button>
        </div>
      </div>

      {shiftLeft && (
        <div className="mb-4 p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg text-xs text-emerald-300 flex items-center justify-between">
          <div>
            <strong>Shift-Left Active:</strong> Boosting Requirements Review to 80% and Design Review to 70% drops total cost from{' '}
            <span className="font-mono text-white font-bold">{examTotalCost.toFixed(2)}</span> to{' '}
            <span className="font-mono text-emerald-200 font-bold">{totalCost.toFixed(2)} cost units</span> (saves{' '}
            {(examTotalCost - totalCost).toFixed(2)} units)!
          </div>
          <button
            onClick={() => setShiftLeft(false)}
            className="text-xs underline text-emerald-400 hover:text-emerald-200 ml-3 shrink-0"
          >
            Return to 2024 Exam Values
          </button>
        </div>
      )}

      {/* Process-Oriented Illustration (Box Diagram as on Slide 44) */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Process-Oriented Flowchart (Box Structure as Required in Exam)
          </h4>
          <span className="text-[11px] text-slate-400 font-mono">Formula: RD = Total In × %FE · TRC = RD × CDR</span>
        </div>

        <div className="space-y-3">
          {currentRows.map((row, index) => {
            const isLast = index === currentRows.length - 1;
            return (
              <div key={row.id} className="relative">
                <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-3 items-center hover:border-slate-700 transition-colors">
                  {/* Left: Phase Title & Code */}
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 text-xs flex items-center justify-center font-bold">
                        {row.id}
                      </span>
                      <div>
                        <div className="font-bold text-xs text-white">{row.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono">Code: {row.code}</div>
                      </div>
                    </div>
                  </div>

                  {/* Middle: Inflow (POD + PD) */}
                  <div className="md:col-span-3 bg-slate-900/60 p-2 rounded border border-slate-800 text-xs font-mono">
                    <div className="text-[10px] text-slate-400">Incoming Defects:</div>
                    <div className="text-slate-200">
                      POD = <span className="text-cyan-400 font-bold">{row.pod}</span> + PD = <span className="text-amber-400 font-bold">{row.pdIn.toFixed(3)}</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-300 border-t border-slate-800 mt-1 pt-1">
                      Total In = <span className="text-white">{row.totalIn.toFixed(3)}</span>
                    </div>
                  </div>

                  {/* Filter & Removal */}
                  <div className="md:col-span-3 bg-slate-900/60 p-2 rounded border border-slate-800 text-xs font-mono">
                    <div className="text-[10px] text-slate-400">Filtering & Escape:</div>
                    <div className="text-slate-200">
                      %FE = <span className="text-emerald-400 font-bold">{(row.fe * 100).toFixed(0)}%</span>
                    </div>
                    <div className="text-emerald-300 font-bold">
                      RD = {row.rd.toFixed(3)}
                    </div>
                    <div className="text-[10px] text-rose-400">
                      PD Escaped = {row.pdOut.toFixed(3)}
                    </div>
                  </div>

                  {/* Cost Calculation */}
                  <div className="md:col-span-3 bg-slate-900/60 p-2 rounded border border-slate-800 text-xs font-mono text-right">
                    <div className="text-[10px] text-slate-400">Phase Cost (TRC):</div>
                    <div className="text-slate-300">
                      {row.rd.toFixed(3)} × {row.cdr} cu
                    </div>
                    <div className="text-sm font-bold text-amber-300">
                      {row.trc.toFixed(3)} cu
                    </div>
                  </div>
                </div>

                {!isLast && (
                  <div className="flex items-center justify-center my-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-rose-400/90 bg-rose-950/20 px-2 py-0.5 rounded border border-rose-500/20">
                      <span>Passes {row.pdOut.toFixed(3)} escaped defects to next phase</span>
                      <ArrowDown className="w-3 h-3 text-rose-400" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Table */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-lg p-4 mb-4">
        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
          Complete Summary Table (2024 Exam Solution)
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse font-mono">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-900 text-slate-300">
                <th className="p-2">Phase</th>
                <th className="p-2 text-right">POD</th>
                <th className="p-2 text-right">PD In</th>
                <th className="p-2 text-right">Total In</th>
                <th className="p-2 text-right">%FE</th>
                <th className="p-2 text-right text-emerald-400">RD</th>
                <th className="p-2 text-right text-rose-400">PD Out</th>
                <th className="p-2 text-right">CDR</th>
                <th className="p-2 text-right text-amber-300">TRC (Cost Units)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {currentRows.map((r) => (
                <tr key={r.id} className="hover:bg-slate-900/50">
                  <td className="p-2 text-slate-200 font-sans font-medium">
                    {r.id}. {r.name}
                  </td>
                  <td className="p-2 text-right text-cyan-300">{r.pod.toFixed(1)}</td>
                  <td className="p-2 text-right text-slate-400">{r.pdIn.toFixed(3)}</td>
                  <td className="p-2 text-right text-white font-bold">{r.totalIn.toFixed(3)}</td>
                  <td className="p-2 text-right text-emerald-400">{(r.fe * 100).toFixed(0)}%</td>
                  <td className="p-2 text-right text-emerald-300 font-bold">{r.rd.toFixed(3)}</td>
                  <td className="p-2 text-right text-rose-400">{r.pdOut.toFixed(3)}</td>
                  <td className="p-2 text-right text-slate-300">{r.cdr.toFixed(1)}</td>
                  <td className="p-2 text-right text-amber-300 font-bold">{r.trc.toFixed(3)}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-slate-700 bg-slate-900/80 font-bold">
                <td className="p-2 text-white font-sans">TOTALS</td>
                <td className="p-2 text-right text-cyan-300">{totalInjected.toFixed(1)}</td>
                <td className="p-2 text-right text-slate-400">—</td>
                <td className="p-2 text-right text-white">—</td>
                <td className="p-2 text-right text-slate-400">—</td>
                <td className="p-2 text-right text-emerald-300">{totalRemoved.toFixed(3)}</td>
                <td className="p-2 text-right text-slate-400">0.000</td>
                <td className="p-2 text-right text-slate-400">—</td>
                <td className="p-2 text-right text-amber-300 text-sm">{totalCost.toFixed(3)} cu</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Critical Exam Takeaway */}
      <div className="p-3.5 bg-blue-950/30 border border-blue-500/30 rounded-lg text-xs space-y-1.5">
        <div className="font-bold text-blue-300 flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4 text-blue-400" />
          Critical Takeaway for 14 Marks:
        </div>
        <p className="text-slate-300 leading-relaxed">
          1. Notice that all <strong>100 defects</strong> injected during development are ultimately removed (7.5 + 21.25 + 25.625 + 17.8125 + 13.90625 + 6.953125 + 6.953125 = 100.0).<br />
          2. The <strong>Operation Phase</strong> removes only <strong>6.953 defects</strong> (~7% of defects), yet accounts for <strong>764.84 cost units (over 43% of total cost)</strong> because unit cost is 110.<br />
          3. Total Cost of Removal for the 2024 UNZA exam model = <strong className="text-amber-300 font-mono">1,777.66 cost units</strong>.
        </p>
      </div>
    </div>
  );
};
