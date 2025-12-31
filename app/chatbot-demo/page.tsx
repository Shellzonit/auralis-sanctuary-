"use client";
import React, { useState } from "react";

// Simple FAQ and AI job/event recommender chatbot
// Latest announcement/news (update this string as needed)
const ANNOUNCEMENT = "🎉 Happy New Year 2026! Check out our upcoming AI Hiring Events and new job listings for the year ahead. Stay tuned for more updates!";
const FAQS = [
  {
    q: "What is this site about?",
    a: "Auralis Sanctuary is a creative sanctuary focused on AI jobs, hiring events, and resources for the future workforce."
  },
  {
    q: "How do I find AI jobs?",
    a: "Visit the New AI Jobs page for a curated list of emerging roles, required skills, and employers."
  },
  {
    q: "What are AI hiring events?",
    a: "AI hiring events are job fairs and networking opportunities where you can meet recruiters and learn about AI careers."
  },
  {
    q: "How can I prepare for an AI career?",
    a: "Explore our resources, attend events, and check out recommended training programs on the site."
  }
];

const JOB_SUGGESTIONS = [
  {
    keyword: "creative",
    suggestion: "You might enjoy roles like Generative Content Creator or AI Trainer. Check the New AI Jobs page for more."
  },
  {
    keyword: "coding",
    suggestion: "Consider AI Engineer or Machine Learning Engineer. See the New AI Jobs page for details."
  },
  {
    keyword: "education",
    suggestion: "AI Curriculum Designer and Prompt Engineer are great options."
  },
  {
    keyword: "remote",
    suggestion: "Many AI jobs and events are remote-friendly. Look for Remote AI Talent Fair on the events page."
  }
];

export default function ChatbotDemo() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me anything about this site, AI jobs, or events." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  function getBotResponse(userMsg: string) {
    const msg = userMsg.toLowerCase();
    // 1. Announcement/news match
    if (/(news|announcement|update|what's new|latest)/.test(msg)) {
      return ANNOUNCEMENT;
    }
    // 2. FAQ match
    const faq = FAQS.find(f => msg.includes(f.q.toLowerCase().split(" ")[0]));
    if (faq) return faq.a;
    // 3. Job suggestion
    const job = JOB_SUGGESTIONS.find(j => msg.includes(j.keyword));
    if (job) return job.suggestion;
    // 4. Fallback
    return "I'm here to help with questions about AI jobs, events, and resources! Try asking about careers, events, or training. For the latest news, ask 'What's new?'";
  }

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(msgs => [...msgs, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      const botReply = getBotResponse(userMsg);
      setMessages(msgs => [...msgs, { from: "bot", text: botReply }]);
      setLoading(false);
    }, 600);
  };

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a141a 0%, #18191a 60%, #2a1a4d 100%)", fontFamily: "Inter, Arial, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 1rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffd700", margin: "32px 0 16px 0", textShadow: "0 2px 16px #6a1b9a" }}>
        Chatbot Demo: AI Jobs & FAQ
      </h1>
      {/* Announcement/news banner */}
      <div style={{
        background: "#ffd700",
        color: "#232526",
        borderRadius: 10,
        padding: "10px 18px",
        fontWeight: 700,
        marginBottom: 18,
        boxShadow: "0 2px 12px #6a1b9a22",
        maxWidth: 520,
        width: "100%",
        textAlign: "center",
        letterSpacing: 0.1,
      }}>
        {ANNOUNCEMENT}
      </div>
      <section style={{ maxWidth: 500, width: '100%', background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: 24, boxShadow: "0 2px 16px #6a1b9a22", marginBottom: 32 }}>
        <div style={{ minHeight: 220, marginBottom: 16 }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              textAlign: msg.from === "bot" ? "left" : "right",
              color: msg.from === "bot" ? "#ffd700" : "#fff8dc",
              margin: '8px 0',
              fontWeight: msg.from === "bot" ? 700 : 400
            }}>{msg.text}</div>
          ))}
          {loading && <div style={{ color: '#ffd700', fontStyle: 'italic' }}>Bot is typing…</div>}
        </div>
        <form onSubmit={handleSend} style={{ display: 'flex', gap: 8 }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            style={{ flex: 1, borderRadius: 8, border: '1.5px solid #ffd700', padding: '10px 14px', fontSize: '1rem', background: '#18191a', color: '#fff8dc' }}
            placeholder="Type your question..."
            disabled={loading}
            autoFocus
          />
          <button type="submit" style={{ background: '#ffd700', color: '#232526', fontWeight: 700, borderRadius: 8, padding: '10px 18px', border: 'none', cursor: 'pointer' }} disabled={loading || !input.trim()}>
            Send
          </button>
        </form>
      </section>
      <div style={{ color: '#fff8dc', fontSize: '1rem', marginTop: 24, textAlign: 'center', maxWidth: 600 }}>
        <strong>How it works:</strong> This chatbot answers FAQs, shares the latest news, and suggests AI jobs/events based on your interests. Try asking about jobs, events, news, or how to get started!
      </div>
    </main>
  );
}
