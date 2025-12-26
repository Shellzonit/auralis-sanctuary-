"use client";
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000", // deep black backdrop for moonlit text
        color: "rgba(255,255,255,0.85)", // moonlit tone
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: 400,
          marginBottom: "2rem",
          letterSpacing: "0.5px",
        }}
      >
        Auralis Sanctuary
      </h1>

      {/* Main Portal Link */}
      <a
        href="/chat"
        style={{
          fontSize: "1.25rem",
          fontWeight: 400,
          textDecoration: "none",
          color: "rgba(255,255,255,0.85)",
          transition: "filter 180ms ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = "brightness(1.18)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = "brightness(1)";
        }}
      >
        → Enter Circles & Roots
      </a>

      {/* Secondary Links */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1rem",
          fontWeight: 400,
          opacity: 0.85,
          display: "flex",
          gap: "0.75rem",
        }}
      >
        {["chat", "showcase", "email"].map((label) => (
          <a
            key={label}
            href={`/${label}`}
            style={{
              textDecoration: "none",
              color: "rgba(255,255,255,0.75)",
              transition: "filter 180ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </main>
  );
}
