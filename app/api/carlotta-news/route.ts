import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request) {
  const { topic } = await request.json();
  if (!topic) {
    return NextResponse.json({ error: 'Missing topic' }, { status: 400 });
  }
  const prompt = `You are Carlotta, an AI news reporter. Write a short, original news story about "${topic}" in a friendly, informative tone. Do not copy from any source. Make it unique, accurate, and helpful for readers interested in AI.`;
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: 'You are Carlotta, an AI news reporter for an AI news site. Only write original stories.' },
      { role: 'user', content: prompt }
    ],
    max_tokens: 400,
    temperature: 0.7,
  });
  const story = completion.choices[0]?.message?.content || '';
  return NextResponse.json({ story });
}
