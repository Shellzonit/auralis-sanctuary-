
"use client";
import React from "react";
import Image from "next/image";
import SanctuaryLogo from "../components/SanctuaryLogo";

export default function HomePage() {
  // Navigation tabs
  const tabs = [
    { href: '/', label: 'Home' },
    { href: '/states', label: 'States' },
    { href: '/jobs-at-risk', label: 'Jobs at Risk' },
    { href: '/transitional-paths', label: 'Transitional Paths' },
    { href: '/new-ai-jobs', label: 'New AI Jobs' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/resources', label: 'Resources' },
    { href: '/events', label: 'Events' },
    { href: '/faq', label: 'FAQ' },
  ];
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col items-center px-2">
      {/* Tabs Bar */}
      <nav className="w-full flex justify-center mt-8 mb-8">
        <ul className="flex flex-wrap gap-4 bg-gray-100 border border-gray-200 rounded-full px-8 py-3 shadow">
          {tabs.map(tab => (
            <li key={tab.href}>
              <a
                href={tab.href}
                className="text-base md:text-lg font-semibold px-5 py-2 rounded-lg transition-colors text-yellow-700 hover:bg-yellow-200 hover:text-yellow-900 focus:bg-yellow-300 focus:text-yellow-900 outline-none"
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center gap-6 mb-2">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold text-yellow-700 tracking-wide text-center drop-shadow-lg">AI Wilding</h1>
          <SanctuaryLogo />
        </div>
        <div className="font-sans text-lg text-yellow-800 text-center max-w-xl mb-2">
          Navigating the future of work and AI—resources, insights, and support for everyone.
        </div>
      </div>
      <div
        style={{
          fontFamily: 'Inter, Arial, sans-serif',
          fontSize: '1.15rem',
          color: '#6a1b9a',
          marginBottom: '16px',
          textAlign: 'center',
          maxWidth: 480,
        }}
      >
        Navigating the future of work and AI—resources, insights, and support for everyone.
      </div>

      {/* Photo Gallery Section */}
      <section className="flex flex-col md:flex-row gap-8 justify-center items-center my-8">
        <div className="flex flex-col items-center">
          <Image src="/ai-community-hub.jpg" alt="AI Community Hub" width={320} height={220} className="rounded-xl shadow border-4 border-yellow-400 object-cover" />
          <span className="mt-2 text-sm text-yellow-700">AI Community Hub</span>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/ai-use-cases.jpg" alt="AI Use Cases in Music and Medicine" width={320} height={220} className="rounded-xl shadow border-4 border-yellow-400 object-cover" />
          <span className="mt-2 text-sm text-yellow-700">AI Use Cases: Music & Medicine</span>
        </div>
      </section>
    </main>
  );
}
