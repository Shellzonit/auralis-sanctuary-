"use client";
import { useEffect, useState } from "react";
// Type for AI Career
type AICareer = {
	id: number;
	title: string;
	description: string;
	skills: string[];
	averageSalary: number;
};
// Fetch AI career details from API
function AICareersSection() {
	const [careers, setCareers] = useState<AICareer[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch("/api/ai-careers")
			.then((res) => res.json())
			.then((data) => setCareers(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<section style={{ background: '#fff', borderRadius: 16, padding: '32px 40px', maxWidth: 700, margin: '0 auto 48px auto', boxShadow: '0 2px 16px #18191a22', color: '#18191a', textAlign: 'center', fontSize: '1.12rem', lineHeight: 1.7, border: '1.5px solid #e0d6f7' }}>
			<strong style={{ color: '#7b2ff2', fontSize: '1.15rem' }}>AI Career Details</strong>
			{loading && <div>Loading careers...</div>}
			{error && <div style={{ color: 'red' }}>Error: {error}</div>}
			{!loading && !error && (
				<ul style={{ margin: '12px 0 0 24px', color: '#18191a', fontSize: '1.08rem', textAlign: 'left' }}>
					{careers.map((career) => (
						<li key={career.id} style={{ marginBottom: 18 }}>
							<div style={{ fontWeight: 700, color: '#7b2ff2', fontSize: '1.1rem' }}>{career.title}</div>
							<div style={{ color: '#444', marginBottom: 4 }}>{career.description}</div>
							<div><strong>Skills:</strong> {career.skills.join(", ")}</div>
							<div><strong>Avg. Salary:</strong> ${career.averageSalary.toLocaleString()}</div>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
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
];

export default function TrainingPage() {
	return (
		<main style={{ minHeight: '100vh', background: '#f5f3fd', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
			{/* Section 1: Title/Intro */}
			<section style={{ width: '100%', maxWidth: 700, margin: '3rem auto 2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)', borderRadius: 24, boxShadow: '0 4px 32px #18191a22', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
				<h1 style={{ color: 'rgba(255,255,255,0.97)', fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1.5px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.18, paddingBottom: '0.18em' }}>AI Training</h1>
				<div style={{ color: '#ece9fc', fontSize: '1.15rem', fontWeight: 500, marginTop: 10, textAlign: 'center', maxWidth: 500, textShadow: '0 1px 6px #18191a55' }}>
					Explore top online courses and certifications to advance your AI skills.
				</div>
			</section>
			{/* Section 2: Courses/Certifications */}
			<section style={{ background: '#fff', borderRadius: 16, padding: '32px 40px', maxWidth: 700, margin: '0 auto 48px auto', boxShadow: '0 2px 16px #18191a22', color: '#18191a', textAlign: 'center', fontSize: '1.12rem', lineHeight: 1.7, border: '1.5px solid #e0d6f7' }}>
				<strong style={{ color: '#7b2ff2', fontSize: '1.15rem' }}>Top Online AI Courses</strong>
				<ul style={{ margin: '12px 0 18px 24px', color: '#18191a', fontSize: '1.08rem', textAlign: 'left' }}>
					{COURSES.map(course => (
						<li key={course.name} style={{ marginBottom: 8 }}>
							<a href={course.url} target="_blank" rel="noopener noreferrer" style={{ color: '#7b2ff2', textDecoration: 'underline', fontWeight: 600 }}>{course.name}</a>
							<span style={{ color: '#444', fontWeight: 400 }}> — {course.desc}</span>
						</li>
					))}
				</ul>
				<strong style={{ color: '#7b2ff2', fontSize: '1.15rem' }}>AI Certifications</strong>
				<ul style={{ margin: '12px 0 0 24px', color: '#18191a', fontSize: '1.08rem', textAlign: 'left' }}>
					{CERTS.map(cert => (
						<li key={cert.name} style={{ marginBottom: 8 }}>
							<a href={cert.url} target="_blank" rel="noopener noreferrer" style={{ color: '#7b2ff2', textDecoration: 'underline', fontWeight: 600 }}>{cert.name}</a>
						</li>
					))}
				</ul>
			</section>
			{/* Section: AI Career Details (from API) */}
			<AICareersSection />
			{/* Section 3: Prompting Mini Class Link (now directly below section 2) */}
			<section style={{ width: '100%', maxWidth: 700, margin: '0 auto 0 auto', background: 'linear-gradient(90deg, #7b2ff2 0%, #f357a8 100%)', borderRadius: 16, boxShadow: '0 2px 12px #7b2ff244', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
				<a
					href="/training/prompting-class"
					style={{
						display: 'inline-block',
						marginTop: 0,
						marginBottom: 0,
						padding: '16px 32px',
						background: 'none',
						color: '#fff',
						fontWeight: 800,
						fontSize: '1.25rem',
						borderRadius: 12,
						textDecoration: 'none',
						letterSpacing: '0.04em',
						transition: 'background 0.2s',
						textAlign: 'center',
						border: '2px solid #fff',
						boxShadow: 'none',
					}}
				>
					🚀 Prompting Mini Class: Foundations & Certificate
				</a>
			</section>
		</main>
	);
}

