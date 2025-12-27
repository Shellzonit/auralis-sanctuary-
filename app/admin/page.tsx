"use client";
import { useState } from "react";

// Demo: In-memory feedback list (replace with real data source later)
const demoFeedback = [
  { id: 1, feedback: "Love the design!", email: "user1@example.com" },
  { id: 2, feedback: "Please add more art features.", email: "" },
  { id: 3, feedback: "Found a bug in chat.", email: "user2@example.com" },
];

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check (replace with real auth in production)
    if (password === "sanctuaryadmin") setAuthenticated(true);
    else alert("Incorrect password");
  };

  if (!authenticated) {
    return (
      <main style={{ minHeight: "100vh", background: "#181a20", color: "#f7fafc", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ color: '#ffe082', fontSize: '2rem', marginBottom: 24 }}>Admin Login</h1>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16, background: '#23242b', padding: 32, borderRadius: 16, border: '1.5px solid #31323a', boxShadow: '0 2px 16px #0004' }}>
          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ padding: '1rem', borderRadius: 10, border: 'none', fontSize: 17, background: '#181a20', color: '#f7fafc', outline: 'none' }}
          />
          <button type="submit" style={{ background: '#ffe082', color: '#23242b', fontWeight: 700, fontSize: 17, border: 'none', borderRadius: 10, padding: '0.9rem 1.6rem', cursor: 'pointer', marginTop: 8 }}>Login</button>
        </form>
      </main>
    );
  }

  return (
    <main style={{ minHeight: "100vh", background: "#181a20", color: "#f7fafc", fontFamily: "Inter, sans-serif", padding: '0 1rem' }}>
      <h1 style={{ color: '#ffe082', fontSize: '2.2rem', margin: '36px 0 18px 0', textAlign: 'center' }}>Admin Dashboard</h1>
      <h2 style={{ color: '#7fd1b9', fontSize: 20, marginBottom: 24 }}>Feedback Submissions</h2>
      <div style={{ maxWidth: 600, margin: '0 auto', background: '#23242b', border: '1.5px solid #31323a', borderRadius: 16, boxShadow: '0 2px 16px #0004', padding: 24 }}>
        {demoFeedback.length === 0 ? (
          <div style={{ color: '#aaa', textAlign: 'center' }}>No feedback yet.</div>
        ) : (
          demoFeedback.map(fb => (
            <div key={fb.id} style={{ borderBottom: '1px solid #31323a', padding: '18px 0' }}>
              <div style={{ fontSize: 16, color: '#ffe082', marginBottom: 6 }}>{fb.feedback}</div>
              {fb.email && <div style={{ fontSize: 14, color: '#7fd1b9' }}>From: {fb.email}</div>}
            </div>
          ))
        )}
      </div>
    </main>
  );
}
