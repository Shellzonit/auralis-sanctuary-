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
        background: "#7b2c2c",
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
        border: '3px solid #18191a', // black border
        borderRadius: 24,
        boxSizing: 'border-box',
        color: '#18191a',
        fontSize: '1.25rem',
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: 900, color: "#18191a", margin: "40px 0 18px 0", textShadow: "0 2px 16px #ffd70044", letterSpacing: 1 }}>
        <span style={{ color: '#18191a', borderBottom: '4px solid #18191a', paddingBottom: 4 }}>AI Around the World</span>
      </h1>
      <p style={{ color: '#18191a', fontSize: '1.35rem', maxWidth: 700, textAlign: 'center', marginBottom: 36, lineHeight: 1.6 }}>
        Explore how different countries are leading, adopting, and regulating artificial intelligence. See top industries, events, and AI trends by country.
      </p>
      <div style={{ width: '100%', maxWidth: 820, display: 'flex', flexDirection: 'column', gap: 36, color: '#18191a', fontSize: '1.18rem' }}>
        {COUNTRY_AI_DATA.map((c) => (
          <section
            key={c.country}
            style={{
              background: '#f5faff',
              borderRadius: 16,
              padding: 32,
              boxShadow: '0 4px 18px #ffd70022',
              borderLeft: '8px solid #ffd700',
              transition: 'box-shadow 0.2s, transform 0.2s',
              position: 'relative',
              cursor: 'pointer',
              color: '#18191a',
              fontSize: '1.18rem',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 8px 32px #ffd70055';
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 4px 18px #ffd70022';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <h2 style={{ color: '#18191a', fontSize: '2rem', fontWeight: 900, marginBottom: 10, letterSpacing: 0.5 }}>
              <span style={{ color: '#18191a', fontWeight: 900 }}>{c.country}</span>
              <span style={{ color: '#18191a', fontWeight: 700, fontSize: '1.15rem', marginLeft: 8 }}>(AI Rank #{c.aiRank})</span>
            </h2>
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
            <ul style={{ color: '#18191a', marginBottom: 12, fontSize: '1.08rem', paddingLeft: 18, lineHeight: 1.6 }}>
              {c.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginBottom: 8 }}>
              <div style={{ color: '#ffd700', fontWeight: 700 }}><strong>Key Industries:</strong></div>
              <div style={{ color: '#18191a', fontWeight: 500 }}>{c.industries.join(', ')}</div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18, marginBottom: 8 }}>
              <div style={{ color: '#ffd700', fontWeight: 700 }}><strong>Major Events:</strong></div>
              <div style={{ color: '#18191a', fontWeight: 500 }}>{c.events.join(', ')}</div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18 }}>
              <div style={{ color: '#ffd700', fontWeight: 700 }}><strong>Regulation:</strong></div>
              <div style={{ color: '#18191a', fontWeight: 500 }}>{c.regulation}</div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
