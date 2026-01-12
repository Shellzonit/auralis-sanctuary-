// lib/supabaseJobs.ts
import { supabase } from './supabaseClient';

export async function fetchAIJobs() {
  const { data, error } = await supabase
    .from('ai_jobs')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function addAIJob({ title, company, description, pay }: { title: string; company: string; description: string; pay: string; }) {
  const { data, error } = await supabase
    .from('ai_jobs')
    .insert([{ title, company, description, pay }])
    .select();
  if (error) throw error;
  return data;
}
