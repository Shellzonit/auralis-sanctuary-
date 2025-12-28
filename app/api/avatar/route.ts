import { NextRequest, NextResponse } from 'next/server';
import B2 from 'backblaze-b2';

const b2 = new B2({
  applicationKeyId: process.env.B2_KEY_ID!,
  applicationKey: process.env.B2_APPLICATION_KEY!,
});
const BUCKET_ID = process.env.B2_BUCKET_ID!;

export const runtime = 'nodejs'; // Ensure Node.js runtime for file handling

export async function POST(req: NextRequest) {
  try {
    // Parse multipart form data
    const formData = await req.formData();
    const file = formData.get('file') as File;
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Authorize and get upload URL
    await b2.authorize();
    const { data: uploadData } = await b2.getUploadUrl({ bucketId: BUCKET_ID });

    // Upload file
    const fileName = `avatars/${Date.now()}-${file.name}`;
    const uploadRes = await b2.uploadFile({
      uploadUrl: uploadData.uploadUrl,
      uploadAuthToken: uploadData.authorizationToken,
      fileName,
      data: buffer,
      mime: file.type,
    });

    // Get public URL
    const publicUrl = `${b2.downloadUrl}/file/${uploadRes.data.fileName}`;
    return NextResponse.json({ url: publicUrl });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Upload failed' }, { status: 500 });
  }
}
