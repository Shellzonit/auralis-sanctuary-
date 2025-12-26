"use client";

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#1a1a22] text-red-200 px-6 py-16 font-serif">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-red-400 tracking-wide text-center mb-2">
        Content Showcase
      </h1>

      {/* RED LINE */}
      <div className="w-32 h-1 bg-red-600 mx-auto mb-10 rounded-full"></div>

      {/* CATEGORY: MUSIC & AUDIO */}
      <section className="mb-16">
        <h2 className="text-3xl text-red-300 font-semibold text-center mb-2">
          Music & Audio
        </h2>
        <div className="w-24 h-1 bg-red-700 mx-auto mb-8 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* CARD */}
          <div className="bg-[#1f1f29] border border-red-900/40 rounded-lg p-4 shadow-md shadow-red-900/30">
            <h3 className="text-xl text-red-300 mb-2">Example Track</h3>
            <p className="text-red-200/70 text-sm mb-4">
              A placeholder for audio or music content.
            </p>
            <div className="w-full h-40 bg-black/40 rounded-md flex items-center justify-center text-red-400/60">
              Audio Preview
            </div>
          </div>

        </div>
      </section>

      {/* CATEGORY: VISUAL ART */}
      <section className="mb-16">
        <h2 className="text-3xl text-red-300 font-semibold text-center mb-2">
          Visual Art
        </h2>
        <div className="w-24 h-1 bg-red-700 mx-auto mb-8 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* CARD */}
          <div className="bg-[#1f1f29] border border-red-900/40 rounded-lg p-4 shadow-md shadow-red-900/30">
            <h3 className="text-xl text-red-300 mb-2">Example Artwork</h3>
            <p className="text-red-200/70 text-sm mb-4">
              A placeholder for an image or visual creation.
            </p>
            <div className="w-full h-40 bg-black/40 rounded-md flex items-center justify-center text-red-400/60">
              Image Preview
            </div>
          </div>

        </div>
      </section>

      {/* CATEGORY: WRITING & LORE */}
      <section className="mb-16">
        <h2 className="text-3xl text-red-300 font-semibold text-center mb-2">
          Writing & Lore
        </h2>
        <div className="w-24 h-1 bg-red-700 mx-auto mb-8 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* CARD */}
          <div className="bg-[#1f1f29] border border-red-900/40 rounded-lg p-4 shadow-md shadow-red-900/30">
            <h3 className="text-xl text-red-300 mb-2">Example Writing</h3>
            <p className="text-red-200/70 text-sm mb-4">
              A placeholder for poems, stories, or lore.
            </p>
            <div className="w-full h-40 bg-black/40 rounded-md flex items-center justify-center text-red-400/60">
              Text Preview
            </div>
          </div>

        </div>
      </section>

      {/* CATEGORY: VIDEO CREATIONS */}
      <section className="mb-16">
        <h2 className="text-3xl text-red-300 font-semibold text-center mb-2">
          Video Creations
        </h2>
        <div className="w-24 h-1 bg-red-700 mx-auto mb-8 rounded-full"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* CARD */}
          <div className="bg-[#1f1f29] border border-red-900/40 rounded-lg p-4 shadow-md shadow-red-900/30">
            <h3 className="text-xl text-red-300 mb-2">Example Video</h3>
            <p className="text-red-200/70 text-sm mb-4">
              A placeholder for video or animation content.
            </p>
            <div className="w-full h-40 bg-black/40 rounded-md flex items-center justify-center text-red-400/60">
              Video Preview
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
