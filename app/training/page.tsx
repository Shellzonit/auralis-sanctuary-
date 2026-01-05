"use client";
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
		export default function TrainingHubPage() {
			return (
				<main></main>
			);
		}
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

