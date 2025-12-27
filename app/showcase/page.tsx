

"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";


import { useEffect } from "react";

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
    async function fetchShowcase() {
      setLoading(true);
      const { data, error } = await supabase
        .from("showcase_content")
        .select("id, title, description, media_url, creator_name, featured, created_at")
        .order("created_at", { ascending: false });
      if (!error && data) setShowcaseItems(data);
      setLoading(false);
    }
    fetchShowcase();
  }, []);

  function handleOpenForm(type: "art" | "music") {
    setShowForm(type);
    setFile(null);
    setTitle("");
    setCreator("");
  }

  function handleCloseForm() {
    setShowForm(null);
    setFile(null);
    setTitle("");
    setCreator("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    setSubmitting(true);
    try {
      // Upload file to B2 (existing logic)
      const res = await fetch("/api/b2/upload", {
        method: "POST",
        headers: {
          "X-File-Name": file.name,
        },
        body: file,
      });
      const data = await res.json();
      if (res.ok && data.url) {
        // Insert metadata into Supabase
        const { error } = await supabase.from("showcase_content").insert([
          {
            title,
            description: "", // You can add a description field to the form if needed
            media_url: data.url,
            creator_name: creator,
            featured: false,
          },
        ]);
        setSubmitting(false);
        if (!error) {
          alert("Upload successful and saved to showcase!");
          handleCloseForm();
        } else {
          alert("Upload succeeded but failed to save metadata: " + error.message);
        }
      } else {
        setSubmitting(false);
        alert("Upload failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      setSubmitting(false);
      alert("Upload failed: " + err);
    }
  }
    <main
      style={{
        minHeight: "100vh",
        background: "#181a20",
        color: "#f7fafc",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <h1 style={{
        fontFamily: 'Playfair Display, Georgia, serif',
        fontSize: '2.8rem',
        fontWeight: 800,
        letterSpacing: '.06em',
        color: '#ffe082',
        textShadow: '0 2px 16px #000a, 0 1px 0 #fff2',
        margin: '36px 0 10px 0',
        textAlign: 'center',
      }}>
        Showcase
      </h1>
      <div style={{ fontSize: 20, color: '#f7fafc', opacity: 0.85, marginBottom: 32, fontWeight: 500, letterSpacing: '.03em', textAlign: 'center', maxWidth: 540 }}>
        Discover the best of Sanctuary: featured art, music, and community threads curated for inspiration and innovation.
      </div>
      <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
        <button
          style={{
            background: '#ffe082',
            color: '#181a20',
            fontWeight: 700,
            border: 'none',
            borderRadius: 8,
            padding: '10px 22px',
            fontSize: 16,
            cursor: 'pointer',
            boxShadow: '0 2px 8px #0002',
            transition: 'background .15s',
          }}
          onClick={() => handleOpenForm("art")}
        >
          Upload Art
        </button>
        <button
          style={{
            background: '#ffe082',
            color: '#181a20',
            fontWeight: 700,
            border: 'none',
            borderRadius: 8,
            padding: '10px 22px',
            fontSize: 16,
            cursor: 'pointer',
            boxShadow: '0 2px 8px #0002',
            transition: 'background .15s',
          }}
          onClick={() => handleOpenForm("music")}
        >
          Upload Music
        </button>
      </div>

      {showForm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: '#000a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <form
            onSubmit={handleSubmit}
            style={{
              background: '#23242b',
              borderRadius: 16,
              padding: 32,
              minWidth: 320,
              boxShadow: '0 4px 32px #0008',
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
              color: '#f7fafc',
              position: 'relative',
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 700, color: '#ffe082', marginBottom: 6 }}>
              Upload {showForm === "art" ? "Art" : "Music"}
            </div>
            <label style={{ fontWeight: 500 }}>
              File:
              <input
                type="file"
                accept={showForm === "art" ? "image/*" : "audio/*"}
                required
                style={{ display: 'block', marginTop: 6 }}
                onChange={e => setFile(e.target.files?.[0] || null)}
              />
            </label>
            <label style={{ fontWeight: 500 }}>
              Title:
              <input
                type="text"
                value={title}
                required
                onChange={e => setTitle(e.target.value)}
                style={{
                  width: '100%',
                  marginTop: 6,
                  padding: '7px 10px',
                  borderRadius: 6,
                  border: '1px solid #31323a',
                  background: '#181a20',
                  color: '#ffe082',
                  fontSize: 16,
                }}
              />
            </label>
            <label style={{ fontWeight: 500 }}>
              Creator:
              <input
                type="text"
                value={creator}
                required
                onChange={e => setCreator(e.target.value)}
                style={{
                  width: '100%',
                  marginTop: 6,
                  padding: '7px 10px',
                  borderRadius: 6,
                  border: '1px solid #31323a',
                  background: '#181a20',
                  color: '#ffe082',
                  fontSize: 16,
                }}
              />
            </label>
            <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
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



