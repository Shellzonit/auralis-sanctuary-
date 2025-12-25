"use client";


"use client";

import React from "react";
import SanctuaryLogo from "@/components/SanctuaryLogo";

export default function Home() {
  const tabs = [
    { name: "Music", href: "/music" },
    { name: "Art", href: "/art" },
    { name: "Blog", href: "/blog" },
    { name: "Stream", href: "/stream" },
    { name: "About", href: "/about" },
    { name: "Community", href: "/community" }
  ];

  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen px-4"
      style={{
        background: "var(--sanctuary-bg)",
        color: "var(--sanctuary-text)"
      }}
    >
      {/* LOGO (crest above the Gate) */}
      <div className="mt-xl mb-md">
        <SanctuaryLogo />
      </div>

      {/* SANCTUARY GATE */}
      <div className="flex flex-col items-center justify-center mt-gate mb-lg">
        <span
          style={{
            color: "var(--sanctuary-accent)",
            fontSize: "6rem",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.05em"
          }}
        >
          S
        </span>

        <div
          style={{
            width: 80,
            height: 0,
            borderBottom: "8px solid var(--sanctuary-text)",
            marginTop: "0.5rem",
            marginBottom: "0.5rem"
          }}
        />

        <span
          style={{
            color: "var(--sanctuary-accent)",
            fontSize: "6rem",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.05em"
          }}
        >
          S
        </span>
      </div>

      {/* TITLE */}
      <h1
        className="text-4xl font-bold mb-md"
        style={{ color: "var(--sanctuary-text)" }}
      >
        Auralis Sanctuary
      </h1>

      {/* CIRCULAR MENU */}
      <div
        className="relative flex justify-center items-center mb-xl"
        style={{ width: 340, height: 340 }}
      >
        {/* Circular background */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 280,
            height: 280,
            borderRadius: "50%",
            border: "4px solid var(--sanctuary-border)",
            background: "var(--sanctuary-soft)",
            zIndex: 0
          }}
        />

        {/* Center label (optional — you can replace with logo if you want) */}
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            color: "var(--sanctuary-text)",
            fontWeight: "bold",
            fontSize: "1.5rem"
          }}
        >
          Sanctuary
        </div>

        {/* Tabs */}
        {tabs.map((tab, idx) => {
          const angle = (2 * Math.PI * idx) / tabs.length;
          const radius = 120;
          const x = Math.cos(angle - Math.PI / 2) * radius;
          const y = Math.sin(angle - Math.PI / 2) * radius;

          return (
            <a
              key={tab.href}
              href={tab.href}
              className="absolute px-3 py-2 rounded-full text-sm font-medium transition"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
                background: "var(--sanctuary-accent)",
                color: "white",
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
              }}
            >
              {tab.name}
            </a>
          );
        })}
      </div>
    </main>
  );
}
