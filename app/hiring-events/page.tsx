"use client";

import Link from "next/link";

export default function HiringEventsPage() {
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
        position: 'relative',
        border: '3px solid #18191a',
        borderRadius: 24,
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#18191a", margin: "32px 0 16px 0", textShadow: "0 2px 16px #ffd70044" }}>
        <span style={{ color: '#ffd700' }}>AI Hiring Events</span>
      </h1>
      <section style={{ maxWidth: 900, marginBottom: 24, background: '#fff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #18191a22', color: '#18191a', border: '1.5px solid #ffd700' }}>
        <p style={{ color: "#18191a", fontSize: "1.08rem", marginBottom: 18 }}>
          Discover upcoming AI hiring events, job fairs, and networking opportunities for creative and technical talent. Each event includes details, location, and participation info.
        </p>
        <div style={{ display: 'flex', gap: 24, marginBottom: 24 }}>
          <img src="/education.png" alt="Education" width={220} height={140} style={{ borderRadius: 16, boxShadow: '0 2px 16px #18191a22', background: '#fff', border: '2px solid #ffd700' }} />
          <img src="/healthy.png" alt="Healthy" width={220} height={140} style={{ borderRadius: 16, boxShadow: '0 2px 16px #18191a22', background: '#fff', border: '2px solid #ffd700' }} />
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 24, background: '#f5faff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #90caf922' }}>
            <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 6 }}>AI Career Expo 2026</h2>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Date:</strong> March 15, 2026</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Location:</strong> San Francisco, CA & Virtual</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}>Workshops, recruiter networking, portfolio reviews, and live AI demos.</div>
          </li>
          <li style={{ marginBottom: 24, background: '#f5faff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #90caf922' }}>
            <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 6 }}>Women in AI Hiring Summit</h2>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Date:</strong> April 10, 2026</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Location:</strong> New York, NY</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}>Panels, speed interviews, and mentorship for women in AI.</div>
          </li>
          <li style={{ marginBottom: 24, background: '#f5faff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #90caf922' }}>
            <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 6 }}>Remote AI Talent Fair</h2>
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
            boxShadow: '0 2px 8px #6a1b9a22',
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
