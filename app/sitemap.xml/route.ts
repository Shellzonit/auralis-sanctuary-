import { NextRequest, NextResponse } from 'next/server';

// This route generates a simple XML sitemap for your site
export async function GET(req: NextRequest) {
  const baseUrl = 'https://aiwilding.com';
  // Add your site routes here
  const pages = [
    '',
    '/art',
    '/artist',
    '/auth',
    '/content',
    '/email',
    '/feedback',
    '/games',
    '/join',
    '/legacy',
    '/license',
    '/mail',
    '/music',
    '/privacy',
    '/profile/aurora', // Example profile
    '/sharing',
    '/showcase',
    '/spotlight',
    '/stream',
  ];
  const urls = pages.map(
    (path) => `<url><loc>${baseUrl}${path}</loc></url>`
  ).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new NextResponse(xml, {
    status: 200,
    headers: { 'Content-Type': 'application/xml' },
  });
}
