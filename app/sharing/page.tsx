

export default function SharingPage() {
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
        justifyContent: "center",
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
        Sharing
      </h1>
      <p style={{ color: '#f7fafc', opacity: 0.85, fontSize: 18, marginBottom: 32, textAlign: 'center', maxWidth: 600 }}>
        This page previously hosted a message board. Stay tuned for new ways to share and connect!
      </p>
    </main>
  );
}
