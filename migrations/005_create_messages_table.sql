-- Migration: Create messages table for simple message board
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  author VARCHAR(100),
  avatar TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
