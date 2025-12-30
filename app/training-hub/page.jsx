"use client";
import React from "react";

const TRAINING_PROGRAMS = [
	{
		name: "MIT xPro AI & Machine Learning Certificate",
		url: "https://xpro.mit.edu/courses/course-v1:xPRO+AI001+2021_T1/home",
		type: "College Certificate",
		description: "Professional certificate in AI and machine learning from MIT.",
	},
	{
		name: "Stanford Online AI Graduate Certificate",
		url: "https://online.stanford.edu/programs/artificial-intelligence-graduate-certificate",
		type: "College Certificate",
		description: "Graduate-level AI certificate from Stanford University.",
	},
	{
		name: "Georgia Tech Online Master of Science in Analytics",
		url: "https://omsanalytics.gatech.edu/",
		type: "College Degree",
		description: "Affordable online master's degree in analytics from Georgia Tech.",
	},
	{
		name: "Amazon AWS Academy",
		url: "https://aws.amazon.com/training/awsacademy/",
		type: "Company Partnership",
		description: "Cloud and AI training through college partnerships with Amazon AWS.",
	},
	{
		name: "Google Career Certificates (Coursera)",
		url: "https://grow.google/certificates/",
		type: "Company Partnership",
		description: "Google partners with colleges to offer career certificates in IT, data analytics, and more.",
	},
	{
		name: "Coursera AI & Data Science",
		url: "https://www.coursera.org/browse/data-science",
		type: "Online Course",
		description: "Comprehensive AI and data science tracks from top universities.",
	},
	{
		name: "Udemy Machine Learning",
		url: "https://www.udemy.com/courses/search/?q=machine+learning",
		type: "Online Course",
		description: "Affordable, self-paced machine learning and AI courses.",
	},
	{
		name: "edX Robotics & Automation",
		url: "https://www.edx.org/learn/robotics",
		type: "Online Course",
		description: "Robotics and automation programs from global universities.",
	},
	{
		name: "LinkedIn Learning Digital Skills",
		url: "https://www.linkedin.com/learning/",
		type: "Online Course",
		description: "Digital skills, AI, and business courses for career growth.",
	},
	{
		name: "Google Career Certificates",
		url: "https://grow.google/certificates/",
		type: "Certification",
		description: "Industry-recognized certificates in IT, data analytics, and more.",
	},
	{
		name: "Community College Tech Programs",
		url: "https://www.aacc.nche.edu/",
		type: "Local Program",
		description: "Affordable, hands-on training in technology and robotics.",
	},
	{
		name: "Workforce Retraining (USA)",
		url: "https://www.careeronestop.org/",
		type: "Government Program",
		description: "Government-supported retraining and job placement resources.",
	},
];

const SKILL_TRACKS = [
	{
		track: "AI & Machine Learning",
		courses: [
			"Coursera AI & Data Science",
			"Udemy Machine Learning",
			"Google Career Certificates",
		],
	},
	{
		track: "Data Science & Analytics",
		courses: [
			"Coursera AI & Data Science",
			"LinkedIn Learning Digital Skills",
			"Google Career Certificates",
		],
	},
	{
		track: "Robotics & Automation",
		courses: ["edX Robotics & Automation", "Community College Tech Programs"],
	},
	{
		track: "Digital Marketing & Content",
		courses: ["LinkedIn Learning Digital Skills", "Udemy Machine Learning"],
	},
	{
		track: "Customer Service & Support",
		courses: ["LinkedIn Learning Digital Skills", "Workforce Retraining (USA)"],
	},
];

export default function Page() {
	return (
		<main
			style={{
				minHeight: "100vh",
				background:
					"linear-gradient(135deg, #6a1b9a 0%, #ffd700 100%)",
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
					color: "#ffd700",
					margin: "32px 0 16px 0",
					textShadow: "0 2px 16px #6a1b9a",
				}}
			>
				Training Hub: Upskill for the AI Future
			</h1>
			<section
				style={{
					maxWidth: 900,
					background: "rgba(255,255,255,0.07)",
					borderRadius: 16,
					padding: 24,
					boxShadow: "0 2px 16px #6a1b9a22",
					marginBottom: 32,
				}}
			>
				<p
					style={{
						color: "#fff8dc",
						fontSize: "1.08rem",
						marginBottom: 18,
					}}
				>
					<strong>Where can people train?</strong> Explore top online courses,
					local programs, and government retraining resources. Whether you want
					to learn AI, robotics, data science, or digital skills, there are
					options for every background and budget.
				</p>
				<ul
					style={{
						color: "#fff8dc",
						fontSize: "1rem",
						marginBottom: 18,
					}}
				>
					{TRAINING_PROGRAMS.map((program) => (
						<li key={program.name} style={{ marginBottom: 8 }}>
							<a
								href={program.url}
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: "#ffd700",
									fontWeight: 700,
								}}
							>
								{program.name}
							</a>{" "}
							<span
								style={{
									color:
										program.type === "College Certificate" ||
										program.type === "College Degree"
											? "#fbc02d"
											: program.type === "Company Partnership"
											? "#d32f2f"
											: "#fff8dc",
								}}
							>
								({program.type})
							</span>{" "}
							- {program.description}
						</li>
					))}
				</ul>
				<div
					style={{
						margin: "32px 0 0 0",
						padding: "18px",
						background: "rgba(255,255,255,0.10)",
						borderRadius: 12,
						boxShadow: "0 2px 8px #6a1b9a22",
					}}
				>
					<h2
						style={{
							color: "#ffd700",
							fontSize: "1.15rem",
							marginBottom: 8,
						}}
					>
						Easy Certificates for AI Jobs
					</h2>
					<ul
						style={{
							color: "#fff8dc",
							fontSize: "1rem",
						}}
					>
						<li>
							<a
								href="https://www.coursera.org/professional-certificates/ibm-data-science"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: "#ffd700",
									fontWeight: 700,
								}}
							>
								IBM Data Science Professional Certificate
							</a>{" "}
							(Coursera) – No degree required, beginner friendly.
						</li>
						<li>
							<a
								href="https://www.coursera.org/professional-certificates/google-data-analytics"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: "#ffd700",
									fontWeight: 700,
								}}
							>
								Google Data Analytics Professional Certificate
							</a>{" "}
							(Coursera) – Entry-level, flexible schedule.
						</li>
						<li>
							<a
								href="https://www.udemy.com/course/machinelearning/"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: "#ffd700",
									fontWeight: 700,
								}}
							>
								Machine Learning A-Z™: Hands-On Python & R In Data Science
							</a>{" "}
							(Udemy) – No prerequisites, practical projects.
						</li>
						<li>
							<a
								href="https://www.edx.org/professional-certificate/harvardx-data-science"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: "#ffd700",
									fontWeight: 700,
								}}
							>
								HarvardX Data Science Professional Certificate
							</a>{" "}
							(edX) – Beginner friendly, self-paced.
						</li>
						<li>
							<a
								href="https://grow.google/certificates/"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: "#ffd700",
									fontWeight: 700,
								}}
							>
								Google Career Certificates
							</a>{" "}
							– IT Support, Data Analytics, Project Management, and more.
						</li>
					</ul>
				</div>
				<p
					style={{
						color: "#ffd700",
						fontSize: "1.05rem",
						marginBottom: 8,
					}}
				>
					<strong>How do people train?</strong>
				</p>
				<ul
					style={{
						color: "#fff8dc",
						fontSize: "1rem",
					}}
				>
					<li>Online, self-paced courses for flexibility</li>
					<li>In-person classes at community colleges and training centers</li>
					<li>Government-supported retraining and job placement programs</li>
					<li>Industry certifications for specialized skills</li>
					<li>Project-based learning and internships</li>
				</ul>
			</section>
			<section
				style={{
					maxWidth: 900,
					background: "rgba(255,255,255,0.07)",
					borderRadius: 16,
					padding: 24,
					boxShadow: "0 2px 16px #6a1b9a22",
					marginBottom: 32,
				}}
			>
				<h2
					style={{
						color: "#ffd700",
						fontSize: "1.2rem",
						marginBottom: 8,
					}}
				>
					Skill Tracks
				</h2>
				<ul
					style={{
						color: "#fff8dc",
						fontSize: "1rem",
					}}
				>
					{SKILL_TRACKS.map((track) => (
						<li key={track.track} style={{ marginBottom: 8 }}>
							<strong style={{ color: "#ffd700" }}>{track.track}:</strong>{" "}
							{track.courses.join(", ")}
						</li>
					))}
				</ul>
			</section>
			<section
				style={{
					maxWidth: 900,
					background: "rgba(255,255,255,0.10)",
					borderRadius: 12,
					padding: 18,
					boxShadow: "0 2px 8px #6a1b9a22",
					marginBottom: 24,
				}}
			>
				<h2
					style={{
						color: "#ffd700",
						fontSize: "1.2rem",
						marginBottom: 8,
					}}
				>
					Will there be a nearly even trade of normal jobs out and AI jobs in?
				</h2>
				<p
					style={{
						color: "#fff8dc",
						fontSize: "1rem",
					}}
				>
					While many traditional jobs are being automated, new AI-driven roles are
					emerging. Experts predict that, with effective retraining and upskilling,
					a large portion of displaced workers can transition into new jobs created
					by AI and technology. However, the trade is not always perfectly
					even—some roles require new skills, and some regions or industries may
					face more disruption than others. The key is proactive training and
					support to help as many people as possible move into future-ready
					careers.
				</p>
				<ul
					style={{
						color: "#fff8dc",
						fontSize: "1rem",
					}}
				>
					<li>
						Governments and employers are investing in retraining programs to
						support transitions.
					</li>
					<li>
						AI jobs often pay more and require higher technical skills, but
						entry-level roles and support positions are also growing.
					</li>
					<li>
						Continuous learning and adaptability are essential for long-term
						career success.
					</li>
				</ul>
			</section>
			<section
				style={{
					maxWidth: 900,
					background: "rgba(255,255,255,0.10)",
					borderRadius: 12,
					padding: 18,
					boxShadow: "0 2px 8px #6a1b9a22",
					marginBottom: 24,
				}}
			>
				<h2
					style={{
						color: "#ffd700",
						fontSize: "1.2rem",
						marginBottom: 8,
					}}
				>
					Guidance & Support
				</h2>
				<ul
					style={{
						color: "#fff8dc",
						fontSize: "1rem",
					}}
				>
					<li>Take a skill assessment to find your best training track</li>
					<li>Connect with career counselors and mentors</li>
					<li>Read success stories for inspiration</li>
					<li>Stay updated on new training programs and job trends</li>
				</ul>
			</section>
		</main>
	);
}
