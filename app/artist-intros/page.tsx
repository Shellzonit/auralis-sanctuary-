"use client";

import { useState, useEffect } from "react";

type IntroEntry = {
  id: number;
  name: string;
  intro: string;
  time: string;
};

export default function ArtistIntros() {
  const [intros, setIntros] = useState<IntroEntry[]>([]);
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");

  // Load intros from localStorage (or later, Supabase)
  useEffect(() => {
    const saved = localStorage.getItem("artistIntros");
    if (saved) setIntros(JSON.parse(saved));
  }, []);

  // Save intros whenever they change
  useEffect(() => {
    localStorage.setItem("artistIntros", JSON.stringify(intros));
  }, [intros]);

  const submitIntro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !intro) return;

    const newIntro: IntroEntry = {
      id: Date.now(),
      name,
      intro,
      time: new Date().toLocaleString(),
    };

    setIntros([newIntro, ...intros]);
    setName("");
    setIntro("");
  };

  return (
    <main className="min-h-screen bg-black text-red-200 px-6 py-16 font-serif">
      <h1 className="text-4xl text-center text-red-400 mb-6">
        Artist Greeting Circle
      </h1>
      {/* INTRO FORM */}
      <form onSubmit={submitIntro} className="max-w-xl mx-auto space-y-4 mb-12">
        <input
          className="w-full p-3 bg-[#1f1f29] border border-red-900/40 rounded"
          placeholder="Your Name or Artist Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="w-full p-3 bg-[#1f1f29] border border-red-900/40 rounded"
          placeholder="Introduce yourself to the circle..."
          rows={4}
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
        />
        <button
          type="submit"
          className="w-full py-3 bg-red-700 hover:bg-red-800 rounded text-lg"
        >
          Share Your Intro
        </button>
      </form>
      {/* INTRO STREAM */}
      <div className="max-w-2xl mx-auto space-y-6">
        {intros.map((entry) => (
          <div
            key={entry.id}
            className="bg-[#1f1f29] border border-red-900/40 p-4 rounded shadow-md shadow-red-900/30"
          >
            <h3 className="text-xl text-red-300">{entry.name}</h3>
            <p className="text-red-200/70 mt-2">{entry.intro}</p>
            <p className="text-xs text-red-500/50 mt-3">{entry.time}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <a href="/" className="text-red-300 underline">← Back to Homepage</a>
      </div>
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";

type IntroEntry = {
  id: number;
  name: string;
  intro: string;
  time: string;
};

export default function ArtistIntros() {
  const [intros, setIntros] = useState<IntroEntry[]>([]);
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");

  // Load intros from localStorage (or later, Supabase)
  useEffect(() => {
    const saved = localStorage.getItem("artistIntros");
    if (saved) setIntros(JSON.parse(saved));
  }, []);

  // Save intros whenever they change
  useEffect(() => {
    localStorage.setItem("artistIntros", JSON.stringify(intros));
  }, [intros]);

  const submitIntro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !intro) return;

    const newIntro: IntroEntry = {
      id: Date.now(),
      name,
      intro,
      time: new Date().toLocaleString(),
    };

    setIntros([newIntro, ...intros]);
    setName("");
    setIntro("");
  };

  return (
    <main className="min-h-screen bg-black text-red-200 px-6 py-16 font-serif">

      <h1 className="text-4xl text-center text-red-400 mb-6">
        Artist Greeting Circle
      </h1>

      {/* INTRO FORM */}
      <form onSubmit={submitIntro} className="max-w-xl mx-auto space-y-4 mb-12">
        <input
          className="w-full p-3 bg-[#1f1f29] border border-red-900/40 rounded"
          placeholder="Your Name or Artist Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="w-full p-3 bg-[#1f1f29] border border-red-900/40 rounded"
          placeholder="Introduce yourself to the circle..."
          rows={4}
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-3 bg-red-700 hover:bg-red-800 rounded text-lg"
        >
          Share Your Intro
        </button>
      </form>

      {/* INTRO STREAM */}
      <div className="max-w-2xl mx-auto space-y-6">
        {intros.map((entry) => (
          <div
            key={entry.id}
            className="bg-[#1f1f29] border border-red-900/40 p-4 rounded shadow-md shadow-red-900/30"
          >
            <h3 className="text-xl text-red-300">{entry.name}</h3>
            <p className="text-red-200/70 mt-2">{entry.intro}</p>
            <p className="text-xs text-red-500/50 mt-3">{entry.time}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a href="/" className="text-red-300 underline">← Back to Homepage</a>
      </div>

    </main>
  );
}
