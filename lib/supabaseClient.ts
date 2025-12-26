"use client";

"use client";

import { createClient, SupabaseClient } from "@supabase/supabase-js";

let supabase: SupabaseClient<any> | null = null;

if (typeof window !== "undefined") {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  supabase = createClient<any>(url, key);
}

export { supabase };
