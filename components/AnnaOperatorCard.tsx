import React, { useState } from "react";

const operatorData = [
  {
    name: "Anna — Meal Bot",
    image: "/images/operators/anna.jpeg.png"
  }
];

export default function AnnaOperatorCard() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    const userMsg = { author: "You", text: input, avatar: null };
    setChat((prev) => [...prev, userMsg]);
    setInput("");
    try {
      const res = await fetch("/api/chat/anna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userMsg),
      });
      const data = await res.json();
      if (data.anna_reply) {
        setChat((prev) => [...prev, data.anna_reply]);
      }
    } catch (err) {
      setChat((prev) => [...prev, { author: "Anna", text: "Sorry, something went wrong.", avatar: operatorData[0].image }]);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {operatorData.map((op, i) => (
        <div key={i} style={{ marginBottom: 16 }}>
          <img src={op.image} alt={op.name} width={300} height={300} />
          <p style={{ fontWeight: 600, fontSize: '1.2rem', margin: '8px 0' }}>{op.name}</p>
        </div>
      ))}
      <div style={{ width: 320, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #18191a22', padding: 16 }}>
        <div style={{ minHeight: 120, maxHeight: 200, overflowY: 'auto', marginBottom: 12 }}>
          {chat.map((msg, idx) => (
            <div key={idx} style={{ marginBottom: 8, textAlign: msg.author === 'You' ? 'right' : 'left' }}>
              <span style={{ fontWeight: 500, color: msg.author === 'You' ? '#7b2ff2' : '#18191a' }}>{msg.author}:</span> <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} style={{ display: 'flex', gap: 8 }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Say hi to Anna..."
            style={{ flex: 1, padding: 8, borderRadius: 6, border: '1px solid #e0d6f7' }}
            disabled={loading}
          />
          <button type="submit" disabled={loading || !input.trim()} style={{ background: '#7b2ff2', color: '#fff', border: 'none', borderRadius: 6, padding: '0 16px', fontWeight: 600 }}>
            {loading ? '...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
