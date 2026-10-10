import React, { useState } from 'react';
import { 
  AlertCircle, 
  Bug, 
  ZapOff, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle,
  CheckCircle2,
  XCircle,
  Sparkles,
  Info
} from 'lucide-react';

export const DiagramErrorChain: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<'meteor' | 'pharmacy'>('meteor');

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 text-slate-100 shadow-2xl space-y-6">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase font-mono flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-emerald-400" />
            UNZA Topic 2, Slides 8–22 · Question Three (20 Marks)
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
            Error → Fault (Defect) → Failure Causation Chain
          </h3>
          <p className="text-xs text-slate-400 max-w-2xl mt-1 leading-relaxed">
            The foundational distinction in software quality assurance: How human errors introduce static faults, why a fault requires dynamic execution to cause a failure, and why latent faults can exist indefinitely without ever failing.
          </p>
        </div>

        {/* Case Study Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs shadow-inner">
          <span className="text-slate-400 text-[11px] px-2 font-mono">Case Study:</span>
          <button
            onClick={() => setSelectedCase('meteor')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCase === 'meteor'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Meteoro-X Firmware (Topic 2, Slide 17)
          </button>
          <button
            onClick={() => setSelectedCase('pharmacy')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCase === 'pharmacy'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Pharmacy Register (Topic 2, Slide 21)
          </button>
        </div>
      </div>

      {/* THE VISUAL CAUSATION CHAIN DIAGRAM */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
            Sequential Causation Architecture & Activation Gate
          </h4>
          <span className="text-[11px] text-slate-500 font-mono">ISO 24765 / IEEE Standard</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {/* Stage 1: Error */}
          <div className="p-5 rounded-2xl bg-slate-950/90 border border-amber-500/50 space-y-3 shadow-lg relative">
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-2">
              <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">
                STAGE 1 · HUMAN ORIGIN
              </span>
              <AlertCircle className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-lg font-extrabold text-white">SOFTWARE ERROR</div>
              <div className="text-[11px] text-amber-300/80 font-mono">The Human Mistake / Action</div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              A human action that produces an incorrect result (ISO 24765). The original mental confusion, misunderstanding, or typographic blunder made by an analyst, designer, or programmer.
            </p>
            <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-200 leading-snug space-y-1">
              <div>• <strong>Syntax Error:</strong> Language grammar violation.</div>
              <div>• <strong>Logic Error:</strong> Erroneous algorithm (e.g. <code>=</code> instead of <code>==</code>).</div>
            </div>
          </div>

          {/* Stage 2: Fault */}
          <div className="p-5 rounded-2xl bg-slate-950/90 border border-blue-500/50 space-y-3 shadow-lg relative">
            <div className="flex items-center justify-between border-b border-blue-500/20 pb-2">
              <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                STAGE 2 · STATIC DEFECT
              </span>
              <Bug className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-lg font-extrabold text-white">SOFTWARE FAULT (DEFECT)</div>
              <div className="text-[11px] text-blue-300/80 font-mono">The Latent Bug in Code/Artifact</div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              An imperfection, flaw, or bug residing inside static source code, design specifications, or database tables resulting from the human error.
            </p>
            <div className="p-2.5 rounded-xl bg-blue-950/30 border border-blue-500/30 text-[11px] text-blue-200 leading-snug">
              <strong>Core SQA Principle:</strong> Not all errors become faults. An error committed in discarded code or unused utility never manifests as an operational fault.
            </div>
          </div>

          {/* Stage 3: Failure */}
          <div className="p-5 rounded-2xl bg-slate-950/90 border border-rose-500/50 space-y-3 shadow-lg relative">
            <div className="flex items-center justify-between border-b border-rose-500/20 pb-2">
              <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider">
                STAGE 3 · DYNAMIC DISRUPTION
              </span>
              <ZapOff className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <div className="text-lg font-extrabold text-white">SOFTWARE FAILURE</div>
              <div className="text-[11px] text-rose-300/80 font-mono">The Runtime Breakdown</div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              The termination of the ability of a system or component to perform its required function within specified performance limits.
            </p>
            <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-[11px] text-rose-200 leading-snug">
              <strong>Activation Condition:</strong> Occurs <em>only</em> when a fault is dynamically executed during runtime. If trigger inputs never occur, the fault remains dormant and <strong>NO failure occurs</strong>!
            </div>
          </div>
        </div>

        {/* ACTIVATION GATE CALLOUT STRIP */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="text-amber-400 font-bold">Human Error</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-blue-400 font-bold">Latent Fault (Defect)</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/30 font-bold">
              Activation Gate (Operational Input)
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-rose-400 font-bold">Runtime Failure</span>
          </div>
          <span className="text-[11px] text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/30 font-bold">
            ✓ Fault Exists ≠ Failure Occurs
          </span>
        </div>
      </div>

      {/* CASE STUDY DEEP DIVE */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg">
        {selectedCase === 'meteor' ? (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">UNZA Case Study 1 (Topic 2, Slide 17)</span>
                <h4 className="text-base font-bold text-white mt-0.5">The "Meteoro-X" Meteorological Unit Firmware</h4>
              </div>
              <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-950/60 px-3 py-1 rounded-xl border border-emerald-500/40">
                Fault Existed in ROM · Zero Failures Occurred
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-amber-500/30 space-y-1.5">
                <span className="font-bold text-amber-300 text-xs font-mono block">1. The Requirement & Error:</span>
                <p className="text-slate-300 leading-relaxed">
                  The specification mandated automatically blocking equipment operation when internal temperatures exceeded <strong>60°C</strong> to prevent sensor damage. The programmer made a typo and coded <strong>160°C</strong>.
                </p>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-blue-500/30 space-y-1.5">
                <span className="font-bold text-blue-300 text-xs font-mono block">2. The Software Fault:</span>
                <p className="text-slate-300 leading-relaxed">
                  The firmware burned into ROM chips on all deployed units contained an erroneous temperature threshold condition — a genuine software defect.
                </p>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-emerald-500/30 space-y-1.5">
                <span className="font-bold text-emerald-300 text-xs font-mono block">3. Why No Failure Occurred:</span>
                <p className="text-slate-300 leading-relaxed">
                  The equipment was deployed exclusively in cold coastal regions where ambient temperatures never exceeded 60°C. The flawed code branch was <strong>never activated</strong>, so the equipment functioned flawlessly!
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold">UNZA Case Study 2 (Topic 2, Slide 21)</span>
                <h4 className="text-base font-bold text-white mt-0.5">The Pharmacy Cash Register System</h4>
              </div>
              <span className="text-xs text-emerald-400 font-mono font-bold bg-emerald-950/60 px-3 py-1 rounded-xl border border-emerald-500/40">
                Defect Existed in Production · Zero Failures Occurred
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-amber-500/30 space-y-1.5">
                <span className="font-bold text-amber-300 text-xs font-mono block">1. The Requirement & Error:</span>
                <p className="text-slate-300 leading-relaxed">
                  Prevent credit sales exceeding <strong>$75</strong> to customers owing more than $200. The programmer misunderstood the specification and coded a sales credit ceiling of <strong>$500</strong>.
                </p>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-blue-500/30 space-y-1.5">
                <span className="font-bold text-blue-300 text-xs font-mono block">2. The Software Defect:</span>
                <p className="text-slate-300 leading-relaxed">
                  The cash register software contained a defect permitting unauthorized purchases between $75 and $500.
                </p>
              </div>

              <div className="bg-slate-900/80 p-3.5 rounded-xl border border-emerald-500/30 space-y-1.5">
                <span className="font-bold text-emerald-300 text-xs font-mono block">3. Why No Failure Occurred:</span>
                <p className="text-slate-300 leading-relaxed">
                  The store credit card issuer enforced an absolute hard limit of <strong>$400</strong>. Because no customer transaction could ever exceed $400, the flawed logic could never be triggered at runtime.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* EXAM TAKEAWAY */}
      <div className="p-4 bg-blue-950/30 border border-blue-500/30 rounded-2xl text-xs space-y-1.5">
        <span className="font-bold text-blue-300 flex items-center gap-1.5 font-mono">
          <Info className="w-4 h-4 text-blue-400" />
          Key Exam Takeaway for Full Marks (Question 3):
        </span>
        <p className="text-slate-300 leading-relaxed">
          Students must clearly define all three terms and state the essential condition: <em>A software fault causes a software failure ONLY if the fault is activated during operational execution</em>. If the triggering condition is never met, the fault remains dormant and no failure occurs.
        </p>
      </div>
    </div>
  );
};
