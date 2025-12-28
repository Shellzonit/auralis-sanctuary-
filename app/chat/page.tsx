
"use client";
import { useState, useRef, useEffect } from "react";
import { getAblyClient } from "../../lib/ablyClient";

type Message = {
  id: number;
  author: string;
  avatar: string;
  text: string;
  timestamp: string;
  parentId?: number;
  replies?: Message[];
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyInput, setReplyInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch("/api/chat");
      const json = await res.json();
      if (json.messages) {
        // Threaded structure
        const threads = json.messages.filter((m: any) => !m.parent_id);
        const replies = json.messages.filter((m: any) => m.parent_id);
        setMessages(
          threads.map((msg: any) => ({
            ...msg,
            replies: replies.filter((r: any) => r.parent_id === msg.id),
          }))
        );
      }
    };
    fetchMessages();

    // Ably subscribe
    const ably = getAblyClient();
    const channel = ably.channels.get("sanctuary-chat");
    const onMessage = (msg: any) => {
      const data = msg.data;
      if (data.type === "message") {
        setMessages(prev => [
          { ...data.message, replies: [] },
          ...prev,
        ]);
      } else if (data.type === "reply") {
        setMessages(prevMsgs =>
          prevMsgs.map(m =>
            m.id === data.parentId
              ? { ...m, replies: [...(m.replies || []), data.reply] }
              : m
          )
        );
      }
    };
    channel.subscribe(onMessage);
    return () => channel.unsubscribe(onMessage);
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const msg: Message = {
      id: Date.now(),
      author: "You",
      avatar: `https://api.dicebear.com/7.x/personas/svg?seed=You`,
      text: input,
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [msg, ...prev]);
    await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        author: msg.author,
        avatar: msg.avatar,
        text: msg.text,
        parentId: null,
      }),
    });
    const ably = getAblyClient();
    ably.channels.get("sanctuary-chat").publish("message", { type: "message", message: msg });
    setInput("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleReply = async (msg: Message, e: React.FormEvent) => {
    e.preventDefault();
    if (!replyInput.trim()) return;
    const reply: Message = {
      id: Date.now(),
      author: "You",
      avatar: `https://api.dicebear.com/7.x/personas/svg?seed=You`,
      text: replyInput,
      timestamp: new Date().toISOString(),
      parentId: msg.id,
    };
    setMessages(prevMsgs =>
      prevMsgs.map(m =>
        m.id === msg.id
          ? { ...m, replies: [...(m.replies || []), reply] }
          : m
      )
    );
    await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        author: reply.author,
        avatar: reply.avatar,
        text: reply.text,
        parentId: msg.id,
      }),
    });
    const ably = getAblyClient();
    ably.channels.get("sanctuary-chat").publish("reply", { type: "reply", parentId: msg.id, reply });
    setReplyInput("");
    setReplyingTo(null);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#181a20", color: "#f7fafc", fontFamily: "Inter, sans-serif", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <header style={{ width: "100%", padding: "1.5rem 0 1rem 0", textAlign: "center", borderBottom: "1px solid #23242b", marginBottom: 0 }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 900, letterSpacing: ".08em", color: "#ffe082", margin: 0 }}>Sanctuary Chat</h1>
        <div style={{ fontSize: 18, color: "#f7fafc", opacity: 0.7, fontWeight: 500, letterSpacing: ".04em" }}>Threaded Community Chat</div>
      </header>
      <section style={{ width: "100%", maxWidth: 540, flex: 1, padding: "2rem 0 6rem 0", display: "flex", flexDirection: "column", gap: 32 }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ background: "#23242b", borderRadius: 16, padding: 20, boxShadow: "0 2px 16px #0004" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <img src={msg.avatar} alt={msg.author} style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid #ffe08255" }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 17, color: "#ffe082" }}>{msg.author}</div>
                <div style={{ fontSize: 13, color: "#aaa" }}>{new Date(msg.timestamp).toLocaleString()}</div>
              </div>
            </div>
            <div style={{ fontSize: 17, color: "#f7fafc", margin: "14px 0 8px 0" }}>{msg.text}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 6 }}>
              <span style={{ fontSize: 15, color: "#ffe082bb", cursor: "pointer" }}>❤️</span>
              <span style={{ fontSize: 15, color: "#7fd1b9", cursor: "pointer" }} onClick={() => setReplyingTo(msg.id)}>↩️ Reply</span>
            </div>
            {replyingTo === msg.id && (
              <form onSubmit={e => handleReply(msg, e)} style={{ marginTop: 10, marginBottom: 10, display: 'flex', gap: 8 }}>
                <input
                  type="text"
                  value={replyInput}
                  onChange={e => setReplyInput(e.target.value)}
                  placeholder="Type your reply..."
                  style={{ flex: 1, padding: '0.6rem 1rem', borderRadius: 8, border: '1px solid #31323a', background: '#181a20', color: '#f7fafc', fontSize: 15 }}
                  autoFocus
                />
                <button type="submit" style={{ background: '#ffe082', color: '#23242b', fontWeight: 700, fontSize: 15, border: 'none', borderRadius: 8, padding: '0.6rem 1.1rem', cursor: 'pointer' }}>Send</button>
                <button type="button" onClick={() => { setReplyingTo(null); setReplyInput(""); }} style={{ background: 'transparent', color: '#ffe082', border: '1.5px solid #ffe082', borderRadius: 8, padding: '0.6rem 1.1rem', fontSize: 15, cursor: 'pointer' }}>Cancel</button>
              </form>
            )}
            {/* Replies */}
            {msg.replies && msg.replies.length > 0 && (
              <div style={{ marginLeft: 36, marginTop: 10, borderLeft: "2px solid #31323a", paddingLeft: 16 }}>
                {msg.replies.map(reply => (
                  <div key={reply.id} style={{ marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <img src={reply.avatar} alt={reply.author} style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid #ffe08255" }} />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 15, color: "#ffe082" }}>{reply.author}</div>
                        <div style={{ fontSize: 12, color: "#aaa" }}>{new Date(reply.timestamp).toLocaleString()}</div>
                      </div>
                    </div>
                    <div style={{ fontSize: 15, color: "#f7fafc", margin: "6px 0 4px 0" }}>{reply.text}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
      <form
        style={{ position: "fixed", bottom: 0, left: 0, width: "100%", background: "#23242b", borderTop: "1px solid #31323a", padding: "1rem 0.5rem", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 10 }}
        onSubmit={handleSend}
      >
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ width: "100%", maxWidth: 340, padding: "0.9rem 1.2rem", borderRadius: 12, border: "none", fontSize: 17, background: "#181a20", color: "#f7fafc", marginRight: 8, outline: "none" }}
        />
        <input
          type="file"
          ref={fileInputRef}
          style={{ marginRight: 8, background: '#181a20', color: '#f7fafc', border: 'none', borderRadius: 8, fontSize: 15, maxWidth: 160 }}
        />
        <button type="submit" style={{ background: "#ffe082", color: "#23242b", fontWeight: 700, fontSize: 17, border: "none", borderRadius: 10, padding: "0.9rem 1.2rem", cursor: "pointer", boxShadow: "0 2px 8px #0002", transition: "background .18s" }}>
          Send
        </button>
      </form>
    </main>
  );
}
