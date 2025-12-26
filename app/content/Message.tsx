import MediaEmbed from "./MediaEmbed";

function extractLinks(text = "") {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.match(urlRegex) || [];
}

export default function Message({ message }) {
  const links = extractLinks(message.text);

  return (
    <div className="p-3 rounded-lg bg-neutral-900/40 space-y-3">
      {/* The message text */}
      <p className="whitespace-pre-wrap">{message.text}</p>

      {/* Any links inside the message get embedded */}
      {links.map((url, i) => (
        <MediaEmbed key={i} url={url} />
      ))}
    </div>
  );
}
