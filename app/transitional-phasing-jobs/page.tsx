"use client";
import React, { useState } from "react";

const jobPairs = [
  { regular: "Customer Service Rep", ai: "Conversational AI Trainer" },
  { regular: "Data Entry Clerk", ai: "AI Data Annotator" },
  { regular: "Freelance Writer", ai: "AI Content Curator/Prompt Designer" },
];

function Accordion({ title, children, open, onClick }: { title: string; children: React.ReactNode; open: boolean; onClick: () => void }) {
  return (
    <div className="mb-4 rounded-xl border border-[#e0d6f7] bg-white shadow-md">
      <button
        className="w-full flex justify-between items-center px-6 py-4 text-xl font-semibold text-left text-[#7b2ff2] focus:outline-none focus:ring-2 focus:ring-[#7b2ff2] rounded-xl transition-colors hover:bg-[#f5f3fd]"
        onClick={onClick}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="ml-2 text-2xl">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-2">
          {children}
        </div>
      )}
    </div>
  );
}

export default function TransitionalPhasingJobs() {
  return (
    <div style={{ width: '100%', background: '#f5f3fd', minHeight: '0', padding: '0 1rem' }}>
      <section style={{ width: '100%', maxWidth: 700, margin: '2.5rem auto 2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #7b2ff2 100%)', borderRadius: 28, boxShadow: '0 4px 32px #18191a22', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <h1 style={{ color: 'rgba(255,255,255,0.97)', fontSize: 'clamp(2.2rem, 6vw, 3.2rem)', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', maskImage: 'linear-gradient(to bottom, #fff 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, #fff 80%, transparent 100%)', lineHeight: 1.18, paddingBottom: '0.18em' }}>Transitional Jobs</h1>
        <div style={{ color: '#ece9fc', fontSize: '1.1rem', fontWeight: 500, marginTop: 10, textAlign: 'center', maxWidth: 500, textShadow: '0 1px 6px #18191a55' }}>
          See how traditional jobs are evolving into new AI-powered roles.
        </div>
      </section>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 border" style={{ borderColor: '#e0d6f7', fontFamily: 'Arial, Verdana, system-ui, sans-serif', color: '#18191a', boxShadow: '0 2px 16px #18191a22' }}>
          <div className="flex flex-col gap-8">
            {jobPairs.map((pair, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-lg font-semibold text-[#7b2ff2] text-center md:text-left" style={{ minWidth: 160 }}>{pair.regular}</div>
                <div className="flex-1 flex justify-center items-center">
                  <span style={{ fontSize: 32, color: '#bba6f7' }}>&rarr;</span>
                </div>
                <div className="text-lg font-semibold text-[#18191a] text-center md:text-right" style={{ minWidth: 180 }}>{pair.ai}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
        <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#7b2ff2', fontFamily: 'Arial, Verdana, system-ui, sans-serif' }}>Jobs Replaced or Evolving with AI</h2>

