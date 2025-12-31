
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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', marginTop: 24 }}>
              {/* Left diagonal testimonial */}
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                transform: 'translate(-120%, -50%) rotate(-8deg)',
                background: 'rgba(44,44,44,0.92)',
                color: '#ffd700',
                padding: '18px 32px',
                borderRadius: 16,
                fontStyle: 'italic',
                fontSize: '1.05rem',
                boxShadow: '0 2px 12px #2a1a4d33',
                maxWidth: 260,
                zIndex: 1,
                borderLeft: '4px solid #ffd700',
              }}>
                “AI helped me transition my creative skills into a new career I never imagined.”
                <div style={{ fontWeight: 700, marginTop: 8, fontSize: '0.95rem', color: '#fff8dc' }}>— Taylor, Designer</div>
              </div>
              <blockquote style={{ fontStyle: 'italic', color: '#ffd700', textAlign: 'center', fontSize: '1.1rem', margin: 0 }}>
                "The future belongs to those who create, adapt, and inspire—together with AI."
              </blockquote>
              {/* Right diagonal testimonial */}
              <div style={{
                position: 'absolute',
                right: 0,
                top: 0,
                transform: 'translate(120%, -50%) rotate(8deg)',
                background: 'rgba(44,44,44,0.92)',
                color: '#ffd700',
                padding: '18px 32px',
                borderRadius: 16,
                fontStyle: 'italic',
                fontSize: '1.05rem',
                boxShadow: '0 2px 12px #2a1a4d33',
                maxWidth: 260,
                zIndex: 1,
                borderRight: '4px solid #ffd700',
              }}>
                “Joining the AI Wilding community gave me hope and real opportunities.”
                <div style={{ fontWeight: 700, marginTop: 8, fontSize: '0.95rem', color: '#fff8dc' }}>— Morgan, Writer</div>
              </div>
            </div>


            {/* Gold Tabs: 2 left, 2 right, gold underline */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 64, margin: '32px 0 0 0' }}>
              {/* Left group */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 24 }}>
                  <a href="/states" style={{ background: '#ffd700', color: '#232526', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 18, textDecoration: 'none', boxShadow: '0 2px 8px #ffd70055', cursor: 'pointer' }}>States</a>
                  <a href="/jobs-at-risk" style={{ background: '#ffd700', color: '#232526', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 18, textDecoration: 'none', boxShadow: '0 2px 8px #ffd70055', cursor: 'pointer' }}>Jobs at Risk</a>
                </div>
                <div style={{ height: 4, width: '100%', background: '#ffd700', borderRadius: 2, marginTop: 4 }} />
              </div>
              {/* Right group */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 24 }}>
                  <a href="/transitional-paths" style={{ background: '#ffd700', color: '#232526', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 18, textDecoration: 'none', boxShadow: '0 2px 8px #ffd70055', cursor: 'pointer' }}>Transitional Paths</a>
                  <a href="/new-ai-jobs" style={{ background: '#ffd700', color: '#232526', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: 18, textDecoration: 'none', boxShadow: '0 2px 8px #ffd70055', cursor: 'pointer' }}>New AI Jobs</a>
                </div>
                <div style={{ height: 4, width: '100%', background: '#ffd700', borderRadius: 2, marginTop: 4 }} />
              </div>
            </div>

            {/* AI Wilding Title */}
            <div style={{ marginTop: 40, textAlign: 'center' }}>
              <span style={{ fontSize: '3rem', fontWeight: 900, color: '#ffd700', letterSpacing: 2, textShadow: '0 2px 16px #2a1a4d' }}>
                AI Wilding
              </span>
              <div style={{ marginTop: 24 }}>
                <a href="/ai-hiring-events" style={{
                  display: 'inline-block',
                  background: '#ffd700',
                  color: '#232526',
                  border: 'none',
                  borderRadius: 8,
                  padding: '10px 36px',
                  fontWeight: 700,
                  fontSize: 20,
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px #ffd70055',
                  cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s',
                }}
                  onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = '#C2A86C'; }}
                  onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = '#ffd700'; }}
                >
                  AI Hiring Events
                </a>
              </div>
            </div>
          </div>

      </main>
    </div>
  );
}


