
'use client';


import Image from 'next/image';
import { useEffect, useState } from 'react';
import ThreadedChat from '../components/ThreadedChat';

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
      <header style={{ borderBottom: '1px solid #232526', padding: '20px 0' }}>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: 48, fontSize: 22, fontWeight: 500 }}>
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              style={{ color: '#ffd700', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = '#C2A86C')}
              onMouseOut={e => (e.currentTarget.style.color = '#ffd700')}
            >
              {tab.label}
            </a>
          ))}
        </nav>
      </header>

      <main style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '48px 0', minHeight: '80vh', boxSizing: 'border-box' }}>
        {/* Left column: Welcome, description, image */}
        <div style={{ flex: '0 0 420px', maxWidth: 420, display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(24,25,26,0.95)', borderRadius: 18, boxShadow: '0 2px 16px #2a1a4d33', padding: 32, marginRight: 40 }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#C2A86C', textShadow: '0 2px 16px #2a1a4d', marginBottom: 12, textAlign: 'center' }}>
            Welcome
          </h2>
          <p style={{ marginTop: 0, fontSize: '1.15rem', maxWidth: 360, textAlign: 'center', color: '#fff8dc', marginBottom: 24 }}>
            Explore transitional paths, discover new AI jobs, and protect creative legacy.
          </p>
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="AI Art - Unsplash"
            width={320}
            height={200}
            style={{ borderRadius: 16, boxShadow: '0 2px 16px #2a1a4d55', margin: '0 0 0 0' }}
          />
        </div>
        {/* Right column: General Discussion Board */}
        <section style={{ flex: '1 1 400px', minWidth: 340, maxWidth: 600, background: '#18191aee', borderRadius: 16, boxShadow: '0 2px 16px #2a1a4d55', padding: 32, marginLeft: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h3 style={{ color: '#ffd700', fontWeight: 700, fontSize: 22, marginBottom: 16 }}>General Discussion Board</h3>
          <ThreadedChat />
        </section>
      </main>
    </div>
  );
}


