import { useState } from "react";

export default function MailPage() {
  const [form, setForm] = useState({ to: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    // In a real app, this would send to a backend or store in a DB.
    setSent(true);
    setForm({ to: "", subject: "", message: "" });
  }

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-xl shadow border border-rose-100">
      <h1 className="text-2xl font-bold mb-4 text-rose-700">Internal Mail</h1>
      <p className="mb-4 text-gray-700">Send a message to another user or team. (Demo only, not delivered.)</p>
      {sent ? (
        <div className="text-green-700 font-semibold mb-4">Message sent!</div>
      ) : null}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="to"
          placeholder="Recipient (username or email)"
          value={form.to}
          onChange={handleChange}
          className="w-full p-2 border border-rose-200 rounded"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full p-2 border border-rose-200 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border border-rose-200 rounded"
          rows={4}
          required
        />
        <button type="submit" className="mt-2 px-5 py-2 bg-rose-700 text-white rounded-lg font-semibold hover:bg-rose-800 transition">Send</button>
      </form>
    </div>
  );
}
