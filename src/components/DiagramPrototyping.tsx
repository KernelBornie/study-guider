import React, { useState } from 'react';
import { RefreshCw, CheckCircle2, AlertTriangle, ArrowDown, ArrowRight, UserCheck, Layers, Play } from 'lucide-react';

export const DiagramPrototyping: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [iterationCount, setIterationCount] = useState<number>(1);

  const steps = [
    {
      id: 1,
      name: "Requirements Determination",
      subtitle: "by Customer",
      desc: "Initial high-level requirements gathering. Customers describe needs, core features, and system objectives.",
      role: "Client & System Analyst",
      qa: "Requirement ambiguity check, scope definition, feasibility screening"
    },
    {
      id: 2,
      name: "Prototype Design",
      subtitle: "Quick Architectural Sketch",
      desc: "Rapid conceptual design focusing on user interface screens, interaction flow, and input/output behavior.",
      role: "UI/UX Designer & Software Architect",
      qa: "Design guidelines check, screen usability heuristic review"
    },
    {
      id: 3,
      name: "Prototype Implementation",
      subtitle: "Working Mockup / Prototype Build",
      desc: "Fast construction of working screens and simulated services. Focuses on visible functionality rather than full backend robustness.",
      role: "Development Team",
      qa: "Code standards check for reusable core modules, smoke testing"
    },
    {
      id: 4,
      name: "Prototype Evaluation",
      subtitle: "by Customer & End Users",
      desc: "Actual users interact with the working prototype. They experience the workflow and identify what works, what is missing, and what must change.",
      role: "Customer, End Users, Review Facilitator",
      qa: "Structured usability test scenarios, user observation logs, feedback checklists"
    },
    {
      id: 5,
      name: "Requirements Fulfilled?",
      subtitle: "Decision Gate",
      desc: "Evaluation against satisfaction criteria. If requirements are not satisfied, corrections/changes/additions are demanded, looping back to Prototype Design.",
      role: "Customer Sign-off Authority",
      qa: "Formal gap analysis between user expectations and demonstrated functionality"
    },
    {
      id: 6,
      name: "System Tests & Acceptance Tests",
      subtitle: "Formal Verification & Validation",
      desc: "Once the prototype design is accepted, full-scale system construction and formal tests (performance, stress, security, integration) occur.",
      role: "Independent Testing Unit & SQA Team",
      qa: "Full test case execution against approved specification"
    },
    {
      id: 7,
      name: "System Conversion",
      subtitle: "Cutover & Deployment",
      desc: "Data migration, user training, and rollout into the live operating environment.",
      role: "Deployment Team & Operations",
      qa: "Installation review (IPR), data conversion validation"
    },
    {
      id: 8,
      name: "System Operation & Maintenance",
      subtitle: "Long-term Support",
      desc: "Corrective maintenance (bug fixing), adaptive maintenance (environment changes), and perfective maintenance (improvements).",
      role: "Maintenance Unit & Support Desk",
      qa: "Maintenance reviews, defect tracking, MTBF & MTTR logging"
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">Exam Diagram · Question 5.a</span>
          <h3 className="text-lg font-bold text-white">The Prototyping Process Model (UNZA Topic 7, Slide 11)</h3>
          <p className="text-xs text-slate-400">Click any step or test the iterative feedback loop</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIterationCount(prev => prev + 1)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/30 rounded-lg text-xs font-medium transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Simulate Iteration ({iterationCount})
          </button>
          <button
            onClick={() => { setIterationCount(1); setActiveStep(null); }}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Visual Flow Canvas */}
        <div className="lg:col-span-7 bg-slate-950/70 p-4 rounded-lg border border-slate-800/80">
          <div className="flex flex-col items-center max-w-md mx-auto space-y-3">
            
            {/* Step 1 */}
            <div
              onClick={() => setActiveStep(1)}
              className={`w-full text-center p-3 rounded-lg border cursor-pointer transition-all ${
                activeStep === 1 
                  ? 'bg-blue-950/70 border-blue-400 shadow-md shadow-blue-500/20 ring-1 ring-blue-400' 
                  : 'bg-slate-900 border-slate-700 hover:border-slate-500'
              }`}
            >
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wide">Phase 1</div>
              <div className="font-semibold text-sm text-slate-100">REQUIREMENTS DETERMINATION</div>
              <div className="text-xs text-slate-400">BY CUSTOMER</div>
            </div>

            <ArrowDown className="w-4 h-4 text-slate-500" />

            {/* Loop Container (Steps 2 to 5) */}
            <div className="w-full relative border border-dashed border-amber-500/40 rounded-xl p-3 bg-amber-950/10">
              <div className="absolute -top-2.5 left-4 px-2 py-0.5 bg-slate-900 text-[10px] font-semibold text-amber-400 border border-amber-500/30 rounded">
                Iterative Prototyping Cycle (Current: Cycle #{iterationCount})
              </div>

              <div className="space-y-3 pt-2">
                {/* Step 2 */}
                <div
                  onClick={() => setActiveStep(2)}
                  className={`w-full text-center p-2.5 rounded-lg border cursor-pointer transition-all ${
                    activeStep === 2
                      ? 'bg-amber-950/80 border-amber-400 shadow-md ring-1 ring-amber-400'
                      : 'bg-slate-900 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="text-xs font-bold text-amber-400">PROTOTYPE DESIGN</div>
                  <div className="text-[11px] text-slate-400">Rapid layout & user interaction</div>
                </div>

                <ArrowDown className="w-4 h-4 text-slate-500 mx-auto" />

                {/* Step 3 */}
                <div
                  onClick={() => setActiveStep(3)}
                  className={`w-full text-center p-2.5 rounded-lg border cursor-pointer transition-all ${
                    activeStep === 3
                      ? 'bg-amber-950/80 border-amber-400 shadow-md ring-1 ring-amber-400'
                      : 'bg-slate-900 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="text-xs font-bold text-amber-400">PROTOTYPE IMPLEMENTATION</div>
                  <div className="text-[11px] text-slate-400">Working prototype / interactive mockup</div>
                </div>

                <ArrowDown className="w-4 h-4 text-slate-500 mx-auto" />

                {/* Step 4 */}
                <div
                  onClick={() => setActiveStep(4)}
                  className={`w-full text-center p-2.5 rounded-lg border cursor-pointer transition-all ${
                    activeStep === 4
                      ? 'bg-amber-950/80 border-amber-400 shadow-md ring-1 ring-amber-400'
                      : 'bg-slate-900 border-slate-700 hover:border-slate-500'
                  }`}
                >
                  <div className="text-xs font-bold text-amber-400">PROTOTYPE EVALUATION</div>
                  <div className="text-[11px] text-slate-400">BY CUSTOMER & USERS</div>
                </div>

                <ArrowDown className="w-4 h-4 text-slate-500 mx-auto" />

                {/* Decision Diamond (Step 5) */}
                <div className="relative">
                  <div
                    onClick={() => setActiveStep(5)}
                    className={`mx-auto w-44 py-3 px-2 text-center rounded-lg border cursor-pointer transition-all ${
                      activeStep === 5
                        ? 'bg-purple-950/80 border-purple-400 shadow-md ring-1 ring-purple-400'
                        : 'bg-slate-900 border-purple-500/50 hover:border-purple-400'
                    }`}
                  >
                    <div className="text-xs font-bold text-purple-300">REQUIREMENTS FULFILLED?</div>
                    <div className="text-[10px] text-slate-400">Acceptance Decision</div>
                  </div>

                  {/* NO branch to right and loop back */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full hidden sm:flex items-center pl-2">
                    <ArrowRight className="w-4 h-4 text-rose-400" />
                    <span className="text-[10px] font-bold text-rose-400 bg-rose-950/70 border border-rose-500/30 px-1 rounded">
                      NO
                    </span>
                  </div>
                </div>

                {/* Feedback Box */}
                <div className="mt-2 bg-rose-950/30 border border-rose-500/30 p-2 rounded-lg text-center">
                  <div className="text-xs font-semibold text-rose-300 flex items-center justify-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5 text-rose-400" />
                    DEMANDS FOR CORRECTIONS, CHANGES AND ADDITIONS
                  </div>
                  <div className="text-[10px] text-slate-400">Loops back to Prototype Design until customer satisfies requirements</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
              <span>YES</span>
              <ArrowDown className="w-4 h-4" />
            </div>

            {/* Step 6 */}
            <div
              onClick={() => setActiveStep(6)}
              className={`w-full text-center p-2.5 rounded-lg border cursor-pointer transition-all ${
                activeStep === 6
                  ? 'bg-emerald-950/70 border-emerald-400 shadow-md ring-1 ring-emerald-400'
                  : 'bg-slate-900 border-slate-700 hover:border-slate-500'
              }`}
            >
              <div className="text-xs font-bold text-emerald-400">SYSTEM TESTS & ACCEPTANCE TESTS</div>
              <div className="text-[11px] text-slate-400">Full system verification against specifications</div>
            </div>

            <ArrowDown className="w-4 h-4 text-slate-500" />

            {/* Step 7 */}
            <div
              onClick={() => setActiveStep(7)}
              className={`w-full text-center p-2.5 rounded-lg border cursor-pointer transition-all ${
                activeStep === 7
                  ? 'bg-emerald-950/70 border-emerald-400 shadow-md ring-1 ring-emerald-400'
                  : 'bg-slate-900 border-slate-700 hover:border-slate-500'
              }`}
            >
              <div className="text-xs font-bold text-emerald-400">SYSTEM CONVERSION</div>
              <div className="text-[11px] text-slate-400">Cutover, data transition, and production rollout</div>
            </div>

            <ArrowDown className="w-4 h-4 text-slate-500" />

            {/* Step 8 */}
            <div
              onClick={() => setActiveStep(8)}
              className={`w-full text-center p-2.5 rounded-lg border cursor-pointer transition-all ${
                activeStep === 8
                  ? 'bg-emerald-950/70 border-emerald-400 shadow-md ring-1 ring-emerald-400'
                  : 'bg-slate-900 border-slate-700 hover:border-slate-500'
              }`}
            >
              <div className="text-xs font-bold text-emerald-400">SYSTEM OPERATION & MAINTENANCE</div>
              <div className="text-[11px] text-slate-400">Corrective, adaptive, and perfective maintenance</div>
            </div>

          </div>
        </div>

        {/* Detail Inspector Deck */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-950/90 border border-slate-800 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Stage Details & SQA Checkpoints</h4>
            {activeStep ? (
              (() => {
                const s = steps.find(x => x.id === activeStep)!;
                return (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-center font-bold">
                        {s.id}
                      </span>
                      <div>
                        <div className="text-sm font-bold text-white">{s.name}</div>
                        <div className="text-xs text-slate-400">{s.subtitle}</div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded border border-slate-800">
                      {s.desc}
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400">Actors / Responsibilities:</div>
                      <div className="text-xs text-slate-200">{s.role}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-emerald-400">Integrated SQA Activity:</div>
                      <div className="text-xs text-emerald-200/90">{s.qa}</div>
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="py-8 text-center text-xs text-slate-400">
                Click any phase box on the diagram to inspect its description, participants, and integrated SQA quality assurance activities.
              </div>
            )}
          </div>

          <div className="bg-slate-950/90 border border-slate-800 rounded-lg p-4 text-xs space-y-2.5">
            <h4 className="font-semibold text-amber-300 text-xs flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Key Exam Points to Draw:
            </h4>
            <ul className="space-y-1.5 text-slate-300 pl-4 list-disc">
              <li>Must show the <strong>Customer Requirements</strong> starting block.</li>
              <li>Must illustrate the closed loop: <strong>Prototype Design → Implementation → Evaluation → "Fulfilled?" → (NO) Demands for changes → back to Design</strong>.</li>
              <li>Must show the exit path upon <strong>(YES)</strong> leading into <strong>System Tests → Conversion → Operation/Maintenance</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
