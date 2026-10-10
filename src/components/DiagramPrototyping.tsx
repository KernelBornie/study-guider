import React, { useState } from 'react';
import { 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowDown, 
  ArrowRight, 
  UserCheck, 
  Layers, 
  Play,
  RotateCcw,
  Sparkles,
  Info,
  Check
} from 'lucide-react';

export const DiagramPrototyping: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);
  const [iterationCount, setIterationCount] = useState<number>(1);
  const [isLooping, setIsLooping] = useState<boolean>(false);

  const steps = [
    {
      id: 1,
      name: "Requirements Determination",
      subtitle: "by Customer (Initial Scope)",
      desc: "Initial high-level requirements gathering. Customers describe business needs, core workflows, and system objectives without rigid functional specifications.",
      role: "Client, End Users & System Analyst",
      qa: "Requirement ambiguity check, scope feasibility screening",
      isLoop: false
    },
    {
      id: 2,
      name: "Prototype Design",
      subtitle: "Quick Architectural & UI Sketch",
      desc: "Rapid conceptual design focusing on user interface screens, interaction ergonomics, and input/output behavior rather than internal robustness.",
      role: "UI/UX Designer & Software Architect",
      qa: "Design guidelines compliance, usability heuristic inspection",
      isLoop: true
    },
    {
      id: 3,
      name: "Prototype Implementation",
      subtitle: "Working Mockup / Prototype Build",
      desc: "Fast construction of working screens and simulated services. Focuses on visible user workflows and screen layouts rather than back-end database concurrency.",
      role: "Rapid Prototyping Engineers / Dev Team",
      qa: "Smoke testing, UI responsiveness, mock data integrity",
      isLoop: true
    },
    {
      id: 4,
      name: "Prototype Evaluation",
      subtitle: "by Customer & End Users",
      desc: "Actual users interact directly with the working mockup in hands-on trials. They experience screen transitions, spot missing data fields, and formulate exact needs.",
      role: "Customer, Real End Users, Review Facilitator",
      qa: "Structured usability test scenarios, user observation logs, feedback checklists",
      isLoop: true
    },
    {
      id: 5,
      name: "Requirements Fulfilled?",
      subtitle: "Decision Gate (Evaluation Verdict)",
      desc: "Formal evaluation against satisfaction criteria. If requirements are not yet satisfied, demands for corrections/changes/additions are issued, triggering an iteration loop back to Prototype Design.",
      role: "Customer Sign-off Authority",
      qa: "Formal gap analysis between user expectations and demonstrated functionality",
      isLoop: true
    },
    {
      id: 6,
      name: "System Tests & Acceptance Tests",
      subtitle: "Full-Scale Verification & Validation",
      desc: "Once the prototype design is approved, full-scale production engineering occurs followed by comprehensive system, performance, security, and acceptance testing.",
      role: "Independent Testing Unit & SQA Team",
      qa: "Full test case execution against approved specifications",
      isLoop: false
    },
    {
      id: 7,
      name: "System Conversion",
      subtitle: "Cutover & Production Rollout",
      desc: "Data migration from legacy stores, user training, deployment cutover, and transition into the live operating environment.",
      role: "Deployment Team & Operations Unit",
      qa: "Installation review (IPR), data conversion validation",
      isLoop: false
    },
    {
      id: 8,
      name: "System Operation & Maintenance",
      subtitle: "Long-Term Operational Support",
      desc: "Routine operation accompanied by corrective maintenance (bug fixing), adaptive maintenance (OS/browser upgrades), and perfective maintenance.",
      role: "Maintenance Unit & Support Desk",
      qa: "Maintenance reviews, defect tracking, MTBF & MTTR logging",
      isLoop: false
    }
  ];

  const handleSimulateIteration = () => {
    setIsLooping(true);
    setIterationCount(prev => prev + 1);
    setActiveStep(2);
    setTimeout(() => setIsLooping(false), 600);
  };

  const currentStep = steps.find(s => s.id === activeStep) || steps[0];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 text-slate-100 shadow-2xl space-y-6">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase font-mono flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
            UNZA Topic 7, Slide 11 · Question 5a (10 Marks)
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
            The Prototyping Process Model (Iterative SDLC)
          </h3>
          <p className="text-xs text-slate-400 max-w-2xl mt-1 leading-relaxed">
            The closed-loop development model ideal for ambiguous requirements. Features rapid cycles of <strong>Design → Implementation → Evaluation → Revision Demands</strong> until customer sign-off authorizes full testing and conversion.
          </p>
        </div>

        {/* Interactive Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSimulateIteration}
            className="flex items-center gap-2 px-3.5 py-2 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 rounded-xl text-xs font-bold transition-all shadow-md"
            title="Simulate user feedback demanding changes and increment iteration count"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLooping ? 'animate-spin' : ''}`} />
            <span>Simulate Iteration ({iterationCount})</span>
          </button>
          <button
            onClick={() => { setIterationCount(1); setActiveStep(2); }}
            className="px-3 py-2 bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 rounded-xl text-xs font-semibold transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* THE VISUAL FLOWCHART CANVAS */}
        <div className="lg:col-span-7 bg-slate-950/90 p-5 rounded-2xl border border-slate-800 space-y-4 shadow-inner">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
              Model Flowchart Diagram
            </span>
            <span className="text-[11px] text-slate-500 font-mono">
              Current: Cycle #{iterationCount}
            </span>
          </div>

          <div className="flex flex-col items-center max-w-md mx-auto space-y-2.5">
            
            {/* Step 1: Initial Entry Gate */}
            <div
              onClick={() => setActiveStep(1)}
              className={`w-full text-center p-3.5 rounded-xl border cursor-pointer transition-all ${
                activeStep === 1 
                  ? 'bg-blue-950/80 border-blue-400 shadow-xl ring-2 ring-blue-500/30' 
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">Phase 1</span>
                <span className="text-[10px] font-mono text-slate-400">Actor: Customer</span>
              </div>
              <div className="font-bold text-sm text-white mt-0.5">REQUIREMENTS DETERMINATION</div>
              <div className="text-[11px] text-slate-400">BY CUSTOMER</div>
            </div>

            <div className="flex items-center justify-center">
              <ArrowDown className="w-4 h-4 text-slate-600" />
            </div>

            {/* THE ITERATIVE PROTOTYPING LOOP CONTAINER (Steps 2-5) */}
            <div className={`w-full relative border-2 border-dashed rounded-2xl p-4 transition-all ${
              isLooping 
                ? 'border-amber-400 bg-amber-950/30 shadow-2xl scale-[1.01]' 
                : 'border-amber-500/40 bg-amber-950/10'
            }`}>
              {/* Loop badge header */}
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3 text-amber-400" />
                  <span>Iterative Prototyping Cycle (Loop #{iterationCount})</span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Repeats until satisfied</span>
              </div>

              <div className="space-y-2.5">
                {/* Step 2 */}
                <div
                  onClick={() => setActiveStep(2)}
                  className={`w-full text-center p-3 rounded-xl border cursor-pointer transition-all ${
                    activeStep === 2
                      ? 'bg-amber-950/90 border-amber-400 shadow-lg ring-2 ring-amber-500/30'
                      : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold text-amber-400">PHASE 2</div>
                  <div className="text-xs font-bold text-white">PROTOTYPE DESIGN</div>
                  <div className="text-[11px] text-slate-400">Rapid layout, screen flow & interface model</div>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
                </div>

                {/* Step 3 */}
                <div
                  onClick={() => setActiveStep(3)}
                  className={`w-full text-center p-3 rounded-xl border cursor-pointer transition-all ${
                    activeStep === 3
                      ? 'bg-amber-950/90 border-amber-400 shadow-lg ring-2 ring-amber-500/30'
                      : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold text-amber-400">PHASE 3</div>
                  <div className="text-xs font-bold text-white">PROTOTYPE IMPLEMENTATION</div>
                  <div className="text-[11px] text-slate-400">Construct working screens & mock services</div>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
                </div>

                {/* Step 4 */}
                <div
                  onClick={() => setActiveStep(4)}
                  className={`w-full text-center p-3 rounded-xl border cursor-pointer transition-all ${
                    activeStep === 4
                      ? 'bg-amber-950/90 border-amber-400 shadow-lg ring-2 ring-amber-500/30'
                      : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold text-amber-400">PHASE 4</div>
                  <div className="text-xs font-bold text-white">PROTOTYPE EVALUATION</div>
                  <div className="text-[11px] text-slate-400">BY CUSTOMER & REAL USERS</div>
                </div>

                <div className="flex items-center justify-center">
                  <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
                </div>

                {/* Step 5: Decision Diamond */}
                <div
                  onClick={() => setActiveStep(5)}
                  className={`w-full text-center p-3.5 rounded-xl border cursor-pointer transition-all relative ${
                    activeStep === 5
                      ? 'bg-purple-950/90 border-purple-400 shadow-xl ring-2 ring-purple-500/30'
                      : 'bg-slate-900 border-purple-500/40 hover:border-purple-400'
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold text-purple-300">PHASE 5 DECISION GATE</div>
                  <div className="text-xs font-extrabold text-white">REQUIREMENTS FULFILLED?</div>
                  <div className="text-[10px] text-slate-400">Customer Acceptance Evaluation</div>
                </div>

                {/* The NO loopback channel */}
                <div className="mt-2 bg-rose-950/30 border border-rose-500/40 p-2.5 rounded-xl text-center space-y-1">
                  <div className="text-xs font-bold text-rose-300 flex items-center justify-center gap-1.5 font-mono">
                    <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
                    <span>[NO] DEMANDS FOR CORRECTIONS, CHANGES & ADDITIONS</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Loops back to <strong>Prototype Design</strong> until customer needs are fully met
                  </div>
                </div>
              </div>
            </div>

            {/* Exit Arrow to Phase 6 */}
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono py-1">
              <span>[YES] Customer Acceptance Granted</span>
              <ArrowDown className="w-4 h-4 text-emerald-400 animate-bounce" />
            </div>

            {/* Downstream Production Phases */}
            <div className="w-full space-y-2">
              {/* Step 6 */}
              <div
                onClick={() => setActiveStep(6)}
                className={`w-full text-center p-3 rounded-xl border cursor-pointer transition-all ${
                  activeStep === 6
                    ? 'bg-emerald-950/80 border-emerald-400 shadow-lg ring-2 ring-emerald-500/30'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-emerald-400">PHASE 6</div>
                <div className="text-xs font-bold text-white">SYSTEM TESTS & ACCEPTANCE TESTS</div>
                <div className="text-[11px] text-slate-400">Full verification & validation against complete specifications</div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
              </div>

              {/* Step 7 */}
              <div
                onClick={() => setActiveStep(7)}
                className={`w-full text-center p-3 rounded-xl border cursor-pointer transition-all ${
                  activeStep === 7
                    ? 'bg-emerald-950/80 border-emerald-400 shadow-lg ring-2 ring-emerald-500/30'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-emerald-400">PHASE 7</div>
                <div className="text-xs font-bold text-white">SYSTEM CONVERSION</div>
                <div className="text-[11px] text-slate-400">Data migration, user training, cutover to live production</div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
              </div>

              {/* Step 8 */}
              <div
                onClick={() => setActiveStep(8)}
                className={`w-full text-center p-3 rounded-xl border cursor-pointer transition-all ${
                  activeStep === 8
                    ? 'bg-emerald-950/80 border-emerald-400 shadow-lg ring-2 ring-emerald-500/30'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-emerald-400">PHASE 8</div>
                <div className="text-xs font-bold text-white">SYSTEM OPERATION & MAINTENANCE</div>
                <div className="text-[11px] text-slate-400">Corrective, adaptive, and perfective maintenance</div>
              </div>
            </div>

          </div>
        </div>

        {/* DETAIL INSPECTOR DECK */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                Phase #{currentStep.id} Details & SQA Activities
              </span>
              {currentStep.isLoop && (
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold">
                  Iterative Loop Component
                </span>
              )}
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-base font-bold text-white">{currentStep.name}</div>
                <div className="text-xs text-slate-400">{currentStep.subtitle}</div>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed bg-slate-900/70 p-3 rounded-xl border border-slate-800">
                {currentStep.desc}
              </div>

              <div className="space-y-1">
                <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">Responsible Actors:</div>
                <div className="text-xs text-slate-200 bg-slate-900/50 p-2 rounded-lg border border-slate-800/80">
                  {currentStep.role}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">Integrated SQA Activity:</div>
                <div className="text-xs text-emerald-200/90 bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-500/20">
                  {currentStep.qa}
                </div>
              </div>
            </div>
          </div>

          {/* Exam Drawing Advice */}
          <div className="bg-slate-950/90 border border-amber-500/30 rounded-2xl p-4 text-xs space-y-2 shadow-md">
            <h4 className="font-bold text-amber-300 text-xs flex items-center gap-1.5 font-mono">
              <Info className="w-3.5 h-3.5 text-amber-400" />
              Must-Include Exam Diagram Elements (Topic 7, Slide 11):
            </h4>
            <ul className="space-y-1.5 text-slate-300 pl-4 list-disc text-[11px] leading-snug">
              <li>Must start with <strong>Requirements Determination by Customer</strong>.</li>
              <li>Must clearly illustrate the closed cycle: <strong>Prototype Design → Implementation → Evaluation → Requirements Fulfilled?</strong>.</li>
              <li>Must draw the <strong>NO branch</strong> labeled <em>"Demands for corrections, changes and additions"</em> looping back to Design.</li>
              <li>Must draw the <strong>YES branch</strong> leading into <strong>System Tests → Conversion → Operation</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
