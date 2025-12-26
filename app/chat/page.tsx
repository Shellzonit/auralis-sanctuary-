function systemMessage(text: string) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      {/* Featured Works Section */}
      <div className="w-full max-w-2xl mx-auto mt-8 mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-300">Featured Works</h2>
        <div className="grid gap-6">
          {featuredWorks.map((work) => (
            <div
              key={work.id}
              className="bg-gray-900 rounded-xl shadow-lg p-4 flex flex-col md:flex-row items-center border border-blue-800/40 hover:shadow-blue-500/30 transition-shadow"
            >
              {/* Embedded media (placeholder image) */}
              <a href={work.link} target="_blank" rel="noopener noreferrer" className="block w-full md:w-40 h-32 md:h-24 mb-3 md:mb-0 md:mr-6 flex-shrink-0 overflow-hidden rounded-lg border border-blue-700/30">
                <img
                  src={`https://source.unsplash.com/400x300/?art,abstract,${work.id}`}
                  alt={work.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-200"
                />
              </a>
              <div className="flex-1 flex flex-col items-center md:items-start">
                <div className="text-lg font-semibold text-blue-200 mb-1">{work.title}</div>
                <div className="text-sm text-blue-400 mb-2">by {work.creator}</div>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    className="px-4 py-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg animate-pulse hover:from-blue-400 hover:to-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all"
                    // onClick handler for voting can be added here
                  >
                    Vote
                  </button>
                  <span className="text-lg font-mono text-pink-300 drop-shadow-glow">{work.votes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Chat UI here */}
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


      "use client";

      import { useEffect, useState } from "react";

      // Featured works for the week — manually curated
      const featuredWorks = [
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
        const [messages, setMessages] = useState([]);
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

          const newMessage = {
            id: Date.now(),
            username,
            content: input,
          };

          setMessages((prev) => [...prev, newMessage]);
          setInput("");
        };

        // Generate a sigil for each user
        const generateSigil = (name) => {
          const sigils = ["✦", "☾", "⚘", "✹", "❖", "✧"];
          let sum = 0;
          for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
          return sigils[sum % sigils.length];
        };

        return (
          <div className="min-h-screen flex flex-col items-center p-6 bg-black text-red-200">
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
    return (
      <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
        {/* Featured Works Gallery */}
        <div className="w-full max-w-2xl mb-10 mx-auto">
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
        {/* Chat UI here */}
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
