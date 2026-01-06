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
        {/* ...existing resource sections... */}
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ color: '#7b2ff2', fontSize: '1.3rem', marginBottom: 18 }}>Job Boards & Career Sites</h2>
          <ul>
            <li><a href="https://www.indeed.com" target="_blank" rel="noopener" style={{ color: '#7b2ff2', fontWeight: 600 }}>Indeed</a></li>
            <li><a href="https://www.linkedin.com/jobs" target="_blank" rel="noopener" style={{ color: '#7b2ff2', fontWeight: 600 }}>LinkedIn Jobs</a></li>
            <li><a href="https://www.flexjobs.com" target="_blank" rel="noopener" style={{ color: '#7b2ff2', fontWeight: 600 }}>FlexJobs</a></li>
            <li><a href="https://www.remoteworkhub.com" target="_blank" rel="noopener" style={{ color: '#7b2ff2', fontWeight: 600 }}>Remote Work Hub</a></li>
          </ul>
          {/* ...repeat for other resource sections, updating color and style as above... */}
        </div>
      </section>
    </main>
  );
            <li><a href="https://www.resumeworded.com" target="_blank" rel="noopener" className="text-yellow-200 underline">Resume Worded</a></li>
            <li><a href="https://www.interviewbit.com" target="_blank" rel="noopener" className="text-yellow-200 underline">InterviewBit</a></li>
            <li><a href="https://www.themuse.com/advice/interview-questions-and-answers" target="_blank" rel="noopener" className="text-yellow-200 underline">The Muse: Interview Q&A</a></li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-purple-200">Events & Webinars</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li><a href="https://www.eventbrite.com" target="_blank" rel="noopener" className="text-yellow-200 underline">Eventbrite</a></li>
            <li><a href="https://www.careereco.com" target="_blank" rel="noopener" className="text-yellow-200 underline">CareerEco Virtual Fairs</a></li>
            <li><a href="https://www.linkedin.com/events/" target="_blank" rel="noopener" className="text-yellow-200 underline">LinkedIn Events</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
