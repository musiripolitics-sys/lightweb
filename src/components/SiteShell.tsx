import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Layout for scrollable content pages (Products, About, Clients, Contact):
 * solid dark background, header at top, footer at bottom.
 */
export default function SiteShell({
  active,
  children,
}: {
  active?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0d0d0e]">
      <div className="relative z-20 px-[clamp(24px,5vw,72px)] pt-[34px]">
        <Header active={active} />
      </div>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
