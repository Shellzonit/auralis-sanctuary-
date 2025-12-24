export async function POST(req: Request) {
  try {
    const data = await req.json();

    // This is where you can connect to a database later.
    // For now, we simply log it to the server console.
    console.log("New Join Submission:", data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
    });
  }
}
