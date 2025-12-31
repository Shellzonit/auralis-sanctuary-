"use client";


import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });




export default function HomePage() {
  // Example data: major AI hubs and cities
  const aiLocations = useMemo(() => [
    { lat: 37.7749, lng: -122.4194, name: 'San Francisco, USA', description: 'AI Startups, Tech Giants' },
    { lat: 40.7128, lng: -74.0060, name: 'New York, USA', description: 'Finance, AI Labs' },
    { lat: 51.5074, lng: -0.1278, name: 'London, UK', description: 'AI Research, FinTech' },
    { lat: 48.8566, lng: 2.3522, name: 'Paris, France', description: 'AI Research, Robotics' },
    { lat: 35.6895, lng: 139.6917, name: 'Tokyo, Japan', description: 'Robotics, AI Industry' },
    { lat: 31.2304, lng: 121.4737, name: 'Shanghai, China', description: 'AI Startups, Smart Cities' },
    { lat: 28.6139, lng: 77.2090, name: 'Delhi, India', description: 'AI Research, Startups' },
    { lat: -33.8688, lng: 151.2093, name: 'Sydney, Australia', description: 'AI in Healthcare' },
    { lat: 52.5200, lng: 13.4050, name: 'Berlin, Germany', description: 'AI Startups, Research' },
    { lat: -23.5505, lng: -46.6333, name: 'São Paulo, Brazil', description: 'AI in Industry' },
  ], []);

  return (
    <main style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a141a 0%, #18191a 60%, #2a1a4d 100%)", fontFamily: "Inter, Arial, sans-serif", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 1rem", position: 'relative' }}>
      {/* States Tab Button - left */}
      <a href="/states" style={{position: 'absolute', top: 24, left: 32, zIndex: 20, padding: '10px 28px', background: '#C2A86C', color: '#232526', fontWeight: 700, borderRadius: 9999, boxShadow: '0 2px 12px #C2A86C55', fontSize: '1.15rem', textDecoration: 'none', transition: 'all 0.2s', border: 'none'}} onMouseOver={e => {e.currentTarget.style.background='#F7F5F2';e.currentTarget.style.color='#2a1a4d';}} onMouseOut={e => {e.currentTarget.style.background='#C2A86C';e.currentTarget.style.color='#232526';}}>States &rarr;</a>
      {/* Upcoming AI Hiring Events Tab Button - bottom center */}
      <a href="/ai-hiring-events" style={{position: 'fixed', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 20, padding: '10px 28px', background: '#C2A86C', color: '#232526', fontWeight: 700, borderRadius: 9999, boxShadow: '0 2px 12px #C2A86C55', fontSize: '1.15rem', textDecoration: 'none', transition: 'all 0.2s', border: 'none'}} onMouseOver={e => {e.currentTarget.style.background='#F7F5F2';e.currentTarget.style.color='#2a1a4d';}} onMouseOut={e => {e.currentTarget.style.background='#C2A86C';e.currentTarget.style.color='#232526';}}>Upcoming AI Hiring Events</a>
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#C2A86C", margin: "32px 0 16px 0", textShadow: "0 2px 16px #2a1a4d" }}>
        Welcome to the AI Wilding Sanctuary
      </h1>
      <section style={{ maxWidth: 900, background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: 24, boxShadow: "0 2px 16px #4B2E8322", marginBottom: 32 }}>
        <p style={{ color: "#fff8dc", fontSize: "1.08rem", marginBottom: 18 }}>
          Explore transitional paths, discover new AI jobs, and protect creative legacy. This site is your atlas for navigating the future of work in the age of artificial intelligence.
        </p>
        <img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80"
          alt="AI innovation art, neural networks, digital brain, futuristic"
          style={{ borderRadius: 16, boxShadow: "0 2px 16px #C2A86C55", objectFit: "cover", width: "100%", maxWidth: 600, height: 220, margin: "0 auto 24px auto", border: "2px solid #C2A86C40" }}
        />
      </section>
      {/* Interactive Globe showing AI usage locations */}
      <section style={{ width: '100%', maxWidth: 900, background: 'rgba(255,255,255,0.04)', borderRadius: 16, padding: 24, boxShadow: '0 2px 16px #4B2E8322', marginBottom: 32, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#C2A86C', fontSize: '1.3rem', marginBottom: 16, textAlign: 'center' }}>Where AI is Being Used Globally</h2>
        <div style={{ width: '100%', maxWidth: 600, height: 400, margin: '0 auto' }}>
          <Globe
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            pointsData={aiLocations}
            pointLat={d => d.lat}
            pointLng={d => d.lng}
            pointColor={() => '#C2A86C'}
            pointAltitude={() => 0.08}
            pointRadius={() => 0.18}
            pointLabel={d => `<b>${d.name}</b><br/>${d.description}`}
            backgroundColor="rgba(0,0,0,0)"
          />
        </div>
        <div style={{ color: '#fff8dc', fontSize: '1rem', marginTop: 12, textAlign: 'center' }}>
          <span>Major cities and regions where AI is actively used in industry, research, and society.</span>
        </div>
      </section>
    </main>
  );
}



