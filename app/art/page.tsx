"use client";

import { useState } from "react";

interface ArtItem {
  id: number;
  title: string;
  artist: string;
  style: string;
  link: string;
}

const initialArt: ArtItem[] = [
  {
    id: 1,
    title: "Symbolic Dream",
    artist: "Nova Pulse",
    style: "Symbolic",
    link: "https://example.com/artwork1"
  },
  {
    id: 2,
    title: "AI Leaf Texture",
    artist: "Echo Weaver",
    style: "AI Visual",
    link: "https://example.com/artwork2"
  }
];

export default function ArtPage() {
  const [artworks, setArtworks] = useState<ArtItem[]>(initialArt);
  const [form, setForm] = useState({ title: "", artist: "", style: "", link: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setArtworks([
      ...artworks,
      { id: Date.now(), ...form }
    ]);
    setForm({ title: "", artist: "", style: "", link: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  }

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-rose-700">Art Gallery</h1>
      <form onSubmit={handleSubmit} className="mb-8 w-full max-w-md space-y-3 bg-amber-50 p-6 rounded-xl border border-amber-200 shadow">
        <input
          type="text"
          name="title"
          placeholder="Artwork Title"
          value={form.title}
          onChange={handleChange}
          className="w-full p-2 border border-amber-200 rounded"
          required
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist Name"
          value={form.artist}
          onChange={handleChange}
          className="w-full p-2 border border-amber-200 rounded"
          required
        />
        <input
          type="text"
          name="style"
          placeholder="Art Style (e.g. Symbolic, AI Visual)"
          value={form.style}
          onChange={handleChange}
          className="w-full p-2 border border-amber-200 rounded"
          required
        />
        <input
          type="url"
          name="link"
          placeholder="Artwork Link (URL)"
          value={form.link}
          onChange={handleChange}
          className="w-full p-2 border border-amber-200 rounded"
          required
        />
        <button type="submit" className="mt-2 px-5 py-2 bg-rose-700 text-white rounded-lg font-semibold hover:bg-rose-800 transition">Submit Art</button>
        {submitted && <div className="text-green-700 font-semibold mt-2">Artwork submitted!</div>}
      </form>
      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {artworks.map((art) => (
          <div key={art.id} className="bg-white border border-amber-100 rounded-xl p-4 shadow flex flex-col items-start">
            <div className="font-bold text-rose-700 text-lg mb-1">{art.title}</div>
            <div className="text-gray-700 mb-1">by {art.artist}</div>
            <div className="text-xs text-gray-500 mb-2">Style: {art.style}</div>
            <a href={art.link} target="_blank" rel="noopener noreferrer" className="text-rose-700 underline font-medium">View Artwork</a>
          </div>
        ))}
      </div>
    </main>
  );
}
