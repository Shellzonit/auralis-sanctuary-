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
        justifyContent: 'center',
      }}
    >
      <h1 className="text-4xl font-bold mb-6 text-yellow-700" style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 12, padding: '0.5em 1.5em', marginBottom: 24 }}>Contact</h1>
      <p className="text-lg text-gray-700 max-w-xl text-center" style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 12, padding: '1em 2em' }}>Have questions or feedback? Reach out to us and we’ll get back to you soon.</p>
      {/* Debug: Show the background image directly */}
      <div style={{marginTop: 32}}>
        <img src="/background.png" alt="Background Test" style={{maxWidth: 400, border: '2px solid red'}} />
        <div style={{color: 'red', fontWeight: 600, marginTop: 8}}>If you see this image, the file is accessible.</div>
      </div>
    </div>
  );
}
