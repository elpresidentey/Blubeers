export type JournalPost = {
  slug: string;
  tag: string;
  title: string;
  image: string;
  excerpt: string;
  body: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "cold-fermented-light-lager",
    tag: "Brewing",
    title: "Cold-fermented, light lager: how we brew at 4.2%",
    image: "/images/blu-lime.png",
    excerpt: "Lager yeast, low temp, light hops, natural lime zest — crisp without stripping flavour.",
    body: ["Great lager begins with patience. We ferment cold and give the yeast time to do the quiet work: a clean, smooth finish with nothing heavy left behind.", "A light touch of hops keeps the texture crisp. Fruit arrives after fermentation, so Lime, Peach, Blood Orange and Agave each have their own bright moment without losing the beer underneath.", "The aim is simple: a lager that is easy to return to, from the first cold can to the last long conversation."],
  },
  {
    slug: "tasting-notes",
    tag: "Tasting",
    title: "Tasting notes: Lime, Peach, Blood Orange & Agave",
    image: "/images/blu-hero.png",
    excerpt: "Four lagers, one method. Sea salt and citrus, soft peach, bold blood orange, clean agave.",
    body: ["Lime is sharp and salt-bright. Peach is soft, round and almost sun-warmed. Blood Orange brings the bittersweet edge, while Agave is the cleanest, driest pour of the four.", "All four start from the same cold-fermented lager, which means choosing a favourite is less about strength and more about the moment you are pouring for.", "Try them ice-cold, straight from the can, then pour the same one into a glass. It is a small change that makes the aroma feel completely different."],
  },
  {
    slug: "meet-the-artists",
    tag: "Artists",
    title: "Meet the artists behind each can",
    image: "/images/blu-agave.png",
    excerpt: "Each can is a canvas — from botanical bright to desert minimal. See the stories.",
    body: ["We ask every artist for a world, not just a label. The cans are small objects, but they are meant to carry the feeling of where you would rather be when you crack one open.", "The Lime can is all air and green. Peach leans into a softer late-afternoon palette. Blood Orange brings an electric citrus energy, and Agave takes its cue from long shadows and clean desert light.", "Together they make the fridge feel a little less ordinary."],
  },
];

export const getJournalPost = (slug: string) => journalPosts.find((post) => post.slug === slug);
