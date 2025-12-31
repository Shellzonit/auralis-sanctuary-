// Next.js API route to get a Backblaze B2 upload URL and token
import { NextResponse } from 'next/server';

const B2 = require('backblaze-b2');

const b2 = new B2({
  applicationKeyId: process.env.B2_KEY_ID,
  applicationKey: process.env.B2_APPLICATION_KEY,
});

export async function GET() {
  try {
    await b2.authorize();
    const { data } = await b2.getUploadUrl({
      bucketId: process.env.B2_BUCKET_ID,
    });
    return NextResponse.json({
      uploadUrl: data.uploadUrl,
      authorizationToken: data.authorizationToken,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
