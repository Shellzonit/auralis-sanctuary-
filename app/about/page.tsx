"use client";

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f3fd",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 700,
          margin: "3rem auto 2rem auto",
          background:
            "linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)",
          borderRadius: 24,
          boxShadow: "0 4px 32px #18191a22",
          padding: "2rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <h1
          style={{
            color: "rgba(255,255,255,0.97)",
            fontSize: "2.5rem",
            fontWeight: 800,
            fontFamily: "Playfair Display, Georgia, serif",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textAlign: "center",
            margin: 0,
            width: "100%",
            position: "relative",
            zIndex: 2,
            textShadow: "0 2px 8px #8882",
            WebkitTextStroke: "1.5px #bba6f7",
            filter: "none",
            background:
              "linear-gradient(180deg, #fff 60%, #e0d6f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1.18,
            paddingBottom: "0.18em",
          }}
        >
          About
        </h1>
        <div
          style={{
            color: "#ece9fc",
            fontSize: "1.15rem",
            fontWeight: 500,
            marginTop: 10,
            textAlign: "center",
            maxWidth: 500,
            textShadow: "0 1px 6px #18191a55",
          }}
        >
          Learn more about the creator and the mission behind AI Wilding.
        </div>
      </section>
      <section
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "32px 40px",
          maxWidth: 600,
          margin: "0 auto 48px auto",
          boxShadow: "0 2px 16px #18191a22",
          color: "#18191a",
          textAlign: "center",
          fontSize: "1.12rem",
          lineHeight: 1.7,
          border: "1.5px solid #e0d6f7",
        }}
      >
        <div style={{ marginBottom: 18 }}>
          <strong style={{ color: "#7b2ff2", fontSize: "1.15rem" }}>
            Fusing Art, Technology, and Empowerment
          </strong>
        </div>
        <div>
          I am the creator of{" "}
          <strong>Femmephonic</strong>, a new genre that fuses opera and
          international choirs with strings and brass to create a powerful,
          cinematic sound. My music has reached thousands of listeners and
          performers on SoundCloud and beyond, inspiring people around the
          world.
          <br />
          <br />
          My mission is to use my voice and creativity to help people not fear
          AI, but to embrace it as a tool for growth, learning, and new
          opportunities. I believe that technology, when used thoughtfully, can
          enhance our potential and help us discover new callings.
          <br />
          <br />
          Through this site, I aim to provide guidance, resources, and a
          supportive community for anyone navigating the changing world of work.
          Whether you’re an artist, technologist, or just curious about AI,
          you’ll find inspiration and practical help here.
        </div>
      </section>
    </main>
  );
}
