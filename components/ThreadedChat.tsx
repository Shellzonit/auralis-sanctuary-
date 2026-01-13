
"use client";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

interface Message {
  id: string;
  parent_id?: string | null;
  author: string;
  content: string;
  created_at: string;
}

export default function ThreadedChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [author, setAuthor] = useState("");

  // Fetch messages from Supabase
  useEffect(() => {
    fetchMessages();
    // Optionally, subscribe to realtime changes
    const channel = supabase
      .channel('chat_threads')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_threads' }, () => {
        fetchMessages();
      })
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function fetchMessages() {
    setLoading(true);
    const { data, error } = await supabase
      .from('chat_threads')
      .select('*')
      .order('created_at', { ascending: true });
    if (!error && data) {
      setMessages(data as Message[]);
    }
    setLoading(false);
  }

  async function handleSend() {
    if (!input.trim() || !author.trim()) return;
    setLoading(true);
    const { error } = await supabase.from('chat_threads').insert([
      {
        author,
        content: input,
        parent_id: replyTo,
      },
    ]);
    setInput("");
    setReplyTo(null);
    setLoading(false);
    if (error) alert("Failed to send message: " + error.message);
    // fetchMessages(); // Not needed if realtime is enabled
  }

  function renderThread(parentId?: string | null, level = 0) {
    return messages
      .filter((msg) => msg.parent_id === parentId)
      .map((msg) => (
        <div key={msg.id} style={{ marginLeft: level * 24 }} className="mb-2">
          <div className="bg-[#222] p-3 rounded-lg shadow text-red-200">
            <div className="text-xs opacity-60 mb-1">
              {msg.author} • {new Date(msg.created_at).toLocaleString()}
            </div>
            <div>{msg.content}</div>
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
      <div className="mb-4">
        <input
          className="px-3 py-2 rounded bg-[#18181c] border border-red-900/40 text-red-200 mb-2 w-full"
          placeholder="Your name (required)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="mb-6">{loading ? <div className="text-red-400">Loading...</div> : renderThread(null)}</div>
      <div className="flex gap-2">
        <input
          className="flex-1 px-4 py-2 rounded bg-[#18181c] border border-red-900/40 text-red-200"
          placeholder={replyTo ? "Reply to a message..." : "Start a new thread..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <button
          className="px-4 py-2 rounded bg-red-700 hover:bg-red-800 text-white font-semibold"
          onClick={handleSend}
          disabled={loading}
        >
          Send
        </button>
        {replyTo && (
          <button
            className="px-2 py-2 rounded bg-gray-700 text-xs text-white"
            onClick={() => setReplyTo(null)}
            disabled={loading}
          >
            Cancel
          </button>
        )}
      </div>
    </section>
  );
}
