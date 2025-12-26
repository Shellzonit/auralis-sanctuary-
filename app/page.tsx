
import SanctuaryLogo from "@/components/SanctuaryLogo";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#1a1a22] text-red-200 flex flex-col items-center px-6 py-16 font-serif">

      {/* HERO TITLE */}
      <h1 className="text-5xl font-bold text-red-400 tracking-wide text-center mb-2">
        Auralis Sanctuary
      </h1>

      {/* RED LINE */}
      <div className="w-40 h-1 bg-red-600 mx-auto mb-4 rounded-full"></div>

      {/* TAGLINE */}
      <p className="text-center text-xl text-red-300 tracking-wide mb-12">
        AI Innovation At A Glance
      </p>

      {/* NAVIGATION TABS */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        <a
          href="/chat"
          className="px-6 py-3 rounded-lg bg-[#1f1f29] hover:bg-[#2a2a35] border border-red-900/40 shadow-md shadow-red-900/30 transition text-lg"
        >
          Chat
        </a>

        <a
          href="/showcase"
          className="px-6 py-3 rounded-lg bg-[#1f1f29] hover:bg-[#2a2a35] border border-red-900/40 shadow-md shadow-red-900/30 transition text-lg"
        >
          Content
        </a>

        <a
          href="/email"
          className="px-6 py-3 rounded-lg bg-[#1f1f29] hover:bg-[#2a2a35] border border-red-900/40 shadow-md shadow-red-900/30 transition text-lg"
        >
          Email
        </a>

      </div>

      {/* THREADED COMMUNICATION SECTION - GLOWING & PROMINENT */}
      <div className="w-full flex justify-center mt-16">
        <div className="w-full max-w-2xl p-1 rounded-2xl bg-gradient-to-r from-red-700 via-red-400 to-red-700 shadow-lg animate-pulse-slow" style={{ boxShadow: '0 0 32px 8px #f87171, 0 0 0 4px #1a1a22' }}>
          <div className="rounded-2xl bg-[#18181c] p-6">
            <h2 className="text-3xl font-extrabold text-center mb-4 text-red-300 drop-shadow-lg tracking-wide animate-glow">Join the Conversation!</h2>
            {/* ThreadedChat is a client component */}
            <div style={{ marginTop: "2rem" }}>
              <a
                href="/artist-intros"
                style={{
                  padding: "0.75rem 1.25rem",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "6px",
                  textDecoration: "none",
                  color: "inherit",
                  fontSize: "1rem",
                  display: "inline-block",
                }}
              >
                Enter Circles & Roots
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WELCOME SECTION */}
      <div className="max-w-2xl text-center text-red-300/80 leading-relaxed">
        <p>
          Welcome to the Auralis Sanctuary — a creative space for music, art,
          storytelling, and community expression. Step into the chamber that
          listens, responds, and evolves with every offering.
        </p>
      </div>

    </main>
  );
}
