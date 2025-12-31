import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

export default function EarthGlobe() {
  // Example markers
  const markers = [
    { lat: 37.7749, lng: -122.4194, size: 0.2, color: 'red', label: 'San Francisco' },
    { lat: 51.5074, lng: -0.1278, size: 0.2, color: 'blue', label: 'London' },
    { lat: 35.6895, lng: 139.6917, size: 0.2, color: 'green', label: 'Tokyo' },
  ];

  return (
    <div style={{ width: '100%', height: '600px', background: '#111', borderRadius: 16, overflow: 'hidden' }}>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        pointsData={markers}
        pointLat={d => d.lat}
        pointLng={d => d.lng}
        pointColor={d => d.color}
        pointAltitude={d => d.size}
        pointLabel={d => d.label}
        width={undefined}
        height={undefined}
      />
    </div>
  );
}
