import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// GET: Fetch all AI companies
export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM ai_companies ORDER BY id DESC');
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch companies', details: error }, { status: 500 });
  }
}

// POST: Add a new AI company
export async function POST(req: NextRequest) {
  try {
    const { name, roles, url } = await req.json();
    if (!name || !roles || !url) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    const result = await pool.query(
      'INSERT INTO ai_companies (name, roles, url) VALUES ($1, $2, $3) RETURNING *',
      [name, roles, url]
    );
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add company', details: error }, { status: 500 });
  }
}
