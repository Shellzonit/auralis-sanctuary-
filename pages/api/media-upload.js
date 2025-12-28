import formidable from 'formidable';
import { saveMediaMetadata } from '../../../lib/db'; // You will need to implement this
import { uploadToB2 } from '../../../lib/b2'; // You will need to implement this

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Form parse error' });
    const { title, artist, type } = fields;
    const file = files.file;
    if (!file) return res.status(400).json({ error: 'No file uploaded' });

    // 1. Upload file to Backblaze B2
    let fileUrl;
    try {
      fileUrl = await uploadToB2(file);
    } catch (e) {
      return res.status(500).json({ error: 'B2 upload failed' });
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
      return res.status(500).json({ error: 'DB save failed' });
    }

    res.status(200).json({ success: true, url: fileUrl });
  });
}
