import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function query(text: string, params?: any[]) {
  const res = await pool.query(text, params);
  return res;
}


export async function saveMediaMetadata({
  title,
  artist,
  type,
  url,
  created_at,
}: {
  title: string;
  artist: string;
  type: string;
  url: string;
  created_at: string | Date;
}) {
  const queryText = `
    INSERT INTO media (title, artist, type, url, created_at)
    VALUES ($1, $2, $3, $4, $5)
  `;
  await pool.query(queryText, [title, artist, type, url, created_at]);
}

export async function getAllMedia() {
  const { rows } = await pool.query('SELECT * FROM media ORDER BY created_at DESC');
  return rows;
}

export default pool;
