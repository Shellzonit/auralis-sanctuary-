// supabase-integrity-check.js
// Run this script to check Supabase connectivity and credentials
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase URL or Anon Key in environment variables.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkSupabase() {
  try {
    const { data, error } = await supabase.from('hot_resumes').select('*').limit(1);
    if (error) {
      console.error('Supabase query error:', error.message);
      process.exit(2);
    }
    console.log('Supabase connection OK. Sample data:', data);
    process.exit(0);
  } catch (e) {
    console.error('Supabase connection failed:', e.message);
    process.exit(3);
  }
}

checkSupabase();
