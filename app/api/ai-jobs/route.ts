import { fetchAIJobs } from "../../../lib/supabaseJobs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || undefined;
    const industry = searchParams.get('industry') || undefined;
    const location = searchParams.get('location') || undefined;
    const jobs = await fetchAIJobs(search, industry, location);
    return Response.json(jobs ?? []);
  } catch (error: any) {
    // Log error for debugging
    console.error('AI Jobs API Error:', error);
    return Response.json({ error: error?.message || String(error) }, { status: 500 });
  }
}
