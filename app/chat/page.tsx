"use client";


import { useEffect, useRef, useState, FormEvent } from "react";
import { useCallback } from "react";
import { getAblyClient } from "../../lib/ablyClient";
import ChatMessage from "./ChatMessage";


const CHANNEL_NAME = "sanctuary-chat";


export default function ChatPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [tempUsername, setTempUsername] = useState("");
  const [suggestion, setSuggestion] = useState<string>("");
  const [loadingSuggestion, setLoadingSuggestion] = useState(false);
  const channelRef = useRef<any>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  // AI-powered suggestion fetcher
  const fetchSuggestion = useCallback(async (prompt: string) => {
    if (!prompt.trim()) {
      setSuggestion("");
      return;
    }
    setLoadingSuggestion(true);
    try {
      const res = await fetch("/api/openai-suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setSuggestion(data.suggestion || "");
    } catch {
      setSuggestion("");
    } finally {
      setLoadingSuggestion(false);
    }
  }, []);


  // Only fetch suggestion on button click
  function handleSuggestionClick(e: React.MouseEvent) {
    e.preventDefault();
    if (input.trim()) fetchSuggestion(input);
  }

  useEffect(() => {
    let ably: any;
    let onMessage: any;
    (async () => {
      ably = getAblyClient();
      channelRef.current = ably.channels.get(CHANNEL_NAME);
      onMessage = (msg: any) => {
        setMessages((prev) => [...prev, msg.data]);
      };
      channelRef.current.subscribe("message", onMessage);
    })();
    return () => {
      if (channelRef.current && onMessage) {
        channelRef.current.unsubscribe("message", onMessage);
      }
      if (ably) {
        ably.close();
      }
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  function sendMessage(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || !channelRef.current || !username.trim()) return;
    const message = {
      content: input,
      username,
      timestamp: new Date().toISOString(),
    };
    channelRef.current.publish("message", message);
    setInput("");
    setSuggestion("");
  }

  function handleSetUsername(e: FormEvent) {
    e.preventDefault();
    if (tempUsername.trim()) {
      setUsername(tempUsername.trim());
    }
  }

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-6 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] shadow-2xl rounded-3xl border border-cyan-400/30 backdrop-blur-xl relative overflow-hidden futuristic-chat">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-cyan-300 tracking-widest drop-shadow-glow animate-pulse">Sanctuary HoloChat</h1>
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
          <div className="flex-1 overflow-y-auto bg-white/10 rounded-2xl shadow-xl p-6 mb-4 border border-cyan-400/20 backdrop-blur-md hologram-panel relative">
            <div className="absolute inset-0 pointer-events-none hologram-glow" />
            {messages.map((msg, i) => (
              <div key={i} className="mb-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-semibold text-cyan-200 text-lg drop-shadow-glow">{msg.username || "Anonymous"}</span>
                  <span className="text-xs text-cyan-400/80 font-mono">{msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString() : ""}</span>
                </div>
                <ChatMessage message={msg} />
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <form onSubmit={sendMessage} className="flex flex-col gap-2 mt-2">
            <div className="flex gap-3">
              <input
                className="flex-1 border-2 border-cyan-400/60 bg-black/40 text-cyan-100 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-300/80 shadow-inner shadow-cyan-400/10 placeholder-cyan-400/60 transition-all duration-200"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                autoFocus
              />
              <button type="submit" className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-cyan-300 hover:to-purple-400 transition-all duration-200 border border-cyan-300/60">Send</button>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <button
                type="button"
                className="px-3 py-1 bg-cyan-400/30 hover:bg-cyan-400/60 rounded-lg text-xs text-cyan-100 font-bold shadow-cyan-400/20 shadow-md transition-all duration-150"
                onClick={handleSuggestionClick}
                disabled={loadingSuggestion || !input.trim()}
              >
                {loadingSuggestion ? 'Loading...' : '💡 Get AI Suggestion'}
              </button>
              {suggestion && (
                <div className="flex items-center gap-2 text-base bg-cyan-900/30 border border-cyan-400/30 rounded-xl px-3 py-2 shadow-cyan-400/10 shadow-inner animate-fade-in">
                  <span className="text-cyan-300">AI:</span>
                  <span className="italic flex-1 text-cyan-100/90">{suggestion}</span>
                  <button
                    type="button"
                    className="ml-2 px-2 py-1 bg-cyan-400/30 hover:bg-cyan-400/60 rounded-lg text-xs text-cyan-100 font-bold shadow-cyan-400/20 shadow-md transition-all duration-150"
                    onClick={() => setInput(suggestion)}
                    disabled={loadingSuggestion}
                  >
                    Use
                  </button>
                </div>
              )}
            </div>
          </form>
        </>
      )}
      {/* Hologram animated background overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 hologram-bg" />
    </div>
  );
}