import React, { useState, useRef } from "react";

const MR_NANNY_AVATAR = "/Mr Nanny.png";

type Message = {
  id: number;
  from: string;
  text: string;
  parentId: number | undefined;
};

export default function MrNannyResumeChat() {
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

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = {
      id: nextId.current++,
      from: "You",
      text: input.trim(),
      parentId: replyTo ?? undefined,
    };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setTimeout(() => {
      // Simple bot reply for demo; in production, connect to AI or add logic
      const botReply = {
        id: nextId.current++,
        from: "Mr. Job Nanny",
        text: "Thanks for sharing! What else would you like to add to your resume? (e.g., skills, education, or ask for a summary)",
        parentId: userMsg.id,
      };
      setMessages((msgs) => [...msgs, botReply]);
      setReplyTo(null);
    }, 700);
  }

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
    </section>
  );
}
