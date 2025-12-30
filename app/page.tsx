"use client";
import React from "react";
import SanctuaryLogo from "../components/SanctuaryLogo";

export default function HomePage() {
    // Get current path for active tab highlighting
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  const tabStyle = {
    color: '#ffd700',
    fontWeight: 700,
    fontSize: '1.08rem',
    textDecoration: 'none',
    padding: '10px 28px',
    borderRadius: 10,
    background: 'rgba(106,27,154,0.18)', // purple tint
    boxShadow: '0 2px 12px #6a1b9a33',
    transition: 'background 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1), border-bottom 0.3s cubic-bezier(0.4,0,0.2,1), color 0.3s cubic-bezier(0.4,0,0.2,1)',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    letterSpacing: '.04em',
    margin: 0,
    display: 'inline-block',
  };

  // Inline hover style for tabs
  const tabHoverStyle = {
    background: 'rgba(106,27,154,0.32)',
    boxShadow: '0 4px 16px #6a1b9a44',
    borderBottom: '2px solid #ffd700',
    color: '#fff8dc',
  };

  // Custom hook for hover effect
  function useHover(): [boolean, () => void, () => void] {
    const [isHovered, setHovered] = React.useState(false);
    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);
    return [isHovered, onMouseEnter, onMouseLeave];
  }
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff",
        fontFamily: "Playfair Display, Georgia, serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0 1rem",
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, margin: '44px 0 12px 0' }}>
        <h1
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: '3.2rem',
            fontWeight: 900,
            color: '#6a1b9a',
            textShadow: '0 2px 24px #ffd700',
            letterSpacing: 2,
            textAlign: 'center',
            margin: 0,
          }}
        >
          AI Wilding
        </h1>
        <SanctuaryLogo />
      </div>
      <div
        style={{
          fontFamily: 'Inter, Arial, sans-serif',
          fontSize: '1.15rem',
          color: '#6a1b9a',
          marginBottom: '16px',
          textAlign: 'center',
          maxWidth: 480,
        }}
      >
        Navigating the future of work and AI—resources, insights, and support for everyone.
      </div>

      {/* Photo Gallery Section */}
      <section style={{ display: 'flex', gap: 32, justifyContent: 'center', margin: '32px 0' }}>
        <img src="/ai-community-hub.jpg" alt="AI Community Hub" style={{ width: 260, height: 180, objectFit: 'cover', borderRadius: 16, boxShadow: '0 2px 16px #6a1b9a22', border: '3px solid #ffd700' }} />
        <img src="/ai-use-cases.jpg" alt="AI Use Cases in Music and Medicine" style={{ width: 260, height: 180, objectFit: 'cover', borderRadius: 16, boxShadow: '0 2px 16px #6a1b9a22', border: '3px solid #ffd700' }} />
      </section>
      <nav
        style={{
          display: 'flex',
          gap: 36,
          background: 'rgba(255, 215, 0, 0.08)', // subtle gold
          borderRadius: 18,
          padding: '16px 40px',
          marginBottom: 48,
          boxShadow: '0 4px 24px #6a1b9a22',
          flexWrap: 'wrap',
          maxWidth: '100vw',
        }}
      >
        {[
          { href: '/', label: 'Home' },
          { href: '/states', label: 'States' },
          { href: '/jobs-at-risk', label: 'Jobs at Risk' },
          { href: '/transitional-paths', label: 'Transitional Paths' },
          { href: '/new-ai-jobs', label: 'New AI Jobs' },
          { href: '/success-stories', label: 'Success Stories' },
          { href: '/resources', label: 'Resources' },
          { href: '/events', label: 'Events' },
          { href: '/faq', label: 'FAQ' },
        ].map((tab, idx) => {
          const [isHovered, onMouseEnter, onMouseLeave] = useHover();
          const isActive = currentPath === tab.href;
          const activeStyle = isActive
            ? {
                ...tabStyle,
                background: 'linear-gradient(90deg, #ffd700 0%, #6a1b9a 100%)',
                color: '#6a1b9a',
                borderBottom: '3px solid #ffd700',
                boxShadow: '0 4px 16px #ffd70044',
              }
            : {};
          // Responsive tab style
          const responsiveTabStyle = {
            ...tabStyle,
            fontSize: 'clamp(0.95rem, 2vw, 1.08rem)',
            padding: '10px clamp(12px, 4vw, 28px)',
            minWidth: 80,
            textAlign: 'center',
          };
          const tabCombinedStyle = {
            ...(isHovered ? { ...responsiveTabStyle, ...tabHoverStyle } : { ...responsiveTabStyle, ...activeStyle }),
            outline: 'none',
          } as React.CSSProperties;
          return (
            <a
              key={tab.href}
              href={tab.href}
              style={tabCombinedStyle}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              tabIndex={0}
              aria-label={tab.label}
              onFocus={onMouseEnter}
              onBlur={onMouseLeave}
            >
              {tab.label}
            </a>
          );
        })}
      </nav>
    </main>
  );
}
