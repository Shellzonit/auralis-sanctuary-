

"use client";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

// TODO: Replace with actual logged-in username from auth/session
const LOGGED_IN_USERNAME = typeof window !== 'undefined' ? (window.localStorage.getItem('username') || '') : '';

async function fetchProfile(username: string) {
  const res = await fetch(`/api/profile/${encodeURIComponent(username)}`);
  if (!res.ok) return null;
  return res.json();
}

async function fetchFollowStats(username: string) {
  const res = await fetch(`/api/follow?username=${encodeURIComponent(username)}`);
  if (!res.ok) return { followers: 0, following: 0 };
  return res.json();
}

async function fetchIsFollowing(viewer: string, target: string) {
  if (!viewer || !target || viewer === target) return false;
  const res = await fetch(`/api/follow?username=${encodeURIComponent(viewer)}`);
  if (!res.ok) return false;
  const data = await res.json();
  // This is a simple check; for a real app, add an endpoint to check directly
  // For now, just return false (or implement a more robust check if needed)
  return false;
}

export default function ProfilePage({ params }: { params: { username: string } }) {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [followStats, setFollowStats] = useState({ followers: 0, following: 0 });
  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);

  const username = params.username;

  useEffect(() => {
    async function load() {
      setLoading(true);
      setError(null);
      const prof = await fetchProfile(username);
      if (!prof) {
        setError("Profile not found");
        setLoading(false);
        return;
      }
      setProfile(prof);
      const stats = await fetchFollowStats(username);
      setFollowStats(stats);
      // Optionally, check if logged-in user is following
      // setIsFollowing(await fetchIsFollowing(LOGGED_IN_USERNAME, username));
      setLoading(false);
    }
    load();
  }, [username]);

  const handleFollow = async () => {
    setFollowLoading(true);
    try {
      const res = await fetch('/api/follow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ follower: LOGGED_IN_USERNAME, following: username })
      });
      if (res.ok) {
        setIsFollowing(true);
        setFollowStats(s => ({ ...s, followers: s.followers + 1 }));
      }
    } finally {
      setFollowLoading(false);
    }
  };

  const handleUnfollow = async () => {
    setFollowLoading(true);
    try {
      const res = await fetch('/api/follow', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ follower: LOGGED_IN_USERNAME, following: username })
      });
      if (res.ok) {
        setIsFollowing(false);
        setFollowStats(s => ({ ...s, followers: Math.max(0, s.followers - 1) }));
      }
    } finally {
      setFollowLoading(false);
    }
  };

  if (loading) return <div style={{ color: '#ffe082', textAlign: 'center', marginTop: 60 }}>Loading...</div>;
  if (error || !profile) return notFound();

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
      <div style={{ marginTop: 56, marginBottom: 32, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={profile.avatar} alt={profile.name} style={{ width: 120, height: 120, borderRadius: '50%', border: '4px solid #ffe082', boxShadow: '0 2px 24px #0008', marginBottom: 18 }} />
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffe082', margin: 0, textShadow: '0 2px 16px #000a' }}>{profile.name}</h1>
        <div style={{ fontSize: 17, color: '#f7fafc', opacity: 0.92, marginTop: 12, textAlign: 'center', maxWidth: 420 }}>{profile.bio}</div>
        <div style={{ display: 'flex', gap: 18, marginTop: 18, fontSize: 16, color: '#ffe082', fontWeight: 600 }}>
          <span>{followStats.followers} Followers</span>
          <span>{followStats.following} Following</span>
        </div>
        {LOGGED_IN_USERNAME && LOGGED_IN_USERNAME !== username && (
          <button
            onClick={isFollowing ? handleUnfollow : handleFollow}
            disabled={followLoading}
            style={{
              marginTop: 18,
              background: isFollowing ? '#7fd1b9' : '#ffe082',
              color: '#181a20',
              fontWeight: 700,
              fontSize: 17,
              border: 'none',
              borderRadius: 8,
              padding: '8px 22px',
              cursor: followLoading ? 'not-allowed' : 'pointer',
              boxShadow: '0 2px 8px #0002',
              transition: 'background .18s',
              opacity: followLoading ? 0.7 : 1,
            }}
          >
            {isFollowing ? 'Unfollow' : 'Follow'}
          </button>
        )}
      </div>
    </main>
  );
}
