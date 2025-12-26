"use client";
import "./homepage-s.css";
import "./homepage-artist-tabs.css";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7fafc", // light background
        color: "#222", // dark text for contrast
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "2rem",
        position: "relative",
      }}
    >
      {/* White Wave Above S */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "7.5rem",
        zIndex: 2,
        pointerEvents: "none"
      }}>
        <svg viewBox="0 0 1440 180" width="100%" height="100%" preserveAspectRatio="none" style={{ display: "block" }}>
          <path fill="#fff" d="M0,80 C320,180 1120,0 1440,100 L1440,0 L0,0 Z" />
        </svg>
      </div>
      {/* Elegant Large S */}
      <span className="homepage-s-elegant">S</span>
      {/* AI and Innovation Banner */}
      <div
        style={{
          fontWeight: 700,
          fontSize: "2.4rem",
          marginBottom: "1.5rem",
          color: "var(--accent)",
          textAlign: "center",
          letterSpacing: "0.04em",
        }}
      >
        <strong>AI and Innovation All Under One Tent</strong>
      </div>

      {/* Title */}
      <h1
        style={{
          fontFamily: "Playfair Display, Georgia, serif",
          fontSize: "4.2rem",
          fontWeight: 700,
          marginBottom: "2.2rem",
          letterSpacing: "0.08em",
          color: "#2a4365",
          textShadow: "0 2px 12px rgba(44,62,80,0.08)",
        }}
      >
        Auralis Sanctuary
      </h1>

      {/* Main Portal Link */}
      <a
        href="/chat"
        className="text-sanctuary-accent hover:text-sanctuary-text transition-colors font-bold text-xl px-6 py-3 rounded-lg"
        style={{ textDecoration: "none", background: "none" }}
      >
        → Enter Circles & Roots
      </a>

      {/* Artist-like Elegant Tabs */}
      <div className="homepage-artist-tabs">
        {[
          { label: "Home", href: "/" },
          { label: "Chat", href: "/chat" },
          { label: "Showcase", href: "/showcase" },
          { label: "Email", href: "/email" },
          { label: "Spotlight", href: "/spotlight" },
          { label: "About Us", href: "/about" },
          { label: "Legacy", href: "/legacy" },
          { label: "Privacy", href: "/privacy" },
        ].map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            className="homepage-artist-tab"
            tabIndex={0}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </main>
  );
}
