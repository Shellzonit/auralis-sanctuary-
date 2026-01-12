"use client";

import Link from "next/link";

export default function HiringEventsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f3fd",
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {/* Elegant Gradient Banner */}
      <section
        style={{
          width: '100%',
          maxWidth: 900,
          margin: '2.5rem auto 2rem auto',
          background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)',
          borderRadius: 28,
          boxShadow: '0 4px 32px #18191a22',
          padding: '2.5rem 0 2.5rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <h1
          style={{
            color: 'rgba(255,255,255,0.97)',
            fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
            fontWeight: 800,
            fontFamily: 'Playfair Display, Georgia, serif',
            fontStyle: 'italic',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin: 0,
            width: '100%',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
            zIndex: 2,
            textShadow: '0 2px 8px #8882',
            WebkitTextStroke: '1.5px #bba6f7',
            filter: 'none',
            background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            maskImage: 'linear-gradient(to bottom, #fff 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, #fff 80%, transparent 100%)',
            lineHeight: 1.18,
            paddingBottom: '0.18em',
          }}
        >
          AI Hiring Events
        </h1>
        <div
          style={{
            color: '#18191a',
            fontSize: '1.35rem',
            fontWeight: 700,
            marginTop: 18,
            textAlign: 'center',
            maxWidth: 700,
            textShadow: '0 1px 8px #fff',
            background: 'linear-gradient(90deg, #fffbe7 60%, #e0d6f7 100%)',
            borderRadius: 18,
            padding: '18px 32px',
            border: '2px solid #ffd700',
            boxShadow: '0 2px 16px #ffd70022',
            letterSpacing: '0.01em',
            marginBottom: 8,
          }}
        >
          Discover upcoming <span style={{ color: '#7b2ff2', fontWeight: 800 }}>AI hiring events</span>, job fairs, and networking opportunities for creative and technical talent.<br />
          <span style={{ color: '#7b2ff2', fontWeight: 700 }}>Each event includes details, location, and participation info.</span>
        </div>
      </section>
      {/* ...existing code for event cards, images, and links... */}
      <section style={{ maxWidth: 900, marginBottom: 24, background: '#fff', borderRadius: 18, padding: '32px 40px', boxShadow: '0 4px 32px #18191a22', color: '#18191a', border: '2px solid #ffd700', fontSize: '1.12rem', lineHeight: 1.7 }}>
        <div style={{ display: 'flex', gap: 24, marginBottom: 24, justifyContent: 'center' }}>
          <img src="/education.png" alt="Education" width={180} height={110} style={{ borderRadius: 16, boxShadow: '0 2px 16px #18191a22', background: '#fff', border: '2px solid #ffd700' }} />
          <img src="/healthy.png" alt="Healthy" width={180} height={110} style={{ borderRadius: 16, boxShadow: '0 2px 16px #18191a22', background: '#fff', border: '2px solid #ffd700' }} />
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 24, background: '#f5faff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #90caf922' }}>
            <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 6, fontWeight: 700 }}>AI Career Expo 2026</h2>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Date:</strong> March 15, 2026</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Location:</strong> San Francisco, CA & Virtual</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}>Workshops, recruiter networking, portfolio reviews, and live AI demos.</div>
          </li>
          <li style={{ marginBottom: 24, background: '#f5faff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #90caf922' }}>
            <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 6, fontWeight: 700 }}>Women in AI Hiring Summit</h2>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Date:</strong> April 10, 2026</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Location:</strong> New York, NY</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}>Panels, speed interviews, and mentorship for women in AI.</div>
          </li>
          <li style={{ marginBottom: 24, background: '#f5faff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #90caf922' }}>
            <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 6, fontWeight: 700 }}>Remote AI Talent Fair</h2>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Date:</strong> May 2, 2026</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Location:</strong> Online</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}>Virtual booths, global employers, and live Q&amp;A sessions.</div>
          </li>
        </ul>
        {/* Chatbot link */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24, marginBottom: 8 }}>
          <Link href="/chatbot-demo" style={{
            background: '#ffd700',
            color: '#232526',
            fontWeight: 700,
            borderRadius: 8,
            padding: '12px 28px',
            fontSize: '1.08rem',
            textDecoration: 'none',
            boxShadow: '0 2px 8px #ffd70044',
            border: '2px solid #ffd700',
            transition: 'background 0.2s',
            display: 'inline-block',
          }}>
            💬 Try the AI Chatbot — Ask about jobs & events
          </Link>
        </div>
        <div style={{ color: '#18191a', fontSize: '1rem', marginTop: 12, textAlign: 'center', maxWidth: 600 }}>
          <strong>Want to host an event?</strong> Contact us to feature your AI hiring event here!
        </div>
      </section>
    </main>
  );
}
