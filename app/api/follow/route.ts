import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

// POST: Follow a user
export async function POST(req: NextRequest) {
  const { follower, following } = await req.json();
  if (!follower || !following || follower === following) {
    return NextResponse.json({ error: 'Invalid follow request' }, { status: 400 });
  }
  try {
    await query(
      'INSERT INTO follows (follower_username, following_username) VALUES ($1, $2) ON CONFLICT DO NOTHING',
      [follower, following]
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Database error', details: String(error) }, { status: 500 });
  }
}

// DELETE: Unfollow a user
export async function DELETE(req: NextRequest) {
  const { follower, following } = await req.json();
  if (!follower || !following || follower === following) {
    return NextResponse.json({ error: 'Invalid unfollow request' }, { status: 400 });
  }
  try {
    await query(
      'DELETE FROM follows WHERE follower_username = $1 AND following_username = $2',
      [follower, following]
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Database error', details: String(error) }, { status: 500 });
  }
}

// GET: Get follower/following counts for a user
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username');
  if (!username) {
    return NextResponse.json({ error: 'Missing username' }, { status: 400 });
  }
  try {
    const followers = await query('SELECT COUNT(*) FROM follows WHERE following_username = $1', [username]);
    const following = await query('SELECT COUNT(*) FROM follows WHERE follower_username = $1', [username]);
    return NextResponse.json({
      followers: Number(followers.rows[0].count),
      following: Number(following.rows[0].count)
    });
  } catch (error) {
    return NextResponse.json({ error: 'Database error', details: String(error) }, { status: 500 });
  }
}
