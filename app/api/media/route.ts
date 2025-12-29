import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// GET: Fetch all media uploads
export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM media ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('MEDIA API ERROR:', error);
    return NextResponse.json({ error: 'Failed to fetch media', details: String(error) }, { status: 500 });
  }
}
