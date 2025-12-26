import MediaEmbed from "../content/MediaEmbed";

function extractLinks(text = "") {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.match(urlRegex) || [];
}

export default function ChatMessage({ message }: { message: { content: string } }) {
  const links = extractLinks(message.content);
  return (
    <div className="p-3 rounded-lg bg-red-900/40 border border-red-700/40 shadow-md shadow-red-900/30">
      <p className="whitespace-pre-wrap mb-2">{message.content}</p>
      {links.map((url, i) => (
        <MediaEmbed key={i} url={url} />
      ))}
    </div>
  );
}
