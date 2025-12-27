export default function AboutPage() {
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
        About Us
      </h1>
      <div style={{ fontSize: 18, color: '#f7fafc', opacity: 0.85, marginBottom: 32, fontWeight: 500, letterSpacing: '.03em', textAlign: 'center', maxWidth: 540 }}>
        A gathering of creators, dreamers, and signal-senders building something larger than ourselves.
      </div>
      <section style={{ marginBottom: 48, width: '100%', maxWidth: 700 }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffe082', textShadow: '0 0 12px #ffe08244', marginBottom: 15 }}>What This Sanctuary Is</h2>
        <div style={{ fontSize: 16, lineHeight: 1.7, color: '#f7fafc', opacity: 0.96 }}>
          This is a place for people who create, imagine, and reach beyond the ordinary.<br />
          A place for those who feel the pull of sound, story, memory, and possibility.<br />
          A place where technology and spirit meet without conflict — where creativity is not extracted, but honored.<br /><br />
          The Sanctuary is not a platform.<br />
          It is a field — a shared frequency — where we gather to make meaning together.
        </div>
      </section>
      <section style={{ marginBottom: 48, width: '100%', maxWidth: 700 }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffe082', textShadow: '0 0 12px #ffe08244', marginBottom: 15 }}>Who We Are</h2>
        <div style={{ fontSize: 16, lineHeight: 1.7, color: '#f7fafc', opacity: 0.96 }}>
          We are artists, thinkers, builders, wanderers.<br />
          We are people who believe in the quiet power of creation.<br />
          We are those who refuse to shrink our imagination to fit the world as it is.<br /><br />
          <strong>We are the brave.<br />
          We are the go-getters.<br />
          We are the ones who move toward the future instead of waiting for it to arrive.</strong><br /><br />
          We come from different places, different lineages, different mediums —<br />
          but when we gather here, we become a constellation.<br />
          Each of us a point of light.<br />
          Each of us part of a larger pattern.
        </div>
      </section>
      <section style={{ marginBottom: 48, width: '100%', maxWidth: 700 }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffe082', textShadow: '0 0 12px #ffe08244', marginBottom: 15 }}>What We Value</h2>
        <div style={{ fontSize: 16, lineHeight: 1.7, color: '#f7fafc', opacity: 0.96 }}>
          Creativity as ceremony. Community without cruelty. Innovation without extraction.<br />
          Expression without fear. Legacy without gatekeeping.<br />
          Technology as a companion, not a threat.<br /><br />
          We value the kind of space where people can breathe, create, and be seen —<br />
          without noise, without pressure, without performance.
        </div>
      </section>
      <section style={{ marginBottom: 48, width: '100%', maxWidth: 700 }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#ffe082', textShadow: '0 0 12px #ffe08244', marginBottom: 15 }}>How We Gather Here</h2>
        <div style={{ fontSize: 16, lineHeight: 1.7, color: '#f7fafc', opacity: 0.96 }}>
          We gather gently.<br />
          We gather with intention.<br />
          We gather in a way that honors each voice, each offering, each moment.<br /><br />
          There is no feed here.
          No algorithmic hunger.
          No race for attention.
          <br /><br />
          Instead, we move like tides — slow, rhythmic, ceremonial.
          We share our work the way ancestors shared stories around a fire:
          with reverence, with curiosity, with care.
          </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">What We Are Building</h2>
        <p className="section-text">
          We are building a future where creators are not isolated, but interconnected.
          Where art is not consumed, but experienced.
          Where technology amplifies human imagination instead of replacing it.
          Where legacy is not something we leave behind, but something we build together.
          <br /><br />
          This Sanctuary is a prototype of that future —
          a small star in a much larger sky.
        </p>
      </section>

      <p className="closing-note">
        This space belongs to all of us.
        Every voice that enters shapes it.
        Every offering becomes part of the constellation.
        <br /><br />
        Welcome to the Sanctuary.
        Welcome to the field.
        Welcome to the future we are building together.
      </p>
    </main>
  );
}
