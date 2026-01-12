import { NextResponse } from 'next/server';
import { fetchAINews } from '@/lib/newsBot';

export async function GET() {
  try {
    const news = await fetchAINews();
    return NextResponse.json({ news });
  } catch (error) {
    let message = 'Unknown error';
    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === 'string') {
      message = error;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
