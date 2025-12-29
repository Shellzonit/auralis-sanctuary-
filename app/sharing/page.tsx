
"use client";
import React, { ChangeEvent, FormEvent } from "react";
import MediaEmbed from '../../components/MediaEmbed';


export default function SharingPage() {
  // Example content links; in a real app, fetch from DB or API

  // Example artist folders; in a real app, fetch from DB or API
  const artistFolders = [
    {
      artist: "Aurora",
      folders: [
        { title: "Digital Art", url: "https://example.com/aurora/art" },
        { title: "Photography", url: "https://example.com/aurora/photo" },
      ],
    },
    {
      artist: "Nova",
      folders: [
        { title: "Music Videos", url: "https://example.com/nova/music" },
        { title: "Live Performances", url: "https://example.com/nova/live" },
      ],
    },
    {
      artist: "Orion",
      folders: [
        { title: "Short Stories", url: "https://example.com/orion/stories" },
        { title: "Poetry", url: "https://example.com/orion/poetry" },
      ],
    },
  ];

  // Only allow embeds from trusted platforms
  const trustedEmbedDomains = [
    "youtube.com",
    "youtu.be",
    "soundcloud.com",
    "bandcamp.com"
  ];

  // Link submission state
  const [linkForm, setLinkForm] = React.useState({ title: '', url: '' });
  const [linkMsg, setLinkMsg] = React.useState('');
  const [submittedLinks, setSubmittedLinks] = React.useState<any[]>([]);
  const [linksLoading, setLinksLoading] = React.useState(false);
  const [linksError, setLinksError] = React.useState('');

  // Fetch shared links from API on mount
  React.useEffect(() => {
    setLinksLoading(true);
    fetch('/api/shared-links')
      .then(async res => {
        if (!res.ok) {
          const err = await res.json();
          setLinksError(err.error || 'Failed to fetch shared links');
          setLinksLoading(false);
          return;
        }
        return res.json();
      })
      .then(data => {
        if (data) setSubmittedLinks(data);
        setLinksLoading(false);
      })
      .catch(() => {
        setLinksError('Failed to fetch shared links');
        setLinksLoading(false);
      });
  }, []);


  // Allow any link or text to be shared
  function isTrustedLink(url: string) {
    return true;
  }

  async function handleLinkSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLinkMsg('');
    if (!isTrustedLink(linkForm.url)) {
      setLinkMsg('Only YouTube, SoundCloud, or Bandcamp links are allowed.');
      return;
    }
    try {
      const res = await fetch('/api/shared-links', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(linkForm),
      });
      if (res.ok) {
        const newLink = await res.json();
        setSubmittedLinks(links => [newLink, ...links]);
        setLinkForm({ title: '', url: '' });
        setLinkMsg('Link submitted!');
        setTimeout(() => setLinkMsg(''), 2000);
      } else {
        const err = await res.json();
        setLinkMsg(err.error || 'Failed to submit link.');
        console.error('Failed to submit link:', err);
      }
    } catch (e) {
      setLinkMsg('Failed to submit link.');
      console.error('Failed to submit link:', e);
    }
  }

  function isTrustedEmbed(url: string) {
    try {
      const parsed = new URL(url);
      return trustedEmbedDomains.some(domain => parsed.hostname.endsWith(domain));
    } catch {
      return false;
    }
  }

  // Upload form state
  type FormState = {
    title: string;
    artist: string;
    type: string;
    file: File | null;
  };
  const [form, setForm] = React.useState<FormState>({ title: '', artist: '', type: 'image', file: null });
  const [uploading, setUploading] = React.useState(false);
  const [uploadMsg, setUploadMsg] = React.useState('');

  async function handleUpload(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUploading(true);
    setUploadMsg('');
    const data = new FormData();
    data.append('title', form.title);
    data.append('artist', form.artist);
    data.append('type', form.type);
    if (form.file) {
      data.append('file', form.file);
    }
    const res = await fetch('/api/media-upload', { method: 'POST', body: data });
    if (res.ok) {
      setUploadMsg('Upload successful!');
      setForm({ title: '', artist: '', type: 'image', file: null });
    } else {
      setUploadMsg('Upload failed.');
    }
    setUploading(false);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#181a20",
        color: "#ffe082",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <h1
        style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontSize: '2.5rem',
          fontWeight: 900,
          color: '#ffe082',
          margin: '48px 0 24px 0',
          textShadow: '0 2px 24px #000a',
          letterSpacing: 1.5,
        }}
      >
        Sharing Room
      </h1>
      <p style={{ color: '#f7fafc', opacity: 0.85, fontSize: 18, marginBottom: 32, textAlign: 'center', maxWidth: 600 }}>
        Share your favorite links (YouTube, SoundCloud, Bandcamp, or any creative site) or post a short creative thought below!
      </p>
      {/* Link Submission Form */}
      <form onSubmit={handleLinkSubmit} style={{ background: '#23242b', border: '2px solid #ffe082', borderRadius: 16, padding: 24, marginBottom: 24, width: '100%', maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h2 style={{ color: '#ffe082', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Share a YouTube, SoundCloud, or Bandcamp Link</h2>
        <input
          type="text"
          placeholder="Title (e.g. My YouTube Channel)"
          value={linkForm.title}
          onChange={e => setLinkForm(f => ({ ...f, title: e.target.value }))}
          required
          style={{ padding: 8, borderRadius: 8, border: '1px solid #ffe082', fontSize: 16 }}
        />
        <input
          type="url"
          placeholder="Paste your link here"
          value={linkForm.url}
          onChange={e => setLinkForm(f => ({ ...f, url: e.target.value }))}
          required
          style={{ padding: 8, borderRadius: 8, border: '1px solid #ffe082', fontSize: 16 }}
        />
        <button type="submit" style={{ background: '#ffe082', color: '#181a20', fontWeight: 700, borderRadius: 8, padding: 10, fontSize: 17, border: 'none', cursor: 'pointer' }}>Share Link</button>
        {linkMsg && <div style={{ color: linkMsg.includes('submitted') ? 'lightgreen' : 'salmon', marginTop: 8 }}>{linkMsg}</div>}
      </form>

      {/* Display submitted links */}
      <div style={{ width: '100%', maxWidth: 600, marginBottom: 36 }}>
        <h3 style={{ color: '#ffe082', fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Shared Links</h3>
        {linksLoading ? (
          <div style={{ color: '#aaa', textAlign: 'center' }}>Loading...</div>
        ) : linksError ? (
          <div style={{ color: 'salmon', textAlign: 'center' }}>{linksError}</div>
        ) : submittedLinks.length === 0 ? (
          <div style={{ color: '#aaa', textAlign: 'center' }}>No shared links yet.</div>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {submittedLinks.map((link, idx) => (
              <li key={link.id || idx} style={{ marginBottom: 18, display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ fontWeight: 700, color: '#ffe082', fontSize: 16, marginBottom: 2 }}>{link.title}</div>
                <MediaEmbed url={link.url} />
                {link.created_at && (
                  <div style={{ fontSize: 13, color: '#aaa' }}>{new Date(link.created_at).toLocaleString()}</div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>


      <div style={{ width: '100%', maxWidth: 900 }}>
        {artistFolders.map((artist, idx) => (
          <div key={idx} style={{ marginBottom: 36 }}>
            <h2 style={{ color: '#ffe082', fontSize: 28, fontWeight: 800, marginBottom: 16, textShadow: '0 2px 12px #000a' }}>{artist.artist}</h2>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              {artist.folders.map((folder, fidx) => (
                isTrustedEmbed(folder.url) ? (
                  <iframe
                    key={fidx}
                    src={folder.url}
                    style={{
                      width: 320,
                      height: 180,
                      border: '2px solid #ffe082',
                      borderRadius: 18,
                      boxShadow: '0 2px 16px #0006',
                      marginBottom: 8,
                      background: '#23242b',
                    }}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={folder.title}
                  />
                ) : (
                  <a
                    key={fidx}
                    href={folder.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(135deg, #23242b 60%, #ffe082 100%)',
                      border: '2px solid #ffe082',
                      borderRadius: 18,
                      boxShadow: '0 2px 16px #0006',
                      padding: '28px 22px',
                      color: '#181a20',
                      fontWeight: 700,
                      fontSize: 19,
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      minWidth: 180,
                      marginBottom: 8,
                      transition: 'transform .13s, box-shadow .13s',
                      textAlign: 'center',
                    }}
                    onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                    onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    {folder.title}
                  </a>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
