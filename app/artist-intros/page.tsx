
"use client";

import { useEffect, useState } from "react";

interface ArtistIntro {
	id: string;
	name: string;
	intro: string;
	time: string;
}

export default function ArtistIntrosPage() {
	const [intros, setIntros] = useState<ArtistIntro[]>([]);
	const [name, setName] = useState("");
	const [intro, setIntro] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	async function fetchIntros() {
		setLoading(true);
		setError(null);
		try {
			const res = await fetch("/api/artist-intros");
			const data = await res.json();
			setIntros(data.intros || []);
		} catch (err) {
			setError("Failed to load intros");
		}
		setLoading(false);
	}

	useEffect(() => {
		fetchIntros();
		// Optionally, poll every 10s for updates
		// const interval = setInterval(fetchIntros, 10000);
		// return () => clearInterval(interval);
	}, []);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!name.trim() || !intro.trim()) return;
		setLoading(true);
		setError(null);
		try {
			const res = await fetch("/api/artist-intros", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, intro }),
			});
			const data = await res.json();
			if (!res.ok) setError(data.error || "Failed to submit intro");
			setName("");
			setIntro("");
			await fetchIntros();
		} catch (err) {
			setError("Failed to submit intro");
		}
		setLoading(false);
	}

	return (
		<main className="min-h-screen bg-gradient-to-b from-black to-[#1a1a22] text-red-200 flex flex-col items-center px-6 py-16 font-serif">
			<h1 className="text-4xl font-bold text-red-400 mb-2">Artist Introductions</h1>
			<div className="w-32 h-1 bg-red-600 mb-6 rounded-full"></div>
			<form onSubmit={handleSubmit} className="w-full max-w-lg mb-10 bg-[#18181c] p-6 rounded-xl shadow-lg border border-red-900/40">
				<div className="mb-4">
					<input
						className="w-full px-4 py-2 rounded bg-[#222] border border-red-900/40 text-red-200"
						placeholder="Your name or alias"
						value={name}
						onChange={e => setName(e.target.value)}
						disabled={loading}
						required
					/>
				</div>
				<div className="mb-4">
					<textarea
						className="w-full px-4 py-2 rounded bg-[#222] border border-red-900/40 text-red-200 min-h-[80px]"
						placeholder="Introduce yourself as an artist..."
						value={intro}
						onChange={e => setIntro(e.target.value)}
						disabled={loading}
						required
					/>
				</div>
				<button
					type="submit"
					className="px-6 py-2 rounded bg-red-700 hover:bg-red-800 text-white font-semibold disabled:opacity-60"
					disabled={loading}
				>
					{loading ? "Submitting..." : "Share Intro"}
				</button>
				{error && <div className="mt-2 text-red-400">{error}</div>}
			</form>
			<section className="w-full max-w-lg">
				<h2 className="text-2xl font-bold mb-4 text-red-300">Shared Intros</h2>
				{loading && <div>Loading...</div>}
				{intros.length === 0 && !loading && <div className="text-red-400">No intros yet. Be the first!</div>}
				<ul className="space-y-4">
					{intros.map((a) => (
						<li key={a.id} className="bg-[#222] p-4 rounded-lg shadow border border-red-900/30">
							<div className="font-semibold text-red-200">{a.name}</div>
							<div className="text-red-300/90 mt-1 whitespace-pre-line">{a.intro}</div>
							<div className="text-xs text-red-400/60 mt-2">{new Date(a.time).toLocaleString()}</div>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}


