export async function updateAIJob(id: number, updates: { title?: string; company?: string; description?: string; pay?: string; }) {
  const { data, error } = await supabase
    .from('ai_jobs')
    .update(updates)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data;
}

export async function deleteAIJob(id: number) {
  const { data, error } = await supabase
    .from('ai_jobs')
    .delete()
    .eq('id', id)
    .select();
  if (error) throw error;
  return data;
}
// lib/supabaseJobs.ts
import { supabase } from './supabaseClient';

export async function fetchAIJobs(search?: string, industry?: string, location?: string) {
  let query = supabase
    .from('ai_jobs')
    .select('*')
    .order('created_at', { ascending: false });
  if (search) {
    query = query.or(`title.ilike.%${search}%,company.ilike.%${search}%,description.ilike.%${search}%`);
  }
  if (industry) {
    query = query.contains('industries', [industry]);
  }
  if (location) {
    query = query.eq('location', location);
  }
  const { data, error } = await query;
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
