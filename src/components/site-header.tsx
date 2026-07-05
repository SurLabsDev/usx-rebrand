import Link from "next/link";
import { Logo } from "./logo";

const NAV = [
  { href: "#tarifas", label: "Tarifas" },
  { href: "#compras", label: "Compras" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#ubicaciones", label: "Ubicaciones" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="USX Cargo — inicio">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-ink-soft md:flex" aria-label="Principal">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-pine">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/panel"
            className="hidden rounded-lg px-3.5 py-2 text-sm font-medium text-pine transition-colors hover:bg-mint sm:block"
          >
            Ingresar
          </Link>
          <Link
            href="/panel"
            className="rounded-lg bg-pine px-3.5 py-2 text-sm font-medium text-paper transition-colors hover:bg-pine-soft"
          >
            Crear casillero
          </Link>
        </div>
      </div>
      {/* Accesos rápidos a secciones — solo mobile */}
      <div className="overflow-x-auto border-t border-line/70 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <nav className="flex min-w-max gap-1 px-3 py-2 text-sm" aria-label="Secciones">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-lg px-3 py-1.5 text-ink-soft transition-colors hover:bg-mint hover:text-pine"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
