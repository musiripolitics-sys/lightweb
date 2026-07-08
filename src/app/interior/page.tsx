import type { Metadata } from "next";
import PhotoHero from "@/components/PhotoHero";

export const metadata: Metadata = {
  title: "Interior Lighting",
  description: "Honorh interior lighting — sculpt every room with light.",
};

export default function InteriorPage() {
  return <PhotoHero title="Interior Lighting" photo="/images/interior.jpg" />;
}
