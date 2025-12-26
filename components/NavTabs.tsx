import Link from "next/link";

export default function NavTabs() {
  return (
    <nav className="w-full flex justify-center mb-8">
      <ul className="flex gap-6 bg-black/60 px-6 py-2 rounded-full border border-fuchsia-400/30 shadow-lg shadow-fuchsia-400/10">
        <li>
          <Link href="/" className="text-lg font-medium text-fuchsia-300 hover:text-white transition">Home</Link>
        </li>
        <li>
          <Link href="/chat" className="text-lg font-medium text-sky-300 hover:text-white transition">Chat</Link>
        </li>
        <li>
          <Link href="/content" className="text-lg font-medium text-emerald-300 hover:text-white transition">Content</Link>
        </li>
        <li>
          <Link href="/mail" className="text-lg font-medium text-pink-300 hover:text-white transition">Email</Link>
        </li>
        <li>
          <Link href="/games" className="text-lg font-medium text-yellow-300 hover:text-white transition">Games</Link>
        </li>
        <li>
          <Link href="/license" className="text-lg font-medium text-red-300 hover:text-white transition">Licensing</Link>
        </li>
      </ul>
    </nav>
  );
}
