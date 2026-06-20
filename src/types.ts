export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  iconName: string;
  color: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  title: string;
  problem: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string; performanceGrow: number }[];
  technologies: string[];
}

export interface ProcessStep {
  phase: string;
  title: string;
  subtitle: string;
  duration: string;
  deliverables: string[];
  description: string;
}

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "AI" | "Cloud";
  iconType: string;
  description: string;
}
