export default function ContactPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: "url('/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '8vh',
      }}
    >
      <div
        style={{
          width: '100vw',
          margin: '0 0 2.5rem 0',
          background: 'linear-gradient(90deg, #ffd700 0%, #18191a 100%)',
          borderRadius: 24,
          boxShadow: '0 4px 32px #18191a88',
          padding: '1.5rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            color: '#18191a',
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            fontWeight: 900,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textShadow: '0 2px 24px #ffd70088, 0 0 8px #000',
            width: '100vw',
            textAlign: 'center',
            margin: 0,
            background: 'linear-gradient(90deg, #ffd700 60%, #fff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
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
