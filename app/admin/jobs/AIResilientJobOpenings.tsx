
import React, { useEffect, useState } from "react";
import { getJobs } from "../../../lib/flaskApiClient";

type Job = {
  id?: string | number;
  title: string;
  company: string;
  description?: string;
  pay?: string;
};

const FIELDS = [
  "Electricians",
  "Plumbers",
  "Solar",
  "Construction",
  "Machinery",
  "HVAC",
  "Welders",
  "Automotive",
  "Farm",
  "Ranch",
  "Conservation",
  "Environmental",
  "Therapist",
  "Counselor",
  "Social Worker",
  "Psychologist",
  "Teacher",
  "Nurse",
  "Physician",
  "Occupational",
  "Physical Therapist",
  "Childcare"
];

export default function AIResilientJobOpenings() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        // Query for all relevant fields
        const results = await Promise.all(
          FIELDS.map((field) => getJobs(field))
        );
        // Flatten and filter duplicates
        const allJobs: Job[] = results.flat();
        const uniqueJobs = Array.from(
          new Map(allJobs.map((j) => [j.id || j.title + j.company, j])).values()
        );
        setJobs(uniqueJobs);
      } catch (err) {
        setError("Failed to fetch jobs");
      }
      setLoading(false);
    }
    fetchJobs();
  }, []);

  if (loading) return <div>Loading job openings...</div>;
  if (error) return <div>{error}</div>;
  if (!jobs.length) return <div>No job openings found in these fields.</div>;

  return (
    <div>
      <h2>AI‑Resilient Job Openings</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id || job.title + job.company}>
            <strong>{job.title}</strong> at {job.company} <br />
            <span>{job.description}</span>
            {job.pay && <div>Pay: {job.pay}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
