import { NextResponse } from 'next/server';

// Individual AI job listings (copied from NEW_AI_JOBS)
const aiJobs = [
  {
    title: "AI Engineer – Voice",
    description: "Design and deploy voice‑driven AI systems. Scale conversational AI across thousands of interactions. Work on production‑level voice models.",
    skills: ["Voice AI", "Conversational AI", "Production Systems"],
    industries: ["Tech", "AI"],
    employers: ["HartleyCo"],
    resources: [],
    pay: "Contact for details",
    location: "Texas (Onsite)",
    updated: "Dec 25, 2025"
  },
  {
    title: "AI/ML Engineer",
    description: "Build ML pipelines end‑to‑end. Work with unstructured data. Architect model‑serving infrastructure. Fast‑paced, research‑to‑production environment.",
    skills: ["ML Pipelines", "Unstructured Data", "Model Serving", "Research"],
    industries: ["Tech", "AI"],
    employers: ["Evolution USA"],
    resources: [],
    pay: "Contact for details",
    location: "Texas (Onsite)",
    updated: "Dec 26, 2025"
  },
  {
    title: "AI Platform Engineer",
    description: "Build high‑performance AI agent systems. Develop evaluation frameworks. Architect ML models and growth‑focused tools.",
    skills: ["AI Agent Systems", "Evaluation Frameworks", "ML Models"],
    industries: ["Tech", "AI"],
    employers: ["HartleyCo"],
    resources: [],
    pay: "Contact for details",
    location: "Texas (Onsite)",
    updated: "Dec 26, 2025"
  },
  {
    title: "Senior AI Research Engineer",
    description: "Enhance conversational AI for commerce. Work with cutting‑edge experimentation methods. Join a world‑class research team.",
    skills: ["Conversational AI", "Experimentation", "Research"],
    industries: ["Tech", "AI"],
    employers: ["Deep Abacus"],
    resources: [],
    pay: "Contact for details",
    location: "Texas (Onsite)",
    updated: "Jan 2, 2026"
  },
  {
    title: "Senior AI Engineer",
    description: "Lead applied research. Build video search & retrieval AI. Senior‑level production engineering.",
    skills: ["Applied Research", "Video Search", "Production Engineering"],
    industries: ["Tech", "AI"],
    employers: ["Harrison Clarke"],
    resources: [],
    pay: "Contact for details",
    location: "Texas (Onsite)",
    updated: "Dec 26, 2025"
  },
  {
    title: "AI / ML Engineer — Agentic AI Systems",
    description: "Build agentic AI systems, optimize LLMs, and work with Python + PyTorch/TensorFlow.",
    skills: ["Python", "PyTorch", "TensorFlow", "LLM Optimization"],
    industries: ["Tech", "AI Research"],
    employers: ["Experis"],
    resources: ["LLM Tuning Bootcamp", "PyTorch Tutorials"],
    pay: "$120,000 - $180,000/year"
  },
  {
    title: "Senior AI Research Engineer",
    description: "Conversational AI research, experimentation, and model evaluation.",
    skills: ["Conversational AI", "Experimentation", "Model Evaluation"],
    industries: ["Tech", "AI Research"],
    employers: ["Deep Abacus"],
    resources: ["AI Research Methods", "Model Evaluation Guide"],
    pay: "$140,000 - $200,000/year"
  },
  {
    title: "AI/ML Engineer — Knowledge Systems",
    description: "Build ML pipelines, data ingestion, and privacy‑focused model deployment.",
    skills: ["ML Pipelines", "Data Ingestion", "Privacy"],
    industries: ["Tech", "Healthcare"],
    employers: ["Evolution USA"],
    resources: ["ML Pipeline Course", "Privacy in AI"],
    pay: "$110,000 - $170,000/year"
  },
  {
    title: "Head of AI — Autonomous Agents",
    description: "Lead AI strategy and oversee agentic architectures.",
    skills: ["AI Strategy", "Agentic Architectures", "Leadership"],
    industries: ["Tech", "AI Research"],
    employers: ["DeepRec"],
    resources: ["AI Leadership Program", "Agentic Systems Workshop"],
    pay: "$180,000 - $250,000/year"
  },
  {
    title: "AI Engineer — Computer‑Use Agents",
    description: "Tune LLMs and build agents that navigate real software environments.",
    skills: ["LLM Tuning", "Agent Development", "Software Navigation"],
    industries: ["Tech", "Software"],
    employers: ["Edward Mann"],
    resources: ["LLM Tuning Bootcamp", "Agent Development Course"],
    pay: "$115,000 - $175,000/year"
  }
];

export async function GET() {
  return NextResponse.json(aiJobs);
}
