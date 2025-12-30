
"use client";
import React from "react";
import Image from "next/image";
import SanctuaryLogo from "../components/SanctuaryLogo";

export default function HomePage() {
  // Navigation tabs
  // Professional, intuitive tab order
  const tabs = [
    { href: '/', label: 'Home' },
    { href: '/states', label: 'States' },
    { href: '/jobs-at-risk', label: 'Jobs at Risk' },
    { href: '/transitional-paths', label: 'Transitional Paths' },
    { href: '/new-ai-jobs', label: 'New AI Jobs' },
  ];
  return (
    <main className="min-h-screen font-sans flex flex-col items-center px-2" style={{ backgroundColor: '#F7F5F2', color: '#222' }}>
      {/* Tabs Bar */}
      <nav className="w-full flex justify-center mt-8 mb-12">
        <ul className="flex flex-row flex-wrap justify-center w-full max-w-6xl gap-8 px-6 py-5 bg-peach-100 rounded-3xl shadow-2xl border border-peach-200">
          {tabs.map(tab => (
            <li key={tab.href} className="flex-1 flex justify-center min-w-[200px] mb-2">
              <a
                href={tab.href}
                className="text-3xl md:text-4xl font-extrabold px-12 py-6 rounded-full transition-colors text-peach-900 bg-peach-200 hover:bg-peach-300 hover:text-peach-800 focus:bg-white focus:text-peach-700 outline-none tracking-wide shadow-lg border-2 border-peach-300"
                style={{ letterSpacing: '.07em', minWidth: 180, boxShadow: '0 4px 16px rgba(255, 183, 149, 0.13)' }}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center mb-10">
        <h1 className="font-serif text-6xl md:text-7xl font-extrabold tracking-wide text-center drop-shadow-lg whitespace-pre-line leading-tight mb-2" style={{ color: '#C2A86C' }}>
          AI Wilding
        </h1>
        <div className="font-sans text-xl text-center max-w-2xl mb-2" style={{ color: '#222' }}>
          Navigating the future of work and AI—resources, insights, and support for everyone.
        </div>
      </div>

      {/* Elegant Photo Gallery Section */}
      <section className="flex flex-col md:flex-row gap-10 justify-center items-center my-12 w-full">
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 border border-peach-100 max-w-md w-full">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="AI in the Workplace" className="rounded-xl object-cover mb-2 w-full h-auto" width="400" height="250" />
          <span className="text-base font-medium" style={{ color: '#222' }}>AI in the Workplace</span>
        </div>
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 border border-peach-100 max-w-md w-full">
          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="AI and Jobs" className="rounded-xl object-cover mb-2 w-full h-auto" width="400" height="250" />
          <span className="text-base font-medium" style={{ color: '#222' }}>AI and Jobs</span>
        </div>
      </section>
    </main>
  );
}
