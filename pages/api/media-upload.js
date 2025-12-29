
import formidable from 'formidable';
import { saveMediaMetadata } from './lib/db.js';
import { uploadToB2 } from './lib/b2.js';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    console.error('UPLOAD API ERROR: Method not allowed');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('UPLOAD API ERROR: Form parse error', err);
      return res.status(500).json({ error: 'Form parse error', details: String(err) });
    }
    const { title, artist, type } = fields;
    const file = files.file;
    if (!file) {
      console.error('UPLOAD API ERROR: No file uploaded');
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Read file buffer from disk
    let fileBuffer;
    try {
      fileBuffer = await fs.promises.readFile(file.filepath);
    } catch (e) {
      console.error('UPLOAD API ERROR: Failed to read uploaded file', e);
      return res.status(500).json({ error: 'Failed to read uploaded file', details: String(e) });
    }

    // 1. Upload file to Backblaze B2
    let fileUrl;
    try {
      fileUrl = await uploadToB2(fileBuffer, file.originalFilename || file.newFilename || 'upload', file.mimetype || 'application/octet-stream');
    } catch (e) {
      console.error('UPLOAD API ERROR: B2 upload failed', e);
      return res.status(500).json({ error: 'B2 upload failed', details: String(e) });
    }

    // 2. Save metadata to Neon
    try {
      await saveMediaMetadata({
        title,
        artist,
        type,
        url: fileUrl,
        created_at: new Date(),
      });
    } catch (e) {
      console.error('UPLOAD API ERROR: DB save failed', e);
      return res.status(500).json({ error: 'DB save failed', details: String(e) });
    }

    res.status(200).json({ success: true, url: fileUrl });
  });
}
