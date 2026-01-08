// DEBUG: Log Supabase env variables during build/runtime
console.log('DEBUG SUPABASE_URL:', process.env.SUPABASE_URL ? '[set]' : '[not set]');
console.log('DEBUG NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? '[set]' : '[not set]');
console.log('DEBUG SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? '[set]' : '[not set]');
console.log('DEBUG NEXT_PUBLIC_SUPABASE_ANON_KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '[set]' : '[not set]');
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../lib/supabaseClient";


// POST: Add a resume for Hot Resume consideration
export async function POST(req: NextRequest) {
  try {
    const { user_id, username, resume_text, score, gold_completion, opted_in } = await req.json();
    if (!resume_text || !score || !gold_completion || !opted_in) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const { error } = await supabase
      .from('hot_resumes')
      .insert([{ user_id, username, resume_text, score, gold_completion, opted_in }]);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

// GET: Retrieve the top resume of the week
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('hot_resumes')
      .select('*')
      .eq('gold_completion', true)
      .eq('opted_in', true)
      .order('score', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(1);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    if (!data || data.length === 0) return NextResponse.json({ resume: null });
    return NextResponse.json({ resume: data[0] });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
