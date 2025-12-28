"use client";
import React from "react";

export default function SharingPage() {
  // Example content links; in a real app, fetch from DB or API

  // Example artist folders; in a real app, fetch from DB or API
  const artistFolders = [
    {
      artist: "Aurora",
      folders: [
        { title: "Digital Art", url: "https://example.com/aurora/art" },
        { title: "Photography", url: "https://example.com/aurora/photo" },
      ],
    },
    {
      artist: "Nova",
      folders: [
        { title: "Music Videos", url: "https://example.com/nova/music" },
        { title: "Live Performances", url: "https://example.com/nova/live" },
      ],
    },
    {
      artist: "Orion",
      folders: [
        { title: "Short Stories", url: "https://example.com/orion/stories" },
        { title: "Poetry", url: "https://example.com/orion/poetry" },
      ],
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#181a20",
        color: "#ffe082",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <h1
        style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: '2.5rem',
          fontWeight: 900,
          color: '#ffe082',
          margin: '48px 0 24px 0',
          textShadow: '0 2px 24px #000a',
          letterSpacing: 1.5,
        }}
      >
        Sharing Room
      </h1>
      <p style={{ color: '#f7fafc', opacity: 0.85, fontSize: 18, marginBottom: 32, textAlign: 'center', maxWidth: 600 }}>
        Explore shareable content folders for each artist. Click a folder to view their work!
      </p>
      <div style={{ width: '100%', maxWidth: 900 }}>
        {artistFolders.map((artist, idx) => (
          <div key={idx} style={{ marginBottom: 36 }}>
            <h2 style={{ color: '#ffe082', fontSize: 28, fontWeight: 800, marginBottom: 16, textShadow: '0 2px 12px #000a' }}>{artist.artist}</h2>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {artist.folders.map((folder, fidx) => (
                <a
                  key={fidx}
                  href={folder.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(135deg, #23242b 60%, #ffe082 100%)',
                    border: '2px solid #ffe082',
                    borderRadius: 18,
                    boxShadow: '0 2px 16px #0006',
                    padding: '28px 22px',
                    color: '#181a20',
                    fontWeight: 700,
                    fontSize: 19,
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minWidth: 180,
                    marginBottom: 8,
                    transition: 'transform .13s, box-shadow .13s',
                    textAlign: 'center',
                  }}
                  onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  {folder.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
