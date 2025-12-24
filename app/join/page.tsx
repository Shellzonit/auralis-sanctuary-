"use client";

import { useState } from "react";

export default function Join() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intro, setIntro] = useState("");
  const [musicLinks, setMusicLinks] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        intro,
        musicLinks,
      }),
    });

    if (res.ok) {
      setStatus("Thank you for joining the Sanctuary.");
      setName("");
      setEmail("");
      setIntro("");
      setMusicLinks("");
    } else {
      setStatus("Something went wrong.");
    }
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the Sanctuary</h1>

      <p className="max-w-xl text-center text-gray-300 mb-10">
        Step into Auralis Studio — a mythic, minimalist refuge for creators.
        Share who you are, your resonance, and the music that carries your voice.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-6 bg-gray-900 p-8 rounded-lg shadow-lg"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 bg-black border border-gray-700 rounded-lg text-white"
          required
        />

        <textarea
          placeholder="Tell us about yourself..."
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          className="w-full h-32 p-4 bg-black border border-gray-700 rounded-lg text-white"
          maxLength={700}
          required
        />

        <textarea
          placeholder="Share your music links (YouTube, SoundCloud, Spotify, etc.)"
          value={musicLinks}
          onChange={(e) => setMusicLinks(e.target.value)}
          className="w-full h-32 p-4 bg-black border border-gray-700 rounded-lg text-white"
          required
        />

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-500 transition"
        >
          Join the Sanctuary
        </button>

        {status && <p className="text-center text-gray-300">{status}</p>}
      </form>
    </main>
  );
}
