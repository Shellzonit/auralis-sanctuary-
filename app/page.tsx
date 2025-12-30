"use client";

import Link from "next/link";

export default function HomePage() {
        const tabStyle = {
          color: '#ffd700',
          fontWeight: 700,
          fontSize: '1.15rem',
          textDecoration: 'none',
          padding: '8px 18px',
          borderRadius: 8,
          background: 'rgba(106,27,154,0.10)', // purple tint
          boxShadow: '0 2px 8px #6a1b9a22',
          transition: 'background 0.2s',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          letterSpacing: '.04em',
          margin: 0,
          display: 'inline-block',
        };
    // Removed tabStyle and tab navigation for a cleaner homepage
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a1b9a 0%, #ffd700 100%)", // purple to gold
        color: "#ffd700",
        fontFamily: "Playfair Display, Georgia, serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      {/* Large Site Name */}
      <h1
        style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: '4rem',
          fontWeight: 900,
          color: '#ffd700',
          margin: '48px 0 24px 0',
          textShadow: '0 2px 24px #b71c1c',
          letterSpacing: 2,
          textAlign: 'center',
        }}
      >
        AI Wilding
      </h1>

      {/* Tab Navigation */}
      <nav
        style={{
          display: 'flex',
          gap: 24,
          background: 'rgba(106,27,154,0.85)', // purple
          borderRadius: 16,
          padding: '12px 32px',
          marginBottom: 48,
          boxShadow: '0 4px 24px #6a1b9a55',
        }}
      >
        <Link href="/" style={tabStyle}>Home</Link>
        <Link href="/states" style={tabStyle}>States</Link>
        <Link href="/jobs-at-risk" style={tabStyle}>Jobs at Risk</Link>
        <Link href="/transitional-paths" style={tabStyle}>Transitional Paths</Link>
        <Link href="/new-ai-jobs" style={tabStyle}>New AI Jobs</Link>
        <Link href="/training" style={tabStyle}>Training Hub</Link>
        <Link href="/recovery" style={tabStyle}>Recovery Hub</Link>
        <Link href="/about" style={tabStyle}>About</Link>
        <Link href="/contact" style={tabStyle}>Contact</Link>
      </nav>

      {/* Sophisticated Welcome Section */}
      <section
        style={{
          background: 'rgba(106,27,154,0.10)', // purple tint
          borderRadius: 18,
          padding: '32px 40px',
          maxWidth: 700,
          boxShadow: '0 2px 24px #6a1b9a33',
          color: '#6a1b9a',
          fontSize: 22,
          fontFamily: 'Playfair Display, Georgia, serif',
          textAlign: 'center',
        }}
      >
        Welcome to <span style={{ color: '#ffd700', fontWeight: 700 }}>AI Wilding</span>, your sophisticated atlas for navigating the future of work and AI-driven transitions. Explore states, discover jobs at risk, and find new opportunities with style and clarity.
      </section>
      {/* Chat Preview */}
      <div style={{ width: "100%", maxWidth: 420, background: "#23242b", border: "1px solid #31323a", borderRadius: 16, padding: 20, boxShadow: "0 2px 16px #0004", textAlign: "left", marginTop: 12 }}>
        <div style={{ fontWeight: 700, fontSize: 15, color: "#ffe082", marginBottom: 10 }}>Chat Preview</div>
        <div style={{ fontSize: 17, color: "#f7fafc", marginBottom: 6 }}>
          Welcome to the Sanctuary! This is a sample chat message.
        </div>
        <div style={{ fontSize: 13, color: "#ffe082bb" }}>by Guest</div>
      </div>
    </main>
  );
}
