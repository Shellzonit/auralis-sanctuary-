      {/* How It Works Section */}
      <section className="w-full flex flex-col items-center mb-16">
        <h3 className="text-2xl font-bold text-[#4B2E83] mb-6 text-center">How It Works</h3>
        <div className="flex flex-col md:flex-row justify-center gap-8 w-full max-w-4xl">
          <div className="flex flex-col items-center bg-white/80 rounded-xl shadow p-6 flex-1 min-w-[220px]">
            <span className="mb-3">
              <svg className="w-10 h-10 text-[#C2A86C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
            </span>
            <h4 className="font-semibold text-lg mb-2">Discover</h4>
            <p className="text-[#444] text-center">Explore AI’s impact on jobs and industries in your state and beyond.</p>
          </div>
          <div className="flex flex-col items-center bg-white/80 rounded-xl shadow p-6 flex-1 min-w-[220px]">
            <span className="mb-3">
              <svg className="w-10 h-10 text-[#C2A86C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75A2.25 2.25 0 0014.25 4.5h-4.5A2.25 2.25 0 007.5 6.75v3.75m9 0V17.25A2.25 2.25 0 0114.25 19.5h-4.5A2.25 2.25 0 017.5 17.25V10.5m9 0H7.5" /></svg>
            </span>
            <h4 className="font-semibold text-lg mb-2">Prepare</h4>
            <p className="text-[#444] text-center">Get insights and resources to adapt, upskill, and thrive in the new economy.</p>
          </div>
          <div className="flex flex-col items-center bg-white/80 rounded-xl shadow p-6 flex-1 min-w-[220px]">
            <span className="mb-3">
              <svg className="w-10 h-10 text-[#C2A86C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            </span>
            <h4 className="font-semibold text-lg mb-2">Connect</h4>
            <p className="text-[#444] text-center">Join a community of forward-thinkers and find new opportunities together.</p>
          </div>
        </div>
      </section>

import { HomeIcon } from "../components/NavTabIcons";

export default function HomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-[#222] px-4 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#f7f5f2] via-[#e0e7ff] to-[#c2a86c]/30 opacity-90" style={{backgroundSize: '200% 200%'}} />
      <section className="flex flex-col justify-center items-center max-w-2xl w-full py-12">
        {/* Small Home Icon */}
        <div className="mb-4">
          <HomeIcon />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#4B2E83] mb-2 text-center leading-tight">
          Welcome to AI Wilding
        </h1>
        <h2 className="text-lg md:text-xl text-[#6B7280] font-medium mb-4 text-center max-w-2xl">
          Empowering everyone to navigate the future of work and AI transitions with clarity, insight, and opportunity.
        </h2>
        <p className="text-lg md:text-xl text-[#444] text-center mb-8 max-w-xl">
          Navigating the future of work and AI—resources, insights, and support for everyone. Explore jobs at risk, new AI-created roles, and state-by-state transitions.
        </p>
        {/* Hero Image Collage */}
        <div className="relative w-full max-w-lg h-[260px] md:h-[320px] mx-auto mb-2 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
            alt="AI jobs and development"
            className="rounded-2xl shadow-xl object-cover w-full h-full border-4 border-white/80"
            style={{zIndex:2, position:'relative'}}
          />
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
            alt="AI team"
            className="absolute left-[-30px] top-8 w-32 h-32 object-cover rounded-xl shadow-lg border-2 border-white/80 opacity-90 hidden md:block"
            style={{zIndex:1}}
          />
          <img
            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
            alt="AI code"
            className="absolute right-[-30px] bottom-8 w-32 h-32 object-cover rounded-xl shadow-lg border-2 border-white/80 opacity-90 hidden md:block"
            style={{zIndex:1}}
          />
        </div>
        <a
          href="/jobs-at-risk"
          className="mt-8 inline-block px-8 py-3 bg-[#4B2E83] text-white text-lg font-bold rounded-full shadow-lg hover:bg-[#C2A86C] hover:text-[#4B2E83] transition-colors duration-200"
        >
          Explore Jobs
        </a>
      </section>
      {/* Testimonial/Quote Section */}
      <section className="w-full flex flex-col items-center mt-8 mb-4">
        <blockquote className="bg-white/80 border-l-4 border-[#4B2E83] shadow-md rounded-xl px-6 py-5 max-w-xl mx-auto text-center text-lg text-[#333] italic">
          “AI Wilding helped me understand the changing job landscape and find new opportunities I never knew existed.”
          <footer className="mt-3 text-[#6B7280] not-italic text-base">— Taylor R., Data Analyst</footer>
        </blockquote>
      </section>

      {/* Quick Stats Section */}
      <section className="w-full flex flex-col items-center mt-2 mb-8">
        <div className="flex flex-wrap justify-center gap-8 max-w-3xl w-full">
          <div className="flex flex-col items-center bg-white/80 rounded-xl shadow p-6 min-w-[160px]">
            <span className="text-3xl font-bold text-[#4B2E83]">1,200+</span>
            <span className="text-[#444] mt-1">Jobs Tracked</span>
          </div>
          <div className="flex flex-col items-center bg-white/80 rounded-xl shadow p-6 min-w-[160px]">
            <span className="text-3xl font-bold text-[#4B2E83]">50</span>
            <span className="text-[#444] mt-1">States Analyzed</span>
          </div>
          <div className="flex flex-col items-center bg-white/80 rounded-xl shadow p-6 min-w-[160px]">
            <span className="text-3xl font-bold text-[#4B2E83]">300+</span>
            <span className="text-[#444] mt-1">AI Roles Created</span>
          </div>
        </div>
      </section>

      {/* Featured In / Partners Section */}
      <section className="w-full flex flex-col items-center mb-12">
        <h3 className="text-base font-semibold text-[#4B2E83] mb-4 tracking-wide uppercase">Featured In</h3>
        <div className="flex flex-row flex-wrap justify-center gap-8 items-center opacity-80">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/New_York_Times_logo_variation.jpg" alt="NYT" className="h-8 grayscale contrast-125" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Wired_logo.svg" alt="Wired" className="h-8 grayscale contrast-125" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/TechCrunch_logo.svg" alt="TechCrunch" className="h-8 grayscale contrast-125" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Forbes_Magazine_Logo.svg" alt="Forbes" className="h-8 grayscale contrast-125" />
        </div>
      </section>
      {/* Gradient animation CSS moved to globals.css for server compatibility */}
    </main>
  );
}



