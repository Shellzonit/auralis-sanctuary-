"use client";

import React, { useState } from "react";

type StreamEntry = {
  title: string;
  link: string;
  description: string;
};

export default function StreamPage() {
  const [entries, setEntries] = useState<StreamEntry[]>([]);
  const [form, setForm] = useState<StreamEntry>({
    title: "",
    link: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.title || !form.link) return;

    setEntries([...entries, form]);
    setForm({ title: "", link: "", description: "" });
  };

  return (
    <main
      className="min-h-screen px-6 py-10 flex flex-col items-center"
      style={{
        background: "var(--sanctuary-bg)",
        color: "var(--sanctuary-text)"
      }}
    >
      <h1 className="text-4xl font-bold mb-8">Creator Stream</h1>

      {/* RIGHTS NOTICE */}
      <div className="w-full max-w-xl mb-4 p-3 rounded bg-yellow-100 text-yellow-900 border border-yellow-300 text-sm">
        By submitting, you confirm you own the rights to all content you share. Do not upload or link to material you do not have permission to distribute.
      </div>

      {/* SUBMISSION FORM */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl p-6 rounded-lg shadow-md mb-12"
        style={{
          background: "var(--sanctuary-soft)",
          border: "2px solid var(--sanctuary-border)"
        }}
      >
        <h2 className="text-2xl font-semibold mb-4">Share Your AI Project</h2>

        <label className="block mb-3">
          <span className="font-medium">Title</span>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full p-2 rounded mt-1"
            style={{
              background: "white",
              border: "1px solid var(--sanctuary-border)"
            }}
          />
        </label>

        <label className="block mb-3">
          <span className="font-medium">Link (audio or video)</span>
          <input
            type="text"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
            className="w-full p-2 rounded mt-1"
            style={{
              background: "white",
              border: "1px solid var(--sanctuary-border)"
            }}
          />
        </label>

        <label className="block mb-4">
          <span className="font-medium">Description (optional)</span>
          <textarea
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
            className="w-full p-2 rounded mt-1"
            rows={3}
            style={{
              background: "white",
              border: "1px solid var(--sanctuary-border)"
            }}
          />
        </label>

        <button
          type="submit"
          className="px-4 py-2 rounded font-semibold"
          style={{
            background: "var(--sanctuary-accent)",
            color: "white"
          }}
        >
          Add to Stream
        </button>
      </form>

      {/* STREAM GALLERY */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {entries.map((entry, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg shadow-md"
            style={{
              background: "var(--sanctuary-soft)",
              border: "2px solid var(--sanctuary-border)"
            }}
          >
            <h3 className="text-xl font-bold mb-2">{entry.title}</h3>

            {/* EMBEDDED PLAYER */}
            <div className="mb-3">
              <iframe
                src={entry.link}
                className="w-full h-48 rounded"
                allow="autoplay; encrypted-media"
              />
            </div>

            {entry.description && (
              <p className="text-sm">{entry.description}</p>
            )}
          </div>
        ))}
      </div>
      {/* NOW PLAYING BAR */}
      {entries.length > 0 && (
        <div
          className="fixed bottom-0 left-0 w-full flex items-center justify-center bg-amber-500 text-black py-3 px-6 shadow-lg z-50"
          style={{
            fontWeight: 600,
            fontSize: "1.1rem",
            letterSpacing: "0.02em"
          }}
        >
          <span className="mr-3">Now Playing:</span>
          <span className="font-bold mr-2">{entries[entries.length - 1].title}</span>
          <a
            href={entries[entries.length - 1].link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition ml-2"
          >
            Open
          </a>
          {entries[entries.length - 1].description && (
            <span className="ml-4 text-sm italic">{entries[entries.length - 1].description}</span>
          )}
        </div>
      )}
    </main>
  );
}
