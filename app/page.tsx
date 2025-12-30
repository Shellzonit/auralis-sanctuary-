
"use client";
import React from "react";
import Image from "next/image";
import SanctuaryLogo from "../components/SanctuaryLogo";

export default function HomePage() {
  // Navigation tabs
  // Professional, intuitive tab order
  const tabs = [
    { href: '/', label: 'Home' },
    { href: '/resources', label: 'Resources' },
    { href: '/events', label: 'Events' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/faq', label: 'FAQ' },
  ];
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col items-center px-2">
      {/* Tabs Bar */}
      <nav className="w-full flex justify-center mt-8 mb-10">
        <ul className="flex flex-row flex-wrap justify-center w-full max-w-5xl gap-6 px-4 py-3 bg-peach-100 rounded-2xl shadow-xl border border-peach-200">
          {tabs.map(tab => (
            <li key={tab.href} className="flex-1 flex justify-center min-w-[160px] mb-2">
              <a
                href={tab.href}
                className="text-2xl md:text-3xl font-bold px-8 py-3 rounded-full transition-colors text-peach-900 bg-peach-200 hover:bg-peach-300 hover:text-peach-800 focus:bg-white focus:text-peach-700 outline-none tracking-wide shadow-md border-2 border-peach-300"
                style={{ letterSpacing: '.06em', minWidth: 140, boxShadow: '0 2px 8px rgba(255, 183, 149, 0.10)' }}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center mb-10">
        <h1 className="font-serif text-6xl md:text-7xl font-extrabold text-peach-700 tracking-wide text-center drop-shadow-lg whitespace-pre-line leading-tight mb-2">
          AI Wilding
        </h1>
        <div className="font-sans text-xl text-peach-900 text-center max-w-2xl mb-2">
          Navigating the future of work and AI—resources, insights, and support for everyone.
        </div>
      </div>

      {/* Elegant Photo Gallery Section */}
      <section className="flex flex-col md:flex-row gap-10 justify-center items-center my-12 w-full">
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 border border-peach-100 max-w-md w-full">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="AI in the Workplace" className="rounded-xl object-cover mb-2 w-full h-auto" width="400" height="250" />
          <span className="text-base text-peach-800 font-medium">AI in the Workplace</span>
        </div>
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 border border-peach-100 max-w-md w-full">
          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="AI and Jobs" className="rounded-xl object-cover mb-2 w-full h-auto" width="400" height="250" />
          <span className="text-base text-peach-800 font-medium">AI and Jobs</span>
        </div>
      </section>
    </main>
  );
}
