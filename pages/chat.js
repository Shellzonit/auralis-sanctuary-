


import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";


  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [bot, setBot] = useState("anna");
  const [socket, setSocket] = useState(null);

  const botOptions = [
    "anna", "donna", "shaunia", "mrnanny", "relocationbot", "silver", "william", "entertainmentbot"
  ];

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (!socket) return;
    const handler = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };
    socket.on("receive_message", handler);
    return () => socket.off("receive_message", handler);
  }, [socket]);

  function sendMessage() {
    if (!input.trim() || !socket) return;
    socket.emit("send_message", { author: "user", text: input, bot });
    setInput("");
  }

  return (
    <div style={{
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "sans-serif"
    }}>
      <h1>Chat with a Bot</h1>
      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="bot-select">Choose a bot: </label>
        <select
          id="bot-select"
          value={bot}
          onChange={e => setBot(e.target.value)}
          style={{ padding: "6px", borderRadius: "6px" }}
        >
          {botOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

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
