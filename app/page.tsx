"use client";
import "./homepage-s.css";

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
          fontSize: "2.2rem",
          fontWeight: 400,
          marginBottom: "2rem",
          letterSpacing: "0.5px",
          color: "#2a4365", // deep blue for title
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

      {/* Centered Tabs for All Pages */}
      <div
        style={{
          marginTop: "2.5rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "1.2rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
            className="text-sanctuary-text hover:text-sanctuary-accent transition-colors font-semibold text-base px-3 py-1 rounded"
            style={{ textDecoration: "none" }}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </main>
  );
}
