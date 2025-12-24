import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const jobsFile = path.join(process.cwd(), 'app/api/jobs/jobs.json');

export async function GET() {
  const data = fs.readFileSync(jobsFile, 'utf-8');
  return NextResponse.json(JSON.parse(data));
}

export async function POST(request: Request) {
  const job = await request.json();
  const data = fs.readFileSync(jobsFile, 'utf-8');
  const jobs = JSON.parse(data);
  jobs.unshift(job);
  fs.writeFileSync(jobsFile, JSON.stringify(jobs, null, 2));
  return NextResponse.json({ success: true });
}
