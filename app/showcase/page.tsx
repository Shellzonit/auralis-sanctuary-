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
  type: "art" | "music";
};

export default function ShowcaseRoom() {
  const [showcaseItems, setShowcaseItems] = useState<ShowcaseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState<null | "art" | "music">(null);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
    setDescription("");
    setCreator("");
  };

  const handleCloseForm = () => {
    setShowForm(null);
    setFile(null);
    setTitle("");
    setDescription("");
    setCreator("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title || !creator) return;
    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const uploadRes = await fetch("/api/b2/upload", { method: "POST", body: formData });
      const data = await uploadRes.json();
      if (data.url) {
        const saveRes = await fetch("/api/showcase", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            description,
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
    <main style={{ background: "radial-gradient(ellipse at top,#181a20 80%,#23242b 100%)", minHeight: "100vh", color: "#f7fafc", fontFamily: "Inter, sans-serif", padding: 32 }}>
      <h1 style={{ fontSize: 38, fontWeight: 900, color: "#00f2ff", marginBottom: 18, textShadow: "0 0 32px #00f2ff88" }}>Sanctuary Hologram Showcase</h1>
      <div style={{ marginBottom: 32, display: "flex", gap: 16 }}>
        <button
          style={{ background: "linear-gradient(90deg,#00f2ff 60%,#ffe082 100%)", color: "#181a20", fontWeight: 700, border: "none", borderRadius: 12, padding: "12px 28px", fontSize: 18, cursor: "pointer", boxShadow: "0 0 18px #00f2ff44" }}
          onClick={() => handleOpenForm("art")}
        >
          Upload Art
        </button>
        <button
          style={{ background: "linear-gradient(90deg,#ffe082 60%,#00f2ff 100%)", color: "#181a20", fontWeight: 700, border: "none", borderRadius: 12, padding: "12px 28px", fontSize: 18, cursor: "pointer", boxShadow: "0 0 18px #ffe08244" }}
          onClick={() => handleOpenForm("music")}
        >
          Upload Music
        </button>
      </div>
      {showForm && (
        <div style={{ background: "rgba(30,34,54,0.85)", borderRadius: 18, padding: 32, marginBottom: 32, maxWidth: 440, boxShadow: "0 0 32px #00f2ff33", backdropFilter: "blur(12px)" }}>
          <form onSubmit={handleSubmit}>
            <h2 style={{ color: "#00f2ff", fontWeight: 700, fontSize: 24, marginBottom: 18, textShadow: "0 0 18px #00f2ff44" }}>
              Upload {showForm === "art" ? "Art" : "Music"}
            </h2>
            <input
              type="file"
              accept={showForm === "art" ? "image/*" : "audio/*"}
              onChange={e => setFile(e.target.files?.[0] || null)}
              style={{ marginBottom: 16, width: "100%", color: "#f7fafc", background: "#181a20", border: "1.5px solid #00f2ff44", borderRadius: 10, padding: 12, fontSize: 16 }}
            />
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              style={{ marginBottom: 16, width: "100%", color: "#f7fafc", background: "#181a20", border: "1.5px solid #00f2ff44", borderRadius: 10, padding: 12, fontSize: 16 }}
            />
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              style={{ marginBottom: 16, width: "100%", color: "#f7fafc", background: "#181a20", border: "1.5px solid #00f2ff44", borderRadius: 10, padding: 12, fontSize: 16 }}
            />
            <input
              type="text"
              value={creator}
              onChange={e => setCreator(e.target.value)}
              placeholder="Creator Name"
              style={{ marginBottom: 16, width: "100%", color: "#f7fafc", background: "#181a20", border: "1.5px solid #ffe08244", borderRadius: 10, padding: 12, fontSize: 16 }}
            />
            <div style={{ display: "flex", gap: 14, marginTop: 10 }}>
              <button
                type="submit"
                disabled={submitting || !file || !title || !creator}
                style={{
                  background: 'linear-gradient(90deg,#00f2ff 60%,#ffe082 100%)',
                  color: '#181a20',
                  fontWeight: 700,
                  border: 'none',
                  borderRadius: 10,
                  padding: '12px 28px',
                  fontSize: 17,
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  opacity: submitting ? 0.7 : 1,
                  boxShadow: '0 0 18px #00f2ff44',
                }}
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
              <button
                type="button"
                onClick={handleCloseForm}
                style={{
                  background: 'transparent',
                  color: '#00f2ff',
                  border: '1.5px solid #00f2ff',
                  borderRadius: 10,
                  padding: '12px 28px',
                  fontSize: 17,
                  cursor: 'pointer',
                  boxShadow: '0 0 12px #00f2ff22',
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 44,
        width: '100%',
        maxWidth: 1200,
        marginBottom: 56,
      }}>
        {loading ? (
          <div style={{ color: '#00f2ff', fontSize: 24, textAlign: 'center', width: '100%' }}>Loading hologram showcase...</div>
        ) : showcaseItems.length === 0 ? (
          <div style={{ color: '#00f2ff', fontSize: 24, textAlign: 'center', width: '100%' }}>No hologram cards yet.</div>
        ) : showcaseItems.map(item => (
          <div
            key={item.id}
            style={{
              background: 'rgba(30, 34, 54, 0.72)',
              borderRadius: 26,
              boxShadow: item.featured ? '0 12px 64px #00f2ff88, 0 2px 16px #0006' : '0 6px 32px #00f2ff33, 0 2px 12px #0004',
              border: item.featured ? '3px solid #00f2ff' : '2px solid rgba(0,242,255,0.18)',
              backdropFilter: 'blur(18px)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              minHeight: 400,
              position: 'relative',
              transition: 'box-shadow .18s, transform .18s',
              animation: 'floatHolo 2.8s ease-in-out infinite',
            }}
          >
            {item.featured && (
              <div style={{
                position: 'absolute',
                top: 14,
                right: 22,
                background: 'linear-gradient(90deg,#00f2ff 60%,#ffe082 100%)',
                color: '#181a20',
                fontWeight: 800,
                fontSize: 16,
                borderRadius: 10,
                padding: '5px 16px',
                boxShadow: '0 0 16px #00f2ff44',
                letterSpacing: '.04em',
                zIndex: 2,
              }}>🌟 Featured</div>
            )}
            {item.type === "art" ? (
              <a href={item.media_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <img
                  src={item.media_url}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    borderTopLeftRadius: 26,
                    borderTopRightRadius: 26,
                    borderBottom: '2px solid #00f2ff33',
                    boxShadow: '0 0 32px #00f2ff22',
                    filter: item.featured ? 'drop-shadow(0 0 24px #00f2ff88)' : 'none',
                  }}
                />
              </a>
            ) : (
              <a href={item.media_url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{
                  width: '100%',
                  height: 200,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(90deg,#23242b 60%,#00f2ff 100%)',
                  borderTopLeftRadius: 26,
                  borderTopRightRadius: 26,
                  borderBottom: '2px solid #00f2ff33',
                  boxShadow: '0 0 32px #00f2ff22',
                }}>
                  <span style={{ fontSize: 54, color: '#00f2ff', textShadow: '0 0 24px #00f2ff88' }}>🎵</span>
                </div>
              </a>
            )}
            <div style={{ padding: '28px 28px 18px 28px', flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ fontWeight: 800, fontSize: 24, color: '#00f2ff', marginBottom: 8, textShadow: '0 0 18px #00f2ff44' }}>{item.title}</div>
              <div style={{ fontSize: 17, color: '#f7fafc', opacity: 0.96, marginBottom: 12, textShadow: '0 0 10px #00f2ff22' }}>{item.description}</div>
              <div style={{ fontSize: 15, color: '#ffe082bb', marginTop: 'auto', fontWeight: 600, textShadow: '0 0 10px #ffe08244' }}>by {item.creator_name}</div>
              <div style={{ position: 'absolute', left: 22, bottom: 22, display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 22, color: '#00f2ffbb', textShadow: '0 0 12px #00f2ff44', fontWeight: 700 }}>💠</span>
                <span style={{ fontSize: 16, color: '#00f2ff', fontWeight: 700 }}>Hologram Card</span>
              </div>
            </div>
          </div>
        ))}
      </section>
      <style>{`
        @keyframes floatHolo {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px) scale(1.03); }
          100% { transform: translateY(0px); }
        }
      `}</style>
      {/* Future: Add filters, likes, and user submissions here */}
    </main>
  );
}











