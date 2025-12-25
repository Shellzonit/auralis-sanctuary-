"use client";


import React, { useState } from "react";

export default function Home() {
  const tabs = [
    { label: "Explore the Music Sanctuary", href: "/music" },
    { label: "Employment", href: "/jobs" },
    { label: "Content Showcase", href: "/showcase" },
    { label: "Internal Email", href: "/mail" },
    { label: "License Content Info", href: "/license" },
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Red S with underline */}
      <div className="flex flex-col items-center justify-center w-full mt-8 mb-4">
        <span style={{ color: '#be123c', fontSize: '6rem', fontWeight: 900, lineHeight: 1 }}>S</span>
        <div style={{ width: 80, height: 0, borderBottom: '8px solid #111', marginTop: 8, marginBottom: 16 }} />
      </div>
      {/* Centered Site Name */}
      <div className="flex-1 flex items-center justify-center w-full">
        <span className="text-5xl md:text-7xl font-extrabold tracking-tight text-center mb-10" style={{letterSpacing: '0.05em'}}>
          Auralis Sanctuary
        </span>
      </div>
      {/* Hero Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        Welcome to Auralis Sanctuary
      </h1>

      {/* Circular Tab Navigation with border/background */}
      <div className="relative flex justify-center items-center mb-12" style={{ width: 340, height: 340 }}>
        {/* Faint circular border and background */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 280,
            height: 280,
            borderRadius: '50%',
            border: '4px solid #e5e5e5',
            background: 'rgba(245,245,244,0.5)',
            zIndex: 0,
          }}
        />
        <div className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)', zIndex: 1 }}>
          <span className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>Menu</span>
        </div>
        {tabs.map((tab, idx) => {
          const angle = (2 * Math.PI * idx) / tabs.length;
          const radius = 120;
          const x = Math.cos(angle - Math.PI / 2) * radius;
          const y = Math.sin(angle - Math.PI / 2) * radius;
          // Assign a unique color to each tab for distinction
          const tabColors = [
            "#fbbf24", // Explore the Music Sanctuary (amber)
            "#34d399", // Employment (green)
            "#818cf8", // Content Showcase (purple)
            "#f472b6", // Internal Email (pink)
            "#a3a3a3", // License Content Info (gray)
          ];
          const color = tabColors[idx % tabColors.length];
          return (
            <a
              key={tab.href}
              href={tab.href}
              onMouseEnter={() => setActiveTab(idx)}
              className={
                "absolute px-6 py-2 rounded-full font-bold text-lg transition-all duration-150 border-2 " +
                (activeTab === idx
                  ? "bg-white text-black border-black shadow-lg scale-110 z-10"
                  : "bg-opacity-90 text-black border-transparent z-0")
              }
              style={{
                left: `calc(50% + ${x}px)` ,
                top: `calc(50% + ${y}px)` ,
                transform: 'translate(-50%, -50%)',
                cursor: "pointer",
                background: color,
                boxShadow: activeTab === idx ? '0 4px 24px 0 rgba(0,0,0,0.15)' : undefined,
                zIndex: 2,
              }}
            >
              {tab.label}
            </a>
          );
        })}
      </div>

      {/* Description */}
      <p className="max-w-2xl text-center text-lg md:text-xl text-gray-300 mb-10">
        Explore, share, and experience music in a mythic, minimalist space. Upload your tracks, discover new sounds, and connect with fellow creators.
      </p>
    </main>
  );
}
