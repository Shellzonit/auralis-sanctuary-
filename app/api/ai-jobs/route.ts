export const runtime = 'nodejs';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('search') || 'AI';
    const location = searchParams.get('location') || 'Texas';
    const country = searchParams.get('country') || 'us';
    const results_per_page = searchParams.get('results_per_page') || '10';
    const backendUrl = `http://localhost:8000/jobs?query=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}&country=${encodeURIComponent(country)}&results_per_page=${encodeURIComponent(results_per_page)}`;
    const res = await fetch(backendUrl);
    if (!res.ok) {
      throw new Error(`Backend error: ${res.status}`);
    }
    const data = await res.json();
    return Response.json(data.jobs || []);
  } catch (error: any) {
    console.error('AI Jobs API Error:', error);
    return Response.json({ error: error?.message || String(error) }, { status: 500 });
  }
}
