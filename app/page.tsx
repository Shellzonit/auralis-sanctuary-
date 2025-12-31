
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
    <div className="bg-[#F7F5F2] min-h-screen text-[#4B2E83]">
      {/* Navigation */}
      <header className="border-b border-[#E0DDD8] py-5">
        <nav className="flex justify-center gap-12 text-[22px] font-medium">
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className="hover:text-[#C2A86C] transition"
            >
              {tab.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center py-20">
        <Image
          src="/your-logo-file-name.png" // replace with actual filename
          alt="Sanctuary Logo"
          width={200}
          height={200}
        />
        <h1 className="mt-8 text-3xl font-semibold">Welcome to the AI Wilding Sanctuary</h1>
        <p className="mt-4 text-lg max-w-xl text-center text-[#4B2E83]">
          Explore transitional paths, discover new AI jobs, and protect creative legacy.
        </p>
      </main>
    </div>
  );
}



