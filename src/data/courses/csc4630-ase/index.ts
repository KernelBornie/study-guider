import { Course, Paper } from "@/types";
import { csc4630_2024Final } from "./2024-final";
import { csc4630_2024Supplement } from "./supplement-2024";
import { csc4630_2026MoodleQuiz } from "./2026-moodle-quiz";
import { csc4630_Assessment1 } from "./assessment-1";
import { csc4630LethbridgeStudyGuide, csc4630_LethbridgeStudyGuide } from "./lethbridge-study-guide";

export { csc4630LethbridgeStudyGuide, csc4630_LethbridgeStudyGuide };

export const csc4630Papers: Paper[] = [
  csc4630_2024Final,
  csc4630_2024Supplement,
  csc4630_2026MoodleQuiz,
  csc4630_Assessment1,
  csc4630LethbridgeStudyGuide,
];

export const csc4630: Course = {
  id: "csc4630",
  slug: "csc4630-ase",
  code: "CSC 4630",
  title: "Advanced Software Engineering",
  description: "Object-Oriented Software Engineering (Lethbridge & Laganière), Goal-Oriented Requirements (KAOS), UML modelling, Persistence Frameworks, Design Patterns, SOA, and Real-Time Systems.",
  color: "purple",
  papers: csc4630Papers,
};
