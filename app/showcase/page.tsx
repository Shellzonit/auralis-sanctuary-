
"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";

// Types
type ShowcaseItem = {
	id: string;
	title: string;
	description: string;
	url: string;
	type: "image" | "music";
	ai?: boolean;
};

// Upload Form Component
function ShowcaseUploadForm({ onUpload }: { onUpload: () => void }) {
	const [file, setFile] = useState<File | null>(null);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [aiGenerated, setAIGenerated] = useState(false);
	const [uploading, setUploading] = useState(false);

	async function handleUpload(e: FormEvent) {
		e.preventDefault();
		if (!file || !title) return;
		setUploading(true);
		const payload = {
			title,
			description,
			creator: "anonymous",
			fileUrl: file ? "" : "",
			type: file ? (file.type.startsWith("audio") ? "music" : "image") : "image",
			ai: aiGenerated
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
		setAIGenerated(false);
		onUpload();
	}

	return (
		   <form onSubmit={handleUpload} style={{ marginBottom: 18, background: '#181818', borderRadius: 12, padding: 18, boxShadow: '0 2px 16px #000a' }}>
			   <input type="file" accept="image/*,audio/*" onChange={e => setFile(e.target.files?.[0] || null)} style={{ marginBottom: 8, background: '#232323', color: '#ffd700', border: '1px solid #ffd700', borderRadius: 6, padding: 6 }} />
			   <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} style={{ marginBottom: 8, width: "100%", background: '#232323', color: '#ffd700', border: '1px solid #ffd700', borderRadius: 6, padding: 6 }} />
			   <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} style={{ marginBottom: 8, width: "100%", background: '#232323', color: '#ffd700', border: '1px solid #ffd700', borderRadius: 6, padding: 6 }} />
			   <label style={{ display: "block", marginBottom: 8, color: '#ffd700', fontWeight: 600 }}>
				   <input type="checkbox" checked={aiGenerated} onChange={e => setAIGenerated(e.target.checked)} style={{ marginRight: 6, accentColor: '#ffd700' }} />
				   AI-generated
			   </label>
			   <button type="submit" disabled={uploading} style={{ width: "100%", padding: 10, background: '#ffd700', color: '#181818', border: 'none', borderRadius: 6, fontWeight: 700, fontSize: 18, boxShadow: '0 2px 8px #0008', letterSpacing: '.04em' }}>Upload</button>
		   </form>
	);
}

// Gallery Item Card
function ShowcaseItemCard({ item }: { item: ShowcaseItem }) {
	   return (
		   <div style={{ background: '#181818', borderRadius: 12, boxShadow: '0 2px 16px #000a', padding: 18, position: 'relative', border: '1.5px solid #ffd700' }}>
			   <div style={{ position: 'absolute', top: 10, right: 10, fontSize: 13, color: item.ai ? '#ffd700' : '#888', fontWeight: 700, letterSpacing: '.04em' }}>{item.ai ? 'AI' : 'Human'}</div>
			   <div style={{ marginBottom: 8 }}>
				   {item.type === 'image' ? (
					   <img src={item.url} alt={item.title} style={{ width: '100%', maxHeight: 180, objectFit: 'cover', borderRadius: 8, border: '1px solid #ffd700' }} />
				   ) : (
					   <audio controls src={item.url} style={{ width: '100%' }} />
				   )}
			   </div>
			   <div style={{ fontWeight: 700, color: '#ffd700', fontSize: 18 }}>{item.title}</div>
			   <div style={{ fontSize: 14, color: '#ffd700bb', marginBottom: 8 }}>{item.description}</div>
			   <button style={{ position: 'absolute', bottom: 10, right: 10, fontSize: 13, color: '#ffd700', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }} onClick={() => alert('Report feature coming soon!')}>Report</button>
		   </div>
	   );
}

// Gallery Component
function ShowcaseGallery({ items }: { items: ShowcaseItem[] }) {
	   if (items.length === 0) {
		   return <div style={{ color: "#ffd70099", textAlign: "center", fontWeight: 600, fontSize: 20 }}>No uploads yet.</div>;
	   }
	return (
		<div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
			{items.map(item => <ShowcaseItemCard key={item.id} item={item} />)}
		</div>
	);
}

// Main Showcase Page
export default function ShowcasePage() {
	const [items, setItems] = useState<ShowcaseItem[]>([]);
	const [filter, setFilter] = useState<"all" | "ai" | "human">("all");

	// Fetch showcase items
	function fetchItems() {
		fetch("/api/showcase")
			.then((res) => res.json())
			.then((data) => setItems(data.items || []));
	}
	useEffect(fetchItems, []);

	// Filter items by AI/human
	const filteredItems = items.filter(item =>
		filter === "all" ? true : filter === "ai" ? item.ai : item.ai === false
	);

	   return (
		   <main style={{ minHeight: "100vh", background: "#101010" }}>
			   <div style={{ maxWidth: 700, margin: "2rem auto 1rem auto", padding: 24, background: '#181818', borderRadius: 14, boxShadow: '0 2px 32px #000a', border: '2px solid #ffd700' }}>
				   <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 10, color: "#ffd700", letterSpacing: '.08em', textShadow: '0 2px 16px #000a' }}>Sanctuary AI Showcase</h1>
				   <div style={{ fontSize: 18, color: "#ffd700cc", marginBottom: 16, fontWeight: 500 }}>
					Sanctuary is a safe haven for AI creators, artists, and enthusiasts. We celebrate innovation, creativity, and collaboration in artificial intelligence—free from harassment or fear. Here, everyone is welcome to share, learn, and build the future together.<br /><br />
					<strong>How to share AI-generated content:</strong><br />
					You can upload your own AI-generated images or music created with any free or external tool. Just check the <span style={{ color: '#00c2b2' }}>&quot;AI-generated&quot;</span> box when uploading.<br />
					Need a free AI tool? Try <a href="https://www.craiyon.com/" target="_blank" rel="noopener noreferrer">Craiyon</a>, <a href="https://www.nightcafe.studio/" target="_blank" rel="noopener noreferrer">NightCafe</a>, or <a href="https://stablediffusionweb.com/" target="_blank" rel="noopener noreferrer">Stable Diffusion Web</a>.<br />
					You can also use <a href="https://musicfy.lol/" target="_blank" rel="noopener noreferrer">Musicfy</a> for AI music.<br /><br />
					<strong>Note:</strong> Please only upload content you have the rights to share.
				</div>
				   <button
					   style={{ background: '#ffd700', color: '#181818', border: 'none', borderRadius: 8, padding: '10px 22px', fontWeight: 700, fontSize: 18, marginBottom: 18, cursor: 'pointer', boxShadow: '0 2px 8px #0008', letterSpacing: '.04em' }}
					   onClick={() => {
						   window.alert(
							   "To create AI art or music for free, try these tools:\n\n- Craiyon (craiyon.com)\n- NightCafe (nightcafe.studio)\n- Stable Diffusion Web (stablediffusionweb.com)\n- Musicfy (musicfy.lol)\n\nOnce you have your creation, upload it here and check the 'AI-generated' box!"
						   );
					   }}
				   >
					   Create with AI
				   </button>
				<ShowcaseUploadForm onUpload={fetchItems} />
				   <div style={{ marginBottom: 10 }}>
					   <span style={{ fontWeight: 700, marginRight: 10, color: '#ffd700' }}>Filter:</span>
					   <button onClick={() => setFilter("all")} style={{ marginRight: 6, background: filter === "all" ? '#ffd700' : '#232323', color: filter === "all" ? '#181818' : '#ffd700', border: 'none', borderRadius: 6, padding: '4px 12px', cursor: 'pointer', fontWeight: 700, letterSpacing: '.04em', boxShadow: filter === "all" ? '0 2px 8px #0008' : 'none' }}>All</button>
					   <button onClick={() => setFilter("ai")} style={{ marginRight: 6, background: filter === "ai" ? '#ffd700' : '#232323', color: filter === "ai" ? '#181818' : '#ffd700', border: 'none', borderRadius: 6, padding: '4px 12px', cursor: 'pointer', fontWeight: 700, letterSpacing: '.04em', boxShadow: filter === "ai" ? '0 2px 8px #0008' : 'none' }}>AI</button>
					   <button onClick={() => setFilter("human")} style={{ background: filter === "human" ? '#ffd700' : '#232323', color: filter === "human" ? '#181818' : '#ffd700', border: 'none', borderRadius: 6, padding: '4px 12px', cursor: 'pointer', fontWeight: 700, letterSpacing: '.04em', boxShadow: filter === "human" ? '0 2px 8px #0008' : 'none' }}>Human</button>
				   </div>
			</div>
			<ShowcaseGallery items={filteredItems} />
		</main>
	);
}













