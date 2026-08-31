import Image from "next/image";
import Link from "next/link";

const artists = [
  { name: "Mara Lee", style: "Botanical & Bright", img: "/images/blu-lime.png", taste: "Lime", quote: "I wanted the can to breathe — green, crisp, a little weightless. Like sea air." },
  { name: "Jonas Park", style: "Soft Pastel Pop", img: "/images/blu-peach.png", taste: "Peach", quote: "Peach is a sunset taste — warm, hazy, soft at the edges." },
  { name: "Sofia Reyes", style: "Citrus Surreal", img: "/images/blu-blood.png", taste: "Blood Orange", quote: "Blood orange is intense and bittersweet. The art had to be bold." },
  { name: "Ava Agave", style: "Desert Minimal", img: "/images/blu-agave.png", taste: "Agave", quote: "Agave is sharp and clean — desert light, crisp finish." },
];

export default function IllustratorsPage() {
  return (
    <main className="min-h-screen bg-[#FCFAF6]">
      <header className="border-b border-black/10 px-6 py-16 text-center md:py-24">
        <p className="text-[9px] tracking-[.22em] text-black/55">THE CANVAS SERIES</p>
        <h1 className="mt-4 font-serif text-5xl leading-[.84] tracking-[-.04em] md:text-7xl">Four artists.<br /><span className="font-light italic">Four small worlds.</span></h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-black/60">Every BLU lager is a canvas — meet the artists behind the four cans, each brewed 4.2%.</p>
      </header>

      <section className="mx-auto max-w-[1280px] px-5 py-10 sm:px-6 md:px-8 md:py-16">
        <div className="grid gap-px border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {artists.map((a) => (
            <article key={a.name} className="group flex flex-col bg-[#FCFAF6] text-center">
              <div className="flex aspect-[4/5] items-center justify-center p-8">
                <Image src={a.img} alt={`${a.taste} can illustrated by ${a.name}`} width={260} height={340} className="can-shadow h-full max-h-[260px] w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
              </div>
              <div className="flex flex-1 flex-col border-t border-black/10 p-6">
                <div className="text-[8px] tracking-[.16em] text-black/55">{a.style} · {a.taste.toUpperCase()} · 4.2% ABV</div>
                <h3 className="mt-2 font-serif text-2xl tracking-[-.02em]">{a.name}</h3>
                <p className="mt-2 flex-1 font-serif text-[13px] italic leading-relaxed text-black/65">“{a.quote}”</p>
                <Link href="/journals/meet-the-artists" className="u-line mx-auto mt-4 pb-0.5 text-[10px] tracking-[.14em]">READ THE FEATURE</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 px-6 py-14 text-center">
        <h2 className="font-serif text-4xl leading-[.9] tracking-[-.03em] md:text-5xl">Want to <span className="font-light italic">collaborate?</span></h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-black/60">We commission a new artist every season — the brief is always: crisp, cold-fermented, light lager.</p>
        <div className="mt-7 flex justify-center gap-3">
          <Link href="/journals" className="border border-black px-7 py-3 text-[10px] tracking-[.16em] transition-colors hover:bg-black hover:text-white">JOURNAL</Link>
          <Link href="/help#contact" className="border border-black bg-black px-7 py-3 text-[10px] tracking-[.16em] text-white transition-colors hover:bg-transparent hover:text-black">CONTACT</Link>
        </div>
      </section>
    </main>
  );
}
