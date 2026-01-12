"use client";
import React from "react";

export const NEW_AI_JOBS = [
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

  // Example list of companies mass hiring (update as needed)
  const MASS_HIRING_COMPANIES = [
    {
      name: "Amazon",
      openRoles: "11,000+ open roles",
      category: "Tech, logistics, cloud",
      why: "Amazon remains the #1 most active employer on Jobright’s national hiring index.",
      roles: [
        "Software engineers",
        "Data/AI roles",
        "Warehouse & logistics",
        "AWS cloud engineers"
      ]
    },
    {
      name: "PwC",
      openRoles: "Thousands of openings",
      category: "Consulting, finance, tech",
      why: "Listed as one of the most active employers in 2025.",
      roles: [
        "AI strategy",
        "Data analytics",
        "Cybersecurity",
        "Consulting"
      ]
    },
    {
      name: "AutoZone",
      openRoles: "High‑volume hiring",
      category: "Retail, logistics",
      why: "Ranked among the top 14 most active employers in the U.S. right now.",
      roles: [
        "Store associates",
        "Distribution center workers",
        "Corporate tech roles"
      ]
    },
    {
      name: "KPMG US",
      openRoles: "Large hiring wave",
      category: "Consulting, finance, tech",
      why: "Also listed as a top active employer in 2025.",
      roles: [
        "AI/ML analysts",
        "Auditors",
        "Data engineers",
        "Consultants"
      ]
    },
    {
      name: "Microsoft",
      openRoles: "“Massive scale” hiring in cloud + AI",
      category: "Tech",
      why: "Microsoft is highlighted as a top U.S. tech giant dominating hiring in 2025.",
      roles: [
        "AI engineers",
        "Azure cloud roles",
        "Research engineers",
        "Product managers"
      ]
    },
    {
      name: "Google (Alphabet)",
      openRoles: "AI & search expansion",
      category: "Tech",
      why: "Google is listed among the top companies hiring heavily in AI and information systems.",
      roles: [
        "AI researchers",
        "ML engineers",
        "Data scientists"
      ]
    },
    {
      name: "Nvidia",
      openRoles: "AI chip boom = nonstop hiring",
      category: "AI hardware",
      why: "Nvidia is described as “ruling the AI era” and aggressively hiring in 2025.",
      roles: [
        "AI infrastructure",
        "GPU engineering",
        "Research"
      ]
    },
    {
      name: "Tesla",
      openRoles: "High‑volume technical hiring",
      category: "Automotive + AI",
      why: "Tesla is expanding its tech ecosystem and hiring across engineering and manufacturing.",
      roles: [
        "Robotics",
        "AI/Autopilot",
        "Manufacturing tech"
      ]
    }
  ];

  return (
    <main style={{ minHeight: '100vh', background: '#f5f3fd', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
      <section style={{ width: '100%', maxWidth: 700, margin: '3rem auto 2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)', borderRadius: 24, boxShadow: '0 4px 32px #18191a22', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <h1 style={{ color: 'rgba(255,255,255,0.97)', fontSize: '2.2rem', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1.5px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.18, paddingBottom: '0.18em' }}>AI Jobs & Careers</h1>
        <div style={{ color: '#ece9fc', fontSize: '1.15rem', fontWeight: 500, marginTop: 10, textAlign: 'center', maxWidth: 500, textShadow: '0 1px 6px #18191a55' }}>
          Discover emerging jobs and careers created by AI and automation. Each role includes a description, required skills, industries, example employers, and training resources to help you prepare for the future workforce.
        </div>
      </section>
      {/* Mass Hiring Companies Section */}
      <section style={{ background: '#fff', borderRadius: 16, padding: '24px 32px', maxWidth: 700, margin: '0 auto 32px auto', boxShadow: '0 2px 12px #7b2ff244', color: '#18191a', textAlign: 'center', fontSize: '1.08rem', lineHeight: 1.6, border: '1.5px solid #e0d6f7' }}>
        <strong style={{ color: '#7b2ff2', fontSize: '1.15rem' }}>🌿 Companies Actively Doing Mass Hiring (U.S., 2025–2026)</strong>
        <ul style={{ margin: '16px 0 0 0', padding: 0, listStyle: 'none', textAlign: 'left' }}>
          {MASS_HIRING_COMPANIES.map((company, idx) => (
            <li key={company.name} style={{ marginBottom: 18, paddingBottom: 10, borderBottom: '1px solid #ece9fc' }}>
              <div style={{ fontWeight: 700, color: '#7b2ff2', fontSize: '1.08rem' }}>⭐ {idx + 1}. {company.name} <span style={{ color: '#888', fontWeight: 400, fontSize: '0.98rem' }}>— {company.openRoles}</span></div>
              <div style={{ color: '#444', fontWeight: 500, marginBottom: 2 }}>Category: <span style={{ fontWeight: 400 }}>{company.category}</span></div>
              <div style={{ color: '#18191a', fontSize: '0.98rem', marginBottom: 2 }}><strong>Why hiring:</strong> {company.why}</div>
              <div style={{ color: '#18191a', fontSize: '0.98rem', marginBottom: 2 }}><strong>Roles:</strong>
                <ul style={{ margin: '4px 0 0 18px', padding: 0, listStyle: 'disc' }}>
                  {company.roles.map((role) => (
                    <li key={role} style={{ marginBottom: 0 }}>{role}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section style={{ background: '#fff', borderRadius: 16, padding: '32px 40px', maxWidth: 900, margin: '0 auto 48px auto', boxShadow: '0 2px 16px #18191a22', color: '#18191a', textAlign: 'center', fontSize: '1.12rem', lineHeight: 1.7, border: '1.5px solid #e0d6f7' }}>
        {NEW_AI_JOBS.map((job) => (
          <div key={job.title + (job.updated || '')} style={{ background: '#f5faff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #90caf922', marginBottom: 24 }}>
            <h2 style={{ color: '#7b2ff2', fontSize: '1.2rem', marginBottom: 6 }}>{job.title}</h2>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Description:</strong> {job.description}</div>
            {job.skills && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Required Skills:</strong> {job.skills.join(', ')}</div>}
            {job.industries && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Industries:</strong> {job.industries.join(', ')}</div>}
            {job.employers && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Example Employers:</strong> {job.employers.join(', ')}</div>}
            {job.resources && job.resources.length > 0 && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Training Resources:</strong> {job.resources.join(', ')}</div>}
            {job.pay && <div style={{ color: '#7b2ff2', fontSize: '1rem', marginBottom: 4 }}><strong>Typical Pay Range:</strong> {job.pay}</div>}
            {job.location && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Location:</strong> {job.location}</div>}
            {job.updated && <div style={{ color: '#18191a', fontSize: '0.98rem', marginBottom: 4 }}><strong>Updated:</strong> {job.updated}</div>}
          </div>
        ))}
      </section>
    </main>
  );
}
