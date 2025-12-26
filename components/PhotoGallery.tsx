import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export function PhotoGallery() {
  const [photos, setPhotos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPhotos() {
      setLoading(true);
      const { data, error } = await supabase.storage.from("showcase-photos").list(undefined, { limit: 100, sortBy: { column: "created_at", order: "desc" } });
      if (error) {
        setPhotos([]);
        setLoading(false);
        return;
      }
      const urls = await Promise.all(
        (data || [])
          .filter((item) => item.name.match(/\.(jpg|jpeg|png|gif|webp)$/i))
          .map(async (item) => {
            const { data: urlData } = supabase.storage.from("showcase-photos").getPublicUrl(item.name);
            return urlData.publicUrl;
          })
      );
      setPhotos(urls);
      setLoading(false);
    }
    fetchPhotos();
  }, []);

  if (loading) return <div>Loading photos...</div>;
  if (!photos.length) return <div>No photos yet. Be the first to post!</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((url, i) => (
        <img
          key={url + i}
          src={url}
          alt="Showcase photo"
          className="rounded shadow object-cover w-full h-48"
          loading="lazy"
        />
      ))}
    </div>
  );
}
