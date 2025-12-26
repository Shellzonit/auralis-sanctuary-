import React, { useEffect, useState, useRef } from "react";
import { supabase } from "../lib/supabaseClient";

function buildThread(messages, parentId = null) {
  return messages
    .filter((msg) => msg.parent_id === parentId)
    .map((msg) => ({
      ...msg,
      replies: buildThread(messages, msg.id),
    }));
}

function ThreadNode({ node, onReply, level = 0 }) {
  return (
    <div style={{ marginLeft: level * 32, marginBottom: 18 }}>
      <div className="bg-[#f7fafc] px-6 py-4 rounded-lg shadow border border-gray-300">
        <div className="text-xs opacity-60 mb-1 font-mono tracking-widest">
          {node.username || "Anonymous"} · {new Date(node.created_at).toLocaleString()}
        </div>
        <div className="whitespace-pre-wrap text-xl font-bold text-[#b1001a] leading-tight" style={{textShadow: '0 1px 0 #fff, 0 2px 8px #fff'}}>{node.text}</div>
        <button
          className="mt-2 text-xs text-red-600 hover:underline font-bold"
          onClick={() => onReply(node.id)}
        >
          Reply
        </button>
      </div>
      {node.replies && node.replies.map((reply) => (
        <ThreadNode key={reply.id} node={reply} onReply={onReply} level={level + 1} />
      ))}
    </div>
  );
}

export default function LargeThreadedChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [replyTo, setReplyTo] = useState(null);
  const [username, setUsername] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    setUsername("Visitor-" + Math.random().toString(36).substr(2, 5));
  }, []);

  useEffect(() => {
    fetchMessages();
    const sub = supabase
      .channel("threaded-chat")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "chat_messages" },
        (payload) => {
          setMessages((msgs) => [...msgs, payload.new]);
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(sub);
    };
  }, []);

  async function fetchMessages() {
    const { data } = await supabase
      .from("chat_messages")
      .select("*")
      .order("created_at", { ascending: true });
    setMessages(data || []);
  }

  async function handleSend(e) {
    e.preventDefault();
    if (!input.trim()) return;
    await supabase.from("chat_messages").insert([
      {
        text: input,
        parent_id: replyTo,
        username,
      },
    ]);
    setInput("");
    setReplyTo(null);
  }

  const threadTree = buildThread(messages);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="w-full flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 text-red-400 text-center">Sanctuary Threaded Chatroom</h2>
        <div
          ref={chatRef}
          className="bg-white/80 rounded-xl border border-gray-300 shadow-lg px-4 py-8 mb-6 overflow-y-auto"
          style={{ minHeight: 480, maxHeight: 600 }}
        >
          {threadTree.length === 0 ? (
            <div className="text-gray-400 text-center">No messages yet. Start the conversation!</div>
          ) : (
            threadTree.map((node) => (
              <ThreadNode key={node.id} node={node} onReply={setReplyTo} />
            ))
          )}
        </div>
        <form onSubmit={handleSend} className="flex gap-2 w-full max-w-3xl mx-auto">
          <input
            className="flex-1 px-4 py-3 rounded border border-gray-400 text-lg"
            placeholder={replyTo ? "Reply to a message..." : "Type your message..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-3 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-lg"
          >
            Send
          </button>
          {replyTo && (
            <button
              type="button"
              className="px-3 py-3 rounded bg-gray-300 text-gray-700 font-bold"
              onClick={() => setReplyTo(null)}
            >
              Cancel
            </button>
          )}
        </form>
      </div>
    </section>
  );
}
