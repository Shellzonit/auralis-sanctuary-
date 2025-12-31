
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

      <main className="flex flex-col items-center justify-center py-20">
        <h1 style={{ marginTop: 32, fontSize: '2.2rem', fontWeight: 800, color: '#C2A86C', textShadow: '0 2px 16px #2a1a4d' }}>
          Sanctuary
        </h1>
        <Image
          src="/openart-image_J9ncrrgy_1766070827956_raw.jpg"
          alt="AI Generated Art"
          width={320}
          height={200}
          style={{ borderRadius: 16, boxShadow: '0 2px 16px #2a1a4d55', margin: '32px 0' }}
        />
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#C2A86C', textShadow: '0 2px 16px #2a1a4d', marginBottom: 0 }}>
          Welcome
        </h2>
        <p style={{ marginTop: 16, fontSize: '1.15rem', maxWidth: 600, textAlign: 'center', color: '#fff8dc' }}>
          Explore transitional paths, discover new AI jobs, and protect creative legacy.
        </p>

        <section style={{ marginTop: 48, width: '100%', maxWidth: 600, background: '#18191aee', borderRadius: 16, boxShadow: '0 2px 16px #2a1a4d55', padding: 24 }}>
          <h3 style={{ color: '#ffd700', fontWeight: 700, fontSize: 22, marginBottom: 16 }}>General Discussion Board</h3>
          <ThreadedChat />
        </section>
      </main>
    </div>;
}


