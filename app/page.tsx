
"use client";
import React from "react";
import Image from "next/image";
import SanctuaryLogo from "../components/SanctuaryLogo";

export default function HomePage() {
  // Navigation tabs
  // Professional, intuitive tab order
  const tabs = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    { href: '/resources', label: 'Resources' },
    { href: '/events', label: 'Events' },
    { href: '/success-stories', label: 'Success Stories' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
    <main className="min-h-screen bg-white font-sans flex flex-col items-center px-2">
      {/* Tabs Bar */}
      <nav className="w-full flex justify-center mt-10 mb-12">
        <ul className="flex flex-wrap gap-2 bg-white border border-yellow-300 rounded-full px-8 py-3 shadow-lg">
          {tabs.map(tab => (
            <li key={tab.href}>
              <a
                href={tab.href}
                className="text-base md:text-lg font-semibold px-6 py-2 rounded-full transition-colors text-yellow-800 hover:bg-yellow-100 hover:text-yellow-900 focus:bg-yellow-200 focus:text-yellow-900 outline-none tracking-wide"
                style={{ letterSpacing: '.03em' }}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center mb-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-4">
          <SanctuaryLogo />
          <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-yellow-700 tracking-wide text-center drop-shadow-lg whitespace-pre-line leading-tight">
            AI Wilding
          </h1>
        </div>
        <div className="font-sans text-xl text-yellow-900 text-center max-w-2xl mb-2">
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

      {/* Elegant Photo Gallery Section */}
      <section className="flex flex-col md:flex-row gap-10 justify-center items-center my-12 w-full">
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 border border-yellow-100 max-w-2xl w-full">
          <Image src="/ai-community-hub.jpg" alt="AI Community Hub" width={1000} height={600} className="rounded-xl object-cover mb-2 w-full h-auto" />
          <span className="text-base text-yellow-800 font-medium">AI Community Hub</span>
        </div>
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 border border-yellow-100 max-w-2xl w-full">
          <Image src="/ai-use-cases.jpg" alt="AI Use Cases in Music and Medicine" width={1000} height={600} className="rounded-xl object-cover mb-2 w-full h-auto" />
          <span className="text-base text-yellow-800 font-medium">AI Use Cases: Music & Medicine</span>
        </div>
      </section>
    </main>
  );
}
