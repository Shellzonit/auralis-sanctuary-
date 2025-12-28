-- Migration: Add location to ai_companies table
ALTER TABLE ai_companies ADD COLUMN location VARCHAR(255);