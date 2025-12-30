import React from "react";

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

export default function StatesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a1b9a 0%, #ffd700 100%)",
        color: "#ffd700",
        fontFamily: "Playfair Display, Georgia, serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: 900, color: "#ffd700", margin: "48px 0 24px 0", textShadow: "0 2px 24px #6a1b9a", letterSpacing: 2, textAlign: "center" }}>
        U.S. States
      </h1>
      <section style={{ background: "rgba(106,27,154,0.10)", borderRadius: 18, padding: "32px 40px", maxWidth: 700, boxShadow: "0 2px 24px #6a1b9a33", color: "#6a1b9a", fontSize: 22, fontFamily: "Playfair Display, Georgia, serif", textAlign: "center", marginBottom: 32 }}>
        Explore all U.S. states and discover AI, job, and innovation trends for each region.
      </section>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "18px", width: "100%", maxWidth: 900 }}>
        {states.map(state => (
          <div key={state} style={{ background: "rgba(255,215,0,0.08)", borderRadius: 12, padding: "18px 12px", color: "#6a1b9a", fontWeight: 700, fontSize: "1.15rem", boxShadow: "0 2px 12px #6a1b9a22", textAlign: "center" }}>
            {state}
          </div>
        ))}
      </div>
    </main>
  );
}
