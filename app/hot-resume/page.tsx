import React from "react";

export default function HotResumePage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#fff",
      color: "#18191a",
      fontFamily: "Inter, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem 1rem"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem", color: "#e67e22" }}>
        Hot Resume of the Week
      </h1>
          <section style={{ maxWidth: 700, background: '#fff8e1', borderRadius: 12, boxShadow: '0 2px 12px #e67e2222', padding: '1.5rem 2rem', marginBottom: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.3rem', color: '#e67e22', fontWeight: 700, marginBottom: 10 }}>What is this page?</h2>
            <p style={{ fontSize: '1.1rem', color: '#232526', marginBottom: 0 }}>
              The Hot Resume of the Week Spotlight is a major feature designed to showcase the best resume created in our Resume Wizard. Each week, Mr. Nanny reviews all opt-in submissions and selects the most impressive resume to be featured here. This gives talented users a chance to shine and connect with new opportunities. If you want your resume to be considered, simply opt in when building your resume!
            </p>
          </section>
      <p style={{ fontSize: "1.2rem", maxWidth: 600, textAlign: "center", marginBottom: "2rem" }}>
        Each week, Mr. Nanny selects the most impressive resume created in our builder. The winner is featured here for all to see and connect with opportunities!
      </p>
      {/* Featured Resume Card Placeholder */}
      <section style={{
        background: "#f9f9f9",
        borderRadius: 16,
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        padding: "2rem",
        minWidth: 320,
        maxWidth: 480,
        marginBottom: "2rem"
      }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>This Week's Winner</h2>
        <div style={{ fontSize: "1rem", color: "#333" }}>
          {/* Resume details will go here */}
          <em>Coming soon: The best resume of the week!</em>
        </div>
      </section>
      <p style={{ fontSize: "1rem", color: "#888", maxWidth: 480, textAlign: "center" }}>
        Want to be featured? Opt in when you create your resume in our builder!
      </p>
    </main>
  );
}
