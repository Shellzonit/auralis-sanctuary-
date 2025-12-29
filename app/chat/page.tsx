"use client";


import { useEffect, useRef, useState, FormEvent } from "react";
import { getAblyClient } from "../../lib/ablyClient";
import ChatMessage from "./ChatMessage";


const CHANNEL_NAME = "sanctuary-chat";


export default function ChatPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [tempUsername, setTempUsername] = useState("");
  const channelRef = useRef<any>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ably: any;
    let onMessage: any;
    (async () => {
      ably = getAblyClient();
      channelRef.current = ably.channels.get(CHANNEL_NAME);
      onMessage = (msg: any) => {
        setMessages((prev) => [...prev, msg.data]);
      };
      channelRef.current.subscribe("message", onMessage);
    })();
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
    if (!input.trim() || !channelRef.current || !username.trim()) return;
    const message = {
      content: input,
      username,
      timestamp: new Date().toISOString(),
    };
    channelRef.current.publish("message", message);
    setInput("");
  }

  function handleSetUsername(e: FormEvent) {
    e.preventDefault();
    if (tempUsername.trim()) {
      setUsername(tempUsername.trim());
    }
  }

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto p-4 bg-gradient-to-br from-blue-50 to-purple-100">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-900 drop-shadow">Sanctuary Chat</h1>
      {!username ? (
        <form onSubmit={handleSetUsername} className="flex gap-2 mb-4 justify-center">
          <input
            className="border rounded px-3 py-2"
            value={tempUsername}
            onChange={(e) => setTempUsername(e.target.value)}
            placeholder="Enter your username..."
            autoFocus
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Join</button>
        </form>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto bg-white/80 rounded shadow p-4 mb-2 border border-blue-200">
            {messages.map((msg, i) => (
              <div key={i} className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold text-blue-700">{msg.username || "Anonymous"}</span>
                  <span className="text-xs text-gray-500">{msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString() : ""}</span>
                </div>
                <ChatMessage message={msg} />
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <form onSubmit={sendMessage} className="flex gap-2 mt-2">
            <input
              className="flex-1 border rounded px-3 py-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              autoFocus
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
          </form>
        </>
      )}
    </div>
  );
}