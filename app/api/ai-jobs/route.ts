  return Response.json([
    {
      title: "AI Prompt Engineer",
      company: "AIWilding Sanctuary",
      location: "Remote",
      updated: "2026-01-13"
    }
  ]);
}
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
