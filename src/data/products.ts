/**
 * Honorh product catalogue.
 * Specs (model codes, sizes, cutouts, wattages, beam angles) are taken from
 * the Honorh Pricelist vol 2.0. Images live in /public/images/products/<slug>/.
 */

export type Variant = {
  code: string;
  size: string;
  cutout?: string;
  watt: string;
  beam?: string;
};

export type Product = {
  slug: string;
  name: string;
  family: string;
  /** Short technical descriptor, e.g. "Fixed Slim COB". */
  type: string;
  blurb: string;
  images: string[];
  variants: Variant[];
  cct?: string;
  /** Optional smart/control feature line, e.g. "On-Off / Tuya App / 2.4G Remote". */
  feature?: string;
  isNew?: boolean;
  featured?: boolean;
};

export type Family = {
  slug: string;
  title: string;
  tagline: string;
};

export const DEFAULT_CCT = "3000K, 4000K, 5000K, 6000K";

export const FAMILIES: Family[] = [
  {
    slug: "fixed-cob",
    title: "Fixed COB Downlights",
    tagline: "Deep-recessed, antiglare precision for ceilings that stay quiet.",
  },
  {
    slug: "adjustable",
    title: "Adjustable & Tiltable",
    tagline: "Aim the beam exactly where the space needs it.",
  },
  {
    slug: "twin",
    title: "Twin & Multi-Head",
    tagline: "Double the throw, one seamless aperture.",
  },
  {
    slug: "track",
    title: "Track & Display",
    tagline: "High-output projectors for retail and gallery walls.",
  },
  {
    slug: "wallwasher",
    title: "Wallwashers",
    tagline: "Graze walls with an even, architectural wash.",
  },
  {
    slug: "linear",
    title: "Linear & Blade",
    tagline: "Slot-thin lines of light for modern ceilings.",
  },
  {
    slug: "surface",
    title: "Surface Mounted",
    tagline: "Sculptural cylinders and discs for exposed ceilings.",
  },
  {
    slug: "outdoor",
    title: "Outdoor & Industrial",
    tagline: "Street, flood and high-bay engineered for the elements.",
  },
];

const P = (
  slug: string,
  name: string,
  family: string,
  type: string,
  blurb: string,
  imageCount: number,
  variants: Variant[],
  extra: Partial<Product> = {},
): Product => ({
  slug,
  name,
  family,
  type,
  blurb,
  images: Array.from({ length: imageCount }, (_, i) => `/images/products/${slug}/${i + 1}.jpg`),
  variants,
  cct: DEFAULT_CCT,
  ...extra,
});

export const PRODUCTS: Product[] = [
  // ------------------------------------------------ Fixed COB Downlights
  P("iris", "Iris", "fixed-cob", "Fixed Slim COB",
    "An ultra-compact aperture that vanishes into the ceiling and leaves only a crisp cone of light.",
    3,
    [
      { code: "HN1156", size: "Ø44*H91", cutout: "40mm", watt: "8W", beam: "36°" },
      { code: "HN1157", size: "Ø44*H91", cutout: "40mm", watt: "12W", beam: "36°" },
      { code: "HN1158", size: "Ø54*H88", cutout: "50mm", watt: "15W", beam: "36°" },
    ],
    { isNew: true, featured: true }),
  P("quantum", "Quantum", "fixed-cob", "Fixed Slim COB",
    "Slim-bore optics with serious punch — a favourite for premium residences.",
    3,
    [
      { code: "HN1160", size: "Ø41*H110", cutout: "35mm", watt: "10W", beam: "36°" },
      { code: "HN1161", size: "Ø63*H95", cutout: "55mm", watt: "15W", beam: "36°" },
      { code: "HN1162", size: "Ø80*H75", cutout: "75mm", watt: "20W", beam: "36°" },
    ],
    { featured: true }),
  P("craft", "Craft", "fixed-cob", "Fixed Slim COB",
    "One housing, five beam options — from a 3° pin of light to a 60° flood.",
    2,
    [
      { code: "HN1016", size: "Ø42*H68", cutout: "35mm", watt: "7W", beam: "15°/24°/36°/60°" },
      { code: "HN1017", size: "Ø57*H88", cutout: "50mm", watt: "12W", beam: "15°/24°/36°/60°" },
      { code: "HN1018", size: "Ø67*H93", cutout: "60mm", watt: "15W", beam: "3°/8°/15°/24°/36°/60°" },
    ]),
  P("splash", "Splash", "fixed-cob", "Fixed Slim COB",
    "A clean, minimal downlight tuned for even, comfortable rooms.",
    1,
    [
      { code: "HN1108", size: "Ø65*H65", cutout: "55mm", watt: "8W", beam: "36°" },
      { code: "HN1109", size: "Ø85*H85", cutout: "75mm", watt: "12W", beam: "36°/50°" },
      { code: "HN1131-TR", size: "Ø85*H86", cutout: "75mm", watt: "12W", beam: "36°/50°" },
    ]),
  P("pointer", "Pointer", "fixed-cob", "Antiglare Slim COB",
    "Recessed sharpness with a deep antiglare throat across three sizes.",
    3,
    [
      { code: "HN1001", size: "Ø62*H62", cutout: "55mm", watt: "8W", beam: "40°" },
      { code: "HN1002", size: "Ø85*H85", cutout: "75mm", watt: "15W", beam: "40°" },
      { code: "HN1003", size: "Ø105*H105", cutout: "95mm", watt: "20W", beam: "40°" },
    ]),
  P("delta", "Delta", "fixed-cob", "Fixed COB",
    "The workhorse of the range — dependable light, honest value.",
    1,
    [
      { code: "HN1004", size: "Ø70*H60", cutout: "60mm", watt: "7W", beam: "40°" },
      { code: "HN1005", size: "Ø80*H65", cutout: "75mm", watt: "12W", beam: "40°" },
      { code: "HN1006", size: "Ø95*H80", cutout: "85mm", watt: "18W", beam: "40°" },
    ]),
  P("delta-plus", "Delta Plus", "fixed-cob", "Fixed COB",
    "Delta's deeper-set sibling, with a taller body for softer cut-off.",
    2,
    [
      { code: "HN1114", size: "Ø70*H65", cutout: "60mm", watt: "7W", beam: "40°" },
      { code: "HN1115", size: "Ø85*H76", cutout: "75mm", watt: "12W", beam: "40°" },
      { code: "HN1116", size: "Ø95*H100", cutout: "80mm", watt: "18W", beam: "40°" },
    ]),
  P("brio", "Brio", "fixed-cob", "Fixed Antiglare COB",
    "Balanced glare control and output for living spaces and lobbies.",
    2,
    [
      { code: "HN1067", size: "Ø70*H65", cutout: "60mm", watt: "7W", beam: "36°" },
      { code: "HN1068", size: "Ø85*H75", cutout: "75mm", watt: "12W", beam: "36°" },
      { code: "HN1069", size: "Ø95*H100", cutout: "85mm", watt: "18W", beam: "36°" },
    ]),
  P("crysto", "Crysto", "fixed-cob", "Fixed Antiglare COB",
    "Trimless-ready antiglare optics with a jewel-like aperture.",
    2,
    [
      { code: "HN1014-TR", size: "Ø85*H70", cutout: "75mm", watt: "7W", beam: "40°" },
      { code: "HN1015-TR", size: "Ø85*H80", cutout: "75mm", watt: "12W", beam: "40°" },
    ]),
  P("noirx", "Noirx", "fixed-cob", "Fixed COB",
    "Matte-black deep cones that read as pure shadow until switched on.",
    1,
    [
      { code: "HN1163", size: "Ø62*H55", cutout: "55mm", watt: "10W", beam: "36°" },
      { code: "HN1164", size: "Ø82*H60", cutout: "75mm", watt: "15W", beam: "36°" },
      { code: "HN1165", size: "Ø102*H65", cutout: "95mm", watt: "20W", beam: "36°" },
    ],
    { isNew: true }),
  P("horizon", "Horizon", "fixed-cob", "Fixed Deep COB",
    "A single, confident spec — deep-set 15W with clean geometry.",
    2,
    [{ code: "HN1145", size: "Ø80*H75", cutout: "75mm", watt: "15W", beam: "36°" }]),
  P("hale-s", "Hale S", "fixed-cob", "Fixed Deep COB",
    "Deep-recessed comfort in a squared-shoulder housing.",
    2,
    [
      { code: "HN1173", size: "Ø60*H70", cutout: "55mm", watt: "9W", beam: "36°" },
      { code: "HN1174", size: "Ø80*H75", cutout: "75mm", watt: "15W", beam: "36°" },
    ]),
  P("hale-v", "Hale V", "fixed-cob", "Fixed Deep COB",
    "The V-profile take on Hale — same deep set, softer transition.",
    2,
    [
      { code: "HN1171", size: "Ø60*H70", cutout: "55mm", watt: "9W", beam: "36°" },
      { code: "HN1172", size: "Ø80*H75", cutout: "75mm", watt: "15W", beam: "36°" },
    ]),
  P("helios", "Helios", "fixed-cob", "Fixed Tapered COB",
    "A tapered throat that guides light down in a smooth gradient.",
    3,
    [
      { code: "HN1168", size: "Ø60*H70", cutout: "55mm", watt: "9W", beam: "36°" },
      { code: "HN1169", size: "Ø80*H75", cutout: "75mm", watt: "15W", beam: "36°" },
      { code: "HN1170-GBK", size: "Ø80*H75", cutout: "75mm", watt: "15W", beam: "36°" },
    ],
    { isNew: true }),
  P("helix", "Helix", "fixed-cob", "Fixed Curved COB",
    "Curved inner geometry for a soft, glare-free presence overhead.",
    3,
    [
      { code: "HN1184", size: "Ø60*H70", cutout: "55mm", watt: "9W", beam: "36°" },
      { code: "HN1185", size: "Ø80*H75", cutout: "75mm", watt: "15W", beam: "36°" },
      { code: "HN1186-GBK", size: "Ø80*H75", cutout: "75mm", watt: "15W", beam: "36°" },
    ],
    { isNew: true }),
  P("hiton", "Hiton", "fixed-cob", "Fixed “O” Hole COB",
    "A precise O-ring aperture that frames the source like an eclipse.",
    2,
    [
      { code: "HN1166", size: "Ø60*H70", cutout: "55mm", watt: "9W", beam: "36°" },
      { code: "HN1167", size: "Ø80*H75", cutout: "75mm", watt: "15W", beam: "36°" },
    ]),
  P("hylux", "Hylux", "fixed-cob", "Fixed Deep COB",
    "High-lumen deep COB for taller ceilings and generous rooms.",
    2,
    [
      { code: "HN1180", size: "Ø85*H70", cutout: "75mm", watt: "12W", beam: "36°" },
      { code: "HN1181", size: "Ø85*H70", cutout: "75mm", watt: "18W", beam: "36°" },
    ]),
  P("hira", "Hira", "fixed-cob", "Low-Depth Wide Lens COB",
    "Wide-lens optics in a shallow can — for ceilings with no room to spare.",
    2,
    [
      { code: "HN1182", size: "Ø63*H50", cutout: "55mm", watt: "9W", beam: "36°" },
      { code: "HN1183", size: "Ø85*H55", cutout: "75mm", watt: "15W", beam: "36°" },
    ]),
  P("aurex", "Aurex", "fixed-cob", "Low-Depth Wide Lens COB",
    "Barely-there depth, wide comfortable spread, three outputs.",
    2,
    [
      { code: "HN1175", size: "Ø70*H43", cutout: "75mm", watt: "10W", beam: "36°" },
      { code: "HN1176", size: "Ø80*H46", cutout: "75mm", watt: "15W", beam: "36°" },
      { code: "HN1177", size: "Ø90*H54", cutout: "85mm", watt: "20W", beam: "36°" },
    ]),
  P("crater", "Crater", "fixed-cob", "Curved Antiglare COB",
    "A crater-smooth reflector in trim and trimless editions.",
    2,
    [
      { code: "HN1025", size: "Ø63*H76", cutout: "55mm", watt: "9W", beam: "36°/60°" },
      { code: "HN1026", size: "Ø63*H94", cutout: "55mm", watt: "12W", beam: "36°/60°" },
      { code: "HN1027", size: "Ø82*H100", cutout: "75mm", watt: "18W", beam: "36°/60°" },
      { code: "HN1028-TR", size: "Ø61*H86", cutout: "55mm", watt: "9W", beam: "36°/60°" },
      { code: "HN1029-TR", size: "Ø61*H104", cutout: "55mm", watt: "12W", beam: "36°/60°" },
      { code: "HN1030-TR", size: "Ø74*H105", cutout: "75mm", watt: "18W", beam: "36°/60°" },
    ]),
  P("concave", "Concave", "fixed-cob", "Curved Deep COB",
    "Soft concave curves in single and twin apertures.",
    2,
    [
      { code: "HN1146", size: "Ø80*80*H43", cutout: "75mm", watt: "12W", beam: "36°" },
      { code: "HN1147", size: "Ø80*80*H43", cutout: "75mm", watt: "15W", beam: "36°" },
    ],
    { isNew: true }),
  P("tardis", "Tardis", "fixed-cob", "Fixed Deep COB",
    "Deeper on the inside — signature deep-recessed comfort with trimless option.",
    2,
    [
      { code: "HN1103", size: "Ø63*H78", cutout: "55mm", watt: "7W", beam: "24°" },
      { code: "HN1104", size: "Ø84*H84", cutout: "75mm", watt: "12W", beam: "36°" },
      { code: "HN1130-TR", size: "Ø84*H85", cutout: "76mm", watt: "12W", beam: "36°" },
    ],
    { featured: true }),
  P("abot", "Abot", "fixed-cob", "Deep Antiglare · Trim & Trimless",
    "One body, two rings — swap trim for trimless without changing the fixture.",
    2,
    [
      { code: "HN1040", size: "Ø57.5*H73", cutout: "55mm", watt: "10W", beam: "36°" },
      { code: "HN1040A", size: "Ø57.5*H74", cutout: "55mm", watt: "10W", beam: "36°" },
      { code: "HN1042", size: "Ø57.5*H73", cutout: "65mm", watt: "15W", beam: "36°" },
      { code: "HN1042A", size: "Ø57.5*H74", cutout: "66mm", watt: "15W", beam: "36°" },
    ]),
  P("armor", "Armor", "fixed-cob", "Deep Wide Lens COB",
    "Heavy-duty output behind a deep wide lens — up to 36W.",
    2,
    [
      { code: "HN1117", size: "Ø85*H75", cutout: "75mm", watt: "18W", beam: "40°" },
      { code: "HN1118", size: "Ø130*H75", cutout: "120mm", watt: "30W", beam: "60°" },
      { code: "HN1119", size: "Ø130*H75", cutout: "120mm", watt: "36W", beam: "60°" },
    ]),
  P("steam", "Steam", "fixed-cob", "IP65 Deep COB",
    "Sealed against steam and spray — bathrooms, spas and outdoor soffits.",
    2,
    [
      { code: "HN1102", size: "Ø88*H72", cutout: "80mm", watt: "12W", beam: "40°" },
      { code: "HN1102A", size: "Ø108*H81", cutout: "102mm", watt: "20W", beam: "40°" },
    ]),

  // ------------------------------------------------ Adjustable & Tiltable
  P("aux1", "Aux1", "adjustable", "Slim Tiltable COB",
    "A slim gimbal that tilts without breaking the ceiling line.",
    2,
    [
      { code: "HN1151", size: "Ø40*H82", cutout: "35mm", watt: "8W", beam: "15°/24°/36°" },
      { code: "HN1152", size: "Ø50*H93", cutout: "45mm", watt: "12W", beam: "15°/24°/36°" },
      { code: "HN1153", size: "Ø69*H105", cutout: "55mm", watt: "15W", beam: "15°/24°/36°" },
    ]),
  P("stealth", "Stealth", "adjustable", "Adjustable COB",
    "Disappears flush, then pivots to paint art, shelves or stone.",
    3,
    [
      { code: "HN1154", size: "Ø82*H73", cutout: "75mm", watt: "12W", beam: "24°/36°/50°" },
      { code: "HN1155", size: "Ø90*H82", cutout: "80mm", watt: "18W", beam: "24°/36°/50°" },
    ]),
  P("steel", "Steel", "adjustable", "Adjustable Antiglare COB",
    "Machined confidence — aim, lock and forget.",
    2,
    [
      { code: "HN1019", size: "Ø63*H85", cutout: "55mm", watt: "10W", beam: "36°/55°" },
      { code: "HN1020", size: "Ø85*H80", cutout: "75mm", watt: "15W", beam: "36°/55°" },
      { code: "HN1021", size: "Ø85*H80", cutout: "75mm", watt: "18W", beam: "36°/55°" },
    ]),
  P("probe", "Probe", "adjustable", "Adjustable Antiglare COB",
    "Precise accent control with a fully recessed antiglare snoot.",
    2,
    [
      { code: "HN1010", size: "Ø85*H70", cutout: "75mm", watt: "7W", beam: "40°" },
      { code: "HN1011", size: "Ø85*H80", cutout: "75mm", watt: "12W", beam: "40°" },
    ]),
  P("iball", "Iball", "adjustable", "Adjustable COB",
    "A rotating eye that tracks the room — single and double formats.",
    2,
    [
      { code: "HN1033", size: "Ø63*H85", cutout: "35mm", watt: "10W", beam: "36°" },
      { code: "HN1035", size: "Ø83*H85", cutout: "50mm", watt: "15W", beam: "36°" },
      { code: "HN1037", size: "Ø63*H85", cutout: "60mm", watt: "18W", beam: "36°" },
    ]),
  P("husk", "Husk", "adjustable", "Antiglare Tiltable Spot",
    "Trim or trimless — a tiltable spot that elevates any interior with subtle, stylish lighting.",
    2,
    [
      { code: "HN1022", size: "Ø60*H65", cutout: "45mm", watt: "8W", beam: "24°" },
      { code: "HN1023", size: "Ø75*H78", cutout: "65mm", watt: "15W", beam: "36°" },
      { code: "HN1024", size: "Ø85*H85", cutout: "75mm", watt: "20W", beam: "36°" },
    ],
    { featured: true }),

  // ------------------------------------------------ Twin & Multi-Head
  P("bunny", "Bunny", "twin", "Adjustable COB · Single / Double",
    "From one head to four-eyed drama — the family face of twin lighting.",
    2,
    [
      { code: "HN1048", size: "Ø90*H75", cutout: "75mm", watt: "15W", beam: "36°" },
      { code: "HN1049", size: "Ø168*88*H75", cutout: "153*75mm", watt: "2*15W", beam: "36°" },
      { code: "HN1050", size: "Ø210*115*H94", cutout: "188*93mm", watt: "2*24W", beam: "36°" },
    ],
    { featured: true }),
  P("bunny-twin", "Bunny Twin", "twin", "Adjustable Twin COB",
    "Two independently aimed heads in one seamless recess.",
    2,
    [
      { code: "HN1036", size: "Ø165*85*H55", cutout: "155*75mm", watt: "2*12W", beam: "36°" },
      { code: "HN1138", size: "Ø165*85*H56", cutout: "155*75mm", watt: "2*15W", beam: "36°" },
    ]),
  P("hektor", "Hektor", "twin", "Antiglare Twin COB",
    "A low-profile twin with serious glare discipline.",
    2,
    [
      { code: "HN1146", size: "Ø168*88*H27", cutout: "160*75mm", watt: "2*7W", beam: "36°" },
      { code: "HN1147", size: "Ø168*88*H27", cutout: "160*75mm", watt: "2*12W", beam: "36°" },
    ],
    { isNew: true }),

  // ------------------------------------------------ Track & Display
  P("monk", "Monk", "track", "COB Downlight · High Output",
    "Quiet form, monastic focus — 25 to 35 watts of disciplined light.",
    2,
    [
      { code: "HN1099", size: "Ø120*H102", cutout: "105mm", watt: "25W", beam: "36°" },
      { code: "HN1099A", size: "Ø120*H102", cutout: "105mm", watt: "30W", beam: "36°" },
      { code: "HN1100", size: "Ø140*H110", cutout: "110mm", watt: "35W", beam: "36°" },
    ]),
  P("hydra", "Hydra", "track", "Track Spotlight",
    "A slender cylinder head for boutique and gallery tracks.",
    2,
    [
      { code: "HN1075", size: "Ø50*H150", watt: "12W", beam: "36°" },
      { code: "HN1076", size: "Ø65*H150", watt: "20W", beam: "36°" },
      { code: "HN1077", size: "Ø75*H168", watt: "30W", beam: "36°" },
    ]),
  P("purist", "Purist", "track", "Track Spotlight",
    "Retail-grade output with interchangeable 24°, 36° and 55° optics.",
    2,
    [
      { code: "HN1097", size: "Ø82*H165", watt: "25W", beam: "24°/36°/55°" },
      { code: "HN1097A", size: "Ø82*H165", watt: "30W", beam: "24°/36°/55°" },
      { code: "HN1098", size: "Ø95*H175", watt: "35W", beam: "24°/36°/55°" },
    ],
    { featured: true }),

  // ------------------------------------------------ Wallwashers
  P("pulse", "Pulse", "wallwasher", "Recessed / Surface Movable",
    "One optic, two mountings — recessed or surface, always movable.",
    2,
    [
      { code: "HN1091-R", size: "Ø57*H90", cutout: "75mm", watt: "12W", beam: "36°" },
      { code: "HN1092-S", size: "Ø57*H147", watt: "12W", beam: "36°" },
    ]),
  P("zen", "Zen", "wallwasher", "Pullout Wallwasher",
    "Pull, tilt, wash — a calm gradient of light down the wall.",
    2,
    [{ code: "HN1101", size: "Ø65*H104", cutout: "55mm", watt: "12W", beam: "40°" }]),
  P("zen-mini", "Zen Mini", "wallwasher", "Pullout Wallwasher",
    "The compact Zen for corridors and niches, single or twin.",
    2,
    [
      { code: "HN1093", size: "Ø85*H52", cutout: "40mm", watt: "7W", beam: "28°" },
      { code: "HN1094", size: "Ø50*98*H90", cutout: "40*85mm", watt: "2*7W", beam: "28°" },
    ]),

  // ------------------------------------------------ Linear & Blade
  P("slice", "Slice", "linear", "Linear COB",
    "A knife-edge slot of light, in two lengths.",
    3,
    [
      { code: "HN1138", size: "Ø138*35*H78", watt: "12W", beam: "24°" },
      { code: "HN1139", size: "Ø270*35*H78", watt: "20W", beam: "24°" },
    ]),
  P("bladex", "Bladex", "linear", "Linear Blade",
    "Finished in brass, rose gold or silver — jewellery for the ceiling.",
    2,
    [
      { code: "HN1096", size: "Ø61*23*H56", watt: "10W", beam: "36°" },
      { code: "HN1097", size: "Ø119*24*H55", watt: "15W", beam: "36°" },
    ],
    { isNew: true }),
  P("zelo-blade-mini", "Zelo Blade Mini", "linear", "Linear Spotlight",
    "The mini blade — a discreet linear accent for joinery and coves.",
    2,
    [
      { code: "HN1122", size: "Linear", watt: "12W", beam: "36°" },
      { code: "HN1123", size: "Linear", watt: "20W", beam: "36°" },
    ],
    { featured: true }),

  // ------------------------------------------------ Surface Mounted
  P("nova", "Nova", "surface", "Surface COB",
    "Bold cylinders in single and twin — light as an object.",
    2,
    [
      { code: "HN1073", size: "Ø115*H115", cutout: "75mm", watt: "12W", beam: "36°" },
      { code: "HN1074", size: "Ø225*H115", cutout: "105mm", watt: "2*12W", beam: "36°" },
    ]),
  P("cans", "Cans", "surface", "Surface COB",
    "Four sizes of the purest cylinder we make — 8 to 30 watts.",
    4,
    [
      { code: "HN1083", size: "Ø60*H85", watt: "8W", beam: "30°" },
      { code: "HN1084", size: "Ø75*H95", watt: "12W", beam: "45°" },
      { code: "HN1085", size: "Ø85*H110", watt: "18W", beam: "45°" },
      { code: "HN1086", size: "Ø107*H165", watt: "30W", beam: "45°" },
    ],
    { featured: true }),
  P("crysto-surface", "Crysto Surface", "surface", "Surface COB",
    "Crysto's optics, mounted proud of the ceiling.",
    2,
    [
      { code: "HN1105", size: "Ø41*H110", cutout: "35mm", watt: "7W", beam: "40°" },
      { code: "HN1106", size: "Ø74*H86", cutout: "55mm", watt: "12W", beam: "40°" },
    ]),
  P("luxor", "Luxor", "surface", "Surface COB",
    "Softly chamfered surface cylinders for warm, articulate spaces.",
    3,
    [
      { code: "HN1127", size: "Ø63*H53", watt: "7W", beam: "36°" },
      { code: "HN1128", size: "Ø83*H65", watt: "12W", beam: "36°" },
      { code: "HN1129", size: "Ø105*H74", watt: "18W", beam: "36°" },
    ]),
  P("orb", "Orb", "surface", "SMD Surface",
    "A slim luminous disc — 37mm thin, edge to edge glow.",
    2,
    [
      { code: "HN1078", size: "Ø120*H37", watt: "16W", beam: "120°" },
      { code: "HN1079", size: "Ø170*H37", watt: "24W", beam: "120°" },
    ],
    { featured: true }),
  P("steller", "Steller", "surface", "SMD Surface",
    "Compact surface pucks with a wide, even 120° spread.",
    3,
    [
      { code: "HN1081", size: "Ø58*H60", watt: "7W", beam: "120°" },
      { code: "HN1082", size: "Ø72*H70", watt: "12W", beam: "120°" },
    ]),
  P("merc", "Merc", "surface", "SMD Surface",
    "Four sizes, one silhouette — the quiet utility player.",
    4,
    [
      { code: "HN1087", size: "Ø85*H57", watt: "7W", beam: "90°" },
      { code: "HN1088", size: "Ø72*H69", watt: "12W", beam: "90°" },
      { code: "HN1089", size: "Ø86*H77", watt: "18W", beam: "90°" },
      { code: "HN1090", size: "Ø109*H86", watt: "24W", beam: "90°" },
    ],
    { isNew: true }),
  P("macho", "Macho", "surface", "SMD Downlight · 200lm/W",
    "Two hundred lumens per watt — efficiency without apology.",
    2,
    [
      { code: "HN1059", size: "Ø84*H42", cutout: "75mm", watt: "12W", beam: "120°" },
      { code: "HN1060", size: "Ø105*H46", cutout: "95mm", watt: "18W", beam: "120°" },
      { code: "HN1060A", size: "Ø135*H50", cutout: "120mm", watt: "24W", beam: "120°" },
    ]),

  // ------------------------------------------------ Outdoor & Industrial
  P("hurricane", "Hurricane", "outdoor", "SMD Street Light",
    "Driver-on-board street lighting that shrugs off the weather.",
    2,
    [
      { code: "HN1158", size: "Compact head", watt: "24W", beam: "120°" },
      { code: "HN1159", size: "Standard head", watt: "36W", beam: "120°" },
    ],
    { cct: "3000K, 6000K (4000K on request)" }),
  P("hawkeye", "Hawkeye", "outdoor", "SMD High Bay",
    "Warehouse-grade high bay, 50 to 200 watts.",
    2,
    [
      { code: "HNHB-50", size: "High bay", watt: "50W", beam: "120°" },
      { code: "HNHB-100", size: "High bay", watt: "100W", beam: "120°" },
      { code: "HNHB-150", size: "High bay", watt: "150W", beam: "120°" },
      { code: "HNHB-200", size: "High bay", watt: "200W", beam: "120°" },
    ],
    { cct: "3000K, 6000K (4000K on request)" }),
];

/** Wattage range summary, e.g. "7W – 18W" or "12W". */
export function wattRange(product: Product): string {
  const watts = product.variants.map((v) => v.watt);
  return watts.length > 1 ? `${watts[0]} – ${watts[watts.length - 1]}` : watts[0] ?? "";
}

export const familyOf = (p: Product): Family =>
  FAMILIES.find((f) => f.slug === p.family)!;

export const productBySlug = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);

export const FEATURED = PRODUCTS.filter((p) => p.featured);

/* ------------------------------------------------------------------
   Interior / Exterior application taxonomy.
   Images live in /public/images/sections/<side>/<category>/.
------------------------------------------------------------------- */

export type SectionItem = { name: string; image: string; productSlug?: string };
export type Section = { slug: string; title: string; blurb: string; items: SectionItem[] };

const S = (side: "interior" | "exterior", cat: string, file: string, name: string, productSlug?: string): SectionItem => ({
  name,
  image: `/images/sections/${side}/${cat}/${file}.png`,
  productSlug,
});

export const INTERIOR_SECTIONS: Section[] = [
  {
    slug: "cob-spotlight",
    title: "COB Spotlights",
    blurb: "The heart of the range — recessed COB downlights in every depth, beam and finish.",
    items: [
      S("interior", "cob-spotlight", "tardis", "Tardis", "tardis"),
      S("interior", "cob-spotlight", "iris", "Iris", "iris"),
      S("interior", "cob-spotlight", "husk", "Husk", "husk"),
      S("interior", "cob-spotlight", "stealth", "Stealth", "stealth"),
      S("interior", "cob-spotlight", "craft", "Craft", "craft"),
      S("interior", "cob-spotlight", "crater", "Crater", "crater"),
      S("interior", "cob-spotlight", "abot", "Abot", "abot"),
      S("interior", "cob-spotlight", "helios", "Helios", "helios"),
      S("interior", "cob-spotlight", "helix", "Helix", "helix"),
      S("interior", "cob-spotlight", "steel", "Steel", "steel"),
      S("interior", "cob-spotlight", "bunny", "Bunny", "bunny"),
      S("interior", "cob-spotlight", "hektor", "Hektor", "hektor"),
    ],
  },
  {
    slug: "magnetic-system",
    title: "Magnetic System",
    blurb: "Magline 48V track — spots, diffused linears and laser blades that click into place.",
    items: [
      S("interior", "magnetic-system", "track-channel", "Track Channel"),
      S("interior", "magnetic-system", "track-spot", "Track Spot"),
      S("interior", "magnetic-system", "diffused", "Diffused Linear"),
      S("interior", "magnetic-system", "dot", "Dot"),
      S("interior", "magnetic-system", "dot-tiltable", "Dot Tiltable"),
    ],
  },
  {
    slug: "cob-surface",
    title: "COB Surface",
    blurb: "Sculptural surface cylinders when the ceiling can't be cut.",
    items: [
      S("interior", "cob-surface", "cans", "Cans", "cans"),
      S("interior", "cob-surface", "nova", "Nova", "nova"),
      S("interior", "cob-surface", "luxor", "Luxor", "luxor"),
      S("interior", "cob-surface", "crysto-surface", "Crysto Surface", "crysto-surface"),
      S("interior", "cob-surface", "slice", "Slice", "slice"),
      S("interior", "cob-surface", "arc", "Arc"),
    ],
  },
  {
    slug: "smd-surface",
    title: "SMD Surface",
    blurb: "Slim discs and pucks with wide, even light.",
    items: [
      S("interior", "smd-surface", "orb", "Orb", "orb"),
      S("interior", "smd-surface", "merc", "Merc", "merc"),
      S("interior", "smd-surface", "stellar", "Steller", "steller"),
      S("interior", "smd-surface", "orbis", "Orbis"),
    ],
  },
  {
    slug: "smd-conceal",
    title: "SMD Concealed",
    blurb: "Diffused, recessed SMD panels for clean general light.",
    items: [
      S("interior", "smd-conceal", "macho", "Macho", "macho"),
      S("interior", "smd-conceal", "bross", "Bross"),
      S("interior", "smd-conceal", "prismo", "Prismo"),
      S("interior", "smd-conceal", "disc", "Disc"),
      S("interior", "smd-conceal", "apsis", "Apsis"),
      S("interior", "smd-conceal", "espro", "Espro"),
    ],
  },
  {
    slug: "linear-spotlight",
    title: "Linear Spotlights",
    blurb: "Blade-thin linear accents for joinery, coves and corridors.",
    items: [
      S("interior", "linear-spotlight", "zelo-blade", "Zelo Blade"),
      S("interior", "linear-spotlight", "zelo-blade-mini", "Zelo Blade Mini", "zelo-blade-mini"),
      S("interior", "linear-spotlight", "zelo-blade-micro", "Zelo Blade Micro"),
      S("interior", "linear-spotlight", "rider", "Rider"),
      S("interior", "linear-spotlight", "rider-20", "Rider 2.0"),
    ],
  },
  {
    slug: "track-light",
    title: "Track Lights",
    blurb: "High-output projectors for retail walls and galleries.",
    items: [
      S("interior", "track-light", "purist", "Purist", "purist"),
      S("interior", "track-light", "hydra", "Hydra", "hydra"),
      S("interior", "track-light", "bolt", "Bolt"),
    ],
  },
  {
    slug: "wall-washer",
    title: "Wallwashers",
    blurb: "Graze art and texture with an even wash of light.",
    items: [
      S("interior", "wall-washer", "pulse", "Pulse", "pulse"),
      S("interior", "wall-washer", "zen-mini", "Zen Mini", "zen-mini"),
      S("interior", "wall-washer", "roller", "Roller"),
    ],
  },
  {
    slug: "retail-lighting",
    title: "Retail Lighting",
    blurb: "Purpose-built downlights for shopfloor drama.",
    items: [
      S("interior", "retail-lighting", "monk", "Monk", "monk"),
      S("interior", "retail-lighting", "matter", "Matter"),
    ],
  },
];

export const EXTERIOR_SECTIONS: Section[] = [
  {
    slug: "bollards",
    title: "Bollards & Path",
    blurb: "Guide the way with refined ground-level lighting.",
    items: [
      S("exterior", "bollards", "bollard", "Bollard"),
      S("exterior", "bollards", "1-way-bollard", "1-Way Bollard"),
      S("exterior", "bollards", "2-way-bollard", "2-Way Bollard"),
      S("exterior", "bollards", "cylindrical-cone-bollard", "Cylindrical Cone Bollard"),
      S("exterior", "bollards", "glass-path-bollard", "Glass Path Bollard"),
      S("exterior", "bollards", "cubic-pillar-light", "Cubic Pillar Light"),
      S("exterior", "bollards", "geometric-pillar-series", "Geometric Pillar Series"),
      S("exterior", "bollards", "stone-finish-pillar", "Stone Finish Pillar"),
      S("exterior", "bollards", "garden-post-light", "Garden Post Light"),
      S("exterior", "bollards", "triple-head-path-light", "Triple Head Path Light"),
    ],
  },
  {
    slug: "gate-light",
    title: "Gate & Pillar",
    blurb: "Timeless lanterns that frame every entrance.",
    items: [
      S("exterior", "gate-light", "gate-pillar-light", "Gate Pillar Light"),
      S("exterior", "gate-light", "square-gate-lantern", "Square Gate Lantern"),
      S("exterior", "gate-light", "cube-gate-lantern", "Cube Gate Lantern"),
      S("exterior", "gate-light", "frosted-gate-light", "Frosted Gate Light"),
      S("exterior", "gate-light", "cylindrical-gate-lantern", "Cylindrical Gate Lantern"),
      S("exterior", "gate-light", "square-post-top-lantern", "Square Post Top Lantern"),
      S("exterior", "gate-light", "conical-pillar-light", "Conical Pillar Light"),
      S("exterior", "gate-light", "pedestal-post-lamp", "Pedestal Post Lamp"),
    ],
  },
  {
    slug: "wall-lights",
    title: "Wall Lights",
    blurb: "Sculpt facades with directional, architectural light.",
    items: [
      S("exterior", "wall-lights", "wall-light", "Wall Light"),
      S("exterior", "wall-lights", "2-way-wall-light", "2-Way Wall Light"),
      S("exterior", "wall-lights", "fluted-wall-light", "Fluted Wall Light"),
      S("exterior", "wall-lights", "backlit-wall-light", "Backlit Wall Light"),
      S("exterior", "wall-lights", "narrow-beam-wall-light", "Narrow Beam Wall Light"),
      S("exterior", "wall-lights", "sconce-wall-light", "Wall Sconce"),
      S("exterior", "wall-lights", "bulkhead-light", "Bulkhead Light"),
      S("exterior", "wall-lights", "wall-spotlight", "Wall Spotlight"),
      S("exterior", "wall-lights", "twin-spotlight", "Twin Spotlight"),
      S("exterior", "wall-lights", "wall-mount-lantern", "Wall Mount Lantern"),
    ],
  },
  {
    slug: "pole-light",
    title: "Pole & Street",
    blurb: "Urban-scale lighting for streets, campuses and drives.",
    items: [
      S("exterior", "pole-light", "urban-street-lamp", "Urban Street Lamp"),
      S("exterior", "pole-light", "disc-pole-luminaire", "Disc Pole Luminaire"),
      S("exterior", "pole-light", "halo-pillar-light", "Halo Pillar Light"),
      S("exterior", "pole-light", "dual-head-lantern", "Dual Head Lantern"),
      S("exterior", "pole-light", "square-street-light", "Square Street Light"),
      S("exterior", "pole-light", "campus-lighting", "Campus Lighting"),
      S("exterior", "pole-light", "ring-path-light", "Ring Path Light"),
      S("exterior", "pole-light", "twin-disc-area-light", "Twin Disc Area Light"),
    ],
  },
  {
    slug: "surface-light",
    title: "Surface & Spike",
    blurb: "Spots, spikes and steps for landscape detail.",
    items: [
      S("exterior", "surface-light", "spike-light", "Spike Light"),
      S("exterior", "surface-light", "mounted-spike-light", "Mounted Spike Light"),
      S("exterior", "surface-light", "cylinder-downlight", "Cylinder Downlight"),
      S("exterior", "surface-light", "hurricane-street-light", "Hurricane Street Light", "hurricane"),
      S("exterior", "surface-light", "hawk-floodlight", "Hawk Floodlight"),
      S("exterior", "surface-light", "hawkeye-hibay-light", "Hawkeye High Bay", "hawkeye"),
      S("exterior", "surface-light", "round-path-light", "Round Path Light"),
      S("exterior", "surface-light", "linear-step-light", "Linear Step Light"),
    ],
  },
  {
    slug: "recessed-lights",
    title: "Step & Recessed",
    blurb: "Footlights and step lights set into walls and floors.",
    items: [
      S("exterior", "recessed-lights", "footlight", "Footlight"),
      S("exterior", "recessed-lights", "round-eyelid-step-light", "Round Eyelid Step Light"),
      S("exterior", "recessed-lights", "wall-steplight", "Wall Step Light"),
      S("exterior", "inground-recessed-lights", "path-light", "Inground Path Light"),
      S("exterior", "inground-recessed-lights", "spot-light", "Inground Spot Light"),
    ],
  },
  {
    slug: "highlighter",
    title: "Facade Highlighters",
    blurb: "Linear grazers and floods for architectural drama.",
    items: [
      S("exterior", "highlighter", "linear-light", "Linear Highlighter"),
      S("exterior", "highlighter", "square-led-floodlight", "Square LED Floodlight"),
    ],
  },
];
