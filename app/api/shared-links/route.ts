import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// GET: Fetch all shared links
export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM shared_links ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('SHARED LINKS API ERROR:', error);
    return NextResponse.json({ error: 'Failed to fetch links', details: String(error) }, { status: 500 });
  }
}

// POST: Add a new shared link
export async function POST(req: NextRequest) {
  try {
    const { title, url } = await req.json();
    if (!title || !url) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    const result = await pool.query(
      'INSERT INTO shared_links (title, url) VALUES ($1, $2) RETURNING *',
      [title, url]
    );
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('SHARED LINKS API ERROR:', error);
    return NextResponse.json({ error: 'Failed to add link', details: String(error) }, { status: 500 });
  }
}
