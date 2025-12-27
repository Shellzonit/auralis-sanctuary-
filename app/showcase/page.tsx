
"use client";

const showcaseItems = [
  {
    id: 1,
    type: "art",
    title: "Dreamscape",
    creator: "Aria",
    description: "A surreal digital painting exploring AI and nature.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    type: "music",
    title: "Neural Groove",
    creator: "Jaxon",
    description: "An AI-generated ambient track for deep focus.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    type: "thread",
    title: "AI & Creativity",
    creator: "Nova",
    description: "A discussion thread on the future of creative AI.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Showcase() {
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
        fontSize: '2.8rem',
        fontWeight: 800,
        letterSpacing: '.06em',
        color: '#ffe082',
        textShadow: '0 2px 16px #000a, 0 1px 0 #fff2',
        margin: '36px 0 10px 0',
        textAlign: 'center',
      }}>
        Showcase
      </h1>
      <div style={{ fontSize: 20, color: '#f7fafc', opacity: 0.85, marginBottom: 32, fontWeight: 500, letterSpacing: '.03em', textAlign: 'center', maxWidth: 540 }}>
        Discover the best of Sanctuary: featured art, music, and community threads curated for inspiration and innovation.
      </div>
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 32,
        width: '100%',
        maxWidth: 900,
        marginBottom: 48,
      }}>
        {showcaseItems.map(item => (
          <div key={item.id} style={{
            background: '#23242b',
            border: '1.5px solid #31323a',
            borderRadius: 18,
            boxShadow: '0 2px 16px #0004',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            minHeight: 340,
            transition: 'transform .13s',
          }}>
            <img src={item.image} alt={item.title} style={{ width: '100%', height: 160, objectFit: 'cover', borderTopLeftRadius: 18, borderTopRightRadius: 18, borderBottom: '1px solid #31323a' }} />
            <div style={{ padding: '18px 18px 10px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontWeight: 700, fontSize: 20, color: '#ffe082', marginBottom: 4 }}>{item.title}</div>
              <div style={{ fontSize: 15, color: '#f7fafc', opacity: 0.92, marginBottom: 8 }}>{item.description}</div>
              <div style={{ fontSize: 13, color: '#ffe082bb', marginTop: 'auto' }}>by {item.creator}</div>
            </div>
          </div>
        ))}
      </section>
      {/* Future: Add filters, likes, and user submissions here */}
    </main>
  );
}



