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
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a141a 0%, #18191a 60%, #2a1a4d 100%)",
        fontFamily: "Playfair Display, Georgia, serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <h1
        style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: '3.5rem',
          fontWeight: 900,
          color: '#ffd700',
          margin: '48px 0 24px 0',
          textShadow: '0 2px 24px #6a1b9a',
          letterSpacing: 2,
          textAlign: 'center',
        }}
      >
        AI Wilding
      </h1>
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
        <a href="/" style={tabStyle}>Home</a>
        <a href="/states" style={tabStyle}>States</a>
        <a href="/countries" style={tabStyle}>Countries</a>
        <a href="/jobs-at-risk" style={tabStyle}>Jobs at Risk</a>
        <a href="/transitional-paths" style={tabStyle}>Transitional Paths</a>
        <a href="/new-ai-jobs" style={tabStyle}>New AI Jobs</a>
        <a href="/training" style={tabStyle}>Training Hub</a>
        <a href="/recovery" style={tabStyle}>Recovery Hub</a>
        <a href="/about" style={tabStyle}>About</a>
        <a href="/contact" style={tabStyle}>Contact</a>
      </nav>
      <section style={{
        background: 'rgba(34,34,48,0.93)',
        borderRadius: 16,
        padding: '24px 32px',
        maxWidth: 600,
        margin: '48px auto 48px auto',
        boxShadow: '0 2px 16px #6a1b9a44',
        color: '#ffd700',
        textAlign: 'center',
        fontSize: '1.15rem',
        lineHeight: 1.7,
      }}>
        <strong style={{ color: '#ffd700', fontSize: '1.2rem' }}>Meet Mr. Job Nanny!</strong>
        <br />
        <span role="img" aria-label="nanny">🧑‍🦳</span> Mr. Job Nanny is your private AI career assistant. He can answer your questions about AI jobs, qualifications, pay, and career paths; suggest jobs based on your interests; help you write a resume securely in-app; and offer tips for interviews and career growth. All conversations and resume writing are private—your data is never shared.
        <br /><br />
        <Link href="/chatbot-demo" style={{ color: '#6a1b9a', fontWeight: 700, textDecoration: 'underline', fontSize: '1.1rem' }}>Chat with Mr. Job Nanny</Link>
      </section>
    </main>
  );
}
