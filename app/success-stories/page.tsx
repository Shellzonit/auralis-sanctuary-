"use client";
import React from "react";
import Image from "next/image";

const STORIES = [
  {
    name: "Maria",
    from: "Retail Cashier",
    to: "AI Customer Support Specialist",
    story: "After her store automated checkout, Maria took online courses in customer service and AI chatbots. She now works remotely as a support specialist for an e-commerce company."
  },
  {
    name: "James",
    from: "Truck Driver",
    to: "Logistics Coordinator",
    story: "When autonomous trucks reduced driving jobs, James retrained in fleet management and logistics software. He now oversees delivery routes and vehicle maintenance for a major shipping company."
  },
  {
    name: "Alex",
    from: "Factory Worker",
    to: "Robot Technician",
    story: "After his factory introduced robotics, Alex attended a local technical college for robotics maintenance. He now services and programs robots on the production line."
  },
  {
    name: "Priya",
    from: "Bank Teller",
    to: "Digital Banking Advisor",
    story: "With more customers using online banking, Priya upskilled in digital finance and customer relations. She now helps clients navigate digital banking tools and provides financial advice."
  },
  {
    name: "Samantha",
    from: "Customer Service Rep",
    to: "Chatbot Trainer",
    story: "Samantha’s call center adopted AI chatbots. She learned to train and optimize chatbot responses, becoming a key part of her company’s AI support team."
  },
  {
    name: "Carlos",
    from: "Hotel Receptionist",
    to: "Event Planner",
    story: "As hotels automated check-in, Carlos took courses in event management. He now organizes conferences and special events for a hospitality group."
  },
  {
    name: "Linda",
    from: "Administrative Assistant",
    to: "Data Analyst",
    story: "After office automation, Linda completed a data analytics certificate. She now analyzes business data and helps her company make strategic decisions."
  }
];

export default function SuccessStoriesPage() {
  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #6a1b9a 0%, #ffd700 100%)", fontFamily: "Inter, Arial, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 1rem" }}>
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffd700", margin: "32px 0 16px 0", textShadow: "0 2px 16px #6a1b9a" }}>
        Success Stories
      </h1>
      <div className="flex flex-col items-center mb-8">
        <Image src="/photo1.jpg" alt="Success Story" width={420} height={260} className="rounded-xl shadow border-4 border-yellow-300 object-cover mb-4" />
      </div>
      <section style={{ maxWidth: 900, background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: 24, boxShadow: "0 2px 16px #6a1b9a22", marginBottom: 32 }}>
        <p style={{ color: "#fff8dc", fontSize: "1.08rem", marginBottom: 18 }}>
          Real stories of people who successfully transitioned to new careers in the age of AI and automation.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {STORIES.map((s, idx) => (
            <div key={idx} style={{ background: "rgba(106,27,154,0.10)", borderRadius: 12, padding: 18, boxShadow: "0 2px 8px #6a1b9a22" }}>
              <h2 style={{ color: "#ffd700", fontSize: "1.2rem", marginBottom: 6 }}>{s.name}: {s.from} → {s.to}</h2>
              <p style={{ color: "#fff8dc", fontSize: "1rem" }}>{s.story}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
