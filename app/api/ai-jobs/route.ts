export const runtime = 'nodejs';

import { fetchAIJobs } from "../../../lib/supabaseJobs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || undefined;
    const industry = searchParams.get('industry') || undefined;
    const location = searchParams.get('location') || undefined;
    const jobs = await fetchAIJobs(search, industry, location);
    // Ensure only serializable data is returned
    const safeJobs = Array.isArray(jobs) ? jobs.map(job => {
      const { id, title, company, description, pay, industries, location, updated, created_at } = job;
      return { id, title, company, description, pay, industries, location, updated, created_at };
    }) : [];
    return Response.json(safeJobs);
  } catch (error: any) {
    console.error('AI Jobs API Error:', error);
    return Response.json({ error: error?.message || String(error) }, { status: 500 });
  }
}
