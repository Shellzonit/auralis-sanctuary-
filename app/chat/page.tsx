"use client";
import { useEffect, useRef, useState, FormEvent } from "react";

const CHANNEL_NAME = "sanctuary-chat";

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const channelRef = useRef<any>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ably: any;
    let onMessage: any;
    // Only run in the browser
    import("ably").then((Ably) => {
      ably = new Ably.Realtime({ key: process.env.NEXT_PUBLIC_ABLY_API_KEY });
      channelRef.current = ably.channels.get(CHANNEL_NAME);
      onMessage = (msg: any) => {
        setMessages((prev) => [...prev, msg.data]);
      };
      channelRef.current.subscribe("message", onMessage);
    });
    return () => {
      if (channelRef.current && onMessage) {
        channelRef.current.unsubscribe("message", onMessage);
      }
      if (ably) {
        ably.close();
      }
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || !channelRef.current) return;
    channelRef.current.publish("message", input);
    setInput("");
  }

  return (
    <div className="flex flex-col h-screen max-w-lg mx-auto p-4">
      <div className="flex-1 overflow-y-auto bg-white rounded shadow p-4 mb-2">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2 text-gray-800">{msg}</div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}