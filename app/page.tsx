"use client";
import "./homepage-s.css";
import "./homepage-artist-tabs.css";

import { useEffect, useMemo, useState } from "react";
import { getAblyClient } from "@/lib/ablyClient";
import type { ChatMessage } from "@/types/chat";
import NavTabs from "@/components/NavTabs";


export default function Home() {
  // Chat preview state
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    const ably = getAblyClient();
    const channel = ably.channels.get("sanctuary-chat-threaded");
    const onMessage = (msg: any) => {
      const data = msg.data as ChatMessage;
      setMessages((prev) => {
        if (prev.some((m) => m.id === data.id)) return prev;
        return [...prev, data];
      });
    };
    channel.subscribe("message", onMessage);
    return () => channel.unsubscribe("message", onMessage);
  }, []);

  // Only show last 1 hour
  const oneHourAgo = Date.now() - 60 * 60 * 1000;
  const recentMessages = useMemo(
    () => messages.filter((m) => m.timestamp >= oneHourAgo),
    [messages]
  );
  // Group into threads
  const threads = useMemo(() => {
    const roots = recentMessages.filter((m) => !m.parentId);
    const replies = recentMessages.filter((m) => m.parentId);
    const groupedReplies = new Map<string, ChatMessage[]>();
    for (const r of replies) {
      const key = r.threadId;
      if (!groupedReplies.has(key)) groupedReplies.set(key, []);
      groupedReplies.get(key)!.push(r);
    }
    return roots.map((root) => ({
      root,
      replies: (groupedReplies.get(root.threadId) || []).sort(
        (a, b) => a.timestamp - b.timestamp
      ),
    }));
  }, [recentMessages]);
  // Pick the most active thread
  const featuredThread = useMemo(() => {
    if (threads.length === 0) return null;
    return threads.reduce((mostActive, current) => {
      return current.replies.length > mostActive.replies.length
        ? current
        : mostActive;
    });
  }, [threads]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7fafc",
        color: "#222",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "2rem",
        position: "relative",
      }}
    >
      {/* Tabs and Title Row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginBottom: "2.5rem", gap: "2rem" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <NavTabs />
        </div>
        <h1
          style={{
            fontFamily: "Playfair Display, Georgia, serif",
            fontSize: "4.2rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#2a4365",
            textShadow: "0 2px 12px rgba(44,62,80,0.08)",
            margin: 0,
            flex: 0,
            zIndex: 2,
          }}
        >
          Auralis Sanctuary
        </h1>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
          <NavTabs />
        </div>
      </div>

      {/* AI and Innovation Banner */}
      <div
        style={{
          fontWeight: 700,
          fontSize: "2.4rem",
          marginBottom: "1.5rem",
          color: "var(--accent)",
          textAlign: "center",
          letterSpacing: "0.04em",
        }}
      >
        <strong>AI and Innovation All Under One Tent</strong>
      </div>

      {/* Main Portal Link */}
      <a
        href="/chat"
        className="text-sanctuary-accent hover:text-sanctuary-text transition-colors font-bold text-xl px-6 py-3 rounded-lg"
        style={{ textDecoration: "none", background: "none", marginBottom: "2rem" }}
      >
        → Enter Circles & Roots
      </a>

      {/* --- Chat Preview Section --- */}
      <div style={{ marginTop: "2rem", width: "100%", maxWidth: 480, alignSelf: "center" }}>
        <div className="text-lg font-semibold mb-2 text-neutral-700">Sanctuary Chat Preview</div>
        {!featuredThread ? (
          <div className="p-4 bg-white border border-neutral-200 rounded-lg text-center text-neutral-500 text-sm">
            The Sanctuary is quiet right now.<br />
            <a href="/chat" className="text-neutral-900 underline underline-offset-4">Enter the chat</a> to begin a new thread.
          </div>
        ) : (
          <div className="p-4 bg-white border border-neutral-200 rounded-lg">
            <div className="text-xs uppercase tracking-wide text-neutral-500 mb-2">Featured Thread</div>
            {/* Root message */}
            <div className="mb-2">
              <div className="bg-neutral-900 text-neutral-50 rounded-lg px-3 py-2 text-sm">{featuredThread.root.text}</div>
              <div className="text-[10px] text-neutral-500 mt-1">
                {featuredThread.root.author || "Guest"} · {new Date(featuredThread.root.timestamp).toLocaleTimeString()}
              </div>
            </div>
            {/* Replies (limit 2) */}
            {featuredThread.replies.slice(0, 2).map((reply: ChatMessage) => (
              <div key={reply.id} className="pl-3 mb-2">
                <div className="bg-neutral-100 border border-neutral-200 rounded-lg px-3 py-1 text-sm">{reply.text}</div>
                <div className="text-[10px] text-neutral-500 mt-1">
                  {reply.author || "Guest"} · {reply.timestamp ? new Date(reply.timestamp).toLocaleTimeString() : ""}
                </div>
              </div>
            ))}
            {/* If more than 2 replies */}
            {featuredThread.replies.length > 2 && (
              <div className="text-xs text-neutral-500 pl-3 mb-2">
                + {featuredThread.replies.length - 2} more replies
              </div>
            )}
            {/* Link to full thread */}
            <a href={`/chat?thread=${featuredThread.root.threadId}`} className="inline-block mt-2 text-sm text-neutral-900 underline underline-offset-4">View full thread →</a>
          </div>
        )}
      </div>

      {/* Large S at the bottom */}
      <span className="homepage-s-elegant" style={{ bottom: 0, top: "auto", left: "50%", transform: "translateX(-50%)", position: "fixed", zIndex: 0 }}>
        S
      </span>
    </main>
  );
}
