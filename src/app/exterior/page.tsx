import type { Metadata } from "next";
import PhotoHero from "@/components/PhotoHero";

export const metadata: Metadata = {
  title: "Exterior Lighting",
  description: "Honorh exterior lighting — architecture, illuminated.",
};

export default function ExteriorPage() {
  return <PhotoHero title="Exterior Lighting" photo="/images/exterior.jpg" />;
}
