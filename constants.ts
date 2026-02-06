import { Experience, Project, Skill, Testimonial } from "./types";

export const HERO_CONTENT = {
  headline: "Architecting Intelligent Systems for the Next Era of Computation.",
  subHeadline: "Building scalable, production-grade LLM applications with the Gemini API and modern cloud infrastructure.",
  cta: "Explore Engineering Portfolio"
};

export const ABOUT_CONTENT = "I bridge the gap between theoretical AI research and production-grade software engineering. With deep expertise in the Gemini API and large-scale distributed systems, I design architectures that transform raw model capabilities into reliable business value. My focus is on reducing latency, optimizing token usage, and building self-healing agents that operate autonomously within complex enterprise environments. I write clean, maintainable code for the age of artificial intelligence.";

export const SKILLS_CONTENT: Skill[] = [
  { name: "Gemini API", description: "Orchestrating multi-modal workflows and optimizing context caching for high-throughput applications." },
  { name: "Large Language Models", description: "Fine-tuning, RAG architecture implementation, and semantic routing strategies." },
  { name: "Prompt Engineering", description: "Designing deterministic system instructions and chain-of-thought protocols for critical logic." },
  { name: "Machine Learning", description: "Developing predictive models and neural networks using PyTorch and TensorFlow." },
  { name: "MLOps", description: "Building automated CI/CD pipelines for model evaluation, deployment, and drift monitoring." },
  { name: "Python", description: "Writing high-performance, asynchronous code for backend services and data processing." },
  { name: "Cloud AI Systems", description: "Deploying serverless inference endpoints on GCP and AWS for elastic scalability." }
];

export const PROJECTS_CONTENT: Project[] = [
  {
    title: "Project Aether",
    problem: "Financial analysts required hours to synthesize real-time market data from fragmented unstructured sources.",
    solution: "Developed an autonomous multi-agent system using the Gemini API to ingest, analyze, and cross-reference live financial news streams.",
    stack: ["Gemini 1.5 Pro", "Python", "FastAPI", "Vector DB"],
    impact: "Reduced analysis time by 85% and increased prediction accuracy for emerging market trends by 22%.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "NeuroDoc",
    problem: "Legal teams struggled with retrieval accuracy across millions of case files due to poor semantic understanding.",
    solution: "Engineered a hybrid retrieval-augmented generation (RAG) system utilizing advanced embeddings and semantic reranking.",
    stack: ["LLMs", "LangChain", "Pinecone", "React"],
    impact: "Improved retrieval precision to 94% and cut document review costs by $150k annually.",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e905263543?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "VisionCore",
    problem: "Manufacturing quality control faced high latency and error rates in defect detection on assembly lines.",
    solution: "Deployed a fine-tuned vision-language model at the edge to identify microscopic defects in real-time.",
    stack: ["Computer Vision", "TensorFlow", "Edge AI", "Python"],
    impact: "Achieved 99.8% defect detection rate with sub-50ms inference latency.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
  }
];

export const EXPERIENCE_CONTENT: Experience[] = [
  {
    role: "Senior AI Engineer",
    company: "Nebula AI (Series B)",
    period: "2022 - Present",
    description: "Leading the core inference team. Architected the company's proprietary LLM gateway, handling 5M+ daily requests. Reduced infrastructure costs by 40% through optimized caching strategies."
  },
  {
    role: "Machine Learning Engineer",
    company: "DataFlow Systems",
    period: "2020 - 2022",
    description: "Designed and deployed recommendation engines serving 2M users. Migrated legacy monoliths to microservices-based ML pipelines, improving deployment velocity by 3x."
  },
  {
    role: "AI Researcher",
    company: "Cognitive Labs",
    period: "2018 - 2020",
    description: "Conducted research on NLP efficiency. Published papers on sparse attention mechanisms. Developed prototypes that secured $2M in initial seed funding."
  }
];

export const TESTIMONIALS_CONTENT: Testimonial[] = [
  {
    quote: "Alex possesses the rare ability to translate complex AI concepts into shipping code. The systems architected are robust, scalable, and drove our product to market leader status.",
    author: "Sarah Chen",
    title: "Founder, Nebula AI"
  },
  {
    quote: "Technically brilliant and pragmatically focused. Alex transformed our experimental notebooks into a resilient production environment in record time.",
    author: "Marcus Thorne",
    title: "VP of Engineering, DataFlow"
  },
  {
    quote: "One of the few engineers I've placed who understands both the math behind the models and the infrastructure required to run them at scale. Highly recommended.",
    author: "Jessica Vane",
    title: "Senior Tech Recruiter"
  }
];

export const GEMINI_INTRO = "I am an instance of the Gemini model, fine-tuned on Alex's professional background. I can answer questions about specific projects, architectural decisions, or technical proficiency.";

export const FINAL_CTA = {
  headline: "Ready to Engineer the Future?",
  sub: "Available for technical leadership roles and high-impact consulting engagements.",
  button: "Initiate Collaboration"
};