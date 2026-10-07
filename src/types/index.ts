export interface SubQuestion {
  id: string;
  label: string;
  marks: number;
  question: string;
  answer: string;
  subNumber?: string;
  text?: string;
  modelAnswer?: string;
  keyPoints?: string[];
  diagramType?: 'prototyping' | 'defect-removal' | 'formal-review' | 'mccall-tree' | 'error-chain';
}

export interface Question {
  id: string;
  number: string;
  title?: string;
  topic?: string;
  marks: number;
  subQuestions?: SubQuestion[];
  questions?: SubQuestion[];
}

export interface Section {
  id: string;
  name: string;
  instructions?: string;
  compulsory: boolean;
  questions: Question[];
}

export interface Paper {
  id: string;
  slug: string;
  title: string;
  year: number;
  duration: string;
  totalMarks: number;
  venue?: string;
  paperType?: 'Final Exam' | 'Test' | 'Assessment' | 'Quiz' | 'Study Paper';
  structure?: string;
  category?: string;
  sections: Section[];
}

export interface Course {
  id: string;
  slug: string;
  code: string;
  title: string;
  description: string;
  color: string;
  papers: Paper[];
}
