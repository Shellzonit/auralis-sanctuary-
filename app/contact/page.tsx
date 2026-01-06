export default function ContactPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '8vh',
      }}
    >
      {/* Blue Spiral SVG background */}
      <img
        src="/spiral-blue.svg"
        alt="Blue Spiral"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
      <div
        style={{
          width: '100vw',
          margin: '0 0 2.5rem 0',
          background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)',
          borderRadius: 24,
          boxShadow: '0 4px 32px #18191a88',
          padding: '1.5rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h1
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            fontWeight: 900,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin: 0,
            width: '100vw',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
            zIndex: 2,
            textShadow: '0 0 32px #7b2ff2, 0 0 12px #2196f3, 0 2px 24px #000',
            WebkitTextStroke: '2px #7b2ff2',
            filter: 'drop-shadow(0 0 16px #2196f3aa)',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.95) 70%, rgba(123,47,242,0.7) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            // Simulate blocky top effect
            maskImage: 'linear-gradient(to bottom, #fff 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, #fff 80%, transparent 100%)',
          }}
        >
          AI wilding
        </h1>
      </div>
      <div
        style={{
          background: 'rgba(24,25,26,0.85)',
          color: '#ffd700',
          borderRadius: 18,
          padding: '2rem 2vw',
          maxWidth: 600,
          width: '90vw',
          margin: '0 auto',
          boxShadow: '0 2px 24px #18191a88',
          textAlign: 'center',
          fontSize: '1.25rem',
        }}
      >
        Have questions or feedback? Reach out to us and we’ll get back to you soon.
      </div>
    </div>
  );
}
