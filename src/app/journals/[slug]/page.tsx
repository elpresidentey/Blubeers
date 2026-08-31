import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJournalPost, journalPosts } from "@/lib/journal";

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export default async function JournalPostPage(props: PageProps<"/journals/[slug]">) {
  const { slug } = await props.params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  return <main className="min-h-screen bg-[#FCFAF6]"><article><header className="border-b border-black/10 bg-[#f0e5d3] px-6 pb-12 pt-16 text-center md:pb-16 md:pt-24"><Link href="/journals" className="text-[9px] tracking-[.18em] text-black/60 underline decoration-black/25 underline-offset-4">← BACK TO JOURNAL</Link><p className="mt-8 text-[9px] tracking-[.22em] text-black/55">{post.tag.toUpperCase()}</p><h1 className="mx-auto mt-4 max-w-3xl font-serif text-5xl leading-[.86] tracking-[-.04em] md:text-7xl">{post.title}</h1></header><div className="mx-auto max-w-3xl px-6 py-10 md:py-16"><div className="relative mx-auto aspect-[4/3] max-w-xl overflow-hidden bg-[#dbe7e9]"><Image src={post.image} alt="" fill className="object-contain p-10" sizes="(min-width: 768px) 640px, 100vw" /></div><div className="mx-auto mt-10 max-w-[620px] space-y-6 text-[17px] leading-relaxed text-black/75">{post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="mx-auto mt-12 flex max-w-[620px] items-center justify-between border-y border-black/10 py-5"><span className="text-[9px] tracking-[.15em]">BEST WITH A COLD LAGER</span><Link href="/shop" className="border-b border-black pb-1 text-[10px] tracking-[.13em]">SHOP THE RANGE</Link></div></div></article></main>;
}
