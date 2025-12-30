
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
      <nav className="w-full flex justify-center mt-10 mb-12">
        <ul className="flex flex-wrap gap-4 bg-white border border-yellow-300 rounded-full px-12 py-5 shadow-2xl">
          {tabs.map(tab => (
            <li key={tab.href}>
              <a
                href={tab.href}
                className="text-2xl md:text-3xl font-bold px-10 py-4 rounded-full transition-colors text-yellow-800 hover:bg-yellow-100 hover:text-yellow-900 focus:bg-yellow-200 focus:text-yellow-900 outline-none tracking-wide shadow"
                style={{ letterSpacing: '.04em' }}
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
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 border border-yellow-100 max-w-md w-full">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="AI in the Workplace" className="rounded-xl object-cover mb-2 w-full h-auto" width="400" height="250" />
          <span className="text-base text-yellow-800 font-medium">AI in the Workplace</span>
        </div>
        <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 border border-yellow-100 max-w-md w-full">
          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="AI and Jobs" className="rounded-xl object-cover mb-2 w-full h-auto" width="400" height="250" />
          <span className="text-base text-yellow-800 font-medium">AI and Jobs</span>
        </div>
      </section>
    </main>
  );
}
