export type StoreProduct = {
  id: string;
  name: string;
  price: number;
  src: string;
  note: string;
  shade: string;
  flavour: string;
  description: string;
  tasting: string[];
  content: string;
  abv: string;
  kcal: string;
};

export const products: StoreProduct[] = [
  { id: "lime", name: "Lime Lager", price: 18, src: "/images/blu-lime.png", note: "Lime zest · 99 kcal", shade: "#eef2d8", flavour: "Zesty & bright", description: "Cold-fermented lager lifted with natural lime zest and a pinch of sea salt. Crisp on the front, soft citrus on the finish.", tasting: ["Lime peel", "Sea salt", "Light malt", "Crisp finish"], content: "Water, barley malt, hops, natural lime flavour. Vegan. Gluten-free.", abv: "4.2% ABV", kcal: "99 kcal / 330ml" },
  { id: "peach", name: "Peach Lager", price: 18, src: "/images/blu-peach.png", note: "Soft peach · 101 kcal", shade: "#fae1d0", flavour: "Silky & sun-warmed", description: "Soft, sun-warmed peach folded into a clean lager base. Stone-fruit aroma, silky palate.", tasting: ["White peach", "Soft malt", "Stone fruit", "Silky finish"], content: "Water, barley malt, hops, natural peach flavour. Vegan. Gluten-free.", abv: "4.2% ABV", kcal: "101 kcal / 330ml" },
  { id: "blood-orange", name: "Blood Orange Lager", price: 18, src: "/images/blu-blood.png", note: "Bittersweet citrus · 102 kcal", shade: "#f4d3bd", flavour: "Bold & bittersweet", description: "Bittersweet blood orange over a light lager backbone. Citrus-forward with a gentle bitter edge.", tasting: ["Blood orange", "Bitter citrus", "Light hops", "Dry finish"], content: "Water, barley malt, hops, natural blood orange flavour. Vegan. Gluten-free.", abv: "4.2% ABV", kcal: "102 kcal / 330ml" },
  { id: "agave", name: "Agave Lager", price: 18, src: "/images/blu-agave.png", note: "Crisp agave · 98 kcal", shade: "#dce9dd", flavour: "Crisp & clean", description: "Desert inspiration. Clean agave spirit notes over a cold-fermented lager. Dry, crisp, quietly sweet.", tasting: ["Blue agave", "Desert herbs", "Clean malt", "Dry finish"], content: "Water, barley malt, hops, natural agave flavour. Vegan. Gluten-free.", abv: "4.2% ABV", kcal: "98 kcal / 330ml" },
  { id: "mix-pack", name: "Discovery Mix Pack", price: 32, src: "/images/blu-hero.png", note: "Six cans · all four flavours", shade: "#dbeaf1", flavour: "Taster of the range", description: "Two of each? Six of one? Build your own. This pack is the fastest way to find your favourite — all four lagers, cold-packed.", tasting: ["Lime", "Peach", "Blood Orange", "Agave"], content: "6 × 330ml cans. Mix of Lime, Peach, Blood Orange & Agave. Vegan. Gluten-free.", abv: "4.2% ABV", kcal: "98–102 kcal per can" },
];

export const toCartProduct = (product: StoreProduct) => ({
  id: product.id,
  name: product.name,
  price: product.price,
  flavor: product.note,
  color: product.shade,
  accent: "BLU",
});
