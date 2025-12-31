// Page intentionally left blank
"use client";



import { useEffect, useRef, useState, FormEvent } from "react";



export default function MessageBoardPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [tempUsername, setTempUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Fetch all messages on mount
  useEffect(() => {
    async function fetchMessages() {
      setLoading(true);
      try {
        const res = await fetch("/api/message-board");
        const data = await res.json();
        setMessages(data || []);
      } catch {
        setMessages([]);
      } finally {
        setLoading(false);
      }
    }
    fetchMessages();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  async function sendMessage(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || !username.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/message-board", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, message: input }),
      });
      const data = await res.json();
      if (data && !data.error) {
        setMessages((prev) => [...prev, data]);
        setInput("");
      } else {
        alert(data.error || "Failed to post message");
      }
    } catch {
      alert("Failed to post message");
    } finally {
      setLoading(false);
    }
  }

  function handleSetUsername(e: FormEvent) {
    e.preventDefault();
    if (tempUsername.trim()) {
      setUsername(tempUsername.trim());
    }
  }

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-6 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] shadow-2xl rounded-3xl border border-cyan-400/30 backdrop-blur-xl relative overflow-hidden">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-cyan-300 tracking-widest drop-shadow-glow">General Message Board</h1>
      {!username ? (
        <form onSubmit={handleSetUsername} className="flex gap-3 mb-8 justify-center">
          <input
            className="border-2 border-cyan-400/60 bg-black/40 text-cyan-100 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300/80 shadow-inner shadow-cyan-400/10 placeholder-cyan-400/60 transition-all duration-200"
            value={tempUsername}
            onChange={(e) => setTempUsername(e.target.value)}
            placeholder="Enter your username..."
            autoFocus
          />
          <button type="submit" className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-cyan-300 hover:to-purple-400 transition-all duration-200 border border-cyan-300/60">Join</button>
        </form>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto bg-white/10 rounded-2xl shadow-xl p-6 mb-4 border border-cyan-400/20 backdrop-blur-md relative">
            {loading && <div className="text-cyan-200 text-center">Loading messages...</div>}
            {messages.map((msg, i) => (
              <div key={i} className="mb-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-semibold text-cyan-200 text-lg drop-shadow-glow">{msg.username || "Anonymous"}</span>
                  <span className="text-xs text-cyan-400/80 font-mono">{msg.inserted_at ? new Date(msg.inserted_at).toLocaleString() : ""}</span>
                </div>
                <div className="bg-cyan-900/30 border border-cyan-400/20 rounded-xl px-4 py-2 text-cyan-100 shadow-inner">
                  {msg.message}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <form onSubmit={sendMessage} className="flex gap-3 mt-2">
            <input
              className="flex-1 border-2 border-cyan-400/60 bg-black/40 text-cyan-100 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300/80 shadow-inner shadow-cyan-400/10 placeholder-cyan-400/60 transition-all duration-200"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              autoFocus
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()} className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-cyan-300 hover:to-purple-400 transition-all duration-200 border border-cyan-300/60">Post</button>
          </form>
        </>
      )}
      <div className="absolute inset-0 pointer-events-none z-0" />
    </div>
  );
}