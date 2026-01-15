
"use client";

import AnnaOperatorCard from "../components/AnnaOperatorCard";
import BotGallery from "../components/BotGallery";

export default function HomePage() {
  return (
    <main>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
        <img src="/ai homepage.png" alt="Sanctuary Banner" style={{ maxWidth: 700, width: '100%', borderRadius: 18, marginBottom: 12, boxShadow: '0 4px 32px #18191a22' }} />
        <h1
          style={{
            color: "#7b2ff2",
            fontSize: "2.8rem",
            fontWeight: 900,
            fontFamily: "Playfair Display, Georgia, serif",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textAlign: "center",
            margin: '16px 0 0 0',
            width: "100%",
            position: "relative",
            zIndex: 2,
            textShadow: "0 2px 8px #8882",
            WebkitTextStroke: "1.5px #bba6f7",
            filter: "none",
            lineHeight: 1.18,
            paddingBottom: "0.18em",
          }}
        >
          AI Wilding
        </h1>
      </div>
      <section>
        <div
          style={{
            color: "#ece9fc",
            fontSize: "1.25rem",
            fontWeight: 600,
            marginTop: 16,
            textAlign: "center",
            maxWidth: 520,
            textShadow: "0 1px 6px #18191a55",
          }}
        >
          Welcome to Sanctuary — your creative career hub for the AI era.
        </div>
      </section>
      <section style={{ margin: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 16, color: '#7b2ff2' }}>Featured Operator</h2>
        <AnnaOperatorCard />
      </section>
      <section style={{ width: '100%', margin: '2rem 0' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 700, margin: '0 0 1.5rem 0', color: '#18191a', textAlign: 'center' }}>
          Meet the Other Bots
        </h2>
        <BotGallery />
      </section>
      <section
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "32px 40px",
          maxWidth: 600,
          margin: "0 auto 48px auto",
          boxShadow: "0 2px 16px #18191a22",
          color: "#18191a",
          textAlign: "center",
          fontSize: "1.12rem",
          lineHeight: 1.7,
          border: "1.5px solid #e0d6f7",
        }}
      >
        <div style={{ marginBottom: 18 }}>
          <strong style={{ color: "#7b2ff2", fontSize: "1.15rem" }}>
            Your Creative AI Career Platform
          </strong>
        </div>
        <div>
          Explore AI jobs, mock interviews, resume tools, events, and a vibrant community — all in one place.
        </div>
      </section>
    </main>
  );
}
