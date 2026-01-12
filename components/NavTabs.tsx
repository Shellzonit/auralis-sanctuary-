"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTabs() {
  const pathname = usePathname();
  const tabs = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/ai-news", label: "AI News" },
    { href: "/new-ai-jobs", label: "AI Jobs" },
    { href: "/admin/ai-resilient-jobs", label: "AI‑Resilient Jobs" },
    { href: "/recovery", label: "Recovery Hub" },
    { href: "/hiring-events", label: "Hiring Event" },
    { href: "/training", label: "Training" },
    { href: "/resume-wizard", label: "Resume Wizard" },
    { href: "/resources", label: "Resources" },
    { href: "/countries", label: "States/Country" },
  ];
  return (
    <nav className="w-full flex justify-center mb-8">
      <ul className="flex gap-6 bg-black/80 px-8 py-4 rounded-full border-2 border-white/40 shadow-2xl items-center">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : !!pathname && pathname.startsWith(tab.href);
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                className={`text-xl font-bold tracking-wide px-4 py-2 rounded-lg transition-colors relative text-sanctuary-text hover:text-sanctuary-accent focus:text-sanctuary-accent outline-none`}
                tabIndex={0}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

