
import { notFound } from "next/navigation";

async function getProfile(username: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/profile/${encodeURIComponent(username)}`, {
    cache: 'no-store',
  });
  if (!res.ok) return null;
  return res.json();
}


export default async function ProfilePage({ params }: { params: { username: string } }) {
  const profile = await getProfile(params.username);
  if (!profile) return notFound();

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
      </div>
    </main>
  );
}
