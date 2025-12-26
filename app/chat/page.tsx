"use client";




import { useState, useEffect } from "react";
import ChatFeatureLinks from "../../components/ChatFeatureLinks";
import ChatMessage from "./ChatMessage";
import ThreadedChat from "../../components/ThreadedChat";
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
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-black text-red-200">
      <h1 className="text-4xl font-bold mb-2 text-red-400">Sanctuary Threaded Chat</h1>
      <p className="text-red-300 mb-8 italic text-center">
        A flowing chamber for thoughts, offerings, questions, and presence.<br/>
        Speak gently. Listen deeply.
      </p>

      {/* Threaded Chat Section */}
      <ThreadedChat />

      // ...existing code...

      {/* Feature Links Section */}
      <ChatFeatureLinks />
    </div>
  );
}
