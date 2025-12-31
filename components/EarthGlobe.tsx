import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

export default function EarthGlobe() {
  // Example markers
  const markers: { lat: number; lng: number; size: number; color: string; label: string }[] = [
    { lat: 37.7749, lng: -122.4194, size: 0.2, color: 'red', label: 'San Francisco' },
    { lat: 51.5074, lng: -0.1278, size: 0.2, color: 'blue', label: 'London' },
    { lat: 35.6895, lng: 139.6917, size: 0.2, color: 'green', label: 'Tokyo' },
  ];

  return (
    <>
      <div style={{ width: '100%', height: '600px', background: '#111', borderRadius: 16, overflow: 'hidden' }}>
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          pointsData={markers}
          pointLat={(d: { lat: number }) => d.lat}
          pointLng={(d: { lng: number }) => d.lng}
          pointColor={(d: { color: string }) => d.color}
          pointAltitude={(d: { size: number }) => d.size}
          pointLabel={(d: { label: string }) => d.label}
          width={undefined}
          height={undefined}
        />
      </div>
      <hr style={{ margin: '32px 0', border: 'none', borderTop: '2px solid #333', width: '100%' }} />
    </>
  );
}
