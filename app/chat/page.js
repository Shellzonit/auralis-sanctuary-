// Sanctuary Chat Page (JS version)
import React, { useState } from "react";
import ChatFeatureLinks from "../../components/ChatFeatureLinks";
import LargeThreadedChat from "../../components/LargeThreadedChat";

const initialFeatured = [
  { title: "Crimson Sky Ritual", url: "https://placehold.co/400x200", description: "A featured work." },
  { title: "Nebula Dream", url: "https://placehold.co/400x200", description: "Another highlight." },
];

export default function ChatPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-black text-red-200">
      <LargeThreadedChat />
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
