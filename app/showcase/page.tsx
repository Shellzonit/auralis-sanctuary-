
import { useState, useEffect } from "react";

type ShowcaseItem = {
  id: string;
  title: string;
  description: string;
  media_url: string;
  type: "art" | "music";
};

export default function ShowcaseRoom() {
  const [items, setItems] = useState<ShowcaseItem[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetch("/api/showcase")
      .then((res) => res.json())
      .then((data) => setItems(data.items || []));
  }, []);

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!title) return;
    setUploading(true);
    // For now, assume fileUrl is empty or generated elsewhere
    const payload = {
      title,
      description,
      creator: "anonymous", // Replace with actual user if available
      fileUrl: file ? "" : "", // You may want to upload to B2 and get a URL here
      type: file ? (file.type.startsWith("audio") ? "music" : "art") : "art"
    };
    await fetch("/api/showcase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setUploading(false);
    setFile(null);
    setTitle("");
    setDescription("");
    fetch("/api/showcase")
      .then((res) => res.json())
      .then((data) => setItems(data.items || []));
  }

  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-12">
      <form className="flex flex-col gap-2 mb-8 p-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 shadow-lg w-full max-w-md" onSubmit={handleUpload}>
        <input
          type="file"
          className="text-sm text-white bg-transparent border-none outline-none"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <input
          type="text"
          placeholder="Title"
          className="text-sm px-2 py-1 rounded bg-white/10 text-white border border-white/20 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description (optional)"
          className="text-sm px-2 py-1 rounded bg-white/10 text-white border border-white/20 outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          disabled={uploading}
          className="px-4 py-1 rounded bg-blue-700 text-white shadow hover:bg-blue-800 transition"
        >
          Upload
        </button>
      </form>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl px-2">
        {items.length === 0 ? (
          <div className="text-blue-400 text-center w-full">No showcase items yet.</div>
        ) : (
          items.map((item) => (
            <a
              key={item.id}
              href={item.media_url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white/10 border border-white/20 shadow-xl backdrop-blur p-5 flex flex-col items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-2xl"
              style={{ minHeight: 180 }}
            >
              {item.type === "art" ? (
                <img
                  src={item.media_url}
                  alt={item.title || "Showcase item"}
                  className="w-full h-32 object-cover rounded-xl mb-2 shadow-lg"
                />
              ) : (
                <div className="w-full h-32 flex items-center justify-center bg-gradient-to-r from-gray-800 to-blue-700 rounded-xl mb-2">
                  <span className="text-4xl text-blue-400">🎵</span>
                </div>
              )}
              <div className="text-base font-medium text-white mb-1 text-center">
                {item.title || "Untitled"}
              </div>
              <div className="text-xs text-white/70 text-center">
                {item.description || ""}
              </div>
            </a>
          ))
        )}
      </section>
    </main>
  );
}











