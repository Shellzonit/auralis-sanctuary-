
import Link from "next/link";

export default function HomePage() {
	return (
		<main className="min-h-screen flex bg-[#F7F5F2] text-[#222]">
			{/* Sidebar Navigation */}
			<aside className="w-64 min-h-screen flex flex-col items-start py-16 px-8 bg-white shadow-lg">
				<nav className="flex flex-col gap-8 w-full">
					<Link href="/" className="text-2xl font-bold text-[#4B2E83] hover:text-[#C2A86C] transition-colors">Home</Link>
					<Link href="/states" className="text-2xl font-bold text-[#4B2E83] hover:text-[#C2A86C] transition-colors">States</Link>
					<Link href="/jobs-at-risk" className="text-2xl font-bold text-[#4B2E83] hover:text-[#C2A86C] transition-colors">Jobs at Risk</Link>
					<Link href="/transitional-paths" className="text-2xl font-bold text-[#4B2E83] hover:text-[#C2A86C] transition-colors">Transitional Paths</Link>
					<Link href="/new-ai-jobs" className="text-2xl font-bold text-[#4B2E83] hover:text-[#C2A86C] transition-colors">New AI Jobs</Link>
				</nav>
			</aside>
			{/* Main Content with AI Image */}
			<section className="flex-1 flex flex-col justify-center items-center">
				<img
					src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
					alt="AI"
					className="rounded-2xl shadow-xl object-cover w-[500px] h-[340px] mb-8"
				/>
				<h1 className="text-5xl font-extrabold text-[#4B2E83] mb-4 text-center">Welcome to AI Wilding</h1>
				<p className="text-xl text-[#444] text-center max-w-xl">
					Navigating the future of work and AI—resources, insights, and support for everyone.
				</p>
			</section>
		</main>
	);
}
import Link from "next/link";

export default function HomePage() {
	return (
		<main className="min-h-screen flex bg-[#F7F5F2] text-[#222]">
			{/* Sidebar Navigation */}
			<aside className="w-64 min-h-screen flex flex-col items-start py-16 px-8 bg-white shadow-lg">
				<nav className="flex flex-col gap-8 w-full">
					<Link href="/" className="text-2xl font-bold text-[#4B2E83] hover:text-[#C2A86C] transition-colors">Home</Link>
					<Link href="/states" className="text-2xl font-bold text-[#4B2E83] hover:text-[#C2A86C] transition-colors">States</Link>
					<Link href="/jobs-at-risk" className="text-2xl font-bold text-[#4B2E83] hover:text-[#C2A86C] transition-colors">Jobs at Risk</Link>
					<Link href="/transitional-paths" className="text-2xl font-bold text-[#4B2E83] hover:text-[#C2A86C] transition-colors">Transitional Paths</Link>
					<Link href="/new-ai-jobs" className="text-2xl font-bold text-[#4B2E83] hover:text-[#C2A86C] transition-colors">New AI Jobs</Link>
				</nav>
			</aside>
			{/* Main Content with AI Image */}
			<section className="flex-1 flex flex-col justify-center items-center">
				<img
					src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
					alt="AI"
					className="rounded-2xl shadow-xl object-cover w-[500px] h-[340px] mb-8"
				/>
				<h1 className="text-5xl font-extrabold text-[#4B2E83] mb-4 text-center">Welcome to AI Wilding</h1>
				<p className="text-xl text-[#444] text-center max-w-xl">
					Navigating the future of work and AI—resources, insights, and support for everyone.
				</p>
			</section>
		</main>
	);
}


