// Your curated gallery at the top of the page
import React from "react";

export default function FeaturedGallery({ items }) {
  if (!items?.length) return null;
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-fuchsia-300">Featured Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="bg-black/60 rounded-xl p-4 shadow-lg">
            <div className="mb-2 font-semibold text-lg text-fuchsia-200">{item.title}</div>
            {item.url && (
              <img src={item.url} alt={item.title} className="rounded w-full max-h-48 object-cover mb-2" />
            )}
            {item.description && (
              <div className="text-fuchsia-100 text-sm">{item.description}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
