
import { NextRequest, NextResponse } from "next/server";
import { createSupabaseClient } from "../../../lib/supabaseClient";


export async function POST(req: NextRequest) {
  const { title, description, category, url, table } = await req.json();
  const supabase = createSupabaseClient();
  const tableName = table || "showcase photos";
  const { data, error } = await supabase.from(tableName).insert([
    { title, description, category, url },
  ]);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true, data });
}
