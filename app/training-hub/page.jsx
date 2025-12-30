"use client";
import React from "react";

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
					Welcome to the Training Hub! Here you’ll find the best resources to
					help you transition into AI and tech-driven careers, whether you’re
					just starting out or looking to upskill.
				</p>
				<h2
					style={{
						color: "#ffd700",
						fontSize: "1.15rem",
						marginBottom: 8,
					}}
				>
					Where to Train
				</h2>
				<ul
					style={{
						color: "#fff8dc",
						fontSize: "1rem",
						marginBottom: 18,
					}}
				>
					<li>Top online courses: Coursera, Udemy, edX, LinkedIn Learning</li>
					<li>
						College certificate programs: MIT xPro, Stanford Online, Georgia Tech
						Analytics
					</li>
					<li>
						Company partnerships: Google Career Certificates, Amazon AWS Academy
					</li>
					<li>Local programs: Community colleges, government retraining</li>
				</ul>
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
						IBM Data Science Professional Certificate (Coursera) – Beginner
						friendly
					</li>
					<li>
						Google Data Analytics Professional Certificate (Coursera) –
						Entry-level
					</li>
					<li>Machine Learning A-Z™ (Udemy) – No prerequisites</li>
					<li>HarvardX Data Science Certificate (edX) – Self-paced</li>
					<li>
						Google Career Certificates – IT, Data Analytics, Project Management
					</li>
				</ul>
				<h2
					style={{
						color: "#ffd700",
						fontSize: "1.15rem",
						marginBottom: 8,
					}}
				>
					How to Train
				</h2>
				<ul
					style={{
						color: "#fff8dc",
						fontSize: "1rem",
					}}
				>
					<li>Online, self-paced courses for flexibility</li>
					<li>In-person classes at local colleges and training centers</li>
					<li>Government-supported retraining and job placement</li>
					<li>Industry certifications for specialized skills</li>
					<li>Project-based learning and internships</li>
				</ul>
				<h2
					style={{
						color: "#ffd700",
						fontSize: "1.15rem",
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
					<li>AI & Machine Learning</li>
					<li>Data Science & Analytics</li>
					<li>Robotics & Automation</li>
					<li>Digital Marketing & Content</li>
					<li>Customer Service & Support</li>
				</ul>
				<h2
					style={{
						color: "#ffd700",
						fontSize: "1.15rem",
						marginBottom: 8,
					}}
				>
					Will There Be a Nearly Even Trade of Jobs?
				</h2>
				<p
					style={{
						color: "#fff8dc",
						fontSize: "1rem",
					}}
				>
					Many traditional jobs are being automated, but new AI roles are
					emerging. With effective retraining, most displaced workers can
					transition to future-ready careers. The trade isn’t always perfectly
					even, but proactive training and support make a big difference.
				</p>
				<h2
					style={{
						color: "#ffd700",
						fontSize: "1.15rem",
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
					<li>Take a skill assessment to find your best track</li>
					<li>Connect with career counselors and mentors</li>
					<li>Read success stories for inspiration</li>
					<li>Stay updated on new training programs and job trends</li>
				</ul>
			</section>
		</main>
	);
}
