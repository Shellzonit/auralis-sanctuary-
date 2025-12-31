"use client";
import React from "react";

// Example AI-related questions for preview
const aiQuestions = [
  {
    question: "How will AI impact creative jobs in 2026?",
    date: "2025-12-31",
    board: "AI Careers"
  },
  {
    question: "What are the best ways to learn prompt engineering?",
    date: "2025-12-31",
    board: "AI Learning"
  },
  {
    question: "Will AI replace software developers or just change their roles?",
    date: "2026-01-01",
    board: "Future of Work"
  },
  {
    question: "How can artists use generative AI tools ethically?",
    date: "2026-01-01",
    board: "AI & Art"
  },
  {
    question: "What are the most in-demand AI skills for 2026?",
    date: "2026-01-01",
    board: "AI Careers"
  },
  {
    question: "How do I get started with open-source AI models?",
    date: "2025-12-31",
    board: "AI Learning"
  }
];

export default function ChatPage() {
  // Filter for today and tomorrow
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dateStrings = [
    today.toISOString().slice(0, 10),
    tomorrow.toISOString().slice(0, 10)
  ];
  const filtered = aiQuestions.filter(q => dateStrings.includes(q.date));

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a141a 0%, #18191a 60%, #2a1a4d 100%)", fontFamily: "Inter, Arial, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 1rem" }}>
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffd700", margin: "32px 0 16px 0", textShadow: "0 2px 16px #6a1a4d" }}>
        Sneak Peek: AI Conversations
      </h1>
      <p style={{ color: "#fff8dc", fontSize: "1.08rem", marginBottom: 18, maxWidth: 700, textAlign: 'center' }}>
        Explore trending questions about AI from across our message boards. Here’s what people are asking today and tomorrow:
      </p>
      <section style={{ maxWidth: 700, width: '100%', background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: 24, boxShadow: "0 2px 16px #6a1b9a22", marginBottom: 32 }}>
        {filtered.length === 0 ? (
          <div style={{ color: '#ffd700', fontSize: '1.1rem', textAlign: 'center' }}>No AI questions found for today or tomorrow.</div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {filtered.map((q, i) => (
              <li key={i} style={{ marginBottom: 22, background: '#18191a', borderRadius: 10, padding: '16px 20px', boxShadow: '0 2px 8px #ffd70022' }}>
                <div style={{ color: '#ffd700', fontWeight: 700, fontSize: '1.08rem' }}>{q.question}</div>
                <div style={{ color: '#fff8dc', fontSize: '0.98rem', marginTop: 6 }}>
                  <span style={{ color: '#C2A86C', fontWeight: 600 }}>{q.board}</span> &nbsp;|&nbsp; <span style={{ color: '#ffd700' }}>{q.date}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
      <div style={{ color: '#fff8dc', fontSize: '1rem', marginTop: 24, textAlign: 'center', maxWidth: 600 }}>
        <strong>Want to join the conversation?</strong> Stay tuned for our upcoming message boards and chat features!
      </div>
    </main>
  );
}
"use client";



import { useEffect, useRef, useState, FormEvent } from "react";



export default function MessageBoardPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [tempUsername, setTempUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Fetch all messages on mount
  useEffect(() => {
    async function fetchMessages() {
      setLoading(true);
      try {
        const res = await fetch("/api/message-board");
        const data = await res.json();
        setMessages(data || []);
      } catch {
        setMessages([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMessages();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  async function sendMessage(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || !username.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/message-board", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, message: input }),
      });
      const data = await res.json();
      if (data && !data.error) {
        setMessages((prev) => [...prev, data]);
        setInput("");
      } else {
        alert(data.error || "Failed to post message");
      }
    } catch {
      alert("Failed to post message");
    } finally {
      setLoading(false);
    }
  }

  function handleSetUsername(e: FormEvent) {
    e.preventDefault();
    if (tempUsername.trim()) {
      setUsername(tempUsername.trim());
    }
  }

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-6 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] shadow-2xl rounded-3xl border border-cyan-400/30 backdrop-blur-xl relative overflow-hidden">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-cyan-300 tracking-widest drop-shadow-glow">General Message Board</h1>
      {!username ? (
        <form onSubmit={handleSetUsername} className="flex gap-3 mb-8 justify-center">
          <input
            className="border-2 border-cyan-400/60 bg-black/40 text-cyan-100 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300/80 shadow-inner shadow-cyan-400/10 placeholder-cyan-400/60 transition-all duration-200"
            value={tempUsername}
            onChange={(e) => setTempUsername(e.target.value)}
            placeholder="Enter your username..."
            autoFocus
          />
          <button type="submit" className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-cyan-300 hover:to-purple-400 transition-all duration-200 border border-cyan-300/60">Join</button>
        </form>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto bg-white/10 rounded-2xl shadow-xl p-6 mb-4 border border-cyan-400/20 backdrop-blur-md relative">
            {loading && <div className="text-cyan-200 text-center">Loading messages...</div>}
            {messages.map((msg, i) => (
              <div key={i} className="mb-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-semibold text-cyan-200 text-lg drop-shadow-glow">{msg.username || "Anonymous"}</span>
                  <span className="text-xs text-cyan-400/80 font-mono">{msg.inserted_at ? new Date(msg.inserted_at).toLocaleString() : ""}</span>
                </div>
                <div className="bg-cyan-900/30 border border-cyan-400/20 rounded-xl px-4 py-2 text-cyan-100 shadow-inner">
                  {msg.message}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <form onSubmit={sendMessage} className="flex gap-3 mt-2">
            <input
              className="flex-1 border-2 border-cyan-400/60 bg-black/40 text-cyan-100 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300/80 shadow-inner shadow-cyan-400/10 placeholder-cyan-400/60 transition-all duration-200"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              autoFocus
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()} className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-cyan-300 hover:to-purple-400 transition-all duration-200 border border-cyan-300/60">Post</button>
          </form>
        </>
      )}
      <div className="absolute inset-0 pointer-events-none z-0" />
    </div>
  );
}