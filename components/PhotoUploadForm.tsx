import { useState } from "react";

export function PhotoUploadForm({ onUpload }: { onUpload: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
      if (!allowedTypes.includes(selectedFile.type)) {
        setError("Only JPG, JPEG, PNG, GIF, and WEBP files are allowed.");
        setFile(null);
        return;
      }
    }
    setFile(selectedFile);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a photo to upload.");
      return;
    }
    setUploading(true);
    setError(null);
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;
    // Supabase client removed
    const { error: uploadError } = await sb.storage.from("showcase-photos").upload(fileName, file);
    setUploading(false);
    if (uploadError) {
      setError(uploadError.message);
    } else {
      setFile(null);
      onUpload();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-2">
      <input type="file" accept=".jpg,.jpeg,.png,.gif,.webp" onChange={handleFileChange} />
      <button type="submit" disabled={uploading} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        {uploading ? "Uploading..." : "Upload Photo"}
      </button>
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </form>
  );
}
