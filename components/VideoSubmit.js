// The “Post Your Work” box for creators
import React, { useState } from "react";

export default function VideoSubmit({ onSubmit }) {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (text && url) {
          onSubmit({ text, url });
          setText("");
          setUrl("");
        }
      }}
      className="bg-black/60 p-4 rounded-xl mb-6"
    >
      <input
        className="w-full mb-2 p-2 rounded"
        placeholder="Title or description"
        value={text}
        onChange={e => setText(e.target.value)}
        required
      />
      <input
        className="w-full mb-2 p-2 rounded"
        placeholder="Paste your video, audio, or image link"
        value={url}
        onChange={e => setUrl(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded font-bold"
      >
        Post Your Work
      </button>
    </form>
  );
}
