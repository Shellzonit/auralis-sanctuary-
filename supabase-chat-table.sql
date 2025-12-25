-- SQL for Supabase chat table
create table if not exists job_chat (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  message text not null,
  inserted_at timestamp with time zone default timezone('utc', now())
);

-- Enable realtime on this table in Supabase dashboard after creation.