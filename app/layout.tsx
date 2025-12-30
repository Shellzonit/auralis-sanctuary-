
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
          <body className="min-h-screen bg-white text-gray-900" style={{background: '#fff', color: '#222'}}>
            {/* Elegant Header */}
            <header className="w-full py-8 text-center">
              <h1 className="text-4xl md:text-5xl font-serif tracking-wide drop-shadow-lg">
                AI WILDING
              </h1>
            </header>
            {/* Navigation Bar */}
            <nav className="w-full bg-transparent flex justify-center py-8">
              <div className="flex flex-wrap justify-center gap-12 w-full max-w-5xl">
                <a href="/" className="px-8 py-4 rounded-full bg-white text-gray-900 text-2xl font-bold shadow-md transition-all duration-200 border-2 border-yellow-200 hover:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-60 hover:shadow-yellow-300/60 active:shadow-yellow-400/80 active:ring-8 active:ring-yellow-400/80" style={{boxShadow: '0 2px 16px 0 rgba(255, 215, 0, 0.08)'}}>Home</a>
                <a href="/states" className="px-8 py-4 rounded-full bg-white text-gray-900 text-2xl font-bold shadow-md transition-all duration-200 border-2 border-yellow-200 hover:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-60 hover:shadow-yellow-300/60 active:shadow-yellow-400/80 active:ring-8 active:ring-yellow-400/80" style={{boxShadow: '0 2px 16px 0 rgba(255, 215, 0, 0.08)'}}>States</a>
                <a href="/jobs-at-risk" className="px-8 py-4 rounded-full bg-white text-gray-900 text-2xl font-bold shadow-md transition-all duration-200 border-2 border-yellow-200 hover:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-60 hover:shadow-yellow-300/60 active:shadow-yellow-400/80 active:ring-8 active:ring-yellow-400/80" style={{boxShadow: '0 2px 16px 0 rgba(255, 215, 0, 0.08)'}}>Jobs at Risk</a>
                <a href="/transitional-paths" className="px-8 py-4 rounded-full bg-white text-gray-900 text-2xl font-bold shadow-md transition-all duration-200 border-2 border-yellow-200 hover:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-60 hover:shadow-yellow-300/60 active:shadow-yellow-400/80 active:ring-8 active:ring-yellow-400/80" style={{boxShadow: '0 2px 16px 0 rgba(255, 215, 0, 0.08)'}}>Transitional Paths</a>
                <a href="/new-ai-jobs" className="px-8 py-4 rounded-full bg-white text-gray-900 text-2xl font-bold shadow-md transition-all duration-200 border-2 border-yellow-200 hover:border-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-60 hover:shadow-yellow-300/60 active:shadow-yellow-400/80 active:ring-8 active:ring-yellow-400/80" style={{boxShadow: '0 2px 16px 0 rgba(255, 215, 0, 0.08)'}}>New AI Jobs</a>
              </div>
            </nav>
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
