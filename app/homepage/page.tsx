"use client";

import { useState } from "react";
import Image from "next/image";

const fallbackImg = "/icon.png";

const operatorData = [
  {
    name: "William",
    desc: "A thoughtful and strategic operator, ready to assist with your needs.",
    img: "/William.png"
  },
  {
    name: "Anna",
    desc: "Creative and supportive, Anna brings warmth and insight to every interaction.",
    img: "/Anna.png"
  },
  {
    name: "Donna",
    desc: "Donna offers guidance and clarity, helping you navigate any challenge.",
    img: "/Donna.png"
  },
  {
    name: "Silver",
    desc: "A calm and steady presence, Silver ensures a safe and welcoming space.",
    img: "/silver.png"
  },
  {
    name: "William Games",
    desc: "Bringing fun and engagement, William Games is your go-to for entertainment.",
    img: "/William Games.png"
  },
  {
    name: "Carlotta",
    desc: "Elegant and wise, Carlotta provides structure and emotional rhythm.",
    img: "/Carlotta.png"
  },
  {
    name: "Shaunia",
    desc: "Shaunia is here to support and uplift, offering a friendly and helpful hand.",
    img: "/Shaunia.png"
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
