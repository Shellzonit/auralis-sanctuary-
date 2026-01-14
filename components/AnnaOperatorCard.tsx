import React from "react";

const operatorData = [
  {
    name: "Anna — Meal Bot",
    image: "/images/operators/anna.jpeg"
  }
];

export default function AnnaOperatorCard() {
  return (
    <div>
      {operatorData.map((op, i) => (
        <div key={i}>
          <img src={op.image} alt={op.name} width={300} height={300} />
          <p>{op.name}</p>
        </div>
      ))}
    </div>
  );
}
