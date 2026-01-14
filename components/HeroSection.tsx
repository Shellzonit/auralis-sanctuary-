import React from "react";

export default function HeroSection() {
  return (
    <section style={{
      minHeight: '50vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      textAlign: 'center',
      padding: '4rem 1rem',
    }}>
      <h1 style={{
        fontSize: '2.8rem',
        fontWeight: 700,
        marginBottom: '1rem',
        color: '#2d3748',
        letterSpacing: '0.02em',
      }}>
        Welcome to the Sanctuary
      </h1>
      <p style={{
        fontSize: '1.3rem',
        color: '#4a5568',
        maxWidth: 500,
        margin: '0 auto',
      }}>
        Choose your companion, guide, or helper.
      </p>
    </section>
  );
}
