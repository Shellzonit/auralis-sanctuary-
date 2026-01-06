import React from "react";

export default function UserDashboard() {
  return (
    <main style={{ maxWidth: 700, margin: "32px auto", padding: "24px", background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #18191a22" }}>
      <h1 style={{ color: "#7b2ff2", fontSize: "2rem", fontWeight: 700 }}>Your Dashboard</h1>
      <p>Welcome! Here you can manage your job alerts, resume, and saved jobs.</p>
      <ul style={{ margin: "16px 0", fontSize: "1.1rem" }}>
        <li>View and edit your resume</li>
        <li>Manage job alerts and notifications</li>
        <li>See saved jobs and applications</li>
      </ul>
    </main>
  );
}
