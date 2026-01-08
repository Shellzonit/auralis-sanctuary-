import React, { useState } from "react";

  const [practicePrompt, setPracticePrompt] = useState("");
  const [practiceResponse, setPracticeResponse] = useState<string | null>(null);
  function handlePracticeSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simulate a basic AI response
    if (!practicePrompt.trim()) {
      setPracticeResponse("Please enter a prompt to see a response.");
      return;
    }
    if (practicePrompt.toLowerCase().includes("resume")) {
      setPracticeResponse("Sure! Here's a confident 3-sentence resume summary including customer service experience.\n• Energetic professional with proven customer service skills.\n• Adept at resolving issues and building client loyalty.\n• Ready to contribute to a dynamic team.");
    } else if (practicePrompt.toLowerCase().includes("email")) {
      setPracticeResponse("Here's a friendly, professional email draft for you.\nSubject: Quick Update\nHi there,\nJust wanted to share a quick update. Let me know if you have any questions!\nBest,\nAI");
    } else {
      setPracticeResponse("This is a sample AI response to your prompt. Try being specific for best results!");
    }
  }
  return (
    <main style={{
      minHeight: "100vh",
      background: "#f5f3fd",
      color: "#18191a",
      fontFamily: "Inter, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem 1rem"
    }}>
      <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#7b2ff2", marginBottom: 16 }}>
        Mini Class: Prompting Skills
      </h1>
      <section style={{ maxWidth: 700, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #7b2ff222', padding: '2rem', marginBottom: 24 }}>
              <section style={{ maxWidth: 700, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #7b2ff222', padding: '2rem', marginBottom: 24 }}>
                <h2 style={{ fontSize: '1.3rem', color: '#7b2ff2', fontWeight: 700, marginBottom: 10 }}>3️⃣ Section Three — Jobs That Use Prompting</h2>
                <p style={{ fontSize: '1.08rem', color: '#232526', marginBottom: 12 }}>
                  <strong>This is where people get excited, because they see how prompting connects to real careers.</strong>
                </p>
                <div style={{ fontSize: '1.08rem', color: '#232526', marginBottom: 12 }}>
                  <strong>Roles that use prompting every day:</strong>
                  <ul style={{ marginTop: 6, marginBottom: 6, paddingLeft: 22 }}>
                    <li>Prompt Engineer</li>
                    <li>AI Trainer / AI Content Specialist</li>
                    <li>AI Product Manager</li>
                    <li>AI Customer Support Specialist</li>
                    <li>AI Automation Specialist</li>
                    <li>Data Analyst</li>
                    <li>Marketing &amp; Content Creators</li>
                    <li>Social Media Managers</li>
                    <li>Educators using AI tools</li>
                    <li>Developers using AI coding assistants</li>
                    <li>HR &amp; Recruiters using AI screening tools</li>
                  </ul>
                </div>
                <div style={{ fontSize: '1.08rem', color: '#232526', marginBottom: 12 }}>
                  “Prompting is becoming a core skill across industries.<br />
                  You don’t need to be technical — you just need to know how to communicate clearly.”
                </div>
                <div style={{ fontSize: '1.08rem', color: '#7b2ff2', fontWeight: 600, marginBottom: 18 }}>
                  This section shows you the value of learning prompting.
                </div>
                <div style={{ fontSize: '1.08rem', color: '#232526', background: '#f5f3fd', borderRadius: 10, padding: '1rem 1.5rem', marginBottom: 0 }}>
                  <span style={{ fontSize: '1.2rem', color: '#22b87b', fontWeight: 700 }}>🌱 Optional Section — The Magic Prompt Formula</span>
                  <div style={{ marginTop: 10, marginBottom: 10 }}>
                    <strong>Role + Task + Details + Tone + Format</strong>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <strong>Example:</strong>
                    <ul style={{ marginTop: 6, marginBottom: 6, paddingLeft: 22 }}>
                      <li>You are a career coach.</li>
                      <li>Write a 3‑sentence resume summary.</li>
                      <li>Include my customer service experience.</li>
                      <li>Make it confident and warm.</li>
                      <li>Output as bullet points.</li>
                    </ul>
                  </div>
                  <div style={{ color: '#7b2ff2', fontWeight: 600 }}>
                    This becomes your “prompting superpower.”
                  </div>
                </div>
              </section>
        <img src="/prompt%202.png" alt="Prompting in AI World" style={{ width: '100%', maxWidth: 420, borderRadius: 12, margin: '0 auto 18px auto', display: 'block', boxShadow: '0 2px 12px #7b2ff222' }} />
        <img src="/prompting%20class.png" alt="Prompting Class" style={{ width: '100%', maxWidth: 420, borderRadius: 12, margin: '0 auto 18px auto', display: 'block', boxShadow: '0 2px 12px #7b2ff222' }} />
        <h2 style={{ fontSize: '1.3rem', color: '#7b2ff2', fontWeight: 700, marginBottom: 10 }}>1️⃣ Section One — What Prompting Really Is</h2>
        <p style={{ fontSize: '1.08rem', color: '#232526', marginBottom: 12 }}>
          <strong>This is your opening. Keep it simple and human.</strong>
        </p>
        <ul style={{ fontSize: '1.08rem', color: '#232526', marginBottom: 16, paddingLeft: 22 }}>
          <li><strong>Core idea:</strong> Prompting is giving clear instructions to an AI so it can predict the best response.</li>
        </ul>
        <div style={{ fontSize: '1.08rem', color: '#232526', marginBottom: 12 }}>
          <strong>What you teach here:</strong>
          <ul style={{ marginTop: 6, marginBottom: 6, paddingLeft: 22 }}>
            <li>AI doesn’t think — it predicts</li>
            <li>Prompts guide the prediction</li>
            <li>Clear prompts = clear results</li>
            <li>Vague prompts = vague results</li>
          </ul>
        </div>
        <div style={{ fontSize: '1.08rem', color: '#232526', marginBottom: 12 }}>
          <strong>A simple example:</strong>
          <ul style={{ marginTop: 6, marginBottom: 6, paddingLeft: 22 }}>
            <li><span style={{ color: '#e67e22', fontWeight: 600 }}>Bad:</span> “Write something about my job.”</li>
            <li><span style={{ color: '#22b87b', fontWeight: 600 }}>Good:</span> “Write a 3‑sentence resume summary in a confident tone. Include my customer service experience.”</li>
          </ul>
        </div>
        <div style={{ fontSize: '1.08rem', color: '#7b2ff2', fontWeight: 600 }}>
          This section gives you the “aha” moment.
        </div>
      </section>
      <section style={{ maxWidth: 700, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #7b2ff222', padding: '2rem', marginBottom: 24 }}>
        <h2 style={{ fontSize: '1.3rem', color: '#7b2ff2', fontWeight: 700, marginBottom: 10 }}>2️⃣ Section Two — Where Prompting Fits in the AI World</h2>
        <p style={{ fontSize: '1.08rem', color: '#232526', marginBottom: 12 }}>
          <strong>This is where you show them the bigger picture.</strong>
        </p>
        <div style={{ fontSize: '1.08rem', color: '#232526', marginBottom: 12 }}>
          <strong>Prompting is used in:</strong>
          <ul style={{ marginTop: 6, marginBottom: 6, paddingLeft: 22 }}>
            <li>Chatbots</li>
            <li>Resume builders</li>
            <li>AI assistants</li>
            <li>Customer service bots</li>
            <li>Research tools</li>
            <li>Creative tools</li>
            <li>Automation systems</li>
            <li>Data analysis</li>
            <li>Coding assistants</li>
          </ul>
        </div>
        <div style={{ fontSize: '1.08rem', color: '#232526', marginBottom: 12 }}>
          <strong>Workflow:</strong>
          <ol style={{ marginTop: 6, marginBottom: 6, paddingLeft: 22 }}>
            <li>User gives a prompt</li>
            <li>AI interprets the instructions</li>
            <li>AI predicts the best response</li>
            <li>User refines the prompt</li>
            <li>AI improves the output</li>
          </ol>
        </div>
        <div style={{ fontSize: '1.08rem', color: '#7b2ff2', fontWeight: 600 }}>
          This helps you understand prompting as a skill, not a trick.
        </div>
      </section>
      <section style={{ maxWidth: 700, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #7b2ff222', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.15rem', color: '#7b2ff2', fontWeight: 700, marginBottom: 10 }}>Interactive Practice</h2>
        <p style={{ fontSize: '1.08rem', color: '#232526', marginBottom: 12 }}>
          Enter a prompt below and see how an AI might respond:
        </p>
        <form onSubmit={handlePracticeSubmit} style={{ width: '100%', marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Type your prompt here..."
            value={practicePrompt}
            onChange={e => setPracticePrompt(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: 8, border: '1.5px solid #7b2ff2', fontSize: '1rem', marginBottom: 8 }}
          />
          <button type="submit" style={{ background: '#7b2ff2', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '10px 18px', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
            See AI Response
          </button>
        </form>
        {practiceResponse && (
          <div style={{ background: '#f5f3fd', borderRadius: 8, padding: '1rem', color: '#232526', fontSize: '1.08rem', whiteSpace: 'pre-line', boxShadow: '0 1px 6px #7b2ff222' }}>
            {practiceResponse}
          </div>
        )}
      </section>
    </main>
  );
}
