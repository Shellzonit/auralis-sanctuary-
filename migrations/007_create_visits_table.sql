-- Migration: Create visits table to record website visits
CREATE TABLE visits (
  id SERIAL PRIMARY KEY,
  user_agent TEXT,
  path TEXT,
  visited_at TIMESTAMP DEFAULT NOW()
);
