
"use client";
import React, { useState, useEffect, FormEvent } from "react";

export default function SharingPage() {
  const [content, setContent] = useState("");

  // Load draft from localStorage on mount
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('sharing_draft') : null;
    if (saved) setContent(saved);
  }, []);

  // Save draft to localStorage on change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sharing_draft', content);
    }
  }, [content]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  // Fetch messages from API on mount
  useEffect(() => {
    setLoading(true);
    fetch("/api/messages")
      .then(async (res) => {
        if (!res.ok) {
          const err = await res.json();
          setError(err.error || "Failed to fetch messages");
          setLoading(false);
          return;
        }
        return res.json();
      })
      .then((data) => {
        if (data) setMessages(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch messages");
        setLoading(false);
      });
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg("");
    if (!content.trim()) {
      setMsg("Please enter some content.");
      return;
    }
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      if (res.ok) {
        const newMsg = await res.json();
        setMessages((msgs) => [newMsg, ...msgs]);
        setContent("");
        setMsg("Message posted!");
        setTimeout(() => setMsg(""), 2000);
        if (typeof window !== 'undefined') {
          localStorage.removeItem('sharing_draft');
        }
      } else {
        const err = await res.json();
        setMsg(err.error || "Failed to post message.");
        console.error("Failed to post message:", err);
      }
    } catch (e) {
      setMsg("Failed to post message.");
      console.error("Failed to post message:", e);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#181a20",
        color: "#ffe082",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <h1
        style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: '2.5rem',
          fontWeight: 900,
          color: '#ffe082',
          margin: '48px 0 24px 0',
          textShadow: '0 2px 24px #000a',
          letterSpacing: 1.5,
        }}
      >
        Message Board
      </h1>
      <p style={{ color: '#f7fafc', opacity: 0.85, fontSize: 18, marginBottom: 32, textAlign: 'center', maxWidth: 600 }}>
        Share anything! Post a message, a link, or a creative thought below.
      </p>
      <form onSubmit={handleSubmit} style={{ background: '#23242b', border: '2px solid #ffe082', borderRadius: 16, padding: 24, marginBottom: 24, width: '100%', maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <textarea
          placeholder="Write your message or link here..."
          value={content}
          onChange={e => setContent(e.target.value)}
          required
          rows={3}
          style={{ padding: 8, borderRadius: 8, border: '1px solid #ffe082', fontSize: 16, resize: 'vertical' }}
        />
        <button type="submit" style={{ background: '#ffe082', color: '#181a20', fontWeight: 700, borderRadius: 8, padding: 10, fontSize: 17, border: 'none', cursor: 'pointer' }}>Share</button>
        {msg && <div style={{ color: msg.includes('posted') ? 'lightgreen' : 'salmon', marginTop: 8 }}>{msg}</div>}
      </form>
      <div style={{ width: '100%', maxWidth: 600, marginBottom: 36 }}>
        <h3 style={{ color: '#ffe082', fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Messages</h3>
        {loading ? (
          <div style={{ color: '#aaa', textAlign: 'center' }}>Loading...</div>
        ) : error ? (
          <div style={{ color: 'salmon', textAlign: 'center' }}>{error}</div>
        ) : messages.length === 0 ? (
          <div style={{ color: '#aaa', textAlign: 'center' }}>No messages yet.</div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {messages.map((m, idx) => (
              <li key={m.id || idx} style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ fontWeight: 500, color: '#ffe082', fontSize: 16, marginBottom: 2 }}>{m.content}</div>
                {m.created_at && (
                  <div style={{ fontSize: 13, color: '#aaa' }}>{new Date(m.created_at).toLocaleString()}</div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
