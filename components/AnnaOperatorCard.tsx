
import React, { useState } from "react";

const operatorData = [
  {
    name: "Anna — Meal Bot",
    image: "/images/operators/anna.png.png"
  }
];


type ChatMsg = { author: string; text: string; avatar: string | null };

const AnnaOperatorCard: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {operatorData.map((op, i) => (
        <div key={i} style={{ marginBottom: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={op.image} alt={op.name} width={300} height={300} />
          <p style={{ fontWeight: 600, fontSize: '1.2rem', margin: '8px 0' }}>{op.name}</p>
          <a
            href="/anna-mealbot-vr-room.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#7b2ff2',
              color: '#fff',
              fontWeight: 700,
              borderRadius: 8,
              padding: '12px 24px',
              textDecoration: 'none',
              boxShadow: '0 2px 8px #7b2ff255',
              fontSize: '1.1rem',
              marginTop: 12
            }}
          >
            Launch Anna's VR Room
          </a>
        </div>
      ))}
      {/* Static sample conversation */}
      <div style={{ width: 320, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #18191a22', padding: 16, marginTop: 8 }}>
        <div style={{ minHeight: 120, maxHeight: 200, overflowY: 'auto', marginBottom: 12 }}>
          <div style={{ marginBottom: 8, textAlign: 'right' }}>
            <span style={{ fontWeight: 500, color: '#7b2ff2' }}>You:</span> <span>Can you suggest a healthy dinner?</span>
          </div>
          <div style={{ marginBottom: 8, textAlign: 'left' }}>
            <span style={{ fontWeight: 500, color: '#18191a' }}>Anna:</span> <span>How about grilled salmon with quinoa and steamed broccoli?</span>
          </div>
          <div style={{ marginBottom: 8, textAlign: 'right' }}>
            <span style={{ fontWeight: 500, color: '#7b2ff2' }}>You:</span> <span>Any quick breakfast ideas?</span>
          </div>
          <div style={{ marginBottom: 8, textAlign: 'left' }}>
            <span style={{ fontWeight: 500, color: '#18191a' }}>Anna:</span> <span>Try overnight oats with berries and almonds!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnaOperatorCard;
