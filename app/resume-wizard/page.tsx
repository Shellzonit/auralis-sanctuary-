"use client";


import MrNannyResumeChat from "../../components/MrNannyResumeChat";

export default function ResumeWizardPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f5f3fd', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
      <section style={{ width: '100%', maxWidth: 700, margin: '3rem auto 2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)', borderRadius: 24, boxShadow: '0 4px 32px #18191a22', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <h1 style={{ color: 'rgba(255,255,255,0.97)', fontSize: '2.2rem', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1.5px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.18, paddingBottom: '0.18em' }}>Resume Wizard</h1>
        <div style={{ color: '#ece9fc', fontSize: '1.15rem', fontWeight: 500, marginTop: 10, textAlign: 'center', maxWidth: 500, textShadow: '0 1px 6px #18191a55' }}>
          Chat with Mr. Job Nanny to build and refine your resume in a private, thread-like discussion. No downloads or exports—just real-time, supportive guidance.
        </div>
      </section>
      {/* Glossary Section */}
      <section style={{ width: '100%', maxWidth: 700, margin: '0 auto 2rem auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px #7b2ff222', padding: '1.5rem 2rem', color: '#232526', fontSize: '1.08rem', lineHeight: 1.7 }}>
        <h2 style={{ color: '#7b2ff2', fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>Resume Room Glossary</h2>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
                    <li><strong>Resume Grading:</strong> Paste your resume and ask Mr. Nanny to grade it! Try phrases like:<br/>
                      <ul>
                        <li>"Grade my resume: [paste your resume here]"</li>
                        <li>"Review my resume: [paste your resume here]"</li>
                        <li>"Score my resume: [paste your resume here]"</li>
                        <li>"How good is my resume? [paste your resume here]"</li>
                        <li>"Rate my resume: [paste your resume here]"</li>
                      </ul>
                      Mr. Nanny will give you a score and actionable feedback instantly.
                    </li>
          <li><strong>Chat with Mr. Nanny:</strong> Ask questions about resumes, interviews, or job search. Get instant, supportive feedback.</li>
          <li><strong>Interview Attire Advice:</strong> Try phrases like:<br/>
            <ul>
              <li>"What should I wear to an interview at [company/industry]?"</li>
              <li>"Is business casual okay for a tech interview?"</li>
              <li>"What do people wear at [company name]?"</li>
            </ul>
          </li>
          <li><strong>Company Culture Insights:</strong> Try phrases like:<br/>
            <ul>
              <li>"Can you tell me about the company culture at [company name]?"</li>
              <li>"What is it like to work at [company name]?"</li>
              <li>"Describe the work culture at [company/industry]."</li>
            </ul>
          </li>
          <li><strong>AI Job Openings:</strong> Try phrases like:<br/>
            <ul>
              <li>"Where can I find AI job openings?"</li>
              <li>"Are there AI jobs available in [country/city]?"</li>
              <li>"Who is hiring for AI roles in [UK/Japan/Canada/China]?"</li>
            </ul>
          </li>
          <li><strong>Pay & Salary Info:</strong> Try phrases like:<br/>
            <ul>
              <li>"What is the pay for AI jobs?"</li>
              <li>"How much do AI engineers make?"</li>
              <li>"What is the salary range for data scientists?"</li>
            </ul>
          </li>
          <li><strong>Turnover & Retention:</strong> Try phrases like:<br/>
            <ul>
              <li>"What is the turnover rate for AI jobs?"</li>
              <li>"Do people stay long at [company name]?"</li>
              <li>"Is retention high in AI companies?"</li>
            </ul>
          </li>
          <li><strong>Global AI Companies:</strong> Try phrases like:<br/>
            <ul>
              <li>"Who are the top AI companies in [UK/Japan/Canada/China]?"</li>
              <li>"List major AI employers in [country]."</li>
              <li>"What AI labs are in [city/country]?"</li>
            </ul>
          </li>
          <li><strong>VR Mock Interview:</strong> Click the “Launch VR Mock Interview Room” button to practice in a 3D virtual space with panel interviewers, voice recording, and training tips.</li>
          <li><strong>Voice Recording:</strong> In the VR room, record and play back your answers for self-evaluation.</li>
          <li><strong>Training Tips:</strong> Get instant training and improvement tips if you need help or run out of time in the VR room.</li>
          <li><strong>Panel Simulation:</strong> Practice answering questions from multiple virtual interviewers for a realistic experience.</li>
          <li><strong>Animated Avatars:</strong> Watch Mr. Nanny nod and react to your progress in the VR room.</li>
        </ul>
        <div style={{ color: '#7b2ff2', fontSize: 13, marginTop: 10 }}>Tip: Just type your question or click the VR button to get started!</div>
      </section>
      <section style={{ width: '100%', maxWidth: 900, margin: '0 auto 48px auto', background: 'none', boxShadow: 'none', color: '#18191a', textAlign: 'center', fontSize: '1.12rem', lineHeight: 1.7, border: 'none' }}>
        <MrNannyResumeChat />
      </section>
    </main>
  );
}
