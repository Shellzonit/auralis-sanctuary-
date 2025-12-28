"use client";


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

  function isTrustedEmbed(url) {
    try {
      const parsed = new URL(url);
      return trustedEmbedDomains.some(domain => parsed.hostname.endsWith(domain));
    } catch {
      return false;
    }
  }

  // Upload form state
  const [form, setForm] = React.useState({ title: '', artist: '', type: 'image', file: null });
  const [uploading, setUploading] = React.useState(false);
  const [uploadMsg, setUploadMsg] = React.useState('');

  async function handleUpload(e) {
    e.preventDefault();
    setUploading(true);
    setUploadMsg('');
    const data = new FormData();
    data.append('title', form.title);
    data.append('artist', form.artist);
    data.append('type', form.type);
    data.append('file', form.file);
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
        Explore shareable content folders for each artist. Click a folder to view their work!
      </p>
      {/* Upload Form */}
      <form onSubmit={handleUpload} style={{ background: '#23242b', border: '2px solid #ffe082', borderRadius: 16, padding: 24, marginBottom: 36, width: '100%', maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h2 style={{ color: '#ffe082', fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Upload Your Art or Music</h2>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
          required
          style={{ padding: 8, borderRadius: 8, border: '1px solid #ffe082', fontSize: 16 }}
        />
        <input
          type="text"
          placeholder="Artist (optional)"
          value={form.artist}
          onChange={e => setForm(f => ({ ...f, artist: e.target.value }))}
          style={{ padding: 8, borderRadius: 8, border: '1px solid #ffe082', fontSize: 16 }}
        />
        <select value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))} style={{ padding: 8, borderRadius: 8, border: '1px solid #ffe082', fontSize: 16 }}>
          <option value="image">Image</option>
          <option value="music">Music</option>
        </select>
        <input
          type="file"
          accept={form.type === 'image' ? 'image/*' : 'audio/*'}
          onChange={e => setForm(f => ({ ...f, file: e.target.files[0] }))}
          required
          style={{ color: '#ffe082' }}
        />
        <button type="submit" disabled={uploading} style={{ background: '#ffe082', color: '#181a20', fontWeight: 700, borderRadius: 8, padding: 10, fontSize: 17, border: 'none', cursor: 'pointer' }}>{uploading ? 'Uploading...' : 'Upload'}</button>
        {uploadMsg && <div style={{ color: uploadMsg.includes('success') ? 'lightgreen' : 'salmon', marginTop: 8 }}>{uploadMsg}</div>}
      </form>

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
