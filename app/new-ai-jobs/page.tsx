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
    <main style={{ minHeight: '100vh', background: '#f5f3fd', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
      <section style={{ width: '100%', maxWidth: 700, margin: '3rem auto 2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)', borderRadius: 24, boxShadow: '0 4px 32px #18191a22', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <h1 style={{ color: 'rgba(255,255,255,0.97)', fontSize: '2.2rem', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1.5px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.18, paddingBottom: '0.18em' }}>AI Jobs & Careers</h1>
        <div style={{ color: '#ece9fc', fontSize: '1.15rem', fontWeight: 500, marginTop: 10, textAlign: 'center', maxWidth: 500, textShadow: '0 1px 6px #18191a55' }}>
          Discover emerging jobs and careers created by AI and automation. Each role includes a description, required skills, industries, example employers, and training resources to help you prepare for the future workforce.
        </div>
      </section>
      <section style={{ background: '#fff', borderRadius: 16, padding: '32px 40px', maxWidth: 900, margin: '0 auto 48px auto', boxShadow: '0 2px 16px #18191a22', color: '#18191a', textAlign: 'center', fontSize: '1.12rem', lineHeight: 1.7, border: '1.5px solid #e0d6f7' }}>
        {NEW_AI_JOBS.map((job) => (
          <div key={job.title} style={{ background: '#f5faff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #90caf922', marginBottom: 24 }}>
            <h2 style={{ color: '#7b2ff2', fontSize: '1.2rem', marginBottom: 6 }}>{job.title}</h2>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Description:</strong> {job.description}</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Required Skills:</strong> {job.skills.join(', ')}</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Industries:</strong> {job.industries.join(', ')}</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Example Employers:</strong> {job.employers.join(', ')}</div>
            <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Training Resources:</strong> {job.resources.join(', ')}</div>
            <div style={{ color: '#7b2ff2', fontSize: '1rem', marginBottom: 4 }}><strong>Typical Pay Range:</strong> {job.pay}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
