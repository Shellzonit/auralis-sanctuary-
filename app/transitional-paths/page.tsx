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
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #6a1b9a 0%, #ffd700 100%)", fontFamily: "Inter, Arial, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 1rem" }}>
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffd700", margin: "32px 0 16px 0", textShadow: "0 2px 16px #6a1b9a" }}>
        Transitional Paths for At-Risk Jobs
      </h1>
      <section style={{ maxWidth: 900, background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: 24, boxShadow: "0 2px 16px #6a1b9a22", marginBottom: 32 }}>
        <p style={{ color: "#fff8dc", fontSize: "1.08rem", marginBottom: 18 }}>
          This page lists practical career moves and upskilling options for workers whose jobs are at risk due to AI and automation. Explore transitional paths, required skills, resources, and real success stories for each role.
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "rgba(255,255,255,0.03)", borderRadius: 12 }}>
          <thead>
            <tr style={{ background: "#6a1b9a" }}>
              <th style={{ color: "#ffd700", padding: "10px 8px" }}>Job</th>
              <th style={{ color: "#ffd700", padding: "10px 8px" }}>Risk</th>
              <th style={{ color: "#ffd700", padding: "10px 8px" }}>Transitional Paths</th>
              <th style={{ color: "#ffd700", padding: "10px 8px" }}>Skills Needed</th>
              <th style={{ color: "#ffd700", padding: "10px 8px" }}>Resources</th>
              <th style={{ color: "#ffd700", padding: "10px 8px" }}>Success Story</th>
            </tr>
          </thead>
          <tbody>
            {TRANSITIONAL_PATHS.map((item) => (
              <tr key={item.job} style={{ borderBottom: "1px solid #ffd70022" }}>
                <td style={{ color: "#fff8dc", padding: "10px 8px" }}>{item.job}</td>
                <td style={{ color: item.risk === "High" ? "#d32f2f" : "#fbc02d", fontWeight: 700, padding: "10px 8px" }}>{item.risk}</td>
                <td style={{ color: "#fff8dc", padding: "10px 8px" }}>{item.paths.join(", ")}</td>
                <td style={{ color: "#fff8dc", padding: "10px 8px" }}>{item.skills.join(", ")}</td>
                <td style={{ color: "#fff8dc", padding: "10px 8px" }}>{item.resources.join(", ")}</td>
                <td style={{ color: "#fff8dc", padding: "10px 8px" }}>{item.story}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section style={{ maxWidth: 900, marginBottom: 24, background: "rgba(255,255,255,0.10)", borderRadius: 12, padding: 18, boxShadow: "0 2px 8px #6a1b9a22" }}>
        <h2 style={{ color: "#ffd700", fontSize: "1.2rem", marginBottom: 8 }}>Guidance & Resources</h2>
        <ul style={{ color: "#fff8dc", fontSize: "1rem" }}>
          <li>Explore online courses for upskilling (Coursera, Udemy, LinkedIn Learning)</li>
          <li>Check local retraining programs and government support</li>
          <li>Connect with career counselors for personalized advice</li>
          <li>Read success stories for inspiration and ideas</li>
        </ul>
      </section>
    </main>
  );
}
