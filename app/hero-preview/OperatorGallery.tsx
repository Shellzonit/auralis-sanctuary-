import React from 'react';

const operators = [
  {
    name: 'Mr. Nanny',
    role: 'Caretaker',
    image: '/operators/mr-nanny.png',
    link: '/operators/mr-nanny',
  },
  {
    name: 'Donna',
    role: 'Advisor',
    image: '/operators/donna.png',
    link: '/operators/donna',
  },
  {
    name: 'Anna',
    role: 'Guide',
    image: '/operators/anna.png',
    link: '/operators/anna',
  },
  {
    name: 'Silver',
    role: 'Companion',
    image: '/operators/silver.png',
    link: '/operators/silver',
  },
  {
    name: 'Carlotta',
    role: 'Helper',
    image: '/operators/carlotta.png',
    link: '/operators/carlotta',
  },
  {
    name: 'William Games',
    role: 'Game Master',
    image: '/operators/william-games.png',
    link: '/operators/william-games',
  },
  {
    name: 'William',
    role: 'Mentor',
    image: '/operators/william.png',
    link: '/operators/william',
  },
];

export default function OperatorGallery() {
  return (
    <section style={{
      padding: '3rem 1rem',
      background: '#f7fafc',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '2rem',
        maxWidth: 1100,
        margin: '0 auto',
      }}>
        {operators.map((op) => (
          <div key={op.name} style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
            padding: '2rem 1rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'box-shadow 0.2s',
          }}>
            <img src={op.image} alt={op.name} style={{
              width: 90,
              height: 90,
              objectFit: 'cover',
              borderRadius: '50%',
              marginBottom: 18,
              background: '#e2e8f0',
            }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: '0 0 0.3rem' }}>{op.name}</h3>
            <div style={{ color: '#718096', fontSize: '1rem', marginBottom: 18 }}>{op.role}</div>
            <a href={op.link} style={{
              background: 'linear-gradient(90deg, #7f9cf5 0%, #63b3ed 100%)',
              color: '#fff',
              padding: '0.6rem 1.4rem',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              boxShadow: '0 1px 4px rgba(99,179,237,0.10)',
              transition: 'background 0.2s',
            }}>
              Talk to Me
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
