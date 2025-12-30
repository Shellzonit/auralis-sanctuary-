-- SQL for jobs board messages table
create table if not exists jobs_board_messages (
  id bigserial primary key,
  name text not null,
  message text not null,
  created_at timestamptz not null default now()
);
