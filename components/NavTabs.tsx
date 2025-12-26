
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTabs() {
  const pathname = usePathname();
  const tabs = [
    { href: "/", label: "Home" },
    { href: "/chat", label: "Chat" },
    { href: "/content", label: "Content" },
    { href: "/artist-intros", label: "Artist Intros" },
    { href: "/mail", label: "Email" },
    { href: "/games", label: "Games" },
    { href: "/license", label: "Licensing" },
  ];
  return (
    <nav className="w-full flex justify-center mb-8">
      <ul className="flex gap-8 bg-black/80 px-10 py-4 rounded-full border-2 border-white/40 shadow-2xl">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                className={`text-2xl font-extrabold tracking-wide px-6 py-2 rounded-lg transition relative
                  text-white
                  ${isActive ? "glow-tab-strong" : "glow-tab-soft"}
                  hover:glow-tab-strong focus:glow-tab-strong outline-none`}
                tabIndex={0}
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
