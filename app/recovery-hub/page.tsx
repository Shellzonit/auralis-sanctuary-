"use client";
import React from "react";

export default function RecoveryHubPage() {
  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #6a1b9a 0%, #ffd700 100%)", fontFamily: "Inter, Arial, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 1rem" }}>
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffd700", margin: "32px 0 16px 0", textShadow: "0 2px 16px #6a1b9a" }}>
        Recovery Hub: Support After Job Loss
      </h1>
      <section style={{ maxWidth: 900, background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: 24, boxShadow: "0 2px 16px #6a1b9a22", marginBottom: 32 }}>
        <p style={{ color: "#fff8dc", fontSize: "1.08rem", marginBottom: 18 }}>
          The Recovery Hub provides immediate support and resources for anyone affected by job loss or disruption due to AI and automation. Find help, retraining, and community support to get back on your feet and plan your next steps.
        </p>
        <h2 style={{ color: "#ffd700", fontSize: "1.2rem", marginBottom: 8 }}>Immediate Support</h2>
        <ul style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 18 }}>
          <li><a href="https://www.careeronestop.org/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", fontWeight: 700 }}>Unemployment Benefits & Financial Aid</a></li>
          <li><a href="https://www.mentalhealth.gov/get-help" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", fontWeight: 700 }}>Mental Health & Counseling Services</a></li>
          <li><a href="https://www.usa.gov/help-with-bills" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", fontWeight: 700 }}>Emergency Assistance Programs</a></li>
        </ul>
        <h2 style={{ color: "#ffd700", fontSize: "1.2rem", marginBottom: 8 }}>Job Search & Placement</h2>
        <ul style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 18 }}>
          <li><a href="https://www.indeed.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", fontWeight: 700 }}>Job Boards (Indeed, LinkedIn, Glassdoor)</a></li>
          <li><a href="https://www.careeronestop.org/JobSearch/JobSearch.aspx" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", fontWeight: 700 }}>Local Job Centers & Career Fairs</a></li>
          <li><a href="https://www.resumebuilder.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", fontWeight: 700 }}>Resume & Interview Help</a></li>
        </ul>
        <h2 style={{ color: "#ffd700", fontSize: "1.2rem", marginBottom: 8 }}>Retraining & Upskilling</h2>
        <ul style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 18 }}>
          <li><a href="/training-hub" style={{ color: "#ffd700", fontWeight: 700 }}>Visit the Training Hub</a> for upskilling and certificate programs</li>
          <li><a href="/transitional-paths" style={{ color: "#ffd700", fontWeight: 700 }}>Explore Transitional Paths</a> for career moves and guidance</li>
          <li><a href="https://www.careeronestop.org/EducationTraining/Scholarships/find-scholarships.aspx" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", fontWeight: 700 }}>Fast-Track Retraining & Scholarships</a></li>
        </ul>
        <h2 style={{ color: "#ffd700", fontSize: "1.2rem", marginBottom: 8 }}>Community & Peer Support</h2>
        <ul style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 18 }}>
          <li><a href="https://www.reddit.com/r/jobs/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", fontWeight: 700 }}>Online Forums & Support Groups</a></li>
          <li><a href="https://www.mentoring.org/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", fontWeight: 700 }}>Mentorship Programs</a></li>
          <li>Read success stories from people who recovered and transitioned</li>
        </ul>
        <h2 style={{ color: "#ffd700", fontSize: "1.2rem", marginBottom: 8 }}>Government & Nonprofit Programs</h2>
        <ul style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 18 }}>
          <li><a href="https://www.dol.gov/agencies/eta" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", fontWeight: 700 }}>U.S. Department of Labor Initiatives</a></li>
          <li><a href="https://www.goodwill.org/jobs-training/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", fontWeight: 700 }}>Goodwill Job Training & Placement</a></li>
          <li><a href="https://www.nelp.org/" target="_blank" rel="noopener noreferrer" style={{ color: "#ffd700", fontWeight: 700 }}>National Employment Law Project</a></li>
        </ul>
        <h2 style={{ color: "#ffd700", fontSize: "1.2rem", marginBottom: 8 }}>FAQ & Guidance</h2>
        <ul style={{ color: "#fff8dc", fontSize: "1rem" }}>
          <li>How do I apply for unemployment or financial aid?</li>
          <li>What retraining options are available for my industry?</li>
          <li>How can I manage stress and plan my next steps?</li>
          <li>Where can I find community support and mentorship?</li>
        </ul>
      </section>
    </main>
  );
}
