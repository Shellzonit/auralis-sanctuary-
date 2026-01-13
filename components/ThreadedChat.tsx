
"use client";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

interface Message {
  id: string;
  author: string;
  content: string;
  created_at: string;
}

export default function DevTestChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMessages();
    const channel = supabase
      .channel('chat_messages')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_messages' }, () => {
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
      .from('chat_messages')
      .select('*')
      .order('timestamp', { ascending: true });
    if (!error && data) {
      setMessages(data as Message[]);
    }
    setLoading(false);
  }

  async function handleSend() {
    if (!input.trim() || !author.trim()) return;
    setLoading(true);
    const { error } = await supabase.from('chat_messages').insert([
      {
        author,
        text: input,
      },
    ]);
    setInput("");
    setLoading(false);
    if (error) alert("Failed to send message: " + error.message);
  }

  return (
    <section className="w-full max-w-xl mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-4 text-red-300">DevTest Chat Room</h2>
      <div className="mb-4">
        <input
          className="px-3 py-2 rounded bg-[#18181c] border border-red-900/40 text-red-200 mb-2 w-full"
          placeholder="Your name (required)"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="mb-6 h-96 overflow-y-auto bg-[#18181c] rounded-lg p-4 border border-red-900/40">
        {loading ? (
          <div className="text-red-400">Loading...</div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="mb-3">
              <div className="text-xs opacity-60 mb-1 text-red-300">
                {msg.author} • {new Date(msg.created_at).toLocaleString()}
              </div>
              <div className="text-red-100 bg-[#222] p-3 rounded-lg shadow">
                {msg.content || msg.text}
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 px-4 py-2 rounded bg-[#18181c] border border-red-900/40 text-red-200"
          placeholder="Type your message..."
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
      </div>
    </section>
  );
}
