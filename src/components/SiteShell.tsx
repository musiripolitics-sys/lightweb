import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Layout for scrollable content pages: fixed glass header, dark background,
 * footer at the bottom. Pages add their own top padding below the header.
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
      <Header active={active} />
      <main className="flex-1 pt-[88px]">{children}</main>
      <Footer />
    </div>
  );
}
