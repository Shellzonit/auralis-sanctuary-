"use client";

export default function HomePage() {
  return (
    <main>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
        <img src="/ai homepage.png" alt="Sanctuary Banner" style={{ maxWidth: 700, width: '100%', borderRadius: 18, marginBottom: 12, boxShadow: '0 4px 32px #18191a22' }} />
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 16,
        }}>
          <div style={{
            background: 'linear-gradient(90deg, #7b2ff2 0%, #e0d6f7 100%)',
            borderRadius: 24,
            boxShadow: '0 4px 32px #18191a22',
            padding: '1.5rem 2.5rem',
            display: 'inline-block',
          }}>
            <h1
              style={{
                color: '#fff',
                fontSize: '3.6rem',
                fontWeight: 900,
                fontFamily: 'Playfair Display, Georgia, serif',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textAlign: 'center',
                margin: 0,
                textShadow: '0 2px 8px #8882',
                WebkitTextStroke: '1.5px #7b2ff2',
                filter: 'none',
                lineHeight: 1.18,
                paddingBottom: '0.18em',
              }}
            >
              AI Wilding
            </h1>
          </div>
        </div>
        <div style={{
          color: "#555",
          fontSize: "1.1rem",
          fontWeight: 500,
          marginTop: 12,
          textAlign: "center",
          maxWidth: 520,
          textShadow: "0 1px 6px #18191a11",
        }}>
          Welcome to Sanctuary — your creative career hub for the AI era.
        </div>
      </div>
      <section
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "32px 40px",
          maxWidth: 600,
          margin: "0 auto 48px auto",
          boxShadow: "0 2px 16px #18191a22",
          color: "#18191a",
          textAlign: "center",
          fontSize: "1.12rem",
          lineHeight: 1.7,
          border: "1.5px solid #e0d6f7",
        }}
      >
        <div style={{ marginBottom: 18 }}>
          <strong style={{ color: "#7b2ff2", fontSize: "1.15rem" }}>
            Your Creative AI Career Platform
          </strong>
        </div>
        <div>
          Explore AI jobs, mock interviews, resume tools, events, and a vibrant community — all in one place.
        </div>
      </section>
    </main>
  );
}
