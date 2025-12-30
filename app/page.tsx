export default function HomePage() {
  const tabStyle = {
    color: '#ffd700',
    fontWeight: 700,
    fontSize: '1.15rem',
    textDecoration: 'none',
    padding: '8px 18px',
    borderRadius: 8,
    background: 'rgba(106,27,154,0.10)', // purple tint
    boxShadow: '0 2px 8px #6a1b9a22',
    transition: 'background 0.2s',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    letterSpacing: '.04em',
    margin: 0,
    display: 'inline-block',
  };
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6a1b9a 0%, #ffd700 100%)",
        fontFamily: "Playfair Display, Georgia, serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1rem",
      }}
    >
      <div
        style={{
          background: 'linear-gradient(90deg, #6a1b9a 0%, #ffd700 100%)',
          borderRadius: 24,
          boxShadow: '0 4px 32px #6a1b9a55',
          padding: '48px 64px',
          marginBottom: 48,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'Playfair Display, Georgia, serif',
            fontSize: '3.5rem',
            fontWeight: 900,
            color: '#ffd700',
            textShadow: '0 2px 24px #6a1b9a',
            letterSpacing: 2,
            textAlign: 'center',
            margin: 0,
          }}
        >
          AI Wilding
        </h1>
      </div>
      <nav
        style={{
          display: 'flex',
          gap: 24,
          background: 'rgba(106,27,154,0.85)', // purple
          borderRadius: 16,
          padding: '12px 32px',
          marginBottom: 48,
          boxShadow: '0 4px 24px #6a1b9a55',
        }}
      >
        <a href="/" style={tabStyle}>Home</a>
        <a href="/states" style={tabStyle}>States</a>
        <a href="/countries" style={tabStyle}>Countries</a>
        <a href="/jobs-at-risk" style={tabStyle}>Jobs at Risk</a>
        <a href="/transitional-paths" style={tabStyle}>Transitional Paths</a>
        <a href="/new-ai-jobs" style={tabStyle}>New AI Jobs</a>
        <a href="/training" style={tabStyle}>Training Hub</a>
        <a href="/recovery" style={tabStyle}>Recovery Hub</a>
        <a href="/about" style={tabStyle}>About</a>
        <a href="/contact" style={tabStyle}>Contact</a>
      </nav>
    </main>
  );
}
