import { NextResponse } from "next/server";
import { fetchAIJobs, addAIJob, updateAIJob, deleteAIJob } from "../../../lib/supabaseJobs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || undefined;
    const industry = searchParams.get('industry') || undefined;
    const location = searchParams.get('location') || undefined;
    const jobs = await fetchAIJobs(search, industry, location);
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, company, description, pay } = body;
    if (!title || !company || !description || !pay) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const result = await addAIJob({ title, company, description, pay });
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updates } = body;
    if (!id) {
      return NextResponse.json({ error: "Missing job id" }, { status: 400 });
    }
    const result = await updateAIJob(id, updates);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "Missing job id" }, { status: 400 });
    }
    const result = await deleteAIJob(id);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
