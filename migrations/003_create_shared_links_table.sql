-- Migration: Create shared_links table for storing shared URLs
CREATE TABLE shared_links (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
