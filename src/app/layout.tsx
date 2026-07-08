import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Honorh — Lighting for Elite",
    template: "%s — Honorh",
  },
  description:
    "Honorh — lighting that transforms every space. Premium interior and exterior lighting for elite spaces.",
};

export const viewport: Viewport = {
  themeColor: "#0d0d0e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body
        className="min-h-screen bg-[#0d0d0e] text-white overflow-x-hidden"
        style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
