"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
  { code: "hi", label: "हिन्दी" },
];

export default function NavTabs() {
  const pathname = usePathname();
  const [lang, setLang] = React.useState("en");
  const tabs = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/ai-news", label: "AI News" },
    { href: "/new-ai-jobs", label: "AI Jobs" },
    { href: "/admin/ai-resilient-jobs", label: "AI‑Resilient Jobs" },
    { href: "/devtest-chat", label: "DevTest Chat" },
    { href: "/recovery", label: "Recovery Hub" },
    { href: "/hiring-events", label: "Hiring Event" },
    { href: "/training", label: "Training" },
    { href: "/resume-wizard", label: "Resume Wizard" },
    { href: "/resources", label: "Resources" },
    { href: "/countries", label: "States/Country" },
  ];

  return (
    <aside
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: 240,
        background: "linear-gradient(180deg, #18191a 60%, #7b2ff2 100%)",
        boxShadow: "4px 0 32px #7b2ff222",
        borderTopRightRadius: 32,
        borderBottomRightRadius: 32,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px 0 24px 0",
        zIndex: 100,
      }}
      aria-label="Main sidebar navigation"
    >
      <div style={{ marginBottom: 32, width: "100%", textAlign: "center" }}>
        <span style={{
          fontFamily: 'Playfair Display, Georgia, serif',
          fontWeight: 800,
          fontSize: 28,
          color: '#fff',
          letterSpacing: '0.08em',
          textShadow: '0 2px 8px #7b2ff288',
        }}>AI Wilding</span>
      </div>
      <nav style={{ width: "100%" }}>
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          {tabs.map((tab) => {
            const isActive =
              tab.href === "/"
                ? pathname === "/"
                : !!pathname && pathname.startsWith(tab.href);
            return (
              <li key={tab.href} style={{ width: "100%" }}>
                <Link
                  href={tab.href}
                  style={{
                    display: "block",
                    width: "90%",
                    margin: "0 auto",
                    padding: "12px 0",
                    borderRadius: 16,
                    fontWeight: 700,
                    fontSize: 18,
                    color: isActive ? "#fff" : "#e0d6f7",
                    background: isActive ? "linear-gradient(90deg, #7b2ff2 60%, #18191a 100%)" : "transparent",
                    boxShadow: isActive ? "0 2px 16px #7b2ff244" : "none",
                    textAlign: "center",
                    letterSpacing: "0.04em",
                    textDecoration: "none",
                    transition: "all 0.18s cubic-bezier(.4,1.3,.6,1)",
                  }}
                  tabIndex={0}
                  aria-current={isActive ? "page" : undefined}
                >
                  {tab.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div style={{ marginTop: "auto", width: "100%", textAlign: "center" }}>
        <div style={{ marginBottom: 8, color: "#e0d6f7", fontWeight: 600, fontSize: 15 }}>Language</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          {LANGUAGES.map((langOpt) => (
            <button
              key={langOpt.code}
              onClick={() => setLang(langOpt.code)}
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                border: "1.5px solid #fff",
                background: lang === langOpt.code ? "#7b2ff2" : "transparent",
                color: lang === langOpt.code ? "#fff" : "#e0d6f7",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                transition: "all 0.15s cubic-bezier(.4,1.3,.6,1)",
                outline: "none",
              }}
              aria-pressed={lang === langOpt.code}
            >
              {langOpt.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

