import React, { useState } from 'react';
import { Layers, Shield, Cpu, Activity, Wrench, RefreshCw, Smartphone, GitBranch, Info } from 'lucide-react';

export const DiagramMcCallTree: React.FC = () => {
  const [selectedFactor, setSelectedFactor] = useState<string | null>("Correctness");

  const categories = [
    {
      name: "Product Operation",
      color: "border-sky-500/40 bg-sky-950/20 text-sky-300",
      description: "How the software performs its functions when running in its operational environment.",
      factors: [
        {
          name: "Correctness",
          question: "Does it do what I want?",
          definition: "Extent to which a program satisfies its specifications and fulfils the user's mission objectives.",
          dimensions: "Output mission, Required accuracy, Completeness, Up-to-dateness, Availability (reaction time/uptime), Coding/documentation standards."
        },
        {
          name: "Reliability",
          question: "Does it do what I want accurately all the time?",
          definition: "Extent to which a program can be expected to perform its intended function with required precision.",
          dimensions: "Maximum allowed failure rate, MTBF, failure tolerance (e.g. cardiac detection failure < 1 in 10^6)."
        },
        {
          name: "Efficiency",
          question: "Will it run on my hardware as well as it can?",
          definition: "Amount of computing resources (CPU, RAM, storage) and code required to perform a function.",
          dimensions: "Processing throughput, response time, storage capacity, power consumption (e.g. 1000 mAh cell runs 30 days)."
        },
        {
          name: "Integrity",
          question: "Is it secure?",
          definition: "Extent to which access to software or data by unauthorised persons can be controlled.",
          dimensions: "Access control, password lockout, activity logs and audit trails, permission security."
        },
        {
          name: "Usability",
          question: "Can I run it?",
          definition: "Effort required to learn, operate, prepare input, and interpret output of a program.",
          dimensions: "Staff training time, operational error rates, interface clarity, task turnaround time."
        }
      ]
    },
    {
      name: "Product Revision",
      color: "border-amber-500/40 bg-amber-950/20 text-amber-300",
      description: "How easily the software can be modified, fixed, or updated during maintenance.",
      factors: [
        {
          name: "Maintainability",
          question: "Can I fix it?",
          definition: "Effort required to locate and fix an error in an operational program.",
          dimensions: "Modularity, self-descriptiveness, small module size (e.g. <=30 statements), diagnosis ease."
        },
        {
          name: "Flexibility",
          question: "Can I change it?",
          definition: "Effort required to modify an operational program for new needs (adaptive and perfective maintenance).",
          dimensions: "Generality, configurable settings, user report creators, adaptability to business rule changes."
        },
        {
          name: "Testability",
          question: "Can I test it?",
          definition: "Effort required to test a program to ensure it performs its intended function.",
          dimensions: "Built-in automated self-diagnostics, test coverage visibility, pass rates, test hook availability."
        }
      ]
    },
    {
      name: "Product Transition",
      color: "border-purple-500/40 bg-purple-950/20 text-purple-300",
      description: "How easily the software can adapt to new hardware, platforms, or other systems.",
      factors: [
        {
          name: "Portability",
          question: "Will I be able to use it on another machine?",
          definition: "Adaptation of a software system to other environments consisting of different hardware or OS.",
          dimensions: "Platform independence, cross-OS compatibility (e.g. transferring Windows 2000 app to Linux)."
        },
        {
          name: "Reusability",
          question: "Will I be able to reuse some of the software?",
          definition: "Use of software modules originally designed for one project in a new software project.",
          dimensions: "Service-oriented APIs, component library integration, saving development resources."
        },
        {
          name: "Interoperability",
          question: "Will I be able to interface it with another system?",
          definition: "Focus on creating interfaces with other software systems or equipment firmware.",
          dimensions: "Standard communication protocols, data format interchange, multi-currency exchange."
        }
      ]
    }
  ];

  const alternativeFactors = [
    {
      name: "Verifiability",
      introducedBy: "Evans & Marciniak + Deutsch & Willis",
      desc: "Design and coding features that enable efficient verification (modularity, simplicity, clear interfaces). Excludes McCall's Testability."
    },
    {
      name: "Expandability",
      introducedBy: "Evans & Marciniak + Deutsch & Willis",
      desc: "Provisions to serve larger populations, higher workloads, and future feature growth (parallels McCall's Flexibility)."
    },
    {
      name: "Safety",
      introducedBy: "Deutsch & Willis",
      desc: "Eliminates hazardous operating conditions in process control software (e.g., auto-shutdown of steam boiler upon pressure spike)."
    },
    {
      name: "Manageability",
      introducedBy: "Deutsch & Willis",
      desc: "Administrative and monitoring tools for software health, configuration management, and threshold alerts during operation."
    },
    {
      name: "Survivability",
      introducedBy: "Deutsch & Willis",
      desc: "Continuity of essential services under failure; specifies minimum MTBF and maximum allowable recovery time (MTTR)."
    }
  ];

  // Find selected factor info
  const allFactors = categories.flatMap(c => c.factors);
  const currentFactorInfo = allFactors.find(f => f.name === selectedFactor);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-100">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">Exam Framework · Unit 3 & Question One</span>
          <h3 className="text-lg font-bold text-white">McCall's 11 Quality Factors + 5 Alternative Factors</h3>
          <p className="text-xs text-slate-400">Classified into 3 Core Product Categories (Tree Diagram Model)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Categories & Factors Grid */}
        <div className="lg:col-span-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {categories.map((cat, i) => (
              <div key={i} className={`p-3.5 rounded-xl border ${cat.color} space-y-2`}>
                <div className="font-bold text-xs uppercase tracking-wider">{cat.name}</div>
                <div className="text-[11px] text-slate-400 leading-snug">{cat.description}</div>
                
                <div className="space-y-1.5 pt-1">
                  {cat.factors.map(f => (
                    <button
                      key={f.name}
                      onClick={() => setSelectedFactor(f.name)}
                      className={`w-full text-left p-2 rounded-lg text-xs font-medium border transition-all ${
                        selectedFactor === f.name
                          ? 'bg-white text-slate-950 font-bold shadow-md'
                          : 'bg-slate-900/80 text-slate-200 border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <div>{f.name}</div>
                      <div className={`text-[10px] ${selectedFactor === f.name ? 'text-slate-600' : 'text-slate-400'} italic`}>
                        {f.question}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Alternative Models Card */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Five (5) New Quality Factors in Alternative Models (Question 1.2)
              </h4>
              <span className="text-[10px] text-slate-400 font-mono">Evans & Marciniak / Deutsch & Willis</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 pt-1 text-xs">
              {alternativeFactors.map(af => (
                <div key={af.name} className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
                  <div className="font-bold text-white text-xs">{af.name}</div>
                  <div className="text-[10px] text-amber-400 font-medium">{af.introducedBy}</div>
                  <div className="text-[11px] text-slate-400 leading-tight">{af.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selected Factor Inspector */}
        <div className="lg:col-span-4 bg-slate-950/90 border border-slate-800 rounded-xl p-4 space-y-3.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <Info className="w-4 h-4 text-blue-400" />
            Quality Factor Inspector
          </div>

          {currentFactorInfo ? (
            <div className="space-y-3">
              <div>
                <h4 className="text-base font-bold text-white">{currentFactorInfo.name}</h4>
                <div className="text-xs font-mono text-cyan-300 italic">{currentFactorInfo.question}</div>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Formal Definition:</span>
                {currentFactorInfo.definition}
              </div>

              <div className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="text-[10px] font-bold text-emerald-400 uppercase block mb-1">Key Dimensions & Measurable Metrics:</span>
                {currentFactorInfo.dimensions}
              </div>

              <div className="p-2.5 bg-blue-950/30 border border-blue-500/20 rounded-lg text-[11px] text-blue-200">
                <strong>Exam Tip:</strong> Whenever answering McCall factor metrics, always state both the Factor Name and its Category (Operation, Revision, or Transition).
              </div>
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-slate-400">
              Select any quality factor on the left to see its definition, simple question, and metrics.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
