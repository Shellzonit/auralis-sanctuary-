"use client";

import Image from 'next/image';




export default function HomePage() {
  return (
    <div className="relative bg-gradient-to-br from-[#0a141a] via-[#18191a] to-[#2a1a4d] min-h-screen text-[#F7F5F2] flex flex-col overflow-hidden">
      {/* States Tab Button in Corner */}
      <a href="/states" className="absolute top-6 right-8 z-20 px-6 py-2 bg-[#C2A86C] text-[#232526] font-bold rounded-full shadow-lg hover:bg-[#F7F5F2] hover:text-[#4B2E83] transition-all text-lg">States &rarr;</a>
      {/* Glowing Card */}
      <main className="flex flex-1 flex-col items-center justify-center px-4 pt-16">
        <div className="relative w-full max-w-xl bg-white/10 rounded-3xl shadow-2xl flex flex-col items-center p-10 border border-[#C2A86C]/30 backdrop-blur-md">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#C2A86C]/40 via-[#4B2E83]/30 to-[#00eaff]/30 blur-2xl opacity-60 z-0" />
          <Image
            src="/your-logo-file-name.png" // replace with actual filename
            alt="Sanctuary Logo"
            width={120}
            height={120}
            className="mb-6 relative z-10 drop-shadow-glow"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#C2A86C] text-center mb-8 tracking-tight relative z-10 drop-shadow-glow">Welcome to the AI Wilding Sanctuary</h1>
          {/* AI Innovation Image */}
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80"
            alt="AI innovation art, neural networks, digital brain, futuristic"
            className="rounded-2xl shadow-xl object-cover w-full max-w-lg h-[220px] mb-8 border-2 border-[#C2A86C]/40 relative z-10"
          />
          <p className="text-xl md:text-2xl text-[#F7F5F2] text-center mb-2 font-medium relative z-10">Explore transitional paths, discover new AI jobs, and protect creative legacy.</p>
        </div>
      </main>
      {/* Footer removed as requested */}
    </div>
  );
}



