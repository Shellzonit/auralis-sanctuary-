-- Create table to store resumes eligible for Hot Resume of the Week
CREATE TABLE hot_resumes (
  id SERIAL PRIMARY KEY,
  user_id UUID,
  username TEXT,
  resume_text TEXT NOT NULL,
  score INTEGER NOT NULL,
  gold_completion BOOLEAN NOT NULL DEFAULT FALSE,
  opted_in BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Index for quick selection of top resume
CREATE INDEX idx_hot_resumes_score ON hot_resumes(score DESC);
