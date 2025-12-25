"use client";
"use client";

import SanctuaryLogo from "@/components/SanctuaryLogo";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a0f] to-[#1a1a22] text-[#f2f2f7] flex flex-col items-center px-6 py-16 font-serif">

      {/* LOGO */}
      <div className="mb-8">
        <SanctuaryLogo />
      </div>

      {/* WELCOME TEXT */}
      <p className="max-w-xl text-center text-lg opacity-85 mb-12">
        Welcome to the Sanctuary — a creative space for music, art, blogs, and
        streaming. Explore, share, and connect with the community.
      </p>

      {/* CIRCULAR MENU */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        
        <a
          href="/employment"
          className="w-32 h-32 rounded-full bg-[#1f1f29] hover:bg-[#2a2a35] flex items-center justify-center text-center text-sm transition"
        >
          Employment
        </a>

        <a
          href="/showcase"
          className="w-32 h-32 rounded-full bg-[#1f1f29] hover:bg-[#2a2a35] flex items-center justify-center text-center text-sm transition"
        >
          Content Showcase
        </a>

        <a
          href="/email"
          className="w-32 h-32 rounded-full bg-[#1f1f29] hover:bg-[#2a2a35] flex items-center justify-center text-center text-sm transition"
        >
          Internal Email
        </a>

        <a
          href="/license"
          className="w-32 h-32 rounded-full bg-[#1f1f29] hover:bg-[#2a2a35] flex items-center justify-center text-center text-sm transition"
        >
          License Info
        </a>

      </div>
    </main>
  );
}
