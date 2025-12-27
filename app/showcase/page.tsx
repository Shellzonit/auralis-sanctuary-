"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export default function MusicUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [creator, setCreator] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");
    const allowed = ["audio/mpeg", "audio/wav", "audio/ogg"];
    if (!allowed.includes(file.type)) {
      return alert("Only MP3, WAV, and OGG files are allowed");
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("creator_name", creator);
    const res = await fetch("/api/upload-music", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.error) alert(data.error);
    else alert("Upload successful");
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <input
        type="file"
        accept=".mp3, .wav, .ogg"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const files = e.target.files;
          setFile(files && files[0] ? files[0] : null);
        }}
        required
      />
      <input
        type="text"
        placeholder="Track Title"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Creator Name"
        value={creator}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setCreator(e.target.value)}
      />
      <button type="submit">Upload Music</button>
    </form>
  );
}



