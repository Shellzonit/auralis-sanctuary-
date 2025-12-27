
export default function SpotlightPage() {
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
        fontSize: '2.5rem',
        fontWeight: 800,
        letterSpacing: '.06em',
        color: '#ffe082',
        textShadow: '0 2px 16px #000a, 0 1px 0 #fff2',
        margin: '36px 0 18px 0',
        textAlign: 'center',
      }}>
        Spotlight
      </h1>
      <div style={{ fontSize: 18, color: '#f7fafc', opacity: 0.85, marginBottom: 32, fontWeight: 500, letterSpacing: '.03em', textAlign: 'center', maxWidth: 540 }}>
        Each month, we shine a light on a creator whose work inspires our community.
      </div>
      <div style={{ fontSize: '2rem', fontWeight: 600, color: '#ffe082', textShadow: '0 0 18px #ffe08255', margin: '20px 0 30px' }}>
        Jane Doe
      </div>
      <div style={{ margin: '30px 0', padding: 20, borderRadius: 12, background: 'rgba(255,255,255,0.03)', border: '1px solid #31323a', boxShadow: '0 0 25px #ffe08214', color: '#f7fafc', maxWidth: 480 }}>
        <strong style={{ color: '#ffe082' }}>Featured Work:</strong> <br />
        <a href="#" style={{ color: '#ffe082', textDecoration: 'underline', fontSize: 18 }}>&quot;Celestial Dreams&quot;</a>
      </div>
      <div style={{ fontSize: 17, color: '#f7fafc', marginBottom: 24, maxWidth: 540 }}>
        Jane is a digital artist blending cosmic themes with surreal landscapes. Her work explores the intersection of dreams and reality, inviting viewers to journey beyond the ordinary.
      </div>
      <div style={{ width: '100%', maxWidth: 420, borderTop: '1.5px solid #31323a', margin: '32px 0' }} />
      <div style={{ fontSize: 16, color: '#ffe082cc', marginBottom: 18, textAlign: 'center', maxWidth: 540 }}>
        Jane was chosen for her innovative approach to digital art and her positive impact on the creative community.
      </div>
      <div style={{ fontSize: 15, color: '#7fd1b9', opacity: 0.92, marginTop: 18, textAlign: 'center', maxWidth: 540 }}>
        Know a creator who deserves the spotlight? Nominate them for next month!
      </div>
    </main>
  );
}
