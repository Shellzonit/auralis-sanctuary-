
"use client";
import { useState, useEffect, useRef } from "react";
// import { getAblyClient } from "../../lib/ablyClient"; // Uncomment for Ably integration

type Message = {
	id: number;
	author: string;
	avatar: string;
	text: string;
	timestamp: string;
	parentId?: number;
	replies?: Message[];
	reactions?: number;
};

// Demo data for initial UI
const DEMO: Message[] = [
	{
		id: 1,
		author: "Aurora",
		avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Aurora",
		text: "Welcome to the HoloChat! 🌌",
		timestamp: "2m ago",
		replies: [
			{
				id: 2,
				author: "Nova",
				avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Nova",
				text: "This looks amazing!",
				timestamp: "1m ago",
			},
		],
	},
	{
		id: 3,
		author: "Orion",
		avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Orion",
		text: "How do I send a hologram reply?",
		timestamp: "just now",
		replies: [],
	},
];

	const [messages, setMessages] = useState<Message[]>(
		DEMO.map(m => ({ ...m, reactions: 0, replies: m.replies?.map(r => ({ ...r, reactions: 0 })) }))
	);
	const [input, setInput] = useState("");
	const [replyingTo, setReplyingTo] = useState<number | null>(null);
	const [replyInput, setReplyInput] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	// Placeholder for Neon/Ably integration
	useEffect(() => {
		// TODO: Fetch messages from Neon, subscribe to Ably
	}, []);

	// Send new message
	const handleSend = (e: React.FormEvent) => {
		e.preventDefault();
		if (!input.trim()) return;
		const msg: Message = {
			id: Date.now(),
			author: "You",
			avatar: "https://api.dicebear.com/7.x/personas/svg?seed=You",
			text: input,
			timestamp: "now",
			replies: [],
			reactions: 0,
		};
		setMessages(prev => [msg, ...prev]);
		setInput("");
		if (inputRef.current) inputRef.current.value = "";
		// TODO: Save to Neon, publish to Ably
	};

	// Send reply
	const handleReply = (parent: Message, e: React.FormEvent) => {
		e.preventDefault();
		if (!replyInput.trim()) return;
		const reply: Message = {
			id: Date.now(),
			author: "You",
			avatar: "https://api.dicebear.com/7.x/personas/svg?seed=You",
			text: replyInput,
			timestamp: "now",
			parentId: parent.id,
			reactions: 0,
		};
		setMessages(prevMsgs =>
			prevMsgs.map(m =>
				m.id === parent.id
					? { ...m, replies: [...(m.replies || []), reply] }
					: m
			)
		);
		setReplyInput("");
		setReplyingTo(null);
		// TODO: Save to Neon, publish to Ably
	};

	// React to message
	const handleReact = (id: number, isReply = false, parentId?: number) => {
		setMessages(prevMsgs =>
			prevMsgs.map(m => {
				if (!isReply && m.id === id) {
					return { ...m, reactions: (m.reactions || 0) + 1 };
				}
				if (isReply && m.id === parentId) {
					return {
						...m,
						replies: (m.replies || []).map(r =>
							r.id === id ? { ...r, reactions: (r.reactions || 0) + 1 } : r
						),
					};
				}
				return m;
			})
		);
		// TODO: Save reaction to Neon, publish to Ably
	};

	// Hologram card styles
	const holoCard = {
		background: "rgba(30, 34, 54, 0.65)",
		borderRadius: 18,
		boxShadow: "0 4px 32px #00f2ff44, 0 1.5px 8px #0006",
		border: "1.5px solid rgba(0,242,255,0.18)",
		backdropFilter: "blur(12px)",
		padding: 22,
		marginBottom: 24,
		position: "relative",
		transition: "box-shadow .2s",
	} as React.CSSProperties;

	const holoAvatar = {
		width: 48,
		height: 48,
		borderRadius: "50%",
		boxShadow: "0 0 16px #00f2ff99",
		border: "2.5px solid #fff2",
		background: "#181a20",
		objectFit: "cover",
		marginRight: 18,
	} as React.CSSProperties;

	const holoReply = {
		...holoCard,
		marginLeft: 48,
		marginTop: 10,
		boxShadow: "0 2px 16px #00f2ff22",
		border: "1px solid #00f2ff55",
		padding: 16,
	} as React.CSSProperties;

	return (
		<main style={{ minHeight: "100vh", background: "radial-gradient(ellipse at top, #0ff1, #181a20 80%)", color: "#f7fafc", fontFamily: "Inter, sans-serif", display: "flex", flexDirection: "column", alignItems: "center" }}>
			<header style={{ width: "100%", padding: "2rem 0 1.2rem 0", textAlign: "center", borderBottom: "1.5px solid #00f2ff33", marginBottom: 0 }}>
				<h1 style={{ fontSize: "2.7rem", fontWeight: 900, letterSpacing: ".09em", color: "#00f2ff", margin: 0, textShadow: "0 0 18px #00f2ff88" }}>Sanctuary HoloChat</h1>
				<div style={{ fontSize: 19, color: "#f7fafc", opacity: 0.8, fontWeight: 500, letterSpacing: ".04em", textShadow: "0 0 8px #00f2ff22" }}>A next-gen, thread-like hologram chat experience</div>
			</header>
			<section style={{ width: "100%", maxWidth: 600, flex: 1, padding: "2.2rem 0 7rem 0", display: "flex", flexDirection: "column" }}>
				{messages.map(msg => (
					<div key={msg.id} style={holoCard}>
						<div style={{ display: "flex", alignItems: "center" }}>
							<img src={msg.avatar} alt={msg.author} style={holoAvatar} />
							<div>
								<div style={{ fontWeight: 700, fontSize: 18, color: "#00f2ff", textShadow: "0 0 8px #00f2ff44" }}>{msg.author}</div>
								<div style={{ fontSize: 13, color: "#aaa" }}>{msg.timestamp}</div>
							</div>
						</div>
						<div style={{ fontSize: 18, color: "#f7fafc", margin: "16px 0 10px 0", textShadow: "0 0 8px #00f2ff22" }}>{msg.text}</div>
						<div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 6 }}>
							<span
								style={{ fontSize: 16, color: "#00f2ffbb", cursor: "pointer", textShadow: "0 0 8px #00f2ff44", transition: 'transform .18s', display: 'inline-flex', alignItems: 'center' }}
								onClick={() => handleReact(msg.id)}
								aria-label="React to message"
							>
								<span style={{ marginRight: 6, fontWeight: 700 }}>💠</span>
								<span style={{ fontSize: 15, color: '#00f2ff', fontWeight: 700 }}>{msg.reactions}</span>
							</span>
							<span style={{ fontSize: 16, color: "#7fd1b9", cursor: "pointer" }} onClick={() => setReplyingTo(msg.id)}>↩️ Reply</span>
						</div>
						{replyingTo === msg.id && (
							<form onSubmit={e => handleReply(msg, e)} style={{ marginTop: 10, marginBottom: 10, display: 'flex', gap: 8, background: 'rgba(0,242,255,0.08)', borderRadius: 12, padding: 10, boxShadow: '0 0 8px #00f2ff22' }}>
								<input
									type="text"
									value={replyInput}
									onChange={e => setReplyInput(e.target.value)}
									placeholder="Type your hologram reply..."
									style={{ flex: 1, padding: '0.7rem 1.1rem', borderRadius: 8, border: '1px solid #00f2ff55', background: '#181a20', color: '#f7fafc', fontSize: 16, boxShadow: '0 0 8px #00f2ff22' }}
									autoFocus
								/>
								<button type="submit" style={{ background: '#00f2ff', color: '#23242b', fontWeight: 700, fontSize: 16, border: 'none', borderRadius: 8, padding: '0.7rem 1.2rem', cursor: 'pointer', boxShadow: '0 0 8px #00f2ff44' }}>Send</button>
								<button type="button" onClick={() => { setReplyingTo(null); setReplyInput(""); }} style={{ background: 'transparent', color: '#00f2ff', border: '1.5px solid #00f2ff', borderRadius: 8, padding: '0.7rem 1.2rem', fontSize: 16, cursor: 'pointer' }}>Cancel</button>
							</form>
						)}
						{/* Replies */}
						{msg.replies && msg.replies.length > 0 && (
							<div style={{ marginLeft: 0, marginTop: 10 }}>
								{msg.replies.map(reply => (
									<div key={reply.id} style={holoReply}>
										<div style={{ display: "flex", alignItems: "center" }}>
											<img src={reply.avatar} alt={reply.author} style={{ ...holoAvatar, width: 36, height: 36, marginRight: 12 }} />
											<div>
												<div style={{ fontWeight: 600, fontSize: 16, color: "#00f2ff", textShadow: "0 0 8px #00f2ff44" }}>{reply.author}</div>
												<div style={{ fontSize: 12, color: "#aaa" }}>{reply.timestamp}</div>
											</div>
										</div>
										<div style={{ fontSize: 16, color: "#f7fafc", margin: "10px 0 6px 0", textShadow: "0 0 8px #00f2ff22" }}>{reply.text}</div>
										<div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 4 }}>
											<span
												style={{ fontSize: 15, color: "#00f2ffbb", cursor: "pointer", textShadow: "0 0 8px #00f2ff44", transition: 'transform .18s', display: 'inline-flex', alignItems: 'center' }}
												onClick={() => handleReact(reply.id, true, msg.id)}
												aria-label="React to reply"
											>
												<span style={{ marginRight: 5, fontWeight: 700 }}>💠</span>
												<span style={{ fontSize: 14, color: '#00f2ff', fontWeight: 700 }}>{reply.reactions}</span>
											</span>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				))}
			</section>
			<form
				style={{ position: "fixed", bottom: 0, left: 0, width: "100%", background: "rgba(0,242,255,0.12)", borderTop: "1.5px solid #00f2ff33", padding: "1.2rem 0.7rem", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 10, boxShadow: "0 0 24px #00f2ff22" }}
				onSubmit={handleSend}
			>
				<input
					type="text"
					value={input}
					onChange={e => setInput(e.target.value)}
					placeholder="Type a hologram message..."
					style={{ width: "100%", maxWidth: 380, padding: "1rem 1.3rem", borderRadius: 14, border: "none", fontSize: 18, background: "#181a20", color: "#f7fafc", marginRight: 10, outline: "none", boxShadow: "0 0 12px #00f2ff22" }}
					ref={inputRef}
				/>
				<button type="submit" style={{ background: "#00f2ff", color: "#23242b", fontWeight: 700, fontSize: 18, border: "none", borderRadius: 12, padding: "1rem 1.3rem", cursor: "pointer", boxShadow: "0 0 12px #00f2ff44", transition: "background .18s" }}>
					Send
				</button>
			</form>
		</main>
	);
}


