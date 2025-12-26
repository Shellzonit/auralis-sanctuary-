
"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

type ContentItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
};

const CATEGORY_LABELS: Record<string, string> = {
  music: "Music & Audio",
  art: "Visual Art",
  writing: "Writing & Lore",
  videos: "Video Creations",
};

export default function ShowcasePage() {
  const [content, setContent] = useState<Record<string, ContentItem[]>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      setLoading(true);
      const response = await supabase
        ?.from("showcase_content")
        .select("id,title,description,category,url")
        .order("id", { ascending: false });
      if (response?.error) {
        setContent({});
        setLoading(false);
        return;
      }
      // Group by category
      const grouped: Record<string, ContentItem[]> = {};
      (response?.data || []).forEach((item: ContentItem) => {
        const cat = item.category?.toLowerCase() || "other";
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(item);
      });
      setContent(grouped);
      setLoading(false);
    }
    fetchContent();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#1a1a22] text-red-200 px-6 py-16 font-serif">
      <h1 className="text-4xl font-bold text-red-400 tracking-wide text-center mb-2">
        Content Showcase
      </h1>
      <div className="w-32 h-1 bg-red-600 mx-auto mb-10 rounded-full"></div>

      {Object.entries(CATEGORY_LABELS).map(([cat, label]) => (
        <section className="mb-16" key={cat}>
          <h2 className="text-3xl text-red-300 font-semibold text-center mb-2">{label}</h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8 rounded-full"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {loading ? (
              <div className="col-span-full text-center text-red-400">Loading...</div>
            ) : content[cat]?.length ? (
              content[cat].map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1f1f29] border border-red-900/40 rounded-lg p-4 shadow-md shadow-red-900/30"
                >
                  <h3 className="text-xl text-red-300 mb-2">{item.title}</h3>
                  <p className="text-red-200/70 text-sm mb-4">{item.description}</p>
                  <div className="w-full h-40 bg-black/40 rounded-md flex items-center justify-center text-red-400/60 mb-4">
                    {cat === "art" && <span>Image Preview</span>}
                    {cat === "music" && <span>Audio Preview</span>}
                    {cat === "videos" && <span>Video Preview</span>}
                    {cat === "writing" && <span>Text Preview</span>}
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    className="block text-center px-4 py-2 rounded-lg bg-[#2a2a35] hover:bg-[#3a3a45] border border-red-900/40 shadow-md shadow-red-900/30 transition text-red-200"
                  >
                    View Content →
                  </a>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-red-400">No content yet.</div>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
