"use client";
import Link from "next/link";

const tabs = [
  { label: "Transitional Phasing Jobs", href: "/transitional-phasing-jobs" },
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
      {/* Tabs - now above Sanctuary/Ai Wilding */}
      <nav style={{ width: "100%", display: "flex", justifyContent: "center", gap: 24, marginTop: 32, marginBottom: 32 }}>
        {tabs.map(tab => (
          <Link
            key={tab.href}
            href={tab.href}
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                color: "#f7fafc",
                background: "#23242b",
                borderRadius: 18,
                padding: "0.7rem 2.2rem",
                fontWeight: 600,
                fontSize: 18,
                letterSpacing: ".04em",
                border: "2px solid #31323a",
                boxShadow: "0 2px 12px 0 #0006",
                transition: "all .18s cubic-bezier(.4,0,.2,1)",
                margin: 0,
                display: "inline-block",
              }}
              onMouseOver={e => { e.currentTarget.style.background = "#2a2b33"; }}
              onMouseOut={e => { e.currentTarget.style.background = "#23242b"; }}
            >
              {tab.label}
            </span>
          </Link>
        ))}
      </nav>
      {/* Ai Wilding Large Centered Header */}
      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 0,
        marginBottom: 12,
      }}>
        <span
          style={{
            fontFamily: 'Playfair Display, Inter, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            letterSpacing: '.13em',
            background: 'linear-gradient(90deg, #00f2ff 0%, #ffe082 60%, #ff6ec4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 6px 48px #00f2ff88, 0 2px 0 #fff2',
            filter: 'drop-shadow(0 0 32px #ffe08288)',
            transition: 'background 0.8s',
            animation: 'aiGlow 2.5s infinite alternate',
            marginBottom: 0,
            textAlign: 'center',
            width: '100%',
            lineHeight: 1.05,
          }}
        >
          Ai Wilding
        </span>
        <style>{`
          @keyframes aiGlow {
            0% { filter: drop-shadow(0 0 32px #00f2ff88); }
            100% { filter: drop-shadow(0 0 64px #ff6ec488); }
          }
        `}</style>
        {/* Sanctuary smaller below */}
        <span
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '.06em',
            color: '#ffe082',
            textShadow: '0 2px 12px #000a, 0 1px 0 #fff2',
            marginTop: 10,
            marginBottom: 0,
            textAlign: 'center',
            opacity: 0.92,
          }}
        >
          SANCTUARY
        </span>
      </div>
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
      {/* Sanctuary Title moved above, now removed here */}
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
