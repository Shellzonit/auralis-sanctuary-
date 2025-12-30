"use client";
import React, { useEffect, useState } from "react";
import NavTabs from "../../components/NavTabs";

type Message = {
  id: number;
  name: string;
  message: string;
  createdAt: string;
};

export default function JobsBoardPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchMessages() {
    const res = await fetch("/api/jobs-board-messages");
    if (res.ok) {
      setMessages(await res.json());
    }
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/jobs-board-messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message }),
    });
    if (res.ok) {
      setName("");
      setMessage("");
      fetchMessages();
    } else {
      const data = await res.json();
      setError(data.error || "Failed to post message.");
    }
    setLoading(false);
  }

  return (
    <main className="max-w-2xl mx-auto p-4 bg-gradient-to-br from-yellow-400 via-yellow-300 to-purple-600 min-h-screen rounded-xl shadow-xl border-4 border-purple-700">
      <NavTabs />
      <h1 className="text-3xl font-extrabold mb-6 text-purple-900 text-center drop-shadow-lg">Jobs Message Board</h1>
      <form onSubmit={handleSubmit} className="mb-8 space-y-2 bg-white/80 rounded-lg p-4 border-2 border-yellow-400 shadow-lg">
        <input
          type="text"
          placeholder="Your name"
          className="border-2 border-purple-400 focus:border-yellow-500 p-2 rounded w-full bg-white/90 text-purple-900 font-semibold"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Leave a message about jobs..."
          className="border-2 border-purple-400 focus:border-yellow-500 p-2 rounded w-full min-h-[60px] bg-white/90 text-purple-900"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-400 to-purple-500 text-white px-4 py-2 rounded font-bold shadow hover:from-yellow-500 hover:to-purple-600 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Message"}
        </button>
        {error && <div className="text-red-600 text-sm">{error}</div>}
      </form>
      <div className="space-y-4">
        {messages.length === 0 ? (
          <p className="text-purple-800">No messages yet. Be the first to post!</p>
        ) : (
          messages.map(msg => (
            <div key={msg.id} className="border-2 border-yellow-400 rounded-lg p-3 bg-white/90 shadow-md">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-purple-800">{msg.name}</span>
                <span className="text-xs text-yellow-700">{new Date(msg.createdAt || msg.created_at).toLocaleString()}</span>
              </div>
              <div className="text-purple-900 whitespace-pre-line">{msg.message}</div>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
