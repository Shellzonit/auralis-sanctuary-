import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

/**
 * Save media metadata to your database.
 * @param {Object} param0
 * @param {string} param0.title
 * @param {string} param0.artist
 * @param {string} param0.type
 * @param {string} param0.url
 * @param {string|Date} param0.created_at
 * @returns {Promise<void>}
 */
export async function saveMediaMetadata({ title, artist, type, url, created_at }) {
  const queryText = `
    INSERT INTO media (title, artist, type, url, created_at)
    VALUES ($1, $2, $3, $4, $5)
  `;
  await pool.query(queryText, [title, artist, type, url, created_at]);
}
