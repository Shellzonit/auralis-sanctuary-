import { NextRequest, NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

// GET /api/profile/[username]
export async function GET(req: NextRequest, context: { params: Promise<{ username: string }> }) {
  const { username } = await context.params;
  try {
    const result = await query('SELECT username, name, bio, avatar FROM users WHERE username = $1', [username]);
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Database error', details: error }, { status: 500 });
  }
}

// PUT /api/profile/[username]
export async function PUT(req: NextRequest, context: { params: Promise<{ username: string }> }) {
  const { username } = await context.params;
  const { name, bio, avatar } = await req.json();
  try {
    const result = await query(
      'UPDATE users SET name = $1, bio = $2, avatar = $3 WHERE username = $4 RETURNING username, name, bio, avatar',
      [name, bio, avatar, username]
    );
    if (result.rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Database error', details: error }, { status: 500 });
  }
}
