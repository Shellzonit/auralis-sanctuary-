"use client";
import { useState, useEffect } from "react";

// TODO: Replace with actual username from auth/session
const USERNAME = typeof window !== 'undefined' ? (window.localStorage.getItem('username') || 'aurora') : 'aurora';

export default function EditProfilePage() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/profile/${USERNAME}`);
        if (!res.ok) throw new Error('Failed to load profile');
        const data = await res.json();
        setName(data.name || '');
        setBio(data.bio || '');
        setAvatar(data.avatar || null);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setAvatarFile(file);
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    let avatarUrl = avatar;
    try {
      // If a new avatar file is selected, upload it
      if (avatarFile) {
        const formData = new FormData();
        formData.append('file', avatarFile);
        const uploadRes = await fetch('/api/avatar', {
          method: 'POST',
          body: formData,
        });
        if (!uploadRes.ok) throw new Error('Avatar upload failed');
        const uploadData = await uploadRes.json();
        avatarUrl = uploadData.url;
      }
      const res = await fetch(`/api/profile/${USERNAME}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, bio, avatar: avatarUrl }),
      });
      if (!res.ok) throw new Error('Failed to save profile');
      setSuccess(true);
      setAvatarFile(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
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
      {error && <div style={{ color: 'red', marginBottom: 12 }}>{error}</div>}
      {success && <div style={{ color: 'green', marginBottom: 12 }}>Profile saved!</div>}
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
            cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: '0 2px 8px #0002',
            transition: 'background .18s',
            marginTop: 8,
            opacity: loading ? 0.7 : 1,
          }}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Profile'}
        </button>
      </form>
    </main>
  );
}
