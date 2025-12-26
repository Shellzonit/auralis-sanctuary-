"use client";




import { useState, useEffect } from "react";
import ChatFeatureLinks from "../../components/ChatFeatureLinks";
import ChatMessage from "./ChatMessage";
const featuredWorks: {
  id: number;
  title: string;
  creator: string;
  link: string;
}[] = [
  // Example structure — fill these in later:
  // {
  //   id: 1,
  //   title: "Crimson Sky Ritual",
  //   creator: "Shellzonit",
  //   link: "https://www.youtube.com/embed/your-video-id"
  // },
];

type Message = {
  id: number;
  username: string;
  content: string;
};





// Featured works for the week — manually curated
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

    setMessages((prev: Message[]) => [...prev, newMessage]);
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
      <h1 className="text-4xl font-bold mb-2 text-red-400">Sanctuary Chat Stream</h1>
      <p className="text-red-300 mb-8 italic">
        A flowing chamber for thoughts, offerings, questions, and presence.  
        Speak gently. Listen deeply.
      </p>

      {/* Chat Layout with Feature Links */}
      <div className="flex w-full max-w-5xl justify-center items-start gap-8">
        {/* Left Feature Links */}
        <ChatFeatureLinks />

        {/* Chat Bar Centered */}
        <div className="flex-1 max-w-2xl bg-black/40 p-6 rounded-xl border border-red-900/40 shadow-lg shadow-red-900/20 mx-4">
          <h2 className="text-xl font-semibold mb-4 text-red-300">
            Welcome to the Sanctuary Stream
          </h2>
          {/* Messages */}
          <div className="space-y-4 mb-4 max-h-[400px] overflow-y-auto pr-2">
            {messages.map((msg: Message) => (
              <div key={msg.id}>
                <p className="text-sm text-red-300/70 flex items-center gap-2 mb-1">
                  <span className="text-red-400">{generateSigil(msg.username)}</span>
                  {msg.username}
                </p>
                <ChatMessage message={msg} />
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

        {/* Right Feature Links (mirrored) */}
        <ChatFeatureLinks />
      </div>
    </div>
  );
}
