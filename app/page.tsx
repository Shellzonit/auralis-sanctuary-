
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
      <nav className="w-full flex justify-center mt-6 mb-6">
        <ul className="flex flex-row justify-between w-full max-w-5xl gap-12 px-8 bg-blue-100 border border-blue-300 rounded-full shadow-2xl">
          {tabs.map(tab => (
            <li key={tab.href} className="flex-1 text-center">
              <a
                href={tab.href}
                className="text-3xl md:text-4xl font-extrabold px-0 py-4 rounded transition-colors text-blue-900 hover:bg-blue-200 hover:text-blue-800 focus:bg-blue-300 focus:text-blue-900 outline-none tracking-wider"
                style={{ letterSpacing: '.07em', display: 'inline-block', minWidth: 120 }}
              >
                {tab.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center mb-10">
        <h1 className="font-serif text-6xl md:text-7xl font-extrabold text-yellow-700 tracking-wide text-center drop-shadow-lg whitespace-pre-line leading-tight mb-2">
          AI Wilding
        </h1>
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
