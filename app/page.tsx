
'use client';


import Image from 'next/image';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const tabs = [
  { href: '/', label: 'Home' },
  { href: '/states', label: 'States' },
  { href: '/jobs-at-risk', label: 'Jobs at Risk' },
  { href: '/transitional-paths', label: 'Transitional Paths' },
  { href: '/new-ai-jobs', label: 'New AI Jobs' },
];

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a141a 0%, #18191a 60%, #2a1a4d 100%)",
        color: "#fff8dc",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <header style={{ borderBottom: '1px solid #232526', padding: '20px 0' }}>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: 48, fontSize: 22, fontWeight: 500 }}>
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              style={{ color: '#ffd700', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.color = '#C2A86C')}
              onMouseOut={e => (e.currentTarget.style.color = '#ffd700')}
            >
              {tab.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center py-20">
        <h1 style={{ marginTop: 32, fontSize: '2.2rem', fontWeight: 800, color: '#C2A86C', textShadow: '0 2px 16px #2a1a4d' }}>
          Sanctuary
        </h1>
        <Image
          src="/openart-image_J9ncrrgy_1766070827956_raw.jpg"
          alt="AI Generated Art"
          width={320}
          height={200}
          style={{ borderRadius: 16, boxShadow: '0 2px 16px #2a1a4d55', margin: '32px 0' }}
        />
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#C2A86C', textShadow: '0 2px 16px #2a1a4d', marginBottom: 0 }}>
          Welcome
        </h2>
        <p style={{ marginTop: 16, fontSize: '1.15rem', maxWidth: 600, textAlign: 'center', color: '#fff8dc' }}>
          Explore transitional paths, discover new AI jobs, and protect creative legacy.
        </p>

        {/* Message Board */}
        <section style={{ marginTop: 48, width: '100%', maxWidth: 500, background: '#18191aee', borderRadius: 16, boxShadow: '0 2px 16px #2a1a4d55', padding: 24 }}>
          <h3 style={{ color: '#ffd700', fontWeight: 700, fontSize: 22, marginBottom: 16 }}>Message Board</h3>
          <MessageBoard />
        </section>

      </main>
    </div>
  );
}


type Message = {
  id?: number;
  author?: string;
  content: string;
  created_at?: string;
};

function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  async function fetchMessages() {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      setError('Failed to load messages');
    } else {
      setMessages(data || []);
    }
  }

  useEffect(() => {
    fetchMessages();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase
      .from('messages')
      .insert([{ content, author }]);
    if (error) {
      setError('Failed to post message');
    } else {
      setContent('');
      setAuthor('');
      fetchMessages();
    }
    setLoading(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Your name (optional)"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          style={{ padding: 8, borderRadius: 6, border: '1px solid #232526', background: '#232526', color: '#fff8dc' }}
        />
        <textarea
          placeholder="Leave a message..."
          value={content}
          onChange={e => setContent(e.target.value)}
          required
          rows={2}
          style={{ padding: 8, borderRadius: 6, border: '1px solid #232526', background: '#232526', color: '#fff8dc', resize: 'vertical' }}
        />
        <button type="submit" disabled={loading || !content.trim()} style={{ background: '#C2A86C', color: '#18191a', border: 'none', borderRadius: 6, padding: '8px 0', fontWeight: 700, cursor: 'pointer', marginTop: 4 }}>
          {loading ? 'Posting...' : 'Post Message'}
        </button>
        {error && <div style={{ color: '#ff6b6b', marginTop: 4 }}>{error}</div>}
      </form>
      <div style={{ maxHeight: 220, overflowY: 'auto', borderTop: '1px solid #232526', paddingTop: 8 }}>
        {messages.length === 0 && <div style={{ color: '#aaa' }}>No messages yet.</div>}
        {messages.map((msg, i) => (
          <div key={msg.id || i} style={{ marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #232526' }}>
            <div style={{ fontWeight: 600, color: '#ffd700', fontSize: 15 }}>{msg.author || 'Anonymous'}</div>
            <div style={{ color: '#fff8dc', fontSize: 16 }}>{msg.content}</div>
            <div style={{ color: '#aaa', fontSize: 12 }}>{msg.created_at ? new Date(msg.created_at).toLocaleString() : ''}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

