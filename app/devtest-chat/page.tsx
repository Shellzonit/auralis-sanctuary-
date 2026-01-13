
"use client";
import React, { useState } from "react";

export default function DevTestSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [app, setApp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the data to your backend or API
  };

  return (
    <main style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 24 }}>Sign Up to Get Your App Tested</h1>
      {submitted ? (
        <div style={{ color: "#4caf50", fontWeight: 600, fontSize: "1.2rem" }}>
          Thank you for signing up! We'll contact you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16, minWidth: 320, background: "#fff", padding: 32, borderRadius: 12, boxShadow: "0 2px 16px #7b2ff222" }}>
          <label style={{ fontWeight: 600 }}>
            Name
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              style={{ width: "100%", padding: 8, marginTop: 4, borderRadius: 6, border: "1px solid #ccc" }}
            />
          </label>
          <label style={{ fontWeight: 600 }}>
            Email
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: 8, marginTop: 4, borderRadius: 6, border: "1px solid #ccc" }}
            />
          </label>
          <label style={{ fontWeight: 600 }}>
            App/Project Name
            <input
              type="text"
              value={app}
              onChange={e => setApp(e.target.value)}
              required
              style={{ width: "100%", padding: 8, marginTop: 4, borderRadius: 6, border: "1px solid #ccc" }}
            />
          </label>
          <button type="submit" style={{ background: "#7b2ff2", color: "#fff", fontWeight: 700, padding: "10px 0", border: "none", borderRadius: 6, cursor: "pointer", fontSize: "1rem" }}>
            Sign Up
          </button>
        </form>
      )}
    </main>
  );
}
