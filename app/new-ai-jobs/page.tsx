"use client";
import React, { useEffect, useState } from "react";

const MAJOR_CITIES = [
  "Dallas", "Houston", "Austin", "San Antonio", "Frisco", "Irving", "Cedar Park", "Laredo"
];

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

  // Group jobs by major cities
  const jobsByCity: { [city: string]: any[] } = {};
  MAJOR_CITIES.forEach(city => {
    jobsByCity[city] = jobs.filter(job => job.location && job.location.toLowerCase().includes(city.toLowerCase()));
  });

  return (
    <main style={{ minHeight: '100vh', background: '#f5f3fd', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 1rem' }}>
      <section style={{ width: '100%', maxWidth: 700, margin: '3rem auto 2rem auto', background: 'linear-gradient(90deg, #18191a 0%, #18191a 60%, #7b2ff2 100%)', borderRadius: 24, boxShadow: '0 4px 32px #18191a22', padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <h1 style={{ color: 'rgba(255,255,255,0.97)', fontSize: '2.2rem', fontWeight: 800, fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center', margin: 0, width: '100%', position: 'relative', zIndex: 2, textShadow: '0 2px 8px #8882', WebkitTextStroke: '1.5px #bba6f7', filter: 'none', background: 'linear-gradient(180deg, #fff 60%, #e0d6f7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.18, paddingBottom: '0.18em' }}>AI Jobs & Careers</h1>
        <div style={{ color: '#ece9fc', fontSize: '1.15rem', fontWeight: 500, marginTop: 10, textAlign: 'center', maxWidth: 500, textShadow: '0 1px 6px #18191a55' }}>
          Discover emerging jobs and careers created by AI and automation. Find your next opportunity below.
        </div>
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
        {MAJOR_CITIES.map(city => (
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
