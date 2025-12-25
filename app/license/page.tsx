"use client";
import React from "react";

const companies = [
  {
    name: "Getty Images",
    url: "https://www.gettyimages.com/",
    description: "Stock photos, videos, and music with licensing options."
  },
  {
    name: "Envato Elements",
    url: "https://elements.envato.com/",
    description: "Creative assets with commercial licenses."
  },
  {
    name: "Adobe Stock",
    url: "https://stock.adobe.com/",
    description: "Photos, graphics, and videos for licensed use."
  },
  {
    name: "Shutterstock",
    url: "https://www.shutterstock.com/",
    description: "Global provider of licensed images and music."
  }
];

const licenses = [
  { name: "Standard License", description: "Basic usage for most creative works." },
  { name: "Extended License", description: "Commercial use and redistribution rights." },
  { name: "Editorial License", description: "For news, commentary, and non-commercial use." },
  { name: "Custom License", description: "Contact provider for custom terms." },
];

import { useState } from "react";

export default function LicensePage() {
  const LICENSE_OPTIONS = [
    "Creative Commons Attribution (CC BY)",
    "Creative Commons Attribution-ShareAlike (CC BY-SA)",
    "Creative Commons Attribution-NoDerivs (CC BY-ND)",
    "Creative Commons Attribution-NonCommercial (CC BY-NC)",
    "Creative Commons Attribution-NonCommercial-ShareAlike (CC BY-NC-SA)",
    "Creative Commons Attribution-NonCommercial-NoDerivs (CC BY-NC-ND)",
    "Public Domain (CC0)",
    "All Rights Reserved",
    "Custom License (Contact for details)"
  ];

  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">Licensing Options</h1>
      <ul className="max-w-xl w-full mx-auto bg-gray-900 rounded-lg shadow-lg p-8 text-lg">
        {LICENSE_OPTIONS.map((option, idx) => (
          <li key={idx} className="mb-4 px-4 py-2 rounded bg-gray-800 text-amber-200 font-semibold">
            {option}
          </li>
        ))}
      </ul>
    </main>
  );
}
}
