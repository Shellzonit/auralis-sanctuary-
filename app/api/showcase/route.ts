import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../../lib/db';

// GET: fetch all showcase items
export async function GET() {
  try {
    const result = await query('SELECT * FROM showcase ORDER BY created_at DESC');
    return NextResponse.json({ items: result.rows });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST: add a new showcase item
export async function POST(req: NextRequest) {
  try {
    const { title, creator, fileUrl, type } = await req.json();
    if (!title || !creator || !fileUrl || !type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const result = await query(
      'INSERT INTO showcase (title, creator, file_url, type, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *',
      [title, creator, fileUrl, type]
    );
    return NextResponse.json({ item: result.rows[0] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
