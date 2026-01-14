import { bots } from "../../data/bots";
import { useRouter } from "next/router";

export default function BotRoom({ params }: { params: { bot: string } }) {
  const botId = params.bot;
  const bot = bots.find(b =>
    b.name.toLowerCase().replace(/[^a-z0-9]/g, "").includes(botId)
  );

  if (!bot) {
    return <div style={{ padding: 40, textAlign: 'center' }}>Bot not found.</div>;
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f5f3fd', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
      <section style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #18191a22', padding: 32, maxWidth: 420, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={bot.image} alt={bot.name} width={180} height={180} style={{ borderRadius: 14, marginBottom: 18 }} />
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#7b2ff2', margin: '0 0 10px 0' }}>{bot.name}</h1>
        <p style={{ color: '#444', fontSize: '1.08rem', textAlign: 'center', marginBottom: 24 }}>{bot.desc}</p>
        <div style={{ color: '#888', fontSize: '1rem', marginBottom: 8 }}>[Bot chat coming soon]</div>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return bots.map(bot => ({ bot: bot.name.toLowerCase().replace(/[^a-z0-9]/g, "") }));
}
