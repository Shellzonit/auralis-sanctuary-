"use client";

import React from "react";

const COURSES = [
	{
		name: "AI For Everyone (Coursera)",
		url: "https://www.coursera.org/learn/ai-for-everyone",
		desc: "Beginner-friendly introduction to AI concepts and real-world impact.",
	},
	{
		name: "Deep Learning Specialization (Coursera)",
		url: "https://www.coursera.org/specializations/deep-learning",
		desc: "Comprehensive deep learning path by Andrew Ng.",
	},
	{
		name: "Machine Learning Crash Course (Google)",
		url: "https://developers.google.com/machine-learning/crash-course",
		desc: "Free, hands-on ML basics with TensorFlow.",
	},
	{
		name: "Intro to Machine Learning (Udacity)",
		url: "https://www.udacity.com/course/intro-to-machine-learning--ud120",
		desc: "Project-based ML course for beginners.",
	},
	{
		name: "Fast.ai Practical Deep Learning",
		url: "https://course.fast.ai/",
		desc: "Hands-on deep learning for coders, free and open.",
	},
];

const CERTS = [
	{
		name: "Google Professional Machine Learning Engineer",
		url: "https://cloud.google.com/certification/machine-learning-engineer",
	},
	{
		name: "Microsoft Certified: Azure AI Engineer Associate",
		url: "https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/",
	},
	{
		name: "IBM AI Engineering Professional Certificate",
		url: "https://www.coursera.org/professional-certificates/ai-engineer",
	},
	{
		name: "DeepLearning.AI TensorFlow Developer",
		url: "https://www.coursera.org/professional-certificates/tensorflow-in-practice",
	},
];

const PATHS = [
	{
		name: "AI Engineer",
		steps: [
			"Learn Python basics",
			"Study ML algorithms",
			"Build projects with scikit-learn, TensorFlow, or PyTorch",
			"Contribute to open source",
			"Earn a certification",
		],
	},
	{
		name: "AI for Creatives",
		steps: [
			"Explore generative art tools",
			"Learn prompt engineering",
			"Experiment with AI music and writing",
			"Build a creative AI portfolio",
		],
	},
	{
		name: "AI for Business",
		steps: [
			"Understand AI use cases",
			"Take business-focused AI courses",
			"Learn data analysis",
			"Apply AI to real business problems",
		],
	},
];

const PROJECTS = [
	"Build a chatbot for your website",
	"Create an image classifier",
	"Analyze a public dataset (Kaggle, UCI, etc.)",
	"Experiment with generative AI art or music",
	"Contribute to an open source AI project",
];

const TOOLS = [
	"TensorFlow",
	"PyTorch",
	"scikit-learn",
	"Hugging Face Transformers",
	"OpenCV",
	"Keras",
];

const COMMUNITIES = [
	{ name: "Kaggle", url: "https://www.kaggle.com/" },
	{ name: "AI Stack Exchange", url: "https://ai.stackexchange.com/" },
	{ name: "r/MachineLearning", url: "https://www.reddit.com/r/MachineLearning/" },
	{ name: "DataTau", url: "https://www.datatau.com/" },
];

const EVENTS = [
	{ name: "AI Hackathons (Devpost)", url: "https://devpost.com/hackathons?challenge_type=AI" },
	{ name: "AI Webinars (Eventbrite)", url: "https://www.eventbrite.com/d/online/ai-webinar/" },
];

const aiProgramsData = [
	{ year: "2021", count: 12 },
	{ year: "2022", count: 19 },
	{ year: "2023", count: 27 },
];

export default function TrainingHubPage() {
	return (
		<main
			style={{
				minHeight: "100vh",
				background: "#fff",
				fontFamily: "Inter, Arial, sans-serif",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "0 1rem",
			}}
		>
			<h1
				style={{
					fontSize: "2.2rem",
					fontWeight: 800,
					color: "#18191a",
					margin: "32px 0 16px 0",
					textShadow: "0 2px 16px #ffd70044",
				}}
			>
				<span style={{ color: "#ffd700" }}>AI</span> Training Hub
			</h1>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					maxWidth: 1200,
					justifyContent: "center",
					alignItems: "flex-start",
					gap: 32,
				}}
			>
				<div style={{ flex: 2 }}>
					{/* AI Wilding Training Image */}
					<div style={{ marginBottom: 32 }}>
						<img
							src="/Ai wilding (2).png"
							alt="AI Wilding Training"
							width={420}
							height={280}
							style={{
								borderRadius: 16,
								boxShadow: "0 2px 16px #18191a22",
								background: "#fff",
								border: "2px solid #ffd700",
							}}
						/>
					</div>
					<p
						style={{
							color: "#18191a",
							fontSize: "1.15rem",
							maxWidth: 700,
							textAlign: "center",
							marginBottom: 32,
						}}
					>
						Start or advance your AI journey! Explore curated courses,
						certifications, learning paths, project ideas, and community resources
						for every skill level.
					</p>
				</div>
				{/* Bar Chart for AI Programs Growth */}
				<div
					style={{
						flex: 1,
						background: "#fffbe7",
						borderRadius: 16,
						boxShadow: "0 2px 12px #ffd70022",
						padding: 24,
						minWidth: 260,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<h2
						style={{
							color: "#ffd700",
							fontSize: "1.12rem",
							marginBottom: 18,
							fontWeight: 700,
							textAlign: "center",
						}}
					>
						Programs Supporting AI Learning (Last 3 Years)
					</h2>
					<div
						style={{
							display: "flex",
							alignItems: "flex-end",
							gap: 18,
							height: 120,
							width: "100%",
							justifyContent: "center",
							paddingBottom: 12,
						}}
					>
						{aiProgramsData.map((item) => (
							<div
								key={item.year}
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									width: 60,
								}}
							>
								<div
									style={{
										height: `${item.count * 3}px`,
										width: 32,
										background: "#ffd700",
										borderRadius: 8,
										boxShadow: "0 2px 8px #ffd70055",
										marginBottom: 6,
										transition: "height 0.2s",
									}}
								></div>
								<span
									style={{
										fontSize: "0.98rem",
										color: "#18191a",
										fontWeight: 700,
									}}
								>
									{item.year}
								</span>
								<span
									style={{
										fontSize: "0.92rem",
										color: "#6a1b9a",
										fontWeight: 500,
									}}
								>
									{item.count} programs
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
			<section
				style={{
					width: "100%",
					maxWidth: 900,
					display: "flex",
					flexDirection: "column",
					gap: 32,
					marginTop: 24,
				}}
			>
				<div
					style={{
						background: "#fff",
						borderRadius: 16,
						padding: 28,
						boxShadow: "0 2px 12px #ffd70022",
					}}
				>
					<h2
						style={{
							color: "#ffd700",
							fontSize: "1.22rem",
							marginBottom: 12,
						}}
					>
						Featured Online Courses
					</h2>
					<ul
						style={{
							color: "#18191a",
							fontSize: "1.05rem",
							lineHeight: 1.7,
						}}
					>
						{COURSES.map((c) => (
							<li key={c.name}>
								<a
									href={c.url}
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#ffd700",
										fontWeight: 600,
									}}
								>
									{c.name}
								</a>
								: {c.desc}
							</li>
						))}
					</ul>
				</div>
				<div
					style={{
						background: "#fff",
						borderRadius: 16,
						padding: 28,
						boxShadow: "0 2px 12px #ffd70022",
					}}
				>
					<h2
						style={{
							color: "#ffd700",
							fontSize: "1.22rem",
							marginBottom: 12,
						}}
					>
						Certification Programs
					</h2>
					<ul
						style={{
							color: "#18191a",
							fontSize: "1.05rem",
							lineHeight: 1.7,
						}}
					>
						{CERTS.map((c) => (
							<li key={c.name}>
								<a
									href={c.url}
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#ffd700",
										fontWeight: 600,
									}}
								>
									{c.name}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div
					style={{
						background: "#fff",
						borderRadius: 16,
						padding: 28,
						boxShadow: "0 2px 12px #ffd70022",
					}}
				>
					<h2
						style={{
							color: "#ffd700",
							fontSize: "1.22rem",
							marginBottom: 12,
						}}
					>
						Learning Paths
					</h2>
					{PATHS.map((p) => (
						<div key={p.name} style={{ marginBottom: 12 }}>
							<strong style={{ color: "#ffd700" }}>{p.name}:</strong>
							<ul
								style={{
									color: "#18191a",
									marginLeft: 18,
									fontSize: "1.05rem",
									lineHeight: 1.7,
								}}
							>
								{p.steps.map((s, i) => (
									<li key={i}>{s}</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div
					style={{
						background: "#fff",
						borderRadius: 16,
						padding: 28,
						boxShadow: "0 2px 12px #ffd70022",
					}}
				>
					<h2
						style={{
							color: "#ffd700",
							fontSize: "1.22rem",
							marginBottom: 12,
						}}
					>
						Project Ideas & Challenges
					</h2>
					<ul
						style={{
							color: "#18191a",
							fontSize: "1.05rem",
							lineHeight: 1.7,
						}}
					>
						{PROJECTS.map((p, i) => (
							<li key={i}>{p}</li>
						))}
					</ul>
				</div>
				<div
					style={{
						background: "#fff",
						borderRadius: 16,
						padding: 28,
						boxShadow: "0 2px 12px #ffd70022",
					}}
				>
					<h2
						style={{
							color: "#ffd700",
							fontSize: "1.22rem",
							marginBottom: 12,
						}}
					>
						Popular AI Tools & Libraries
					</h2>
					<ul
						style={{
							color: "#18191a",
							fontSize: "1.05rem",
							lineHeight: 1.7,
						}}
					>
						{TOOLS.map((t, i) => (
							<li key={i}>{t}</li>
						))}
					</ul>
				</div>
				<div
					style={{
						background: "#fff",
						borderRadius: 16,
						padding: 28,
						boxShadow: "0 2px 12px #ffd70022",
					}}
				>
					<h2
						style={{
							color: "#ffd700",
							fontSize: "1.22rem",
							marginBottom: 12,
						}}
					>
						Community & Mentorship
					</h2>
					<ul
						style={{
							color: "#18191a",
							fontSize: "1.05rem",
							lineHeight: 1.7,
						}}
					>
						{COMMUNITIES.map((c) => (
							<li key={c.name}>
								<a
									href={c.url}
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#ffd700",
										fontWeight: 600,
									}}
								>
									{c.name}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div
					style={{
						background: "#fff",
						borderRadius: 16,
						padding: 28,
						boxShadow: "0 2px 12px #ffd70022",
					}}
				>
					<h2
						style={{
							color: "#ffd700",
							fontSize: "1.22rem",
							marginBottom: 12,
						}}
					>
						Events & Workshops
					</h2>
					<ul
						style={{
							color: "#18191a",
							fontSize: "1.05rem",
							lineHeight: 1.7,
						}}
					>
						{EVENTS.map((e) => (
							<li key={e.name}>
								<a
									href={e.url}
									target="_blank"
									rel="noopener noreferrer"
									style={{
										color: "#ffd700",
										fontWeight: 600,
									}}
								>
									{e.name}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div
					style={{
						background: "#fff",
						borderRadius: 16,
						padding: 28,
						boxShadow: "0 2px 12px #ffd70022",
					}}
				>
					<h2
						style={{
							color: "#ffd700",
							fontSize: "1.22rem",
							marginBottom: 12,
						}}
					>
						Career Prep
					</h2>
					<ul
						style={{
							color: "#18191a",
							fontSize: "1.05rem",
							lineHeight: 1.7,
						}}
					>
						<li>
							Resume writing tips and templates (see Mr. Job Nanny in the chatbot
							demo!)
						</li>
						<li>Interview prep resources for AI/data roles</li>
						<li>How to build a portfolio of AI projects</li>
					</ul>
				</div>
			</section>
		</main>
	);

