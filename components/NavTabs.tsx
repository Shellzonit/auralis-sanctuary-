
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTabs() {
  const pathname = usePathname();
  const tabs = [
    { href: "/", label: "Home", color: "text-fuchsia-300" },
    { href: "/chat", label: "Chat", color: "text-sky-300" },
    { href: "/content", label: "Content", color: "text-emerald-300" },
    { href: "/mail", label: "Email", color: "text-pink-300" },
    { href: "/games", label: "Games", color: "text-yellow-300" },
    { href: "/license", label: "Licensing", color: "text-red-300" },
  ];
  return (
    <nav className="w-full flex justify-center mb-8">
      <ul className="flex gap-6 bg-black/60 px-6 py-2 rounded-full border border-fuchsia-400/30 shadow-lg shadow-fuchsia-400/10">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                className={`text-lg font-medium ${tab.color} hover:text-white transition ${
                  isActive ? "underline underline-offset-8 decoration-2 text-white" : ""
                }`}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
