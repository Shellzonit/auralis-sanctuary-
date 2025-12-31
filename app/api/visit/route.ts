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
