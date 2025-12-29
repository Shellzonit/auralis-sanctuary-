// openai-integrity-check.js
// Simple Node.js script to check if the OpenAI API key is valid by listing available models

const axios = require('axios');

async function checkOpenAIKey() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error('OPENAI_API_KEY is not set in environment variables.');
    process.exit(1);
  }
  try {
    const response = await axios.get('https://api.openai.com/v1/models', {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });
    if (response.status === 200 && response.data && response.data.data) {
      console.log('✅ OpenAI API key is valid. Model count:', response.data.data.length);
      process.exit(0);
    } else {
      console.error('❌ Unexpected response from OpenAI:', response.status, response.data);
      process.exit(2);
    }
  } catch (err) {
    if (err.response) {
      console.error('❌ OpenAI API error:', err.response.status, err.response.data);
    } else {
      console.error('❌ Error connecting to OpenAI:', err.message);
    }
    process.exit(3);
  }
}

checkOpenAIKey();
