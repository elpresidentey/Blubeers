"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  const { count } = useCart();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const isActive = (h: string) => pathname === h || pathname.startsWith(h + "/");

  return (
    <header className={`z-40 w-full transition-colors duration-300 ${isHome ? "absolute top-0 text-white" : "sticky top-0 bg-[#FCFAF6]/95 backdrop-blur border-b border-black/[0.07]"}`}>
      <div className={`hidden md:block h-px ${isHome ? "bg-white/25" : "bg-black/10"}`} />
      <nav className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between">
        <ul className="hidden md:flex items-center gap-8 text-[10px] tracking-[0.14em] font-medium">
          {left.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`u-line pb-0.5 ${isActive(l.href) ? "is-active" : ""}`}>
                {l.label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center leading-none transition-opacity hover:opacity-70">
          <span className="font-serif text-[18px] tracking-[0.22em] font-light">BLU</span>
          <span className="text-[7px] tracking-[0.28em] opacity-70">LIGHT LAGER CO.</span>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-[10px] tracking-[0.14em] font-medium">
            {right.slice(0, 1).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={`u-line pb-0.5 ${isActive(l.href) ? "is-active" : ""}`}>
                  {l.label.toUpperCase()}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/cart" className={`u-line pb-0.5 flex items-center gap-1.5 ${isActive("/cart") ? "is-active" : ""}`}>
                CART {count > 0 && <span className={`text-[9px] rounded-full px-1.5 py-0.5 leading-none transition-transform ${isHome ? "bg-white text-black" : "bg-black text-white"}`}>{count}</span>}
              </Link>
            </li>
          </ul>

          <button className="md:hidden w-9 h-9 grid place-items-center" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            <span className={`w-5 h-px block transition-transform duration-300 ${isHome && !open ? "bg-white" : "bg-black"} ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`w-5 h-px block transition-opacity duration-300 ${isHome && !open ? "bg-white" : "bg-black"} ${open ? "opacity-0" : ""}`} />
            <span className={`w-5 h-px block transition-transform duration-300 ${isHome && !open ? "bg-white" : "bg-black"} ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <div className={`md:hidden text-black border-b border-black/10 bg-[#FCFAF6] shadow-[0_18px_30px_-20px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-300 ${open ? "max-h-72" : "max-h-0"}`}>
        <nav className="px-6 py-2">
          {[...left, ...right].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-black/[0.07] py-3.5 text-[11px] tracking-[.16em] last:border-0 transition-opacity hover:opacity-60"
            >
              <span>{l.label.toUpperCase()}</span>
              {l.href === "/cart" && count > 0 && (
                <span className="bg-black px-1.5 py-0.5 text-[9px] leading-none text-white">{count}</span>
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div className={`h-px ${isHome ? "bg-white/25" : "bg-black/10"}`} />
    </header>
  );
}
