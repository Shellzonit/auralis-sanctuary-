"use client";

import { useState } from "react";

export default function JobsPage() {
  const [messages, setMessages] = useState<{ text: string }[]>([]);
  const [input, setInput] = useState("");

  function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input }]);
    setInput("");
  }

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "3rem auto",
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 10,
        background: "#fafafa",
      }}
    >
      <h1 style={{ fontSize: "1.8rem", marginBottom: 20 }}>
        Auralis Sanctuary — Jobs Portal
      </h1>

      <div
        style={{
          minHeight: 150,
          marginBottom: 20,
          padding: 10,
          background: "#fff",
          borderRadius: 6,
          border: "1px solid #eee",
        }}
      >
        {messages.length === 0 && (
          <p style={{ opacity: 0.6 }}>No messages yet. Begin the ritual.</p>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              padding: 6,
              background: "#f3f3f3",
              margin: "6px 0",
              borderRadius: 4,
            }}
          >
            {m.text}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message…"
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 16px",
            borderRadius: 4,
            background: "#be123c",
            color: "#fff",
            fontWeight: 600,
            border: "none",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
