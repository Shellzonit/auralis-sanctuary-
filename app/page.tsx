export default function HomePage() {
	return (
		<main className="min-h-screen flex flex-col items-center bg-[#F7F5F2] text-[#222] px-4">
			<div className="max-w-2xl w-full flex flex-col items-center text-center py-12">
				<h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight" style={{ color: '#4B2E83' }}>
					Welcome to AI Wilding
				</h1>
				<p className="text-xl md:text-2xl mb-8 font-medium" style={{ color: '#C2A86C' }}>
					Navigating the future of work and AI—resources, insights, and support for everyone.
				</p>
				<p className="text-lg md:text-xl text-[#444] whitespace-pre-line">
					Explore jobs at risk,
					{'\n'}new AI-created roles,
					{'\n'}and state-by-state transitions.
					{'\n'}
					Use the navigation above to get started.
				</p>
			</div>
			<div className="flex flex-row justify-center gap-16 mt-8">
				<div className="flex flex-col items-center">
					<img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="Jobs" className="rounded-xl object-cover mb-2 w-[340px] h-[220px]" />
					<span className="text-lg font-semibold mt-2" style={{ color: '#4B2E83' }}>Jobs</span>
				</div>
				<div className="flex flex-col items-center">
					<img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="AI" className="rounded-xl object-cover mb-2 w-[340px] h-[220px]" />
					<span className="text-lg font-semibold mt-2" style={{ color: '#4B2E83' }}>AI</span>
				</div>
			</div>
		</main>
	);
}

