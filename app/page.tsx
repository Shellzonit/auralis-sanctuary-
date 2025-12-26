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
        backgroundColor: "#000",
        color: "rgba(255,255,255,0.85)",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "2rem",
        position: "relative",
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

      {/* Footer Tabs for All Pages */}
      <footer
        style={{
          width: "100%",
          position: "fixed",
          left: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.92)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "0.75rem 0",
          display: "flex",
          justifyContent: "center",
          zIndex: 50,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[
            { label: "Home", href: "/" },
            { label: "Chat", href: "/chat" },
            { label: "Showcase", href: "/showcase" },
            { label: "Email", href: "/email" },
            { label: "Spotlight", href: "/spotlight" },
            { label: "About Us", href: "/about" },
            { label: "Legacy", href: "/legacy" },
            { label: "Privacy", href: "/privacy" },
          ].map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              style={{
                textDecoration: "none",
                color: "rgba(255,255,255,0.75)",
                fontWeight: 500,
                fontSize: "1rem",
                padding: "0.25rem 0.75rem",
                borderRadius: "8px",
                transition: "background 180ms, color 180ms, filter 180ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.filter = "brightness(1.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
                e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
