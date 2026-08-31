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
        <div className="mb-6 flex items-center justify-between border-b border-black/10 pb-4 text-[9px] tracking-[.15em]"><span>05 PRODUCTS</span><span>FREE DELIVERY OVER £50</span></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => <article key={product.id} className="group flex min-h-[390px] flex-col border-b border-black/10 px-3 py-5 transition-colors duration-500 hover:bg-[#f0eadf]/50 sm:px-5 md:min-h-[500px] md:border-r md:last:border-r-0">
            <div className="relative flex flex-1 items-center justify-center overflow-hidden"><Image src={product.src} alt={product.name} width={280} height={390} className="can-shadow h-[69%] w-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]" /></div>
            <div className="pt-4"><div className="flex justify-between gap-2"><h2 className="flex items-center gap-1.5 text-[11px] font-medium leading-tight"><span className="h-1.5 w-1.5 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125" style={{ backgroundColor: product.shade }} />{product.name}</h2><span className="shrink-0 text-[10px]">£{product.price}</span></div><p className="mt-1 min-h-[28px] text-[9px] leading-relaxed text-black/55">{product.note} · 4.2% ABV</p><button onClick={() => handleAdd(product.id)} className={`u-line mt-4 self-start pb-0.5 text-[9px] tracking-[.15em] ${added === product.id ? "font-medium" : ""}`}>{added === product.id ? "ADDED ✓" : "ADD TO CART"}</button></div>
          </article>)}
        </div>
        <div className="mt-10 grid gap-5 border-y border-black/10 py-8 text-center md:grid-cols-3 md:text-left"><div><p className="text-[9px] tracking-[.15em]">COLD-PACKED</p><p className="mt-2 text-xs text-black/60">Packed to arrive ready for the fridge.</p></div><div><p className="text-[9px] tracking-[.15em]">DELIVERY ON US</p><p className="mt-2 text-xs text-black/60">Free delivery when your order reaches £50.</p></div><div className="md:text-right"><Link href="/cart" className="inline-block border-b border-black pb-1 text-[10px] tracking-[.14em]">VIEW MY BAG</Link></div></div>
      </section>
      <MixBuilder />
    </main>
  );
}
