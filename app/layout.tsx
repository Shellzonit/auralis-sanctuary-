
import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NotificationBell, { Notification } from "../components/NotificationBell";
import NavBar from "../components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Wilding",
  description: "A national atlas of AI transitions, jobs at risk, and new pathways.",
  twitter: {
    card: "summary_large_image",
    title: "AI Wilding — The Atlas of AI Transitions",
    description: "Explore jobs at risk, new AI-created roles, and state-by-state transitions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
          <body className="min-h-screen" style={{ background: '#F7F5F2', color: '#222' }}>
            {/* Elegant Header */}
            <header className="w-full py-8 text-center">
              <h1 className="text-4xl md:text-5xl font-serif tracking-wide drop-shadow-lg">
                AI WILDING
              </h1>
            </header>
            {/* Navigation Bar */}
            <header className="bg-[#F7F5F2] border-b border-[#E0DDD8] py-5">
              <nav className="flex justify-center space-x-8 text-lg">
                <a href="/" className="px-6 py-2 rounded font-bold text-[#4B2E83] hover:text-[#C2A86C] transition bg-white shadow-sm">Home</a>
                <a href="/states" className="px-6 py-2 rounded font-bold text-[#4B2E83] hover:text-[#C2A86C] transition bg-white shadow-sm">States</a>
                <a href="/jobs-at-risk" className="px-6 py-2 rounded font-bold text-[#4B2E83] hover:text-[#C2A86C] transition bg-white shadow-sm">Jobs at Risk</a>
                <a href="/transitional-paths" className="px-6 py-2 rounded font-bold text-[#4B2E83] hover:text-[#C2A86C] transition bg-white shadow-sm">Transitional Paths</a>
                <a href="/new-ai-jobs" className="px-6 py-2 rounded font-bold text-[#4B2E83] hover:text-[#C2A86C] transition bg-white shadow-sm">New AI Jobs</a>
              </nav>
            </header>
            {/* Page Content */}
            <main className="px-6 py-10">
              {children}
            </main>
            <div className="blue-streak" />
            {/* Footer */}
            <footer className="w-full py-6 text-center text-sm bg-white/10 mt-12">
              <span className="text-purple-100">This website was created using Next.js, React, Tailwind CSS, and deployed with Vercel.</span>
            </footer>
      </body>
    </html>
  );
}
