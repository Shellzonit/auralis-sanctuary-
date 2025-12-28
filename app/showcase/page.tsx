"use client";
import { useState, useEffect } from "react";


type ShowcaseItem = {
  id: string;
  title: string;
  description: string;
  media_url: string;
  creator_name: string;
  featured: boolean;
  created_at: string;
};

export default function Showcase() {
  const [showcaseItems, setShowcaseItems] = useState<ShowcaseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState<null | "art" | "music">(null);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchShowcase = async () => {
      setLoading(true);
      // TODO: Replace with new backend fetch logic
      setShowcaseItems([]); // No Supabase, so empty for now
      setLoading(false);
    };
    fetchShowcase();
  }, []);

  const handleOpenForm = (type: "art" | "music") => {
    setShowForm(type);
    setFile(null);
    setTitle("");
    setCreator("");
  };

  const handleCloseForm = () => {
    setShowForm(null);
    setFile(null);
    setTitle("");
    setCreator("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title || !creator) return;
    setSubmitting(true);
    try {
      // Upload file to your storage (replace with your upload logic)
      const formData = new FormData();
      formData.append("file", file);
      const uploadRes = await fetch("/api/b2/upload", { method: "POST", body: formData });
      const data = await uploadRes.json();
      if (data.url) {
        // TODO: Replace with new backend save logic
        setSubmitting(false);
        handleCloseForm();
        setShowcaseItems([]); // No Supabase, so empty for now
      } else {
        setSubmitting(false);
        alert("Upload failed: " + (data.error || "Unknown error"));
      }
    } catch (err: any) {
      setSubmitting(false);
      alert("Upload failed: " + (err.message || "Unknown error"));
    }
  };

  return (
    <main style={{ background: "#181a20", minHeight: "100vh", color: "#f7fafc", fontFamily: "Inter, sans-serif", padding: 32 }}>
      <h1 style={{ fontSize: 36, fontWeight: 900, color: "#ffe082", marginBottom: 18 }}>Sanctuary Showcase</h1>
      <div style={{ marginBottom: 32, display: "flex", gap: 16 }}>
        <button
          style={{ background: "#ffe082", color: "#181a20", fontWeight: 700, border: "none", borderRadius: 8, padding: "10px 22px", fontSize: 16, cursor: "pointer" }}
          onClick={() => handleOpenForm("art")}
        >
          Upload Art
        </button>
        <button
          style={{ background: "#ffe082", color: "#181a20", fontWeight: 700, border: "none", borderRadius: 8, padding: "10px 22px", fontSize: 16, cursor: "pointer" }}
          onClick={() => handleOpenForm("music")}
        >
          Upload Music
        </button>
      </div>
      {showForm && (
        <div style={{ background: "#23242b", borderRadius: 16, padding: 28, marginBottom: 32, maxWidth: 420 }}>
          <form onSubmit={handleSubmit}>
            <h2 style={{ color: "#ffe082", fontWeight: 700, fontSize: 22, marginBottom: 18 }}>
              Upload {showForm === "art" ? "Art" : "Music"}
            </h2>
            <input
              type="file"
              accept={showForm === "art" ? "image/*" : "audio/*"}
              onChange={e => setFile(e.target.files?.[0] || null)}
              style={{ marginBottom: 16, width: "100%", color: "#f7fafc", background: "#181a20", border: "1px solid #31323a", borderRadius: 8, padding: 10 }}
            />
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              style={{ marginBottom: 16, width: "100%", color: "#f7fafc", background: "#181a20", border: "1px solid #31323a", borderRadius: 8, padding: 10, fontSize: 16 }}
            />
            <input
              type="text"
              value={creator}
              onChange={e => setCreator(e.target.value)}
              placeholder="Creator Name"
              style={{ marginBottom: 16, width: "100%", color: "#f7fafc", background: "#181a20", border: "1px solid #31323a", borderRadius: 8, padding: 10, fontSize: 16 }}
            />
            <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
              <button
                type="submit"
                disabled={submitting || !file || !title || !creator}
                style={{
                  background: '#ffe082',
                  color: '#181a20',
                  fontWeight: 700,
                  border: 'none',
                  borderRadius: 8,
                  padding: '10px 22px',
                  fontSize: 16,
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  opacity: submitting ? 0.7 : 1,
                }}
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
              <button
                type="button"
                onClick={handleCloseForm}
                style={{
                  background: 'transparent',
                  color: '#ffe082',
                  border: '1.5px solid #ffe082',
                  borderRadius: 8,
                  padding: '10px 22px',
                  fontSize: 16,
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 32,
        width: '100%',
        maxWidth: 900,
        marginBottom: 48,
      }}>
        {loading ? (
          <div style={{ color: '#ffe082', fontSize: 20, textAlign: 'center', width: '100%' }}>Loading showcase...</div>
        ) : showcaseItems.length === 0 ? (
          <div style={{ color: '#ffe082', fontSize: 20, textAlign: 'center', width: '100%' }}>No showcase items yet.</div>
        ) : showcaseItems.map(item => (
          <div key={item.id} style={{
            background: '#23242b',
            border: '1.5px solid #31323a',
            borderRadius: 18,
            boxShadow: '0 2px 16px #0004',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            minHeight: 340,
            transition: 'transform .13s',
          }}>
            <img src={item.media_url} alt={item.title} style={{ width: '100%', height: 160, objectFit: 'cover', borderTopLeftRadius: 18, borderTopRightRadius: 18, borderBottom: '1px solid #31323a' }} />
            <div style={{ padding: '18px 18px 10px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 700, fontSize: 20, color: '#ffe082', marginBottom: 4 }}>{item.title}</div>
              <div style={{ fontSize: 15, color: '#f7fafc', opacity: 0.92, marginBottom: 8 }}>{item.description}</div>
              <div style={{ fontSize: 13, color: '#ffe082bb', marginTop: 'auto' }}>by {item.creator_name}</div>
            </div>
          </div>
        ))}
      </section>
      {/* Future: Add filters, likes, and user submissions here */}
    </main>
  );
}











