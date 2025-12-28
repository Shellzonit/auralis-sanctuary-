import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// GET: Fetch all AI companies
export async function GET(req: NextRequest) {
  try {
    // Optional: filter by location query param
    const { searchParams } = new URL(req.url);
    const location = searchParams.get('location');
    let result;
    if (location) {
      result = await pool.query('SELECT * FROM ai_companies WHERE LOWER(location) LIKE LOWER($1) ORDER BY id DESC', [`%${location}%`]);
    } else {
      result = await pool.query('SELECT * FROM ai_companies ORDER BY id DESC');
    }
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch companies', details: error }, { status: 500 });
  }
}

// POST: Add a new AI company
export async function POST(req: NextRequest) {
  try {
    const { name, roles, url, location } = await req.json();
    if (!name || !roles || !url) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }
    const result = await pool.query(
      'INSERT INTO ai_companies (name, roles, url, location) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, roles, url, location || null]
    );
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add company', details: error }, { status: 500 });
  }
}
