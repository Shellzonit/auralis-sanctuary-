
"use client";
import React, { useState } from "react";

// Demo: In-memory feedback list (replace with real data source later)
const demoFeedback = [
  { id: 1, feedback: "Love the design!", email: "user1@example.com" },
  { id: 2, feedback: "Please add more art features.", email: "" },
  { id: 3, feedback: "Found a bug in chat.", email: "user2@example.com" },
export default function AdminPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#181a20", color: "#ffd700", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, fontWeight: 900 }}>
      STATIC ADMIN PAGE IS LOADING<br />
      (If you see this, the file is being loaded by Next.js)
    </main>
  );
}
              ) : sharedLinks.length === 0 ? (
                <div style={{ color: '#aaa', textAlign: 'center' }}>No shared links yet.</div>
              ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {sharedLinks.map((link: any) => (
                    <li key={link.id} style={{ borderBottom: '1px solid #31323a', padding: '14px 0' }}>
                      <div style={{ fontSize: 16, color: '#ffe082', marginBottom: 4 }}>{link.title}</div>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#7fd1b9', textDecoration: 'underline', fontSize: 15 }}>{link.url}</a>
                      <div style={{ fontSize: 13, color: '#aaa', marginTop: 2 }}>{link.created_at ? new Date(link.created_at).toLocaleString() : ''}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
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

      {/* Media Uploads Section */}
      <h2 style={{ color: '#ffd700', fontSize: 20, marginBottom: 24 }}>User Uploads</h2>
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
              </li>
            ))}
          </ul>
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
        <input
          type="text"
          placeholder="Location (e.g. San Antonio, TX)"
          value={newCompany.location}
          onChange={e => setNewCompany({ ...newCompany, location: e.target.value })}
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
                <span style={{ fontSize: 15, color: '#7fd1b9' }}>{c.location || ''}</span>
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
