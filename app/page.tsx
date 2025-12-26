"use client";


import SanctuaryLogo from "../components/SanctuaryLogo";
import { useEffect, useState } from "react";

// Types
type FeaturedWork = {
  id: number;
  title: string;
  creator: string;
  link: string;
};

type Message = {
  id: number;
  username: string;
  content: string;
};

// Featured works for the week — manually curated
const featuredWorks: FeaturedWork[] = [
  // Example structure — fill these in later:
  // {
  //   id: 1,
  //   title: "Crimson Sky Ritual",
  //   creator: "Shellzonit",
  //   link: "https://www.youtube.com/embed/your-video-id"
  // },
];

export default function ChatPage() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  // Generate a mythic username on load
  useEffect(() => {
    const names = [
      "Ember Sage",
      "Nebula Whisper",
      "Crimson Wanderer",
      "Silent Star",
      "Dusk Weaver",
      "Radiant Nomad",
    ];
    const randomName = names[Math.floor(Math.random() * names.length)];
    setUsername(randomName);
  }, []);

  // Handle sending a message
  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      username,
      content: input,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  // Generate a sigil for each user
  const generateSigil = (name: string) => {
    const sigils = ["✦", "☾", "⚘", "✹", "❖", "✧"];
    let sum = 0;
    for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
    return sigils[sum % sigils.length];
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-black text-red-200">
      {/* LOGO */}
      <div className="mb-8">
        <SanctuaryLogo />
        <p
          className="text-center text-2xl mt-4 tracking-wider font-semibold bg-gradient-to-r from-fuchsia-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-lg shadow-black/60"
          style={{ letterSpacing: '0.08em', textShadow: '0 2px 16px #0ff6, 0 1px 2px #0008' }}
        >
          A Modern Approach to AI Creations
        </p>
      </div>
      <h1 className="text-4xl font-bold mb-2 text-red-400">Sanctuary Chat Stream</h1>
      <p className="text-red-300 mb-8 italic">
        A flowing chamber for thoughts, offerings, questions, and presence.  
        Speak gently. Listen deeply.
      </p>

      {/* Featured Works Gallery */}
      <div className="w-full max-w-2xl mb-10">
        <h2 className="text-2xl font-bold mb-4 text-center text-red-400">
          Featured Works of the Week
        </h2>

        {featuredWorks.length === 0 && (
          <p className="text-center text-red-300/60 italic">
            The altar awaits this week’s offerings…
          </p>
        )}

        <div className="space-y-8">
          {featuredWorks.map((work) => (
            <div
              key={work.id}
              className="p-4 rounded-xl bg-black/40 border border-red-900/40 shadow-lg shadow-red-900/20"
            >
              <h3 className="text-xl font-semibold text-red-300">{work.title}</h3>
              <p className="text-sm text-red-400/70 mb-3">by {work.creator}</p>

              {/* Embedded media */}
              <div className="mb-4">
                <iframe
                  src={work.link}
                  className="w-full h-48 rounded-lg border border-red-900/40"
                  allow="autoplay; encrypted-media"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Container */}
      <div className="w-full max-w-2xl bg-black/40 p-6 rounded-xl border border-red-900/40 shadow-lg shadow-red-900/20">
        <h2 className="text-xl font-semibold mb-4 text-red-300">
          Welcome to the Sanctuary Stream
        </h2>

        {/* Messages */}
        <div className="space-y-4 mb-4 max-h-[400px] overflow-y-auto pr-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="p-3 rounded-lg bg-red-900/40 border border-red-700/40 shadow-md shadow-red-900/30"
            >
              <p className="text-sm text-red-300/70 flex items-center gap-2">
                <span className="text-red-400">{generateSigil(msg.username)}</span>
                {msg.username}
              </p>
              <p>{msg.content}</p>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Share your thought..."
            className="flex-1 p-2 rounded-lg bg-black/60 border border-red-800 text-red-200"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 rounded-lg bg-red-700 hover:bg-red-600 transition shadow-md shadow-red-900/40"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
