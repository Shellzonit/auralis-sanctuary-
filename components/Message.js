// Shows the message text + embeds any media links
import React from "react";
import MediaEmbed from "./MediaEmbed";

function extractLinks(text = "") {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.match(urlRegex) || [];
}

export default function Message({ message }) {
  const links = extractLinks(message.text);
  return (
    <div className="p-3 rounded-lg bg-neutral-900/40 space-y-3">
      <p className="whitespace-pre-wrap">{message.text}</p>
      {links.map((url, i) => (
        <MediaEmbed key={i} url={url} />
      ))}
    </div>
  );
}
