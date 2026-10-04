import React, { useState } from 'react';
import { SECTION_A_QUESTIONS } from '../data/examData';
import { DiagramMcCallTree } from './DiagramMcCallTree';
import { CheckCircle, HelpCircle, BookOpen, Bookmark, ChevronDown, ChevronUp } from 'lucide-react';

export const SectionAView: React.FC = () => {
  const [openSubQ, setOpenSubQ] = useState<{ [key: string]: boolean }>({
    'q1-1': true,
    'q1-2': true,
    'q2-1.a': true,
    'q2-1.b': true,
    'q2-2': true,
    'q2-3': true
  });
  const [showDiagram, setShowDiagram] = useState(false);

  const toggleSub = (id: string) => {
    setOpenSubQ(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              COMPULSORY SECTION · 40 MARKS
            </span>
            <h2 className="text-xl font-bold text-white mt-1">Section A: All Questions Compulsory</h2>
            <p className="text-xs text-slate-400 mt-1">
              Answer Question One (20 Marks) and Question Two (20 Marks) in full.
            </p>
          </div>
          <button
            onClick={() => setShowDiagram(!showDiagram)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
              showDiagram
                ? 'bg-blue-600 text-white border-blue-500'
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750'
            }`}
          >
            {showDiagram ? 'Hide Quality Factor Model Tree' : 'View Quality Factor Model Tree'}
          </button>
        </div>
      </div>

      {showDiagram && (
        <div className="animate-in fade-in duration-200">
          <DiagramMcCallTree />
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-8">
        {SECTION_A_QUESTIONS.map(q => (
          <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
            {/* Question Bar */}
            <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs font-bold rounded border border-amber-500/30">
                  {q.number}
                </span>
                <h3 className="text-base font-bold text-white">{q.title}</h3>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-400 font-mono">[{q.marks} Marks]</span>
                <span className="text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                  COMPULSORY
                </span>
              </div>
            </div>

            {/* Subquestions */}
            <div className="divide-y divide-slate-800">
              {q.subQuestions.map(sq => {
                const subKey = `${q.id}-${sq.label}`;
                const isOpen = !!openSubQ[subKey];
                return (
                  <div key={sq.label} className="p-5 space-y-3">
                    <div 
                      onClick={() => toggleSub(subKey)}
                      className="cursor-pointer flex items-start justify-between gap-4 group"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30">
                            Sub-question {sq.label}
                          </span>
                          <span className="text-xs text-slate-400 font-mono">[{sq.marks} marks]</span>
                        </div>
                        <div className="text-sm font-semibold text-slate-100 group-hover:text-blue-300 transition-colors whitespace-pre-line leading-relaxed">
                          {sq.text}
                        </div>
                      </div>
                      <button className="text-slate-400 group-hover:text-white p-1">
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>

                    {isOpen && (
                      <div className="mt-3 space-y-3 animate-in fade-in duration-150">
                        {/* Key Examination Points */}
                        <div className="p-3 bg-slate-950/70 border border-slate-800 rounded-lg">
                          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide block mb-1.5">
                            Key Marking Points (Model Scheme):
                          </span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                            {sq.keyPoints.map((pt, i) => (
                              <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{pt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Full Detailed Solution Text */}
                        <div className="p-4 bg-slate-950/90 border border-slate-800 rounded-lg space-y-2">
                          <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                            Complete Academic Solution:
                          </span>
                          <div className="text-xs text-slate-200 leading-relaxed font-sans whitespace-pre-line">
                            {sq.answer}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
