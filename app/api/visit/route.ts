// GET: Get visit count for a path
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const path = searchParams.get('path');
    if (!path) return NextResponse.json({ error: 'Missing path parameter' }, { status: 400 });
    const { rows } = await pool.query('SELECT COUNT(*) FROM visits WHERE path = $1', [path]);
    return NextResponse.json({ count: parseInt(rows[0].count, 10) });
  } catch (error) {
    console.error('VISIT API ERROR:', error);
    return NextResponse.json({ error: 'Failed to get visit count', details: String(error) }, { status: 500 });
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// POST: Record a visit
export async function POST(req: NextRequest) {
  try {
    const { userAgent, path } = await req.json();
    await pool.query(
      'INSERT INTO visits (user_agent, path) VALUES ($1, $2)',
      [userAgent, path]
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('VISIT API ERROR:', error);
    return NextResponse.json({ error: 'Failed to record visit', details: String(error) }, { status: 500 });
  }
}
