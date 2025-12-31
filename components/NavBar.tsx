"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [statesOpen, setStatesOpen] = useState(false);
  const [jobsOpen, setJobsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo only */}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          AI Wilding
        </Link>
      </div>
    </nav>
  );
}
