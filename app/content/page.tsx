
import { contentData } from "../data/content";

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-[#1a1a22] text-red-200 px-6 py-16 font-serif">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold text-red-400 tracking-wide text-center mb-2">
        Content Showcase
      </h1>

      {/* RED LINE */}
      <div className="w-32 h-1 bg-red-600 mx-auto mb-10 rounded-full"></div>

      {/* CATEGORY SECTIONS */}
      {Object.entries(contentData).map(([category, items]) => (
        <section key={category} className="mb-16">

          {/* CATEGORY TITLE */}
          <h2 className="text-3xl text-red-300 font-semibold text-center mb-2 capitalize">
            {category.replace(/([A-Z])/g, " $1")}
          </h2>

          <div className="w-24 h-1 bg-red-700 mx-auto mb-8 rounded-full"></div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#1f1f29] border border-red-900/40 rounded-lg p-4 shadow-md shadow-red-900/30"
              >
                <h3 className="text-xl text-red-300 mb-2">{item.title}</h3>
                <p className="text-red-200/70 text-sm mb-4">{item.description}</p>

                {/* MEDIA PREVIEW */}
                <div className="w-full h-40 bg-black/40 rounded-md flex items-center justify-center text-red-400/60 mb-4">
                  {item.type === "image" && <span>Image Preview</span>}
                  {item.type === "audio" && <span>Audio Preview</span>}
                  {item.type === "video" && <span>Video Preview</span>}
                  {item.type === "text" && <span>Text Preview</span>}
                </div>

                {/* VIEW BUTTON */}
                <a
                  href={item.url}
                  target="_blank"
                  className="block text-center px-4 py-2 rounded-lg bg-[#2a2a35] hover:bg-[#3a3a45] border border-red-900/40 shadow-md shadow-red-900/30 transition text-red-200"
                >
                  View Content →
                </a>
              </div>
            ))}

          </div>
        </section>
      ))}

      {/* BACK TO HOMEPAGE BUTTON */}
      <div className="text-center mt-20">
        <a
          href="/"
          className="inline-block px-8 py-3 rounded-lg bg-[#1f1f29] hover:bg-[#2a2a35] border border-red-900/40 shadow-md shadow-red-900/30 transition text-lg"
        >
          ← Back to Homepage
        </a>
      </div>
    </main>


