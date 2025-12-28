import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../../lib/db';

// GET: fetch all chat messages
export async function GET() {
  try {
    const result = await query('SELECT * FROM chat_messages ORDER BY timestamp ASC');
    return NextResponse.json({ messages: result.rows });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST: add a new chat message
export async function POST(req: NextRequest) {
  try {
    const { author, avatar, text, reactions, fileUrl, fileType, fileName, parentId } = await req.json();
    if (!author || !text) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const result = await query(
      'INSERT INTO chat_messages (author, avatar, text, reactions, file_url, file_type, file_name, parent_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [author, avatar, text, reactions || 0, fileUrl, fileType, fileName, parentId]
    );
    return NextResponse.json({ message: result.rows[0] });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
