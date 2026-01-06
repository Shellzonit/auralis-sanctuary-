import Link from 'next/link';

const mainLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'AI Jobs', href: '/new-ai-jobs' },
  { name: 'Transitional Jobs', href: '/transitional-phasing-jobs' },
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
      background: '#7b2c2c',
      color: '#ffd700',
      padding: '2.2rem 0 1.2rem 0',
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderTop: '3px solid #18191a',
      boxShadow: '0 -2px 16px #18191a22',
      fontFamily: 'Inter, sans-serif',
      fontSize: '1rem',
    }}>
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
          borderRadius: 16,
          padding: '0.7rem 2rem',
          boxShadow: '0 2px 12px #18191a22',
          border: '2px solid #ffd700',
        }}>
          {mainLinks.map(link => (
            <Link key={link.name} href={link.href} style={{ color: '#7b2c2c', textDecoration: 'none', fontWeight: 700, letterSpacing: '0.04em', transition: 'color 0.2s', fontSize: '1.08rem' }}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div style={{ marginTop: 6, fontSize: '0.95rem', color: '#ece9fc', opacity: 0.7 }}>
        © {new Date().getFullYear()} Sanctuary. All rights reserved.
      </div>
    </footer>
  );
}
