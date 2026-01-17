"use client";
import React, { useEffect, useState } from "react";

const MAJOR_CITIES = [
  "San Francisco Bay Area",
  "New York City",
  "Austin, Texas",
  "Seattle",
  "Boston",
  "Los Angeles",
  "Chicago",
  "Dallas–Fort Worth"
];

const CITY_JOBS: { [city: string]: string[] } = {
  "San Francisco Bay Area": [
    "Machine Learning Engineer",
    "AI Research Scientist",
    "LLM / NLP Engineer",
    "Robotics Engineer",
    "Data Scientist (AI/ML)",
    "AI Product Manager",
    "Computer Vision Engineer"
  ],
  "New York City": [
    "Quantitative AI Researcher",
    "NLP Engineer",
    "AI Governance Analyst",
    "ML Ops Engineer",
    "AI‑powered Marketing Analyst"
  ],
  "Austin, Texas": [
    "AI Engineer (Apple, Tesla, Dell)",
    "Applied Scientist",
    "AI Infrastructure Engineer",
    "Data Annotation Specialist",
    "IT Automation (AI‑powered)"
  ],
  "Seattle": [
    "Generative AI Engineer",
    "Cloud AI Architect",
    "Reinforcement Learning Engineer",
    "AI Security Engineer"
  ],
  "Boston": [
    "AI in Drug Discovery",
    "Bioinformatics ML Engineer",
    "Robotics Perception Engineer",
    "AI Medical Imaging Scientist"
  ],
  "Los Angeles": [
    "AI Video/Audio Model Engineer",
    "Generative Media Engineer",
    "Autonomous Vehicle AI Engineer",
    "AI Content Analyst"
  ],
  "Chicago": [
    "AI Supply Chain Analyst",
    "Predictive Modeling Engineer",
    "Healthcare AI Analyst",
    "ML Engineer (Finance)"
  ],
  "Dallas–Fort Worth": [
    "AI Trainer (Medical, Legal, General)",
    "Data Scientist",
    "AI Cybersecurity Analyst",
    "ML Engineer"
  ]
};

function NewAIJobsPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  // Fetch jobs from API with search and filters
  const fetchJobs = async () => {
    let url = `/api/ai-jobs?search=${encodeURIComponent(search)}&location=${encodeURIComponent(location)}`;
    const res = await fetch(url);
    const data = await res.json();
    setJobs(Array.isArray(data) ? data : data.jobs || []);
  };

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line
  }, [search, location]);

  // Group jobs by major cities (Texas only)
  const jobsByCity: { [city: string]: any[] } = {};
  ["Dallas", "Houston", "Austin", "San Antonio", "Frisco", "Irving", "Cedar Park", "Laredo"].forEach(city => {
    jobsByCity[city] = jobs.filter(job => job.location && job.location.toLowerCase().includes(city.toLowerCase()));
  });

  return (
    <main style={{ minHeight: '100vh', background: '#f5f3fd', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
      <section style={{ width: '100%', maxWidth: 900, margin: '3rem auto 2rem auto', background: '#fff', borderRadius: 24, boxShadow: '0 4px 32px #18191a22', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <h1 style={{ color: '#7b2ff2', fontSize: '2.2rem', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1.5px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.18, paddingBottom: '0.18em' }}>AI Jobs Hiring Now — Major U.S. Cities</h1>
        <div style={{ color: '#18191a', fontSize: '1.15rem', fontWeight: 500, marginTop: 10, textAlign: 'center', maxWidth: 700, textShadow: '0 1px 6px #18191a22' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {MAJOR_CITIES.map(city => (
              <li key={city} style={{ marginBottom: 24 }}>
                <strong style={{ color: '#7b2ff2', fontSize: '1.18rem' }}>{city}</strong>
                <ul style={{ marginTop: 8, marginLeft: 0, paddingLeft: 0 }}>
                  {CITY_JOBS[city].map(job => (
                    <li key={job} style={{ color: '#18191a', fontSize: '1.08rem', marginBottom: 4 }}>{job}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ width: '100%', maxWidth: 700, margin: '2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)', borderRadius: 24, boxShadow: '0 4px 32px #18191a22', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ marginTop: 24, display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ padding: 8, borderRadius: 6, border: '1px solid #bba6f7', minWidth: 180 }}
          />
          <input
            type="text"
            placeholder="Location..."
            value={location}
            onChange={e => setLocation(e.target.value)}
            style={{ padding: 8, borderRadius: 6, border: '1px solid #bba6f7', minWidth: 180 }}
          />
        </div>
      </section>

      <section style={{ background: '#fff', borderRadius: 16, padding: '32px 40px', maxWidth: 1100, margin: '0 auto 48px auto', boxShadow: '0 2px 16px #18191a22', color: '#18191a', textAlign: 'center', fontSize: '1.12rem', lineHeight: 1.7, border: '1.5px solid #e0d6f7' }}>
        <h2 style={{ color: '#7b2ff2', fontSize: '1.5rem', marginBottom: 24, textAlign: 'left' }}>AI Jobs by Major Texas Cities</h2>
        {["Dallas", "Houston", "Austin", "San Antonio", "Frisco", "Irving", "Cedar Park", "Laredo"].map(city => (
          jobsByCity[city].length > 0 && (
            <div key={city} style={{ marginBottom: 40 }}>
              <h3 style={{ color: '#18191a', fontSize: '1.18rem', marginBottom: 12, textAlign: 'left', borderBottom: '1px solid #e0d6f7', paddingBottom: 4 }}>{city}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
                {jobsByCity[city].map((job) => (
                  <div key={job.id || job.title} style={{ background: '#f5faff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #90caf922', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220 }}>
                    <div>
                      <h4 style={{ color: '#7b2ff2', fontSize: '1.1rem', marginBottom: 6 }}>{job.title}</h4>
                      {job.company && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Company:</strong> {job.company}</div>}
                      {job.location && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Location:</strong> {job.location}</div>}
                      {job.summary && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Summary:</strong> {job.summary}</div>}
                      {job.description && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Description:</strong> {job.description}</div>}
                      {job.type && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Type:</strong> {job.type}</div>}
                      {job.pay && <div style={{ color: '#7b2ff2', fontSize: '1rem', marginBottom: 4 }}><strong>Pay:</strong> {job.pay}</div>}
                      {job.salary_min && job.salary_max && <div style={{ color: '#7b2ff2', fontSize: '1rem', marginBottom: 4 }}><strong>Salary Range:</strong> ${job.salary_min} - ${job.salary_max}</div>}
                      {job.posted && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Posted:</strong> {job.posted}</div>}
                      {job.created && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Created:</strong> {job.created}</div>}
                      {job.category && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Category:</strong> {job.category}</div>}
                      {job.tags && Array.isArray(job.tags) && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Tags:</strong> {job.tags.join(', ')}</div>}
                    </div>
                    {job.redirect_url && <div style={{ marginTop: 12, textAlign: 'right' }}><a href={job.redirect_url} target="_blank" rel="noopener noreferrer" style={{ color: '#7b2ff2', fontWeight: 600, fontSize: '1.08rem' }}>View Job & Apply</a></div>}
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
        <h2 style={{ color: '#7b2ff2', fontSize: '1.5rem', marginBottom: 24, textAlign: 'left' }}>All AI Jobs</h2>
        {jobs.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {jobs.map((job) => (
              <div key={job.id || job.title} style={{ background: '#f5faff', borderRadius: 12, padding: 18, boxShadow: '0 2px 8px #90caf922', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220 }}>
                <div>
                  <h2 style={{ color: '#7b2ff2', fontSize: '1.2rem', marginBottom: 6 }}>{job.title}</h2>
                  {job.company && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Company:</strong> {job.company}</div>}
                  {job.location && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Location:</strong> {job.location}</div>}
                  {job.summary && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Summary:</strong> {job.summary}</div>}
                  {job.description && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Description:</strong> {job.description}</div>}
                  {job.type && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Type:</strong> {job.type}</div>}
                  {job.pay && <div style={{ color: '#7b2ff2', fontSize: '1rem', marginBottom: 4 }}><strong>Pay:</strong> {job.pay}</div>}
                  {job.salary_min && job.salary_max && <div style={{ color: '#7b2ff2', fontSize: '1rem', marginBottom: 4 }}><strong>Salary Range:</strong> ${job.salary_min} - ${job.salary_max}</div>}
                  {job.posted && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Posted:</strong> {job.posted}</div>}
                  {job.created && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Created:</strong> {job.created}</div>}
                  {job.category && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Category:</strong> {job.category}</div>}
                  {job.tags && Array.isArray(job.tags) && <div style={{ color: '#18191a', fontSize: '1rem', marginBottom: 4 }}><strong>Tags:</strong> {job.tags.join(', ')}</div>}
                </div>
                {job.redirect_url && <div style={{ marginTop: 12, textAlign: 'right' }}><a href={job.redirect_url} target="_blank" rel="noopener noreferrer" style={{ color: '#7b2ff2', fontWeight: 600, fontSize: '1.08rem' }}>View Job & Apply</a></div>}
              </div>
            ))}
          </div>
        ) : <div style={{ color: 'red', fontWeight: 600 }}>No jobs found or an error occurred.</div>}
      </section>
    </main>
  );
}

export default NewAIJobsPage;
