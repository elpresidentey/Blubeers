"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import MixBuilder from "@/components/MixBuilder";
import { products, toCartProduct } from "@/lib/products";

export default function ShopPage() {
  const { add } = useCart();
  const [added, setAdded] = useState<string | null>(null);

  function handleAdd(id: string) {
    const product = products.find((item) => item.id === id);
    if (!product) return;
    add(toCartProduct(product));
    setAdded(id);
    window.setTimeout(() => setAdded(null), 1500);
  }

  return (
    <main className="min-h-screen bg-[#FCFAF6]">
      <section className="relative overflow-hidden border-b border-black/10 px-5 pb-12 pt-16 text-white sm:px-6 md:px-8 md:pb-16 md:pt-24">
        <Image src="/images/blu-collage.jpg" alt="BLU lager moments from around the world" fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-[#071b28]/42" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061f30]/85 via-[#062336]/18 to-[#061f30]/25" />
        <div className="relative mx-auto w-full max-w-[1280px]">
          <p className="text-[9px] tracking-[.22em] text-white/75">THE FULL RANGE</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-medium leading-[.82] tracking-[-.04em] drop-shadow-[0_3px_18px_rgba(0,0,0,.25)] md:text-7xl">Cold lager.<br /><span className="font-light italic">Bright character.</span></h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/82">Light on the palate, generous with flavour. All orders are cold-packed and sent with care.</p>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-5 py-10 sm:px-6 md:px-8 md:py-16">
        <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-4 text-[9px] tracking-[.15em]"><span>05 PRODUCTS • TAP ANY CARD FOR FLAVOUR & INSIDE</span><span>FREE DELIVERY OVER £50</span></div>
        <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {products.map((product, idx) => {
            const bg: Record<string, string> = {
              lime: "radial-gradient(120% 120% at 30% 20%, #f7fbd1 0%, #eef2d8 55%, #e8e9d6 100%)",
              peach: "radial-gradient(120% 120% at 30% 20%, #fff6e8 0%, #fae1d0 55%, #f5ddd0 100%)",
              "blood-orange": "radial-gradient(120% 120% at 30% 20%, #fff0e6 0%, #ffd6c2 45%, #ffb79a 100%)",
              agave: "radial-gradient(120% 120% at 30% 20%, #f0f7f0 0%, #dce9dd 55%, #d9e8dd 100%)",
              "mix-pack": "radial-gradient(120% 120% at 30% 20%, #eef6fb 0%, #dbeaf1 55%, #d6e4f0 100%)",
            };
            const isBlood = product.id === "blood-orange";
            const isLastSingle = idx === products.length - 1 && products.length % 4 === 1;
            return (
              <article
                key={product.id}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[22px] border bg-white transition-all duration-300 hover:z-10 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)] border-black/10 ${isLastSingle ? "lg:col-start-2" : ""}`}
              >
                <Link href={`/shop/${product.id}`} className="absolute inset-0 z-10" aria-label={`View ${product.name} — ${product.flavour}`} />
                <div className="relative aspect-[4/3.4] overflow-hidden p-6" style={{ background: bg[product.id] || "#f5f0e8" }}>
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[8px] tracking-[0.14em] text-black/70 backdrop-blur border border-black/5">{product.abv} • {product.kcal.split(" ")[0]} {product.kcal.split(" ")[1]}</span>
                  {isBlood && <span className="absolute right-4 top-4 rounded-full bg-[#ff4d1a] px-2.5 py-1 text-[8px] font-medium tracking-[0.14em] text-white">BOLD</span>}
                  <Image src={product.src} alt={`${product.name} — ${product.flavour}`} width={280} height={390} className="can-shadow absolute left-1/2 top-1/2 h-[64%] w-auto -translate-x-1/2 -translate-y-[46%] object-contain transition-transform duration-700 group-hover:scale-[1.05] group-hover:-rotate-[1deg]" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-black px-2.5 py-1 text-[8px] tracking-[0.12em] text-white/90">£{product.price}.00</span>
                  <span className="absolute bottom-4 right-4 hidden h-7 w-7 place-items-center rounded-full bg-white/90 text-black backdrop-blur border border-black/10 group-hover:grid">↗</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-serif text-[14px] leading-tight tracking-[-0.01em]">{product.name}</h2>
                  <p className="mt-1 font-serif text-[11px] italic text-black/55">{product.flavour}</p>
                  <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-black/60">{product.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {product.tasting.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full border border-black/10 bg-[#FCFAF6] px-2 py-1 text-[8px] tracking-wide text-black/60">
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-[8px] leading-relaxed text-black/45 line-clamp-1">{product.content}</p>
                  <button
                    onClick={() => handleAdd(product.id)}
                    className={`relative z-30 mt-4 w-full rounded-full py-2.5 text-[9px] tracking-[0.14em] transition-colors ${added === product.id ? "bg-[#1a3a32] text-white" : "bg-black text-white hover:bg-white hover:text-black hover:outline hover:outline-1 hover:outline-black"}`}
                  >
                    {added === product.id ? "ADDED ✓" : "ADD TO CART"}
                  </button>
                  <p className="mt-2 text-center text-[8px] tracking-wide text-black/35">Tap card for tasting notes</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-10 grid gap-5 border-y border-black/10 py-8 text-center md:grid-cols-3 md:text-left"><div><p className="text-[9px] tracking-[.15em]">COLD-PACKED</p><p className="mt-2 text-xs text-black/60">Packed to arrive ready for the fridge.</p></div><div><p className="text-[9px] tracking-[.15em]">DELIVERY ON US</p><p className="mt-2 text-xs text-black/60">Free delivery when your order reaches £50.</p></div><div className="md:text-right"><Link href="/cart" className="inline-block border-b border-black pb-1 text-[10px] tracking-[.14em]">VIEW MY BAG</Link></div></div>
      </section>
      <MixBuilder />
    </main>
  );
}
