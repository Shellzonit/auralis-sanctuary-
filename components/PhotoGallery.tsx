import { useEffect, useState } from "react";

export function PhotoGallery() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotos() {
      setLoading(true);
      // Fetch photo URLs from your Backblaze B2 API endpoint
      try {
        const res = await fetch("/api/b2/get-upload-url");
        if (!res.ok) throw new Error("Failed to fetch photos");
        const { files } = await res.json();
        setPhotos(Array.isArray(files) ? files : []);
      } catch (e) {
        setPhotos([]);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  if (loading) return <div>Loading photos...</div>;
  if (!photos.length) return <div>No photos yet. Be the first to post!</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((url, i) => (
        <a
          key={url + i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <img
            src={url}
            alt="Showcase photo"
            className="rounded shadow object-cover w-full h-48 group-hover:opacity-80 transition"
            loading="lazy"
          />
        </a>
      ))}
    </div>
  );
}
