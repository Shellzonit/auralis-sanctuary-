
import React, { useState } from "react";


export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim()) return;

    // Add user message to chat
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    // Send to FastAPI backend
    const response = await fetch("http://localhost:8000/chat/anna", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ author: "user", text: input }),
    });

    const data = await response.json();

    // Add Anna's reply
    setMessages([...newMessages, { sender: "anna", text: data.bot_reply }]);

    setInput("");
  }

  return (
    <div style={{
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
      <h1>Chat with Anna</h1>

      <div style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        height: "400px",
        overflowY: "auto",
        marginBottom: "20px",
        background: "#fafafa"
      }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: "12px",
              textAlign: msg.sender === "user" ? "right" : "left"
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "10px 14px",
                borderRadius: "12px",
                background: msg.sender === "user" ? "#d1e7ff" : "#e8e8e8",
                maxWidth: "80%"
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            background: "#0070f3",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
