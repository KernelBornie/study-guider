import React, { useState } from 'react';
import { Users, User, UserCheck, CheckCircle, AlertTriangle, XCircle, ArrowRight, ArrowDown, FileText } from 'lucide-react';

export const DiagramFormalDesignReview: React.FC = () => {
  const [selectedOutcome, setSelectedOutcome] = useState<'all' | 'full' | 'partial' | 'denial'>('all');
  const [selectedRole, setSelectedRole] = useState<'leader' | 'team' | 'dev'>('leader');

  const roles = {
    leader: {
      title: "Review Leader",
      badge: "External & Senior",
      attributes: [
        "Knowledge and extensive experience in development of projects of the type reviewed",
        "Preliminary acquaintance with the current project is NOT necessary",
        "Seniority at a level similar to or higher than the project manager",
        "Good professional relationship with project leader and team",
        "Position external to the project team to guarantee objectivity"
      ],
      candidates: "Development Department Manager, Chief Software Engineer, Head of SQA Unit, Leader of another project, Customer's Chief Software Engineer",
      responsibilities: [
        "Appoint the review team members",
        "Schedule review sessions and coordinate with development team",
        "Distribute design document and review materials in advance",
        "Lead the formal review session and keep discussions focused",
        "Issue the official DR Report with decisions and action items",
        "Assign review team member(s) to follow up on corrections"
      ]
    },
    team: {
      title: "Review Team",
      badge: "3–5 Members (Majority Non-Project)",
      attributes: [
        "Small, agile team (3 to 5 members) to prevent coordination problems and time waste",
        "Majority MUST BE non-project staff to ensure unbiased, critical review",
        "Comprises a diversity of experience and approaches"
      ],
      candidates: "Senior project team members, Senior professionals from other projects/departments, Customer-user representatives, Software development consultants",
      responsibilities: [
        "Thoroughly review design document prior to the session",
        "Use formal SQA checklists to uncover functional, structural, and standards defects",
        "Deliver professional, constructive comments during the DR session",
        "Participate in the formal evaluation and decision on the design product",
        "Conduct follow-up review on corrected parts when assigned"
      ]
    },
    dev: {
      title: "Development Team",
      badge: "Authors & Presenters",
      attributes: [
        "The project leader, analysts, and software engineers who designed the system",
        "Deep technical familiarity with architecture, requirements, and design constraints"
      ],
      candidates: "Project Manager, System Architects, Lead Engineers, UI Designers",
      responsibilities: [
        "Prepare complete, high-quality design documents conforming to templates",
        "Prepare a focused short presentation highlighting core issues awaiting approval",
        "Deliver presentation without wasting time on generic project summaries",
        "Answer questions and discuss comments constructively",
        "Carry out all corrections, changes, and additions required in the DR report"
      ]
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">Exam Diagram · Question Seven</span>
          <h3 className="text-lg font-bold text-white">Formal Design Review (DR) Process Flow & Roles</h3>
          <p className="text-xs text-slate-400">UNZA Topic 8, Slide 26 · Complete Process Swimlanes, 3 Decisions & Follow-up</p>
        </div>
        
        {/* Outcome Filter Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
          <span className="text-slate-400 text-[11px] px-2">Highlight Path:</span>
          {(['all', 'full', 'partial', 'denial'] as const).map(mode => (
            <button
              key={mode}
              onClick={() => setSelectedOutcome(mode)}
              className={`px-2.5 py-1 rounded text-xs font-medium capitalize transition-colors ${
                selectedOutcome === mode
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Process Flow Diagram Canvas */}
        <div className="lg:col-span-8 bg-slate-950/70 p-4 rounded-xl border border-slate-800 space-y-4">
          
          {/* Swimlane Headers */}
          <div className="grid grid-cols-3 gap-2 pb-2 border-b border-slate-800 text-center text-xs font-bold">
            <div className="text-cyan-400 bg-cyan-950/20 py-1.5 px-2 rounded border border-cyan-500/20">
              Development Team
            </div>
            <div className="text-amber-400 bg-amber-950/20 py-1.5 px-2 rounded border border-amber-500/20">
              Review Leader
            </div>
            <div className="text-purple-400 bg-purple-950/20 py-1.5 px-2 rounded border border-purple-500/20">
              Review Team (3–5)
            </div>
          </div>

          {/* Phase 1: Preparations */}
          <div className="grid grid-cols-3 gap-2 items-start text-xs">
            <div className="bg-slate-900/90 border border-cyan-500/30 p-2.5 rounded-lg text-center space-y-1">
              <div className="font-semibold text-cyan-300">1. Prepare Design Document</div>
              <div className="text-[10px] text-slate-400">and prepare short presentation</div>
            </div>

            <div className="bg-slate-900/90 border border-amber-500/30 p-2.5 rounded-lg text-center space-y-1">
              <div className="font-semibold text-amber-300">2. Team Appointment</div>
              <div className="text-[10px] text-slate-400">Schedule review & prepare agenda; distribute materials</div>
            </div>

            <div className="bg-slate-900/90 border border-purple-500/30 p-2.5 rounded-lg text-center space-y-1">
              <div className="font-semibold text-purple-300">3. Read Document</div>
              <div className="text-[10px] text-slate-400">Use checklists, list comments prior to review session</div>
            </div>
          </div>

          <div className="flex items-center justify-center my-1">
            <ArrowDown className="w-4 h-4 text-slate-500" />
          </div>

          {/* Phase 2: Formal Review Session */}
          <div className="p-3 bg-gradient-to-r from-cyan-950/40 via-amber-950/40 to-purple-950/40 border border-slate-700 rounded-xl text-center">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-1">
              4. Formal Review Session
            </div>
            <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-300 mt-2">
              <div className="bg-slate-900/70 p-1.5 rounded border border-slate-800">
                Dev Team presents core design
              </div>
              <div className="bg-slate-900/70 p-1.5 rounded border border-slate-800">
                Review Leader moderates agenda
              </div>
              <div className="bg-slate-900/70 p-1.5 rounded border border-slate-800">
                Review Team raises comments
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center my-1">
            <ArrowDown className="w-4 h-4 text-slate-500" />
          </div>

          {/* Phase 3: Review Report & Decision */}
          <div className="p-3 bg-slate-900 border border-amber-500/40 rounded-xl text-center max-w-sm mx-auto">
            <div className="text-xs font-bold text-amber-300 flex items-center justify-center gap-1.5">
              <FileText className="w-4 h-4 text-amber-400" />
              5. Review Report Issued by Review Leader
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Contains discussions summary, action items, completion dates, and approval decision:
            </div>
          </div>

          {/* Three Decision Pathways */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            
            {/* Outcome 1: Full Approval */}
            <div className={`p-3 rounded-lg border transition-all ${
              selectedOutcome === 'full' || selectedOutcome === 'all'
                ? 'bg-emerald-950/60 border-emerald-500/80 shadow-md ring-1 ring-emerald-500/50'
                : 'bg-slate-950/40 border-slate-800 opacity-40'
            }`}>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-1">
                <CheckCircle className="w-4 h-4" />
                Full Approval
              </div>
              <div className="text-[11px] text-slate-300">
                No corrections required. Design product fully meets requirements.
              </div>
              <div className="mt-2 pt-2 border-t border-emerald-500/20 text-[10px] text-emerald-300 font-semibold">
                Proceed directly to next development phase.
              </div>
            </div>

            {/* Outcome 2: Partial Approval */}
            <div className={`p-3 rounded-lg border transition-all ${
              selectedOutcome === 'partial' || selectedOutcome === 'all'
                ? 'bg-amber-950/60 border-amber-500/80 shadow-md ring-1 ring-amber-500/50'
                : 'bg-slate-950/40 border-slate-800 opacity-40'
            }`}>
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-1">
                <AlertTriangle className="w-4 h-4" />
                Partial Approval
              </div>
              <div className="text-[11px] text-slate-300">
                Approved parts continue. Non-approved parts require major corrections.
              </div>
              <div className="mt-2 pt-2 border-t border-amber-500/20 text-[10px] text-amber-300 font-semibold">
                Corrected parts are reviewed by designated member → Follow-up report issued.
              </div>
            </div>

            {/* Outcome 3: Denial of Approval */}
            <div className={`p-3 rounded-lg border transition-all ${
              selectedOutcome === 'denial' || selectedOutcome === 'all'
                ? 'bg-rose-950/60 border-rose-500/80 shadow-md ring-1 ring-rose-500/50'
                : 'bg-slate-950/40 border-slate-800 opacity-40'
            }`}>
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 mb-1">
                <XCircle className="w-4 h-4" />
                No Approval (Denial)
              </div>
              <div className="text-[11px] text-slate-300">
                Major architectural or requirements defects throughout design.
              </div>
              <div className="mt-2 pt-2 border-t border-rose-500/20 text-[10px] text-rose-300 font-semibold">
                Carry out major revisions → Schedule and repeat formal design review.
              </div>
            </div>
          </div>

          {/* Final Exit */}
          <div className="mt-3 p-2.5 bg-emerald-950/40 border border-emerald-500/40 rounded-lg text-center">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wide">
              Exit Gate: Carry Out Next Development Phase
            </span>
          </div>
        </div>

        {/* Roles & Responsibilities Explorer */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-4">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
              Roles & Responsibilities Matrix
            </h4>
            
            {/* Role Switcher */}
            <div className="flex rounded-lg bg-slate-900 p-1 border border-slate-800 mb-3.5">
              {(['leader', 'team', 'dev'] as const).map(roleKey => (
                <button
                  key={roleKey}
                  onClick={() => setSelectedRole(roleKey)}
                  className={`flex-1 py-1 text-xs font-medium rounded transition-colors ${
                    selectedRole === roleKey
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {roleKey === 'leader' ? 'Leader' : roleKey === 'team' ? 'Review Team' : 'Dev Team'}
                </button>
              ))}
            </div>

            {/* Role Details */}
            {(() => {
              const r = roles[selectedRole];
              return (
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-sm">{r.title}</span>
                      <span className="text-[10px] text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                        {r.badge}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 mb-1">Key Attributes:</div>
                    <ul className="space-y-1 text-slate-300 pl-3 list-disc">
                      {r.attributes.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 mb-0.5">Suitable Candidates:</div>
                    <div className="text-slate-300 text-[11px] bg-slate-900/60 p-2 rounded border border-slate-800">
                      {r.candidates}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-emerald-400 mb-1">Core Responsibilities:</div>
                    <ul className="space-y-1 text-emerald-200/90 pl-3 list-disc text-[11px]">
                      {r.responsibilities.map((res, i) => (
                        <li key={i}>{res}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Bad DR Report Note */}
          <div className="bg-slate-950/90 border border-rose-500/30 rounded-xl p-3.5 text-xs space-y-1.5">
            <h5 className="font-bold text-rose-300 text-xs">Attributes of a Bad DR Report (Topic 8, p. 25):</h5>
            <ul className="space-y-1 text-slate-300 pl-3 list-disc text-[11px]">
              <li>Extremely short report limited to documented approval with zero detected defects listed.</li>
              <li>A short report approving continuation, listing several minor defects but specifying no action items.</li>
              <li>A report listing action items but omitting follow-up assignments, deadlines, or responsible persons.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
