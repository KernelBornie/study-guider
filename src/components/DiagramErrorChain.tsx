import React, { useState } from 'react';
import { AlertCircle, Bug, ZapOff, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export const DiagramErrorChain: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<'meteor' | 'pharmacy'>('meteor');

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">Exam Concept · Question Three</span>
          <h3 className="text-lg font-bold text-white">Error → Fault → Failure Causation Chain</h3>
          <p className="text-xs text-slate-400">UNZA Topic 2, Slides 8–22 · The Critical SQA Distinction & Case Studies</p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
          <span className="text-slate-400 text-[11px] px-2">Inspect Case Study:</span>
          <button
            onClick={() => setSelectedCase('meteor')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
              selectedCase === 'meteor'
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Meteoro-X Firmware
          </button>
          <button
            onClick={() => setSelectedCase('pharmacy')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
              selectedCase === 'pharmacy'
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            Pharmacy Cash Register
          </button>
        </div>
      </div>

      {/* Visual Chain Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Error */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-amber-500/40 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">Step 1: Origin</span>
            <AlertCircle className="w-5 h-5 text-amber-400" />
          </div>
          <div className="text-base font-bold text-white">SOFTWARE ERROR</div>
          <div className="text-xs text-slate-300 leading-relaxed">
            A human action that produces an incorrect result (ISO 24765). The original mental mistake or typographic blunder made by an analyst, designer, or programmer.
          </div>
          <div className="text-[11px] text-amber-300/90 bg-amber-950/30 p-2 rounded border border-amber-500/20">
            • Syntax error: code syntax violation.<br />
            • Logic error: incorrect algorithmic expression (e.g. = instead of ==).
          </div>
        </div>

        {/* Fault */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-blue-500/40 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">Step 2: Manifestation</span>
            <Bug className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-base font-bold text-white">SOFTWARE FAULT (DEFECT)</div>
          <div className="text-xs text-slate-300 leading-relaxed">
            An imperfection, flaw, or bug residing inside the static code, design document, or database structure resulting from the human error.
          </div>
          <div className="text-[11px] text-blue-300/90 bg-blue-950/30 p-2 rounded border border-blue-500/20">
            <strong>Key SQA Principle:</strong> Not all errors become faults. An error in an unused routine does not affect functionality.
          </div>
        </div>

        {/* Failure */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-rose-500/40 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wide">Step 3: Dynamic Breakdown</span>
            <ZapOff className="w-5 h-5 text-rose-400" />
          </div>
          <div className="text-base font-bold text-white">SOFTWARE FAILURE</div>
          <div className="text-xs text-slate-300 leading-relaxed">
            The termination of the ability of a system to perform its required function. Occurs <em>only</em> when a fault is dynamically executed ("activated") during runtime.
          </div>
          <div className="text-[11px] text-rose-300/90 bg-rose-950/30 p-2 rounded border border-rose-500/20">
            <strong>Activation Condition:</strong> If the triggering conditions never happen, the fault remains dormant and NO failure occurs!
          </div>
        </div>
      </div>

      {/* Case Study Deep Dive */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-4">
        {selectedCase === 'meteor' ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Case Study 1: The "Meteoro-X" Firmware (Topic 2, Slide 17)
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                Fault Existed · No Failure Occurred
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                <span className="font-bold text-amber-300 block mb-1">1. The Requirement & Error:</span>
                Software was meant to automatically block equipment operation when internal temperature exceeded <strong>60°C</strong>. The programmer made a typo and coded <strong>160°C</strong>.
              </div>
              <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                <span className="font-bold text-blue-300 block mb-1">2. The Software Fault:</span>
                The firmware embedded in the meteorological product contained an erroneous temperature boundary condition (a latent fault).
              </div>
              <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                <span className="font-bold text-emerald-300 block mb-1">3. Why No Failure Occurred:</span>
                The equipment was deployed exclusively in cold coastal regions where ambient temperatures never reached 60°C. The fault was <strong>never activated</strong>, so the equipment never failed!
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                Case Study 2: The Pharmacy Cash Register (Topic 2, Slide 21)
              </span>
              <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                Defect Existed · No Failure Occurred
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                <span className="font-bold text-amber-300 block mb-1">1. The Requirement & Error:</span>
                Prevent credit sales over <strong>$75</strong> to customers owing more than $200. The programmer misunderstood the specification and coded a sales limit of <strong>$500</strong>.
              </div>
              <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                <span className="font-bold text-blue-300 block mb-1">2. The Software Defect:</span>
                The cash register system contained a defect allowing unauthorized purchases between $75 and $500.
              </div>
              <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                <span className="font-bold text-emerald-300 block mb-1">3. Why No Failure Occurred:</span>
                The store pharmacy credit card had a strict global credit ceiling of <strong>$400</strong>. Since no customer could ever purchase over $500, the flawed logic could never be triggered.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
