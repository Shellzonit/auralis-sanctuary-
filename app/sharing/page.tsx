import React from "react";

export default function SharingPage() {
  // Example content links; in a real app, fetch from DB or API
  const contentLinks = [
    { title: "Aurora's Digital Art", url: "https://example.com/art1", type: "Art" },
    { title: "Nova's Music Video", url: "https://example.com/music1", type: "Music" },
    { title: "Orion's Short Story", url: "https://example.com/story1", type: "Writing" },
    { title: "Gallery: AI Portraits", url: "https://example.com/gallery1", type: "Gallery" },
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
        Discover and share art, music, writing, and more. Click a link to explore community creations!
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 32,
          width: '100%',
          maxWidth: 900,
        }}
      >
        {contentLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #23242b 60%, #ffe082 100%)',
              border: '2px solid #ffe082',
              borderRadius: 18,
              boxShadow: '0 2px 16px #0006',
              padding: '32px 24px',
              color: '#181a20',
              fontWeight: 700,
              fontSize: 20,
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform .13s, box-shadow .13s',
              textAlign: 'center',
            }}
            onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <span style={{ fontSize: 15, color: '#23242b', opacity: 0.7, marginBottom: 8 }}>{item.type}</span>
            {item.title}
          </a>
        ))}
      </div>
    </main>
  );
}
