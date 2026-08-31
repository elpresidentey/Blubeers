"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";
import { products } from "@/lib/products";

const flavours = products.slice(0, 4);
const initialCounts: Record<string, number> = { lime: 2, peach: 2, "blood-orange": 1, agave: 1 };

export default function MixBuilder() {
  const { add } = useCart();
  const [counts, setCounts] = useState(initialCounts);
  const [added, setAdded] = useState(false);
  const total = Object.values(counts).reduce((sum, quantity) => sum + quantity, 0);
  const summary = useMemo(() => flavours.filter((product) => counts[product.id]).map((product) => `${counts[product.id]} × ${product.name.replace(" Lager", "")}`).join(" · "), [counts]);

  function changeCount(id: string, next: number) {
    if (next < 0 || next > 6 || (next > counts[id] && total >= 6)) return;
    setCounts((current) => ({ ...current, [id]: next }));
    setAdded(false);
  }

  function addMix() {
    if (total !== 6) return;
    const selection = flavours.map((product) => `${product.id}-${counts[product.id]}`).join("-");
    add({ id: `your-mix-${selection}`, name: "Your 6-can mix", price: 30, flavor: summary, color: "#dbe7e9", accent: "BLU" });
    setAdded(true);
  }

  return (
    <section id="mix-builder" className="border-y border-black/10 bg-[#f0e5d3] px-5 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-7 border-b border-black/10 pb-8 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="text-[9px] tracking-[.22em] text-black/55">MAKE IT YOURS</p><h2 className="mt-3 font-serif text-5xl leading-[.86] tracking-[-.04em] md:text-7xl">Build a box<br /><span className="font-light italic">for the table.</span></h2></div>
          <p className="max-w-[280px] text-sm leading-relaxed text-black/60 md:text-right">Six cans, any balance. We’ll cold-pack your exact mix for £30.</p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_.72fr] lg:gap-14">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {flavours.map((product) => {
              const quantity = counts[product.id];
              return <div key={product.id} className="group relative flex min-h-[270px] flex-col justify-between border-b border-black/10 p-4 transition-colors duration-500 hover:bg-[#ece2cd]/60 sm:min-h-[330px] sm:p-5 md:border-r md:last:border-r-0">
                <Image src={product.src} alt={product.name} width={200} height={280} className="can-shadow absolute left-1/2 top-1/2 h-[48%] w-auto -translate-x-1/2 -translate-y-1/2 object-contain transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                {quantity > 0 && <span className="absolute right-3 top-3 rounded-full bg-black px-1.5 py-0.5 text-[8px] leading-none text-white sm:right-4 sm:top-4" aria-hidden="true">×{quantity}</span>}
                <p className="relative flex items-center gap-2 text-[9px] tracking-[.13em] text-black/55"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: product.shade }} />{product.name.replace(" Lager", "")}</p>
                <div className="relative flex items-center justify-between pt-3"><button onClick={() => changeCount(product.id, quantity - 1)} disabled={quantity === 0} className="grid h-7 w-7 place-items-center border border-black/25 text-base transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-25" aria-label={`Remove ${product.name}`}>−</button><span className="text-[11px]" aria-label={`${quantity} cans of ${product.name}`}>{quantity}</span><button onClick={() => changeCount(product.id, quantity + 1)} disabled={total >= 6} className="grid h-7 w-7 place-items-center border border-black/25 text-base transition-colors hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-25" aria-label={`Add ${product.name}`}>+</button></div>
              </div>;
            })}
          </div>

          <div className="flex flex-col justify-between border border-black/15 bg-[#FCFAF6] p-6 sm:p-8">
            <div><div className="flex items-baseline justify-between"><p className="text-[9px] tracking-[.2em] text-black/55">YOUR COLD BOX</p><span className="font-serif text-3xl leading-none">{total}<span className="ml-1 text-sm text-black/45">/ 6</span></span></div><div className="mt-5 flex h-1 overflow-hidden bg-black/10">{flavours.map((product) => <span key={product.id} className="h-full bg-black transition-all duration-300 first:bg-[#85b69a] last:bg-[#be8f73]" style={{ width: `${(counts[product.id] / 6) * 100}%`, opacity: counts[product.id] ? 1 : 0 }} />)}</div><p className="mt-5 min-h-12 text-sm leading-relaxed text-black/65">{total === 6 ? summary : `${6 - total} more can${6 - total === 1 ? "" : "s"} to complete your mix.`}</p></div>
            <div className="mt-8"><div className="flex items-center justify-between border-t border-black/10 pt-4 text-xs"><span>Six-can mix</span><span>£30.00</span></div><button onClick={addMix} disabled={total !== 6} className="mt-5 w-full bg-black px-6 py-3.5 text-[10px] tracking-[.16em] text-white transition-colors hover:bg-transparent hover:text-black hover:outline hover:outline-1 hover:outline-black disabled:cursor-not-allowed disabled:bg-black/20 disabled:text-black/45">{added ? "MIX IN YOUR BAG ✓" : total === 6 ? "ADD YOUR MIX" : "COMPLETE YOUR MIX"}</button><button onClick={() => { setCounts(initialCounts); setAdded(false); }} className="u-line mx-auto mt-4 block pb-0.5 text-[9px] tracking-[.14em]">RESET TO OUR PICK</button></div>
          </div>
        </div>
      </div>
    </section>
  );
}
