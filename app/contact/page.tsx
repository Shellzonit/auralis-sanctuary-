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
      {/* Tabs and random image section */}
      <div
        style={{
          background: '#fff',
          color: '#18191a',
          borderRadius: 18,
          padding: '2rem 2vw',
          maxWidth: 700,
          width: '90vw',
          margin: '2.5rem auto 0 auto',
          boxShadow: '0 2px 24px #18191a22',
          textAlign: 'center',
          fontSize: '1.1rem',
          zIndex: 2,
        }}
      >
        {/* Pyramid Tabs */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24, gap: 0 }}>
          {/* Top tab */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                padding: '12px 48px',
                borderRadius: '16px 16px 0 0',
                background: '#ece9fc',
                color: '#7b2ff2',
                fontWeight: 700,
                border: '2px solid #7b2ff2',
                boxShadow: '0 2px 8px #7b2ff222',
                fontSize: '1.25rem',
                marginBottom: -8,
                zIndex: 3,
                position: 'relative',
              }}
            >
              Contact
            </div>
          </div>
          {/* Middle row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: -8, zIndex: 2, position: 'relative' }}>
            <div
              style={{
                padding: '10px 36px',
                borderRadius: '14px 14px 0 0',
                background: '#f5f3fd',
                color: '#7b2ff2',
                fontWeight: 600,
                border: '2px solid #bba6f7',
                boxShadow: '0 2px 6px #7b2ff211',
                fontSize: '1.1rem',
              }}
            >
              About
            </div>
            <div
              style={{
                padding: '10px 36px',
                borderRadius: '14px 14px 0 0',
                background: '#f5f3fd',
                color: '#7b2ff2',
                fontWeight: 600,
                border: '2px solid #bba6f7',
                boxShadow: '0 2px 6px #7b2ff211',
                fontSize: '1.1rem',
              }}
            >
              Support
            </div>
          </div>
        </div>
        {/* Random Image from public/ */}
        <div style={{ margin: '24px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Pick a random image from a fixed list for now */}
          {(() => {
            const images = [
              'ai around the world 2.png',
              'ai around the world.png',
              'ai homepage 3.png',
              'ai homepage.png',
              'Ai wilding (2).png',
              'Ai wilding.png',
              'background.png',
              'BCO.436bd64f-0acc-4437-a5c3-15269bfdf309.png',
              'big cities.png',
              'canada graph.png',
              'china.png',
              'education.png',
              'educational outlook.png',
              'healthy.png',
              'icon.png',
              'japan.png',
              'job growth.png',
              'Mr Nanny.png',
              'Resume.png',
              'states 2.png',
              'states.png',
              'uk.png',
              'usa.png',
            ];
            const random = Math.floor(Math.random() * images.length);
            const img = images[random];
            return (
              <img
                src={`/${img}`}
                alt="Random visual"
                style={{
                  maxWidth: '100%',
                  maxHeight: 320,
                  borderRadius: 12,
                  boxShadow: '0 2px 16px #7b2ff244',
                  marginBottom: 12,
                }}
              />
            );
          })()}
        </div>
        {/* Example content for the selected tab */}
        <div style={{ color: '#444', fontSize: '1.08rem' }}>
          Have questions or feedback? Reach out to us and we’ll get back to you soon.
        </div>
      </div>
    </div>
  );
}
