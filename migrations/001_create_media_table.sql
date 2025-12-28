-- Migration: Create media table for user uploads
CREATE TABLE media (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  artist VARCHAR(255),
  type VARCHAR(20) NOT NULL, -- 'image' or 'music'
  url TEXT NOT NULL,         -- direct link to the file in storage
  thumbnail_url TEXT,        -- for images or music cover art (optional)
  tags TEXT[],               -- array of tags/keywords
  created_at TIMESTAMP DEFAULT NOW()
);
