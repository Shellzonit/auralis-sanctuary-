// Sanctuary Chat Page (JS version)
import React, { useState } from "react";
import ChatFeatureLinks from "../../components/ChatFeatureLinks";
import Thread from "../../components/Thread";
import VideoSubmit from "../../components/VideoSubmit";
import FeaturedGallery from "../../components/FeaturedGallery";

const initialFeatured = [
  { title: "Crimson Sky Ritual", url: "https://placehold.co/400x200", description: "A featured work." },
  { title: "Nebula Dream", url: "https://placehold.co/400x200", description: "Another highlight." },
];

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Welcome to the Sanctuary Threaded Chat!", createdAt: new Date().toISOString(), parentId: null },
  ]);
  const [featured, setFeatured] = useState(initialFeatured);

  function handleReply(parentId) {
    // Focus input for reply (handled in Thread component)
  }

  function handleSubmit({ text, url }) {
    setMessages((msgs) => [
      ...msgs,
      { id: Math.random().toString(36).substr(2, 9), text: `${text}\n${url}`, createdAt: new Date().toISOString(), parentId: null },
    ]);
    setFeatured((items) => [
      { title: text, url, description: "User submitted work." },
      ...items,
    ]);
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-black text-red-200">
      <h1 className="text-4xl font-bold mb-2 text-red-400">Sanctuary Threaded Chat</h1>
      <p className="text-red-300 mb-8 italic text-center">
        A flowing chamber for thoughts, offerings, questions, and presence.<br/>
        Speak gently. Listen deeply.
      </p>
      <FeaturedGallery items={featured} />
      <VideoSubmit onSubmit={handleSubmit} />
      <Thread messages={messages} onReply={handleReply} />
      <div className="w-full flex justify-center my-8">
        <a
          href="/content"
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-emerald-400 text-white font-extrabold text-2xl shadow-2xl border-4 border-white/80 ring-4 ring-fuchsia-400/60 glow-link transition hover:scale-110 hover:from-fuchsia-400 hover:to-emerald-300"
        >
          ➕ Upload Your Content
        </a>
      </div>
      <ChatFeatureLinks />
    </div>
  );
}
