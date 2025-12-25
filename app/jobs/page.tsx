"use client";
import { useEffect, useState } from "react";


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
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
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
    </div>
  );
}
