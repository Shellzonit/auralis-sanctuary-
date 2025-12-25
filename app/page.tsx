


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      {/* Hero Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        Welcome to Auralis Sanctuary
      </h1>


      {/* Main Navigation Buttons */}
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <a href="/music" className="inline-block px-6 py-3 bg-amber-400 text-black font-bold rounded-full shadow hover:bg-amber-500 transition text-lg">
          Explore the Music Sanctuary
        </a>
        <a href="/jobs" className="inline-block px-6 py-3 bg-emerald-400 text-black font-bold rounded-full shadow hover:bg-emerald-500 transition text-lg">
          Employment
        </a>
        <a href="/showcase" className="inline-block px-6 py-3 bg-indigo-400 text-black font-bold rounded-full shadow hover:bg-indigo-500 transition text-lg">
          Content Showcase
        </a>
        <a href="/mail" className="inline-block px-6 py-3 bg-pink-400 text-black font-bold rounded-full shadow hover:bg-pink-500 transition text-lg">
          Internal Email
        </a>
        <a href="/license" className="inline-block px-6 py-3 bg-gray-400 text-black font-bold rounded-full shadow hover:bg-gray-500 transition text-lg">
          License Content Info
        </a>
      </div>

      {/* Description */}
      <p className="max-w-2xl text-center text-lg md:text-xl text-gray-300 mb-10">
        Explore, share, and experience music in a mythic, minimalist space. Upload your tracks, discover new sounds, and connect with fellow creators.
      </p>
    </main>
  );
}
