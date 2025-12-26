// Displays parent messages + replies (threaded chat)
import React from "react";

export default function Thread({ messages, onReply }) {
  function renderThread(parentId = null, level = 0) {
    return messages
      .filter((msg) => msg.parentId === parentId)
      .map((msg) => (
        <div key={msg.id} style={{ marginLeft: level * 24 }} className="mb-2">
          <div className="bg-[#f7fafc] p-3 rounded-lg shadow text-[#181818] border border-gray-300">
            <div className="text-sm opacity-60 mb-1">
              {new Date(msg.createdAt).toLocaleString()}
            </div>
            <div>{msg.text}</div>
            <button
              className="mt-1 text-xs text-red-400 hover:underline"
              onClick={() => onReply(msg.id)}
            >
              Reply
            </button>
          </div>
          {renderThread(msg.id, level + 1)}
        </div>
      ));
  }
  return <div>{renderThread()}</div>;
}
