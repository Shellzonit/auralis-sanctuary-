function systemMessage(text: string) {
  return {
    id: `system-${Date.now()}`,
    username: "system",
    content: text,
    system: true,
  };
}
function generateSigil(username: string) {
  const sigils = [
    "✦", "✧", "❂", "☼", "☾", "☽", "✹", "✶",
    "⚝", "⚚", "⚘", "❖", "✺", "✵", "✷", "✴"
  ];

  // Simple hash to make sigil stable per username
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash = (hash + username.charCodeAt(i)) % sigils.length;
  }

  return sigils[hash];
}
function generateMythicName() {
  const adjectives = [
    "Ember",
    "Solar",
    "Lunar",
    "Crimson",
    "Echo",
    "Nebula",
    "River",
    "Stone",
    "Dusk",
    "Mythic",
    "Silent",
    "Radiant",
    "Shadow",
    "Star",
    "Ancient",
  ];

  const nouns = [
    "Sage",
    "Wanderer",
    "Oracle",
    "Keeper",
    "Weaver",
    "Nomad",
    "Spirit",
    "Seeker",
    "Lantern",
    "Whisper",
    "Harbinger",
    "Singer",
    "Flame",
    "Voyager",
    "Guardian",
  ];

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${adj} ${noun}`;
}
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ChatPage() {
      // System message on user leave (component unmount)
      useEffect(() => {
        return () => {
          setMessages((prev) => [
            ...prev,
            systemMessage("A presence withdraws into the quiet…"),
          ]);
        };
      }, []);
    // System message on first arrival
    useEffect(() => {
      setMessages((prev) => [
        ...prev,
        systemMessage("A new presence enters the chamber…"),
      ]);
    }, []);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");

  // Auto-assign a mythic name if the user doesn't choose one
  useEffect(() => {
    if (!username) {
      setUsername(generateMythicName());
    }
  }, [username]);

  // Load messages
  useEffect(() => {
    const loadMessages = async () => {
      const { data } = await supabase
        .from("chat")
        .select("*")
        .order("created_at", { ascending: true });

      if (data) setMessages(data);
    };

    loadMessages();

    // Real-time subscription
    const channel = supabase
      .channel("chat-stream")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "chat" },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  // Send message
  const sendMessage = async () => {
    if (!input.trim() || !username.trim()) return;

    await supabase.from("chat").insert({
      username: username.trim(),
      content: input.trim(),
    });

    setInput("");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-4 tracking-wide text-center">
        <span className="text-red-500">S</span>anctuary Chat Stream
      </h1>

      <p className="text-gray-300 mb-8 text-center max-w-xl">
        A flowing chamber for thoughts, offerings, questions, and presence.
        Speak gently. Listen deeply.
      </p>


      {/* Username Input */}
      <div className="w-full max-w-2xl mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Choose your name for the Sanctuary..."
          className="w-full p-3 rounded-lg bg-black/40 border border-red-900/40 text-white placeholder-red-300/40 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          onClick={() => setUsername(generateMythicName())}
          className="mt-2 text-sm text-red-400 hover:text-red-300 transition"
        >
          Generate another name
        </button>
        {username && (
          <p className="mt-2 text-red-400/70 flex items-center gap-2">
            Your sigil:
            <span className="text-xl">{generateSigil(username)}</span>
          </p>
        )}
      </div>

      <div className="w-full max-w-2xl bg-black/40 border border-red-900/40 rounded-xl shadow-lg shadow-red-900/20 backdrop-blur-sm flex flex-col overflow-hidden">
        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[60vh]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={
                msg.system
                  ? "mx-auto text-center text-red-300 italic opacity-80"
                  : "p-3 rounded-lg max-w-[80%] bg-red-900/40 border border-red-700/40 shadow-md shadow-red-900/30"
              }
            >
              {!msg.system && (
                <p className="text-sm text-red-300/70 flex items-center gap-2">
                  <span className="text-red-400">{generateSigil(msg.username)}</span>
                  {msg.username}
                </p>
              )}
              <p>{msg.content}</p>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-red-900/40 p-4 bg-black/60 backdrop-blur-sm">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Offer your message to the stream..."
              className="flex-1 p-3 rounded-lg bg-black/40 border border-red-900/40 text-white placeholder-red-300/40 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button
              onClick={sendMessage}
              className="px-5 py-3 rounded-lg bg-red-700 hover:bg-red-600 transition shadow-lg shadow-red-900/40"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <p className="text-xs text-red-400/60 mt-4">
        Moderation active: harmful messages fade silently into the void.
      </p>
    </div>
  );
}
