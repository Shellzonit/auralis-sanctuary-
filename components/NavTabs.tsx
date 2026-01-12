

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTabs() {
  const pathname = usePathname();
  const mainTabs = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/ai-news", label: "AI News" },
    { href: "/new-ai-jobs", label: "AI Jobs" },
    { href: "/admin/ai-resilient-jobs", label: "AI‑Resilient Jobs" },
    { href: "/recovery", label: "Recovery Hub" },
  ];
  const moreTabs = [
    { href: "/contact", label: "Contact" },
    { href: "/hiring-events", label: "Hiring Event" },
    { href: "/training", label: "Training" },
    { href: "/resume-wizard", label: "Resume Wizard" },
    { href: "/resources", label: "Resources" },
    { href: "/countries", label: "States/Country" },
  ];
  const [showMore, setShowMore] = React.useState(false);
  return (
    <nav className="w-full flex justify-center mb-8">
      <ul className="flex gap-6 bg-black/80 px-8 py-4 rounded-full border-2 border-white/40 shadow-2xl items-center">
        {mainTabs.map((tab) => {
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
        <li style={{ position: "relative" }}>
          <button
            className="text-xl font-bold px-4 py-2 rounded-lg bg-black/60 text-sanctuary-text hover:text-sanctuary-accent focus:text-sanctuary-accent border-none outline-none"
            onClick={() => setShowMore((v) => !v)}
            aria-haspopup="true"
            aria-expanded={showMore}
            style={{ cursor: "pointer" }}
          >
            More ▾
          </button>
          {showMore && (
            <ul className="absolute right-0 mt-2 bg-black/90 border border-white/30 rounded-lg shadow-xl z-50 min-w-[180px]" style={{ listStyle: "none", padding: "8px 0" }}>
              {moreTabs.map((tab) => (
                <li key={tab.href}>
                  <Link
                    href={tab.href}
                    className="block px-4 py-2 text-base text-sanctuary-text hover:text-sanctuary-accent focus:text-sanctuary-accent"
                    tabIndex={0}
                    onClick={() => setShowMore(false)}
                  >
                    {tab.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
"use client";

"use client";
