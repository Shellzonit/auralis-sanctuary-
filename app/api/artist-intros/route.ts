import { NextRequest, NextResponse } from "next/server";

// In-memory store for artist intros (resets on server restart)
let intros: Array<{ id: string; name: string; intro: string; time: string }> = [];

export async function GET() {
  // Return all intros, newest first
  return NextResponse.json({ intros: intros.slice().reverse() });
}

export async function POST(req: NextRequest) {
  const { name, intro } = await req.json();
  if (!name || !intro) {
    return NextResponse.json({ error: "Missing name or intro" }, { status: 400 });
  }
  const newIntro = {
    id: Math.random().toString(36).slice(2),
    name,
    intro,
    time: new Date().toISOString(),
  };
  intros.push(newIntro);
  return NextResponse.json({ success: true, intro: newIntro });
}
