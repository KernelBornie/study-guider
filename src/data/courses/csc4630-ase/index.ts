import { Course } from "@/types";
import { csc4630_2024Final } from "./2024-final";

export const csc4630: Course = {
  id: "csc4630",
  slug: "csc4630-ase",
  code: "CSC 4630",
  title: "Advanced Software Engineering",
  description: "Goal-Oriented Requirements Engineering (KAOS), UML modeling, GRASP principles, GoF design patterns, microservices architecture, and formal verification.",
  color: "purple",
  papers: [csc4630_2024Final],
};
