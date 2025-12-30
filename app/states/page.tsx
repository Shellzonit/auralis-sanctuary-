"use client";
import React, { useState } from "react";
// BLS API endpoint and key (replace with your own key if needed)
const BLS_API_URL = "https://api.bls.gov/publicAPI/v2/timeseries/data/";
const BLS_SERIES_ID = "LAUCN040010000000005"; // Example: Unemployment rate for a county
// For real use, you would dynamically select series IDs per state/city/industry

// Attribution for BLS data
const BLS_ATTRIBUTION = "Source: U.S. Bureau of Labor Statistics (BLS) public API";

const STATES = [
  "California",
  "Texas",
  "New York",
  "Illinois",
  "Florida",
  "Pennsylvania",
  "Ohio",
  "Georgia",
  "North Carolina",
  "Michigan"
];

export default function StateJobsPage() {
  const [selectedState, setSelectedState] = useState(STATES[0]);
  const [blsData, setBlsData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    async function fetchBLS() {
      setLoading(true);
      try {
        // Example fetch for one series ID (replace with dynamic logic for real use)
        const res = await fetch(BLS_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            seriesid: [BLS_SERIES_ID],
            startyear: "2025",
            endyear: "2025"
          })
        });
        const data = await res.json();
        setBlsData(data);
      } catch (err) {
        setBlsData(null);
      }
      setLoading(false);
    }
    fetchBLS();
  }, [selectedState]);
    // Sample data for cities with AI-driven layoffs
    const stateCityData: Record<string, { city: string; jobsAffected: number; categories: string[]; timeline: string; resources: string[]; news: string[]; }[]> = {
      "California": [
        { city: "San Francisco", jobsAffected: 1200, categories: ["Retail", "Transport", "Manufacturing"], timeline: "Q1-Q2 2025", resources: ["SF Workforce Center"], news: ["AI replacing retail jobs downtown"] },
        { city: "Los Angeles", jobsAffected: 900, categories: ["Logistics", "Customer Service"], timeline: "Q2 2025", resources: ["LA Job Training Hub"], news: ["Major logistics company automates warehouses"] },
      ],
      "Texas": [
        { city: "Houston", jobsAffected: 700, categories: ["Oil & Gas", "Admin"], timeline: "Q1-Q3 2025", resources: ["Houston Retraining Center"], news: ["AI-driven automation in oil sector"] },
        { city: "Dallas", jobsAffected: 500, categories: ["Finance", "Retail"], timeline: "Q2 2025", resources: ["Dallas Workforce Solutions"], news: ["Banks introduce AI tellers"] },
      ],
      "New York": [
        { city: "New York City", jobsAffected: 1500, categories: ["Finance", "Media", "Transport"], timeline: "Q1-Q2 2025", resources: ["NYC Career Center"], news: ["AI in media production"] },
        { city: "Buffalo", jobsAffected: 300, categories: ["Manufacturing"], timeline: "Q2 2025", resources: ["Buffalo Skills Lab"], news: ["Factories automate assembly lines"] },
      ],
      "Illinois": [
        { city: "Chicago", jobsAffected: 800, categories: ["Transport", "Retail"], timeline: "Q1-Q2 2025", resources: ["Chicago Job Center"], news: ["AI-driven layoffs in retail"] },
      ],
      "Florida": [
        { city: "Miami", jobsAffected: 600, categories: ["Hospitality", "Retail"], timeline: "Q2-Q3 2025", resources: ["Miami Workforce Hub"], news: ["Hotels automate front desk"] },
      ],
      "Pennsylvania": [
        { city: "Philadelphia", jobsAffected: 400, categories: ["Healthcare", "Admin"], timeline: "Q2 2025", resources: ["Philly Retraining"], news: ["Hospitals use AI for admin"] },
      ],
      "Ohio": [
        { city: "Columbus", jobsAffected: 350, categories: ["Retail", "Transport"], timeline: "Q2 2025", resources: ["Columbus Job Center"], news: ["Retail chains automate checkout"] },
      ],
      "Georgia": [
        { city: "Atlanta", jobsAffected: 500, categories: ["Transport", "Customer Service"], timeline: "Q2-Q3 2025", resources: ["Atlanta Skills Center"], news: ["AI in call centers"] },
      ],
      "North Carolina": [
        { city: "Charlotte", jobsAffected: 300, categories: ["Finance", "Retail"], timeline: "Q2 2025", resources: ["Charlotte Workforce"], news: ["Banks automate loan processing"] },
      ],
      "Michigan": [
        { city: "Detroit", jobsAffected: 700, categories: ["Manufacturing", "Transport"], timeline: "Q1-Q2 2025", resources: ["Detroit Retraining"], news: ["Auto plants use AI robots"] },
      ],
    };
  const [selectedState, setSelectedState] = useState(STATES[0]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a1b9a 0%, #ffd700 100%)",
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffd700", margin: "32px 0 16px 0", textShadow: "0 2px 16px #6a1b9a" }}>
        State AI Job Transitions
      </h1>
      <nav style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
        {STATES.map((state) => (
          <button
            key={state}
            onClick={() => setSelectedState(state)}
            style={{
              fontSize: "0.95rem",
              padding: "6px 16px",
              borderRadius: 8,
              background: selectedState === state ? "#ffd700" : "rgba(106,27,154,0.18)",
              color: selectedState === state ? "#6a1b9a" : "#ffd700",
              fontWeight: 700,
              border: "none",
              boxShadow: selectedState === state ? "0 2px 8px #ffd70055" : "0 2px 8px #6a1b9a22",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
            }}
            aria-label={state}
          >
            {state}
          </button>
        ))}
      </nav>
      {/* Placeholder for cities, job categories, numbers, timeline, resources, news, map, contacts, and stories */}
      <section style={{ width: "100%", maxWidth: 900, background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: 24, boxShadow: "0 2px 16px #6a1b9a22", marginBottom: 32 }}>
        <h2 style={{ color: "#ffd700", fontSize: "1.3rem", marginBottom: 12 }}>{selectedState}: Cities & AI Job Impact</h2>
        {/* BLS API Data Display */}
        <div style={{ marginBottom: 16, color: "#fff8dc", fontSize: "1rem" }}>
          <strong>{BLS_ATTRIBUTION}</strong>
        </div>
        {loading ? (
          <p style={{ color: "#fff8dc" }}>Loading BLS data...</p>
        ) : blsData ? (
          <pre style={{ background: "rgba(0,0,0,0.12)", color: "#ffd700", padding: 12, borderRadius: 8, fontSize: "0.95rem", maxHeight: 300, overflow: "auto" }}>
            {JSON.stringify(blsData, null, 2)}
          </pre>
        ) : (
          <p style={{ color: "#fff8dc" }}>No BLS data available for {selectedState}.</p>
        )}
        {/* Existing sample data for cities */}
        {stateCityData[selectedState]?.length ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {stateCityData[selectedState].map((entry) => (
              <div key={entry.city} style={{ background: "rgba(106,27,154,0.10)", borderRadius: 12, padding: 18, boxShadow: "0 2px 8px #6a1b9a22" }}>
                <h3 style={{ color: "#ffd700", fontSize: "1.1rem", marginBottom: 6 }}>{entry.city}</h3>
                <div style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 4 }}>
                  <strong>Jobs affected:</strong> {entry.jobsAffected}
                </div>
                <div style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 4 }}>
                  <strong>Categories:</strong> {entry.categories.join(", ")}
                </div>
                <div style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 4 }}>
                  <strong>Timeline:</strong> {entry.timeline}
                </div>
                <div style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 4 }}>
                  <strong>Resources:</strong> {entry.resources.join(", ")}
                </div>
                <div style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 4 }}>
                  <strong>News:</strong> {entry.news.join(", ")}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "#fff8dc" }}>
            No data available for {selectedState} yet.
          </p>
        )}
      </section>
    </main>
  );
}
