-- SQL for Supabase chat table
create table if not exists job_chat (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  message text not null,
  inserted_at timestamp with time zone default timezone('utc', now())
);

-- Enable realtime on this table in Supabase dashboard after creation.

-- Showcase table for Neon/PostgreSQL
CREATE TABLE IF NOT EXISTS showcase (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  creator TEXT NOT NULL,
  file_url TEXT NOT NULL,
  type TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Chat messages table for Neon/PostgreSQL
CREATE TABLE IF NOT EXISTS chat_messages (
  id SERIAL PRIMARY KEY,
  author TEXT NOT NULL,
  avatar TEXT,
  text TEXT NOT NULL,
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  reactions INTEGER DEFAULT 0,
  file_url TEXT,
  file_type TEXT,
  file_name TEXT,
  parent_id INTEGER REFERENCES chat_messages(id) ON DELETE CASCADE
);