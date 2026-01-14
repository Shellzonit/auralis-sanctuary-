import React from "react";

const operatorData = [
  {
    name: "Donna",
    image: "/images/operators/donna.png"
  },
  {
    name: "Entertainment Bot",
    image: "/images/operators/entertainmentbot.png"
  },
  {
    name: "Friendbot Shaunia",
    image: "/images/operators/friendbot-shaunia.png"
  },
  {
    name: "Mr. Nanny",
    image: "/images/operators/mrnanny.png"
  },
  {
    name: "Relocation Bot",
    image: "/images/operators/relocationbot.png"
  },
  {
    name: "Silver",
    image: "/images/operators/silver.png"
  },
  {
    name: "William Bot",
    image: "/images/operators/williambot.png"
  }
];

export default function OperatorCards() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {operatorData.map((op, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <img src={op.image} alt={op.name} width={200} height={200} style={{ borderRadius: 16, objectFit: 'cover' }} />
          <p style={{ marginTop: 12, fontWeight: 600 }}>{op.name}</p>
        </div>
      ))}
    </div>
  );
}
