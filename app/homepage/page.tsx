"use client";

import Image from "next/image";

const operatorData = [
  {
    name: "Friend Bot",
    desc: "Warm, supportive, and emotionally present. A gentle companion for grounding and conversation.",
    img: "/Images/operators/Donna.png"
  },
  {
    name: "Entertainment Bot",
    desc: "Light, playful, and creative. Bringing joy, games, and bright moments into your day.",
    img: "/Images/operators/William Games.png"
  },
  {
    name: "Carlotta",
    desc: "Elegant, structured, and wise. A grounding presence with refined emotional rhythm.",
    img: "/Images/operators/Carlotta.png"
  },
  {
    name: "Mr. Nanny",
    desc: "Soft structure, gentle guidance, and supportive care. A steady hand for daily balance.",
    img: "/Images/operators/Mr.Nanny.png"
  },
  {
    name: "Anna the Meal Bot",
    desc: "Calm, creative meal ideas and cooking support. Nourishment with warmth and ease.",
    img: "/Images/operators/Anna.png"
  },
  {
    name: "Security Bot",
    desc: "Clear boundaries, emotional safety, and protective logic. A guardian presence in your Sanctuary.",
    img: "/Images/operators/silver.png"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#0b0d11] text-gray-200 flex flex-col items-center px-6 py-20">
      {/* Hero Section */}
      <section className="max-w-4xl text-center mb-24">
        <h1 className="text-5xl md:text-6xl font-semibold text-gray-100 mb-6 tracking-tight">
          Welcome to the Sanctuary
        </h1>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
          A calm, modern space designed for clarity, comfort, and connection.  
          Move gently. Explore freely. Your Operators are here to guide you.
        </p>
      </section>
      {/* Operator Gallery */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-medium text-gray-100 mb-12 text-center tracking-tight">
          Meet Your Operators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Operator Card */}
          {operatorData.map((op, index) => (
            <div
              key={index}
              className="bg-[#14171d] rounded-2xl p-8 shadow-xl shadow-black/40 hover:shadow-black/60 transition-all border border-white/5 flex flex-col items-center"
            >
              <Image
                src={op.img}
                alt={op.name}
                width={100}
                height={100}
                className="rounded-full mb-5 object-cover border border-gray-700"
              />
              <h3 className="text-xl font-semibold text-gray-100 mb-3 tracking-tight">
                {op.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed text-center">
                {op.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
