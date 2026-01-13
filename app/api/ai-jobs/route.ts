export const runtime = 'nodejs';

import { fetchAIJobs } from "../../../lib/supabaseJobs";

function checkSupabaseKeys() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    return { valid: false, message: 'Supabase URL or key is missing.' };
  }
  if (!url.startsWith('https://') || !url.includes('.supabase.co')) {
    return { valid: false, message: 'Supabase URL format is invalid.' };
  }
  if (!key.startsWith('eyJ')) {
    return { valid: false, message: 'Supabase key format is invalid.' };
  }
  return { valid: true, message: 'Supabase keys look valid.' };
}

export async function GET(request: Request) {
  const integrity = checkSupabaseKeys();
  if (!integrity.valid) {
    return Response.json({ error: integrity.message }, { status: 500 });
  }
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
