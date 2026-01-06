"use client";
import React, { useState } from "react";

const jobPairs = [
  { regular: "Customer Service Rep", ai: "Conversational AI Trainer" },
  { regular: "Data Entry Clerk", ai: "AI Data Annotator" },
  { regular: "Freelance Writer", ai: "AI Content Curator/Prompt Designer" },
];

function Accordion({ title, children, open, onClick }: { title: string; children: React.ReactNode; open: boolean; onClick: () => void }) {
  return (
    <div className="mb-4 rounded-xl border border-[#e0d6f7] bg-white shadow-md">
      <button
        className="w-full flex justify-between items-center px-6 py-4 text-xl font-semibold text-left text-[#7b2ff2] focus:outline-none focus:ring-2 focus:ring-[#7b2ff2] rounded-xl transition-colors hover:bg-[#f5f3fd]"
        onClick={onClick}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="ml-2 text-2xl">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-6 pb-6 pt-2">
          {children}
        </div>
      )}
    </div>
  );
}

export default function TransitionalPhasingJobs() {
  return (
    <div style={{ width: '100%', background: '#f5f3fd', minHeight: '0', padding: '0 1rem' }}>
      <section style={{ width: '100%', maxWidth: 700, margin: '2.5rem auto 2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #7b2ff2 100%)', borderRadius: 28, boxShadow: '0 4px 32px #18191a22', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <h1 style={{ color: 'rgba(255,255,255,0.97)', fontSize: 'clamp(2.2rem, 6vw, 3.2rem)', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', fontStyle: 'italic', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', maskImage: 'linear-gradient(to bottom, #fff 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, #fff 80%, transparent 100%)', lineHeight: 1.18, paddingBottom: '0.18em' }}>Transitional Jobs</h1>
        <div style={{ color: '#ece9fc', fontSize: '1.1rem', fontWeight: 500, marginTop: 10, textAlign: 'center', maxWidth: 500, textShadow: '0 1px 6px #18191a55' }}>
          See how traditional jobs are evolving into new AI-powered roles.
        </div>
      </section>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8 border" style={{ borderColor: '#e0d6f7', fontFamily: 'Arial, Verdana, system-ui, sans-serif', color: '#18191a', boxShadow: '0 2px 16px #18191a22' }}>
          <div className="flex flex-col gap-8">
            {jobPairs.map((pair, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-lg font-semibold text-[#7b2ff2] text-center md:text-left" style={{ minWidth: 160 }}>{pair.regular}</div>
                <div className="flex-1 flex justify-center items-center">
                  <span style={{ fontSize: 32, color: '#bba6f7' }}>&rarr;</span>
                </div>
                <div className="text-lg font-semibold text-[#18191a] text-center md:text-right" style={{ minWidth: 180 }}>{pair.ai}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
      <div className="w-full max-w-3xl rounded-xl shadow-lg p-8 border mb-12" style={{ background: '#fff', borderColor: '#e0d6f7', fontFamily: 'Arial, Verdana, system-ui, sans-serif', color: '#18191a', boxShadow: '0 2px 16px #18191a22' }}>
        <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#7b2ff2', fontFamily: 'Arial, Verdana, system-ui, sans-serif' }}>Jobs Replaced or Evolving with AI</h2>
        <table className="w-full text-left border-collapse" style={{ color: '#18191a', fontFamily: 'Arial, Verdana, system-ui, sans-serif' }}>
          <thead>
            <tr className="transition-colors duration-150 hover:bg-yellow-900/20">
              <th className="py-2 px-3 border-b border-yellow-700 text-lg">Traditional Job</th>
              <th className="py-2 px-3 border-b border-yellow-700 text-lg">AI Field Equivalent</th>
              <th className="py-2 px-3 border-b border-yellow-700 text-lg">Relevant AI Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-transform duration-150 hover:scale-102 hover:bg-yellow-900/20">
              <td className="py-2 px-3 border-b border-yellow-900">Data Entry Clerk</td>
              <td className="py-2 px-3 border-b border-yellow-900">AI Data Annotator</td>
              <td className="py-2 px-3 border-b border-yellow-900">Labeling, dataset curation, prompt engineering</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Customer Service Rep</td>
              <td className="py-2 px-3 border-b border-gray-800">Conversational AI Trainer</td>
              <td className="py-2 px-3 border-b border-gray-800">Chatbot scripting, user intent mapping, feedback analysis</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Copywriter</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Content Curator/Prompt Designer</td>
              <td className="py-2 px-3 border-b border-gray-800">Prompt writing, content review, AI output editing</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Photo Editor</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Image Model Trainer</td>
              <td className="py-2 px-3 border-b border-gray-800">Image dataset prep, prompt crafting, model fine-tuning</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Market Research Analyst</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Data Analyst</td>
              <td className="py-2 px-3 border-b border-gray-800">Data analysis, model evaluation, trend detection</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Transcriptionist</td>
              <td className="py-2 px-3 border-b border-gray-800">Speech-to-Text Model Validator</td>
              <td className="py-2 px-3 border-b border-gray-800">Audio labeling, accuracy review, error correction</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Paralegal/Legal Researcher</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Legal Data Specialist</td>
              <td className="py-2 px-3 border-b border-gray-800">Legal dataset curation, AI legal research, compliance review</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Medical Coder</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Medical Data Annotator</td>
              <td className="py-2 px-3 border-b border-gray-800">Medical data labeling, model validation, terminology mapping</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Proofreader</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Output Quality Reviewer</td>
              <td className="py-2 px-3 border-b border-gray-800">AI output review, error detection, feedback reporting</td>
            </tr>
            <tr>
              <td className="py-2 px-3 border-b border-gray-800">Video Editor</td>
              <td className="py-2 px-3 border-b border-gray-800">AI Video Model Trainer</td>
              <td className="py-2 px-3 border-b border-gray-800">Video dataset prep, prompt design, model evaluation</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Pay Potential Section */}
      <div className="w-full max-w-3xl rounded-xl shadow-lg p-8 border mb-10" style={{ background: '#fff', borderColor: '#e0d6f7', color: '#18191a', fontFamily: 'Arial, Verdana, system-ui, sans-serif', boxShadow: '0 2px 16px #18191a22' }}>
        <h2 className="text-2xl font-semibold mb-4 text-center" style={{ color: '#7b2ff2' }}>Pay Potential for Transitional AI Jobs</h2>
        <ul className="list-disc pl-6 text-lg space-y-2" style={{ color: '#18191a' }}>
          <li><span className="font-bold">AI Data Annotator:</span> $20–$50/hr (varies by project and expertise)</li>
          <li><span className="font-bold">Conversational AI Trainer:</span> $25–$60/hr</li>
          <li><span className="font-bold">Prompt Designer/Content Curator:</span> $30–$80/hr</li>
          <li><span className="font-bold">AI Image/Video Model Trainer:</span> $25–$70/hr</li>
          <li><span className="font-bold">AI Data Analyst:</span> $35–$90/hr</li>
          <li><span className="font-bold">AI Output Quality Reviewer:</span> $20–$45/hr</li>
          <li><span className="font-bold">Specialized Roles (Legal, Medical, etc.):</span> $30–$100/hr</li>
        </ul>
      </div>
      {/* Call to Action Section */}
      <div className="w-full flex justify-center items-center mb-12">
        <a href="/join" className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-bold py-4 px-10 rounded-full shadow-lg text-xl hover:from-yellow-400 hover:to-yellow-200 transition-all duration-150 border-2 border-yellow-400" style={{ letterSpacing: 1.1 }}>
          Join the Community & Explore Jobs
        </a>
      </div>
      {/* AI Companies Seeking Help - Centered and Elegant Section */}
      <div className="w-full flex justify-center items-center mt-8 mb-8">
        <div className="w-full max-w-2xl rounded-2xl shadow-2xl p-10 border-2 border-[#e0d6f7] bg-white" style={{ color: '#18191a', boxShadow: '0 4px 32px #18191a22' }}>
          <h2 className="text-3xl font-extrabold mb-8 text-center tracking-wide" style={{ color: '#7b2ff2', letterSpacing: 1.2 }}>AI Companies Looking for Help</h2>
          <ul className="flex flex-col gap-6">
            <li className="rounded-xl p-6 border border-[#e0d6f7] bg-white flex flex-col md:flex-row md:items-center md:justify-between transition-transform hover:scale-105 hover:shadow-lg" style={{ color: '#18191a' }}>
              <div>
                <span className="font-bold text-lg" style={{ color: '#7b2ff2' }}>OpenAI</span>
                <span className="ml-2 text-base">— Roles: Prompt Engineer, Data Annotator, Community Moderator</span>
              </div>
              <a href="https://openai.com/careers" target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-0 text-purple-700 underline font-semibold hover:text-purple-900 transition-colors">openai.com/careers</a>
            </li>
            <li className="rounded-xl p-6 border border-[#e0d6f7] bg-white flex flex-col md:flex-row md:items-center md:justify-between transition-transform hover:scale-105 hover:shadow-lg" style={{ color: '#18191a' }}>
              <div>
                <span className="font-bold text-lg" style={{ color: '#7b2ff2' }}>Anthropic</span>
                <span className="ml-2 text-base">— Roles: AI Safety Researcher, Data Labeler, Technical Writer</span>
              </div>
              <a href="https://www.anthropic.com/careers" target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-0 text-purple-700 underline font-semibold hover:text-purple-900 transition-colors">anthropic.com/careers</a>
            </li>
            <li className="rounded-xl p-6 border border-[#e0d6f7] bg-white flex flex-col md:flex-row md:items-center md:justify-between transition-transform hover:scale-105 hover:shadow-lg" style={{ color: '#18191a' }}>
              <div>
                <span className="font-bold text-lg" style={{ color: '#7b2ff2' }}>Hugging Face</span>
                <span className="ml-2 text-base">— Roles: Community Contributor, Model Trainer, Developer Advocate</span>
              </div>
              <a href="https://huggingface.co/careers" target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-0 text-purple-700 underline font-semibold hover:text-purple-900 transition-colors">huggingface.co/careers</a>
            </li>
            <li className="rounded-xl p-6 border border-[#e0d6f7] bg-white flex flex-col md:flex-row md:items-center md:justify-between transition-transform hover:scale-105 hover:shadow-lg" style={{ color: '#18191a' }}>
              <div>
                <span className="font-bold text-lg" style={{ color: '#7b2ff2' }}>Stability AI</span>
                <span className="ml-2 text-base">— Roles: Data Curator, AI Artist, Research Assistant</span>
              </div>
              <a href="https://stability.ai/careers" target="_blank" rel="noopener noreferrer" className="mt-2 md:mt-0 text-purple-700 underline font-semibold hover:text-purple-900 transition-colors">stability.ai/careers</a>
            </li>
            {/* Add more companies and roles as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}
