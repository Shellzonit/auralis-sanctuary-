"use client";
import { useEffect, useState, useRef } from "react";
import { supabase } from '../../lib/supabaseClient';


export default function JobsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [form, setForm] = useState({ role: "", company: "", description: "", contact: "", hot: false });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("publicJobs");
    setJobs(stored ? JSON.parse(stored) : []);
  }, []);

  function approveJob(idx: number) {
    const updated = [...jobs];
    updated[idx].approved = true;
    setJobs(updated);
    localStorage.setItem("publicJobs", JSON.stringify(updated));
  }

  function removeJob(idx: number) {
    const updated = jobs.filter((_, i) => i !== idx);
    setJobs(updated);
    localStorage.setItem("publicJobs", JSON.stringify(updated));
  }

  function editJob(idx: number) {
    const job = jobs[idx];
    const newRole = prompt("Edit role:", job.role);
    if (newRole !== null) {
      const updated = [...jobs];
      updated[idx].role = newRole;
      setJobs(updated);
      localStorage.setItem("publicJobs", JSON.stringify(updated));
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.role || !form.company || !form.description || !form.contact) return;
    const newJob = { ...form, date: new Date().toISOString(), approved: false };
    const updated = [newJob, ...jobs];
    setJobs(updated);
    localStorage.setItem("publicJobs", JSON.stringify(updated));
    setForm({ role: "", company: "", description: "", contact: "", hot: false });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded-xl shadow border border-amber-100">
      <h1 className="text-3xl font-bold mb-6 text-rose-700">Jobs Board</h1>

      {/* Job Submission Form */}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4 bg-amber-50 p-4 rounded-lg border border-amber-200">
        <h2 className="text-xl font-semibold mb-2 text-rose-800">Post a Job for AI Talent</h2>
        <input name="role" value={form.role} onChange={handleChange} placeholder="Role (e.g. AI Engineer)" className="w-full p-2 rounded border" required />
        <input name="company" value={form.company} onChange={handleChange} placeholder="Company/Project" className="w-full p-2 rounded border" required />
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Job Description" className="w-full p-2 rounded border" rows={3} required />
        <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact Email" className="w-full p-2 rounded border" type="email" required />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="hot" checked={form.hot} onChange={handleChange} />
          Mark as HOT
        </label>
        <button type="submit" className="px-4 py-2 bg-rose-700 text-white rounded font-bold hover:bg-rose-800 transition">Post Job</button>
        {submitted && <div className="text-emerald-600 font-semibold mt-2">Job posted!</div>}
      </form>

      {jobs.length === 0 ? (
        <div className="text-gray-500">No jobs posted yet.</div>
      ) : (
        <ul className="space-y-6">
          {jobs.map((job, i) => (
            <li key={i} className="border border-amber-200 rounded-lg p-4 bg-amber-50">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-lg text-rose-800">{job.role}</span>
                {job.hot && <span className="ml-2 px-2 py-1 bg-rose-700 text-white text-xs rounded">HOT</span>}
                {!job.approved && (
                  <span className="ml-2 px-2 py-1 bg-gray-300 text-gray-700 text-xs rounded">Pending</span>
                )}
              </div>
              <div className="text-amber-900 font-medium mb-1">{job.company}</div>
              <div className="text-gray-700 mb-2">{job.description}</div>
              <div className="text-sm text-gray-500">Contact: <a href={`mailto:${job.contact}`} className="underline text-rose-700">{job.contact}</a></div>
              <div className="text-xs text-gray-400 mt-1">Posted {job.date ? new Date(job.date).toLocaleDateString() : "recently"}</div>
              <div className="flex gap-2 mt-2">
                {!job.approved && (
                  <button onClick={() => approveJob(i)} className="px-2 py-1 bg-emerald-600 text-white text-xs rounded">Approve</button>
                )}
                <button onClick={() => editJob(i)} className="px-2 py-1 bg-amber-400 text-white text-xs rounded">Edit</button>
                <button onClick={() => removeJob(i)} className="px-2 py-1 bg-rose-600 text-white text-xs rounded">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <ChatBox />
    </div>
  );
}

function stringToColor(str: string) {
  // Simple hash to color
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const c = (hash & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();
  return "#" + "00000".substring(0, 6 - c.length) + c;
}

function ChatBox() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [lastSent, setLastSent] = useState<number>(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Fetch messages and subscribe to new ones
  useEffect(() => {
    let ignore = false;
    async function fetchMessages() {
      const { data } = await supabase
        .from('job_chat')
        .select('*')
        .order('inserted_at', { ascending: true });
      if (!ignore && data) setMessages(data);
    }
    fetchMessages();
    const sub = supabase
      .channel('job_chat')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'job_chat' }, (payload) => {
        setMessages((msgs) => [...msgs, payload.new]);
      })
      .subscribe();
    return () => {
      ignore = true;
      sub.unsubscribe();
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!username.trim() || !input.trim()) {
      setError("Username and message required.");
      return;
    }
    // Spam guard: 1 message per 5 seconds
    if (Date.now() - lastSent < 5000) {
      setError("Please wait before sending another message.");
      return;
    }
    if (input.length > 300) {
      setError("Message too long.");
      return;
    }
    const { error } = await supabase.from('job_chat').insert({ username, message: input });
    if (error) {
      setError("Failed to send message.");
      return;
    }
    setInput("");
    setLastSent(Date.now());
  }

  return (
    <div className="mt-12 mb-8 max-w-2xl mx-auto bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-extrabold mb-4 text-rose-700 tracking-tight flex items-center gap-2">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 2.003.59 3.87 1.6 5.43L2 22l4.57-1.6A9.96 9.96 0 0 0 12 22Z" stroke="#be123c" strokeWidth="2"/></svg>
        Jobs Board Chat
      </h2>
      <div className="h-72 overflow-y-auto bg-white rounded-xl p-4 mb-4 border border-amber-100 flex flex-col gap-2">
        {messages.map((msg, i) => (
          <div key={msg.id || i} className="flex items-end gap-3">
            <div className="flex-shrink-0">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white shadow" style={{background: stringToColor(msg.username)}}>
                {msg.username.slice(0,2).toUpperCase()}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="bg-amber-100 rounded-xl px-4 py-2 shadow text-gray-900 max-w-xs">
                <span className="font-semibold text-rose-800">{msg.username}</span>
                <span className="block text-gray-800 whitespace-pre-line">{msg.message}</span>
              </div>
              <span className="text-xs text-gray-400 mt-1 ml-1">{msg.inserted_at && new Date(msg.inserted_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={sendMessage} className="flex flex-col md:flex-row gap-2 items-end">
        <input
          className="p-2 border rounded-lg flex-1 md:max-w-[160px] focus:ring-2 focus:ring-rose-200"
          placeholder="Your name"
          value={username}
          onChange={e => setUsername(e.target.value)}
          maxLength={32}
        />
        <input
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-amber-200"
          placeholder="Type a message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          maxLength={300}
        />
        <button type="submit" className="px-5 py-2 bg-rose-700 text-white rounded-lg font-bold hover:bg-rose-800 transition shadow">Send</button>
      </form>
      {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
      <div className="text-xs text-gray-400 mt-2">Spam guard: 1 message per 5 seconds. Max 300 chars.</div>
    </div>
  );
}
