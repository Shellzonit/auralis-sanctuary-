"use client";
import React from "react";

export default function AIHiringEventsPage() {
  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a141a 0%, #18191a 60%, #2a1a4d 100%)", fontFamily: "Inter, Arial, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 1rem", position: 'relative' }}>
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffd700", margin: "32px 0 16px 0", textShadow: "0 2px 16px #6a1a4d" }}>
        Upcoming AI Hiring Events
      </h1>
      <section style={{ maxWidth: 900, background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: 24, boxShadow: "0 2px 16px #6a1b9a22", marginBottom: 32 }}>
        <p style={{ color: "#fff8dc", fontSize: "1.08rem", marginBottom: 18 }}>
          Stay up to date with the latest AI and tech hiring events, job fairs, and networking opportunities. Find event details, registration links, tips for success, and resources to help you connect with top employers in the AI industry.
        </p>
        <ul style={{ color: "#fff8dc", fontSize: "1rem", marginBottom: 18 }}>
          <li><strong>AI Career Expo 2026</strong> – March 15, 2026, San Francisco, CA<br />
            <span style={{ color: '#ffd700' }}>Meet 50+ AI employers, attend resume workshops, and join live panel discussions.<br />
            <a href="#" style={{ color: '#C2A86C', textDecoration: 'underline' }}>Register (coming soon)</a></span>
          </li>
          <li style={{ marginTop: 12 }}><strong>Virtual AI Talent Fair</strong> – April 10, 2026, Online<br />
            <span style={{ color: '#ffd700' }}>Connect with recruiters from anywhere, join virtual interviews, and access exclusive job postings.<br />
            <a href="#" style={{ color: '#C2A86C', textDecoration: 'underline' }}>Registration opens February</a></span>
          </li>
          <li style={{ marginTop: 12 }}><strong>Women in AI Hiring Summit</strong> – May 5, 2026, New York, NY<br />
            <span style={{ color: '#ffd700' }}>Empowering women in AI: networking, mentorship, and hiring sessions with leading companies.<br />
            <a href="#" style={{ color: '#C2A86C', textDecoration: 'underline' }}>More info soon</a></span>
          </li>
          <li style={{ marginTop: 12 }}><strong>AI Startups Job Connect</strong> – June 20, 2026, Austin, TX<br />
            <span style={{ color: '#ffd700' }}>Meet founders, discover startup roles, and pitch your skills in lightning interviews.<br />
            <a href="#" style={{ color: '#C2A86C', textDecoration: 'underline' }}>Details TBA</a></span>
          </li>
        </ul>
        <div style={{ color: '#fff8dc', fontSize: '1rem', marginBottom: 18 }}>
          <strong>How to Prepare:</strong>
          <ul style={{ marginTop: 8, marginBottom: 8 }}>
            <li>Update your resume and LinkedIn profile</li>
            <li>Research companies attending the event</li>
            <li>Prepare a short personal pitch and questions for recruiters</li>
            <li>Bring multiple copies of your resume (for in-person events)</li>
            <li>Dress professionally and test your tech setup for virtual events</li>
          </ul>
        </div>
        <div style={{ color: '#fff8dc', fontSize: '1rem', marginBottom: 18 }}>
          <strong>What to Expect:</strong>
          <ul style={{ marginTop: 8, marginBottom: 8 }}>
            <li>Live Q&A sessions with AI leaders</li>
            <li>Workshops on resume writing and interview skills</li>
            <li>Networking lounges and breakout rooms</li>
            <li>On-the-spot interviews and job offers</li>
            <li>Access to exclusive job boards and resources</li>
          </ul>
        </div>
        <div style={{ color: '#fff8dc', fontSize: '1rem', marginBottom: 18 }}>
          <strong>Resources:</strong>
          <ul style={{ marginTop: 8, marginBottom: 8 }}>
            <li><a href="https://ai-jobs.net/" target="_blank" rel="noopener noreferrer" style={{ color: '#C2A86C', textDecoration: 'underline' }}>AI Jobs Board</a></li>
            <li><a href="https://www.meetup.com/topics/artificial-intelligence/" target="_blank" rel="noopener noreferrer" style={{ color: '#C2A86C', textDecoration: 'underline' }}>AI Meetups</a></li>
            <li><a href="https://www.eventbrite.com/d/online/ai-jobs/" target="_blank" rel="noopener noreferrer" style={{ color: '#C2A86C', textDecoration: 'underline' }}>Eventbrite AI Job Events</a></li>
            <li><a href="https://www.linkedin.com/jobs/ai-jobs/" target="_blank" rel="noopener noreferrer" style={{ color: '#C2A86C', textDecoration: 'underline' }}>LinkedIn AI Jobs</a></li>
          </ul>
        </div>
      </section>
      <section style={{ maxWidth: 900, marginBottom: 24, background: "rgba(255,255,255,0.10)", borderRadius: 12, padding: 18, boxShadow: "0 2px 8px #6a1b9a22" }}>
        <h2 style={{ color: "#ffd700", fontSize: "1.2rem", marginBottom: 8 }}>Why Attend AI Hiring Events?</h2>
        <ul style={{ color: "#fff8dc", fontSize: "1rem" }}>
          <li>Meet recruiters and hiring managers from top AI companies</li>
          <li>Learn about the latest roles and skills in demand</li>
          <li>Network with other job seekers and professionals</li>
          <li>Attend workshops and resume review sessions</li>
          <li>Get feedback and tips from industry experts</li>
        </ul>
      </section>
    </main>
  );
}
