import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help & Info - BLU Light Lager",
  description: "Delivery, returns, gift cards, sustainability and contact details for BLU Light Lager.",
};

const topics = [
  { id: "delivery", label: "DELIVERY" },
  { id: "returns", label: "RETURNS" },
  { id: "gift-cards", label: "GIFT CARDS" },
  { id: "sustainability", label: "SUSTAINABILITY" },
  { id: "contact", label: "CONTACT" },
];

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-[#FCFAF6]">
      <header className="border-b border-black/10 px-6 py-16 text-center md:py-24">
        <p className="text-[9px] tracking-[.22em] text-black/55">GOOD QUESTIONS, GOOD ANSWERS</p>
        <h1 className="mt-4 font-serif text-5xl leading-[.84] tracking-[-.04em] md:text-7xl">Help <span className="font-light italic">&amp; info.</span></h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-black/60">Everything about ordering, receiving and (rarely) returning your lager.</p>
      </header>

      <nav aria-label="Page topics" className="border-b border-black/10 bg-[#f5f0e8] px-5 py-4 sm:px-6 md:px-8"><div className="mx-auto flex max-w-[1280px] flex-wrap justify-center gap-x-8 gap-y-2 text-[9px] tracking-[.16em] text-black/65">{topics.map((topic) => <a key={topic.id} href={`#${topic.id}`} className="u-line pb-0.5">{topic.label}</a>)}</div></nav>

      <div className="mx-auto max-w-[720px] px-5 py-12 sm:px-6 md:py-16">
        <section id="delivery" className="scroll-mt-24 border-b border-black/10 py-10 first:pt-0">
          <p className="text-[9px] tracking-[.22em] text-black/55">01</p>
          <h2 className="mt-2 font-serif text-4xl leading-[.9] tracking-[-.03em]">Delivery</h2>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-black/70">
            <p>Orders are cold-packed and dispatched within 1–2 working days. UK delivery takes 2–4 working days from dispatch.</p>
            <p><strong className="font-medium text-black">Free delivery on orders over £50.</strong> Below that, delivery is calculated at checkout.</p>
            <p>Someone 18+ must be available to sign for the parcel — it is alcohol, after all.</p>
          </div>
        </section>

        <section id="returns" className="scroll-mt-24 border-b border-black/10 py-10">
          <p className="text-[9px] tracking-[.22em] text-black/55">02</p>
          <h2 className="mt-2 font-serif text-4xl leading-[.9] tracking-[-.03em]">Returns</h2>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-black/70">
            <p>If anything arrives damaged or not quite right, email us within 48 hours of delivery and we will make it right — a replacement box or a full refund, your choice.</p>
            <p>For food-safety reasons we can’t accept returns of opened cans, but honest problems always get an honest fix.</p>
          </div>
        </section>

        <section id="gift-cards" className="scroll-mt-24 border-b border-black/10 py-10">
          <p className="text-[9px] tracking-[.22em] text-black/55">03</p>
          <h2 className="mt-2 font-serif text-4xl leading-[.9] tracking-[-.03em]">Gift cards</h2>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-black/70">
            <p>Digital gift cards, delivered by email within minutes. Redeemable across the full range — single flavours, mix packs, everything.</p>
            <p>Want one? Email <a href="mailto:hello@blu.beer?subject=Gift%20cards" className="u-line pb-0.5">hello@blu.beer</a> with the amount and we will sort the rest.</p>
          </div>
        </section>

        <section id="sustainability" className="scroll-mt-24 border-b border-black/10 py-10">
          <p className="text-[9px] tracking-[.22em] text-black/55">04</p>
          <h2 className="mt-2 font-serif text-4xl leading-[.9] tracking-[-.03em]">Sustainability</h2>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-black/70">
            <p>Every can is infinitely recyclable aluminium, and our cold-fermented process is chosen as much for efficiency as for taste — less energy, no waste, nothing to hide.</p>
            <p>The lager is vegan, gluten free and built on natural ingredients. Light beer, light footprint.</p>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-10">
          <p className="text-[9px] tracking-[.22em] text-black/55">05</p>
          <h2 className="mt-2 font-serif text-4xl leading-[.9] tracking-[-.03em]">Contact</h2>
          <div className="mt-5 space-y-3 text-sm leading-relaxed text-black/70">
            <p>Questions, wholesale, artist commissions or just tasting notes to share — write to us at <a href="mailto:hello@blu.beer" className="u-line pb-0.5">hello@blu.beer</a>. We reply within one working day.</p>
            <p>Brewed in London · Served everywhere the sun is out.</p>
          </div>
        </section>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-black/10 py-7">
          <span className="text-[9px] tracking-[.15em]">STILL THIRSTY FOR ANSWERS?</span>
          <Link href="/shop" className="border border-black px-6 py-3 text-[10px] tracking-[.16em] transition-colors hover:bg-black hover:text-white">SHOP THE LAGERS</Link>
        </div>
      </div>
    </main>
  );
}