"use client";
import React, { useState } from "react";

const JOBS = [
  { title: "Retail Cashier", risk: "High", industry: "Retail", location: "USA", factors: ["Self-checkout kiosks", "AI payment systems"], timeline: "2025-2027", affected: 500000, news: ["Major chains automate checkout"], resources: ["Retail retraining programs"], stories: ["Cashier to IT support"], global: false, reclassification: true, explanation: "Many retail cashier roles will be reclassified to customer support or inventory management as checkout becomes automated." },
  { title: "Truck Driver", risk: "High", industry: "Transport", location: "USA", factors: ["Autonomous vehicles"], timeline: "2026-2029", affected: 350000, news: ["Self-driving trucks tested"], resources: ["CDL retraining"], stories: ["Driver to logistics coordinator"], global: true, reclassification: true, explanation: "Some truck drivers may transition to fleet management or vehicle maintenance as autonomous vehicles increase." },
  { title: "Bank Teller", risk: "Medium", industry: "Finance", location: "UK", factors: ["AI tellers", "Online banking"], timeline: "2025-2028", affected: 120000, news: ["Banks introduce AI tellers"], resources: ["Finance upskilling"], stories: ["Teller to financial advisor"], global: true, reclassification: true, explanation: "Bank teller roles may shift to advisory or customer relationship positions as routine transactions are automated." },
  { title: "Factory Worker", risk: "High", industry: "Manufacturing", location: "Germany", factors: ["Robotic automation"], timeline: "2025-2030", affected: 200000, news: ["Factories automate assembly lines"], resources: ["Manufacturing retraining"], stories: ["Worker to robot technician"], global: true, reclassification: true, explanation: "Factory workers may be reclassified to machine operators or maintenance technicians as robots take over manual tasks." },
  { title: "Customer Service Rep", risk: "Medium", industry: "Customer Service", location: "India", factors: ["AI chatbots", "Automated call centers"], timeline: "2025-2028", affected: 250000, news: ["AI in call centers"], resources: ["Customer service upskilling"], stories: ["Rep to chatbot trainer"], global: true, reclassification: true, explanation: "Customer service reps may become chatbot trainers or escalation specialists as AI handles routine queries." },
  { title: "Hotel Receptionist", risk: "Medium", industry: "Hospitality", location: "USA", factors: ["Automated check-in"], timeline: "2026-2029", affected: 80000, news: ["Hotels automate front desk"], resources: ["Hospitality retraining"], stories: ["Receptionist to event planner"], global: false, reclassification: true, explanation: "Receptionists may shift to guest experience or event planning roles as check-in becomes automated." },
];

const RISK_LEVELS = ["High", "Medium", "Low"];
const INDUSTRIES = ["Retail", "Transport", "Finance", "Manufacturing", "Customer Service", "Hospitality"];
const LOCATIONS = ["USA", "UK", "Germany", "India"];

export default function JobsAtRiskPage() {
  const [riskFilter, setRiskFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredJobs = JOBS.filter(job =>
    (!riskFilter || job.risk === riskFilter) &&
    (!industryFilter || job.industry === industryFilter) &&
    (!locationFilter || job.location === locationFilter)
  );

  return (
    <main style={{ minHeight: '100vh', background: '#f5f3fd', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
      <section style={{ width: '100%', maxWidth: 700, margin: '3rem auto 2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)', borderRadius: 24, boxShadow: '0 4px 32px #18191a22', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <h1 style={{ color: 'rgba(255,255,255,0.97)', fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1.5px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.18, paddingBottom: '0.18em' }}>Jobs at Risk</h1>
        <div style={{ color: '#ece9fc', fontSize: '1.15rem', fontWeight: 500, marginTop: 10, textAlign: 'center', maxWidth: 500, textShadow: '0 1px 6px #18191a55' }}>
          Explore jobs most impacted by AI and automation, and discover new career paths.
        </div>
      </section>
      <section style={{ background: '#fff', borderRadius: 16, padding: '32px 40px', maxWidth: 900, margin: '0 auto 48px auto', boxShadow: '0 2px 16px #18191a22', color: '#18191a', textAlign: 'center', fontSize: '1.12rem', lineHeight: 1.7, border: '1.5px solid #e0d6f7' }}>
        <div style={{ marginBottom: 18 }}>
          <strong style={{ color: '#7b2ff2', fontSize: '1.15rem' }}>AI Impacted Jobs</strong>
        </div>
        {/* ...existing job list/filter UI remains here... */}
        <p style={{ color: '#18191a', fontSize: '1.08rem', marginBottom: 8 }}>
          <strong>Which jobs are at risk?</strong> This page highlights jobs in America and globally that are most at risk due to AI, automation, and digital transformation. Risk levels are based on current trends, expert analysis, and news reports. Many roles may be <span style={{ color: "#ffd700" }}>reclassified</span> rather than eliminated, meaning workers could transition to new responsibilities as technology evolves.
        </p>
        <p style={{ color: '#18191a', fontSize: '0.98rem' }}>
          <strong>Reclassification risk</strong> means a job is likely to change in nature, with workers moving to related roles (e.g., cashiers becoming customer support, truck drivers managing fleets). Use the filters below to explore jobs by risk level, industry, and location.
        </p>
      </section>
      <nav style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32, alignItems: 'center' }}>
        <label style={{ fontWeight: 700, color: '#ffd700', marginRight: 8 }}>Risk:</label>
        <select value={riskFilter} onChange={e => setRiskFilter(e.target.value)} style={{ padding: "6px 12px", borderRadius: 8, border: "2px solid #ffd700", background: "#fffbe6", color: "#18191a", fontWeight: 700, fontSize: '1.08rem', marginRight: 16 }}>
          <option value="">All Risks</option>
          {RISK_LEVELS.map(risk => <option key={risk} value={risk}>{risk}</option>)}
        </select>
        <label style={{ fontWeight: 700, color: '#ffd700', marginRight: 8 }}>Industry:</label>
        <select value={industryFilter} onChange={e => setIndustryFilter(e.target.value)} style={{ padding: "6px 12px", borderRadius: 8, border: "2px solid #ffd700", background: "#fffbe6", color: "#18191a", fontWeight: 700, fontSize: '1.08rem', marginRight: 16 }}>
          <option value="">All Industries</option>
          {INDUSTRIES.map(ind => <option key={ind} value={ind}>{ind}</option>)}
        </select>
        <label style={{ fontWeight: 700, color: '#ffd700', marginRight: 8 }}>Location:</label>
        <select value={locationFilter} onChange={e => setLocationFilter(e.target.value)} style={{ padding: "6px 12px", borderRadius: 8, border: "2px solid #ffd700", background: "#fffbe6", color: "#18191a", fontWeight: 700, fontSize: '1.08rem' }}>
          <option value="">All Locations</option>
          {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
        </select>
      </nav>
      <section style={{ width: '100%', maxWidth: 900, background: '#fff', borderRadius: 16, padding: 24, boxShadow: '0 2px 16px #18191a22', marginBottom: 32, color: '#18191a', border: '1.5px solid #ffd700' }}>
        <h2 style={{ color: '#ffd700', fontSize: '1.3rem', marginBottom: 12 }}>Jobs at Risk List</h2>
        {filteredJobs.length ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {filteredJobs.map(job => (
              <div key={job.title + job.location} style={{ background: "#e3f2fd", borderRadius: 12, padding: 18, boxShadow: "0 2px 8px #90caf922" }}>
                <h3 style={{ color: "#ffd700", fontSize: "1.1rem", marginBottom: 6 }}>{job.title} <span style={{ color: job.risk === "High" ? "#d32f2f" : job.risk === "Medium" ? "#fbc02d" : "#388e3c", fontWeight: 700, marginLeft: 8 }}>({job.risk} Risk)</span></h3>
                <div style={{ color: "#18191a", fontSize: "1rem", marginBottom: 4 }}><strong>Industry:</strong> {job.industry}</div>
                <div style={{ color: "#18191a", fontSize: "1rem", marginBottom: 4 }}><strong>Location:</strong> {job.location} {job.global ? "(Global)" : ""}</div>
                <div style={{ color: "#18191a", fontSize: "1rem", marginBottom: 4 }}><strong>Factors:</strong> {job.factors.join(", ")}</div>
                <div style={{ color: "#18191a", fontSize: "1rem", marginBottom: 4 }}><strong>Timeline:</strong> {job.timeline}</div>
                <div style={{ color: "#18191a", fontSize: "1rem", marginBottom: 4 }}><strong>Workers affected:</strong> {job.affected.toLocaleString()}</div>
                <div style={{ color: "#18191a", fontSize: "1rem", marginBottom: 4 }}><strong>News:</strong> {job.news.join(", ")}</div>
                <div style={{ color: "#18191a", fontSize: "1rem", marginBottom: 4 }}><strong>Resources:</strong> {job.resources.join(", ")}</div>
                <div style={{ color: "#18191a", fontSize: "1rem", marginBottom: 4 }}><strong>Success stories:</strong> {job.stories.join(", ")}</div>
                <div style={{ color: "#ffd700", fontSize: "1rem", marginTop: 8 }}><strong>Reclassification Risk:</strong> {job.reclassification ? "Likely" : "Unlikely"}</div>
                <div style={{ color: "#18191a", fontSize: "0.98rem", marginBottom: 2 }}>{job.explanation}</div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "#d32f2f", fontWeight: 700 }}>No jobs found for selected filters.</p>
        )}
        <div style={{ marginTop: 24, color: "#ffd700", fontSize: "1rem", fontWeight: 700 }}>
          <strong>Sources:</strong> <span style={{ color: '#18191a', fontWeight: 400 }}>U.S. Bureau of Labor Statistics, OECD, World Economic Forum, news reports</span>
        </div>
      </section>
    </main>
  );
}
