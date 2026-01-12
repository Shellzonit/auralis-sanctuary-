// scripts/generateEventStories.js
// Reads aiEvents.json and generates Carlotta stories for each event
const fetch = require('node-fetch');
const fs = require('fs');

const events = JSON.parse(fs.readFileSync('aiEvents.json', 'utf-8'));

async function generateStory(event) {
  const prompt = `Write a short, original news story about this AI event for our readers. Event: ${event.name}. Date: ${event.start}. Location: ${event.location}. Description: ${event.description || ''}`;
  const res = await fetch('http://localhost:3000/api/carlotta-news', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic: prompt })
  });
  const data = await res.json();
  return { ...event, story: data.story };
}

(async () => {
  const results = [];
  for (const event of events) {
    try {
      const result = await generateStory(event);
      results.push(result);
      console.log(`Generated story for: ${event.name}`);
    } catch (e) {
      console.error(`Failed for ${event.name}:`, e);
    }
  }
  fs.writeFileSync('eventStories.json', JSON.stringify(results, null, 2));
  console.log('All event stories saved to eventStories.json');
})();
