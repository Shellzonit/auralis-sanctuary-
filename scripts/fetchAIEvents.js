// scripts/fetchAIEvents.js
// Fetches real AI events from Eventbrite API and saves them for Carlotta's bot hub
const fetch = require('node-fetch');
const fs = require('fs');

const EVENTBRITE_TOKEN = process.env.EVENTBRITE_TOKEN; // Set this in your .env
const EVENTBRITE_URL = 'https://www.eventbriteapi.com/v3/events/search/?q=artificial+intelligence&sort_by=date';

async function fetchEvents() {
  const res = await fetch(EVENTBRITE_URL, {
    headers: { Authorization: `Bearer ${EVENTBRITE_TOKEN}` }
  });
  if (!res.ok) throw new Error('Failed to fetch events');
  const data = await res.json();
  return (data.events || []).map(event => ({
    name: event.name.text,
    description: event.description.text,
    url: event.url,
    start: event.start.local,
    end: event.end.local,
    location: event.venue ? event.venue.address.localized_address_display : 'Online',
  }));
}

(async () => {
  try {
    const events = await fetchEvents();
    fs.writeFileSync('aiEvents.json', JSON.stringify(events, null, 2));
    console.log('Fetched and saved AI events to aiEvents.json');
  } catch (e) {
    console.error('Error fetching events:', e);
  }
})();
