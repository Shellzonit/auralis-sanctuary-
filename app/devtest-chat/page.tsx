import dynamic from 'next/dynamic';

const ThreadedChat = dynamic(() => import('../../components/ThreadedChat'), { ssr: false });

export default function DevTestChatPage() {
  return (
    <main style={{
      minHeight: '100vh',
      width: '100%',
      background: '#f5f3fd',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: '60px',
    }}>
      <section style={{
        width: '100%',
        maxWidth: 900,
        margin: '2.5rem auto 2rem auto',
        background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)',
        borderRadius: 18,
        boxShadow: '0 2px 16px #7b2ff222',
        padding: '2.5rem 2rem',
      }}>
        <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', textShadow: '0 2px 8px #7b2ff288', textAlign: 'center' }}>DevTest Chat Board</h1>
        <p style={{ color: '#fff', marginBottom: '1.5rem', textShadow: '0 1px 6px #7b2ff288', textAlign: 'center' }}>
          Leave a message or reply to help other developers with app testing, QA, and debugging.
        </p>
        <ThreadedChat />
      </section>
    </main>
  );
}
