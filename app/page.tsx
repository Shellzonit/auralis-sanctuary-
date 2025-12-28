"use client";
import Link from "next/link";

const tabs = [
  { label: "Home", href: "/" },
  { label: "Chat", href: "/chat" },
  { label: "Showcase", href: "/showcase" },
  { label: "Email", href: "/email" },
  { label: "Spotlight", href: "/spotlight" },
  { label: "About", href: "/about" },
  { label: "Legacy", href: "/legacy" },
  { label: "Privacy", href: "/privacy" },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#181a20",
        color: "#f7fafc",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      {/* Ai Wilding Header */}
      <div style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 18,
        paddingBottom: 2,
        paddingLeft: 8,
        fontSize: 18,
        fontWeight: 600,
        color: "#ffe082cc",
        letterSpacing: ".04em",
        opacity: 0.92,
        textShadow: "0 1px 8px #0006"
      }}>
        <span
          style={{
            fontFamily: 'Playfair Display, Inter, sans-serif',
            fontWeight: 900,
            fontSize: 48,
            letterSpacing: '.09em',
            background: 'linear-gradient(90deg, #00f2ff 0%, #ffe082 60%, #ff6ec4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 24px #00f2ff88, 0 1px 0 #fff2',
            filter: 'drop-shadow(0 0 8px #ffe08288)',
            transition: 'background 0.8s',
            animation: 'aiGlow 2.5s infinite alternate',
          }}
        >
          Ai Wilding
        </span>
        <style>{`
          @keyframes aiGlow {
            0% { filter: drop-shadow(0 0 8px #00f2ff88); }
            100% { filter: drop-shadow(0 0 18px #ff6ec488); }
          }
        `}</style>
      </div>
      {/* Tabs */}
      <nav style={{ width: "100%", display: "flex", justifyContent: "center", gap: 24, marginTop: 24, marginBottom: 32 }}>
        {tabs.map(tab => (
          <Link
            key={tab.href}
            href={tab.href}
            style={{
              color: "#f7fafc",
              background: "#23242b",
              borderRadius: 18,
              padding: "0.7rem 2.2rem",
              fontWeight: 600,
              fontSize: 18,
              letterSpacing: ".04em",
              textDecoration: "none",
              border: "2px solid #31323a",
              boxShadow: "0 2px 12px 0 #0006",
              transition: "all .18s cubic-bezier(.4,0,.2,1)",
              margin: 0,
            }}
            onMouseOver={e => (e.currentTarget.style.background = "#2a2b33")}
            onMouseOut={e => (e.currentTarget.style.background = "#23242b")}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
      {/* Sanctuary Title */}
      <h1 style={{
        fontFamily: 'Playfair Display, Georgia, serif',
        fontSize: '4.5rem',
        fontWeight: 900,
        letterSpacing: '.08em',
        color: '#ffe082',
        textShadow: '0 4px 32px #000a, 0 1px 0 #fff2',
        margin: 0,
        marginBottom: 12,
        textAlign: 'center',
      }}>
        SANCTUARY
      </h1>
      <div style={{ fontSize: 24, color: '#f7fafc', opacity: 0.85, marginBottom: 32, fontWeight: 600, letterSpacing: '.04em' }}>
        AI & Innovation
      </div>
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
