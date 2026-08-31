export type StoreProduct = {
  id: string;
  name: string;
  price: number;
  src: string;
  note: string;
  shade: string;
};

export const products: StoreProduct[] = [
  { id: "lime", name: "Lime Lager", price: 18, src: "/images/blu-lime.png", note: "Lime zest · 99 kcal", shade: "#eef2d8" },
  { id: "peach", name: "Peach Lager", price: 18, src: "/images/blu-peach.png", note: "Soft peach · 101 kcal", shade: "#fae1d0" },
  { id: "blood-orange", name: "Blood Orange Lager", price: 18, src: "/images/blu-blood.png", note: "Bittersweet citrus · 102 kcal", shade: "#f4d3bd" },
  { id: "agave", name: "Agave Lager", price: 18, src: "/images/blu-agave.png", note: "Crisp agave · 98 kcal", shade: "#dce9dd" },
  { id: "mix-pack", name: "Discovery Mix Pack", price: 32, src: "/images/blu-hero.png", note: "Six cans · all four flavours", shade: "#dbeaf1" },
];

export const toCartProduct = (product: StoreProduct) => ({
  id: product.id,
  name: product.name,
  price: product.price,
  flavor: product.note,
  color: product.shade,
  accent: "BLU",
});
