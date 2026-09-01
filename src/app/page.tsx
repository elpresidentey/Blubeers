"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import MixBuilder from "@/components/MixBuilder";
import { products, toCartProduct } from "@/lib/products";

export default function Home() {
  const { add } = useCart();
  const [added, setAdded] = useState<string | null>(null);
  const [joined, setJoined] = useState(false);

  function addProduct(id: string) {
    const product = products.find((item) => item.id === id);
    if (!product) return;
    add(toCartProduct(product));
    setAdded(id);
    window.setTimeout(() => setAdded(null), 1600);
  }

  return (
    <main className="bg-[#FCFAF6] text-[#1a1a1a]">
      <section className="relative min-h-[100svh] overflow-hidden bg-[#1e4961]">
        <Image src="/images/blu-hero.png" alt="BLU light lagers beneath a blue sky" fill priority className="animate-hero-zoom object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-[#09283b]/42" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061f30]/85 via-[#062336]/18 to-[#061f30]/28" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-[1280px] flex-col justify-end px-5 pb-14 pt-28 sm:px-6 md:px-8 md:pb-20">
          <div className="max-w-[780px] text-white">
            <p className="animate-rise text-[9px] tracking-[0.24em] text-white/80">COLD-FERMENTED · 4.2% ABV · VEGAN</p>
            <h1 className="animate-rise-delay mt-4 font-serif text-[clamp(4.25rem,10vw,9.5rem)] font-medium leading-[.79] tracking-[-0.055em] drop-shadow-[0_3px_20px_rgba(0,0,0,.22)]">BLU<br /><span className="font-light italic">BEVERAGES</span></h1>
            <p className="animate-rise-delay mt-6 max-w-sm text-[13px] leading-relaxed text-white/85 sm:text-sm">Bright fruit. Clean finish. A light lager made for sun-struck tables and the long way home.</p>
            <div className="animate-rise-delay mt-7 flex flex-wrap items-center gap-3"><Link href="/shop" className="bg-white px-6 py-3 text-[10px] font-medium tracking-[.16em] text-black transition-colors hover:bg-black hover:text-white">SHOP THE LAGERS</Link><a href="#lager-series" className="px-2 py-3 text-[10px] tracking-[.14em] text-white/90 underline decoration-white/50 underline-offset-4 hover:text-white">MEET THE RANGE</a></div>
          </div>
          <div className="absolute bottom-7 right-5 text-right text-[9px] tracking-[.18em] text-white/65 sm:right-6 md:right-8">LONDON · CASABLANCA<br />SERVE ICE-COLD</div>
        </div>
      </section>

      <section aria-label="Store highlights" className="overflow-hidden border-b border-black/10 bg-[#f5f0e8] py-4"><div className="animate-marquee flex w-max text-[9px] tracking-[.16em] text-black/65">{[0, 1].map((copy) => <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">{["FREE DELIVERY OVER £50", "COLD-PACKED TO YOUR DOOR", "98–102 KCAL", "GLUTEN FREE", "VEGAN FRIENDLY"].map((item) => <span key={item} className="flex items-center"><span className="px-7">{item}</span><span className="text-black/25">✦</span></span>)}</div>)}</div></section>

      <section id="lager-series" className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 md:px-8 md:py-24">
        <div className="grid gap-8 border-b border-black/10 pb-9 md:grid-cols-[1.1fr_.7fr] md:items-end md:gap-12"><div className="text-left"><p className="text-left text-[9px] tracking-[.22em] text-black/55">THE LAGER SERIES</p><h2 className="mt-3 max-w-xl text-left font-serif text-4xl leading-[.9] tracking-[-.03em] md:text-6xl">Four flavours.<br /><span className="font-light italic">One clear idea.</span></h2></div><p className="max-w-[320px] text-left text-xs leading-relaxed text-black/60 md:ml-auto md:text-left">Cold fermented, lightly hopped and built around bright, natural flavour.</p></div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 4).map((product, index) => {
          const bg: Record<string, string> = {
            lime: "radial-gradient(120% 120% at 30% 20%, #f7fbd1 0%, #eef2d8 55%, #e8e9d6 100%)",
            peach: "radial-gradient(120% 120% at 30% 20%, #fff6e8 0%, #fae1d0 55%, #f5ddd0 100%)",
            "blood-orange": "radial-gradient(120% 120% at 30% 20%, #fff0e6 0%, #ffd6c2 45%, #ffb79a 100%)",
            agave: "radial-gradient(120% 120% at 30% 20%, #f0f7f0 0%, #dce9dd 55%, #d9e8dd 100%)",
          };
          const isBlood = product.id === "blood-orange";
          return (
            <article
              key={product.id}
              className={`group relative flex flex-col overflow-hidden rounded-[22px] border bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] ${isBlood ? "border-[#ffb79a]/50 shadow-[0_8px_24px_rgba(255,154,98,0.18)]" : "border-black/10"}`}
            >
              <Link href={`/shop/${product.id}`} className="absolute inset-0 z-10" aria-label={`View ${product.name} — ${product.flavour}`} />
              <div className="relative aspect-[4/3.3] overflow-hidden p-6 sm:p-7" style={{ background: bg[product.id] || "#f5f0e8" }}>
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="rounded-full bg-white/90 px-2.5 py-1 text-[8px] tracking-[0.14em] text-black/70 backdrop-blur border border-black/5">0{index + 1} • {product.abv}</span>
                  {isBlood && <span className="rounded-full bg-[#ff4d1a] px-2.5 py-1 text-[8px] font-medium tracking-[0.14em] text-white">BOLD</span>}
                </div>
                <Image
                  src={product.src}
                  alt={`${product.name} — ${product.flavour}. ${product.description}`}
                  width={300}
                  height={420}
                  className="can-shadow absolute left-1/2 top-1/2 h-[62%] w-auto -translate-x-1/2 -translate-y-[44%] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.06] group-hover:-rotate-[1deg]"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-black px-2.5 py-1 text-[8px] tracking-[0.12em] text-white/90">{product.kcal}</span>
                <span className="absolute bottom-4 right-4 hidden h-7 w-7 place-items-center rounded-full bg-white/90 text-black backdrop-blur border border-black/10 group-hover:grid">↗</span>
              </div>
              <div className="relative z-20 flex flex-1 flex-col p-5">
                <h3 className="font-serif text-[15px] leading-tight tracking-[-0.01em]">{product.name}</h3>
                <p className="mt-1 font-serif text-[11px] italic text-black/55">{product.flavour}</p>
                <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-black/60">{product.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {product.tasting.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full border border-black/10 bg-[#FCFAF6] px-2 py-1 text-[8px] tracking-wide text-black/60">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4">
                  <span className="text-[12px] font-medium">£{product.price}.00</span>
                  <button
                    onClick={() => addProduct(product.id)}
                    className={`relative z-30 rounded-full px-3.5 py-1.5 text-[9px] tracking-[0.14em] transition-colors ${added === product.id ? "bg-[#1a3a32] text-white" : "bg-black text-white hover:bg-white hover:text-black hover:outline hover:outline-1 hover:outline-black"}`}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    {added === product.id ? "ADDED ✓" : "ADD +"}
                  </button>
                </div>
                <p className="mt-2 text-right text-[8px] tracking-wide text-black/40">Click card for flavour & inside</p>
              </div>
            </article>
          );
        })}</div>
        <div className="mt-8 flex justify-center"><Link href="/shop" className="border border-black px-7 py-3 text-[10px] tracking-[.16em] transition-colors hover:bg-black hover:text-white">SHOP ALL LAGERS</Link></div>
      </section>

      <section className="grid border-y border-black/10 md:grid-cols-2"><div className="relative min-h-[530px] overflow-hidden md:min-h-[680px]"><Image src="/images/blu-terrace.jpg" alt="Friends sharing BLU lager on a terrace" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" /><div className="absolute inset-0 bg-black/15" /><p className="absolute bottom-6 left-5 text-[9px] tracking-[.16em] text-white/85 sm:left-8">THE COAST, AT THE TABLE</p></div><div className="flex min-h-[430px] flex-col justify-between bg-[#dbe7e9] p-8 sm:p-12 md:min-h-[680px] md:p-16"><div><p className="text-[9px] tracking-[.22em] text-black/55">BREWED FOR LONG TABLES</p><h2 className="mt-5 max-w-md font-serif text-5xl leading-[.86] tracking-[-.035em] md:text-7xl">Light enough<br /><span className="font-light italic">to linger.</span></h2></div><div className="max-w-sm"><p className="text-sm leading-relaxed text-black/65">We use lager yeast, low temperatures and a light touch of hops. The result is crisp enough for another round.</p><Link href="/journals" className="mt-7 inline-block border-b border-black pb-1 text-[10px] tracking-[.16em]">OUR BREWING NOTES</Link></div></div></section>

      <MixBuilder />

      <section className="bg-[#161b22] px-5 py-16 text-white sm:px-6 md:px-8 md:py-24"><div className="mx-auto grid max-w-[850px] gap-8 text-center"><div><p className="text-[9px] tracking-[.24em] text-white/55">BLUE SKY INBOX</p><h2 className="mt-4 font-serif text-4xl leading-[.9] md:text-6xl">The good kind of<br /><span className="font-light italic">mail.</span></h2><p className="mx-auto mt-5 max-w-md text-sm text-white/65">Fresh drops, tasting notes and an honest 10% off your first order.</p></div><form onSubmit={(event) => { event.preventDefault(); setJoined(true); }} className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row"><label className="sr-only" htmlFor="home-email">Email address</label><input id="home-email" required type="email" placeholder="Your email address" className="min-w-0 flex-1 border border-white/25 bg-transparent px-4 py-3 text-xs text-white outline-none transition-colors placeholder:text-white/45 hover:border-white/45 focus:border-white" /><button className="border border-white bg-white px-6 py-3 text-[10px] tracking-[.15em] text-black transition-colors hover:bg-transparent hover:text-white">{joined ? "YOU’RE IN ✓" : "SIGN ME UP"}</button></form>{joined && <p role="status" className="text-[11px] text-white/65">Welcome to the bright side.</p>}</div></section>
    </main>
  );
}
