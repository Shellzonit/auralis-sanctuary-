-- Threaded discussion table for Supabase
create table if not exists chat_threads (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid references chat_threads(id) on delete cascade,
  author text not null,
  content text not null,
  created_at timestamp with time zone default timezone('utc', now())
);

-- Index for faster parent-child lookups
create index if not exists idx_chat_threads_parent_id on chat_threads(parent_id);
