
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function ShowcasePage() {
  const STATIC_AI_PHOTOS = [
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      title: "Sample AI Photo 1",
    },
    {
      url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      title: "Sample AI Photo 2",
    },
  ];

  const [photos, setPhotos] = useState([...STATIC_AI_PHOTOS]);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Fetch user-submitted AI photos from Supabase
  async function fetchPhotos() {
    if (!supabase) return;
    const { data, error } = await supabase
      .from("showcase_content")
      .select("id, title, url, category")
      .eq("category", "art")
      .order("id", { ascending: false });
    if (!error && data) {
      const userPhotos = data.map((item: any) => ({ url: item.url, title: item.title || "User Submission" }));
      setPhotos([...STATIC_AI_PHOTOS, ...userPhotos]);
    }
  }

  useEffect(() => {
    fetchPhotos();
  }, []);

  // Handle upload form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/submit-content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description: "", category: "art", url }),
    });
    setSubmitted(true);
    setTitle("");
    setUrl("");
    setTimeout(() => setSubmitted(false), 4000);
    fetchPhotos(); // Refresh gallery
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#1a1a22] text-red-200 px-6 py-16 font-serif">
      <h1 className="text-4xl font-bold text-red-400 tracking-wide text-center mb-2">
        AI Photo Showcase
      </h1>
      <div className="w-32 h-1 bg-red-600 mx-auto mb-10 rounded-full"></div>

      {/* Upload Form */}
      <section id="submit-content" className="max-w-2xl mx-auto mt-0 mb-10 bg-[#18181f] rounded-2xl shadow-2xl p-8 border-2 border-red-700/40">
        <h2 className="text-3xl text-center text-red-400 mb-6 font-bold">Submit Your AI Photo</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            className="w-full px-4 py-3 rounded border border-gray-600 text-lg bg-[#23232b] text-white"
            placeholder="Title (optional)"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            className="w-full px-4 py-3 rounded border border-gray-600 text-lg bg-[#23232b] text-white"
            placeholder="Image URL (required)"
            value={url}
            onChange={e => setUrl(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full px-6 py-3 rounded bg-red-600 hover:bg-red-700 text-white font-bold text-lg"
          >
            Submit
          </button>
          {submitted && (
            <div className="text-green-400 text-center font-bold mt-2">Submitted!</div>
          )}
        </form>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {photos.map((photo, idx) => (
          <div key={idx} className="bg-[#1f1f29] border border-red-900/40 rounded-lg p-4 shadow-md shadow-red-900/30 flex flex-col items-center">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-64 object-cover rounded-md mb-4 border-2 border-red-700/40 shadow-lg"
              loading="lazy"
            />
            <h3 className="text-xl text-red-300 mb-2 text-center">{photo.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}
