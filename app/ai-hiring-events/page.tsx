import React from "react";

export default function AIHiringEventsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a1b9a 0%, #ffd700 100%)",
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
          fontSize: '3rem',
          fontWeight: 900,
          color: '#ffd700',
          letterSpacing: 2,
          textShadow: '0 2px 16px #2a1a4d',
          margin: '48px 0 16px 0',
        }}
      >
        AI Hiring Events
      </h1>
      <p style={{ color: "#fff8dc", fontSize: "1.15rem", marginBottom: 24, maxWidth: 700, textAlign: 'center' }}>
        Discover upcoming AI hiring events, job fairs, and networking opportunities for creative and technical talent. Stay tuned for updates and new event listings!
      </p>
      <section style={{ maxWidth: 700, width: '100%', background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: 24, boxShadow: "0 2px 16px #6a1b9a22", marginBottom: 32 }}>
        <h2 style={{ color: '#ffd700', fontWeight: 700, fontSize: '1.5rem', marginBottom: 18 }}>Upcoming Events (2026)</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 18 }}>
            <strong>AI Career Expo 2026</strong><br />
            <span style={{ color: '#fff8dc' }}>March 15, 2026 &mdash; San Francisco, CA &amp; Virtual</span><br />
            <span style={{ color: '#C2A86C' }}>Workshops, recruiter networking, portfolio reviews, and live AI demos.</span>
          </li>
          <li style={{ marginBottom: 18 }}>
            <strong>Women in AI Hiring Summit</strong><br />
            <span style={{ color: '#fff8dc' }}>April 10, 2026 &mdash; New York, NY</span><br />
            <span style={{ color: '#C2A86C' }}>Panels, speed interviews, and mentorship for women in AI.</span>
          </li>
          <li style={{ marginBottom: 18 }}>
            <strong>Remote AI Talent Fair</strong><br />
            <span style={{ color: '#fff8dc' }}>May 2, 2026 &mdash; Online</span><br />
            <span style={{ color: '#C2A86C' }}>Virtual booths, global employers, and live Q&amp;A sessions.</span>
          </li>
        </ul>
        <div style={{ color: '#fff8dc', fontSize: '1rem', marginTop: 24, textAlign: 'center', maxWidth: 600 }}>
          <strong>Want to host an event?</strong> Contact us to feature your AI hiring event here!
        </div>
      </section>
    </main>
  );
}
