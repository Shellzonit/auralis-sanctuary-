// ably-integrity-check.js
require('dotenv').config({ path: '.env.local' });
const Ably = require('ably');

const apiKey = process.env.NEXT_PUBLIC_ABLY_API_KEY;
if (!apiKey) {
  console.error('Missing NEXT_PUBLIC_ABLY_API_KEY');
  process.exit(1);
}


const client = new Ably.Rest(apiKey);
const channel = client.channels.get('integrity-check');

const testMessage = { text: 'Ably integrity check', timestamp: Date.now() };

channel.publish('test', testMessage, (err) => {
  if (err) {
    console.error('Ably publish failed:', err.message);
    process.exit(1);
  } else {
    channel.history({ limit: 1 }, (err, result) => {
      if (err) {
        console.error('Ably history fetch failed:', err.message);
        process.exit(1);
      } else if (result.items && result.items[0] && result.items[0].data.text === testMessage.text) {
        console.log('Ably integrity check passed: API key is valid and service is reachable.');
        process.exit(0);
      } else {
        console.error('Ably integrity check failed: Test message not found in history.');
        process.exit(1);
      }
    });
  }
});
