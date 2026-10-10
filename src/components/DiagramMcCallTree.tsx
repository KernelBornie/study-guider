import React, { useState } from 'react';
import { 
  Layers, 
  Shield, 
  Cpu, 
  Activity, 
  Wrench, 
  RefreshCw, 
  Smartphone, 
  GitBranch, 
  Info, 
  CheckCircle, 
  Sparkles,
  HelpCircle,
  Award
} from 'lucide-react';

export const DiagramMcCallTree: React.FC = () => {
  const [selectedFactor, setSelectedFactor] = useState<string>("Correctness");
  const [viewMode, setViewMode] = useState<"mccall" | "alternative">("mccall");

  const categories = [
    {
      id: "operation",
      name: "Product Operation",
      badge: "5 Factors",
      color: "border-sky-500/50 bg-sky-950/30 text-sky-300",
      accent: "#38bdf8",
      coreQuestion: "Does it do what I want in daily operation?",
      description: "How the software performs its functional duties when executing in its target operational environment.",
      factors: [
        {
          num: 1,
          name: "Correctness",
          question: "Does it do what I want?",
          definition: "The extent to which a program satisfies its specifications and fulfils the user's mission objectives.",
          dimensions: "Output mission, Required accuracy, Completeness, Up-to-dateness, Availability (reaction time/uptime), Standards compliance.",
          examMetric: "Time taken to respond to user request / Uptime accessibility %",
          formula: "Defect count / Lines of code, or Uptime %"
        },
        {
          num: 2,
          name: "Reliability",
          question: "Does it do what I want accurately all the time?",
          definition: "The extent to which a program can be expected to perform its intended function with required precision without failures.",
          dimensions: "Maximum allowed failure rate, MTBF (Mean Time Between Failures), failure tolerance (e.g. cardiac arrest failure < 1 in 10^6).",
          examMetric: "Average time between failures (MTBF) / Number of failures per time unit",
          formula: "MTBF = Total Operating Time / Total Failures"
        },
        {
          num: 3,
          name: "Efficiency",
          question: "Will it run on my hardware as well as it can?",
          definition: "Amount of computing resources (CPU, RAM, storage, network bandwidth) and code required to perform a function.",
          dimensions: "Processing throughput, response time, memory footprint, storage capacity, power draw (e.g., 1000 mAh battery lasts 30 days).",
          examMetric: "Measurement of CPU, memory, and disk usage / Number of transactions per second",
          formula: "Resource utilization % under peak load"
        },
        {
          num: 4,
          name: "Integrity",
          question: "Is it secure against unauthorized access?",
          definition: "Extent to which access to software or data by unauthorised persons can be controlled and restricted.",
          dimensions: "Access control, password lockout policies, role permissions, activity audit logs, encryption.",
          examMetric: "Count of unauthorised access attempts / % of actions logged vs total user actions",
          formula: "Breach vulnerability index"
        },
        {
          num: 5,
          name: "Usability",
          question: "Can I easily learn and run it?",
          definition: "Effort required to learn, operate, prepare input, and interpret output of a program.",
          dimensions: "Staff training time, operational error frequency, interface clarity, task turnaround speed.",
          examMetric: "Number of user errors per task / Average time taken to complete tasks",
          formula: "Task completion time (minutes) / Error rate"
        }
      ]
    },
    {
      id: "revision",
      name: "Product Revision",
      badge: "3 Factors",
      color: "border-amber-500/50 bg-amber-950/30 text-amber-300",
      accent: "#f59e0b",
      coreQuestion: "Can I fix, change, or test it easily?",
      description: "How easily the software can be modified, debugged, or tested during ongoing maintenance and evolution.",
      factors: [
        {
          num: 6,
          name: "Maintainability",
          question: "Can I find and fix an error easily?",
          definition: "Effort required to locate and fix an error in an operational program (corrective maintenance).",
          dimensions: "Modularity, self-descriptiveness, small module size (<=30 statements), diagnosis ease, code comment density.",
          examMetric: "Average time taken to fix a defect or issue (MTTR)",
          formula: "MTTR = Total Maintenance Downtime / Number of Fixes"
        },
        {
          num: 7,
          name: "Flexibility",
          question: "Can I adapt and enhance it for new needs?",
          definition: "Effort required to modify an operational program for new needs (adaptive and perfective maintenance).",
          dimensions: "Generality, configurable parameters, user report creators, adaptability to business rule adjustments.",
          examMetric: "Count of configurable settings / Average time to implement requirements changes",
          formula: "Hours per change request implemented"
        },
        {
          num: 8,
          name: "Testability",
          question: "Can I easily test and verify its execution?",
          definition: "Effort required to test a program to ensure that it performs its intended function without regression.",
          dimensions: "Built-in automated self-diagnostics, test coverage visibility, pass rates, test hook availability, auditability.",
          examMetric: "Percentage of test cases that pass during testing phases",
          formula: "Test coverage % = Executed paths / Total paths"
        }
      ]
    },
    {
      id: "transition",
      name: "Product Transition",
      badge: "3 Factors",
      color: "border-purple-500/50 bg-purple-950/30 text-purple-300",
      accent: "#a855f7",
      coreQuestion: "Can I move, reuse, or interface it elsewhere?",
      description: "How easily the software adapts to new hardware, foreign operating platforms, or external connected ecosystems.",
      factors: [
        {
          num: 9,
          name: "Portability",
          question: "Will I be able to run it on another platform/OS?",
          definition: "Effort required to transport a program from one hardware configuration and/or OS environment to another.",
          dimensions: "Platform independence, cross-OS compilation (e.g. migrating Windows 2000 application to Linux).",
          examMetric: "Effort units (man-months) required to port code to a secondary target OS",
          formula: "% of hardware-specific code statements"
        },
        {
          num: 10,
          name: "Reusability",
          question: "Will I be able to reuse components in new projects?",
          definition: "Extent to which a program (or parts of a program) can be reused in other applications without reprogramming.",
          dimensions: "Service-oriented APIs, independent component libraries, domain packaging, decoupling from database engines.",
          examMetric: "% of codebase utilized across multiple independent production products",
          formula: "Reused Lines of Code / Total Application Code"
        },
        {
          num: 11,
          name: "Interoperability",
          question: "Will I be able to interface it with other systems?",
          definition: "Effort required to couple one system with other software systems or equipment firmware.",
          dimensions: "Standard communication protocols (REST, gRPC), open data formats (JSON, XML), standardized device drivers.",
          examMetric: "Standard protocol conformance / Count of supported third-party API adapters",
          formula: "Count of seamless external system interfaces"
        }
      ]
    }
  ];

  const alternativeFactors = [
    {
      name: "Verifiability",
      introducedBy: "Evans & Marciniak (1987) & Deutsch & Willis (1988)",
      replaced: "Replaced McCall's Testability",
      definition: "Design and coding features that enable efficient verification of software requirements (modularity, structural simplicity, transparent interfaces).",
      example: "Formal mathematical verification of safety-critical algorithms without running exhaustive black-box tests."
    },
    {
      name: "Expandability",
      introducedBy: "Evans & Marciniak (1987) & Deutsch & Willis (1988)",
      replaced: "Parallels McCall's Flexibility",
      definition: "Architectural capability to serve larger populations, higher transaction volumes, and increased data storage capacity without redesign.",
      example: "Adding clustered database read-replicas or auto-scaling worker nodes when student enrollment doubles."
    },
    {
      name: "Safety",
      introducedBy: "Deutsch & Willis (1988) exclusively",
      replaced: "Brand new factor for critical systems",
      definition: "Eliminates hazardous operating conditions and prevents physical harm or catastrophic damage in process control environments.",
      example: "Automatic steam valve release and shutdown triggered when boiler pressure exceeds 200 bar."
    },
    {
      name: "Manageability",
      introducedBy: "Deutsch & Willis (1988) exclusively",
      replaced: "Brand new factor for software administration",
      definition: "Administrative tools, telemetry dashboards, and configuration controls that enable software health monitoring during production operation.",
      example: "Live monitoring console for memory utilization, active thread pools, and dynamic database connection limits."
    },
    {
      name: "Survivability",
      introducedBy: "Deutsch & Willis (1988) exclusively",
      replaced: "Parallels Reliability & Fault Tolerance",
      definition: "Continuity of essential services during and following catastrophic hardware/network failures; specifies minimum MTBF and maximum allowable MTTR.",
      example: "Banking core continues processing emergency ATM cash withdrawals locally even when central cloud fiber link is severed."
    }
  ];

  const allFactors = categories.flatMap(c => c.factors);
  const currentFactor = allFactors.find(f => f.name === selectedFactor) || allFactors[0];
  const parentCategory = categories.find(c => c.factors.some(f => f.name === currentFactor.name)) || categories[0];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 text-slate-100 shadow-2xl space-y-6">
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase font-mono flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            UNZA CSC 4642 Unit 3 · Question 1 (20 Marks)
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
            McCall's Quality Factor Tree Diagram (11 Factors)
          </h3>
          <p className="text-xs text-slate-400 max-w-2xl mt-1 leading-relaxed">
            The definitive hierarchical tree classifying software quality into <strong>3 Product Categories</strong> and <strong>11 Operational Factors</strong>, with exact question definitions and UNZA exam metric mappings.
          </p>
        </div>

        {/* View Switcher: McCall Tree vs Alternative Models */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 shadow-inner">
          <button
            onClick={() => setViewMode("mccall")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "mccall"
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>McCall's 11 Factors Tree</span>
          </button>
          <button
            onClick={() => setViewMode("alternative")}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
              viewMode === "alternative"
                ? "bg-purple-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>5 Alternative Factors (Evans / Deutsch)</span>
          </button>
        </div>
      </div>

      {viewMode === "mccall" ? (
        <div className="space-y-6">
          {/* THE TREE DIAGRAM CANVAS */}
          <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-inner overflow-x-auto">
            {/* Tree Level 0: Root Node */}
            <div className="flex flex-col items-center">
              <div className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl border border-blue-400/30 text-center max-w-md w-full ring-4 ring-blue-500/10">
                <span className="text-[10px] uppercase font-mono tracking-widest text-blue-200 font-bold block">
                  Root Tree Node
                </span>
                <div className="text-base font-extrabold tracking-tight">SOFTWARE QUALITY</div>
                <div className="text-[11px] text-blue-100 opacity-90 mt-0.5">
                  McCall Quality Factor Model (1977) · 3 Categories & 11 Factors
                </div>
              </div>

              {/* Trunk vertical stem */}
              <div className="w-0.5 h-6 bg-slate-700"></div>

              {/* Horizontal Distribution Beam */}
              <div className="relative w-full max-w-4xl">
                <div className="h-0.5 bg-slate-700 w-full"></div>
                {/* 3 Drop Stems */}
                <div className="absolute left-[16.6%] top-0 w-0.5 h-6 bg-sky-500 -translate-x-1/2"></div>
                <div className="absolute left-[50%] top-0 w-0.5 h-6 bg-amber-500 -translate-x-1/2"></div>
                <div className="absolute left-[83.3%] top-0 w-0.5 h-6 bg-purple-500 -translate-x-1/2"></div>
              </div>
            </div>

            {/* Tree Level 1: The Three Categories (Branches) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 max-w-5xl mx-auto">
              {categories.map((cat) => (
                <div key={cat.id} className="space-y-4 flex flex-col items-center">
                  {/* Category Node */}
                  <div className={`w-full p-4 rounded-xl border ${cat.color} text-center space-y-1.5 shadow-lg relative`}>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider font-bold opacity-80">
                        Category Branch
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-950/70 border border-current font-bold">
                        {cat.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white tracking-wide uppercase">
                      {cat.name}
                    </h4>
                    <p className="text-[11px] text-slate-300 italic">
                      "{cat.coreQuestion}"
                    </p>
                  </div>

                  {/* Vertical branch stem leading to factor leaves */}
                  <div className="w-0.5 h-4 bg-slate-700"></div>

                  {/* Level 2: Factor Leaves Under This Category */}
                  <div className="w-full space-y-2">
                    {cat.factors.map((factor) => {
                      const isSelected = selectedFactor === factor.name;
                      return (
                        <button
                          key={factor.name}
                          onClick={() => setSelectedFactor(factor.name)}
                          className={`w-full p-3 rounded-xl border text-left transition-all duration-150 flex items-start gap-3 ${
                            isSelected
                              ? "bg-slate-800 border-blue-400 text-white shadow-lg ring-2 ring-blue-500/30 scale-[1.02]"
                              : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-lg text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400"
                          }`}>
                            {factor.num}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs text-white truncate">{factor.name}</span>
                              {isSelected && (
                                <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-400 italic truncate mt-0.5">
                              {factor.question}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FACTOR INSPECTOR & EXAM METRICS DECK */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 bg-slate-950/80 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-500/50 text-blue-300 font-mono font-bold flex items-center justify-center text-sm">
                    {currentFactor.num}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono text-blue-400 uppercase font-semibold">
                      Quality Factor #{currentFactor.num} · {parentCategory.name}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {currentFactor.name}
                    </h3>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  Question: <span className="text-cyan-300 font-semibold italic">"{currentFactor.question}"</span>
                </div>
              </div>

              {/* Definition */}
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                  Formal SQA / IEEE Definition:
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {currentFactor.definition}
                </p>
              </div>

              {/* Dimensions */}
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                  Measurable Dimensions & Sub-Factors:
                </span>
                <p className="text-xs text-emerald-200/90 leading-relaxed font-mono">
                  {currentFactor.dimensions}
                </p>
              </div>

              {/* 2024 Exam Match */}
              <div className="bg-blue-950/40 p-3.5 rounded-xl border border-blue-500/30 space-y-1">
                <span className="text-[10px] font-mono uppercase text-blue-400 font-bold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  Exact Metric from 2024 Exam (Question 1.1 Match):
                </span>
                <p className="text-xs text-blue-200 font-medium">
                  "{currentFactor.examMetric}"
                </p>
              </div>
            </div>

            {/* Exam Quick Guide & Marks Advice */}
            <div className="lg:col-span-4 bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider">
                <Info className="w-4 h-4 text-blue-400" />
                Exam Marking Checklist (15 Marks):
              </div>
              <ul className="text-xs text-slate-300 space-y-2 pl-4 list-disc leading-relaxed">
                <li>
                  <strong>Three Core Categories:</strong> Always mention <span className="text-sky-300">Operation</span> (5), <span className="text-amber-300">Revision</span> (3), and <span className="text-purple-300">Transition</span> (3).
                </li>
                <li>
                  <strong>Correctness vs Reliability:</strong> Correctness is mission conformity (doing what is specified); Reliability is failure-free accuracy over time (MTBF).
                </li>
                <li>
                  <strong>Flexibility vs Maintainability:</strong> Maintainability repairs existing defects; Flexibility modifies code for new features or business rules.
                </li>
                <li>
                  <strong>Portability vs Reusability:</strong> Portability changes hardware/OS; Reusability re-deploys modules in completely different application projects.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        /* ALTERNATIVE MODELS VIEW (Question 1.2: 5 New Factors) */
        <div className="space-y-6">
          <div className="bg-purple-950/30 border border-purple-500/30 rounded-2xl p-5 text-xs text-purple-200 leading-relaxed">
            <h4 className="text-sm font-bold text-purple-300 flex items-center gap-1.5 mb-1">
              <Sparkles className="w-4 h-4" />
              Alternative Quality Factor Frameworks (Topic 3, Slides 23–32)
            </h4>
            <p>
              Both <strong>Evans & Marciniak (1987)</strong> and <strong>Deutsch & Willis (1988)</strong> modernized McCall's 1977 framework to account for safety-critical microprocessors, process control systems, and automated verification tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {alternativeFactors.map((af, i) => (
              <div key={af.name} className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5 space-y-2.5 shadow-lg hover:border-purple-500/50 transition-colors">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-purple-400">
                    Factor #{i + 1}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
                    Alternative Model
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">{af.name}</h4>
                  <div className="text-[11px] font-mono text-amber-400 font-medium">
                    {af.introducedBy}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                    {af.replaced}
                  </div>
                </div>

                <div className="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 leading-relaxed">
                  {af.definition}
                </div>

                <div className="text-[11px] text-cyan-300/90 bg-cyan-950/20 p-2 rounded-lg border border-cyan-500/20 leading-relaxed">
                  <strong>Example:</strong> {af.example}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 space-y-1">
            <span className="font-bold text-white block">Key 2024 Exam Question 1.2 Summary (5 Marks):</span>
            <p className="text-slate-400">
              "Two other models for SQ factors are Evans & Marciniak and Deutsch & Willis. List the five new quality factors introduced by both models:"
              <br />
              1. <strong>Verifiability</strong> (Both) · 2. <strong>Expandability</strong> (Both) · 3. <strong>Safety</strong> (Deutsch & Willis) · 4. <strong>Manageability</strong> (Deutsch & Willis) · 5. <strong>Survivability</strong> (Deutsch & Willis).
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
