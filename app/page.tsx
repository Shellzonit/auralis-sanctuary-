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
        backgroundColor: "#f7fafc", // light background
        color: "#222", // dark text for contrast
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
          color: "#2a4365", // deep blue for title
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
          color: "#2b6cb0",
          background: "#e3f2fd",
          borderRadius: "8px",
          padding: "0.5rem 1.2rem",
          boxShadow: "0 2px 8px rgba(44, 62, 80, 0.06)",
          transition: "background 180ms, color 180ms, filter 180ms",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#bee3f8";
          e.currentTarget.style.color = "#1a365d";
          e.currentTarget.style.filter = "brightness(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#e3f2fd";
          e.currentTarget.style.color = "#2b6cb0";
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
          background: "rgba(255,255,255,0.96)",
          borderTop: "1px solid #cbd5e1",
          padding: "0.75rem 0",
          display: "flex",
          justifyContent: "center",
          zIndex: 50,
          boxShadow: "0 -2px 8px rgba(44, 62, 80, 0.04)",
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
                color: "#2b6cb0",
                fontWeight: 500,
                fontSize: "1rem",
                padding: "0.25rem 0.75rem",
                borderRadius: "8px",
                transition: "background 180ms, color 180ms, filter 180ms",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#bee3f8";
                e.currentTarget.style.color = "#1a365d";
                e.currentTarget.style.filter = "brightness(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
                e.currentTarget.style.color = "#2b6cb0";
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
