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

  return null;
}
