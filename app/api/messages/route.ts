import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// GET: Fetch all messages
export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM messages ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('MESSAGES API ERROR:', error);
    return NextResponse.json({ error: 'Failed to fetch messages', details: String(error) }, { status: 500 });
  }
}

// POST: Add a new message
export async function POST(req: NextRequest) {
  try {
    const { content } = await req.json();
    if (!content) {
      return NextResponse.json({ error: 'Missing content' }, { status: 400 });
    }
    const result = await pool.query(
      'INSERT INTO messages (content) VALUES ($1) RETURNING *',
      [content]
    );
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('MESSAGES API ERROR:', error);
    return NextResponse.json({ error: 'Failed to add message', details: String(error) }, { status: 500 });
  }
}
