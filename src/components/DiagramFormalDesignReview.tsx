import React, { useState } from 'react';
import { 
  Users, 
  User, 
  UserCheck, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  ArrowRight, 
  ArrowDown, 
  FileText,
  Clock,
  Layers,
  ShieldCheck,
  RotateCcw,
  Sparkles
} from 'lucide-react';

export const DiagramFormalDesignReview: React.FC = () => {
  const [selectedOutcome, setSelectedOutcome] = useState<'all' | 'full' | 'partial' | 'denial'>('all');
  const [selectedRole, setSelectedRole] = useState<'leader' | 'team' | 'dev'>('leader');
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const roles = {
    leader: {
      title: "Review Leader",
      badge: "External Senior Professional",
      color: "border-amber-500/50 text-amber-300",
      accent: "#f59e0b",
      attributes: [
        "Knowledge and extensive experience in development of projects of the type reviewed",
        "Preliminary acquaintance with the current project is NOT necessary",
        "Seniority at a level similar to or higher than the project manager",
        "Good professional relationship with project leader and team",
        "Position external to the project team to guarantee complete objectivity"
      ],
      candidates: "Development Department Manager, Chief Software Engineer, Head of SQA Unit, Leader of another project, Customer's Chief Software Engineer",
      responsibilities: [
        "Appoint the review team members (3 to 5 qualified members)",
        "Schedule review sessions and coordinate agenda with development team",
        "Distribute design document and review materials well in advance",
        "Lead the formal review session and keep discussions strictly focused",
        "Issue the official DR Report with decisions, action items, and deadlines",
        "Assign review team member(s) to verify follow-up corrections"
      ]
    },
    team: {
      title: "Review Team",
      badge: "3–5 Members (Majority External)",
      color: "border-purple-500/50 text-purple-300",
      accent: "#a855f7",
      attributes: [
        "Small, agile team (3 to 5 members) to prevent coordination problems and time waste",
        "Majority MUST BE non-project staff to ensure unbiased, critical review",
        "Comprises a diversity of experience and architectural approaches"
      ],
      candidates: "Senior project team members, Senior professionals from other projects/departments, Customer-user representatives, Software development consultants",
      responsibilities: [
        "Thoroughly review design document prior to the session",
        "Use formal SQA checklists to uncover functional, structural, and standards defects",
        "Deliver professional, constructive comments during the DR session",
        "Participate in the formal evaluation and voting decision on the design product",
        "Conduct follow-up review on corrected parts when assigned by Review Leader"
      ]
    },
    dev: {
      title: "Development Team",
      badge: "Authors & Presenters",
      color: "border-cyan-500/50 text-cyan-300",
      accent: "#06b6d4",
      attributes: [
        "The project leader, analysts, architects, and programmers who designed the system",
        "Deep technical familiarity with architecture, requirements, and design constraints"
      ],
      candidates: "Project Manager, System Architects, Lead Engineers, UI Designers",
      responsibilities: [
        "Prepare complete, high-quality design documents conforming to company templates",
        "Prepare a focused short presentation highlighting core issues awaiting approval",
        "Deliver presentation without wasting time on generic project summaries",
        "Answer questions and discuss comments constructively",
        "Carry out all corrections, changes, and additions required in the DR report"
      ]
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 text-slate-100 shadow-2xl space-y-6">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase font-mono flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            UNZA Topic 8, Slide 26 · Question Seven (14 Marks)
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
            Formal Design Review (FDR) Swimlane Process Flow
          </h3>
          <p className="text-xs text-slate-400 max-w-2xl mt-1 leading-relaxed">
            The mandatory phase-gate review approving transition to development. Features 3 distinct participant swimlanes, advance checklist inspection, review session moderation, and the 3 formal approval decision pathways.
          </p>
        </div>
        
        {/* Outcome Filter Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs shadow-inner">
          <span className="text-slate-400 text-[11px] px-2 font-mono">Highlight Path:</span>
          {(['all', 'full', 'partial', 'denial'] as const).map(mode => (
            <button
              key={mode}
              onClick={() => setSelectedOutcome(mode)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                selectedOutcome === mode
                  ? mode === 'full' 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : mode === 'partial' 
                    ? 'bg-amber-600 text-white shadow-md' 
                    : mode === 'denial' 
                    ? 'bg-rose-600 text-white shadow-md' 
                    : 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {mode === 'all' ? 'All Outcomes' : mode === 'full' ? 'Full Approval' : mode === 'partial' ? 'Partial Approval' : 'Denial'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* THE VISUAL SWIMLANE FLOWCHART */}
        <div className="lg:col-span-8 bg-slate-950/90 p-5 rounded-2xl border border-slate-800 space-y-5 shadow-inner">
          
          {/* Swimlane Column Headers */}
          <div className="grid grid-cols-3 gap-3 pb-3 border-b border-slate-800 text-center text-xs font-bold font-mono">
            <div className="text-cyan-400 bg-cyan-950/30 py-2 px-2.5 rounded-xl border border-cyan-500/30 shadow-sm">
              <span className="block text-[10px] text-cyan-300 opacity-75">SWIMLANE 1</span>
              Development Team (Authors)
            </div>
            <div className="text-amber-400 bg-amber-950/30 py-2 px-2.5 rounded-xl border border-amber-500/30 shadow-sm">
              <span className="block text-[10px] text-amber-300 opacity-75">SWIMLANE 2</span>
              Review Leader (External Senior)
            </div>
            <div className="text-purple-400 bg-purple-950/30 py-2 px-2.5 rounded-xl border border-purple-500/30 shadow-sm">
              <span className="block text-[10px] text-purple-300 opacity-75">SWIMLANE 3</span>
              Review Team (3–5 Members)
            </div>
          </div>

          {/* STAGE 1: PREPARATIONS */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-300 flex items-center justify-center text-[10px]">1</span>
              <span>Stage 1: Advance Preparations & Material Distribution</span>
            </div>

            <div className="grid grid-cols-3 gap-3 items-stretch text-xs">
              <div className="bg-slate-900/90 border border-cyan-500/40 p-3 rounded-xl space-y-1.5 shadow-sm">
                <span className="text-[10px] font-mono text-cyan-400 font-bold block">1A. Authoring</span>
                <div className="font-bold text-white text-xs">Prepare Design Document</div>
                <div className="text-[11px] text-slate-400 leading-snug">Conforms to templates; prepares short focused presentation.</div>
              </div>

              <div className="bg-slate-900/90 border border-amber-500/40 p-3 rounded-xl space-y-1.5 shadow-sm">
                <span className="text-[10px] font-mono text-amber-400 font-bold block">1B. Organization</span>
                <div className="font-bold text-white text-xs">Appoint Team & Distribute</div>
                <div className="text-[11px] text-slate-400 leading-snug">Selects 3–5 reviewers; distributes materials and checklists in advance.</div>
              </div>

              <div className="bg-slate-900/90 border border-purple-500/40 p-3 rounded-xl space-y-1.5 shadow-sm">
                <span className="text-[10px] font-mono text-purple-400 font-bold block">1C. Inspection</span>
                <div className="font-bold text-white text-xs">Review Against Checklists</div>
                <div className="text-[11px] text-slate-400 leading-snug">Individual study; compiles list of defects & questions before meeting.</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <ArrowDown className="w-4 h-4 text-slate-600" />
          </div>

          {/* STAGE 2: FORMAL REVIEW SESSION */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-300 flex items-center justify-center text-[10px]">2</span>
              <span>Stage 2: Formal Review Session (Interactive Gate)</span>
            </div>

            <div className="p-4 bg-gradient-to-r from-cyan-950/40 via-amber-950/40 to-purple-950/40 border border-slate-700 rounded-2xl text-center space-y-2.5 shadow-lg">
              <div className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center justify-center gap-2">
                <span>⚡ Formal Review Session Proceedings</span>
              </div>
              <div className="grid grid-cols-3 gap-2.5 text-xs text-slate-300">
                <div className="bg-slate-900/80 p-2.5 rounded-xl border border-cyan-500/30 text-left">
                  <span className="text-[10px] text-cyan-300 font-mono block font-bold">Dev Team:</span>
                  <span className="text-[11px]">Presents core architectural decisions & answers questions.</span>
                </div>
                <div className="bg-slate-900/80 p-2.5 rounded-xl border border-amber-500/30 text-left">
                  <span className="text-[10px] text-amber-300 font-mono block font-bold">Review Leader:</span>
                  <span className="text-[11px]">Moderates discussion, controls agenda, and prevents sidetracking.</span>
                </div>
                <div className="bg-slate-900/80 p-2.5 rounded-xl border border-purple-500/30 text-left">
                  <span className="text-[10px] text-purple-300 font-mono block font-bold">Review Team:</span>
                  <span className="text-[11px]">Critiques design, identifies defects, votes on verdict.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <ArrowDown className="w-4 h-4 text-slate-600" />
          </div>

          {/* STAGE 3: DR REPORT & DECISION GATE */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-300 flex items-center justify-center text-[10px]">3</span>
              <span>Stage 3: Review Report Issued & Decision Verdict</span>
            </div>

            <div className="p-3.5 bg-slate-900 border border-amber-500/40 rounded-xl text-center max-w-md mx-auto shadow-md space-y-1">
              <div className="text-xs font-bold text-amber-300 flex items-center justify-center gap-2 font-mono">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Formal DR Report Issued by Review Leader</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Records summary of discussion, defect items, action owners, deadlines, and the formal approval decision:
              </p>
            </div>
          </div>

          {/* THREE DECISION PATHWAYS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
            {/* Outcome 1: Full Approval */}
            <div className={`p-4 rounded-xl border transition-all ${
              selectedOutcome === 'full' || selectedOutcome === 'all'
                ? 'bg-emerald-950/60 border-emerald-500 shadow-xl ring-2 ring-emerald-500/30'
                : 'bg-slate-950/40 border-slate-800 opacity-40'
            }`}>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1 font-mono">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>1. Full Approval</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                No major corrections required. Design completely conforms to requirements and quality standards.
              </p>
              <div className="mt-3 pt-2.5 border-t border-emerald-500/30 text-[11px] text-emerald-300 font-bold flex items-center gap-1">
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                <span>Advance directly to coding phase</span>
              </div>
            </div>

            {/* Outcome 2: Partial Approval */}
            <div className={`p-4 rounded-xl border transition-all ${
              selectedOutcome === 'partial' || selectedOutcome === 'all'
                ? 'bg-amber-950/60 border-amber-500 shadow-xl ring-2 ring-amber-500/30'
                : 'bg-slate-950/40 border-slate-800 opacity-40'
            }`}>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1 font-mono">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>2. Partial Approval</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Approved sections proceed. Flawed sections require documented corrections followed by verification.
              </p>
              <div className="mt-3 pt-2.5 border-t border-amber-500/30 text-[11px] text-amber-300 font-bold flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
                <span>Follow-up review of corrected parts</span>
              </div>
            </div>

            {/* Outcome 3: Denial of Approval */}
            <div className={`p-4 rounded-xl border transition-all ${
              selectedOutcome === 'denial' || selectedOutcome === 'all'
                ? 'bg-rose-950/60 border-rose-500 shadow-xl ring-2 ring-rose-500/30'
                : 'bg-slate-950/40 border-slate-800 opacity-40'
            }`}>
              <div className="flex items-center gap-2 text-xs font-bold text-rose-400 mb-1 font-mono">
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>3. Denial of Approval</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Major architectural or requirements defects throughout design. Project cannot safely proceed.
              </p>
              <div className="mt-3 pt-2.5 border-t border-rose-500/30 text-[11px] text-rose-300 font-bold flex items-center gap-1">
                <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
                <span>Carry out revisions & repeat DR</span>
              </div>
            </div>
          </div>

          {/* FINAL EXIT GATE */}
          <div className="mt-2 p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-center shadow-md">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest font-mono flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Final Exit Gate: Authorize Next Phase (Coding / Implementation)</span>
            </span>
          </div>
        </div>

        {/* ROLES & ATTRIBUTES EXPLORER */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider font-mono">
                Roles & Responsibilities Matrix
              </h4>
              <span className="text-[10px] text-slate-500 font-mono">Topic 8</span>
            </div>
            
            {/* Role Switcher */}
            <div className="flex rounded-xl bg-slate-900 p-1 border border-slate-800">
              {(['leader', 'team', 'dev'] as const).map(roleKey => (
                <button
                  key={roleKey}
                  onClick={() => setSelectedRole(roleKey)}
                  className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    selectedRole === roleKey
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {roleKey === 'leader' ? 'Leader' : roleKey === 'team' ? 'Review Team' : 'Dev Team'}
                </button>
              ))}
            </div>

            {/* Selected Role Card */}
            {(() => {
              const r = roles[selectedRole];
              return (
                <div className="space-y-3.5 text-xs">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-base">{r.title}</span>
                      <span className="text-[10px] text-blue-300 bg-blue-950/60 px-2.5 py-0.5 rounded-full border border-blue-500/30 font-mono">
                        {r.badge}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[11px] font-mono text-slate-400 font-semibold uppercase">Key Attributes:</div>
                    <ul className="space-y-1 text-slate-300 pl-4 list-disc text-[11px]">
                      {r.attributes.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[11px] font-mono text-slate-400 font-semibold uppercase">Suitable Candidates:</div>
                    <div className="text-slate-300 text-[11px] bg-slate-900/80 p-2.5 rounded-xl border border-slate-800 leading-snug">
                      {r.candidates}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[11px] font-mono text-emerald-400 font-semibold uppercase">Core Responsibilities:</div>
                    <ul className="space-y-1 text-emerald-200/90 pl-4 list-disc text-[11px]">
                      {r.responsibilities.map((res, i) => (
                        <li key={i}>{res}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Bad DR Report Exam Note */}
          <div className="bg-slate-950/90 border border-rose-500/30 rounded-2xl p-4 text-xs space-y-2 shadow-md">
            <h5 className="font-bold text-rose-300 text-xs flex items-center gap-1.5 font-mono">
              <AlertTriangle className="w-3.5 h-3.5" />
              Attributes of a Bad DR Report (Topic 8, Slide 25):
            </h5>
            <ul className="space-y-1.5 text-slate-300 pl-4 list-disc text-[11px] leading-snug">
              <li>An overly brief report approving continuation with <strong>zero detected defects listed</strong>.</li>
              <li>A report approving continuation with a list of defects but <strong>no assigned action items</strong>.</li>
              <li>A report listing action items but <strong>omitting follow-up deadlines or responsible persons</strong>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
