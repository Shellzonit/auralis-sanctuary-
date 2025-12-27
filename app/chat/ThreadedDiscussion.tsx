import React, { useState, useEffect, useCallback } from "react";
import { supabase, createSupabaseClient } from "@/lib/supabaseClient";

type Message = {
  id: string;
  parentId: string | null;
  author: string;
  content: string;
  createdAt: string;
};

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}






  const [messages, setMessages] = useState<Message[]>([]);
  const [newThread, setNewThread] = useState("");
  const sb = supabase ?? createSupabaseClient();

  // Fetch all messages on mount
  useEffect(() => {
    async function fetchMessages() {
      const { data, error } = await sb
        .from("chat_threads")
        .select("id,parent_id,author,content,created_at")
        .order("created_at", { ascending: true });
      if (!error && data) {
        setMessages(
          data.map((msg: any) => ({
            id: msg.id,
            parentId: msg.parent_id,
            author: msg.author,
            content: msg.content,
            createdAt: msg.created_at,
          }))
        );
      }
    }
    fetchMessages();

    // Subscribe to real-time changes
    const channel = sb
      .channel('chat_threads_changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_threads' }, (payload) => {
        fetchMessages();
      })
      .subscribe();
    return () => {
      channel.unsubscribe();
    };
  }, []);

  // Add a new message (thread or reply)
  const addMessage = useCallback(async (content: string, parentId: string | null = null) => {
    await sb.from("chat_threads").insert({
      parent_id: parentId,
      author: "User", // Replace with real user if available
      content,
    });
    // No need to update state here; real-time subscription will update
  }, [sb]);

  function renderReplies(parentId: string | null, level = 0) {
    return messages
      .filter((msg) => msg.parentId === parentId)
      .map((msg) => (
        <div key={msg.id} style={{ marginLeft: level * 24, borderLeft: level ? "2px solid #ccc" : undefined, paddingLeft: 8 }}>
          <div>
            <span className="font-bold">{msg.author}</span>: {msg.content}
            <span className="text-xs text-gray-400 ml-2">{new Date(msg.createdAt).toLocaleString()}</span>
          </div>
          <ReplyForm parentId={msg.id} onReply={addMessage} />
          {renderReplies(msg.id, level + 1)}
        </div>
      ));
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Threaded Discussions</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (newThread.trim()) {
            addMessage(newThread, null);
            setNewThread("");
          }
        }}
        className="mb-4 flex gap-2"
      >
        <input
          className="border px-2 py-1 flex-1"
          value={newThread}
          onChange={(e) => setNewThread(e.target.value)}
          placeholder="Start a new thread..."
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">
          Post
        </button>
      </form>
      <div>{renderReplies(null)}</div>
    </div>
  );
}

function ReplyForm({ parentId, onReply }: { parentId: string; onReply: (content: string, parentId: string) => void }) {
  const [reply, setReply] = useState("");
  const [show, setShow] = useState(false);
  return (
    <div className="my-1">
      {show ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (reply.trim()) {
              onReply(reply, parentId);
              setReply("");
              setShow(false);
            }
          }}
          className="flex gap-2 mt-1"
        >
          <input
            className="border px-2 py-1 flex-1"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Write a reply..."
          />
          <button type="submit" className="bg-green-600 text-white px-3 py-1 rounded">
            Reply
          </button>
          <button type="button" className="text-xs ml-2" onClick={() => setShow(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <button className="text-blue-500 text-xs mt-1" onClick={() => setShow(true)}>
          Reply
        </button>
      )}
    </div>
  );
}
