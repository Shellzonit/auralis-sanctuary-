import Link from 'next/link';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'AI Jobs', href: '/new-ai-jobs' },
  { name: 'Transitional Jobs', href: '/transitional-phasing-jobs' },
  { name: 'Recovery Hub', href: '/recovery' },
  { name: 'Hiring Event', href: '/ai-hiring-events' },
  { name: 'Training', href: '/training' },
  { name: 'Resources', href: '/resources' },
  { name: 'States/Country', href: '/states' },
];

export default function SiteFooter() {
  return (
    <footer style={{
      width: '100%',
      background: 'linear-gradient(90deg, #18191a 0%, #7b2ff2 100%)',
      color: '#fff',
      padding: '1.2rem 0',
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: '0 -2px 16px #18191a22',
      fontFamily: 'Inter, sans-serif',
      fontSize: '1rem',
    }}>
      <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
        {footerLinks.map(link => (
          <Link key={link.name} href={link.href} style={{ color: '#ffd700', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.04em', transition: 'color 0.2s' }}>
            {link.name}
          </Link>
        ))}
      </nav>
      <div style={{ marginTop: 12, fontSize: '0.95rem', color: '#ece9fc', opacity: 0.7 }}>
        © {new Date().getFullYear()} Sanctuary. All rights reserved.
      </div>
    </footer>
  );
}
