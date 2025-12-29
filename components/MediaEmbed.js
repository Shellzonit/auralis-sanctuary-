export default function MediaEmbed({ url }) {
  const lower = url.toLowerCase();

  // -------------------------\n  // YOUTUBE\n  // -------------------------
  if (lower.includes("youtube.com") || lower.includes("youtu.be")) {
    const id =
      url.split("v=")[1]?.split("&")[0] ||
      url.split("/").pop().split("?")[0];

    return (
      <iframe
        className="w-full h-64 rounded-lg"
        src={`https://www.youtube.com/embed/${id}`}
        allowFullScreen
      />
    );
  }

  // -------------------------\n  // VIMEO\n  // -------------------------
  if (lower.includes("vimeo.com")) {
    const id = url.split("/").pop().split("?")[0];

    return (
      <iframe
        className="w-full h-64 rounded-lg"
        src={`https://player.vimeo.com/video/${id}`}
        allowFullScreen
      />
    );
  }

  // -------------------------\n  // SOUNDCLOUD\n  // -------------------------
  if (lower.includes("soundcloud.com")) {
    return (
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}`}
      />
    );
  }

  // -------------------------\n  // DIRECT AUDIO (MP3)\n  // -------------------------
  if (lower.endsWith(".mp3")) {
    return (
      <audio controls className="w-full">
        <source src={url} type="audio/mpeg" />
      </audio>
    );
  }

  // -------------------------\n  // DIRECT VIDEO (MP4)\n  // -------------------------
  if (lower.endsWith(".mp4")) {
    return (
      <video controls className="w-full rounded-lg">
        <source src={url} type="video/mp4" />
      </video>
    );
  }

  // -------------------------\n  // IMAGES (JPG, PNG, GIF, WEBP)\n  // -------------------------
  if (
    lower.endsWith(".jpg") ||
    lower.endsWith(".jpeg") ||
    lower.endsWith(".png") ||
    lower.endsWith(".gif") ||
    lower.endsWith(".webp")
  ) {
    return (
      <img
        src={url}
        alt="shared media"
        className="w-full rounded-lg"
      />
    );
  }

  // Fallback: Show a short, single-line link preview for unsupported URLs
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.replace(/^www\./, '');
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background: '#23242b',
          color: '#7fd1b9',
          borderRadius: 6,
          padding: '6px 12px',
          fontSize: 15,
          textDecoration: 'none',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          maxWidth: 320,
          minWidth: 0,
        }}
        title={url}
      >
        <img
          src={`https://www.google.com/s2/favicons?domain=${hostname}`}
          alt="favicon"
          style={{ width: 18, height: 18, marginRight: 4, flexShrink: 0 }}
        />
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 }}>
          {hostname}
        </span>
      </a>
    );
  } catch {
    return null;
  }
}
