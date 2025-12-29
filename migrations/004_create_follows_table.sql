-- Migration: Create follows table for user following system
CREATE TABLE follows (
  id SERIAL PRIMARY KEY,
  follower_username VARCHAR(255) NOT NULL,
  following_username VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  CONSTRAINT fk_follower FOREIGN KEY(follower_username) REFERENCES users(username) ON DELETE CASCADE,
  CONSTRAINT fk_following FOREIGN KEY(following_username) REFERENCES users(username) ON DELETE CASCADE,
  CONSTRAINT unique_follow UNIQUE(follower_username, following_username)
);
