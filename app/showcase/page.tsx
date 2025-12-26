
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function ShowcasePage() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const PHOTOS_PER_PAGE = 6;
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Fetch user-submitted AI photos from Supabase
  async function fetchPhotos() {
    if (!supabase) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from("showcase photos")
      .select("id, title, url, category")
      .eq("category", "art")
      .order("id", { ascending: false });
    if (!error && data) {
      const userPhotos = data.map((item: any) => ({ url: item.url, title: item.title || "User Submission" }));
      setPhotos(userPhotos);
    }
    setLoading(false);
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
      body: JSON.stringify({ title, description: "", category: "art", url, table: "showcase photos" }),
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

      {/* Paginated Photo Gallery */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <svg className="animate-spin h-8 w-8 text-red-400 mr-3" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
          <span className="text-red-300 text-lg font-semibold">Loading photos...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          {Array.from({ length: PHOTOS_PER_PAGE }).map((_, idx) => {
            const photo = photos[(page - 1) * PHOTOS_PER_PAGE + idx];
            if (photo) {
              return (
                <div key={idx} className="bg-[#1f1f29] border border-red-900/40 rounded-lg p-4 shadow-md shadow-red-900/30 flex flex-col items-center">
                  <a href={photo.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-64 object-cover rounded-md mb-4 border-2 border-red-700/40 shadow-lg hover:opacity-80 transition"
                      loading="lazy"
                    />
                  </a>
                  <h3 className="text-xl text-red-300 mb-2 text-center break-words">{photo.title}</h3>
                </div>
              );
            } else {
              return (
                <div key={idx} className="bg-[#23232b] border border-dashed border-red-900/40 rounded-lg p-4 shadow-inner flex flex-col items-center justify-center min-h-[18rem]">
                  <span className="text-red-400 text-4xl mb-2">+</span>
                  <span className="text-red-300 text-center">No photo yet</span>
                </div>
              );
            }
          })}
        </div>
      )}
      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded bg-red-700 text-white font-bold disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg text-red-300 font-bold">Page {page}</span>
        <button
          onClick={() => setPage((p) => (p * PHOTOS_PER_PAGE < photos.length ? p + 1 : p))}
          disabled={page * PHOTOS_PER_PAGE >= photos.length}
          className="px-4 py-2 rounded bg-red-700 text-white font-bold disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  );
}
