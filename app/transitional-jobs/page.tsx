"use client";
import React from "react";

const jobs = [
  {
    regular: "Customer Service Rep",
    ai: "Conversational AI Trainer",
    regularImg: "/ai-jobs/customer-service.jpg",
    aiImg: "/ai-jobs/ai-trainer.jpg"
  },
  {
    regular: "Data Entry Clerk",
    ai: "AI Data Annotator",
    regularImg: "/ai-jobs/data-entry.jpg",
    aiImg: "/ai-jobs/data-annotator.jpg"
  },
  {
    regular: "Freelance Writer",
    ai: "AI Content Curator/Prompt Designer",
    regularImg: "/ai-jobs/writer.jpg",
    aiImg: "/ai-jobs/prompt-designer.jpg"
  }
];

export default function TransitionalJobs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3fd] to-[#ece9fc] flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-[#7b2ff2] mb-8 text-center drop-shadow">Regular Jobs That Can Lead to AI Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        {jobs.map((job, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 border border-[#e0d6f7]">
            <div className="flex flex-col items-center w-full md:w-1/2">
              <img src={job.regularImg} alt={job.regular} className="w-32 h-32 object-cover rounded-full border-4 border-[#bba6f7] mb-2" />
              <div className="text-lg font-semibold text-[#7b2ff2] text-center">{job.regular}</div>
              <div className="text-sm text-gray-500 text-center">Traditional Job</div>
            </div>
            <span className="text-3xl text-[#bba6f7] mx-2">→</span>
            <div className="flex flex-col items-center w-full md:w-1/2">
              <img src={job.aiImg} alt={job.ai} className="w-32 h-32 object-cover rounded-full border-4 border-[#7b2ff2] mb-2" />
              <div className="text-lg font-semibold text-[#18191a] text-center">{job.ai}</div>
              <div className="text-sm text-gray-500 text-center">AI Job</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
