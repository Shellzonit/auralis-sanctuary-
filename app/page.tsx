"use client";

import Image from 'next/image';

const tabs = [
  { href: '/', label: 'Home' },
  { href: '/states', label: 'States' },
  { href: '/jobs-at-risk', label: 'Jobs at Risk' },
  { href: '/transitional-paths', label: 'Transitional Paths' },
  { href: '/new-ai-jobs', label: 'New AI Jobs' },
];

export default function HomePage() {
  return (
    <div className="bg-[#F7F5F2] min-h-screen text-[#222] flex flex-col">
      {/* Main content */}
      <main className="flex flex-1 flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-xl flex flex-col items-center p-8 border border-[#E0DDD8]">
          <Image
            src="/your-logo-file-name.png" // replace with actual filename
            alt="Sanctuary Logo"
            width={120}
            height={120}
            className="mb-4"
          />
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#4B2E83] text-center mb-2 tracking-tight">Welcome to the AI Wilding Sanctuary</h1>
          <p className="text-lg md:text-xl text-[#4B2E83] text-center mb-2 font-medium">Explore transitional paths, discover new AI jobs, and protect creative legacy.</p>
        </div>
      </main>
      <footer className="w-full py-6 text-center text-sm bg-white/40 mt-auto border-t border-[#E0DDD8]">
        <span className="text-[#4B2E83]">This website was created using <b>Next.js</b>, <b>React</b>, <b>Tailwind CSS</b>, and deployed with <b>Vercel</b>.</span>
      </footer>
    </div>
  );
}



