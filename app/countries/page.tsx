"use client";

import React from "react";

const COUNTRY_AI_DATA = [
  {
    country: "United States",
    aiRank: 1,
    highlights: [
      "Home to top AI companies (OpenAI, Google, Microsoft, NVIDIA)",
      "Major government AI investments and research grants",
      "Leading AI research universities (MIT, Stanford, CMU)"
    ],
    industries: ["Tech", "Healthcare", "Finance", "Automotive"],
    events: ["NeurIPS", "AAAI", "CVPR"],
    regulation: "Active discussions on AI ethics, privacy, and regulation."
  },
  {
    country: "China",
    aiRank: 2,
    highlights: [
      "Rapid AI adoption in industry and government",
      "Major investments in AI startups and infrastructure",
      "Leaders in computer vision and facial recognition"
    ],
    industries: ["Manufacturing", "E-commerce", "Surveillance", "Robotics"],
    events: ["World AI Conference (WAIC)", "China AI Expo"],
    regulation: "Strong government oversight and national AI strategy."
  },
  {
    country: "United Kingdom",
    aiRank: 3,
    highlights: [
      "AI research hubs in London, Cambridge, and Edinburgh",
      "Growing AI startup ecosystem",
      "Government AI policy and funding initiatives"
    ],
    industries: ["Finance", "Healthcare", "Legal Tech"],
    events: ["CogX", "AI Summit London"],
    regulation: "GDPR and active AI ethics research."
  },
  {
    country: "Canada",
    aiRank: 4,
    highlights: [
      "World-class AI research (Toronto, Montreal)",
      "Supportive immigration for AI talent",
      "Strong public-private AI partnerships"
    ],
    industries: ["Healthcare", "Autonomous Vehicles", "Natural Language Processing"],
    events: ["AI Toronto", "Montreal AI Symposium"],
    regulation: "Focus on responsible AI and data privacy."
  },
  {
    country: "India",
    aiRank: 5,
    highlights: [
      "Rapidly growing AI workforce",
      "Government AI for All initiative",
      "Major outsourcing and IT services in AI"
    ],
    industries: ["IT Services", "Healthcare", "Agriculture"],
    events: ["RAI Conference", "India AI Summit"],
    regulation: "Draft AI policy and data protection bill."
  }
];

export default function CountriesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff",
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#18191a", margin: "32px 0 16px 0", textShadow: "0 2px 16px #ffd70044" }}>
        <span style={{ color: '#ffd700' }}>AI Around the World</span>
      </h1>
      <p style={{ color: '#18191a', fontSize: '1.15rem', maxWidth: 700, textAlign: 'center', marginBottom: 32 }}>
        Explore how different countries are leading, adopting, and regulating artificial intelligence. See top industries, events, and AI trends by country.
      </p>
      <div style={{ width: '100%', maxWidth: 800, display: 'flex', flexDirection: 'column', gap: 32 }}>
        {COUNTRY_AI_DATA.map((c) => (
          <section key={c.country} style={{ background: '#f5faff', borderRadius: 14, padding: 24, boxShadow: '0 2px 12px #90caf922' }}>
            <h2 style={{ color: '#ffd700', fontSize: '1.3rem', marginBottom: 8 }}>{c.country} <span style={{ color: '#18191a', fontWeight: 400, fontSize: '1rem' }}>(AI Rank #{c.aiRank})</span></h2>
            {/* Country Images */}
            {c.country === 'Japan' && (
              <img src="/japan.png" alt="Japan AI" width={180} height={110} style={{ borderRadius: 12, marginBottom: 12, boxShadow: '0 2px 8px #18191a22', border: '2px solid #ffd700', background: '#fff' }} />
            )}
            {c.country === 'China' && (
              <img src="/china.png" alt="China AI" width={180} height={110} style={{ borderRadius: 12, marginBottom: 12, boxShadow: '0 2px 8px #18191a22', border: '2px solid #ffd700', background: '#fff' }} />
            )}
            {c.country === 'United Kingdom' && (
              <img src="/uk.png" alt="UK AI" width={180} height={110} style={{ borderRadius: 12, marginBottom: 12, boxShadow: '0 2px 8px #18191a22', border: '2px solid #ffd700', background: '#fff' }} />
            )}
            <ul style={{ color: '#18191a', marginBottom: 8 }}>
              {c.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
            <div style={{ color: '#ffd700', marginBottom: 4 }}><strong>Key Industries:</strong> <span style={{ color: '#18191a' }}>{c.industries.join(', ')}</span></div>
            <div style={{ color: '#ffd700', marginBottom: 4 }}><strong>Major Events:</strong> <span style={{ color: '#18191a' }}>{c.events.join(', ')}</span></div>
            <div style={{ color: '#ffd700' }}><strong>Regulation:</strong> <span style={{ color: '#18191a' }}>{c.regulation}</span></div>
          </section>
        ))}
      </div>
    </main>
  );
}
