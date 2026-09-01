"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

const left = [
  { href: "/shop", label: "Shop" },
  { href: "/journals", label: "Journal" },
];
const right = [
  { href: "/illustrators", label: "Artists" },
  { href: "/cart", label: "Cart" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useCart();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (h: string) => pathname === h || pathname.startsWith(h + "/");
  const isSolid = !isHome || scrolled || open;

  return (
    <>
      <header className={`fixed top-0 left-0 z-40 w-full border-b transition-colors duration-300 ${isSolid ? "bg-[#FCFAF6]/95 text-black backdrop-blur border-black/10" : "bg-transparent text-white border-white/20"}`}>
        <div className="hidden h-px bg-black/10 md:block" style={{ opacity: isSolid ? 1 : 0 }} />
        <nav className="mx-auto flex h-[64px] max-w-[1280px] items-center justify-between px-5 sm:px-6 lg:px-8">
          <ul className="hidden items-center gap-8 text-[10px] tracking-[0.14em] font-medium md:flex">
            {left.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={`u-line pb-0.5 ${isActive(l.href) ? "is-active" : ""}`}>
                  {l.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/" className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center leading-none transition-opacity hover:opacity-70">
            <span className="font-serif text-[18px] tracking-[0.22em] font-light">BLU</span>
            <span className={`text-[7px] tracking-[0.28em] ${isSolid ? "opacity-60" : "opacity-80"}`}>LIGHT LAGER CO.</span>
          </Link>

          <div className="flex items-center gap-8">
            <ul className="hidden items-center gap-8 text-[10px] tracking-[0.14em] font-medium md:flex">
              {right.slice(0, 1).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={`u-line pb-0.5 ${isActive(l.href) ? "is-active" : ""}`}>
                    {l.label.toUpperCase()}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/cart" className={`u-line flex items-center gap-1.5 pb-0.5 ${isActive("/cart") ? "is-active" : ""}`}>
                  CART {count > 0 && <span className={`rounded-full px-1.5 py-0.5 text-[9px] leading-none ${isSolid ? "bg-black text-white" : "bg-white text-black"}`}>{count}</span>}
                </Link>
              </li>
            </ul>

            <button className="grid h-9 w-9 place-items-center md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
              <span className={`block h-px w-5 transition-transform duration-300 ${isSolid && !open ? "bg-black" : !isSolid && !open ? "bg-white" : "bg-black"} ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`block h-px w-5 transition-opacity duration-300 ${isSolid && !open ? "bg-black" : !isSolid && !open ? "bg-white" : "bg-black"} ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-5 transition-transform duration-300 ${isSolid && !open ? "bg-black" : !isSolid && !open ? "bg-white" : "bg-black"} ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </button>
          </div>
        </nav>

        <div className={`overflow-hidden border-b border-black/10 bg-[#FCFAF6] text-black shadow-[0_18px_30px_-20px_rgba(0,0,0,0.25)] transition-all duration-300 md:hidden ${open ? "max-h-72" : "max-h-0"}`}>
          <nav className="px-6 py-2">
            {[...left, ...right].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-black/[0.07] py-3.5 text-[11px] tracking-[.16em] last:border-0 transition-opacity hover:opacity-60"
              >
                <span>{l.label.toUpperCase()}</span>
                {l.href === "/cart" && count > 0 && <span className="bg-black px-1.5 py-0.5 text-[9px] leading-none text-white">{count}</span>}
              </Link>
            ))}
          </nav>
        </div>

        <div className={`h-px ${isSolid ? "bg-black/10" : "bg-white/20"}`} />
      </header>
      {/* spacer so fixed header never covers content — not needed on home where hero sits under header */}
      {!isHome && <div aria-hidden className="h-[65px]" />}
    </>
  );
}
