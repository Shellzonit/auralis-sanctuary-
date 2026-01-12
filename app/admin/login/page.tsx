"use client";
import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    setLoading(false);
    if (!error) window.location.href = "/admin/jobs";
  };

  return (
    <div style={{ maxWidth: 400, margin: "4rem auto", padding: 24, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #0001" }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: "100%", marginBottom: 12 }} />
        </label>
        <label>Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: "100%", marginBottom: 12 }} />
        </label>
        <button type="submit" disabled={loading} style={{ width: "100%", padding: 12, background: "#222", color: "#fff", border: 0, borderRadius: 4 }}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <div style={{ color: "red", marginTop: 12 }}>{error}</div>}
      </form>
    </div>
  );
}
