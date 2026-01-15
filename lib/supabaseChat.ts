import { supabase } from './supabaseClient';

export async function insertChatMessage({ author, text, avatar }: { author: string; text: string; avatar?: string }) {
  const { data, error } = await supabase
    .from('chat_messages')
    .insert([{ author, text, avatar }])
    .select();
  if (error) throw error;
  return data?.[0];
}

export async function fetchBotReply(author: string) {
  const { data, error } = await supabase
    .from('chat_messages')
    .select('text')
    .eq('author', author)
    .order('timestamp', { ascending: false })
    .limit(1);
  if (error) throw error;
  return data?.[0]?.text || null;
}
