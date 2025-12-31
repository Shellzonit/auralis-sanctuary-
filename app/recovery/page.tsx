"use client";

import React from "react";

const STORIES = [
  {
    title: "From Retail to Robotics: Maria’s Journey",
    text: "After her retail job was automated, Maria took a free online AI course and landed a role as a robotics technician. She now helps program warehouse robots and mentors others making the transition.",
    before: "Retail cashier, worried about automation",
    after: "Robotics technician, thriving in tech"
  },
  {
    title: "AI in Healthcare: Saving Lives and Creating Jobs",
    text: "Hospitals in India adopted AI-powered diagnostic tools, improving patient outcomes and creating new jobs for AI health data specialists and trainers.",
    before: "Manual diagnostics, long wait times",
    after: "Faster, more accurate care and new tech jobs"
  },
  {
    title: "Community Uplift: AI for Accessibility",
    text: "A local nonprofit used AI to build a voice assistant for seniors, helping hundreds stay connected and independent. Volunteers learned new tech skills in the process.",
    before: "Seniors isolated, limited tech access",
    after: "Greater independence and digital inclusion"
  },
  {
    title: "From Factory to Data Analyst: John’s Story",
    text: "John’s manufacturing job was replaced by automation. He joined a government retraining program, learned Python, and now works as a data analyst for a logistics company.",
    before: "Factory worker, uncertain future",
    after: "Data analyst, new career in AI logistics"
  }
];

const RESOURCES = [
  { name: "AI Reskilling Programs (Coursera)", url: "https://www.coursera.org/collections/ai-reskilling" },
  { name: "Workforce Retraining (edX)", url: "https://www.edx.org/learn/retraining" },
  { name: "Mental Health Support (Mental Health America)", url: "https://mhanational.org/" },
  { name: "AI for Good (UN)", url: "https://aiforgood.itu.int/" }
];

export default function RecoveryHubPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a141a 0%, #18191a 60%, #2a1a4d 100%)",
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffd700", margin: "32px 0 16px 0", textShadow: "0 2px 16px #2a1a4d" }}>
        Recovery Hub: Success Stories & New Beginnings
      </h1>
      <p style={{ color: '#fff8dc', fontSize: '1.15rem', maxWidth: 700, textAlign: 'center', marginBottom: 32 }}>
        Discover real stories of people and communities who have thrived through change, and see how AI is creating new opportunities. Find resources for retraining, support, and inspiration.
      </p>
      <section style={{ width: '100%', maxWidth: 800, display: 'flex', flexDirection: 'column', gap: 32 }}>
        {STORIES.map((s, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px #6a1b9a22' }}>
            <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 8 }}>{s.title}</h2>
            <div style={{ color: '#fff8dc', marginBottom: 8 }}>{s.text}</div>
            <div style={{ color: '#ffd700', fontSize: '1rem' }}><strong>Before:</strong> <span style={{ color: '#fff8dc' }}>{s.before}</span></div>
            <div style={{ color: '#ffd700', fontSize: '1rem' }}><strong>After:</strong> <span style={{ color: '#fff8dc' }}>{s.after}</span></div>
          </div>
        ))}
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 14, padding: 24 }}>
          <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 8 }}>Resources for Resilience</h2>
          <ul style={{ color: '#fff8dc' }}>
            {RESOURCES.map(r => <li key={r.name}><a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700', fontWeight: 600 }}>{r.name}</a></li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
