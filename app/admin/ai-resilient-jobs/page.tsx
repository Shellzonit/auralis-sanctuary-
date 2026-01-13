import React from "react";

const AIResilientJobsPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Elegant Gradient Banner */}
      <section
        style={{
          width: '100%',
          maxWidth: 900,
          margin: '2.5rem auto 2rem auto',
          background: 'linear-gradient(90deg, #ede7f6 60%, #f5f3fd 100%)',
          borderRadius: 28,
          boxShadow: '0 4px 32px #d4a85722',
          padding: '2.5rem 0 2.5rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <h1
          style={{
            color: 'var(--accent, #D4A857)',
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            fontWeight: 800,
            fontFamily: 'var(--font-geist-sans), Inter, Segoe UI, Arial, sans-serif',
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin: 0,
            width: '100%',
            overflow: 'hidden',
            whiteSpace: 'normal',
            position: 'relative',
            zIndex: 2,
            textShadow: '0 2px 8px #fff',
            lineHeight: 1.18,
            paddingBottom: '0.18em',
          }}
        >
          AI‑Resilient Jobs
        </h1>
        <div style={{
          color: '#18191a',
          fontSize: '1.15rem',
          fontWeight: 500,
          marginTop: 12,
          textAlign: 'center',
          maxWidth: 600,
          textShadow: '0 1px 6px #fff',
          fontFamily: 'var(--font-geist-sans), Inter, Segoe UI, Arial, sans-serif',
        }}>
          Explore careers that are less likely to be automated or replaced by AI—roles that require hands-on skill, human empathy, and creative problem solving.
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Skilled Trades & Hands‑On Technical Work</h2>
        <p className="mb-2 text-gray-700">Strongly supported by TeamSense’s 2025 analysis of AI‑resilient trades.</p>
        <ul className="list-disc ml-6 mb-2">
          <li>Electricians</li>
          <li>Plumbers, pipefitters, steamfitters</li>
          <li>Solar photovoltaic installers</li>
          <li>Construction equipment operators</li>
          <li>Industrial machinery mechanics</li>
          <li>HVAC technicians</li>
          <li>Welders</li>
          <li>Automotive repair technicians</li>
        </ul>
        <div className="mb-4 text-sm text-gray-600">
          <strong>Why they’re safe:</strong> Physical dexterity + unpredictable environments + on‑site problem solving.
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🧠 Human‑Centered Professional Roles</h2>
        <p className="mb-2 text-gray-700">Highlighted by Indeed’s “AI‑Proof Jobs” list and FromDev’s 2025 report <a href="https://fromdev.com" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">fromdev.com</a>.</p>
        <ul className="list-disc ml-6 mb-2">
          <li>Therapists, counselors, social workers</li>
          <li>Psychologists</li>
          <li>Teachers and special education professionals</li>
          <li>Nurses and nurse practitioners</li>
          <li>Physicians and surgeons</li>
          <li>Occupational and physical therapists</li>
          <li>Social service coordinators</li>
          <li>Childcare workers</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Agriculture & Environmental Work</h2>
        <p className="mb-2 text-gray-700">Supported by Analytics Vidhya’s 2026 list.</p>
        <ul className="list-disc ml-6 mb-2">
          <li>Farmers</li>
          <li>Ranch managers</li>
          <li>Conservation specialists</li>
          <li>Environmental scientists</li>
        </ul>
      </section>
    </div>
  );
};

export default AIResilientJobsPage;
