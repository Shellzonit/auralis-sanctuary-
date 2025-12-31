import React, { useState, useRef, useEffect } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const initialBotMessage = "Hi! I'm your AI assistant. Ask me anything about AI, jobs, or this site!";

export default function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: initialBotMessage }
  ]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  function handleSend() {
    if (!input.trim()) return;
    const userMessage: Message = { sender: 'user', text: input };
    setMessages((msgs: Message[]) => [...msgs, userMessage]);
    setInput('');
    // Simulate bot reply
    setTimeout(() => {
      const botMessage: Message = { sender: 'bot', text: getBotReply(input) };
      setMessages((msgs: Message[]) => [...msgs, botMessage]);
    }, 700);
  }

  function getBotReply(userInput: string) {
    // Simple canned responses for demo
    if (/job|work|career/i.test(userInput)) return "AI is transforming the job market! Explore our AI jobs section for more info.";
    if (/ai|artificial/i.test(userInput)) return "AI stands for Artificial Intelligence. It's changing the world in many ways!";
    if (/hello|hi|hey/i.test(userInput)) return "Hello! How can I help you today?";
    if (/help|support/i.test(userInput)) return "I'm here to answer your questions about AI and this site.";
    return "That's interesting! Ask me anything about AI, jobs, or this site.";
  }

  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 100,
          background: '#C2A86C',
          color: '#232526',
          border: 'none',
          borderRadius: '50%',
          width: 60,
          height: 60,
          boxShadow: '0 2px 12px #C2A86C55',
          fontSize: 28,
          fontWeight: 700,
          cursor: 'pointer',
        }}
        aria-label="Open chat"
      >💬</button>
      {open && (
        <div style={{
          position: 'fixed',
          bottom: 100,
          right: 32,
          width: 320,
          maxHeight: 420,
          background: 'rgba(30, 30, 40, 0.98)',
          borderRadius: 16,
          boxShadow: '0 2px 24px #2a1a4d99',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 101,
        }}>
          <div style={{ padding: '14px 18px', borderBottom: '1px solid #C2A86C33', color: '#C2A86C', fontWeight: 700, fontSize: '1.1rem' }}>
            AI Chat Assistant
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px 14px', background: 'none' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                marginBottom: 10,
                textAlign: msg.sender === 'user' ? 'right' : 'left',
              }}>
                <span style={{
                  display: 'inline-block',
                  background: msg.sender === 'user' ? '#C2A86C' : '#fff8dc',
                  color: msg.sender === 'user' ? '#232526' : '#2a1a4d',
                  borderRadius: 12,
                  padding: '7px 14px',
                  fontSize: '1rem',
                  maxWidth: 220,
                  wordBreak: 'break-word',
                  boxShadow: msg.sender === 'user' ? '0 2px 8px #C2A86C33' : '0 2px 8px #fff8dc33',
                }}>{msg.text}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid #C2A86C33', background: 'none' }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
              placeholder="Type your question..."
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                padding: '10px 12px',
                borderRadius: 0,
                fontSize: '1rem',
                background: 'rgba(255,255,255,0.07)',
                color: '#fff8dc',
              }}
              aria-label="Type your question"
            />
            <button
              onClick={handleSend}
              style={{
                background: '#C2A86C',
                color: '#232526',
                border: 'none',
                borderRadius: 0,
                padding: '0 18px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
              }}
              aria-label="Send message"
            >Send</button>
          </div>
        </div>
      )}
    </>
  );
}
