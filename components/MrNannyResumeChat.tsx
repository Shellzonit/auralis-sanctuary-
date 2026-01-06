import React, { useState, useRef } from "react";

const MR_NANNY_AVATAR = "/Mr Nanny.png";

type Message = {
  id: number;
  from: string;
  text: string;
  parentId: number | undefined;
};

export default function MrNannyResumeChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "Mr. Job Nanny",
      text: "Hello! I'm Mr. Job Nanny. Let's build your resume together. Tell me about your work experience, education, or ask for tips—I'll help you step by step!",
      parentId: undefined as number | undefined,
    },
  ]);
  const [input, setInput] = useState("");
  const [replyTo, setReplyTo] = useState<number | null>(null);
  const nextId = useRef(1);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = {
      id: nextId.current++,
      from: "You",
      text: input.trim(),
      parentId: replyTo ?? undefined,
    };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput("");
    setTimeout(() => {
      // Custom logic for interview attire questions
      const lower = userMsg.text.toLowerCase();
      let reply = "Thanks for sharing! What else would you like to add to your resume? (e.g., skills, education, or ask for a summary)";
      if (
        lower.includes("interview") &&
        (lower.includes("wear") || lower.includes("dress"))
      ) {
        if (lower.includes("google")) {
          reply = `For a Google interview, business casual is ideal. Google is known for a relaxed but professional culture.\n\nFor men: A collared shirt (button-down or polo), dress pants or chinos, and clean shoes. No need for a tie or suit unless you feel most comfortable that way.\n\nFor women: A blouse or smart top, dress pants or a modest skirt, and comfortable, clean shoes.\n\nAvoid overly formal attire, but also avoid jeans, shorts, or t-shirts. Aim for neat, comfortable, and confident. Good luck!`;
        } else if (
          lower.includes("ai company") || lower.includes("artificial intelligence")
        ) {
          reply = `For an interview at an AI or tech company, business casual is usually best.\n\nFor men: A collared shirt (button-down or polo), dress pants or chinos, and clean shoes. A blazer is optional.\n\nFor women: A blouse or smart top, dress pants or a modest skirt, and comfortable, clean shoes.\n\nTech and AI companies often value comfort and individuality, so you can add a subtle personal touch, but keep it neat and professional.`;
        } else if (
          lower.includes("sales company") || lower.includes("sales job") || lower.includes("sales position")
        ) {
          reply = `For a sales company or sales job interview, dress to impress!\n\nFor men: A suit or blazer with a collared shirt and tie, dress pants, and polished shoes.\n\nFor women: A business suit, dress, or blouse with a blazer, dress pants or skirt, and professional shoes.\n\nSales roles are often client-facing, so looking sharp and confident is key. Choose classic, professional colors and avoid anything too flashy.`;
        } else if (
          lower.includes("blue collar") || lower.includes("warehouse") || lower.includes("manufacturing") || lower.includes("construction")
        ) {
          reply = `For a blue collar, warehouse, manufacturing, or construction interview, aim for clean, neat, and practical business casual.\n\nFor men: A collared shirt or polo, clean pants (khakis or dress pants), and closed-toe shoes or boots.\n\nFor women: A blouse or smart top, clean pants or a modest skirt, and closed-toe shoes.\n\nAvoid jeans, t-shirts, or work boots unless specifically told otherwise. Show you take the opportunity seriously by dressing up a bit more than the daily work attire.`;
        } else if (
          lower.includes("pet") || lower.includes("dog food") || lower.includes("mid west american pet food")
        ) {
          reply = `For an interview at a pet or dog food company like Mid West American Pet Food in Mt Pleasant, Texas, aim for business casual attire.\n\nFor men: A collared shirt (button-down or polo), dress pants or khakis, and clean shoes. A blazer is optional.\n\nFor women: A blouse or smart top, dress pants or a modest skirt, and closed-toe shoes.\n\nAvoid jeans, t-shirts, or anything too casual. Since it's a pet-related company, you can add a subtle touch (like a paw-print pin or animal-friendly accessory) if you wish, but keep it professional. Good luck!`;
        } else {
          reply = `For most interviews, business casual is a safe choice.\n\nFor men: A collared shirt, dress pants or khakis, and clean shoes. A blazer is optional.\n\nFor women: A blouse or smart top, dress pants or a modest skirt, and closed-toe shoes.\n\nIf you know the company is more formal, you can dress up a bit more. If it's a startup or creative company, you can be slightly more relaxed, but always look neat and professional.`;
        }
      } else if (
        (lower.includes("company culture") || lower.includes("work culture") || lower.includes("what is it like to work at") || lower.includes("tell me about") && lower.includes("culture"))
      ) {
        // Example: Add more companies as needed
        if (lower.includes("mid west american pet food")) {
          reply = `Mid West American Pet Food is known for its focus on quality pet nutrition and a friendly, community-oriented environment. Employees often describe the culture as supportive, with a strong emphasis on teamwork, safety, and animal welfare. As a company in the pet food industry, they value reliability, attention to detail, and a passion for pets. Expect a mix of professionalism and a genuine love for animals.`;
        } else {
          reply = `Company culture can vary, but most organizations value teamwork, communication, and a positive attitude. If you have a specific company in mind, I can try to provide more details. Otherwise, it's always a good idea to research the company's website, social media, and employee reviews for insights into their work environment and values.`;
        }
      }
      const botReply = {
        id: nextId.current++,
        from: "Mr. Job Nanny",
        text: reply,
        parentId: userMsg.id,
      };
      setMessages((msgs) => [...msgs, botReply]);
      setReplyTo(null);
    }, 700);
  }

  function renderMessages(parentId: number | undefined) {
    return messages
      .filter((m) => m.parentId === parentId)
      .map((m) => (
        <div key={m.id} style={{ marginLeft: parentId !== undefined ? 32 : 0, marginBottom: 10 }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            background: m.from === "Mr. Job Nanny" ? "#ece9fc" : "#fff",
            color: m.from === "Mr. Job Nanny" ? "#7b2ff2" : "#18191a",
            borderRadius: 10,
            padding: '10px 14px',
            boxShadow: '0 2px 8px #7b2ff222',
            maxWidth: 420,
            fontWeight: m.from === "Mr. Job Nanny" ? 700 : 400,
          }}>
            {m.from === "Mr. Job Nanny" && (
              <img src={MR_NANNY_AVATAR} alt="Mr. Nanny" width={36} height={36} style={{ borderRadius: 18, border: '2px solid #bba6f7', background: '#fff' }} />
            )}
            <div>
              <span style={{ fontSize: 13, opacity: 0.7 }}>{m.from}</span><br />
              {m.text}
            </div>
          </div>
          <button onClick={() => setReplyTo(m.id)} style={{ marginLeft: 8, fontSize: 12, color: '#7b2ff2', background: 'none', border: 'none', cursor: 'pointer' }}>Reply</button>
          {renderMessages(m.id)}
        </div>
      ));
  }

  return (
    <section style={{ maxWidth: 520, width: '100%', background: 'rgba(255,255,255,0.13)', borderRadius: 18, padding: 24, boxShadow: '0 2px 16px #7b2ff222', margin: '0 auto' }}>
      <div style={{ minHeight: 180, marginBottom: 16 }}>
        {renderMessages(undefined)}
      </div>
      <form onSubmit={handleSend} style={{ display: 'flex', gap: 8 }}>
        {replyTo !== null && (
          <span style={{ color: '#7b2ff2', fontSize: 13, alignSelf: 'center' }}>
            Replying to message #{replyTo} <button type="button" onClick={() => setReplyTo(null)} style={{ color: '#18191a', background: 'none', border: 'none', marginLeft: 4, cursor: 'pointer' }}>Cancel</button>
          </span>
        )}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your resume info or question..."
          style={{ flex: 1, padding: '10px 14px', borderRadius: 8, border: '1.5px solid #7b2ff2', fontSize: '1rem', background: '#fff', color: '#18191a' }}
        />
        <button type="submit" style={{ background: '#7b2ff2', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '10px 18px', border: 'none', cursor: 'pointer' }}>Send</button>
      </form>
    </section>
  );
}
