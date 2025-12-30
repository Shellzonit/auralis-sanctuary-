
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
          <body className="min-h-screen" style={{background: 'linear-gradient(135deg, #6a1b9a 0%, #ffd700 100%)', color: 'white'}}>
            {/* Elegant Header */}
            <header className="w-full py-8 text-center">
              <h1 className="text-4xl md:text-5xl font-serif tracking-wide drop-shadow-lg">
                AI WILDING
              </h1>
            </header>
            {/* Navigation Bar */}
            <nav className="w-full border-t border-b border-white/20 bg-white/10 backdrop-blur-md">
              <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 py-4 text-lg font-light">
                <a href="/" className="hover:text-yellow-300 transition">Home</a>
                <a href="/states" className="hover:text-yellow-300 transition">States</a>
                <a href="/jobs-at-risk" className="hover:text-yellow-300 transition">Jobs at Risk</a>
                <a href="/transitional-paths" className="hover:text-yellow-300 transition">Transitional Paths</a>
                <a href="/new-ai-jobs" className="hover:text-yellow-300 transition">New AI Jobs</a>
                
                
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
