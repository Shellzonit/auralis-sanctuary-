// API route for Circles & Roots (KV-based)
import { NextRequest, NextResponse } from "next/server";

// Example in-memory KV store (replace with real KV in production)
const circlesKV: Record<string, any> = {};

export async function GET(req: NextRequest) {
  // Return all circles
  return NextResponse.json({ circles: circlesKV });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  // Assume data has { id, ...rest }
  if (!data.id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  circlesKV[data.id] = data;
  return NextResponse.json({ success: true, circle: data });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  if (!id || !circlesKV[id]) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  delete circlesKV[id];
  return NextResponse.json({ success: true });
}
