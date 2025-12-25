"use client";

import { useState, FormEvent } from "react";
export default function JobsPage() {
  const [messages, setMessages] = useState<{ text: string }[]>([]);
  const [input, setInput] = useState("");

  function sendMessage(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input }]);
    setInput("");
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    >
      <h1>Basic In‑Memory Chat</h1>

      <div style={{ minHeight: 120, marginBottom: 16 }}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              padding: 4,
              background: "#f9f9f9",
              margin: "4px 0",
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
          placeholder="Type a message..."
          style={{ flex: 1 }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
"use client";

import { useState, FormEvent } from "react";

export default function JobsPage() {
  const [messages, setMessages] = useState<{ text: string }[]>([]);
  const [input, setInput] = useState("");

  function sendMessage(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input }]);
    setInput("");
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    >
      <h1>Basic In‑Memory Chat</h1>

      <div style={{ minHeight: 120, marginBottom: 16 }}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              padding: 4,
              background: "#f9f9f9",
              margin: "4px 0",
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
          placeholder="Type a message..."
          style={{ flex: 1 }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

import { useState, FormEvent } from "react";

export default function JobsChat() {
  const [messages, setMessages] = useState<{ text: string }[]>([]);
  const [input, setInput] = useState("");

  function sendMessage(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input }]);
    setInput("");
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h1>Basic In-Memory Chat</h1>
      <div style={{ minHeight: 120, marginBottom: 16 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ padding: 4, background: "#f9f9f9", margin: "4px 0", borderRadius: 4 }}>{m.text}</div>
        ))}
      </div>
      <form onSubmit={sendMessage} style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "8px 16px", borderRadius: 4, background: "#be123c", color: "#fff", border: "none" }}>Send</button>
      </form>

    if (!input.trim()) return;
    setMessages([...messages, { text: input }]);
    setInput("");
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h1>Basic In-Memory Chat</h1>
      <div style={{ minHeight: 120, marginBottom: 16 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ padding: 4, background: "#f9f9f9", margin: "4px 0", borderRadius: 4 }}>{m.text}</div>
        ))}
      </div>
      <form onSubmit={sendMessage} style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "8px 16px", borderRadius: 4, background: "#be123c", color: "#fff", border: "none" }}>Send</button>
      </form>
    </div>
  );
}
import { useState, FormEvent } from "react";

export default function JobsChat() {
  const [messages, setMessages] = useState<{ text: string }[]>([]);
  const [input, setInput] = useState("");

  function sendMessage(e: FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input }]);
    setInput("");
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h1>Basic In-Memory Chat</h1>
      <div style={{ minHeight: 120, marginBottom: 16 }}>
        {messages.map((m, i) => (
          <div key={i} style={{ padding: 4, background: "#f9f9f9", margin: "4px 0", borderRadius: 4 }}>{m.text}</div>
        ))}
      </div>
      <form onSubmit={sendMessage} style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "8px 16px", borderRadius: 4, background: "#be123c", color: "#fff", border: "none" }}>Send</button>
      </form>
    </div>
  );
}


import { useState, FormEvent } from "react";

export default function JobsPage() {
  const [messages, setMessages] = useState<{ text: string }[]>([]);
  const [input, setInput] = useState("");

  function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input }]);
    setInput("");
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    >
      <h1>Basic In‑Memory Chat</h1>
      <div style={{ minHeight: 120, marginBottom: 16 }}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              padding: 4,
              background: "#f9f9f9",
              margin: "4px 0",
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
          placeholder="Type a message..."
          style={{ flex: 1 }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

