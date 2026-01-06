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
          About Sanctuary
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
          Discover what makes Sanctuary unique and how it empowers your journey in the age of AI.
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
            Your Creative AI Career Platform
          </strong>
        </div>
        <div>
          Sanctuary is a modern platform designed to help you thrive in the evolving world of AI, creativity, and technology. Our mission is to empower users with:
          <ul style={{ textAlign: 'left', margin: '18px auto', maxWidth: 480, fontSize: '1.08rem', lineHeight: 1.7 }}>
            <li><strong>AI Job Boards:</strong> Discover new opportunities in AI and tech fields.</li>
            <li><strong>Mock Interviews & Training:</strong> Practice with interactive AI interviewers and get instant feedback.</li>
            <li><strong>Resume Wizard:</strong> Build and refine your resume for the future of work.</li>
            <li><strong>Events & Networking:</strong> Find hiring events, job fairs, and connect with creative and technical talent.</li>
            <li><strong>Resources & Guidance:</strong> Access curated guides, tips, and support for your career journey.</li>
            <li><strong>Community:</strong> Join a supportive space for artists, technologists, and anyone curious about AI.</li>
          </ul>
          <br />
          Sanctuary is built to help you embrace change, learn new skills, and unlock new opportunities. Whether you’re starting out, switching careers, or seeking inspiration, you’ll find practical help and encouragement here.
          <br />
          <br />
          <strong>Welcome to Sanctuary—your creative career hub for the AI era.</strong>
        </div>
      </section>
    </main>
  );
}
