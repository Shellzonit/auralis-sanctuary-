import React from "react";
import { bots } from "../../data/bots";
import { useRouter } from "next/router";

export default function BotRoom({ params }: { params: { bot: string } }) {
  const botId = params.bot.toLowerCase();
  // Normalize bot names to slugs for matching (use dashes to match VR room filenames)
  const slugify = (name: string) =>
    name
      .toLowerCase()
      .replace(/[—–]/g, "-") // replace em/en dashes with hyphen
      .replace(/[^a-z0-9]+/g, "-") // replace non-alphanum with hyphen
      .replace(/^-+|-+$/g, "") // trim leading/trailing hyphens
  ;
  // Add fallback aliases for Donna
  const bot = bots.find(b => {
    const slug = slugify(b.name);
    if (slug === botId) return true;
    // Donna fallback aliases
    if (botId === "donna" && slug.includes("donnaentertainmentbot")) return true;
    if (botId === "entertainmentbot" && slug.includes("donnaentertainmentbot")) return true;
    return false;
  });
  const botSlug = slugify(bot?.name || "");
  const vrRoomUrl = `/${botSlug}-vr-room.html`;

  const [input, setInput] = React.useState("");
  const [chat, setChat] = React.useState<{ author: string; text: string; avatar?: string | null }[]>([]);
  const [loading, setLoading] = React.useState(false);

  if (!bot) {
    return <div style={{ padding: 40, textAlign: 'center' }}>Bot not found.</div>;
  }

  // Custom Donna room enhancements
  const isDonna = bot.name.toLowerCase().includes("donna");
  const isAnna = bot.name.toLowerCase().includes("anna");
  const isShaunia = bot.name.toLowerCase().includes("shaunia");
  const isMrNanny = bot.name.toLowerCase().includes("mr. nanny");
  const isRelocation = bot.name.toLowerCase().includes("relocation");
  const isSilver = bot.name.toLowerCase().includes("silver");
  const isWilliam = bot.name.toLowerCase().includes("william");
  const isEntertainment = bot.name.toLowerCase().includes("entertainment bot");
  const donnaGreeting = "Welcome to Donna's Entertainment Lounge! Ask me for movie, music, or fun recommendations.";
  const entertainmentWidgets = isDonna ? (
    <div style={{ margin: '24px 0', width: '100%' }}>
      <h3 style={{ color: '#e94f7a', fontWeight: 700, marginBottom: 8 }}>🎬 Movie Pick:</h3>
      <div style={{ background: '#fffbe6', borderRadius: 8, padding: 12, marginBottom: 12 }}>
        Try watching "Paddington 2" for a feel-good family movie!
      </div>
      <h3 style={{ color: '#7b2ff2', fontWeight: 700, marginBottom: 8 }}>🎵 Music Suggestion:</h3>
      <div style={{ background: '#e6f7ff', borderRadius: 8, padding: 12, marginBottom: 12 }}>
        Listen to "Uptown Funk" by Mark Ronson ft. Bruno Mars for instant energy!
      </div>
      <h3 style={{ color: '#f7b32b', fontWeight: 700, marginBottom: 8 }}>🎲 Fun Fact:</h3>
      <div style={{ background: '#f7f7fa', borderRadius: 8, padding: 12 }}>
        Did you know? The longest running TV show is "The Simpsons"!
      </div>
    </div>
  ) : null;

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    const userMsg = { author: "You", text: input, avatar: null };
    setChat(prev => [...prev, userMsg]);
    setInput("");
    try {
      let url = `/chat/${botId}`;
      if (botId === "anna") {
        url = "http://127.0.0.1:8000/chat/anna";
      }
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userMsg),
      });
      const data = await res.json();
      if (data && data.bot_reply) {
        setChat(prev => [...prev, { author: bot.name, text: data.bot_reply, avatar: bot.image }]);
      } else if (data && (data.reply || data["anna_reply"])) {
        // Support legacy reply keys if present
        setChat(prev => [...prev, { author: bot.name, text: data.reply || data["anna_reply"], avatar: bot.image }]);
      } else if (data && data.message) {
        setChat(prev => [...prev, { author: bot.name, text: data.message, avatar: bot.image }]);
      }
    } catch (err) {
      setChat(prev => [...prev, { author: bot.name, text: "Sorry, something went wrong.", avatar: bot.image }]);
    }
    setLoading(false);
  };

  return (
    <main style={{ minHeight: '100vh', background: isDonna ? 'linear-gradient(135deg, #f7b32b 0%, #e94f7a 100%)' : '#f5f3fd', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
      <section style={{ background: '#fff', borderRadius: 18, boxShadow: isDonna ? '0 4px 32px #e94f7a33' : '0 2px 16px #18191a22', padding: 32, maxWidth: 480, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={bot.image} alt={bot.name} width={200} height={200} style={{ borderRadius: 18, marginBottom: 18, border: isDonna ? '4px solid #e94f7a' : 'none' }} />
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: isDonna ? '#e94f7a' : '#7b2ff2', margin: '0 0 10px 0', letterSpacing: isDonna ? '2px' : '0' }}>{bot.name}</h1>
        <p style={{ color: '#444', fontSize: '1.12rem', textAlign: 'center', marginBottom: 24 }}>{isDonna ? donnaGreeting : bot.desc}</p>
        <a href={vrRoomUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#7b2ff2', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '12px 24px', textDecoration: 'none', boxShadow: '0 2px 8px #7b2ff255', fontSize: '1.1rem', marginBottom: 16 }}>
          Launch {bot.name.split(' ')[0]}'s VR Room
        </a>
        {entertainmentWidgets}
        <div style={{ minHeight: 120, maxHeight: 200, overflowY: 'auto', marginBottom: 12, width: '100%' }}>
          {chat.map((msg, idx) => (
            <div key={idx} style={{ marginBottom: 8, textAlign: msg.author === 'You' ? 'right' : 'left' }}>
              <span style={{ fontWeight: 500, color: msg.author === 'You' ? (isDonna ? '#e94f7a' : '#7b2ff2') : '#18191a' }}>{msg.author}:</span> <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} style={{ display: 'flex', gap: 8, width: '100%' }}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={isDonna ? "Ask Donna for a movie, song, or fun tip..." : `Say hi to ${bot.name.split(' ')[0]}...`}
            style={{ flex: 1, padding: 8, borderRadius: 6, border: isDonna ? '2px solid #e94f7a' : '1px solid #e0d6f7' }}
            disabled={loading}
          />
          <button type="submit" disabled={loading || !input.trim()} style={{ background: isDonna ? '#e94f7a' : '#7b2ff2', color: '#fff', border: 'none', borderRadius: 6, padding: '0 16px', fontWeight: 700 }}>
            {loading ? '...' : 'Send'}
          </button>
        </form>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return bots.map(bot => ({ bot: bot.name.toLowerCase().replace(/[^a-z0-9]/g, "") }));
}
