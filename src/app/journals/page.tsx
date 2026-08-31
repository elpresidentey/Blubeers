import Image from "next/image";
import Link from "next/link";
import { journalPosts } from "@/lib/journal";

export default function JournalsPage() {
  return (
    <main className="min-h-screen bg-[#FCFAF6]">
      <header className="border-b border-black/10 bg-[#dbe7e9] px-6 py-16 text-center md:py-24"><p className="text-[9px] tracking-[.22em] text-black/55">BLU JOURNAL</p><h1 className="mt-4 font-serif text-5xl leading-[.84] tracking-[-.04em] md:text-7xl">Notes from<br /><span className="font-light italic">the bright side.</span></h1><p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-black/60">Brewing, tasting and the small worlds behind the cans.</p></header>
      <section className="mx-auto max-w-[1100px] px-6 py-10 md:py-16">{journalPosts.map((post, index) => <article key={post.slug} className="grid gap-7 border-b border-black/10 py-9 first:pt-0 md:grid-cols-[.9fr_1.1fr] md:items-center md:gap-14"><Link href={`/journals/${post.slug}`} className={`group relative block aspect-[4/3] overflow-hidden bg-[#f0e5d3] transition-colors duration-700 group-hover:bg-[#eadfc8] ${index % 2 ? "md:order-2" : ""}`}><Image src={post.image} alt={post.title} fill className="object-contain p-8 transition-transform duration-700 group-hover:scale-[1.04]" sizes="(min-width: 768px) 45vw, 100vw" /></Link><div className={index % 2 ? "md:order-1" : ""}><p className="text-[9px] tracking-[.18em] text-black/55">{post.tag.toUpperCase()}</p><Link href={`/journals/${post.slug}`} className="mt-3 block font-serif text-3xl leading-[.9] tracking-[-.02em] transition-opacity hover:opacity-55 md:text-4xl">{post.title}</Link><p className="mt-4 max-w-md text-sm leading-relaxed text-black/60">{post.excerpt}</p><Link href={`/journals/${post.slug}`} className="u-line mt-6 inline-block pb-0.5 text-[10px] tracking-[.14em]">READ THE NOTE</Link></div></article>)}</section>
      <section className="border-t border-black/10 px-6 py-12 text-center"><h2 className="font-serif text-3xl">Enjoy with a cold lager.</h2><Link href="/shop" className="mt-5 inline-block border border-black px-6 py-3 text-[10px] tracking-[.14em] transition-colors hover:bg-black hover:text-white">SHOP LAGERS</Link></section>
    </main>
  );
}
