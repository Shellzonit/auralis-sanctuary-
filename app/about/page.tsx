"use client";

import React from "react";

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff",
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
        border: '3px solid #18191a',
        borderRadius: 24,
        boxSizing: 'border-box',
      }}
    >
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#18191a", margin: "32px 0 16px 0", textShadow: "0 2px 16px #ffd70044" }}>
        <span style={{ color: '#ffd700' }}>About</span> the Creator
      </h1>
      {/* Educational Outlook Image */}
      <div style={{ marginBottom: 32 }}>
        <img src="/educational outlook.png" alt="Educational Outlook" width={420} height={280} style={{ borderRadius: 16, boxShadow: '0 2px 16px #18191a22', background: '#fff', border: '2px solid #ffd700' }} />
      </div>
      <section style={{ maxWidth: 700, background: 'rgba(255,255,255,0.07)', borderRadius: 16, padding: 32, color: '#fff8dc', fontSize: '1.15rem', lineHeight: 1.7, boxShadow: '0 2px 16px #6a1b9a22', marginBottom: 32 }}>
        <p>
          <strong style={{ color: '#ffd700', fontSize: '1.2rem' }}>Fusing Art, Technology, and Empowerment</strong>
        </p>
        <p>
          I am the creator of <strong>Femmephonic</strong>, a new genre that fuses opera and international choirs with strings and brass to create a powerful, cinematic sound. My music has reached thousands of listeners and performers on SoundCloud and beyond, inspiring people around the world.
        </p>
        <p>
          My mission is to use my voice and creativity to help people not fear AI, but to embrace it as a tool for growth, learning, and new opportunities. I believe that technology, when used thoughtfully, can enhance our potential and help us discover new callings.
        </p>
        <p>
          Through this site, I aim to provide guidance, resources, and a supportive community for anyone navigating the changing world of work. Whether you’re an artist, technologist, or just curious about AI, you’ll find inspiration and practical help here.
        </p>
        <p style={{ color: '#ffd700', fontWeight: 700, marginTop: 16 }}>
          Let’s create, learn, and thrive together in the age of AI.
        </p>
      </section>
    </main>
  );
}
