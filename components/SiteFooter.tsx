import Link from 'next/link';

const mainLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'AI Jobs', href: '/new-ai-jobs' },
  { name: 'Recovery Hub', href: '/recovery' },
  { name: 'Hiring Event', href: '/hiring-events' },
  { name: 'Training', href: '/training' },
  { name: 'Resume Wizard', href: '/resume-wizard' },
  { name: 'Resources', href: '/resources' },
  { name: 'States/Country', href: '/states' },
];

export default function SiteFooter() {
  return (
    <footer style={{
      width: '100%',
      background: '#7b2ff2',
      color: '#ffd700',
      marginTop: 'auto',
      borderTop: '3px solid #18191a',
      boxShadow: '0 -2px 16px #18191a22',
      fontFamily: 'Inter, Arial, sans-serif',
      fontSize: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      letterSpacing: '0.01em',
    }}>
      <div style={{ width: '100%', maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', boxSizing: 'border-box' }}>
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 18,
      }}>
        <nav style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.2rem',
          justifyContent: 'center',
          background: '#fff',
          borderRadius: 18,
          padding: '0.9rem 2.2rem',
          boxShadow: '0 2px 16px #7b2ff222',
          border: '2px solid #ffd700',
          alignItems: 'center',
        }}>
          {mainLinks.map(link => (
            <Link key={link.name} href={link.href} style={{ color: '#7b2ff2', textDecoration: 'none', fontWeight: 700, letterSpacing: '0.04em', transition: 'color 0.2s', fontSize: '1.08rem', padding: '0.3rem 1.1rem', borderRadius: '8px' }}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div style={{ marginTop: 6, fontSize: '0.97rem', color: '#fff', opacity: 0.8, textAlign: 'center', fontWeight: 500, letterSpacing: '0.02em' }}>
        © {new Date().getFullYear()} Sanctuary. All rights reserved.
      </div>
      </div>
    </footer>
  );
}
