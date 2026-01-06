import React from "react";

export default function ContactPage() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [status, setStatus] = React.useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validateEmail(email) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in all fields.");
      return;
    }
    if (!validateEmail(form.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }
    setStatus("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f5f3fd', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
      <section style={{ width: '100%', maxWidth: 700, margin: '3rem auto 2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)', borderRadius: 24, boxShadow: '0 4px 32px #18191a22', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <h1 style={{ color: 'rgba(255,255,255,0.97)', fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1.5px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.18, paddingBottom: '0.18em' }}>Contact</h1>
        <div style={{ color: '#ece9fc', fontSize: '1.15rem', fontWeight: 500, marginTop: 10, textAlign: 'center', maxWidth: 500, textShadow: '0 1px 6px #18191a55' }}>
          Reach out to us with your questions or feedback. We’ll get back to you soon.
        </div>
      </section>
      <section style={{ background: '#fff', borderRadius: 16, padding: '32px 40px', maxWidth: 600, margin: '0 auto 48px auto', boxShadow: '0 2px 16px #18191a22', color: '#18191a', textAlign: 'center', fontSize: '1.12rem', lineHeight: 1.7, border: '1.5px solid #e0d6f7' }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" style={{ padding: 12, borderRadius: 8, border: "1px solid #e0d6f7" }} required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" style={{ padding: 12, borderRadius: 8, border: "1px solid #e0d6f7" }} required type="email" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" style={{ padding: 12, borderRadius: 8, border: "1px solid #e0d6f7", minHeight: 120 }} required />
          <button type="submit" style={{ background: "#7b2ff2", color: "#fff", padding: "12px 24px", borderRadius: 8, border: "none", fontWeight: 600, cursor: "pointer" }}>Send Message</button>
        </form>
        {status && <div style={{ marginTop: 16, color: status.includes("sent") ? "#2e7d32" : "#d32f2f" }}>{status}</div>}
        <div style={{ marginTop: 24 }}>
          Or email us at <a href="mailto:info@aiwilding.com" style={{ color: '#7b2ff2', textDecoration: 'underline' }}>info@aiwilding.com</a> or use the chat for support.
        </div>
      </section>
    </main>
  );
}
