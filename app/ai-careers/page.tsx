"use client";

import Link from "next/link";
import { useState } from "react";

const aiCareers = [
  {
    category: "Companies Hiring AI‑Assisted Creators",
    items: [
      { name: "OpenAI", url: "https://openai.com/careers" },
      { name: "RunwayML", url: "https://runwayml.com/careers" },
      { name: "Adobe", url: "https://adobe.com/careers" },
      { name: "Canva", url: "https://www.canva.com/careers/" },
    ],
  },
  {
    category: "Platforms Welcoming AI Musicians",
    items: [
      { name: "Endlesss", url: "https://endlesss.fm/" },
      { name: "AIVA", url: "https://www.aiva.ai/" },
      { name: "Amper Music", url: "https://www.ampermusic.com/" },
      { name: "Soundful", url: "https://soundful.com/" },
    ],
  },
  {
    category: "Studios Experimenting with AI Sound",
    items: [
      { name: "Sony CSL Music Team", url: "https://www.sonycsl.co.jp/tokyo/" },
      { name: "Google Magenta", url: "https://magenta.tensorflow.org/" },
      { name: "LANDR", url: "https://www.landr.com/" },
    ],
  },
  {
    category: "Remote‑Friendly Creative Tech Teams",
    items: [
      { name: "Hugging Face", url: "https://huggingface.co/careers" },
      { name: "Stability AI", url: "https://stability.ai/careers" },
      { name: "Descript", url: "https://www.descript.com/careers" },
      { name: "Splice", url: "https://splice.com/jobs" },
    ],
  },
];


  const [jobForm, setJobForm] = useState({ company: "", role: "", description: "", contact: "", hot: false });
  const [jobSubmitted, setJobSubmitted] = useState(false);

  function handleJobChange(e: any) {
    const { name, value, type, checked } = e.target;
    setJobForm({ ...jobForm, [name]: type === "checkbox" ? checked : value });
  }

  function handleJobSubmit(e: any) {
    e.preventDefault();
    // Save job to localStorage
    const jobs = JSON.parse(localStorage.getItem("publicJobs") || "[]");
    jobs.push({ ...jobForm, date: new Date().toISOString(), approved: false });
    localStorage.setItem("publicJobs", JSON.stringify(jobs));
    setJobSubmitted(true);
    setJobForm({ company: "", role: "", description: "", contact: "", hot: false });
  }

  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-rose-700">AI-Friendly Employers</h1>
      <p className="max-w-2xl text-center text-lg md:text-xl text-gray-700 mb-10">
        A gentle, evergreen list of companies, platforms, and studios that welcome AI-assisted creators, musicians, and technologists.
      </p>
      <div className="w-full max-w-2xl space-y-8">
        {/* Job Listing Submission Form */}
        <div className="mb-12 bg-amber-50 border border-amber-200 rounded-xl p-6 shadow">
          <h2 className="text-lg font-semibold mb-2 text-rose-700">Need creative AI talent?</h2>
          <p className="mb-4 text-gray-700">Post a job or gig for free. (Submissions are not public in this demo.)</p>
          {jobSubmitted ? (
            <div className="text-green-700 font-semibold">Thank you! Your job listing has been received.</div>
          ) : (
            <form onSubmit={handleJobSubmit} className="space-y-3">
              <input
                type="text"
                name="company"
                placeholder="Company or Studio Name"
                value={jobForm.company}
                onChange={handleJobChange}
                className="w-full p-2 border border-amber-200 rounded"
                required
              />
              <input
                type="text"
                name="role"
                placeholder="Role or Position"
                value={jobForm.role}
                onChange={handleJobChange}
                className="w-full p-2 border border-amber-200 rounded"
                required
              />
              <textarea
                name="description"
                placeholder="Short description of the job or project"
                value={jobForm.description}
                onChange={handleJobChange}
                className="w-full p-2 border border-amber-200 rounded"
                rows={3}
                required
              />
              <input
                type="email"
                name="contact"
                placeholder="Contact Email"
                value={jobForm.contact}
                onChange={handleJobChange}
                className="w-full p-2 border border-amber-200 rounded"
                required
              />
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="hot"
                  checked={jobForm.hot}
                  onChange={handleJobChange}
                  id="hot"
                />
                <label htmlFor="hot" className="text-amber-700 text-sm">Mark as Hot Job (feature on homepage)</label>
              </div>
              <button type="submit" className="mt-2 px-5 py-2 bg-rose-700 text-white rounded-lg font-semibold hover:bg-rose-800 transition">Submit Job</button>
            </form>
          )}
        </div>
        {aiCareers.map((section) => (
          <div key={section.category}>
            <h2 className="text-xl font-semibold mb-3 text-amber-700">{section.category}</h2>
            <ul className="list-disc list-inside space-y-2">
              {section.items.map((item) => (
                <li key={item.name}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-rose-700 hover:underline font-medium">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <Link href="/" className="text-rose-700 hover:underline font-semibold">← Back to Home</Link>
      </div>
    </main>
  );
}
