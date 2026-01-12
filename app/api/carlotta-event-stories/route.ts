import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'eventStories.json');
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const stories = JSON.parse(data);
    return Response.json({ stories });
  } catch (e) {
    return Response.json({ error: 'No event stories found.' }, { status: 404 });
  }
}
