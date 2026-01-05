"use client";
import React from "react";

const TRANSITIONAL_PATHS = [
  {
    job: "Retail Cashier",
    risk: "High",
    paths: ["Customer Support", "Inventory Management", "Digital Sales Associate", "E-commerce Fulfillment"],
    skills: ["Communication", "Basic IT", "Inventory Systems"],
    resources: ["Retail retraining programs", "Online customer service courses"],
    story: "Cashier to IT support via online training."
  },
  {
    job: "Truck Driver",
    risk: "High",
    paths: ["Fleet Manager", "Vehicle Maintenance Technician", "Logistics Coordinator", "Autonomous Vehicle Operator"],
    skills: ["Logistics", "Vehicle Maintenance", "Tech Literacy"],
    resources: ["CDL retraining", "Fleet management courses"],
    story: "Driver transitioned to logistics coordinator after upskilling."
  },
  {
    job: "Bank Teller",
    risk: "Medium",
    paths: ["Financial Advisor", "Customer Relationship Manager", "Digital Banking Specialist", "Compliance Analyst"],
    skills: ["Finance", "Customer Service", "Digital Tools"],
    resources: ["Finance upskilling", "Digital banking courses"],
    story: "Teller became a financial advisor through certification."
  },
  {
    job: "Factory Worker",
    risk: "High",
    paths: ["Machine Operator", "Robot Technician", "Quality Assurance", "Maintenance Specialist"],
    skills: ["Technical Skills", "Quality Control", "Machine Maintenance"],
    resources: ["Manufacturing retraining", "Technical college programs"],
    story: "Worker retrained as a robot technician."
  },
  {
    job: "Customer Service Rep",
    risk: "Medium",
    paths: ["Chatbot Trainer", "Escalation Specialist", "Customer Experience Analyst", "Tech Support"],
    skills: ["Communication", "AI Tools", "Problem Solving"],
    resources: ["Customer service upskilling", "AI chatbot training"],
    story: "Rep became a chatbot trainer after online course."
  },
  {
    job: "Hotel Receptionist",
    risk: "Medium",
    paths: ["Guest Experience Coordinator", "Event Planner", "Hospitality Tech Support", "Concierge"],
    skills: ["Event Planning", "Tech Literacy", "Guest Relations"],
    resources: ["Hospitality retraining", "Event planning courses"],
    story: "Receptionist moved to event planning."
  }
];

export default function TransitionalPathsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#fff", fontFamily: "Inter, Arial, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 1rem", position: 'relative' }}>
      {/* New AI Jobs Tab Button in Corner */}
      <a href="/new-ai-jobs" style={{position: 'absolute', top: 24, right: 32, zIndex: 20, padding: '10px 28px', background: '#ffd700', color: '#18191a', fontWeight: 700, borderRadius: 9999, boxShadow: '0 2px 12px #ffd70055', fontSize: '1.15rem', textDecoration: 'none', transition: 'all 0.2s', border: 'none'}} onMouseOver={e => {e.currentTarget.style.background='#F7F5F2';e.currentTarget.style.color='#2a1a4d';}} onMouseOut={e => {e.currentTarget.style.background='#ffd700';e.currentTarget.style.color='#18191a';}}>New AI Jobs & Careers &rarr;</a>
      <h1 style={{ fontSize: "2.4rem", fontWeight: 900, color: "#18191a", margin: "40px 0 18px 0", textShadow: "0 2px 16px #ffd70044", letterSpacing: 1 }}>
        <span style={{ color: '#ffd700', borderBottom: '4px solid #ffd700', paddingBottom: 4 }}>Transitional Paths</span> for At-Risk Jobs
      </h1>
      {/* Bar Chart for Transitional Paths per Job */}
      <section style={{ maxWidth: 950, marginBottom: 18, background: '#f5faff', borderRadius: 14, padding: 22, boxShadow: '0 2px 8px #ffd70022', borderLeft: '6px solid #ffd700' }}>
        <h2 style={{ color: '#ffd700', fontSize: '1.18rem', marginBottom: 10, fontWeight: 800 }}>Transitional Paths per Job</h2>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 18, height: 120, paddingBottom: 12 }}>
          {TRANSITIONAL_PATHS.map((item) => (
            <div key={item.job} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 80 }}>
              <div style={{
                height: `${item.paths.length * 18 + 18}px`,
                width: 32,
                background: '#ffd700',
                borderRadius: 8,
                boxShadow: '0 2px 8px #ffd70055',
                marginBottom: 6,
                transition: 'height 0.2s',
              }}></div>
              <span style={{ fontSize: '0.95rem', color: '#18191a', fontWeight: 600, textAlign: 'center' }}>{item.job}</span>
              <span style={{ fontSize: '0.85rem', color: '#6a1b9a', fontWeight: 500' }}>{item.paths.length} paths</span>
            </div>
          ))}
        </div>
      </section>
      <section style={{ maxWidth: 950, background: "#fffbe7", borderRadius: 18, padding: 32, boxShadow: "0 4px 24px #ffd70033", marginBottom: 36, borderLeft: '8px solid #ffd700' }}>
        <p style={{ color: "#18191a", fontSize: "1.01rem", marginBottom: 22, lineHeight: 1.6 }}>
          This page lists practical career moves and upskilling options for workers whose jobs are at risk due to AI and automation. Explore transitional paths, required skills, resources, and real success stories for each role.
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "rgba(255,255,255,0.03)", borderRadius: 12, boxShadow: '0 2px 12px #ffd70022', overflow: 'hidden', border: '2px solid #ffd700', fontSize: '0.97rem' }}>
          <thead>
            <tr style={{ background: "#ffd700" }}>
              <th style={{ color: "#18191a", padding: "10px 8px", fontSize: '0.98rem', fontWeight: 700 }}>Job</th>
              <th style={{ color: "#18191a", padding: "10px 8px", fontSize: '0.98rem', fontWeight: 700 }}>Risk</th>
              <th style={{ color: "#18191a", padding: "10px 8px", fontSize: '0.98rem', fontWeight: 700 }}>Transitional Paths</th>
              <th style={{ color: "#18191a", padding: "10px 8px", fontSize: '0.98rem', fontWeight: 700 }}>Skills Needed</th>
              <th style={{ color: "#18191a", padding: "10px 8px", fontSize: '0.98rem', fontWeight: 700 }}>Resources</th>
              <th style={{ color: "#18191a", padding: "10px 8px", fontSize: '0.98rem', fontWeight: 700 }}>Success Story</th>
            </tr>
          </thead>
          <tbody>
            {TRANSITIONAL_PATHS.map((item, idx) => (
              <tr
                key={item.job}
                style={{
                  borderBottom: "1px solid #ffd70022",
                  background: idx % 2 === 0 ? '#fffde7' : '#f5faff',
                  transition: 'background 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {e.currentTarget.style.background='#fff8dc';}}
                onMouseLeave={e => {e.currentTarget.style.background=idx % 2 === 0 ? '#fffde7' : '#f5faff';}}
              >
                <td style={{ color: "#18191a", padding: "10px 8px", fontWeight: 600 }}>{item.job}</td>
                <td style={{ padding: "10px 8px" }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '4px 14px',
                    borderRadius: 9999,
                    background: item.risk === "High" ? '#d32f2f' : '#fbc02d',
                    color: item.risk === "High" ? '#fff' : '#18191a',
                    fontWeight: 700,
                    fontSize: '0.97rem',
                  }}>{item.risk}</span>
                </td>
                <td style={{ color: "#18191a", padding: "10px 8px" }}>{item.paths.join(", ")}</td>
                <td style={{ color: "#18191a", padding: "10px 8px" }}>{item.skills.join(", ")}</td>
                <td style={{ color: "#18191a", padding: "10px 8px" }}>{item.resources.join(", ")}</td>
                <td style={{ color: "#6a1b9a", padding: "10px 8px", fontStyle: 'italic', fontWeight: 500 }}>{item.story}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section style={{ maxWidth: 950, marginBottom: 28, background: "#f5faff", borderRadius: 14, padding: 22, boxShadow: "0 2px 8px #ffd70022", borderLeft: '6px solid #ffd700' }}>
        <h2 style={{ color: "#ffd700", fontSize: "1.22rem", marginBottom: 10, fontWeight: 800 }}>Guidance & Resources</h2>
        <ul style={{ color: "#18191a", fontSize: "1.05rem", lineHeight: 1.7 }}>
          <li>Explore online courses for upskilling (Coursera, Udemy, LinkedIn Learning)</li>
          <li>Check local retraining programs and government support</li>
          <li>Connect with career counselors for personalized advice</li>
          <li>Read success stories for inspiration and ideas</li>
        </ul>
      </section>
    </main>
  );
}
