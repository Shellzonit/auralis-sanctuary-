"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function AuthPage() {
  const [supabase, setSupabase] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    setSupabase(client);
  }, []);

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    if (!email || !password) {
      setError("Email and password required.");
      setLoading(false);
      return;
    }
    let result;
    if (mode === "login") {
      result = await supabase.auth.signInWithPassword({ email, password });
    } else {
      result = await supabase.auth.signUp({ email, password });
    }
    if (result.error) {
      setError(result.error.message);
    } else {
      setSuccess(
        mode === "login"
          ? "Logged in!"
          : "Signup successful! Check your email."
      );
    }
    setLoading(false);
  }

  if (!supabase) return null; // or a loading spinner

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-white px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-amber-200">
        <h1 className="text-3xl font-extrabold mb-6 text-rose-700 text-center">
          Sign In / Sign Up
        </h1>
        <form onSubmit={handleAuth} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-amber-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-amber-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flex gap-2 justify-center">
            <button
              type="button"
              className={`px-4 py-2 rounded-lg font-bold transition shadow ${
                mode === "login"
                  ? "bg-rose-700 text-white"
                  : "bg-amber-100 text-rose-700"
              }`}
              onClick={() => setMode("login")}
            >
              Login
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-lg font-bold transition shadow ${
                mode === "signup"
                  ? "bg-rose-700 text-white"
                  : "bg-amber-100 text-rose-700"
              }`}
              onClick={() => setMode("signup")}
            >
              Sign Up
            </button>
          </div>
          <button
            type="submit"
            className="px-5 py-2 bg-amber-400 text-black rounded-lg font-bold hover:bg-amber-500 transition shadow"
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : mode === "login"
              ? "Login"
              : "Sign Up"}
          </button>
          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}
          {success && (
            <div className="text-emerald-600 text-sm text-center">
              {success}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
