
"use client";
import React, { useState } from "react";

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

  // --- AI Companies Admin State ---
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [newCompany, setNewCompany] = useState({ name: "", roles: "", url: "" });
  // Fetch companies on mount
  React.useEffect(() => {
    setLoading(true);
    fetch("/api/ai-companies")
      .then(res => res.json())
      .then(data => {
        setCompanies(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load companies");
        setLoading(false);
      });
  }, []);

  // Add new company
  const handleAddCompany = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!newCompany.name || !newCompany.roles || !newCompany.url) {
      setError("All fields required");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/ai-companies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCompany),
    });
    if (res.ok) {
      const added = await res.json();
      setCompanies([added, ...companies]);
      setNewCompany({ name: "", roles: "", url: "" });
    } else {
      setError("Failed to add company");
    }
    setLoading(false);
  };

  // Delete company
  const handleDeleteCompany = async (id: number) => {
    setLoading(true);
    const res = await fetch(`/api/ai-companies/${id}`, { method: "DELETE" });
    if (res.ok) {
      setCompanies(companies.filter((c: any) => c.id !== id));
    } else {
      setError("Failed to delete company");
    }
    setLoading(false);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#181a20", color: "#f7fafc", fontFamily: "Inter, sans-serif", padding: '0 1rem' }}>
      <h1 style={{ color: '#ffe082', fontSize: '2.2rem', margin: '36px 0 18px 0', textAlign: 'center' }}>Admin Dashboard</h1>
      {/* Feedback Section (unchanged) */}
      <h2 style={{ color: '#7fd1b9', fontSize: 20, marginBottom: 24 }}>Feedback Submissions</h2>
      <div style={{ maxWidth: 600, margin: '0 auto', background: '#23242b', border: '1.5px solid #31323a', borderRadius: 16, boxShadow: '0 2px 16px #0004', padding: 24, marginBottom: 48 }}>
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

      {/* AI Companies Admin Section */}
      <h2 style={{ color: '#ffd700', fontSize: 20, marginBottom: 24 }}>Manage AI Companies</h2>
      <form onSubmit={handleAddCompany} style={{ display: 'flex', flexDirection: 'column', gap: 16, background: '#23242b', padding: 32, borderRadius: 16, border: '1.5px solid #ffd700', boxShadow: '0 2px 16px #0004', maxWidth: 600, margin: '0 auto 32px auto' }}>
        <input
          type="text"
          placeholder="Company Name"
          value={newCompany.name}
          onChange={e => setNewCompany({ ...newCompany, name: e.target.value })}
          style={{ padding: '1rem', borderRadius: 10, border: 'none', fontSize: 17, background: '#181a20', color: '#ffd700', outline: 'none' }}
        />
        <input
          type="text"
          placeholder="Roles (comma separated)"
          value={newCompany.roles}
          onChange={e => setNewCompany({ ...newCompany, roles: e.target.value })}
          style={{ padding: '1rem', borderRadius: 10, border: 'none', fontSize: 17, background: '#181a20', color: '#ffd700', outline: 'none' }}
        />
        <input
          type="url"
          placeholder="Careers URL"
          value={newCompany.url}
          onChange={e => setNewCompany({ ...newCompany, url: e.target.value })}
          style={{ padding: '1rem', borderRadius: 10, border: 'none', fontSize: 17, background: '#181a20', color: '#ffd700', outline: 'none' }}
        />
        <button type="submit" style={{ background: '#ffd700', color: '#181a20', fontWeight: 700, fontSize: 17, border: 'none', borderRadius: 10, padding: '0.9rem 1.6rem', cursor: 'pointer', marginTop: 8 }} disabled={loading}>Add Company</button>
        {error && <div style={{ color: '#ff6e6e', marginTop: 8 }}>{error}</div>}
      </form>
      <div style={{ maxWidth: 700, margin: '0 auto', background: '#111', border: '1.5px solid #ffd700', borderRadius: 16, boxShadow: '0 2px 16px #0004', padding: 24 }}>
        <h3 style={{ color: '#ffd700', fontSize: 18, marginBottom: 18 }}>Current AI Companies</h3>
        {loading ? (
          <div style={{ color: '#aaa', textAlign: 'center' }}>Loading...</div>
        ) : companies.length === 0 ? (
          <div style={{ color: '#aaa', textAlign: 'center' }}>No companies yet.</div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {companies.map((c: any) => (
              <li key={c.id} style={{ background: '#18120a', color: '#ffd700', border: '1px solid #ffd700', borderRadius: 10, marginBottom: 16, padding: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span style={{ fontWeight: 700, color: '#ffe082', fontSize: 18 }}>{c.name}</span>
                <span style={{ fontSize: 15 }}>{c.roles}</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ color: '#ffe082', textDecoration: 'underline', fontSize: 15 }}>{c.url}</a>
                <button onClick={() => handleDeleteCompany(c.id)} style={{ alignSelf: 'flex-end', background: '#ff6e6e', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 16px', fontWeight: 600, marginTop: 8, cursor: 'pointer' }} disabled={loading}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
