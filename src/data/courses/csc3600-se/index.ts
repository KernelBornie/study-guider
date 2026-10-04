import { Course } from "@/types";
import { csc3600_Test1 } from "./test-1";
import { csc3600_Assignment1 } from "./assignment-1";

export const csc3600: Course = {
  id: "csc3600",
  slug: "csc3600-se",
  code: "CSC 3600",
  title: "Software Engineering",
  description:
    "Complete UNZA CSC 3600 solutions — software processes, agile methods, requirements engineering, verification vs validation, safety-critical systems (Insulin Pump), psychiatric healthcare management (Mentcare), and UML modelling for Smart Campus Healthcare System (SCHS).",
  color: "amber",
  papers: [
    csc3600_Test1,
    csc3600_Assignment1,
  ],
};
