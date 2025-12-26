
import { createSupabaseClient } from "../../../lib/supabaseClient";


export async function POST(req: NextRequest) {
  const { title, description, category, url } = await req.json();
  const supabase = createSupabaseClient();
  const { data, error } = await supabase.from("showcase_content").insert([
    { title, description, category, url },
  ]);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true, data });
}
