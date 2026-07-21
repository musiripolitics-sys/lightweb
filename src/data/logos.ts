/**
 * Client and supplier logo roster. Files live in /public/images/clients and
 * /public/images/suppliers (exported from the Honorh Figma logo library).
 */

export type Logo = { file: string; name: string };

export const CLIENT_LOGOS: Logo[] = [
  { file: "/images/clients/client-01.png", name: "Bata" },
  { file: "/images/clients/client-02.png", name: "Pantaloons" },
  { file: "/images/clients/client-03.png", name: "Bally" },
  { file: "/images/clients/client-04.png", name: "Linen Club" },
  { file: "/images/clients/client-05.png", name: "OVS" },
  { file: "/images/clients/client-06.png", name: "Woodland" },
  { file: "/images/clients/client-07.png", name: "Steve Madden" },
  { file: "/images/clients/client-08.png", name: "Marks & Spencer" },
  { file: "/images/clients/client-09.png", name: "Mothercare" },
  { file: "/images/clients/client-10.png", name: "Miniso" },
  { file: "/images/clients/client-11.png", name: "Forever" },
];

export const PARTNER_LOGOS: Logo[] = [
  { file: "/images/suppliers/supplier-01.png", name: "Eaglerise" },
  { file: "/images/suppliers/supplier-02.png", name: "Fulham" },
  { file: "/images/suppliers/supplier-03.png", name: "HC Power" },
  { file: "/images/suppliers/supplier-04.png", name: "OSRAM" },
  { file: "/images/suppliers/supplier-05.png", name: "CREE" },
  { file: "/images/suppliers/supplier-06.png", name: "Bridgelux" },
  { file: "/images/suppliers/supplier-07.png", name: "b,a,g India" },
  { file: "/images/suppliers/supplier-08.png", name: "Casambi" },
  { file: "/images/suppliers/supplier-09.png", name: "DALI" },
  { file: "/images/suppliers/supplier-10.png", name: "Darkoo Optics" },
  { file: "/images/suppliers/supplier-11.png", name: "Nichia" },
  { file: "/images/suppliers/supplier-12.png", name: "Tridonic" },
  { file: "/images/suppliers/supplier-13.png", name: "San'an" },
];
