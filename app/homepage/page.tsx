"use client";

import { useState } from "react";
import Image from "next/image";

const fallbackImg = "/icon.png";

const operatorData = [
  {
    name: "Mr. Nanny",
    img: "/images/operators/mrnanny.png",
    desc: "Gentle structure and supportive care. A steady hand for daily balance."
  },
  {
    name: "Relocation Bot",
    img: "/images/operators/relocationbot.png",
    desc: "Guidance and support for your next big move."
  },
  {
    name: "Donna",
    img: "/images/operators/donna.png",
    desc: "Offers clarity and wisdom for any challenge."
  },
  {
    name: "Anna",
    img: "/images/operators/anna.png",
    desc: "Creative meal ideas and nurturing support."
  },
  {
    name: "William Bot",
    img: "/images/operators/williambot.png",
    desc: "Strategic, thoughtful, and ready to assist."
  },
  {
    name: "Entertainment Bot",
    img: "/images/operators/entertainmentbot.png",
    desc: "Bringing joy, games, and bright moments."
  },
  {
    name: "Silver",
    img: "/images/operators/silver.png",
    desc: "A calm and steady presence for your sanctuary."
  },
  {
    name: "Friendbot Shaunia",
    img: "/images/operators/friendbot-shaunia.png",
    desc: "Warm, supportive, and emotionally present."
  },
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
          {operatorData.map((op, index) => {
            const [imgSrc, setImgSrc] = useState(op.img);
            return (
              <div
                key={index}
                className="bg-[#14171d] rounded-2xl p-8 shadow-xl shadow-black/40 hover:shadow-black/60 transition-all border border-white/5 flex flex-col items-center"
              >
                <Image
                  src={imgSrc}
                  alt={op.name}
                  width={100}
                  height={100}
                  className="rounded-full mb-5 object-cover border border-gray-700"
                  onError={() => setImgSrc(fallbackImg)}
                />
                <h3 className="text-xl font-semibold text-gray-100 mb-3 tracking-tight">
                  {op.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center">
                  {op.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
