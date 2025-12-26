"use client";

import { useState } from "react";

export default function EmailPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    alert("Your message has been sent!");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#1a1a22] text-red-200 px-6 py-16 font-serif">

      <h1 className="text-4xl text-center text-red-400 mb-6">
        Contact the Sanctuary
      </h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">

        <input
          className="w-full p-3 bg-[#1f1f29] border border-red-900/40 rounded"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 bg-[#1f1f29] border border-red-900/40 rounded"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          className="w-full p-3 bg-[#1f1f29] border border-red-900/40 rounded"
          placeholder="Your Message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-3 bg-red-700 hover:bg-red-800 rounded text-lg"
        >
          Send Message
        </button>
      </form>

      <div className="text-center mt-10">
        <a href="/" className="text-red-300 underline">← Back to Homepage</a>
      </div>

    </main>
  );
}
