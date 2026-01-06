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

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f3fd",
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <section style={{ width: '100%', maxWidth: 900, margin: '3rem auto 2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)', borderRadius: 24, boxShadow: '0 4px 32px #18191a22', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <h1 style={{ color: 'rgba(255,255,255,0.97)', fontSize: '2.2rem', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1.5px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.18, paddingBottom: '0.18em' }}>State AI Job Transitions</h1>
        <div style={{ color: '#ece9fc', fontSize: '1.15rem', fontWeight: 500, marginTop: 10, textAlign: 'center', maxWidth: 500, textShadow: '0 1px 6px #18191a55' }}>
          Explore how AI is impacting jobs in each state. Select a state to view city-level data, affected industries, and resources for transition.
        </div>
        <div style={{ display: 'flex', gap: 32, margin: '32px 0 0 0', flexWrap: 'wrap', justifyContent: 'center' }}>
          <img src="/states%202.png" alt="States Map" width={420} height={260} style={{ borderRadius: 16, boxShadow: '0 2px 16px #18191a22', background: '#fff', border: '2px solid #ffd700' }} />
        </div>
      </section>
      <nav style={{ display: "flex", gap: 18, flexWrap: "wrap", marginBottom: 40, justifyContent: 'center' }}>
        {STATES.map((state) => (
          <button
            key={state}
            onClick={() => setSelectedState(state)}
            style={{
              fontSize: "1.08rem",
              padding: "10px 24px",
              borderRadius: 10,
              background: selectedState === state ? "#ffd700" : "#f5faff",
              color: selectedState === state ? "#18191a" : "#18191a",
              fontWeight: 700,
              border: selectedState === state ? "2px solid #ffd700" : "2px solid #ffd70044",
              boxShadow: selectedState === state ? "0 2px 8px #ffd70055" : "0 2px 8px #90caf922",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s, border 0.2s",
              marginBottom: 6,
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = '#ffe066';
              e.currentTarget.style.border = '2px solid #ffd700';
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = selectedState === state ? '#ffd700' : '#f5faff';
              e.currentTarget.style.border = selectedState === state ? '2px solid #ffd700' : '2px solid #ffd70044';
            }}
            aria-label={state}
          >
            {state}
          </button>
        ))}
      </nav>
      {/* Placeholder for cities, job categories, numbers, timeline, resources, news, map, contacts, and stories */}
      <section style={{ width: "100%", maxWidth: 900, background: '#f5faff', borderRadius: 16, padding: 24, boxShadow: '0 2px 16px #90caf922', marginBottom: 32 }}>
        <h2 style={{ color: "#ffd700", fontSize: "1.3rem", marginBottom: 12 }}>{selectedState}: Cities & AI Job Impact</h2>
        {/* BLS API Data Display */}
        <div style={{ marginBottom: 16, color: "#18191a", fontSize: "1rem" }}>
          <strong>{BLS_ATTRIBUTION}</strong>
        </div>
        {loading ? (
          <p style={{ color: "#18191a" }}>Loading BLS data...</p>
        ) : blsData ? (
          <pre style={{ background: "#e3f2fd", color: "#18191a", padding: 12, borderRadius: 8, fontSize: "0.95rem", maxHeight: 300, overflow: "auto" }}>
            {JSON.stringify(blsData, null, 2)}
          </pre>
        ) : (
          <p style={{ color: "#18191a" }}>No BLS data available for {selectedState}.</p>
        )}
        {/* Existing sample data for cities */}
        {stateCityData[selectedState]?.length ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {stateCityData[selectedState].map((entry) => (
              <div key={entry.city} style={{ background: '#fff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #90caf922' }}>
                <h3 style={{ color: '#ffd700', fontSize: '1.1rem', marginBottom: 6 }}>{entry.city}</h3>
                <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}>
                  <strong>Jobs affected:</strong> {entry.jobsAffected}
                </div>
                <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}>
                  <strong>Categories:</strong> {entry.categories.join(", ")}
                </div>
                <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}>
                  <strong>Timeline:</strong> {entry.timeline}
                </div>
                <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}>
                  <strong>Resources:</strong> {entry.resources.join(", ")}
                </div>
                <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}>
                  <strong>News:</strong> {entry.news.join(", ")}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "#18191a" }}>
            No data available for {selectedState} yet.
          </p>
        )}
      </section>
    </main>
  );
}
