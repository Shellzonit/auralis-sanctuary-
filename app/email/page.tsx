"use client";

import { useState } from "react";

export default function EmailPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    alert("Your message has been sent!");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#181a20",
        color: "#f7fafc",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <h1 style={{
        fontFamily: 'Playfair Display, Georgia, serif',
        fontSize: '2.5rem',
        fontWeight: 800,
        letterSpacing: '.06em',
        color: '#ffe082',
        textShadow: '0 2px 16px #000a, 0 1px 0 #fff2',
        margin: '36px 0 18px 0',
        textAlign: 'center',
      }}>
        Contact the Sanctuary
      </h1>
      <div style={{ fontSize: 18, color: '#f7fafc', opacity: 0.85, marginBottom: 32, fontWeight: 500, letterSpacing: '.03em', textAlign: 'center', maxWidth: 540 }}>
        Reach out to us for questions, feedback, or collaboration. We’d love to hear from you!
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: 420,
          background: '#23242b',
          border: '1.5px solid #31323a',
          borderRadius: 18,
          boxShadow: '0 2px 16px #0004',
          padding: '32px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 22,
        }}
      >
        <input
          style={{
            width: '100%',
            padding: '1rem 1.2rem',
            borderRadius: 12,
            border: 'none',
            fontSize: 17,
            background: '#181a20',
            color: '#f7fafc',
            outline: 'none',
            marginBottom: 0,
          }}
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          style={{
            width: '100%',
            padding: '1rem 1.2rem',
            borderRadius: 12,
            border: 'none',
            fontSize: 17,
            background: '#181a20',
            color: '#f7fafc',
            outline: 'none',
            marginBottom: 0,
          }}
          placeholder="Your Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea
          style={{
            width: '100%',
            padding: '1rem 1.2rem',
            borderRadius: 12,
            border: 'none',
            fontSize: 17,
            background: '#181a20',
            color: '#f7fafc',
            outline: 'none',
            marginBottom: 0,
            resize: 'vertical',
          }}
          placeholder="Your Message"
          rows={6}
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '1rem 0',
            background: '#ffe082',
            color: '#23242b',
            fontWeight: 700,
            fontSize: 18,
            border: 'none',
            borderRadius: 10,
            cursor: 'pointer',
            boxShadow: '0 2px 8px #0002',
            transition: 'background .18s',
            marginTop: 8,
          }}
        >
          Send Message
        </button>
      </form>
      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <a href="/" style={{ color: '#ffe082', textDecoration: 'underline', fontSize: 16 }}>← Back to Homepage</a>
      </div>
    </main>
  );
}
