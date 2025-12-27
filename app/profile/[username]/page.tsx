import { notFound } from "next/navigation";

const demoProfiles: Record<string, { name: string; avatar: string; bio: string }> = {
  aurora: {
    name: "Aurora",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Aurora",
    bio: "Digital artist, dreamer, and Sanctuary founder. Exploring the intersection of AI and creativity.",
  },
  nova: {
    name: "Nova",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Nova",
    bio: "Musician and coder. Building new worlds with sound and code.",
  },
  orion: {
    name: "Orion",
    avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Orion",
    bio: "Writer, wanderer, and community builder. Here to connect and inspire.",
  },
};

export default function ProfilePage({ params }: { params: { username: string } }) {
  const profile = demoProfiles[params.username.toLowerCase()];
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
