"use client";

import Link from "next/link";

// Import Next.js Image component
import Image from "next/image";

export default function HomePage() {
  // List of images from public/
  const images = [
    'ai around the world 2.png',
    'ai around the world.png',
    'ai homepage 3.png',
    'ai homepage.png',
    'Ai wilding (2).png',
    'Ai wilding.png',
    'background.png',
    'BCO.436bd64f-0acc-4437-a5c3-15269bfdf309.png',
    'big cities.png',
    'canada graph.png',
    'china.png',
    'education.png',
    'educational outlook.png',
    'healthy.png',
    'icon.png',
    'japan.png',
    'job growth.png',
    'Mr Nanny.png',
    'Resume.png',
    'states 2.png',
    'states.png',
    'uk.png',
    'usa.png',
  ];
  const random = Math.floor(Math.random() * images.length);
  const img = images[random];
  return (
    <main
      style={{
        minHeight: '100vh',
        width: '100%',
        background: '#f5f3fd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Top Navigation Bar */}
      <nav style={{
        width: '100%',
        background: '#fff',
        borderBottom: '1.5px solid #e0d6f7',
        boxShadow: '0 2px 12px #7b2ff211',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.5rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        {[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'AI Jobs', href: '/new-ai-jobs' },
          { label: 'Transitional Jobs', href: '/transitional-phasing-jobs' },
          { label: 'Recovery Hub', href: '/recovery' },
          { label: 'Hiring Event', href: '/hiring-events' },
          { label: 'Training', href: '/training' },
          { label: 'Resume Wizard', href: '/resume-wizard' },
          { label: 'Resources', href: '/resources' },
          { label: 'States/Country', href: '/countries' },
        ].map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            style={{
              color: '#7b2ff2',
              fontWeight: 700,
              fontSize: '1.1rem',
              textDecoration: 'none',
              margin: '0 1.2rem',
              padding: '0.5rem 0',
              borderBottom: '2px solid transparent',
              transition: 'border 0.2s',
            }}
            onMouseOver={e => e.currentTarget.style.borderBottom = '2px solid #7b2ff2'}
            onMouseOut={e => e.currentTarget.style.borderBottom = '2px solid transparent'}
          >
            {tab.label}
          </a>
        ))}
      </nav>
      {/* Banner with Tagline */}
      <section style={{
        width: '100%',
        maxWidth: 900,
        margin: '2.5rem auto 2rem auto',
        background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)',
        borderRadius: 28,
        boxShadow: '0 4px 32px #18191a22',
        padding: '2.5rem 0 2.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        <h1
          style={{
            color: 'rgba(255,255,255,0.97)',
            fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
            fontWeight: 800,
            fontFamily: 'Playfair Display, Georgia, serif',
            fontStyle: 'italic',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin: 0,
            width: '100%',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
            zIndex: 2,
            textShadow: '0 2px 8px #8882',
            WebkitTextStroke: '1.5px #bba6f7',
            filter: 'none',
            background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            maskImage: 'linear-gradient(to bottom, #fff 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, #fff 80%, transparent 100%)',
            lineHeight: 1.18,
            paddingBottom: '0.18em',
          }}
        >
          AI Wilding
        </h1>
        <div style={{
          color: '#ece9fc',
          fontSize: '1.25rem',
          fontWeight: 500,
          marginTop: 12,
          textAlign: 'center',
          maxWidth: 600,
          textShadow: '0 1px 6px #18191a55',
        }}>
          Empowering your AI journey: discover jobs, training, and support in a privacy-first community.
        </div>
      </section>
      {/* Remove pyramid tabs for a cleaner, more standard layout */}
      {/* Optional: Add a hero image or illustration here if desired */}
      {/* Optional: Add supporting images or icons here if desired */}
      {/* Feature Section */}
      <section style={{
        background: '#fff',
        borderRadius: 16,
        padding: '32px 40px',
        maxWidth: 700,
        margin: '32px auto 48px auto',
        boxShadow: '0 2px 16px #18191a22',
        color: '#18191a',
        textAlign: 'center',
        fontSize: '1.18rem',
        lineHeight: 1.7,
        border: '1.5px solid #e0d6f7',
      }}>
        <strong style={{ color: '#7b2ff2', fontSize: '1.25rem' }}>Meet Mr. Job Nanny!</strong>
        <br />
        <span role="img" aria-label="nanny">🧑‍🦳</span> Your personal, privacy-first AI job assistant. Discover new AI jobs, analyze your skill gaps, set interview reminders, and get personalized job alerts—all in a safe, supportive environment.<br /><br />
        <ul style={{ margin: '8px 0 8px 24px', color: '#18191a', textAlign: 'left', fontSize: '1.08rem' }}>
          <li>Suggest jobs and career paths based on your interests and skills</li>
          <li>Analyze your resume and offer actionable feedback</li>
          <li>Help you identify missing skills or certifications for your dream job</li>
          <li>Send you interview reminders (with a friendly disclaimer!)</li>
          <li>Alert you to new job postings in chat or by email</li>
          <li>Answer your questions about pay, qualifications, and career growth</li>
        </ul>
        <span style={{ color: '#7b2ff2', fontWeight: 600 }}>Your privacy is always protected—your data stays on your device unless you choose to share it.</span>
        <br /><br />
        <Link href="/chatbot-demo" style={{ color: '#6a1b9a', fontWeight: 700, textDecoration: 'underline', fontSize: '1.1rem' }}>Chat with Mr. Job Nanny</Link>
      </section>
    </main>
  );
}
