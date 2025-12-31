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

export default function AIPreview() {
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
