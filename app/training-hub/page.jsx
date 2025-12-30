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
				Transitional Phasing Hub
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
					Transitional phasing helps workers move from traditional jobs to new
					roles created by AI and automation. This hub provides guidance,
					resources, and real-world examples to support your career transition.
				</p>
				<h2
					style={{
						color: "#ffd700",
						fontSize: "1.15rem",
						marginBottom: 8,
					}}
				>
					What is Transitional Phasing?
				</h2>
				<ul
					style={{
						color: "#fff8dc",
						fontSize: "1rem",
						marginBottom: 18,
					}}
				>
					<li>Step-by-step career transition plans</li>
					<li>Upskilling and reskilling resources</li>
					<li>Industry-specific guidance</li>
					<li>Mentorship and peer support</li>
				</ul>
				<h2
					style={{
						color: "#ffd700",
						fontSize: "1.15rem",
						marginBottom: 8,
					}}
				>
					How Transitional Phasing Works
				</h2>
				<ul
					style={{
						color: "#fff8dc",
						fontSize: "1rem",
					}}
				>
					<li>Identify your current skills and interests</li>
					<li>Explore new roles and industries</li>
					<li>Take targeted training and certification programs</li>
					<li>Connect with mentors and support groups</li>
					<li>Apply for transitional jobs and internships</li>
				</ul>
				<h2
					style={{
						color: "#ffd700",
						fontSize: "1.15rem",
						marginBottom: 8,
					}}
				>
					Success Stories
				</h2>
				<ul
					style={{
						color: "#fff8dc",
						fontSize: "1rem",
					}}
				>
					<li>Retail worker to AI customer support specialist</li>
					<li>Truck driver to logistics coordinator</li>
					<li>Factory worker to robot technician</li>
					<li>Bank teller to digital banking advisor</li>
				</ul>
				<h2
					style={{
						color: "#ffd700",
						fontSize: "1.15rem",
						marginBottom: 8,
					}}
				>
					Get Started
				</h2>
				<ul
					style={{
						color: "#fff8dc",
						fontSize: "1rem",
					}}
				>
					<li>Take a skills assessment</li>
					<li>Find training programs and certifications</li>
					<li>Join a mentorship or peer support group</li>
					<li>Explore transitional job listings</li>
				</ul>
			</section>
		</main>
	);
}
