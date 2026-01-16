"use client";


import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const curatedNews = [
  {
    title: "AI Data Centers: Powering the Future",
    summary: "Major investments in AI data centers are reshaping the global tech landscape. Companies are building massive, energy-efficient facilities to support the next generation of AI models.",
    image: "/ai homepage.png",
    article: `\
      <p><strong>AI Data Centers: Powering the Future</strong></p>
      <p>Major tech companies are investing billions in new data centers designed specifically for artificial intelligence workloads. These facilities use advanced cooling, renewable energy, and custom hardware to train and deploy large AI models. The trend is driving innovation in both infrastructure and sustainability, with new centers opening in North America, Europe, and Asia. Experts predict that by 2030, AI data centers will account for a significant share of global computing power.</p>
    `
  },
  {
    title: "New AI Programs Revolutionize Healthcare",
    summary: "AI-driven diagnostics and patient care programs are being adopted in hospitals worldwide, improving outcomes and reducing costs.",
    image: "/healthy.png",
    article: `\
      <p><strong>New AI Programs Revolutionize Healthcare</strong></p>
      <p>Hospitals and clinics are rapidly adopting AI-powered tools for diagnostics, patient monitoring, and personalized treatment. Recent studies show that AI can detect certain diseases earlier than traditional methods, leading to better patient outcomes. In addition, AI is helping to reduce administrative burdens and streamline workflows, allowing healthcare professionals to focus more on patient care.</p>
    `
  },
  {
    title: "World News: AI Policy and Ethics",
    summary: "Governments are enacting new policies to address AI safety, ethics, and workforce impact. International summits are underway to coordinate global standards.",
    image: "/education.png",
    article: `\
      <p><strong>World News: AI Policy and Ethics</strong></p>
      <p>As AI technologies become more widespread, governments around the world are introducing new regulations to ensure safety, transparency, and ethical use. Recent international summits have focused on creating common standards for AI development and deployment. Key topics include data privacy, algorithmic bias, and the impact of automation on jobs. Policymakers are working with industry leaders and researchers to shape the future of AI governance.</p>
    `
  },
  {
    title: "Vlog: Inside a Next-Gen AI Lab",
    summary: "Go behind the scenes with a leading AI researcher as they tour a state-of-the-art AI lab and discuss the latest breakthroughs.",
    image: "/ai around the world.png",
    article: `\
      <p><strong>Vlog: Inside a Next-Gen AI Lab</strong></p>
      <p>Join Dr. Lin, a leading AI researcher, for an exclusive look inside a next-generation AI laboratory. The tour covers the latest robotics, natural language processing demos, and interviews with engineers working on cutting-edge projects. The lab’s collaborative environment and focus on real-world applications highlight the exciting future of artificial intelligence.</p>
    `
  }
];

const aiMusic = [
  {
    title: "AI Composes a Symphony",
    artist: "SynthAI Orchestra",
    summary: "A new AI model has composed a full-length symphony, blending classical and modern styles. The piece is being performed by major orchestras worldwide.",
    image: "/ai-music.png",
    article: `<p><strong>AI Composes a Symphony</strong></p><p>AI-driven music composition is reaching new heights. The SynthAI Orchestra recently debuted a symphony written entirely by an advanced neural network, receiving critical acclaim for its emotional depth and technical complexity.</p>`
  },
  {
    title: "Vocaloid Revolution: AI Singers Rise",
    artist: "VocaloidX",
    summary: "AI-powered virtual singers are topping the charts, with millions of fans streaming their music online.",
    image: "/ai-vocaloid.png",
    article: `<p><strong>Vocaloid Revolution: AI Singers Rise</strong></p><p>Virtual singers powered by AI, like VocaloidX, are captivating audiences with their unique voices and performances. The technology is opening new creative possibilities for musicians and producers.</p>`
  }
];

const aiArt = [
  {
    title: "AI Wins Art Competition",
    artist: "ArtBot 3000",
    summary: "An AI-generated painting has won a prestigious international art competition, sparking debate about creativity and authorship.",
    image: "/ai-art.png",
    article: `<p><strong>AI Wins Art Competition</strong></p><p>ArtBot 3000's painting, created using generative adversarial networks, was awarded first prize at the Global Art Expo. Judges praised its originality and technique, while artists discuss the implications for the future of art.</p>`
  },
  {
    title: "Generative Art Galleries Expand",
    artist: "GalleryAI",
    summary: "Galleries dedicated to AI-generated art are opening in major cities, attracting collectors and tech enthusiasts alike.",
    image: "/ai-gallery.png",
    article: `<p><strong>Generative Art Galleries Expand</strong></p><p>GalleryAI, a new chain of galleries, showcases works created by artificial intelligence. The movement is redefining what it means to be an artist in the digital age.</p>`
  },
  {
    title: "WilliamBot's Portraits Go Viral",
    artist: "WilliamBot (ArtistBot)",
    summary: "AI artist WilliamBot's digital portraits are trending on social media, inspiring a new wave of creative collaborations.",
    image: "/william-bot-art.png",
    article: `<p><strong>WilliamBot's Portraits Go Viral</strong></p><p>WilliamBot, the ArtistBot, has taken the art world by storm with its unique digital portraits. Fans and human artists are remixing and collaborating with WilliamBot, blurring the lines between human and machine creativity.</p>`
  },
  {
    title: "AI Animators Create Short Films",
    artist: "FrameGen AI",
    summary: "AI-powered animation tools are enabling indie creators to produce stunning short films with minimal resources.",
    image: "/ai-animation.png",
    article: `<p><strong>AI Animators Create Short Films</strong></p><p>FrameGen AI's animation suite lets anyone create high-quality animated shorts. The technology is democratizing filmmaking and giving rise to a new generation of storytellers.</p>`
  }
];

const aiFun = [
  {
    title: "AI Stand-Up Comedians Debut",
    performer: "LaughBot",
    summary: "AI-powered comedians are performing live, generating jokes on the fly and interacting with audiences.",
    image: "/ai-comedy.png",
    article: `<p><strong>AI Stand-Up Comedians Debut</strong></p><p>LaughBot, the world's first AI stand-up comedian, is making crowds laugh with original, real-time jokes. Comedy clubs are experimenting with human-AI improv nights for extra fun.</p>`
  },
  {
    title: "Virtual Pet Companions Get Smarter",
    performer: "PetPal AI",
    summary: "AI pets are learning new tricks, responding to emotions, and even helping kids with homework.",
    image: "/ai-pet.png",
    article: `<p><strong>Virtual Pet Companions Get Smarter</strong></p><p>PetPal AI's virtual pets are more lifelike than ever, offering companionship, entertainment, and educational support for families worldwide.</p>`
  },
  {
    title: "AI Game Masters Run D&D Adventures",
    performer: "DungeonAI",
    summary: "AI-powered game masters are running interactive tabletop RPGs, creating custom quests and characters on demand.",
    image: "/ai-dnd.png",
    article: `<p><strong>AI Game Masters Run D&D Adventures</strong></p><p>DungeonAI is revolutionizing tabletop gaming by generating unique adventures, NPCs, and storylines for every session. Players say the AI keeps things fresh and surprising.</p>`
  }
];

export default function AINewsPage() {
  // Carlotta's event stories state
  const [eventStories, setEventStories] = useState<any[]>([]);
  const [eventLoading, setEventLoading] = useState(false);
  const [eventError, setEventError] = useState<string | null>(null);

  useEffect(() => {
    setEventLoading(true);
    fetch("/api/carlotta-event-stories")
      .then(res => res.json())
      .then(data => {
        setEventStories(Array.isArray(data.stories) ? data.stories : []);
        setEventLoading(false);
      })
      .catch(e => {
        setEventError("Failed to load Carlotta's event stories.");
        setEventLoading(false);
      });
  }, []);

  // Live news state
  const [liveNews, setLiveNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("/api/ai-news")
      .then(res => res.json())
      .then(data => {
        setLiveNews(Array.isArray(data.news) ? data.news : []);
        setLoading(false);
      })
      .catch(e => {
        setError("Failed to load live news.");
        setLoading(false);
      });
  }, []);

  return (
    <main
      id="main-content"
      style={{
        minHeight: '100vh',
        width: '100%',
        background: '#f5f3fd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      role="main"
      tabIndex={-1}
    >
      {/* Banner */}
      <section style={{
        width: '100%',
        maxWidth: 900,
        margin: '2.5rem auto 2rem auto',
        background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)',
        borderRadius: 28,
        boxShadow: '0 4px 32px #18191a22',
        padding: '2.5rem 0 2.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        <h1
          style={{
            color: '#fff',
            fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
            fontWeight: 800,
            fontFamily: 'var(--font-geist-sans), Inter, Segoe UI, Arial, sans-serif',
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin: 0,
            width: '100%',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative',
            zIndex: 2,
            textShadow: '0 2px 8px #8882',
            lineHeight: 1.18,
            paddingBottom: '0.18em',
          }}
        >
          AI News
        </h1>
        <div style={{
          color: '#fff',
          fontSize: '1.25rem',
          fontWeight: 500,
          marginTop: 12,
          textAlign: 'center',
          maxWidth: 600,
          textShadow: '0 1px 6px #222',
        }}>
          Stay updated with the latest stories in Artificial Intelligence: data centers, programs, world news, and vlogs.
        </div>
      </section>
      {/* Carlotta's Event Stories */}
      <section style={{ width: '100%', maxWidth: 900, margin: '0 auto 2rem auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ background: '#fffbe6', color: '#b26a00', border: '1px solid #ffe58f', borderRadius: 8, padding: '12px 18px', marginBottom: 16, fontSize: '1.05rem' }}>
          <strong>Disclaimer:</strong> These event stories are original and AI-generated by Carlotta the News Bot. They are for informational and entertainment purposes only.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 8 }}>
          <Image src="/carlotta.jpg" alt="Carlotta the News Bot" width={64} height={64} style={{ borderRadius: '50%', border: '2px solid #7b2ff2', background: '#fff' }} />
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#7b2ff2', margin: 0 }}>Carlotta's World AI Event Reports</h2>
            <div style={{ color: '#7b2ff2', fontWeight: 500, fontSize: '1.08rem' }}>Original stories generated by Carlotta the News Bot</div>
          </div>
        </div>
        {eventLoading && <div>Loading Carlotta's event stories...</div>}
        {eventError && <div style={{ color: 'red' }}>{eventError}</div>}
        {eventStories.map((story, idx) => (
          <article key={story.name || idx} style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 16px #18191a22',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '24px',
            gap: '2rem',
            border: '1.5px solid #e0d6f7',
          }}>
            <div style={{ minWidth: 180, maxWidth: 220 }}>
              <Image src="/carlotta.jpg" alt="Carlotta the News Bot" width={120} height={120} style={{ borderRadius: 12, objectFit: 'cover', width: '100%', height: 'auto' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2a4365', marginBottom: 8 }}>{story.name}</h3>
              <p style={{ color: '#888', fontSize: '1.05rem', marginBottom: 8 }}>{story.start} | {story.location}</p>
              <details open>
                <summary style={{ color: '#7b2ff2', fontWeight: 600, textDecoration: 'underline', fontSize: '1.08rem', cursor: 'pointer' }}>Read Carlotta's Report</summary>
                <div style={{ marginTop: 12, whiteSpace: 'pre-line' }}>{story.story}</div>
              </details>
              {story.url && (
                <a href={story.url} target="_blank" rel="noopener noreferrer" style={{ color: '#7b2ff2', fontWeight: 600, textDecoration: 'underline', fontSize: '1.08rem', marginTop: 8, display: 'inline-block' }}>Event Link</a>
              )}
            </div>
          </article>
        ))}
      </section>
      {/* Removed duplicate Carlotta's Live AI News section as requested */}
      {/* Curated News */}
      <section style={{ width: '100%', maxWidth: 900, margin: '0 auto 2rem auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#2a4365', marginBottom: 8 }}>Curated AI Stories</h2>
        {curatedNews.map((story, idx) => (
          <article key={idx} style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 16px #18191a22',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '24px',
            gap: '2rem',
            border: '1.5px solid #e0d6f7',
          }}>
            <div style={{ minWidth: 180, maxWidth: 220 }}>
              <Image src={story.image} alt={story.title} width={220} height={120} style={{ borderRadius: 12, objectFit: 'cover', width: '100%', height: 'auto' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2a4365', marginBottom: 8 }}>{story.title}</h3>
              <p style={{ color: '#444', fontSize: '1.08rem', marginBottom: 8 }}>{story.summary}</p>
              <details>
                <summary style={{ color: '#7b2ff2', fontWeight: 600, textDecoration: 'underline', fontSize: '1.08rem', cursor: 'pointer' }}>Read full article</summary>
                <div style={{ marginTop: 12 }} dangerouslySetInnerHTML={{ __html: story.article }} />
              </details>
            </div>
          </article>
        ))}
      </section>

      {/* AI Music Section */}
      <section style={{ width: '100%', maxWidth: 900, margin: '0 auto 2rem auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#2a4365', marginBottom: 8 }}>AI Music Highlights</h2>
        {aiMusic.map((music, idx) => (
          <article key={idx} style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 16px #18191a22',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '24px',
            gap: '2rem',
            border: '1.5px solid #e0d6f7',
          }}>
            <div style={{ minWidth: 180, maxWidth: 220 }}>
              <Image src={music.image} alt={music.title} width={220} height={120} style={{ borderRadius: 12, objectFit: 'cover', width: '100%', height: 'auto' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2a4365', marginBottom: 8 }}>{music.title}</h3>
              <p style={{ color: '#888', fontSize: '1.05rem', marginBottom: 8 }}>By {music.artist}</p>
              <p style={{ color: '#444', fontSize: '1.08rem', marginBottom: 8 }}>{music.summary}</p>
              <details>
                <summary style={{ color: '#7b2ff2', fontWeight: 600, textDecoration: 'underline', fontSize: '1.08rem', cursor: 'pointer' }}>Read full article</summary>
                <div style={{ marginTop: 12 }} dangerouslySetInnerHTML={{ __html: music.article }} />
              </details>
            </div>
          </article>
        ))}
      </section>

      {/* AI Art Section */}
      <section style={{ width: '100%', maxWidth: 900, margin: '0 auto 2rem auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#2a4365', marginBottom: 8 }}>AI Art Highlights</h2>
        {aiArt.map((art, idx) => (
          <article key={idx} style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 16px #18191a22',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '24px',
            gap: '2rem',
            border: '1.5px solid #e0d6f7',
          }}>
            <div style={{ minWidth: 180, maxWidth: 220 }}>
              <Image src={art.image} alt={art.title} width={220} height={120} style={{ borderRadius: 12, objectFit: 'cover', width: '100%', height: 'auto' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2a4365', marginBottom: 8 }}>{art.title}</h3>
              <p style={{ color: '#888', fontSize: '1.05rem', marginBottom: 8 }}>By {art.artist}</p>
              <p style={{ color: '#444', fontSize: '1.08rem', marginBottom: 8 }}>{art.summary}</p>
              <details>
                <summary style={{ color: '#7b2ff2', fontWeight: 600, textDecoration: 'underline', fontSize: '1.08rem', cursor: 'pointer' }}>Read full article</summary>
                <div style={{ marginTop: 12 }} dangerouslySetInnerHTML={{ __html: art.article }} />
              </details>
            </div>
          </article>
        ))}
      </section>

      {/* AI Fun & Entertainment Section */}
      <section style={{ width: '100%', maxWidth: 900, margin: '0 auto 2rem auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#2a4365', marginBottom: 8 }}>AI Fun & Entertainment</h2>
        {aiFun.map((fun, idx) => (
          <article key={idx} style={{
            background: '#fff',
            borderRadius: 16,
            boxShadow: '0 2px 16px #18191a22',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '24px',
            gap: '2rem',
            border: '1.5px solid #e0d6f7',
          }}>
            <div style={{ minWidth: 180, maxWidth: 220 }}>
              <Image src={fun.image} alt={fun.title} width={220} height={120} style={{ borderRadius: 12, objectFit: 'cover', width: '100%', height: 'auto' }} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#2a4365', marginBottom: 8 }}>{fun.title}</h3>
              <p style={{ color: '#888', fontSize: '1.05rem', marginBottom: 8 }}>By {fun.performer}</p>
              <p style={{ color: '#444', fontSize: '1.08rem', marginBottom: 8 }}>{fun.summary}</p>
              <details>
                <summary style={{ color: '#7b2ff2', fontWeight: 600, textDecoration: 'underline', fontSize: '1.08rem', cursor: 'pointer' }}>Read full article</summary>
                <div style={{ marginTop: 12 }} dangerouslySetInnerHTML={{ __html: fun.article }} />
              </details>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
