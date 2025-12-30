"use client";

import { useState } from "react";

export default function EmailPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-yellow-400 text-white py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-yellow-300">Email Contact</h1>
        <p className="mb-6 text-purple-100">For all inquiries, please use our <a href="/contact" className="text-yellow-200 underline">Contact Us</a> page.</p>
      </div>
    </main>
  );
}
