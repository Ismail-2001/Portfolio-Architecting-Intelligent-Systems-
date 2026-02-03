export interface Project {
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  impact: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

export interface Skill {
  name: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}