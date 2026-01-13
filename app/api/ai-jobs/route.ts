export async function GET() {
  return Response.json([
    {
      title: "AI Prompt Engineer",
      company: "AIWilding Sanctuary",
      location: "Remote",
      updated: "2026-01-13"
    }
  ]);
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
