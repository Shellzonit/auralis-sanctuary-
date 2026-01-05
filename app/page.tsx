"use client";

import Link from "next/link";

// Import Next.js Image component
import Image from "next/image";

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
        background: "#7b2c2c", // dark red, almost brown
        fontFamily: "Playfair Display, Georgia, serif",
        color: "#0a2342", // dark blue font
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
        border: '3px solid #18191a', // black border
        borderRadius: 24,
        boxSizing: 'border-box',
      }}
    >
      {/* Homepage Icon */}
      <h1
        style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: '4.5rem',
          fontWeight: 900,
          margin: '56px 0 32px 0',
          letterSpacing: 3,
          textAlign: 'center',
          background: 'linear-gradient(90deg, #ffd700 20%, #fffbe7 60%, #b8860b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 4px 32px #ffd70066, 0 2px 24px #7b2c2c88',
          filter: 'drop-shadow(0 2px 8px #18191a44)',
        }}
      >
        <span style={{ fontWeight: 900, letterSpacing: 4 }}>AI Wilding</span>
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, marginBottom: 32 }}>
        {/* Left tabs */}
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          background: '#18191a',
          borderRadius: 16,
          padding: '36px 18px',
          boxShadow: '0 4px 24px #0002',
          minWidth: 200,
          minHeight: '340px',
          justifyContent: 'space-between',
        }}>
          <a href="/" style={tabStyle}>Home</a>
          <a href="/states" style={tabStyle}>States</a>
          <a href="/countries" style={tabStyle}>Countries</a>
          <a href="/jobs-at-risk" style={tabStyle}>Jobs at Risk</a>
          <a href="/transitional-paths" style={tabStyle}>Transitional Paths</a>
        </nav>
        {/* Center images removed as requested */}
        {/* Right tabs */}
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          background: '#18191a',
          borderRadius: 16,
          padding: '36px 18px',
          boxShadow: '0 4px 24px #0002',
          minWidth: 200,
          minHeight: '340px',
          justifyContent: 'space-between',
        }}>
          <a href="/new-ai-jobs" style={tabStyle}>New AI Jobs</a>
          <a href="/training" style={tabStyle}>Training Hub</a>
          <a href="/recovery" style={tabStyle}>Recovery Hub</a>
          <a href="/about" style={tabStyle}>About</a>
          <a href="/contact" style={tabStyle}>Contact</a>
        </nav>
      </div>
      {/* Education Image */}
      <div style={{ margin: '24px 0 0 0' }}>
        <Image src="/education.png" alt="Education" width={420} height={260} style={{ borderRadius: 16, boxShadow: '0 2px 16px #18191a22', background: '#fff', border: '2px solid #ffd700' }} />
      </div>
      <section style={{
        background: '#fff',
        borderRadius: 16,
        padding: '24px 32px',
        maxWidth: 600,
        margin: '48px auto 48px auto',
        boxShadow: '0 2px 16px #18191a22',
        color: '#18191a',
        textAlign: 'center',
        fontSize: '1.15rem',
        lineHeight: 1.7,
        border: '1.5px solid #ffd700',
      }}>
        <strong style={{ color: '#ffd700', fontSize: '1.2rem' }}>Meet Mr. Job Nanny!</strong>
        <br />
        <span role="img" aria-label="nanny">🧑‍🦳</span> Mr. Job Nanny is your personal, privacy-first AI job assistant. He helps you discover new AI jobs, analyze your skill gaps, set interview reminders, and get personalized job alerts—all in a safe, supportive environment. Mr. Nanny can:
        <ul style={{ margin: '8px 0 8px 24px', color: '#18191a' }}>
          <li>Suggest jobs and career paths based on your interests and skills</li>
          <li>Analyze your resume and offer actionable feedback</li>
          <li>Help you identify missing skills or certifications for your dream job</li>
          <li>Send you interview reminders (with a friendly disclaimer!)</li>
          <li>Alert you to new job postings in chat or by email</li>
          <li>Answer your questions about pay, qualifications, and career growth</li>
        </ul>
        <span style={{ color: '#ffd700', fontWeight: 600 }}>Your privacy is always protected—your data stays on your device unless you choose to share it.</span>
        <br /><br />
        <Link href="/chatbot-demo" style={{ color: '#6a1b9a', fontWeight: 700, textDecoration: 'underline', fontSize: '1.1rem' }}>Chat with Mr. Job Nanny</Link>
      </section>
      {/* Job Growth Image */}
      <div style={{ margin: '48px 0 24px 0' }}>
        <Image src="/job growth.png" alt="Job Growth" width={420} height={260} style={{ borderRadius: 16, boxShadow: '0 2px 16px #18191a22', background: '#fff', border: '2px solid #ffd700' }} />
      </div>
    </main>
  );
}
