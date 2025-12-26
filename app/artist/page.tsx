"use client";

import { useState } from "react";

const artists = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `Artist ${i + 1}`,
  role: ["Musician", "Visual Artist", "Writer", "Filmmaker"][i % 4],
  bio: `This is a short intro for Artist ${i + 1}. They are known for their creative work in the Sanctuary community.`,
  link: "#",
  linkLabel: "Profile",
}));

export default function ArtistIntroPage() {
  const [announcements, setAnnouncements] = useState(Array(artists.length).fill(""));

  const handleAnnouncementChange = (idx: number, value: string) => {
    setAnnouncements((prev) => {
      const copy = [...prev];
      copy[idx] = value;
      return copy;
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#1a1a22] text-red-200 px-6 py-16 font-serif flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-pink-400 mb-8 text-center drop-shadow-lg">
        Meet the Artists
      </h1>
      <p className="max-w-2xl text-xl text-center mb-10 text-pink-100">
        Welcome to the Sanctuary's Artist Gallery! Here, you can discover the creative minds behind the music, art, writing, and videos that make our community vibrant. Each artist brings a unique vision and passion to their craft. Explore their stories, inspirations, and featured works below.
      </p>
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {artists.map((artist, idx) => (
          <div key={artist.id} className="bg-[#1f1f29] rounded-2xl p-6 shadow-lg border-2 border-pink-400/40 flex flex-col items-center">
            <div className="flex items-center w-full mb-2">
              <img src={`/artist${(idx % 2) + 1}.jpg`} alt={artist.name} className="w-20 h-20 rounded-full mr-4 border-4 border-pink-300 object-cover" />
              <div>
                <h2 className="text-xl font-bold text-pink-200">{artist.name}</h2>
                <p className="text-pink-100 text-sm">{artist.role}</p>
              </div>
            </div>
            <p className="text-pink-100 text-center mb-2 text-sm">{artist.bio}</p>
            <a href={artist.link} target="_blank" rel="noopener noreferrer" className="text-pink-300 underline font-semibold mb-4">{artist.linkLabel}</a>
            <div className="w-full mt-2">
              <label className="block text-pink-200 text-xs mb-1">Announcement/Chat</label>
              <textarea
                className="w-full p-2 bg-[#18181f] border border-pink-400/30 rounded text-pink-100 text-xs"
                placeholder="Type an announcement or message..."
                value={announcements[idx]}
                onChange={e => handleAnnouncementChange(idx, e.target.value)}
                rows={2}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="/email" className="text-pink-300 underline text-lg">← Back to Email</a>
      </div>
    </main>
  );
}
