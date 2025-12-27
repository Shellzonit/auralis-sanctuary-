"use client";

import { useEffect, useMemo, useState } from "react";
import { getAblyClient } from "@/lib/ablyClient";
import type { ChatMessage } from "@/types/chat";

export default function ChatPage() {
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

  // Filter messages to last 1 hour
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
    <div className="min-h-screen bg-neutral-50 text-neutral-900 p-8 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        {/* Sanctuary Header */}
        <h1 className="text-3xl font-semibold tracking-tight mb-2">
          The Sanctuary
        </h1>
        <p className="text-neutral-600 mb-8">
          A living, mythic space for communal reflection.
        </p>

        {/* Featured Thread */}
        {!featuredThread ? (
          <div className="p-6 bg-white border border-neutral-200 rounded-lg text-center text-neutral-500">
            The Sanctuary is quiet right now.  
            <br />
            <a
              href="/chat"
              className="text-neutral-900 underline underline-offset-4"
            >
              Enter the chat
            </a>{" "}
            to begin a new thread.
          </div>
        ) : (
          <div className="p-6 bg-white border border-neutral-200 rounded-lg">
            <div className="text-xs uppercase tracking-wide text-neutral-500 mb-3">
              Featured Thread (Last 1 Hour)
            </div>

            {/* Root message */}
            <div className="mb-4">
              <div className="bg-neutral-900 text-neutral-50 rounded-lg px-4 py-3 text-sm">
                {featuredThread.root.text}
              </div>
              <div className="text-[10px] text-neutral-500 mt-1">
                {featuredThread.root.author || "Guest"} ·{" "}
                {new Date(featuredThread.root.timestamp).toLocaleTimeString()}
              </div>
            </div>

            {/* Replies (limit 3) */}
            {featuredThread.replies.slice(0, 3).map((reply: ChatMessage) => (
              <div key={reply.id} className="pl-4 mb-3">
                <div className="bg-neutral-100 border border-neutral-200 rounded-lg px-4 py-2 text-sm">
                  {reply.text}
                </div>
                <div className="text-[10px] text-neutral-500 mt-1">
                  {reply.author || "Guest"} ·{" "}
                  {reply.timestamp ? new Date(reply.timestamp).toLocaleTimeString() : ""}
                </div>
              </div>
            ))}

            {/* If more than 3 replies */}
            {featuredThread.replies.length > 3 && (
              <div className="text-xs text-neutral-500 pl-4 mb-3">
                + {featuredThread.replies.length - 3} more replies
              </div>
            )}

            {/* Link to full thread */}
            <a
              href={`/chat?thread=${featuredThread.root.threadId}`}
              className="inline-block mt-4 text-sm text-neutral-900 underline underline-offset-4"
            >
              View full thread →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
