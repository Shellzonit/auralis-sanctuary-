import React from "react";

export default function AIHiringEventsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-yellow-400 text-white py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-yellow-200 drop-shadow-lg">AI Hiring Events</h1>
      <p className="text-lg max-w-2xl text-center mb-8 text-purple-100">
        Discover upcoming AI hiring events, job fairs, and networking opportunities for creative and technical talent. Stay tuned for updates and new event listings!
      </p>
      <div className="bg-white/10 rounded-xl p-8 shadow-lg max-w-xl w-full text-yellow-100">
        <h2 className="text-2xl font-semibold mb-4">No events listed yet</h2>
        <p>Check back soon for the latest AI hiring events and opportunities.</p>
      </div>
    </main>
  );
}
