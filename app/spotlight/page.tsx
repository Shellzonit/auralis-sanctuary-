
import React from "react";

const creativePrompts = [
  "Create something inspired by the color blue.",
  "Draw or write about a dream you had.",
  "Remix a classic work of art in your own style.",
  "Share a photo that represents 'hope'.",
  "Write a short poem about winter.",
  "Design a futuristic cityscape.",
  "Make something using only circles and lines.",
  "Express a feeling without using words."
];

function getDailyPrompt() {
  const day = new Date().getDate();
  return creativePrompts[day % creativePrompts.length];
}

export default function SpotlightPage() {
  // Placeholder leaderboard data
  const leaderboard = [
    { username: "aurora", clicks: 128 },
    { username: "nova", clicks: 97 },
    { username: "orion", clicks: 76 },
    { username: "vega", clicks: 54 },
    { username: "lyra", clicks: 41 }
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff",
        color: "#18191a",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <h1 style={{
        fontFamily: 'Playfair Display, Georgia, serif',
        fontSize: '2.5rem',
        fontWeight: 800,
        letterSpacing: '.06em',
        color: '#18191a',
        textShadow: '0 2px 16px #ffd70044',
        margin: '36px 0 18px 0',
        textAlign: 'center',
      }}>
        <span style={{ color: '#ffd700' }}>Spotlight</span>
      </h1>
      <div style={{ fontSize: 22, color: '#ffd700', fontWeight: 700, margin: '32px 0 12px', textAlign: 'center' }}>
        User Leaderboard (by Clicks)
      </div>
      <ol style={{ background: '#fff', border: '2px solid #ffd700', borderRadius: 16, padding: 24, marginBottom: 36, width: '100%', maxWidth: 420, color: '#18191a', fontSize: 18, fontWeight: 600 }}>
        {leaderboard.map((user, idx) => (
          <li key={user.username} style={{ marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
            <span>@{user.username}</span>
            <span style={{ color: '#7fd1b9', fontWeight: 700 }}>{user.clicks} clicks</span>
          </li>
        ))}
      </ol>
      <div style={{ fontSize: 22, color: '#ffe082', fontWeight: 700, margin: '32px 0 12px', textAlign: 'center' }}>
        Daily Creative Prompt
      </div>
      <div style={{ background: '#23242b', border: '2px solid #ffe082', borderRadius: 16, padding: 24, marginBottom: 36, width: '100%', maxWidth: 420, color: '#7fd1b9', fontSize: 18, fontWeight: 500, textAlign: 'center' }}>
        {getDailyPrompt()}
      </div>
    </main>
  );
}
