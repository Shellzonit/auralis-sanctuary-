import fetch from 'node-fetch';

// Example: Fetch news from a public API (e.g., NewsAPI.org or similar)
// You must provide your own API key for real use
const NEWS_API_URL = 'https://newsapi.org/v2/everything';
const API_KEY = process.env.NEWS_API_KEY || '';

export async function fetchAINews() {
  const params = new URLSearchParams({
    q: 'artificial intelligence OR AI OR machine learning',
    language: 'en',
    sortBy: 'publishedAt',
    pageSize: '5',
    apiKey: API_KEY,
  });
  const url = `${NEWS_API_URL}?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch news');
  const data = await res.json() as { articles?: any[] };
  // Map to a simplified format
  return (data.articles || []).map((article: any) => ({
    title: article.title,
    summary: article.description,
    image: article.urlToImage,
    url: article.url,
    publishedAt: article.publishedAt,
    source: article.source?.name,
  }));
}
