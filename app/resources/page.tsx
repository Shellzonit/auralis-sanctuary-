import Link from 'next/link';
import Image from 'next/image';

export default function ResourcesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f5f3fd', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
      <section style={{ width: '100%', maxWidth: 700, margin: '3rem auto 2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)', borderRadius: 24, boxShadow: '0 4px 32px #18191a22', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <h1 style={{ color: 'rgba(255,255,255,0.97)', fontSize: '2.2rem', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1.5px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.18, paddingBottom: '0.18em' }}>Resources</h1>
        <div style={{ color: '#ece9fc', fontSize: '1.15rem', fontWeight: 500, marginTop: 10, textAlign: 'center', maxWidth: 500, textShadow: '0 1px 6px #18191a55' }}>
          Resources for career transition, upskilling, and support in the AI era.
        </div>
      </section>
      <section style={{ background: '#fff', borderRadius: 16, padding: '32px 40px', maxWidth: 900, margin: '0 auto 48px auto', boxShadow: '0 2px 16px #18191a22', color: '#18191a', textAlign: 'center', fontSize: '1.12rem', lineHeight: 1.7, border: '1.5px solid #e0d6f7' }}>
        <h2 style={{ color: '#7b2ff2', fontSize: '1.3rem', marginBottom: 18 }}>AI Learning & Upskilling</h2>
        <ul style={{ textAlign: 'left', margin: '0 auto 24px auto', maxWidth: 600, paddingLeft: 0, listStyle: 'none' }}>
          <li style={{ marginBottom: 12 }}>
            <a href="https://www.coursera.org/collections/ai-reskilling" target="_blank" rel="noopener noreferrer" style={{ color: '#7b9fff', fontWeight: 600 }}>AI Reskilling Programs (Coursera)</a> – Free and paid courses for AI skills.
          </li>
          <li style={{ marginBottom: 12 }}>
            <a href="https://www.edx.org/learn/retraining" target="_blank" rel="noopener noreferrer" style={{ color: '#7b9fff', fontWeight: 600 }}>Workforce Retraining (edX)</a> – Upskill for new tech careers.
          </li>
          <li style={{ marginBottom: 12 }}>
            <a href="https://www.elementsofai.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#7b9fff', fontWeight: 600 }}>Elements of AI</a> – Free, beginner-friendly AI course.
          </li>
        </ul>
        <h2 style={{ color: '#7b2ff2', fontSize: '1.3rem', marginBottom: 18 }}>AI Tools & Platforms</h2>
        <ul style={{ textAlign: 'left', margin: '0 auto 24px auto', maxWidth: 600, paddingLeft: 0, listStyle: 'none' }}>
          <li style={{ marginBottom: 12 }}>
            <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#7b9fff', fontWeight: 600 }}>ChatGPT (OpenAI)</a> – AI-powered chat and writing assistant.
          </li>
          <li style={{ marginBottom: 12 }}>
            <a href="https://www.copy.ai/" target="_blank" rel="noopener noreferrer" style={{ color: '#7b9fff', fontWeight: 600 }}>Copy.ai</a> – AI content and copywriting tool.
          </li>
          <li style={{ marginBottom: 12 }}>
            <a href="https://www.canva.com/ai/" target="_blank" rel="noopener noreferrer" style={{ color: '#7b9fff', fontWeight: 600 }}>Canva AI</a> – AI-powered design tools.
          </li>
        </ul>
        <h2 style={{ color: '#7b2ff2', fontSize: '1.3rem', marginBottom: 18 }}>AI Communities & Support</h2>
        <ul style={{ textAlign: 'left', margin: '0 auto 24px auto', maxWidth: 600, paddingLeft: 0, listStyle: 'none' }}>
          <li style={{ marginBottom: 12 }}>
            <a href="https://www.reddit.com/r/MachineLearning/" target="_blank" rel="noopener noreferrer" style={{ color: '#7b9fff', fontWeight: 600 }}>Reddit: r/MachineLearning</a> – Community for AI news and discussion.
          </li>
          <li style={{ marginBottom: 12 }}>
            <a href="https://discord.com/invite/ai" target="_blank" rel="noopener noreferrer" style={{ color: '#7b9fff', fontWeight: 600 }}>AI Discord Community</a> – Chat and learn with others interested in AI.
          </li>
          <li style={{ marginBottom: 12 }}>
            <a href="https://mhanational.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#7b9fff', fontWeight: 600 }}>Mental Health Support (Mental Health America)</a> – Wellbeing resources for career change.
          </li>
        </ul>
      </section>
    </main>
  );
}
