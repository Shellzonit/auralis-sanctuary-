// test-api.js
// Simple script to test your API endpoints for file upload and DB write

const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

async function testUpload() {
  const form = new FormData();
  form.append('title', 'Test Title');
  form.append('artist', 'Test Artist');
  form.append('type', 'image');
  form.append('file', fs.createReadStream('test-image.jpg'));

  try {
    const res = await axios.post('http://localhost:3000/api/media-upload', form, {
      headers: form.getHeaders(),
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });
    console.log('Upload success:', res.data);
  } catch (err) {
    console.error('Upload failed:', err.response ? err.response.data : err.message);
  }
}

testUpload();
