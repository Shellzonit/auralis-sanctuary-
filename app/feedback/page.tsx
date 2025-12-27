"use client";
import { useState } from "react";

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to your email, database, or a service like Formspree
    setSubmitted(true);
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
        fontSize: '2.2rem',
        fontWeight: 800,
        color: '#ffe082',
        margin: '36px 0 18px 0',
        textAlign: 'center',
      }}>
        Feedback
      </h1>
      <div style={{ fontSize: 18, color: '#f7fafc', opacity: 0.85, marginBottom: 32, fontWeight: 500, letterSpacing: '.03em', textAlign: 'center', maxWidth: 540 }}>
        We value your thoughts! Share your feedback, suggestions, or report any issues below.
      </div>
      {submitted ? (
        <div style={{ color: '#7fd1b9', fontSize: 18, marginTop: 32 }}>Thank you for your feedback!</div>
      ) : (
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
            alignItems: 'center',
          }}
        >
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
            placeholder="Your feedback or suggestions..."
            rows={5}
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            required
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
            placeholder="Your email (optional)"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
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
            Submit Feedback
          </button>
        </form>
      )}
    </main>
  );
}
