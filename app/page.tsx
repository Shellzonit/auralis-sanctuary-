
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

        <a
          href="/artists"
          className="px-6 py-3 rounded-lg bg-[#1f1f29] hover:bg-[#2a2a35] border border-red-900/40 shadow-md shadow-red-900/30 transition text-lg"
        >
          Artist Intros
        </a>
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
