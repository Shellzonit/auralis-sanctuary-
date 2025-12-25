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

export default function LicenseShowcase() {
  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", padding: 32 }}>
      <h1 style={{ fontSize: "2rem", marginBottom: 24 }}>Content License Companies</h1>
      <p style={{ marginBottom: 32 }}>
        Explore companies that offer copyright licenses for creative content.
      </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {companies.map((company) => (
          <li key={company.name} style={{ marginBottom: 24, borderBottom: "1px solid #eee", paddingBottom: 16 }}>
            <a href={company.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#be123c", textDecoration: "none" }}>
              {company.name}
            </a>
            <div style={{ color: "#444", marginTop: 8 }}>{company.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
