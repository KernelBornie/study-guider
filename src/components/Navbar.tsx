import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BookOpen, 
  PenTool, 
  Calculator, 
  Settings, 
  GraduationCap,
  Bot
} from "lucide-react";

export const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3 flex items-center justify-between">
      {/* Brand */}
      <Link to="/" className="flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-sm">
          <GraduationCap className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm sm:text-base font-bold tracking-tight text-white leading-tight">
            UNZA Study-Guider
          </span>
          <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
            Multi-Course Revision & Solution Portal
          </span>
        </div>
      </Link>

      {/* Nav items */}
      <nav className="flex items-center gap-1 text-xs font-medium">
        <Link
          to="/"
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
            isActive("/") && !isActive("/diagrams") && !isActive("/calculators") && !isActive("/admin") && !isActive("/ai")
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-400 hover:text-white hover:bg-slate-900"
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Courses</span>
        </Link>

        <Link
          to="/diagrams"
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
            isActive("/diagrams")
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-400 hover:text-white hover:bg-slate-900"
          }`}
        >
          <PenTool className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Diagrams</span>
        </Link>

        <Link
          to="/calculators"
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
            isActive("/calculators")
              ? "bg-blue-600 text-white shadow-sm"
              : "text-slate-400 hover:text-white hover:bg-slate-900"
          }`}
        >
          <Calculator className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Calculators</span>
        </Link>

        <Link
          to="/ai"
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
            isActive("/ai")
              ? "bg-purple-600 text-white shadow-sm"
              : "text-slate-400 hover:text-purple-300 hover:bg-purple-950/30"
          }`}
        >
          <Bot className="w-3.5 h-3.5 text-purple-400" />
          <span className="font-semibold text-purple-300">AI Tutor</span>
        </Link>

        <Link
          to="/admin"
          className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
            isActive("/admin")
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-slate-400 hover:text-white hover:bg-slate-900"
          }`}
        >
          <Settings className="w-3.5 h-3.5" />
          <span>Admin</span>
        </Link>
      </nav>
    </header>
  );
};
