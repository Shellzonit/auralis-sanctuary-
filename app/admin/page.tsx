

"use client";
import React, { useState, useEffect } from "react";

export default function AdminPage() {
  const [media, setMedia] = useState<any[]>([]);
  const [mediaError, setMediaError] = useState<string>("");

  useEffect(() => {
    fetch("/api/media")
      .then(async res => {
        if (!res.ok) throw new Error("/api/media fetch failed: " + res.status);
        return res.json();
      })
      .then(setMedia)
      .catch((e) => setMediaError("Failed to load media uploads: " + e.message));
  }, []);

  // Approve content handler (stub)
  const handleApprove = async (id: number) => {
    // TODO: Implement API call to approve content
    alert(`Approved content with id ${id}`);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#181a20", color: "#ffd700", fontFamily: "Inter, sans-serif", padding: 32 }}>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 32, color: '#ffd700', textAlign: 'center', letterSpacing: '.08em', textShadow: '0 2px 16px #000a' }}>
        Sanctuary Admin: Approve Content
      </h1>
      <div style={{ maxWidth: 900, margin: '0 auto', background: '#23242b', border: '1.5px solid #ffd700', borderRadius: 16, boxShadow: '0 2px 16px #0004', padding: 24, marginBottom: 48 }}>
        {mediaError ? (
          <div style={{ color: 'salmon', textAlign: 'center' }}>{mediaError}</div>
        ) : media.length === 0 ? (
          <div style={{ color: '#7fd1b9', textAlign: 'center' }}>
            <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>Media API is working!</div>
            No uploads yet.
          </div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {media.map((m: any) => (
              <li key={m.id} style={{ background: '#18120a', color: '#ffd700', border: '1px solid #ffd700', borderRadius: 10, padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontWeight: 700, color: '#ffe082', fontSize: 17 }}>{m.title}</span>
                <span style={{ fontSize: 15, color: '#7fd1b9' }}>{m.artist}</span>
                <span style={{ fontSize: 14, color: '#ffd700' }}>{m.type}</span>
                {m.type === 'image' ? (
                  <img src={m.url} alt={m.title} style={{ width: '100%', borderRadius: 8, margin: '8px 0' }} />
                ) : (
                  <audio controls src={m.url} style={{ width: '100%', margin: '8px 0' }} />
                )}
                <span style={{ fontSize: 13, color: '#aaa' }}>{new Date(m.created_at).toLocaleString()}</span>
                <button onClick={() => handleApprove(m.id)} style={{ background: '#7fd1b9', color: '#181a20', fontWeight: 700, fontSize: 16, border: 'none', borderRadius: 8, padding: '8px 18px', marginTop: 8, cursor: 'pointer' }}>Approve</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
