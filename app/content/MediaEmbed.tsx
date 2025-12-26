// Placeholder MediaEmbed component for demo purposes
export default function MediaEmbed({ url }: { url: string }) {
  // Simple preview: show the URL and a note
  return (
    <div className="bg-neutral-800 text-neutral-200 p-2 rounded text-xs">
      <span>Embedded: </span>
      <a href={url} target="_blank" rel="noopener noreferrer" className="underline text-blue-300">{url}</a>
    </div>
  );
}
