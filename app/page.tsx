"use client";

import Image from 'next/image';



export default function HomePage() {
  return (
    <div className="relative bg-gradient-to-br from-[#0f2027] via-[#232526] to-[#4B2E83] min-h-screen text-[#F7F5F2] flex flex-col overflow-hidden">
      {/* Futuristic AI image */}
      <div className="flex justify-center pt-16 pb-8">
        <img
          src="https://images.unsplash.com/photo-1508385082359-f48b1cbe8c8a?auto=format&fit=crop&w=900&q=80"
          alt="AI generated art showing artificial intelligence, neural networks, and digital innovation"
          className="rounded-3xl shadow-2xl object-cover w-full max-w-2xl h-[260px] border-4 border-[#4B2E83]/40"
        />
      </div>
      {/* Glowing Card */}
      <main className="flex flex-1 flex-col items-center justify-center px-4">
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
          <p className="text-xl md:text-2xl text-[#F7F5F2] text-center mb-2 font-medium relative z-10">Explore transitional paths, discover new AI jobs, and protect creative legacy.</p>
        </div>
      </main>
      <footer className="w-full py-6 text-center text-sm bg-[#232526]/60 mt-auto border-t border-[#C2A86C]/30">
        <span className="text-[#C2A86C]">This website was created using <b>Next.js</b>, <b>React</b>, <b>Tailwind CSS</b>, and deployed with <b>Vercel</b>.</span>
      </footer>
    </div>
  );
}



