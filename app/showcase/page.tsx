
import { useState, useEffect } from "react";

type ShowcaseItem = {
	id: string;
	title: string;
	description: string;
	url: string;
	type: "image" | "music";
};

export default function ShowcaseRoom() {
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
		const formData = new FormData();
		formData.append("file", file);
		formData.append("title", title);
		formData.append("description", description);
		await fetch("/api/showcase", {
			method: "POST",
			body: formData,
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
		<main style={{ minHeight: "100vh", background: "#111" }}>
			<form onSubmit={handleUpload} style={{ margin: "2rem auto", maxWidth: 400, padding: 20, background: "#222", borderRadius: 12, color: "#fff" }}>
				<input type="file" accept="image/*,audio/*" onChange={e => setFile(e.target.files?.[0] || null)} style={{ marginBottom: 8 }} />
				<input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} style={{ marginBottom: 8, width: "100%" }} />
				<input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} style={{ marginBottom: 8, width: "100%" }} />
				<button type="submit" disabled={uploading} style={{ width: "100%", padding: 8, background: "#0070f3", color: "#fff", border: "none", borderRadius: 6 }}>Upload</button>
			</form>
			<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, maxWidth: 900, margin: "0 auto" }}>
				{items.length === 0 ? <div style={{ color: "#aaa", textAlign: "center" }}>No uploads yet.</div> : items.map(item => (
					<div key={item.id} style={{ background: "#222", borderRadius: 12, padding: 16, color: "#fff" }}>
						<div style={{ marginBottom: 8 }}>
							{item.type === "image" ? (
								<img src={item.url} alt={item.title} style={{ width: "100%", maxHeight: 180, objectFit: "cover", borderRadius: 8 }} />
							) : (
								<audio controls src={item.url} style={{ width: "100%" }} />
							)}
						</div>
						<div style={{ fontWeight: 600 }}>{item.title}</div>
						<div style={{ fontSize: 14, color: "#ccc" }}>{item.description}</div>
					</div>
				))}
			</div>
		</main>
	);
}












