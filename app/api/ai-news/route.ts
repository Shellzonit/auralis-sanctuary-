import { NextResponse } from 'next/server';
import { fetchAINews } from '@/lib/newsBot';

export async function GET() {
  try {
    const news = await fetchAINews();
    return NextResponse.json({ news });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
