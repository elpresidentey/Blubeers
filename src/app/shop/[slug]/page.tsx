import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) return {};
  return {
    title: `${product.name} — BLU Beverages`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) notFound();

  return (
    <main className="bg-[#FCFAF6]">
      <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-6 md:px-8">
        <Link href="/shop" className="text-[10px] tracking-[.14em] underline decoration-black/20 underline-offset-4 hover:decoration-black">
          ← BACK TO SHOP
        </Link>
      </div>

      <section className="mx-auto grid max-w-[1280px] gap-10 px-5 pb-16 sm:px-6 md:grid-cols-2 md:px-8 md:pb-24">
        <div className="relative flex min-h-[520px] items-center justify-center border border-black/10 bg-white p-8 md:min-h-[640px]">
          <Image src={product.src} alt={product.name} width={420} height={580} className="can-shadow h-[76%] w-auto object-contain" priority />
          <span className="absolute left-4 top-4 bg-black px-2 py-1 text-[9px] tracking-[.14em] text-white">4.2% ABV · {product.kcal}</span>
        </div>

        <div className="flex flex-col">
          <p className="text-[9px] tracking-[.22em] text-black/55">{product.flavour.toUpperCase()} · COLD-FERMENTED</p>
          <h1 className="mt-3 font-serif text-4xl leading-[.9] tracking-[-.03em] md:text-5xl">{product.name}</h1>
          <p className="mt-1 text-[11px] tracking-wide text-black/60">{product.abv} · {product.kcal} · Vegan · Gluten free</p>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-black/70">{product.description}</p>

          <div className="mt-8 border-y border-black/10 py-6">
            <h2 className="text-[9px] tracking-[.18em]">FLAVOUR PROFILE</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.tasting.map((t) => (
                <span key={t} className="border border-black/15 px-3 py-1.5 text-[10px] tracking-wide">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="border-b border-black/10 py-6">
            <h2 className="text-[9px] tracking-[.18em]">WHAT&apos;S INSIDE</h2>
            <p className="mt-3 text-xs leading-relaxed text-black/65">{product.content}</p>
            <p className="mt-3 text-[11px] text-black/55">Serve ice-cold. Best enjoyed within 9 months. Contains barley.</p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="font-serif text-2xl">£{product.price}.00</span>
            <span className="text-[10px] tracking-wide text-black/55">6 × 330ml · Free delivery over £50</span>
          </div>

          <AddToCartButton productId={product.id} />

          <p className="mt-4 text-center text-[10px] tracking-wide text-black/50">Secure checkout · Cold-packed to your door</p>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f5f0e8] px-5 py-10 sm:px-6 md:px-8">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-black/60">Not sure? Build a 6-can mix of any flavours for £30.</p>
          <Link href="/shop#mix-builder" className="border border-black px-6 py-3 text-[10px] tracking-[.16em] hover:bg-black hover:text-white">
            BUILD YOUR MIX
          </Link>
        </div>
      </section>
    </main>
  );
}
