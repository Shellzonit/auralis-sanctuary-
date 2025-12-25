"use client";
import React from "react";

export default function ContentPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Content Gallery</h1>
      <p className="max-w-2xl text-center text-lg md:text-xl text-gray-300 mb-10">
        Discover, share, and showcase creative works from the Auralis Sanctuary community. Upload your art, music, writing, or other content and connect with fellow creators.
      </p>
      {/* Content grid placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Example content cards */}
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <span className="text-2xl font-bold mb-2">Artwork Title</span>
          <span className="text-gray-400 mb-4">by Artist Name</span>
          <div className="w-32 h-32 bg-gray-700 rounded mb-4" />
          <button className="px-4 py-2 rounded bg-amber-400 text-black font-bold">View</button>
        </div>
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <span className="text-2xl font-bold mb-2">Music Track</span>
          <span className="text-gray-400 mb-4">by Musician</span>
          <div className="w-32 h-32 bg-gray-700 rounded mb-4 flex items-center justify-center">
            <span className="text-4xl">🎵</span>
          </div>
          <button className="px-4 py-2 rounded bg-amber-400 text-black font-bold">Listen</button>
        </div>
        <div className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <span className="text-2xl font-bold mb-2">Writing Sample</span>
          <span className="text-gray-400 mb-4">by Author</span>
          <div className="w-32 h-32 bg-gray-700 rounded mb-4 flex items-center justify-center">
            <span className="text-4xl">📄</span>
          </div>
          <button className="px-4 py-2 rounded bg-amber-400 text-black font-bold">Read</button>
        </div>
      </div>
    </main>
  );
}
