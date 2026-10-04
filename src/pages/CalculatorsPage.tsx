import React from "react";
import { Link } from "react-router-dom";
import { CalculatorsView } from "@/components/CalculatorsView";
import { ArrowLeft } from "lucide-react";

export default function CalculatorsPage() {
  return (
    <div className="space-y-8 pb-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400 border-b border-slate-800 pb-3">
        <Link to="/" className="hover:text-white transition-colors">Courses</Link>
        <span>/</span>
        <span className="text-slate-200 font-semibold">Interactive SQA Calculators</span>
      </div>

      <CalculatorsView />
    </div>
  );
}
