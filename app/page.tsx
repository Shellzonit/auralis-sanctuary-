
'use client';


import Image from 'next/image';
import { useEffect, useState } from 'react';


const tabs = [
  { href: '/', label: 'Home' },
  { href: '/states', label: 'States' },
  { href: '/jobs-at-risk', label: 'Jobs at Risk' },
  { href: '/transitional-paths', label: 'Transitional Paths' },
  { href: '/new-ai-jobs', label: 'New AI Jobs' },
];

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a141a 0%, #18191a 60%, #2a1a4d 100%)",
        color: "#fff8dc",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >


      <main style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '48px 0', minHeight: '80vh', boxSizing: 'border-box' }}>
        {/* Left column: Welcome, description, image */}
          <div style={{ flex: '0 0 420px', maxWidth: 420, display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(24,25,26,0.95)', borderRadius: 18, boxShadow: '0 2px 16px #2a1a4d33', padding: 32, marginRight: 40 }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#C2A86C', textShadow: '0 2px 16px #2a1a4d', marginBottom: 12, textAlign: 'center' }}>
              Welcome
            </h2>
            <p style={{ marginTop: 0, fontSize: '1.15rem', maxWidth: 360, textAlign: 'center', color: '#fff8dc', marginBottom: 24 }}>
              Explore transitional paths, discover new AI jobs, and protect creative legacy.
            </p>
            <blockquote style={{ fontStyle: 'italic', color: '#ffd700', marginTop: 24, textAlign: 'center', fontSize: '1.1rem' }}>
              "The future belongs to those who create, adapt, and inspire—together with AI."
            </blockquote>

            {/* Gold Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 32, margin: '32px 0 0 0' }}>
              <button style={{ background: '#ffd700', color: '#232526', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 18, boxShadow: '0 2px 8px #ffd70055', cursor: 'pointer' }}>Overview</button>
              <button style={{ background: '#ffd700', color: '#232526', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 18, boxShadow: '0 2px 8px #ffd70055', cursor: 'pointer' }}>Resources</button>
              <button style={{ background: '#ffd700', color: '#232526', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 18, boxShadow: '0 2px 8px #ffd70055', cursor: 'pointer' }}>Community</button>
            </div>

            {/* AI Wilding Title */}
            <div style={{ marginTop: 40, textAlign: 'center' }}>
              <span style={{ fontSize: '3rem', fontWeight: 900, color: '#ffd700', letterSpacing: 2, textShadow: '0 2px 16px #2a1a4d' }}>
                AI Wilding
              </span>
            </div>
          </div>

      </main>
    </div>
  );
}


