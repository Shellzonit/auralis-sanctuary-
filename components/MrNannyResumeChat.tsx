import React, { useState, useRef } from "react";

const MR_NANNY_AVATAR = "/Mr Nanny.png";

type Message = {
  id: number;
  from: string;
  text: string;
  parentId: number | undefined;
};

export default function MrNannyResumeChat() {
  const [score, setScore] = useState<number | null>(null);
  const [showOptIn, setShowOptIn] = useState(false);
  const [optedIn, setOptedIn] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "Mr. Job Nanny",
      text: "Hello! I'm Mr. Job Nanny. Let's build your resume together. Tell me about your work experience, education, or ask for tips—I'll help you step by step!",
      parentId: undefined as number | undefined,
    },
  ]);
  const [input, setInput] = useState("");
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const nextId = useRef(1);

  function scoreResume(text: string): number {
    // Simple scoring: count keywords and length
    const keywords = ["experience", "education", "skills", "projects", "certifications", "leadership", "achievements", "impact", "results", "growth"];
    let score = 0;
    const lower = text.toLowerCase();
    keywords.forEach(k => { if (lower.includes(k)) score += 10; });
    score += Math.min(text.length / 10, 50); // up to 50 points for length
    return Math.round(score);
  }

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const userMsg: Message = {
      id: nextId.current++,
      from: "You",
      text: input,
      parentId: replyTo !== null ? replyTo : undefined,
    };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    // If user asks for resume grading
    if (userMsg.text.toLowerCase().includes("grade my resume")) {
      const score = scoreResume(userMsg.text);
      setScore(score);
      let reply = `Your resume score is ${score}/150. `;
      if (score >= 100) {
        reply += "Excellent work! You are eligible to enter the Hot Resume of the Week showcase. Would you like to opt in?";
        setShowOptIn(true);
      } else {
        reply += "Keep improving to qualify for the Hot Resume of the Week!";
      }
      const botReply = {
        id: nextId.current++,
        from: "Mr. Job Nanny",
        text: reply,
        parentId: userMsg.id,
      };
      setMessages((msgs) => [...msgs, botReply]);
      setReplyTo(null);
      return;
    }
    setTimeout(() => {
      const lower = userMsg.text.toLowerCase();
      let reply = "";
      // ...existing code...

  function renderMessages(parentId: number | undefined) {
    return messages
      .filter((m) => m.parentId === parentId)
      .map((m) => (
        <div key={m.id} style={{ marginLeft: parentId !== undefined ? 32 : 0, marginBottom: 10 }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            background: m.from === "Mr. Job Nanny" ? "#ece9fc" : "#fff",
            color: m.from === "Mr. Job Nanny" ? "#7b2ff2" : "#18191a",
            borderRadius: 10,
            padding: '10px 14px',
            boxShadow: '0 2px 8px #7b2ff222',
            maxWidth: 420,
            fontWeight: m.from === "Mr. Job Nanny" ? 700 : 400,
          }}>
            {m.from === "Mr. Job Nanny" && (
              <img src={MR_NANNY_AVATAR} alt="Mr. Nanny" width={36} height={36} style={{ borderRadius: 18, border: '2px solid #bba6f7', background: '#fff' }} />
            )}
            <div>
              <span style={{ fontSize: 13, opacity: 0.7 }}>{m.from}</span><br />
              {m.text}
            </div>
          </div>
          <button onClick={() => setReplyTo(m.id)} style={{ marginLeft: 8, fontSize: 12, color: '#7b2ff2', background: 'none', border: 'none', cursor: 'pointer' }}>Reply</button>
          {renderMessages(m.id)}
        </div>
      ));
  }

  return (
    <section style={{ maxWidth: 520, width: '100%', background: 'rgba(255,255,255,0.13)', borderRadius: 18, padding: 24, boxShadow: '0 2px 16px #7b2ff222', margin: '0 auto' }}>
      <div style={{ minHeight: 180, marginBottom: 16 }}>
        {renderMessages(undefined)}
      </div>
      <form onSubmit={handleSend} style={{ display: 'flex', gap: 8 }}>
        {replyTo !== null && (
          <span style={{ color: '#7b2ff2', fontSize: 13, alignSelf: 'center' }}>
            Replying to message #{replyTo} <button type="button" onClick={() => setReplyTo(null)} style={{ color: '#18191a', background: 'none', border: 'none', marginLeft: 4, cursor: 'pointer' }}>Cancel</button>
          </span>
        )}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your resume info or question..."
          style={{ flex: 1, padding: '10px 14px', borderRadius: 8, border: '1.5px solid #7b2ff2', fontSize: '1rem', background: '#fff', color: '#18191a' }}
        />
        <button type="submit" style={{ background: '#7b2ff2', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '10px 18px', border: 'none', cursor: 'pointer' }}>Send</button>
      </form>
      {showOptIn && !optedIn && (
        <div style={{ marginTop: 18, background: '#fff8e1', borderRadius: 8, boxShadow: '0 1px 6px #e67e2222', padding: '1rem 1.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.08rem', color: '#e67e22', fontWeight: 600 }}>
            Your resume scored high enough for the Hot Resume of the Week! Would you like to enter?
          </p>
          <button
            style={{ background: '#e67e22', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '10px 18px', border: 'none', cursor: 'pointer', fontSize: '1rem' }}
            onClick={() => { setOptedIn(true); setShowOptIn(false); }}
          >
            Yes, enter my resume!
          </button>
        </div>
      )}
      {optedIn && (
        <div style={{ marginTop: 18, background: '#e0ffe1', borderRadius: 8, boxShadow: '0 1px 6px #7b2ff222', padding: '1rem 1.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.08rem', color: '#22b87b', fontWeight: 600 }}>
            Your resume has been entered for Hot Resume of the Week consideration!
          </p>
        </div>
      )}
      <div style={{ marginTop: 24, textAlign: 'center' }}>
        <a href="/mock-interview-vr.html" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#ffd700', color: '#232526', fontWeight: 700, borderRadius: 8, padding: '12px 24px', textDecoration: 'none', boxShadow: '0 2px 8px #ffd70055', fontSize: '1.1rem', marginTop: 8 }}>
          Launch VR Mock Interview Room
        </a>
        <div style={{ fontSize: 13, color: '#7b2ff2', marginTop: 6 }}>Try a virtual interview with Mr. Nanny in 3D!</div>
      </div>
    </section>
  );
}
