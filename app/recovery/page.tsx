"use client";

import React from "react";
import NavTabs from "../../components/NavTabs";

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

export default function RecoveryPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f5f3fd', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
      {/* Removed NavTabs for a cleaner look. Add a calming image below. */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '1.5rem 0' }}>
        <img 
          src="/recovery-hub-calm.jpg" 
          alt="Calm landscape for recovery hub" 
          style={{
            maxWidth: 420,
            width: '100%',
            borderRadius: 18,
            boxShadow: '0 2px 24px #7b2ff222',
            objectFit: 'cover',
            minHeight: 120,
            background: '#e0d6f7',
          }}
        />
      </div>
      <section style={{ width: '100%', maxWidth: 900, margin: '2.5rem auto 2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)', borderRadius: 28, boxShadow: '0 4px 32px #18191a22', padding: '2.5rem 0 2.5rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <h1 style={{ color: 'rgba(255,255,255,0.97)', fontSize: 'clamp(2.8rem, 7vw, 4.5rem)', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1.5px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', maskImage: 'linear-gradient(to bottom, #fff 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, #fff 80%, transparent 100%)', lineHeight: 1.18, paddingBottom: '0.18em' }}>Recovery Hub</h1>
        <div style={{ color: '#ece9fc', fontSize: '1.25rem', fontWeight: 500, marginTop: 12, textAlign: 'center', maxWidth: 600, textShadow: '0 1px 6px #18191a55' }}>
          Discover real stories of people and communities who have thrived through change, and see how AI is creating new opportunities. Find resources for retraining, support, and inspiration.
        </div>
      </section>
      <section style={{ background: '#fff', borderRadius: 16, padding: '32px 40px', maxWidth: 600, margin: '0 auto 48px auto', boxShadow: '0 2px 16px #18191a22', color: '#18191a', textAlign: 'center', fontSize: '1.12rem', lineHeight: 1.7, border: '1.5px solid #e0d6f7' }}>
        <div style={{ marginBottom: 18 }}>
          <strong style={{ color: '#7b2ff2', fontSize: '1.15rem' }}>Success Stories & New Beginnings</strong>
        </div>
        {STORIES.map((s, i) => (
          <div key={i} style={{ background: '#f5faff', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px #90caf922', marginBottom: 18 }}>
            <h2 style={{ color: '#7b9fff', fontSize: '1.2rem', marginBottom: 8 }}>{s.title}</h2>
            <div style={{ color: '#18191a', marginBottom: 8 }}>{s.text}</div>
            <div style={{ color: '#7b9fff', fontSize: '1rem' }}><strong>Before:</strong> <span style={{ color: '#18191a' }}>{s.before}</span></div>
            <div style={{ color: '#7b9fff', fontSize: '1rem' }}><strong>After:</strong> <span style={{ color: '#18191a' }}>{s.after}</span></div>
          </div>
        ))}
        <div style={{ background: '#f5faff', borderRadius: 14, padding: 24, marginTop: 18 }}>
          <h2 style={{ color: '#7b9fff', fontSize: '1.2rem', marginBottom: 8 }}>Resources for Resilience</h2>
          <ul style={{ color: '#18191a' }}>
            {RESOURCES.map(r => <li key={r.name}><a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: '#7b9fff', fontWeight: 600 }}>{r.name}</a></li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}
