"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

function NewAIJobsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");

  // Fetch jobs from API with search and filters
  const fetchJobs = async (params = {}) => {
    const url = new URL("/api/ai-jobs", window.location.origin);
    if (search) url.searchParams.set("search", search);
    if (industry) url.searchParams.set("industry", industry);
    if (location) url.searchParams.set("location", location);
    const res = await fetch(url.toString());
    const data = await res.json();
    setJobs(data || []);
  };

        useEffect(() => {
          fetchJobs();
          // Real-time subscription
          const channel = supabase
            .channel('realtime:ai_jobs')
            .on(
              'postgres_changes',
              { event: '*', schema: 'public', table: 'ai_jobs' },
              () => fetchJobs()
            )
            .subscribe();
          return () => {
            supabase.removeChannel(channel);
          };
          // eslint-disable-next-line
        }, [search, industry, location]);

        // Unique industries and locations for filter dropdowns
        const industries = Array.from(new Set(jobs.flatMap(j => Array.isArray(j.industries) ? j.industries : (j.industries ? [j.industries] : [])))).filter(Boolean);
        const locations = Array.from(new Set(jobs.map(j => j.location).filter(Boolean)));

        return (
          <main style={{ minHeight: '100vh', background: '#f5f3fd', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
            <section style={{ width: '100%', maxWidth: 700, margin: '3rem auto 2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)', borderRadius: 24, boxShadow: '0 4px 32px #18191a22', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <h1 style={{ color: 'rgba(255,255,255,0.97)', fontSize: '2.2rem', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1.5px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.18, paddingBottom: '0.18em' }}>AI Jobs & Careers</h1>
              <div style={{ color: '#ece9fc', fontSize: '1.15rem', fontWeight: 500, marginTop: 10, textAlign: 'center', maxWidth: 500, textShadow: '0 1px 6px #18191a55' }}>
                Discover emerging jobs and careers created by AI and automation. Each role includes a description, required skills, industries, example employers, and training resources to help you prepare for the future workforce.
              </div>
              <div style={{ marginTop: 24, display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  style={{ padding: 8, borderRadius: 6, border: '1px solid #bba6f7', minWidth: 180 }}
                />
                <select value={industry} onChange={e => setIndustry(e.target.value)} style={{ padding: 8, borderRadius: 6, border: '1px solid #bba6f7' }}>
                  <option value="">All Industries</option>
                  {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                </select>
                <select value={location} onChange={e => setLocation(e.target.value)} style={{ padding: 8, borderRadius: 6, border: '1px solid #bba6f7' }}>
                  <option value="">All Locations</option>
                  {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                </select>
              </div>
            </section>

            <section style={{ background: '#fff', borderRadius: 16, padding: '32px 40px', maxWidth: 900, margin: '0 auto 48px auto', boxShadow: '0 2px 16px #18191a22', color: '#18191a', textAlign: 'center', fontSize: '1.12rem', lineHeight: 1.7, border: '1.5px solid #e0d6f7' }}>
              {jobs.map((job) => (
                <div key={job.id || job.title + (job.updated || '')} style={{ background: '#f5faff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #90caf922', marginBottom: 24 }}>
                  <h2 style={{ color: '#7b2ff2', fontSize: '1.2rem', marginBottom: 6 }}>{job.title}</h2>
                  <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Description:</strong> {job.description}</div>
                  {job.skills && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Required Skills:</strong> {Array.isArray(job.skills) ? job.skills.join(', ') : job.skills}</div>}
                  {job.industries && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Industries:</strong> {Array.isArray(job.industries) ? job.industries.join(', ') : job.industries}</div>}
                  {job.employers && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Example Employers:</strong> {Array.isArray(job.employers) ? job.employers.join(', ') : job.employers}</div>}
                  {job.resources && job.resources.length > 0 && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Training Resources:</strong> {Array.isArray(job.resources) ? job.resources.join(', ') : job.resources}</div>}
                  {job.pay && <div style={{ color: '#7b2ff2', fontSize: '1rem', marginBottom: 4 }}><strong>Typical Pay Range:</strong> {job.pay}</div>}
                  {job.location && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Location:</strong> {job.location}</div>}
                  {job.updated && <div style={{ color: '#18191a', fontSize: '0.98rem', marginBottom: 4 }}><strong>Updated:</strong> {job.updated}</div>}
                </div>
              ))}
            </section>
          </main>
        );
      }

export default NewAIJobsPage;
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


function NewAIJobsPage() {
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

export default NewAIJobsPage;
