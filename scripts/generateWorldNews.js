// scripts/generateWorldNews.js
// Run this script manually or with a scheduler (e.g., GitHub Actions, Vercel Cron)
const fetch = require('node-fetch');
const fs = require('fs');

const topics = [
  'AI in North America',
  'AI in Europe',
  'AI in Asia',
  'AI in Africa',
  'AI in South America',
  'AI in Australia',
  'AI in Robotics',
  'AI in Healthcare',
  'AI in Education',
  'AI in Art',
];

async function generateStory(topic) {
  const res = await fetch('http://localhost:3000/api/carlotta-news', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic })
  });
  const data = await res.json();
  return { topic, story: data.story };
}

(async () => {
  const results = [];
  for (const topic of topics) {
    try {
      const result = await generateStory(topic);
      results.push(result);
      console.log(`Generated story for: ${topic}`);
    } catch (e) {
      console.error(`Failed for ${topic}:`, e);
    }
  }
  fs.writeFileSync('worldNews.json', JSON.stringify(results, null, 2));
  console.log('All stories saved to worldNews.json');
})();
