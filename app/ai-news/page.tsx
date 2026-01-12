"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

const newsStories = [
  {
    title: "AI Data Centers: Powering the Future",
    summary: "Major investments in AI data centers are reshaping the global tech landscape. Companies are building massive, energy-efficient facilities to support the next generation of AI models.",
    image: "/ai homepage.png",
    link: "https://datacenternews.com/ai-data-centers-2026"
  },
  {
    title: "New AI Programs Revolutionize Healthcare",
    summary: "AI-driven diagnostics and patient care programs are being adopted in hospitals worldwide, improving outcomes and reducing costs.",
    image: "/healthy.png",
    link: "https://healthaiworld.com/programs-2026"
  },
  {
    title: "World News: AI Policy and Ethics",
    summary: "Governments are enacting new policies to address AI safety, ethics, and workforce impact. International summits are underway to coordinate global standards.",
    image: "/education.png",
    link: "https://ainews.global/policy-ethics"
  },
  {
    title: "Vlog: Inside a Next-Gen AI Lab",
    summary: "Go behind the scenes with a leading AI researcher as they tour a state-of-the-art AI lab and discuss the latest breakthroughs.",
    image: "/ai around the world.png",
    link: "https://youtube.com/ai-lab-vlog"
  }
];

export default function AINewsPage() {
  return (
    <main
      id="main-content"
      style={{
        minHeight: '100vh',
        width: '100%',
        background: '#f5f3fd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      role="main"
      tabIndex={-1}
    >
      {/* Banner */}
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
          AI News
        </h1>
        <div style={{
          color: '#18191a',
          fontSize: '1.25rem',
          fontWeight: 500,
          marginTop: 12,
          textAlign: 'center',
          maxWidth: 600,
          textShadow: '0 1px 6px #fff',
        }}>
          Stay updated with the latest stories in Artificial Intelligence: data centers, programs, world news, and vlogs.
        </div>
      </section>
      {/* News Stories */}
      <section style={{ width: '100%', maxWidth: 900, margin: '0 auto 2rem auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {newsStories.map((story, idx) => (
          <article key={idx} style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 16px #18191a22',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '24px',
            gap: '2rem',
            border: '1.5px solid #e0d6f7',
          }}>
            <div style={{ minWidth: 180, maxWidth: 220 }}>
              <Image src={story.image} alt={story.title} width={220} height={120} style={{ borderRadius: 12, objectFit: 'cover', width: '100%', height: 'auto' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#2a4365', marginBottom: 8 }}>{story.title}</h2>
              <p style={{ color: '#444', fontSize: '1.15rem', marginBottom: 12 }}>{story.summary}</p>
              <Link href={story.link} target="_blank" style={{ color: '#7b2ff2', fontWeight: 600, textDecoration: 'underline', fontSize: '1.08rem' }}>Read more</Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
