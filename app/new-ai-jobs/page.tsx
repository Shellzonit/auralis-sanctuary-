"use client";
import React from "react";

export const NEW_AI_JOBS = [
  {
    title: "AI Customer Support Specialist",
    description: "Handles customer inquiries using AI-powered support tools and chatbots.",
    skills: ["Communication", "Problem Solving", "AI Tools", "Empathy"],
    industries: ["Tech", "Retail", "Finance"],
    employers: ["AI Support Firms", "E-commerce", "Banks"],
    resources: ["AI Customer Support Bootcamp", "Coursera AI For Everyone"],
    pay: "$45,000 - $80,000/year"
  },
  {
    title: "Remote Data Annotation Specialist",
    description: "Labels and annotates data for training AI models, often remote and entry-level.",
    skills: ["Attention to Detail", "Basic Computer Skills", "Domain Knowledge"],
    industries: ["Tech", "Healthcare", "Finance"],
    employers: ["Annotation Firms", "Tech Companies"],
    resources: ["Remote Data Annotation Training", "Appen Training"],
    pay: "$40,000 - $65,000/year"
  },
  {
    title: "AI-Driven Marketing Apprentice",
    description: "Assists in digital marketing campaigns using AI tools and analytics.",
    skills: ["Digital Marketing", "AI Tools", "Creativity", "Analytics"],
    industries: ["Marketing", "Tech", "Retail"],
    employers: ["Marketing Agencies", "Brands", "Startups"],
    resources: ["AI-Driven Marketing Apprenticeship", "Canva AI Courses"],
    pay: "$50,000 - $75,000/year"
  },
  {
    title: "Healthcare AI Scribe",
    description: "Uses AI transcription tools to assist medical professionals in documentation.",
    skills: ["Medical Terminology", "AI Tools", "Typing", "Attention to Detail"],
    industries: ["Healthcare", "Tech"],
    employers: ["Hospitals", "Clinics", "Telehealth"],
    resources: ["Healthcare AI Scribe Training", "Coursera AI For Everyone"],
    pay: "$38,000 - $60,000/year"
  },
  {
    title: "AI Project Management Associate",
    description: "Supports project managers in delivering AI projects and coordinating teams.",
    skills: ["Project Management", "AI Concepts", "Organization", "Communication"],
    industries: ["Tech", "Finance", "Healthcare"],
    employers: ["Tech Firms", "Consultancies", "Startups"],
    resources: ["AI Project Management Micro-Credential", "Google Project Management"],
    pay: "$60,000 - $90,000/year"
  }
];

export default function NewAIJobsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#fff", fontFamily: "Inter, Arial, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 1rem", position: 'relative', border: '3px solid #18191a', borderRadius: 24, boxSizing: 'border-box' }}>
      {/* AI Hiring Events Tab Button in Corner */}
      <a href="/ai-hiring-events" style={{position: 'absolute', top: 24, right: 32, zIndex: 20, padding: '10px 28px', background: '#C2A86C', color: '#232526', fontWeight: 700, borderRadius: 9999, boxShadow: '0 2px 12px #C2A86C55', fontSize: '1.15rem', textDecoration: 'none', transition: 'all 0.2s', border: 'none'}} onMouseOver={e => {e.currentTarget.style.background='#F7F5F2';e.currentTarget.style.color='#2a1a4d';}} onMouseOut={e => {e.currentTarget.style.background='#C2A86C';e.currentTarget.style.color='#232526';}}>AI Hiring Events &rarr;</a>
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#18191a", margin: "32px 0 16px 0", textShadow: "0 2px 16px #ffd70044" }}>
        <span style={{ color: '#ffd700' }}>New AI Jobs & Careers</span>
      </h1>
      <section style={{ maxWidth: 900, background: '#f5faff', borderRadius: 16, padding: 24, boxShadow: '0 2px 16px #90caf922', marginBottom: 32 }}>
        <p style={{ color: '#18191a', fontSize: '1.08rem', marginBottom: 18 }}>
          Discover emerging jobs and careers created by AI and automation. Each role includes a description, required skills, industries, example employers, and training resources to help you prepare for the future workforce.
        </p>
        {NEW_AI_JOBS.map((job) => (
          <div key={job.title} style={{ background: '#fff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #90caf922', marginBottom: 24 }}>
            <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 6 }}>{job.title}</h2>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Description:</strong> {job.description}</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Required Skills:</strong> {job.skills.join(", ")}</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Industries:</strong> {job.industries.join(", ")}</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Example Employers:</strong> {job.employers.join(", ")}</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Training Resources:</strong> {job.resources.join(", ")}</div>
            <div style={{ color: '#ffd700', fontSize: '1rem', marginBottom: 4 }}><strong>Typical Pay Range:</strong> {job.pay}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
