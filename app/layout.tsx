
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
            <header className="bg-[#F7F5F2] border-b border-[#E0DDD8] py-8">
              <nav className="w-full flex justify-between items-center text-2xl gap-0">
                <div className="w-full flex flex-row">
                  {/* Home Tab */}
                  <a href="/" className="flex-1 flex flex-col items-center text-center px-0 py-3 rounded-none font-extrabold text-[#4B2E83] hover:text-[#C2A86C] transition bg-white shadow-none border-r border-[#E0DDD8] first:rounded-l-xl last:rounded-r-xl first:border-l last:border-r-0">
                    <span className="mb-1">
                      {require('../components/NavTabIcons').HomeIcon()}
                    </span>
                    Home
                  </a>
                  {/* States Tab */}
                  <a href="/states" className="flex-1 flex flex-col items-center text-center px-0 py-3 rounded-none font-extrabold text-[#4B2E83] hover:text-[#C2A86C] transition bg-white shadow-none border-r border-[#E0DDD8] last:rounded-r-xl last:border-r-0">
                    <span className="mb-1">
                      {require('../components/NavTabIcons').StatesIcon()}
                    </span>
                    States
                  </a>
                  {/* Jobs at Risk Tab */}
                  <a href="/jobs-at-risk" className="flex-1 flex flex-col items-center text-center px-0 py-3 rounded-none font-extrabold text-[#4B2E83] hover:text-[#C2A86C] transition bg-white shadow-none border-r border-[#E0DDD8] last:rounded-r-xl last:border-r-0">
                    <span className="mb-1">
                      {require('../components/NavTabIcons').JobsIcon()}
                    </span>
                    Jobs at Risk
                  </a>
                  {/* Transitional Paths Tab */}
                  <a href="/transitional-paths" className="flex-1 flex flex-col items-center text-center px-0 py-3 rounded-none font-extrabold text-[#4B2E83] hover:text-[#C2A86C] transition bg-white shadow-none border-r border-[#E0DDD8] last:rounded-r-xl last:border-r-0">
                    <span className="mb-1">
                      {require('../components/NavTabIcons').PathsIcon()}
                    </span>
                    Transitional Paths
                  </a>
                  {/* New AI Jobs Tab */}
                  <a href="/new-ai-jobs" className="flex-1 flex flex-col items-center text-center px-0 py-3 rounded-none font-extrabold text-[#4B2E83] hover:text-[#C2A86C] transition bg-white shadow-none last:rounded-r-xl">
                    <span className="mb-1">
                      {require('../components/NavTabIcons').NewJobsIcon()}
                    </span>
                    New AI Jobs
                  </a>
                </div>
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
