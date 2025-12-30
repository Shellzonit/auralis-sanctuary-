"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Site Name */}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          AI Wilding
        </Link>
        {/* Navigation Links */}
        <div className="hidden gap-6 md:flex">
          <Link href="/states" className="hover:text-blue-600">
            States
          </Link>
          <Link href="/jobs-at-risk" className="hover:text-blue-600">
            Jobs at Risk
          </Link>
          <Link href="/transitional-paths" className="hover:text-blue-600">
            Transitional Paths
          </Link>
          <Link href="/new-ai-jobs" className="hover:text-blue-600">
            New AI Jobs
          </Link>
          <Link href="/training" className="hover:text-blue-600">
            Training Hub
          </Link>
          <Link href="/recovery" className="hover:text-blue-600">
            Recovery Hub
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>
        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          {/* You can add a hamburger menu here later */}
          <span className="text-gray-700">☰</span>
        </div>
      </div>
    </nav>
  );
}
