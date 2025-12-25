
"use client";
import { useState, useEffect } from "react";

type MusicLink = { url: string; title: string };
const GENRES = [
  "Ambient",
  "Electronic",
  "Folk",
  "Classical",
  "Jazz",
  "Rock",
  "Experimental",
  "World",
  "Other",
];

function MusicItem({ music }: { music: { id: number, title: string, artist: string, genre: string, link: string } }) {
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(`music-votes-${music.id}`);
      setVotes(stored ? parseInt(stored) : 0);
      setVoted(localStorage.getItem(`music-voted-${music.id}`) === "true");
    }
  }, [music.id]);

  function handleVote(delta: number) {
    if (voted) return;
    const newVotes = votes + delta;
    setVotes(newVotes);
    setVoted(true);
    if (typeof window !== "undefined") {
      localStorage.setItem(`music-votes-${music.id}`, newVotes.toString());
      localStorage.setItem(`music-voted-${music.id}`, "true");
    }
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-black/40 rounded-lg p-4 mb-4 shadow w-full">
      <div className="flex-1 text-left">
        <a href={music.link} target="_blank" rel="noopener noreferrer" className="text-amber-200 font-bold hover:underline text-lg">{music.title}</a>
        <div className="text-gray-400 text-sm">by {music.artist} <span className="ml-2 px-2 py-0.5 bg-amber-900/30 rounded text-amber-200 text-xs">{music.genre}</span></div>
      </div>
      <div className="flex items-center gap-2 mt-2 sm:mt-0">
        <button
          className="px-2 py-1 bg-amber-700/80 rounded text-white hover:bg-amber-600 disabled:opacity-50"
          onClick={() => handleVote(1)}
          disabled={voted}
          aria-label="Upvote"
        >▲</button>
        <span className="text-amber-200 font-bold text-lg min-w-[2ch] text-center">{votes}</span>
        <button
          className="px-2 py-1 bg-amber-700/80 rounded text-white hover:bg-amber-600 disabled:opacity-50"
          onClick={() => handleVote(-1)}
          disabled={voted}
          aria-label="Downvote"
        >▼</button>
        {votes >= 5 && (
          <span className="ml-2 px-2 py-0.5 bg-amber-300 text-black rounded-full text-xs font-semibold">Top Voted ⭐</span>
        )}
      </div>
    </div>
  );
}

export default function Music() {
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [musicLinks, setMusicLinks] = useState<MusicLink[]>([]);
  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!linkUrl.trim() || !linkTitle.trim()) return;
    setMusicLinks([...musicLinks, { url: linkUrl, title: linkTitle }]);
    setLinkTitle("");
    setLinkUrl("");
  }

  return (
    <main className="min-h-screen bg-black text-amber-200 p-8">
      <h1 className="text-3xl font-bold mb-6">Community Music Gallery</h1>
      <p className="max-w-2xl text-center text-lg md:text-xl text-gray-300 mb-10">
        Explore, share, and experience music in a mythic, minimalist space. Upload your tracks, discover new sounds, and connect with fellow creators.
      </p>
      <div className="mb-8 w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-3 text-amber-300">Genres</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            className={`px-4 py-2 rounded-full border border-amber-300 text-amber-200 bg-black/30 hover:bg-amber-900/30 transition ${selectedGenre === "All" ? "bg-amber-300 text-black font-bold" : ""}`}
            onClick={() => setSelectedGenre("All")}
          >
            All
          </button>
          {GENRES.map((genre) => (
            <button
              key={genre}
              className={`px-4 py-2 rounded-full border border-amber-300 text-amber-200 bg-black/30 hover:bg-amber-900/30 transition ${selectedGenre === genre ? "bg-amber-300 text-black font-bold" : ""}`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full max-w-3xl bg-gray-900 p-8 rounded-lg shadow-lg flex flex-col items-center mb-8">
        <h2 className="text-xl font-bold text-amber-300 mb-4">Share Your Music Link</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Track Title"
            value={linkTitle}
            onChange={e => setLinkTitle(e.target.value)}
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700"
            required
          />
          <input
            type="url"
            placeholder="Music Link (e.g. SoundCloud, YouTube, Spotify)"
            value={linkUrl}
            onChange={e => setLinkUrl(e.target.value)}
            className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700"
            required
          />
          <button type="submit" className="px-6 py-2 rounded bg-amber-400 text-black font-bold">Submit</button>
        </form>
        {musicLinks.length > 0 && (
          <div className="mt-8 w-full">
            <h3 className="text-lg font-semibold text-amber-200 mb-2">Community Music Links</h3>
            <ul className="space-y-3">
              {musicLinks.map((link, idx) => (
                <li key={idx} className="bg-gray-800 p-3 rounded flex flex-col">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-amber-300 font-bold text-lg hover:underline">{link.title}</a>
                  <span className="text-gray-400 text-sm break-all">{link.url}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="w-full mt-8">
        <h3 className="text-lg font-semibold mb-4 text-amber-200">Featured Tracks</h3>
        {[{
          id: 1,
          title: "Celestial Drift",
          artist: "Echo Weaver",
          genre: "Ambient",
          link: "https://soundcloud.com/artist/celestial-drift",
        }, {
          id: 2,
          title: "Sunrise Circuit",
          artist: "Nova Pulse",
          genre: "Electronic",
          link: "https://youtube.com/watch?v=example",
        }].filter(m => selectedGenre === "All" || m.genre === selectedGenre).map((music, idx) => (
          <MusicItem key={music.id} music={music} />
        ))}
      </div>
    </main>
  );
}