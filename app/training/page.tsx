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
		url: "https://learn.microsoft.com/en-us/certifications/azure-ai-engineer/",
	},
];

export default function TrainingHubPage() {


	return (
		<main style={{ minHeight: '100vh', background: '#fff', fontFamily: 'Inter, Arial, sans-serif', padding: '2rem', color: '#18191a' }}>
			<h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#18191a', marginBottom: '2rem' }}>
				<span style={{ color: '#ffd700' }}>New Paths to Employment</span> – Week of Jan 4, 2026
			</h1>
			<section style={{ background: '#fffbe7', borderRadius: 16, boxShadow: '0 2px 12px #ffd70022', padding: 32, maxWidth: 700, margin: '0 auto', color: '#18191a' }}>
				<h2 style={{ color: '#ffd700', fontSize: '1.3rem', marginBottom: 18 }}>Programs & Opportunities Added This Week</h2>
				<ul style={{ color: '#18191a', fontSize: '1.08rem', lineHeight: 1.7 }}>
					<li><strong>AI Customer Support Bootcamp</strong> – 4-week online program for transitioning into AI-powered support roles. <a href="https://aijobsbootcamp.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700', fontWeight: 600 }}>Learn more</a></li>
					<li><strong>Remote Data Annotation Training</strong> – New cohort starting Jan 8, 2026. Entry-level, remote, with job placement support. <a href="https://dataannotators.org" target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700', fontWeight: 600 }}>Apply here</a></li>
					<li><strong>AI-Driven Marketing Apprenticeship</strong> – Hands-on, paid apprenticeship for digital marketing with AI tools. <a href="https://aimarketingapprentice.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700', fontWeight: 600 }}>Details</a></li>
					<li><strong>Healthcare AI Scribe Training</strong> – Fast-track program for medical scribe roles using AI transcription. <a href="https://aiscribehealth.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700', fontWeight: 600 }}>Sign up</a></li>
					<li><strong>AI Project Management Micro-Credential</strong> – 2-week course for project managers to upskill in AI project delivery. <a href="https://aipmcert.org" target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700', fontWeight: 600 }}>Enroll</a></li>
				</ul>
				<p style={{ color: '#18191a', marginTop: 24, fontSize: '1.05rem' }}>
					Check back weekly for new programs, bootcamps, and job-focused training opportunities!
				</p>
				<div style={{ background: '#fff', borderRadius: 16, padding: 28, boxShadow: '0 2px 12px #ffd70022', marginTop: 32, color: '#18191a' }}>
					  <h2 style={{ color: '#ffd700', fontSize: '1.22rem', marginBottom: 12 }}>Recommended AI Courses</h2>
					  <ul style={{ color: '#18191a', fontSize: '1.05rem', lineHeight: 1.7 }}>
						{COURSES.map((c) => (
							<li key={c.name}>
								<a href={c.url} target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700', fontWeight: 600 }}>{c.name}</a>: {c.desc}
							</li>
						))}
					</ul>
				</div>
				<div style={{ background: '#fff', borderRadius: 16, padding: 28, boxShadow: '0 2px 12px #ffd70022', marginTop: 32, color: '#18191a' }}>
					  <h2 style={{ color: '#ffd700', fontSize: '1.22rem', marginBottom: 12 }}>Certification Programs</h2>
					  <ul style={{ color: '#18191a', fontSize: '1.05rem', lineHeight: 1.7 }}>
						{CERTS.map((c) => (
							<li key={c.name}>
								<a href={c.url} target="_blank" rel="noopener noreferrer" style={{ color: '#ffd700', fontWeight: 600 }}>{c.name}</a>
							</li>
						))}
					</ul>
				</div>
				<div style={{ background: '#fff', borderRadius: 16, padding: 28, boxShadow: '0 2px 12px #ffd70022', marginTop: 32, color: '#18191a' }}>
					  <h2 style={{ color: '#ffd700', fontSize: '1.22rem', marginBottom: 12 }}>Career Prep</h2>
					  <ul style={{ color: '#18191a', fontSize: '1.05rem', lineHeight: 1.7 }}>
						<li>Resume writing tips and templates (see Mr. Job Nanny in the chatbot demo!)</li>
						<li>Interview prep resources for AI/data roles</li>
						<li>How to build a portfolio of AI projects</li>
					</ul>
				</div>
			</section>
		</main>
	);
}

