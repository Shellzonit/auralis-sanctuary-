
import { useState } from "react";
import { PhotoUploadForm } from "@/components/PhotoUploadForm";
import { PhotoGallery } from "@/components/PhotoGallery";

export default function ShowcasePage() {
  const [refresh, setRefresh] = useState(0);
  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Photo Showcase</h1>
      <PhotoUploadForm onUpload={() => setRefresh((r) => r + 1)} />
      {/* Key prop forces re-mount to refresh gallery after upload */}
      <PhotoGallery key={refresh} />
    </main>
  );
}
