export default function ContactPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: "url('/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <main className="flex flex-col items-center justify-center py-20" style={{ border: '3px solid #18191a', borderRadius: 24, boxSizing: 'border-box', background: 'rgba(123,44,44,0.92)', backdropFilter: 'blur(2px)', maxWidth: 600, width: '90%', margin: '2rem' }}>
        <h1 className="text-4xl font-bold mb-6 text-yellow-700">Contact</h1>
        <p className="text-lg text-gray-700 max-w-xl text-center">Have questions or feedback? Reach out to us and we’ll get back to you soon.</p>
      </main>
    </div>
  );
}
