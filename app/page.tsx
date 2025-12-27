"use client";
import NavTabs from "@/components/NavTabs";
import { useEffect, useState } from "react";

export default function Home() {
  const [thread, setThread] = useState<{author: string, text: string} | null>(null);

  // Simulate fetching a chat thread preview (replace with real fetch/Ably logic as needed)
  useEffect(() => {
    setThread({
      author: "Guest",
      text: "Welcome to the Sanctuary! This is a sample chat message."
    });
  }, []);

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "sans-serif", background: "#f7fafc", padding: "2rem" }}>
      {/* Tabs at the top */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
        <NavTabs />
      </div>
      {/* Title */}
      <h1 style={{ fontSize: "3rem", color: "#2a4365", marginBottom: "2rem" }}>Auralis Sanctuary</h1>
      {/* Chat thread preview */}
      <div style={{ width: "100%", maxWidth: 420, background: "#fff", border: "1px solid #eee", borderRadius: 12, padding: 16, boxShadow: "0 2px 8px #0001", textAlign: "left" }}>
        <div style={{ fontWeight: 600, fontSize: 14, color: "#888", marginBottom: 8 }}>Chat Preview</div>
        {thread ? (
          <div>
            <div style={{ fontSize: 16, color: "#222", marginBottom: 4 }}>{thread.text}</div>
            <div style={{ fontSize: 12, color: "#666" }}>by {thread.author}</div>
          </div>
        ) : (
          <div style={{ color: "#aaa", fontSize: 14 }}>No recent messages.</div>
        )}
      </div>
    </main>
  );
}
