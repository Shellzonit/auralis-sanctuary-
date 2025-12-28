import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// GET: Fetch all media uploads
export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM media ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch media', details: error }, { status: 500 });
  }
}
