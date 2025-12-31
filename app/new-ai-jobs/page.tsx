"use client";
import React from "react";

const NEW_AI_JOBS = [
  {
    title: "AI Engineer",
    description: "Designs, builds, and deploys AI models and systems for various applications.",
    skills: ["Python", "TensorFlow/PyTorch", "Data Science", "Model Deployment"],
    industries: ["Tech", "Finance", "Healthcare", "Retail"],
    employers: ["Google", "Microsoft", "Startups", "Banks"],
    resources: ["Coursera AI Engineering", "DeepLearning.AI", "edX AI Programs"],
    pay: "$120,000 - $180,000/year"
  },
  {
    title: "Machine Learning Engineer",
    description: "Develops machine learning algorithms and integrates them into products and services.",
    skills: ["Machine Learning", "Programming", "Data Analysis", "Cloud Platforms"],
    industries: ["Tech", "Automotive", "Healthcare"],
    employers: ["Tesla", "Amazon", "Healthcare Providers"],
    resources: ["Udacity ML Nanodegree", "Kaggle Courses"],
    pay: "$115,000 - $170,000/year"
  },
  {
    title: "AI Product Manager",
    description: "Leads the development and launch of AI-powered products, bridging tech and business.",
    skills: ["Product Management", "AI Concepts", "Business Strategy", "User Research"],
    industries: ["Tech", "Finance", "Retail"],
    employers: ["Meta", "FinTechs", "Retail Chains"],
    resources: ["Product School AI PM", "LinkedIn Learning"],
    pay: "$130,000 - $200,000/year"
  },
  {
    title: "Prompt Engineer",
    description: "Crafts effective prompts for generative AI models to optimize outputs and user experience.",
    skills: ["Language Skills", "AI Model Understanding", "Creativity", "Testing"],
    industries: ["Tech", "Media", "Education"],
    employers: ["OpenAI", "Content Studios", "EdTech"],
    resources: ["OpenAI Prompt Engineering Guide", "YouTube Tutorials"],
    pay: "$100,000 - $160,000/year"
  },
  {
    title: "AI Ethicist",
    description: "Ensures AI systems are fair, transparent, and aligned with ethical standards.",
    skills: ["Ethics", "Policy", "AI Governance", "Communication"],
    industries: ["Tech", "Government", "Healthcare"],
    employers: ["NGOs", "Tech Giants", "Universities"],
    resources: ["AI Ethics MOOC", "OECD AI Policy"],
    pay: "$90,000 - $140,000/year"
  },
  {
    title: "Generative Content Creator",
    description: "Uses AI tools to produce text, images, video, and music for media and marketing.",
    skills: ["Content Creation", "AI Tools", "Storytelling", "Editing"],
    industries: ["Media", "Marketing", "Entertainment"],
    employers: ["Agencies", "Studios", "Brands"],
    resources: ["Canva AI Courses", "Adobe Firefly Tutorials"],
    pay: "$60,000 - $120,000/year"
  },
  {
    title: "AI Trainer",
    description: "Trains AI models by labeling data, providing feedback, and refining outputs.",
    skills: ["Attention to Detail", "Domain Knowledge", "Data Labeling"],
    industries: ["Tech", "Healthcare", "Finance"],
    employers: ["Annotation Firms", "Tech Companies"],
    resources: ["Appen Training", "Scale AI Resources"],
    pay: "$40,000 - $80,000/year"
  },
  {
    title: "Robotics Technician",
    description: "Maintains and repairs robots used in manufacturing, logistics, and healthcare.",
    skills: ["Mechanical Skills", "Programming", "Diagnostics"],
    industries: ["Manufacturing", "Logistics", "Healthcare"],
    employers: ["Factories", "Hospitals", "Warehouses"],
    resources: ["Robotics Certification", "Community College Programs"],
    pay: "$55,000 - $95,000/year"
  },
  {
    title: "AI Security Analyst",
    description: "Protects AI systems from cyber threats and ensures data privacy.",
    skills: ["Cybersecurity", "AI Systems", "Risk Assessment"],
    industries: ["Tech", "Finance", "Healthcare"],
    employers: ["Banks", "Tech Firms", "Insurers"],
    resources: ["Cybersecurity AI Courses", "SANS Institute"],
    pay: "$110,000 - $160,000/year"
  },
  {
    title: "AI Curriculum Designer",
    description: "Creates educational programs and materials to teach AI concepts and skills.",
    skills: ["Instructional Design", "AI Knowledge", "Teaching"],
    industries: ["Education", "EdTech", "Corporate Training"],
    employers: ["Schools", "EdTech Companies", "Universities"],
    resources: ["edX AI Education", "ISTE AI Curriculum"],
    pay: "$70,000 - $120,000/year"
  }
];

export default function NewAIJobsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a141a 0%, #18191a 60%, #2a1a4d 100%)", fontFamily: "Inter, Arial, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 1rem", position: 'relative' }}>
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffd700", margin: "32px 0 16px 0", textShadow: "0 2px 16px #6a1a4d" }}>
        New AI Jobs & Careers
      </h1>
      <section style={{ maxWidth: 900, background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: 24, boxShadow: "0 2px 16px #6a1b9a22", marginBottom: 32 }}>
        <p style={{ color: "#fff8dc", fontSize: "1.08rem", marginBottom: 18 }}>
          Discover emerging jobs and careers created by AI and automation. Each role includes a description, required skills, industries, example employers, and training resources to help you prepare for the future workforce.
        </p>
        {NEW_AI_JOBS.map((job) => (
          <div key={job.title} style={{ background: "rgba(106,27,154,0.10)", borderRadius: 12, padding: 18, boxShadow: "0 2px 8px #6a1b9a22", marginBottom: 24 }}>
            <h2 style={{ color: "#ffd700", fontSize: "1.2rem", marginBottom: 6 }}>{job.title}</h2>
            <div style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 4 }}><strong>Description:</strong> {job.description}</div>
            <div style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 4 }}><strong>Required Skills:</strong> {job.skills.join(", ")}</div>
            <div style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 4 }}><strong>Industries:</strong> {job.industries.join(", ")}</div>
            <div style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 4 }}><strong>Example Employers:</strong> {job.employers.join(", ")}</div>
            <div style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 4 }}><strong>Training Resources:</strong> {job.resources.join(", ")}</div>
            <div style={{ color: "#ffd700", fontSize: "1rem", marginBottom: 4 }}><strong>Typical Pay Range:</strong> {job.pay}</div>
          </div>
        ))}
      </section>
      <section style={{ maxWidth: 900, marginBottom: 24, background: "rgba(255,255,255,0.10)", borderRadius: 12, padding: 18, boxShadow: "0 2px 8px #6a1b9a22" }}>
        <h2 style={{ color: "#ffd700", fontSize: "1.2rem", marginBottom: 8 }}>How to Prepare</h2>
        <ul style={{ color: "#fff8dc", fontSize: "1rem" }}>
          <li>Take online courses in AI, machine learning, and data science</li>
          <li>Build projects and portfolios to showcase your skills</li>
          <li>Network with professionals in emerging AI fields</li>
          <li>Stay updated on industry trends and new roles</li>
        </ul>
      </section>
    </main>
  );
}
