"use client";

import React from "react";

const COURSES = [
  { name: "AI For Everyone (Coursera)", url: "https://www.coursera.org/learn/ai-for-everyone", desc: "Beginner-friendly introduction to AI concepts and real-world impact." },
  { name: "Deep Learning Specialization (Coursera)", url: "https://www.coursera.org/specializations/deep-learning", desc: "Comprehensive deep learning path by Andrew Ng." },
  { name: "Machine Learning Crash Course (Google)", url: "https://developers.google.com/machine-learning/crash-course", desc: "Free, hands-on ML basics with TensorFlow." },
  { name: "Intro to Machine Learning (Udacity)", url: "https://www.udacity.com/course/intro-to-machine-learning--ud120", desc: "Project-based ML course for beginners." },
  { name: "Fast.ai Practical Deep Learning", url: "https://course.fast.ai/", desc: "Hands-on deep learning for coders, free and open." }
];

const CERTS = [
  { name: "Google Professional Machine Learning Engineer", url: "https://cloud.google.com/certification/machine-learning-engineer" },
  { name: "Microsoft Certified: Azure AI Engineer Associate", url: "https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/" },
  { name: "IBM AI Engineering Professional Certificate", url: "https://www.coursera.org/professional-certificates/ai-engineer" },
  { name: "DeepLearning.AI TensorFlow Developer", url: "https://www.coursera.org/professional-certificates/tensorflow-in-practice" }
];

const PATHS = [
  { name: "AI Engineer", steps: ["Learn Python basics", "Study ML algorithms", "Build projects with scikit-learn, TensorFlow, or PyTorch", "Contribute to open source", "Earn a certification"] },
  { name: "AI for Creatives", steps: ["Explore generative art tools", "Learn prompt engineering", "Experiment with AI music and writing", "Build a creative AI portfolio"] },
  { name: "AI for Business", steps: ["Understand AI use cases", "Take business-focused AI courses", "Learn data analysis", "Apply AI to real business problems"] }
];

const PROJECTS = [
  "Build a chatbot for your website",
  "Create an image classifier",
  "Analyze a public dataset (Kaggle, UCI, etc.)",
  "Experiment with generative AI art or music",
  "Contribute to an open source AI project"
];

const TOOLS = [
  "TensorFlow", "PyTorch", "scikit-learn", "Hugging Face Transformers", "OpenCV", "Keras"
];

const COMMUNITIES = [
  { name: "Kaggle", url: "https://www.kaggle.com/" },
  { name: "AI Stack Exchange", url: "https://ai.stackexchange.com/" },
  { name: "r/MachineLearning", url: "https://www.reddit.com/r/MachineLearning/" },
  { name: "DataTau", url: "https://www.datatau.com/" }
];

const EVENTS = [
  { name: "AI Hackathons (Devpost)", url: "https://devpost.com/hackathons?challenge_type=AI" },
  { name: "AI Webinars (Eventbrite)", url: "https://www.eventbrite.com/d/online/ai-webinar/" }
];

export default function TrainingHubPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a141a 0%, #18191a 60%, #2a1a4d 100%)",
        fontFamily: "Inter, Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffd700", margin: "32px 0 16px 0", textShadow: "0 2px 16px #2a1a4d" }}>
        AI Training Hub
      </h1>
      <p style={{ color: '#fff8dc', fontSize: '1.15rem', maxWidth: 700, textAlign: 'center', marginBottom: 32 }}>
        Start or advance your AI journey! Explore curated courses, certifications, learning paths, project ideas, and community resources for every skill level.
      </p>
      <section style={{ width: '100%', maxWidth: 800, display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 14, padding: 24 }}>
          <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 8 }}>Featured Online Courses</h2>
          <ul style={{ color: '#fff8dc' }}>
            {COURSES.map(c => <li key={c.name}><a href={c.url} target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700', fontWeight: 600 }}>{c.name}</a>: {c.desc}</li>)}
          </ul>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 14, padding: 24 }}>
          <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 8 }}>Certification Programs</h2>
          <ul style={{ color: '#fff8dc' }}>
            {CERTS.map(c => <li key={c.name}><a href={c.url} target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700', fontWeight: 600 }}>{c.name}</a></li>)}
          </ul>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 14, padding: 24 }}>
          <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 8 }}>Learning Paths</h2>
          {PATHS.map(p => (
            <div key={p.name} style={{ marginBottom: 12 }}>
              <strong style={{ color: '#ffd700' }}>{p.name}:</strong>
              <ul style={{ color: '#fff8dc', marginLeft: 18 }}>
                {p.steps.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 14, padding: 24 }}>
          <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 8 }}>Project Ideas & Challenges</h2>
          <ul style={{ color: '#fff8dc' }}>
            {PROJECTS.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 14, padding: 24 }}>
          <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 8 }}>Popular AI Tools & Libraries</h2>
          <ul style={{ color: '#fff8dc' }}>
            {TOOLS.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 14, padding: 24 }}>
          <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 8 }}>Community & Mentorship</h2>
          <ul style={{ color: '#fff8dc' }}>
            {COMMUNITIES.map(c => <li key={c.name}><a href={c.url} target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700', fontWeight: 600 }}>{c.name}</a></li>)}
          </ul>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 14, padding: 24 }}>
          <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 8 }}>Events & Workshops</h2>
          <ul style={{ color: '#fff8dc' }}>
            {EVENTS.map(e => <li key={e.name}><a href={e.url} target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700', fontWeight: 600 }}>{e.name}</a></li>)}
          </ul>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 14, padding: 24 }}>
          <h2 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: 8 }}>Career Prep</h2>
          <ul style={{ color: '#fff8dc' }}>
            <li>Resume writing tips and templates (see Mr. Job Nanny in the chatbot demo!)</li>
            <li>Interview prep resources for AI/data roles</li>
            <li>How to build a portfolio of AI projects</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
