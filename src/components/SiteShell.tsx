import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Layout for scrollable content pages: fixed glass header, dark background,
 * footer at the bottom. Pages add their own top padding below the header.
 * `headerOnDark` starts the header with white chrome (for dark photo heroes).
 */
export default function SiteShell({
  active,
  headerOnDark = false,
  children,
}: {
  active?: string;
  headerOnDark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header active={active} onDark={headerOnDark} />
      <main className="flex-1 pt-[88px]">{children}</main>
      <Footer />
    </div>
  );
}
