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

function ThreadNode({ node, onReply }) {
  return (
    <div style={{ marginLeft: node.parent_id ? 24 : 0 }} className="mb-2">
      <div className="bg-[#f7fafc] p-3 rounded-lg shadow text-[#181818] border border-gray-300">
        <div className="text-sm opacity-60 mb-1">
          {node.username || "Anonymous"} · {new Date(node.created_at).toLocaleString()}
        </div>
        <div className="whitespace-pre-wrap mb-2">{node.text}</div>
        <button
          className="mt-1 text-xs text-red-400 hover:underline"
          onClick={() => onReply(node.id)}
        >
          Reply
        </button>
      </div>
      {node.replies && node.replies.map((reply) => (
        <ThreadNode key={reply.id} node={reply} onReply={onReply} />
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
    // Generate a random username for demo
    setUsername(
      "Visitor-" + Math.random().toString(36).substr(2, 5)
    );
  }, []);

  useEffect(() => {
    // Fetch messages
    fetchMessages();
    // Subscribe to real-time updates
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

  // Build thread tree
  const threadTree = buildThread(messages);

  // Scroll to bottom on new message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <section className="w-full max-w-4xl mx-auto mt-8 mb-12">
      <h2 className="text-3xl font-bold mb-6 text-red-400 text-center">Sanctuary Threaded Chatroom</h2>
      <div
        ref={chatRef}
        className="bg-white/80 rounded-xl border border-gray-300 shadow-lg p-6 mb-6 overflow-y-auto"
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
      <form onSubmit={handleSend} className="flex gap-2">
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
    </section>
  );
}
