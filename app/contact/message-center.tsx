import React from "react";

export default function MessageCenter() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-yellow-400 text-white py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-yellow-300">Message Center</h1>
        <p className="mb-6 text-purple-100">Welcome to the Message Center. Here you can view and respond to messages sent via the Contact page. (Demo: No backend yet)</p>
        {/* Message list and reply form would go here */}
        <div className="mt-8 text-purple-200">No messages yet.</div>
      </div>
    </main>
  );
}
