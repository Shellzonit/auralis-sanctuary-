// lib/b2.js

// Helper to upload a file to Backblaze B2
// Uses environment variables:
//   B2_KEY_ID, B2_APPLICATION_KEY, B2_BUCKET_ID (see .env.local)

import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

['B2_KEY_ID', 'B2_APPLICATION_KEY', 'B2_BUCKET_ID'].forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

import axios from "axios";

export async function uploadToB2(fileBuffer, fileName, contentType) {
  try {
    // 1. Get upload URL + token from your API route
    const urlResponse = await axios.get("/api/b2/get-upload-url");
    const { uploadUrl, authorizationToken } = urlResponse.data;

    if (!uploadUrl || !authorizationToken) {
      throw new Error("Missing upload URL or authorization token");
    }

    // 2. Upload the file to Backblaze
    const uploadResponse = await axios.post(uploadUrl, fileBuffer, {
      headers: {
        Authorization: authorizationToken,
        "X-Bz-File-Name": encodeURIComponent(fileName),
        "Content-Type": contentType,
        "X-Bz-Content-Sha1": "do_not_verify", // avoids needing SHA1 hash
      },
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
    });

    return uploadResponse.data;
  } catch (error) {
    console.error("Error uploading to B2:", error);
    throw error;
  }
}
