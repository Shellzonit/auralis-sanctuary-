"use client";

import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to the Sanctuary Stream.", system: true },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input.trim(),
      system: false,
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 tracking-wide text-center">
        <span className="text-red-500">S</span>anctuary Chat Stream
      </h1>

      {/* Description */}
      <p className="text-gray-300 mb-8 text-center max-w-xl">
        A flowing chamber for thoughts, offerings, questions, and presence.
        Speak gently. Listen deeply.
      </p>

      {/* Chat Container */}
      <div className="w-full max-w-2xl bg-black/40 border border-red-900/40 rounded-xl shadow-lg shadow-red-900/20 backdrop-blur-sm flex flex-col overflow-hidden">
        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[60vh]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.system
                  ? "mx-auto text-center text-red-300 italic"
                  : "bg-red-900/40 border border-red-700/40 shadow-md shadow-red-900/20 text-white ml-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        {/* Input Box */}
        <div className="p-4 border-t border-red-900/40 bg-black/60 flex gap-2">
          <input
            type="text"
            placeholder="Share your thought..."
            className="border p-2 rounded w-full bg-black text-white"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter") sendMessage(); }}
          />
          <button
            onClick={sendMessage}
            className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded text-white font-bold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
