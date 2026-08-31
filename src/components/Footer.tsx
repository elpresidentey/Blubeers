"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-[#EDEBE2] border-t border-black/10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] leading-relaxed">
          <div>
            <div className="font-bold tracking-[0.12em] mb-3">ABOUT BLU</div>
            <ul className="space-y-1 opacity-70">
              <li><Link href="/journals" className="hover:opacity-100">Our Story</Link></li>
              <li><Link href="/journals/cold-fermented-light-lager" className="hover:opacity-100">Brewing</Link></li>
              <li><Link href="/help#sustainability" className="hover:opacity-100">Sustainability</Link></li>
              <li><Link href="/illustrators" className="hover:opacity-100">Artists</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold tracking-[0.12em] mb-3">SHOP</div>
            <ul className="space-y-1 opacity-70">
              <li><Link href="/shop" className="hover:opacity-100">All Lagers</Link></li>
              <li><Link href="/shop#mix-builder" className="hover:opacity-100">Mix Packs</Link></li>
              <li><Link href="/help#gift-cards" className="hover:opacity-100">Gift Cards</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold tracking-[0.12em] mb-3">HELP</div>
            <ul className="space-y-1 opacity-70">
              <li><Link href="/help#contact" className="hover:opacity-100">Contact</Link></li>
              <li><Link href="/help#delivery" className="hover:opacity-100">Delivery</Link></li>
              <li><Link href="/help#returns" className="hover:opacity-100">Returns</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold tracking-[0.12em] mb-3">NEWSLETTER</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.trim()) return;
                setDone(true);
                setEmail("");
                setTimeout(() => setDone(false), 2500);
              }}
              className="flex gap-2"
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                type="email"
                required
                className="flex-1 bg-white border border-black/15 px-3 py-2 text-xs outline-none transition-colors placeholder:text-black/40 focus:border-black"
              />
              <button className="border border-black px-4 text-xs tracking-wide hover:bg-black hover:text-white transition-colors">
                {done ? "Thanks ✓" : "OK"}
              </button>
            </form>
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[9px] tracking-[.14em] opacity-60">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="u-line pb-0.5 transition-opacity hover:opacity-100">INSTAGRAM</a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="u-line pb-0.5 transition-opacity hover:opacity-100">TIKTOK</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="u-line pb-0.5 transition-opacity hover:opacity-100">X</a>
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-black/20 grid place-items-center font-serif text-sm">BLU</div>
          <div className="text-[9px] tracking-[0.16em] opacity-50 text-center">
            © 2025 BLU LIGHT LAGER • DRINK RESPONSIBLY • VEGAN • 4.2% ABV • BREWED IN LONDON
          </div>
          <div className="text-[9px] opacity-50">LONDON • CASABLANCA</div>
        </div>
      </div>
    </footer>
  );
}
