
"use client";

import Link from "next/link";
import { useEffect } from "react";

  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const seen = localStorage.getItem("auralis-tutorial-seen");
      if (!seen) setShowTutorial(true);
    }
  }, []);

  function closeTutorial() {
    setShowTutorial(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("auralis-tutorial-seen", "true");
    }
  }

  return (
    <>
    {showTutorial && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
        <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 text-black relative animate-fade-in">
          <button onClick={closeTutorial} className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-black">&times;</button>
          <h2 className="text-2xl font-bold mb-4 text-rose-700">Welcome to Sanctuary!</h2>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Browse <span className="font-semibold text-amber-700">music</span> and <span className="font-semibold text-rose-700">art</span> by category.</li>
            <li>Click on music links to listen, or view art in the gallery.</li>
            <li>Vote anonymously for your favorite music and art. Top-voted items earn a <span className="font-semibold">badge</span>!</li>
            <li>Want to join? Use the <span className="font-semibold text-emerald-700">Join the Sanctuary</span> button to share your story and music links.</li>
            <li>Return anytime—your votes and progress are saved in your browser.</li>
          </ol>
          <div className="mt-6 flex justify-end">
            <button onClick={closeTutorial} className="px-5 py-2 bg-rose-700 text-white rounded-lg font-semibold hover:bg-rose-800 transition">Got it!</button>
          </div>
        </div>
      </div>
    )}
    <main
      className="min-h-screen flex flex-col items-center justify-start p-4 sm:p-8 md:p-12 text-center space-y-8 sm:space-y-10 md:space-y-14 relative"
      style={{
        background: 'linear-gradient(135deg, #fdf6ee 70%, #fbeee6 100%)',
        backgroundColor: '#fdf6ee',
      }}
    >


      {/* Logo and Title removed */}

      {/* Quick links to new features */}
      <div className="flex gap-4 mb-6 justify-center">
        <Link href="/ai-careers" className="px-4 py-2 bg-amber-100 rounded-lg text-rose-700 font-semibold hover:bg-amber-200 transition">AI Careers</Link>
        <Link href="/mail" className="px-4 py-2 bg-amber-100 rounded-lg text-rose-700 font-semibold hover:bg-amber-200 transition">Mail</Link>
      </div>

      {/* Hero Section */}
      <div className="mt-8 mb-8 sm:mt-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-black mb-4" style={{ fontFamily: 'serif, system-ui, sans-serif', letterSpacing: '0.04em' }}>
          Welcome to Sanctuary
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-700 mb-2" style={{ letterSpacing: '0.03em' }}>
          A mythic refuge for sound, story, and creative ceremony.
        </p>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600" style={{ letterSpacing: '0.02em' }}>
          Every voice that enters here becomes part of the living archive.
        </p>
        {/* Additional Lore and Invitation */}
        <p className="text-base sm:text-lg text-rose-900 mt-4 font-serif italic">
          Where echoes become legend, and silence is sacred.
        </p>
        <p className="text-sm text-amber-700 mt-2 tracking-wide">
          ✦ Step inside the circle ✦
        </p>
        <p className="text-sm text-gray-500 mt-1 italic">
          Whisper your resonance, and be heard.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-xs mt-6 mb-8">
        <Link
          href="/music"
          className="py-3 px-7 bg-gradient-to-r from-rose-200 via-rose-100 to-amber-100 text-rose-900 rounded-2xl shadow-lg font-medium tracking-wide transition-all duration-200 hover:from-rose-300 hover:to-amber-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-rose-300"
        >
          Music
        </Link>

        <Link
          href="/games"
          className="py-3 px-7 bg-gradient-to-r from-amber-100 via-emerald-100 to-rose-100 text-emerald-900 rounded-2xl shadow-lg font-medium tracking-wide transition-all duration-200 hover:from-emerald-200 hover:to-rose-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-200"
        >
          Games
        </Link>

        <Link
          href="/join"
          className="py-3 px-7 bg-gradient-to-r from-rose-100 via-amber-100 to-emerald-100 text-amber-900 rounded-2xl shadow-lg font-medium tracking-wide transition-all duration-200 hover:from-amber-200 hover:to-emerald-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-200"
        >
          import { useEffect, useState } from "react";
          const [hotJobs, setHotJobs] = useState<any[]>([]);
          useEffect(() => {
            if (typeof window !== "undefined") {
              const jobs = JSON.parse(localStorage.getItem("publicJobs") || "[]");
              setHotJobs(jobs.filter((j: any) => j.hot && j.approved));
            }
          }, []);

          Join the Sanctuary
        </Link>
      </div>

      {/* Chat Bubbles */}
      <div className="space-y-4 sm:space-y-5 mt-10 mb-10">
        <div className="inline-block bg-gray-100 px-6 py-3 rounded-2xl shadow-md text-gray-700">
          Welcome, traveler.
        </div>
        <div className="inline-block bg-gray-100 px-6 py-3 rounded-2xl shadow-md text-gray-700">
          Step gently.
        </div>
        <div className="inline-block bg-gray-100 px-6 py-3 rounded-2xl shadow-md text-gray-700">
          Share your sound.
        </div>
      </div>

      {/* Art Categories and Picture Slots */}
      {/* <ArtSection /> removed as requested */}
import { useState } from "react";

const ART_STYLES = [
  "Digital",
  "Painting",
  "Photography",
  "Symbolic",
  "AI Visual",
  "Other",
];

function ArtSection() {
  const [selectedStyle, setSelectedStyle] = useState("All");
  // Example art items
  const artItems = [
    {
      id: 1,
      src: "/gallery/real-image.jpg",
      alt: "Real Art",
      style: "Photography",
      label: "Real Image",
              {/* Hot Jobs Section */}
              {hotJobs.length > 0 && (
                <div className="max-w-xl mx-auto mb-8 bg-amber-50 border border-amber-200 rounded-xl p-4 shadow">
                  <h2 className="text-lg font-semibold mb-2 text-rose-700">Hot Jobs</h2>
                  <ul className="space-y-2">
                    {hotJobs.slice(0, 3).map((job, i) => (
                      <li key={i} className="border border-amber-200 rounded p-2 bg-white flex flex-col items-start">
                        <span className="font-semibold text-rose-800">{job.role}</span>
                        <span className="text-amber-900 text-sm">{job.company}</span>
                        <span className="text-gray-700 text-xs mb-1">{job.description}</span>
                        <a href={`mailto:${job.contact}`} className="text-rose-700 underline text-xs">Contact</a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 text-right">
                    <Link href="/jobs" className="text-rose-700 underline text-sm">See all jobs</Link>
                  </div>
                </div>
              )}
      badgeColor: "gray-600",
    },
    {
      id: 2,
      src: "/gallery/symbolic-art.png",
      alt: "Symbolic Art",
      style: "Symbolic",
      label: "Symbolic Art",
      badgeColor: "emerald-700",
    },
    {
      id: 3,
      src: "/gallery/ai-leaf-texture.jpg",
      alt: "AI Leaf Texture",
      style: "AI Visual",
      label: "AI Visual",
      badgeColor: "rose-700",
    },
  ];
  return (
    <div className="flex flex-col items-center mt-10 mb-8 w-full">
      <span className="mb-3 sm:mb-4 text-base sm:text-lg text-gray-500 tracking-wide">Featured Art & Sound</span>
      <div className="mb-4 flex flex-wrap gap-3 justify-center">
        <button
          className={`px-4 py-2 rounded-full border border-rose-300 text-rose-200 bg-black/30 hover:bg-rose-900/30 transition ${selectedStyle === "All" ? "bg-rose-300 text-black font-bold" : ""}`}
          onClick={() => setSelectedStyle("All")}
        >
          All
        </button>
        {ART_STYLES.map((style) => (
          <button
            key={style}
            className={`px-4 py-2 rounded-full border border-rose-300 text-rose-200 bg-black/30 hover:bg-rose-900/30 transition ${selectedStyle === style ? "bg-rose-300 text-black font-bold" : ""}`}
            onClick={() => setSelectedStyle(style)}
          >
            {style}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-md">
        {artItems.filter(item => selectedStyle === "All" || item.style === selectedStyle).map(item => (
          <ArtItem key={item.id} item={item} />
        ))}
      </div>
      <p className="text-gray-500 mt-6 text-sm">Selected Style: <span className="font-semibold text-rose-200">{selectedStyle}</span></p>
    </div>
    </main>
    </>
  );
}

function ArtItem({ item }: { item: { id: number, src: string, alt: string, style: string, label: string, badgeColor: string } }) {
  const [votes, setVotes] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(`art-votes-${item.id}`);
      return stored ? parseInt(stored) : 0;
    }
    return 0;
  });
  const [voted, setVoted] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(`art-voted-${item.id}`) === "true";
    }
    return false;
  });

  function handleVote(delta: number) {
    if (voted) return;
    const newVotes = votes + delta;
    setVotes(newVotes);
    setVoted(true);
    if (typeof window !== "undefined") {
      localStorage.setItem(`art-votes-${item.id}`, newVotes.toString());
      localStorage.setItem(`art-voted-${item.id}`, "true");
    }
  }

  return (
    <div className="w-full h-40 sm:w-36 sm:h-36 bg-white rounded-2xl border-2 shadow-xl flex flex-col items-center justify-center overflow-hidden relative mx-auto p-2">
      <img src={item.src} alt={item.alt} className="object-cover w-full h-full rounded-xl" style={{ opacity: 0.95 }} />
      <span className={`absolute bottom-2 left-2 text-xs bg-white/70 px-2 py-0.5 rounded text-${item.badgeColor}`}>{item.label}</span>
      <div className="absolute top-2 right-2 flex items-center gap-1">
        <button
          className="px-1 py-0.5 bg-rose-700/80 rounded text-white hover:bg-rose-600 disabled:opacity-50 text-xs"
          onClick={() => handleVote(1)}
          disabled={voted}
          aria-label="Upvote"
        >▲</button>
        <span className="text-rose-700 font-bold text-xs min-w-[2ch] text-center">{votes}</span>
        <button
          className="px-1 py-0.5 bg-rose-700/80 rounded text-white hover:bg-rose-600 disabled:opacity-50 text-xs"
          onClick={() => handleVote(-1)}
          disabled={voted}
          aria-label="Downvote"
        >▼</button>
        {votes >= 5 && (
          <span className="ml-1 px-2 py-0.5 bg-rose-300 text-black rounded-full text-xs font-semibold">Top Voted ⭐</span>
        )}
      </div>
    </div>
  );
}

      {/* Footer */}
      <footer className="w-full flex justify-center items-center py-8 mt-8 border-t border-amber-100 bg-white/60 backdrop-blur-sm text-center text-sm sm:text-base">
        <span className="text-gray-500 tracking-wide italic">
          Created with intention · © {new Date().getFullYear()} Sanctuary
        </span>
      </footer>
    </main>
  );
}
