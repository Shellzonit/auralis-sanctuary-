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
    // Removed tabStyle and tab navigation for a cleaner homepage
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a1b9a 0%, #ffd700 100%)", // purple to gold
        color: "#ffd700",
        fontFamily: "Playfair Display, Georgia, serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      {/* Tab Navigation removed for a clean homepage */}

      {/* Welcome section removed for a cleaner homepage */}
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
