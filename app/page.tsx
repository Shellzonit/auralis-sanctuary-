"use client";


"use client";

import React from "react";
import SanctuaryLogo from "@/components/SanctuaryLogo";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0a0a0f, #1a1a22)",
        color: "#f2f2f7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "4rem 1.5rem",
        fontFamily: "serif",
      }}
    >
      {/* SANCTUARY GATE */}
      <h1
        style={{
          fontSize: "3rem",
          letterSpacing: "0.05em",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Auralis Sanctuary
      </h1>

      <p
        style={{
          maxWidth: "600px",
          textAlign: "center",
          fontSize: "1.2rem",
          opacity: 0.85,
        }}
      >
        Welcome to the Sanctuary—a creative space for music, art, blogs, and streaming. Explore, share, and connect with the community.
      </p>
    </main>
  );
}
