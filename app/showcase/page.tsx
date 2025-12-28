"use client";


import { useState, useEffect } from "react";

type ShowcaseItem = {
	id: string;
	title: string;
	description: string;
	url: string;
	type: "image" | "music";
};

export default function ShowcasePage() {
	const [items, setItems] = useState<ShowcaseItem[]>([]);
	const [file, setFile] = useState<File | null>(null);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [uploading, setUploading] = useState(false);

	useEffect(() => {
		fetch("/api/showcase")
			.then((res) => res.json())
			.then((data) => setItems(data.items || []));
	}, []);

	async function handleUpload(e: React.FormEvent) {
		e.preventDefault();
		if (!file || !title) return;
		setUploading(true);
		// For now, assume fileUrl is empty or generated elsewhere
		const payload = {
			title,
			description,
			creator: "anonymous", // Replace with actual user if available
			fileUrl: file ? "" : "", // You may want to upload to B2 and get a URL here
			type: file ? (file.type.startsWith("audio") ? "music" : "image") : "image"
		};
		await fetch("/api/showcase", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});
		setUploading(false);
		setFile(null);
		setTitle("");
		setDescription("");
		fetch("/api/showcase")
			.then((res) => res.json())
			.then((data) => setItems(data.items || []));
	}

	return (
		<main style={{ minHeight: "100vh", background: "#f7fafc" }}>
			<div style={{ maxWidth: 480, margin: "2rem auto", padding: 20, background: "#fff", borderRadius: 12, boxShadow: "0 2px 16px #0001" }}>
				<h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Showcase Upload</h2>
				<form onSubmit={handleUpload}>
					<input type="file" accept="image/*,audio/*" onChange={e => setFile(e.target.files?.[0] || null)} style={{ marginBottom: 8 }} />
					<input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} style={{ marginBottom: 8, width: "100%" }} />
					<input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} style={{ marginBottom: 8, width: "100%" }} />
					<button type="submit" disabled={uploading} style={{ width: "100%", padding: 8, background: "#0070f3", color: "#fff", border: "none", borderRadius: 6 }}>Upload</button>
				</form>
			</div>
			<div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
				{items.length === 0 ? <div style={{ color: "#888", textAlign: "center" }}>No uploads yet.</div> : items.map(item => (
					<div key={item.id} style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px #0001", padding: 16 }}>
						<div style={{ marginBottom: 8 }}>
							{item.type === "image" ? (
								<img src={item.url} alt={item.title} style={{ width: "100%", maxHeight: 180, objectFit: "cover", borderRadius: 8 }} />
							) : (
								<audio controls src={item.url} style={{ width: "100%" }} />
							)}
						</div>
						<div style={{ fontWeight: 600 }}>{item.title}</div>
						<div style={{ fontSize: 14, color: "#555" }}>{item.description}</div>
					</div>
				))}
			</div>
		</main>
	);
}













