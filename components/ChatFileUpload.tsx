import { useRef, useState, ChangeEvent } from 'react';
import axios from 'axios';

interface ChatFileUploadProps {
  onUpload?: (filename: string) => void;
}

export default function ChatFileUpload({ onUpload }: ChatFileUploadProps) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    setUploading(true);
    setError('');
    try {
      // 1. Get upload URL and token from API
      const { data } = await axios.get('/api/b2/get-upload-url');
      if (!data.uploadUrl || !data.authorizationToken) throw new Error('Failed to get upload URL');
      // 2. Upload file to B2
      await axios.post(data.uploadUrl, file, {
        headers: {
          Authorization: data.authorizationToken,
          'X-Bz-File-Name': encodeURIComponent(file.name),
          'Content-Type': file.type,
          'X-Bz-Content-Sha1': 'do_not_verify',
        },
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
      });
      setUploading(false);
      if (onUpload) onUpload(file.name);
    } catch (err) {
      setError('Upload failed');
      setUploading(false);
    }
  }

  return (
    <div style={{ marginTop: 8 }}>
      <input
        type="file"
        ref={fileInput}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <button
        type="button"
        onClick={() => fileInput.current && fileInput.current.click()}
        disabled={uploading}
        style={{ background: '#C2A86C', color: '#18191a', border: 'none', borderRadius: 6, padding: '8px 16px', fontWeight: 700, cursor: 'pointer' }}
      >
        {uploading ? 'Uploading...' : 'Upload File'}
      </button>
      {error && <div style={{ color: '#ff6b6b', marginTop: 4 }}>{error}</div>}
    </div>
  );
}
