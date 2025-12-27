"use client";
import { useState } from "react";

export default function EditProfilePage() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setAvatarFile(file);
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save logic here (to backend or local storage)
    alert("Profile saved! (Demo only)");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#181a20",
        color: "#f7fafc",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <h1 style={{
        fontFamily: 'Playfair Display, Georgia, serif',
        fontSize: '2.2rem',
        fontWeight: 800,
        color: '#ffe082',
        margin: '36px 0 18px 0',
        textAlign: 'center',
      }}>
        Edit Profile
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: 420,
          background: '#23242b',
          border: '1.5px solid #31323a',
          borderRadius: 18,
          boxShadow: '0 2px 16px #0004',
          padding: '32px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 22,
          alignItems: 'center',
        }}
      >
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ color: '#ffe082', fontWeight: 600, fontSize: 16 }}>Avatar</span>
          <input type="file" accept="image/*" onChange={handleAvatarChange} style={{ marginTop: 6 }} />
          {avatar && <img src={avatar} alt="Avatar preview" style={{ width: 80, height: 80, borderRadius: '50%', border: '2px solid #ffe082', marginTop: 8 }} />}
        </label>
        <input
          style={{
            width: '100%',
            padding: '1rem 1.2rem',
            borderRadius: 12,
            border: 'none',
            fontSize: 17,
            background: '#181a20',
            color: '#f7fafc',
            outline: 'none',
            marginBottom: 0,
          }}
          placeholder="Display Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          style={{
            width: '100%',
            padding: '1rem 1.2rem',
            borderRadius: 12,
            border: 'none',
            fontSize: 17,
            background: '#181a20',
            color: '#f7fafc',
            outline: 'none',
            marginBottom: 0,
            resize: 'vertical',
          }}
          placeholder="Bio"
          rows={4}
          value={bio}
          onChange={e => setBio(e.target.value)}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '1rem 0',
            background: '#ffe082',
            color: '#23242b',
            fontWeight: 700,
            fontSize: 18,
            border: 'none',
            borderRadius: 10,
            cursor: 'pointer',
            boxShadow: '0 2px 8px #0002',
            transition: 'background .18s',
            marginTop: 8,
          }}
        >
          Save Profile
        </button>
      </form>
    </main>
  );
}
