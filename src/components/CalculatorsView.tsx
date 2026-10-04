import React, { useState } from 'react';
import { Calculator, CheckCircle2, RotateCcw, HelpCircle, Activity, Sparkles, BookOpen } from 'lucide-react';

export const CalculatorsView: React.FC = () => {
  // McCabe Calculator state
  const [edges, setEdges] = useState<number>(21);
  const [nodes, setNodes] = useState<number>(17);
  const [decisions, setDecisions] = useState<number>(5);
  const [regions, setRegions] = useState<number>(6);

  // Quick preset loader
  const loadPreset = (preset: 'its' | 'simple' | 'high') => {
    if (preset === 'its') {
      setEdges(21);
      setNodes(17);
      setDecisions(5);
      setRegions(6);
    } else if (preset === 'simple') {
      setEdges(6);
      setNodes(5);
      setDecisions(2);
      setRegions(3);
    } else {
      setEdges(45);
      setNodes(30);
      setDecisions(16);
      setRegions(17);
    }
  };

  // Formulas
  const vgFormula2 = edges - nodes + 2; // E - N + 2
  const vgFormula3 = decisions + 1; // P + 1
  const vgFormula1 = regions; // R

  const getComplexityEvaluation = (val: number) => {
    if (val < 5) return { label: "Simple, easy to understand", color: "text-emerald-400 bg-emerald-950/40 border-emerald-500/30" };
    if (val <= 10) return { label: "Not too difficult (Moderate complexity)", color: "text-blue-400 bg-blue-950/40 border-blue-500/30" };
    if (val < 50) return { label: "High complexity", color: "text-amber-400 bg-amber-950/40 border-amber-500/30" };
    return { label: "Practically un-testable (Exceeds 50)", color: "text-rose-400 bg-rose-950/40 border-rose-500/30" };
  };

  const evaluation = getComplexityEvaluation(vgFormula2);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
          EXAM CALCULATION WORKSHOP
        </span>
        <h2 className="text-xl font-bold text-white mt-1">Interactive SQA Calculation Laboratory</h2>
        <p className="text-xs text-slate-400 mt-1">
          Verify and experiment with McCabe's Cyclomatic Complexity, Path vs Line Coverage, and Equivalence Class Partitioning from UNZA Topic 9.
        </p>
      </div>

      {/* McCabe Cyclomatic Complexity Calculator */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Calculator className="w-4 h-4 text-cyan-400" />
              McCabe's Cyclomatic Complexity Calculator: V(G)
            </h3>
            <p className="text-xs text-slate-400">Calculates maximum independent paths needed for full line coverage</p>
          </div>

          {/* Presets */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-400 text-[11px] mr-1">Exam Presets:</span>
            <button
              onClick={() => loadPreset('its')}
              className="px-2.5 py-1 bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/60 rounded text-xs font-medium"
            >
              ITS Taximeter (Topic 9)
            </button>
            <button
              onClick={() => loadPreset('simple')}
              className="px-2.5 py-1 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded text-xs font-medium"
            >
              Simple (V=3)
            </button>
            <button
              onClick={() => loadPreset('high')}
              className="px-2.5 py-1 bg-slate-800 text-slate-300 hover:bg-slate-700 rounded text-xs font-medium"
            >
              High (V=17)
            </button>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-950/80 p-3.5 rounded-lg border border-slate-800">
            <label className="block text-xs font-bold text-slate-300 mb-1">Edges (E)</label>
            <input
              type="number"
              min={1}
              value={edges}
              onChange={e => setEdges(parseInt(e.target.value) || 0)}
              className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm font-mono text-white focus:outline-none focus:border-cyan-400"
            />
            <span className="text-[10px] text-slate-500 mt-1 block">Sequence of software sections</span>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-lg border border-slate-800">
            <label className="block text-xs font-bold text-slate-300 mb-1">Nodes (N)</label>
            <input
              type="number"
              min={1}
              value={nodes}
              onChange={e => setNodes(parseInt(e.target.value) || 0)}
              className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm font-mono text-white focus:outline-none focus:border-cyan-400"
            />
            <span className="text-[10px] text-slate-500 mt-1 block">Software code sections</span>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-lg border border-slate-800">
            <label className="block text-xs font-bold text-slate-300 mb-1">Decisions (P)</label>
            <input
              type="number"
              min={0}
              value={decisions}
              onChange={e => setDecisions(parseInt(e.target.value) || 0)}
              className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm font-mono text-white focus:outline-none focus:border-cyan-400"
            />
            <span className="text-[10px] text-slate-500 mt-1 block">Nodes with ≥2 leaving edges</span>
          </div>

          <div className="bg-slate-950/80 p-3.5 rounded-lg border border-slate-800">
            <label className="block text-xs font-bold text-slate-300 mb-1">Regions (R)</label>
            <input
              type="number"
              min={1}
              value={regions}
              onChange={e => setRegions(parseInt(e.target.value) || 0)}
              className="w-full bg-slate-900 border border-slate-700 rounded px-2.5 py-1.5 text-sm font-mono text-white focus:outline-none focus:border-cyan-400"
            />
            <span className="text-[10px] text-slate-500 mt-1 block">Enclosed regions + outside region</span>
          </div>
        </div>

        {/* 3 Formulas Computed Output */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-950/90 border border-slate-800 rounded-xl space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase">Formula 1: Regions</div>
            <div className="text-sm font-bold text-cyan-400 font-mono">V(G) = R</div>
            <div className="text-2xl font-black text-white font-mono">{vgFormula1}</div>
            <div className="text-[11px] text-slate-400">Total enclosed areas + outer area</div>
          </div>

          <div className="p-4 bg-slate-950/90 border border-cyan-500/40 rounded-xl space-y-1 shadow-md shadow-cyan-500/10">
            <div className="text-[10px] font-bold text-cyan-300 uppercase">Formula 2: Edges & Nodes (Standard)</div>
            <div className="text-sm font-bold text-cyan-300 font-mono">V(G) = E − N + 2</div>
            <div className="text-2xl font-black text-cyan-200 font-mono">
              {edges} − {nodes} + 2 = {vgFormula2}
            </div>
            <div className="text-[11px] text-slate-400">Standard graph-theoretic formula</div>
          </div>

          <div className="p-4 bg-slate-950/90 border border-slate-800 rounded-xl space-y-1">
            <div className="text-[10px] font-bold text-slate-400 uppercase">Formula 3: Predicate Decisions</div>
            <div className="text-sm font-bold text-purple-400 font-mono">V(G) = P + 1</div>
            <div className="text-2xl font-black text-white font-mono">
              {decisions} + 1 = {vgFormula3}
            </div>
            <div className="text-[11px] text-slate-400">Number of binary branching points + 1</div>
          </div>
        </div>

        {/* Mathematical Consistency & Interpretation */}
        <div className="p-4 bg-slate-950/90 border border-slate-800 rounded-xl space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-xs font-bold text-slate-300">
              McCabe Complexity Result: <span className="font-mono text-cyan-300 text-sm font-bold">{vgFormula2}</span> Independent Paths
            </div>
            <div className={`px-2.5 py-0.5 rounded text-xs font-semibold border ${evaluation.color}`}>
              {evaluation.label}
            </div>
          </div>

          {vgFormula2 !== vgFormula3 && (
            <div className="p-2.5 bg-amber-950/30 border border-amber-500/30 rounded text-xs text-amber-200">
              <strong>Consistency Warning:</strong> For a planar program flow graph with single entry and exit, Formula 2 (E − N + 2 = {vgFormula2}) and Formula 3 (P + 1 = {vgFormula3}) should yield identical values. Check if every decision node has exactly two outgoing edges.
            </div>
          )}

          {/* Complexity Interpretation Table */}
          <div className="pt-2 border-t border-slate-800">
            <div className="text-[11px] font-bold text-slate-400 uppercase mb-2">
              UNZA Topic 9 Interpretation Scale (Slide 42):
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="font-bold text-emerald-400 block">&lt; 5</span>
                <span className="text-slate-300 text-[11px]">Simple, easy to understand</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="font-bold text-blue-400 block">≤ 10</span>
                <span className="text-slate-300 text-[11px]">Not too difficult</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="font-bold text-amber-400 block">≥ 20</span>
                <span className="text-slate-300 text-[11px]">High complexity</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="font-bold text-rose-400 block">&gt; 50</span>
                <span className="text-slate-300 text-[11px]">Practically un-testable</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ITS Taximeter Case Study Quick-Guide */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-400" />
          Imperial Taxi Services (ITS) Taximeter Module Comparison (Topic 9, Slide 33–37)
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          The ITS module calculates fares based on Distance (D &gt; 1000 yds), Waiting Time (WT &gt; 3 mins), Number of Suitcases (S &gt; 1), Regular Client Discount (10%), and Night Supplement (25% between 21:00 and 06:00).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-3.5 bg-slate-950/80 rounded-lg border border-slate-800">
            <div className="font-bold text-xs text-amber-300 mb-1">Full Path Coverage (24 Test Cases):</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Exhaustively tests all combinations of branching paths (2 × 2 × 2 × 3 = 24 paths). Extremely expensive and resource-intensive; practical only for mission-critical, life-support, or high-risk software.
            </p>
          </div>
          <div className="p-3.5 bg-slate-950/80 rounded-lg border border-slate-800">
            <div className="font-bold text-emerald-300 mb-1">Full Line Coverage (3 Test Cases):</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Executes every line of code at least once using just 3 selected test cases (e.g., Paths 1, 23, and 24). Far cheaper to perform, but leaves the vast majority of logical combination paths unexercised.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
