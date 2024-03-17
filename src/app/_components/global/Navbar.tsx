"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavOption {
  title: string;
  href: string;
}

const navOptions: NavOption[] = [
  { title: "Beranda", href: "/" },
  { title: "Berita", href: "/berita" },
  { title: "Sub-organ", href: "/sub-organ" },
  { title: "Tentang", href: "/tentang" },
  { title: "Developer", href: "/developer" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="relative z-[999] mx-auto w-full max-w-[1192px]">
      <div className="fixed left-1/2 top-[24.5px] flex w-full max-w-[703px] -translate-x-1/2 justify-between rounded-full border border-neutral-300 bg-[rgba(255,255,255,0.04)] px-2 py-1 backdrop-blur-xl">
        {navOptions.map((navOption) => (
          <Link
            key={navOption.title}
            href={navOption.href}
            className={`w-1/5 rounded-full py-2 text-center transition-all duration-300 hover:text-primary-400 ${pathname === navOption.href ? "text-red-400" : ""}`}
          >
            {navOption.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}