import { supabase } from '../../lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data, error } = await supabase
    .from('jobs_board_messages')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const { name, message } = await request.json();
  if (!name || !message) {
    return NextResponse.json({ error: 'Name and message are required.' }, { status: 400 });
  }
  // Basic length validation
  if (name.length > 32 || message.length > 500) {
    return NextResponse.json({ error: 'Name or message too long.' }, { status: 400 });
  }
  // TODO: Add rate limiting here
  const { data, error } = await supabase
    .from('jobs_board_messages')
    .insert([{ name, message }])
    .select()
    .single();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data, { status: 201 });
}
