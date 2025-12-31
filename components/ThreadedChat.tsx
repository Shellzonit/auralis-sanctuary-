import { useState } from "react";
import ChatFileUpload from './ChatFileUpload';

interface Message {
  id: string;
  parentId?: string;
  text: string;
  createdAt: string;
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

export default function ThreadedChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);

  function handleSend() {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: generateId(),
      parentId: replyTo || undefined,
      text: input,
      createdAt: new Date().toISOString(),
    };
    setMessages((msgs) => [...msgs, newMsg]);
    setInput("");
    setReplyTo(null);
  }

  function renderThread(parentId?: string, level = 0) {
    return messages
      .filter((msg) => msg.parentId === parentId)
      .map((msg) => (
        <div key={msg.id} style={{ marginLeft: level * 24 }} className="mb-2">
          <div className="bg-[#222] p-3 rounded-lg shadow text-red-200">
            <div className="text-sm opacity-60 mb-1">
              {new Date(msg.createdAt).toLocaleString()}
            </div>
            <div>{msg.text}</div>
            <button
              className="mt-1 text-xs text-red-400 hover:underline"
              onClick={() => setReplyTo(msg.id)}
            >
              Reply
            </button>
          </div>
          {renderThread(msg.id, level + 1)}
        </div>
      ));
  }

  return (
    <section className="w-full max-w-xl mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-4 text-red-300">Threaded Communication</h2>
      <div className="mb-6">{renderThread()}</div>
      <div className="flex gap-2">
        <input
          className="flex-1 px-4 py-2 rounded bg-[#18181c] border border-red-900/40 text-red-200"
          placeholder={replyTo ? "Reply to a message..." : "Start a new thread..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-4 py-2 rounded bg-red-700 hover:bg-red-800 text-white font-semibold"
          onClick={handleSend}
        >
          Send
        </button>
        {replyTo && (
          <button
            className="px-2 py-2 rounded bg-gray-700 text-xs text-white"
            onClick={() => setReplyTo(null)}
          >
            Cancel
          </button>
        )}
      </div>
      <ChatFileUpload />
    </section>
  );
}
