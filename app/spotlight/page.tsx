import './spotlight.css';

export default function SpotlightPage() {
  return (
    <main className="spotlight">
      <h1 className="spotlight-title">Spotlight</h1>
      <div className="spotlight-intro">
        Each month, we shine a light on a creator whose work inspires our community.
      </div>
      <div className="creator-name">Jane Doe</div>
      <div className="featured-work">
        <strong>Featured Work:</strong> <br />
        <a href="#" style={{ color: '#ffe7b3', textDecoration: 'underline' }}>"Celestial Dreams"</a>
      </div>
      <div className="creator-bio">
        Jane is a digital artist blending cosmic themes with surreal landscapes. Her work explores the intersection of dreams and reality, inviting viewers to journey beyond the ordinary.
      </div>
      <div className="divider"></div>
      <div className="spotlight-reason">
        Jane was chosen for her innovative approach to digital art and her positive impact on the creative community.
      </div>
      <div className="ritual-note">
        Know a creator who deserves the spotlight? Nominate them for next month!
      </div>
    </main>
  );
}
