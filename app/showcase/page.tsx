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
      try {
        const res = await fetch("/api/showcase");
        const json = await res.json();
        if (json.items) setShowcaseItems(json.items);
        else setShowcaseItems([]);
      } catch (err) {
        setShowcaseItems([]);
      }
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
        // Save metadata to Neon/Postgres
        const saveRes = await fetch("/api/showcase", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            creator,
            fileUrl: data.url,
            type: showForm,
          }),
        });
        const saveJson = await saveRes.json();
        if (saveJson.item) {
          setShowcaseItems(prev => [saveJson.item, ...prev]);
          handleCloseForm();
        } else {
          alert("Upload succeeded but failed to save metadata: " + (saveJson.error || "Unknown error"));
        }
        setSubmitting(false);
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 38,
        width: '100%',
        maxWidth: 1000,
        marginBottom: 56,
      }}>
        {loading ? (
          <div style={{ color: '#00f2ff', fontSize: 22, textAlign: 'center', width: '100%' }}>Loading hologram showcase...</div>
        ) : showcaseItems.length === 0 ? (
          <div style={{ color: '#00f2ff', fontSize: 22, textAlign: 'center', width: '100%' }}>No hologram cards yet.</div>
        ) : showcaseItems.map(item => (
          <div
            key={item.id}
            style={{
              background: 'rgba(30, 34, 54, 0.65)',
              borderRadius: 22,
              boxShadow: item.featured ? '0 8px 48px #00f2ff66, 0 2px 16px #0006' : '0 4px 24px #00f2ff22, 0 1.5px 8px #0004',
              border: item.featured ? '2.5px solid #00f2ff' : '1.5px solid rgba(0,242,255,0.18)',
              backdropFilter: 'blur(14px)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              minHeight: 360,
              position: 'relative',
              transition: 'box-shadow .18s, transform .18s',
              animation: 'floatHolo 2.8s ease-in-out infinite',
            }}
          >
            {item.featured && (
              <div style={{
                position: 'absolute',
                top: 12,
                right: 18,
                background: 'linear-gradient(90deg,#00f2ff 60%,#ffe082 100%)',
                color: '#181a20',
                fontWeight: 800,
                fontSize: 15,
                borderRadius: 8,
                padding: '4px 14px',
                boxShadow: '0 0 12px #00f2ff44',
                letterSpacing: '.04em',
                zIndex: 2,
              }}>🌟 Featured</div>
            )}
            <img
              src={item.media_url}
              alt={item.title}
              style={{
                width: '100%',
                height: 170,
                objectFit: 'cover',
                borderTopLeftRadius: 22,
                borderTopRightRadius: 22,
                borderBottom: '1.5px solid #00f2ff33',
                boxShadow: '0 0 24px #00f2ff22',
                filter: item.featured ? 'drop-shadow(0 0 18px #00f2ff88)' : 'none',
              }}
            />
            <div style={{ padding: '22px 22px 14px 22px', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ fontWeight: 800, fontSize: 22, color: '#00f2ff', marginBottom: 6, textShadow: '0 0 12px #00f2ff44' }}>{item.title}</div>
              <div style={{ fontSize: 16, color: '#f7fafc', opacity: 0.96, marginBottom: 10, textShadow: '0 0 8px #00f2ff22' }}>{item.description}</div>
              <div style={{ fontSize: 14, color: '#ffe082bb', marginTop: 'auto', fontWeight: 600, textShadow: '0 0 8px #ffe08244' }}>by {item.creator_name}</div>
              <div style={{ position: 'absolute', left: 18, bottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 18, color: '#00f2ffbb', textShadow: '0 0 8px #00f2ff44', fontWeight: 700 }}>💠</span>
                <span style={{ fontSize: 15, color: '#00f2ff', fontWeight: 700 }}>Hologram Card</span>
              </div>
            </div>
          </div>
        ))}
      </section>
      <style>{`
        @keyframes floatHolo {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px) scale(1.02); }
          100% { transform: translateY(0px); }
        }
      `}</style>
      {/* Future: Add filters, likes, and user submissions here */}
    </main>
  );
}











