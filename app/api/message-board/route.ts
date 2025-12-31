import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabaseClient';

// GET: fetch all messages
export async function GET() {
  const { data, error } = await supabase
    .from('job_chat')
    .select('*')
    .order('inserted_at', { ascending: true });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

// POST: add a new message
export async function POST(req: Request) {
  const { username, message } = await req.json();
  if (!username || !message) {
    return NextResponse.json({ error: 'Missing username or message' }, { status: 400 });
  }
  const { data, error } = await supabase
    .from('job_chat')
    .insert([{ username, message }])
    .select();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data[0]);
}

