"use client";

import Link from "next/link";

export default function GamesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 text-center space-y-10">
      <h1 className="text-4xl font-semibold tracking-wide mb-4">Games</h1>
      <p className="text-lg max-w-xl text-gray-700 mb-8">
        Play, create, and share mythic games and interactive experiences. This feature is coming soon!
      </p>
      <Link href="/" className="py-2 px-4 bg-black text-white rounded-md shadow hover:bg-gray-800 transition">
        Back to Home
      </Link>
    </main>
  );
}
