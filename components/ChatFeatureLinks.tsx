import Link from "next/link";

const leftLinks = [
  { href: "/art", label: "Art Upload" },
  { href: "/music", label: "Music Upload" },
  { href: "/games", label: "Game Upload" },
];

const rightLinks = [
  { href: "/content", label: "Content Upload" },
  { href: "/mail", label: "Email Upload" },
  { href: "/stream", label: "Stream Upload" },
];

export default function ChatFeatureLinks() {
  return (
    <div className="flex w-full max-w-5xl justify-between my-10">
      <div className="flex flex-col gap-6 w-1/5">
        {leftLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block bg-black/60 border border-fuchsia-400/30 rounded-xl px-4 py-6 text-center text-lg font-semibold text-fuchsia-200 hover:bg-fuchsia-900/30 hover:text-white transition shadow-lg shadow-fuchsia-400/10"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-6 w-1/5">
        {rightLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block bg-black/60 border border-sky-400/30 rounded-xl px-4 py-6 text-center text-lg font-semibold text-sky-200 hover:bg-sky-900/30 hover:text-white transition shadow-lg shadow-sky-400/10"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
