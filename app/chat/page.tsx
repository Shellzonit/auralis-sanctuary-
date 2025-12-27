"use client";
import { useState } from "react";

// Unique, modern chat page layout
export default function ChatPage() {
  // Example static data for demonstration
  const [messages, setMessages] = useState([
    {
      id: 1,
      author: "Aurora",
      avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Aurora",
      text: "Welcome to the Sanctuary! 🌿",
      timestamp: "2m ago",
      reactions: 3,
      replies: [
        {
          id: 2,
          author: "Nova",
          avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Nova",
          text: "Thank you! Excited to be here.",
          timestamp: "1m ago",
          reactions: 1,
        },
      ],
    },
    {
      id: 3,
      author: "Orion",
      avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Orion",
      text: "Is there a music channel?",
      timestamp: "just now",
      reactions: 0,
      replies: [],
    },
  ]);
  const [input, setInput] = useState("");

  return (
    <div style={{ minHeight: "100vh", background: "#181a20", color: "#f7fafc", fontFamily: "Inter, sans-serif", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Header */}
      <header style={{ width: "100%", padding: "1.5rem 0 1rem 0", textAlign: "center", borderBottom: "1px solid #23242b", marginBottom: 0 }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 900, letterSpacing: ".08em", color: "#ffe082", margin: 0 }}>Sanctuary Chat</h1>
        <div style={{ fontSize: 18, color: "#f7fafc", opacity: 0.7, fontWeight: 500, letterSpacing: ".04em" }}>Real-time Threads & Community</div>
      </header>
      {/* Main Feed */}
      <div style={{ width: "100%", maxWidth: 540, flex: 1, padding: "2rem 0 6rem 0", display: "flex", flexDirection: "column", gap: 32 }}>
        {messages.map((msg) => (
          <div key={msg.id} style={{ background: "#23242b", borderRadius: 16, padding: 20, boxShadow: "0 2px 16px #0004" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <img src={msg.avatar} alt={msg.author} style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid #ffe08255" }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 17, color: "#ffe082" }}>{msg.author}</div>
                <div style={{ fontSize: 13, color: "#aaa" }}>{msg.timestamp}</div>
              </div>
            </div>
            <div style={{ fontSize: 17, color: "#f7fafc", margin: "14px 0 8px 0" }}>{msg.text}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 6 }}>
              <span style={{ fontSize: 15, color: "#ffe082bb", cursor: "pointer" }}>❤️ {msg.reactions}</span>
              <span style={{ fontSize: 15, color: "#7fd1b9", cursor: "pointer" }}>↩️ Reply</span>
            </div>
            {/* Replies */}
            {msg.replies && msg.replies.length > 0 && (
              <div style={{ marginLeft: 36, marginTop: 10, borderLeft: "2px solid #31323a", paddingLeft: 16 }}>
                {msg.replies.map((reply) => (
                  <div key={reply.id} style={{ marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <img src={reply.avatar} alt={reply.author} style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid #ffe08255" }} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 15, color: "#ffe082" }}>{reply.author}</div>
                        <div style={{ fontSize: 12, color: "#aaa" }}>{reply.timestamp}</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 15, color: "#f7fafc", margin: "6px 0 4px 0" }}>{reply.text}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontSize: 14, color: "#ffe082bb", cursor: "pointer" }}>❤️ {reply.reactions || 0}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Input Bar */}
      <form
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "#23242b",
          borderTop: "1px solid #31323a",
          padding: "1rem 0.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
        onSubmit={e => {
          e.preventDefault();
          // Add send logic here
          setInput("");
        }}
      >
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{
            width: "100%",
            maxWidth: 420,
            padding: "0.9rem 1.2rem",
            borderRadius: 12,
            border: "none",
            fontSize: 17,
            background: "#181a20",
            color: "#f7fafc",
            marginRight: 12,
            outline: "none",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#ffe082",
            color: "#23242b",
            fontWeight: 700,
            fontSize: 17,
            border: "none",
            borderRadius: 10,
            padding: "0.9rem 1.6rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px #0002",
            transition: "background .18s",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
