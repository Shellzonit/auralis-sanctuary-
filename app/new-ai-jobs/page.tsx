"use client";
import React from "react";

export const NEW_AI_JOBS = [
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

export default function NewAIJobsPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f5f3fd', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
      <section style={{ width: '100%', maxWidth: 700, margin: '3rem auto 2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)', borderRadius: 24, boxShadow: '0 4px 32px #18191a22', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <h1 style={{ color: 'rgba(255,255,255,0.97)', fontSize: '2.2rem', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1.5px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.18, paddingBottom: '0.18em' }}>AI Jobs & Careers</h1>
        <div style={{ color: '#ece9fc', fontSize: '1.15rem', fontWeight: 500, marginTop: 10, textAlign: 'center', maxWidth: 500, textShadow: '0 1px 6px #18191a55' }}>
          Discover emerging jobs and careers created by AI and automation. Each role includes a description, required skills, industries, example employers, and training resources to help you prepare for the future workforce.
        </div>
      </section>
      <section style={{ background: '#fff', borderRadius: 16, padding: '32px 40px', maxWidth: 900, margin: '0 auto 48px auto', boxShadow: '0 2px 16px #18191a22', color: '#18191a', textAlign: 'center', fontSize: '1.12rem', lineHeight: 1.7, border: '1.5px solid #e0d6f7' }}>
        {NEW_AI_JOBS.map((job) => (
          <div key={job.title} style={{ background: '#f5faff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #90caf922', marginBottom: 24 }}>
            <h2 style={{ color: '#7b2ff2', fontSize: '1.2rem', marginBottom: 6 }}>{job.title}</h2>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Description:</strong> {job.description}</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Required Skills:</strong> {job.skills.join(', ')}</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Industries:</strong> {job.industries.join(', ')}</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Example Employers:</strong> {job.employers.join(', ')}</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Training Resources:</strong> {job.resources.join(', ')}</div>
            <div style={{ color: '#7b2ff2', fontSize: '1rem', marginBottom: 4 }}><strong>Typical Pay Range:</strong> {job.pay}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
