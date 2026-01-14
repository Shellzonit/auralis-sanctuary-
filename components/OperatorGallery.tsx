import React from "react";
import { operators } from "../data/operators";

function OperatorCard({ name, image, desc }: { name: string; image: string; desc: string }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
      padding: '2rem 1rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 220,
      margin: '0 auto',
    }}>
      <img src={image} alt={name} style={{
        width: 100,
        height: 100,
        objectFit: 'cover',
        borderRadius: '50%',
        marginBottom: 18,
        background: '#e2e8f0',
      }} />
      <h3 style={{ fontSize: '1.1rem', fontWeight: 600, margin: '0 0 0.3rem', textAlign: 'center' }}>{name}</h3>
      <div style={{ color: '#718096', fontSize: '0.98rem', marginBottom: 8, textAlign: 'center' }}>{desc}</div>
    </div>
  );
}

export default function OperatorGallery() {
  return (
    <section style={{
      padding: '3rem 1rem',
      background: '#f7fafc',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2rem',
        maxWidth: 1100,
        margin: '0 auto',
      }}>
        {operators.map((op) => (
          <OperatorCard key={op.name} {...op} />
        ))}
      </div>
    </section>
  );
}
