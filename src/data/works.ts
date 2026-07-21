/**
 * Completed Honorh installations. Photos live in /public/images/works.
 * Titles describe the space type shown; rename freely to real project names.
 */

export type Work = {
  image: string;
  title: string;
  type: string;
};

export const WORKS: Work[] = [
  { image: "/images/works/work-01.jpg", title: "Jewellery Showroom", type: "Retail Lighting" },
  { image: "/images/works/work-02.jpg", title: "Jewellery Display Hall", type: "Retail Lighting" },
  { image: "/images/works/work-03.jpg", title: "Jewellery Boutique", type: "Accent Lighting" },
  { image: "/images/works/work-04.jpg", title: "Boutique Reception", type: "Retail Lighting" },
  { image: "/images/works/work-05.jpg", title: "Hospitality Lounge", type: "Ambient Lighting" },
  { image: "/images/works/work-06.jpg", title: "Door & Design Gallery", type: "Showroom Lighting" },
  { image: "/images/works/work-07.jpg", title: "Retail Lounge", type: "Feature Lighting" },
  { image: "/images/works/work-08.jpg", title: "Concept Showroom", type: "Architectural Lighting" },
  { image: "/images/works/work-09.jpg", title: "Material Gallery", type: "Display Lighting" },
];
