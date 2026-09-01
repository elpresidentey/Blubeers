"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { products, toCartProduct } from "@/lib/products";

export default function AddToCartButton({ productId }: { productId: string }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handle() {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    add(toCartProduct(product));
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <button onClick={handle} className={`mt-6 w-full py-3.5 text-[10px] tracking-[.16em] transition-colors ${added ? "bg-[#1a3a32] text-white" : "bg-black text-white hover:bg-white hover:text-black hover:outline hover:outline-1 hover:outline-black"}`}>
      {added ? "ADDED TO CART ✓" : "ADD TO CART — £" + products.find((p) => p.id === productId)?.price + ".00"}
    </button>
  );
}
