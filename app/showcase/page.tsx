"use client";
import React, { useState } from "react";

const showcaseLinks = [
  {
    name: "Featured Tracks",
    url: "/music",
    description: "Listen to top community music uploads."
  },
  {
    name: "Top Creators",
    url: "/creators",
    description: "Discover and follow popular creators."
  },
  {
    name: "License Info",
    url: "/license",
    description: "Learn about copyright and licensing options."
  }
];

  const [contentLinks, setContentLinks] = useState<{ url: string; title: string }[]>([]);
  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  // Chat state
  const [chatMessages, setChatMessages] = useState<{ user: string; text: string }[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [chatUser, setChatUser] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  // Collaborative/AI-assisted projects
  const [collabProjects, setCollabProjects] = useState<{ title: string; url: string; description: string; ai: boolean }[]>([
    {
      title: "AI & Artist: Dreamscape",
      url: "https://soundcloud.com/example-dreamscape",
      description: "A collaborative ambient track created by Auralis AI and artist Luna.",
      ai: true,
    },
    {
      title: "Human x AI: Neon Gallery",
      url: "https://artstation.com/example-neon",
      description: "Digital artwork blending human creativity and generative AI.",
      ai: true,
    },
  ]);
  const [collabTitle, setCollabTitle] = useState("");
  const [collabUrl, setCollabUrl] = useState("");
  const [collabDesc, setCollabDesc] = useState("");
  const [collabAI, setCollabAI] = useState(false);

  function handleCollabSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!collabTitle.trim() || !collabUrl.trim() || !collabDesc.trim()) return;
    setCollabProjects([
      ...collabProjects,
      { title: collabTitle, url: collabUrl, description: collabDesc, ai: collabAI },
    ]);
    setCollabTitle("");
    setCollabUrl("");
    setCollabDesc("");
    setCollabAI(false);
  }
    if (!linkUrl.trim() || !linkTitle.trim()) return;
    setContentLinks([...contentLinks, { url: linkUrl, title: linkTitle }]);
    setLinkTitle("");
    setLinkUrl("");
  }

  function handleChatSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!chatInput.trim() || !chatUser.trim()) return;
    setChatMessages([...chatMessages, { user: chatUser, text: chatInput }]);
    setChatInput("");
  }

  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", padding: 32 }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 24 }}>Content Showcase</h1>
      <p style={{ marginBottom: 32 }}>
        Explore featured content and discover top creators in the Sanctuary. Submit your own music, art, or creative work below!
      </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {showcaseLinks.map((item) => (
          <li key={item.name} style={{ marginBottom: 24, borderBottom: "1px solid #eee", paddingBottom: 16 }}>
            <a href={item.url} style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#818cf8", textDecoration: "none" }}>
              {item.name}
            </a>
            <div style={{ color: "#444", marginTop: 8 }}>{item.description}</div>
          </li>
        ))}
      </ul>

      <h2 style={{ fontSize: "1.5rem", margin: "32px 0 16px" }}>Submit Your Creative Link</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 400 }}>
        <input
          type="text"
          placeholder="Title (e.g. Song, Artwork, Project)"
          value={linkTitle}
          onChange={e => setLinkTitle(e.target.value)}
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
          required
        />
        <input
          type="url"
          placeholder="Link (e.g. SoundCloud, YouTube, ArtStation)"
          value={linkUrl}
          onChange={e => setLinkUrl(e.target.value)}
          style={{ padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
          required
        />
        <button type="submit" style={{ padding: 10, borderRadius: 6, background: "#818cf8", color: "#fff", fontWeight: "bold", border: "none" }}>Submit</button>
      </form>

      {contentLinks.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <h3 style={{ fontSize: "1.25rem", marginBottom: 12, color: "#818cf8" }}>Community Gallery</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {contentLinks.map((link, idx) => (
              <li key={idx} style={{ marginBottom: 18, background: "#f9f9f9", borderRadius: 8, padding: 12 }}>
                <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", color: "#be123c", fontSize: "1.1rem", textDecoration: "none" }}>{link.title}</a>
                <div style={{ color: "#444", marginTop: 4, wordBreak: "break-all" }}>{link.url}</div>
                {/* Embed player if SoundCloud or YouTube */}
                {link.url.includes("soundcloud.com") && (
                  <iframe
                    width="100%"
                    height="120"
                    allow="autoplay"
                    style={{ border: "none", marginTop: 8 }}
                    src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(link.url)}&color=%23be123c&auto_play=false`}
                  />
                )}
                {link.url.includes("youtube.com") || link.url.includes("youtu.be") ? (
                  <iframe
                    width="100%"
                    height="200"
                    style={{ border: "none", marginTop: 8 }}
                    src={`https://www.youtube.com/embed/${extractYouTubeId(link.url)}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : null}
              </li>
            // Helper to extract YouTube video ID from URL
            function extractYouTubeId(url: string): string {
              const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
              const match = url.match(regExp);
              return match && match[2].length === 11 ? match[2] : "";
            }
            ))}
          </ul>
        </div>
      )}
      {/* ...existing code... */}

      <div style={{ marginTop: 48, background: "#f9f9f9", borderRadius: 12, padding: 24, maxWidth: 600 }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: 16, color: "#be123c" }}>Artist & AI Collaboration Chat</h2>
        <form onSubmit={handleChatSubmit} style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <input
            type="text"
            placeholder="Your name or handle"
            value={chatUser}
            onChange={e => setChatUser(e.target.value)}
            style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
            required
          />
          <input
            type="text"
            placeholder="Type your message..."
            value={chatInput}
            onChange={e => setChatInput(e.target.value)}
            style={{ flex: 2, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
            required
          />
          <button type="submit" style={{ padding: 10, borderRadius: 6, background: "#818cf8", color: "#fff", fontWeight: "bold", border: "none" }}>Send</button>
        </form>
        <div style={{ maxHeight: 220, overflowY: "auto", background: "#fff", borderRadius: 8, padding: 12, border: "1px solid #eee" }}>
          {chatMessages.length === 0 ? (
            <div style={{ color: "#aaa", textAlign: "center" }}>No messages yet. Start the conversation!</div>
          ) : (
            chatMessages.map((msg, idx) => (
              <div key={idx} style={{ marginBottom: 10 }}>
                <span style={{ fontWeight: "bold", color: "#be123c" }}>{msg.user}:</span>
                <span style={{ marginLeft: 8 }}>{msg.text}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
