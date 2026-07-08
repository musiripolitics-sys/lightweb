export type Product = {
  name: string;
  /** Either a spec descriptor ("Deep Antiglare") or a model code ("HNE 2164"). */
  code: string;
  /** Optional product photo under /public, e.g. "/images/products/beamer.png". */
  image?: string;
};

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  products: Product[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "recessed-downlights",
    title: "Recessed Downlights",
    tagline: "Seamless, glare-free illumination for every space.",
    products: [
      { name: "Tardis", code: "Deep Recessed COB Light" },
      { name: "Bross", code: "SMD Downlight" },
      { name: "Deep Antiglare", code: "HNE 1101" },
      { name: "Trimless Square", code: "HNE 1102" },
      { name: "Adjustable COB", code: "HNE 1103" },
      { name: "Micro Spot", code: "HNE 1104" },
    ],
  },
  {
    slug: "wall-lights",
    title: "Wall Lights & Sconces",
    tagline: "Sculpt walls with directional, architectural light.",
    products: [
      { name: "Square Wall Sconce", code: "Deep Antiglare" },
      { name: "Wall Light", code: "HNE 2002" },
      { name: "Round COB Wall Light", code: "HNE 2004" },
      { name: "Wall Spotlight", code: "HNE 2005" },
      { name: "Surface Path Light", code: "Deep Antiglare" },
      { name: "Up-Down Wall Light", code: "HNE 2008" },
    ],
  },
  {
    slug: "bollards",
    title: "Bollards & Path Lights",
    tagline: "Guide the way with refined ground-level lighting.",
    products: [
      { name: "2 Way Bollard", code: "Deep Antiglare" },
      { name: "Round Bollard", code: "HNE 3101" },
      { name: "Square Bollard", code: "HNE 3102" },
      { name: "Louvered Path Light", code: "HNE 3103" },
    ],
  },
  {
    slug: "floodlights",
    title: "Floodlights",
    tagline: "Powerful, precise wash for facades and landscapes.",
    products: [
      { name: "Power Linear Floodlight", code: "Deep Antiglare" },
      { name: "Square LED Floodlight", code: "Deep Antiglare" },
      { name: "Slim Wall Washer", code: "HNE 4103" },
      { name: "Compact Floodlight", code: "HNE 4104" },
    ],
  },
  {
    slug: "gate-pillar-lights",
    title: "Gate & Pillar Lights",
    tagline: "Timeless lanterns that frame every entrance.",
    products: [
      { name: "Gate Pillar Light", code: "Deep Antiglare" },
      { name: "Frosted Gate Light", code: "Deep Antiglare" },
      { name: "Square Post Top Lantern", code: "Deep Antiglare" },
      { name: "Square Pillar Light", code: "Deep Antiglare" },
      { name: "Cube Pillar Light", code: "Deep Antiglare" },
      { name: "Square Gate Lantern", code: "Deep Antiglare" },
    ],
  },
  {
    slug: "garden-spotlights",
    title: "Garden Spotlights",
    tagline: "Accent trees, sculpture and detail after dark.",
    products: [
      { name: "Beamer", code: "HNE 2164" },
      { name: "Beamer 1", code: "HNE 2165" },
      { name: "UFO", code: "HNE 2166" },
      { name: "Spike Spotlight", code: "HNE 2167" },
    ],
  },
];
