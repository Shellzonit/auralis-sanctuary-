import './privacy.css';

export default function PrivacyPage() {
  return (
    <main className="privacy">
      <h1 className="privacy-title">Privacy Policy</h1>

      <p className="privacy-intro">
        A clear, gentle explanation of how this Sanctuary treats your presence.
      </p>

      <section className="privacy-section">
        <h2 className="section-title">Our Approach to Privacy</h2>
        <p className="section-text">
          This Sanctuary was built with intention: no accounts, no logins, no algorithms,
          no hidden tracking, no pressure. Your presence here is not a product. Your voice
          is not data to be harvested. This space exists for expression — not extraction.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="section-title">What We Collect</h2>
        <p className="section-text">
          Very little. We do not require accounts. We do not ask for personal information.
          We do not track your identity. We do not store your messages as a profile.
          The only information that may pass through the system is what you choose to share
          in the chat itself — and even then, it is treated as temporary conversation.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="section-title">What We Do Not Collect</h2>
        <p className="section-text">
          We do not collect names, emails, locations, browsing history, device fingerprints,
          behavioral analytics, advertising data, or personal identifiers of any kind.
          There are no algorithms watching you. There is no surveillance layer beneath your creativity.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="section-title">How the Chat Works</h2>
        <p className="section-text">
          The chat is a flowing stream — not a database. Messages appear, are read, and then fade.
          Moderators may remove harmful content to keep the space safe, but nothing here is used
          to build profiles, predictions, or targeted anything.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="section-title">Links You Share</h2>
        <p className="section-text">
          If you share music, art, writing, or videos, they are displayed only for conversation.
          We do not store them, track them, or analyze them.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="section-title">Cookies & Tracking</h2>
        <p className="section-text">
          We use no tracking cookies, no analytics, no third‑party advertising scripts,
          and no hidden pixels. Your visit is your own.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="section-title">Your Control</h2>
        <p className="section-text">
          You may share as much or as little as you want, remain anonymous, delete your own messages
          (if enabled), request moderation support, and leave at any time. Your presence is voluntary
          and respected.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="section-title">Our Promise</h2>
        <p className="section-text">
          This Sanctuary will always prioritize safety, transparency, minimal data use,
          and respect for your boundaries. We will never sell, trade, or misuse your information.
          We will never turn this space into a surveillance platform.
        </p>
      </section>

      <p className="closing-note">
        This is a place built on care — where your creativity is honored, not harvested.
        Your privacy is part of the ritual.
      </p>
    </main>
  );
}
