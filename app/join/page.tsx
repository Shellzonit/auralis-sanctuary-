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
    <main className="min-h-screen bg-black text-yellow-300 flex flex-col items-center px-6 py-12" style={{ background: '#0a0a0a' }}>
      <div className="w-full max-w-xl rounded-2xl shadow-2xl p-10 border-2 border-yellow-400 bg-gradient-to-br from-yellow-900/80 to-yellow-700/40 flex flex-col items-center mb-10" style={{ color: '#ffe082', boxShadow: '0 4px 32px #000a' }}>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-wide" style={{ color: '#ffd700', textShadow: '0 2px 16px #000a', letterSpacing: 1.2 }}>Welcome to the Sanctuary Community</h1>
        <p className="text-lg text-center mb-6" style={{ color: '#ffe082', opacity: 0.95 }}>
          Join a vibrant network of creators, technologists, and visionaries. Share your work, explore new opportunities, and help shape the future of AI and creativity.
        </p>
        <ul className="list-disc pl-6 text-lg space-y-2 mb-8 text-left w-full" style={{ color: '#ffe082' }}>
          <li>Sign up or log in to access exclusive features</li>
          <li>Share your projects, art, or music</li>
          <li>Connect with other members and join discussions</li>
          <li>Apply for jobs or showcase your skills</li>
        </ul>
        <a href="/auth" className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-bold py-4 px-10 rounded-full shadow-lg text-xl hover:from-yellow-400 hover:to-yellow-200 transition-all duration-150 border-2 border-yellow-400 mb-4" style={{ letterSpacing: 1.1 }}>
          Sign Up / Log In
        </a>
        <a href="/" className="text-amber-200 underline font-semibold hover:text-amber-300 transition-colors text-lg mb-4">Back to Home</a>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: '#ffd700' }}>Or introduce yourself below:</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-6 bg-black/80 p-8 rounded-2xl shadow-lg border-2 border-yellow-700"
        style={{ color: '#ffe082' }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 bg-black border border-yellow-700 rounded-lg text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 bg-black border border-yellow-700 rounded-lg text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          required
        />
        <textarea
          placeholder="Tell us about yourself..."
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
          className="w-full h-32 p-4 bg-black border border-yellow-700 rounded-lg text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
          maxLength={700}
          required
        />
        <textarea
          placeholder="Share your music links (YouTube, SoundCloud, Spotify, etc.)"
          value={musicLinks}
          onChange={(e) => setMusicLinks(e.target.value)}
          className="w-full h-32 p-4 bg-black border border-yellow-700 rounded-lg text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-bold rounded-lg shadow-lg transition-all duration-150 border-2 border-yellow-400 hover:from-yellow-400 hover:to-yellow-200"
        >
          Join the Sanctuary
        </button>
        {status && <p className="text-center text-amber-300 font-semibold">{status}</p>}
      </form>
    </main>
  );
}
