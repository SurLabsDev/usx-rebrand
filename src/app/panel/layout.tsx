import Link from "next/link";
import { Logo } from "@/components/logo";
import { PanelNav } from "@/components/panel-nav";
import { PanelMobileNav } from "@/components/panel-mobile-nav";
import { user } from "@/lib/data";

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-line bg-white px-4 py-6 lg:flex">
        <Link href="/" aria-label="USX Cargo — volver al inicio" className="px-2">
          <Logo />
        </Link>
        <div className="mt-8 flex-1">
          <PanelNav />
        </div>
        <div className="rounded-xl border border-line bg-paper p-4 text-xs leading-relaxed text-ink-soft">
          <p className="font-medium text-pine">¿Necesitás ayuda?</p>
          <p className="mt-1">
            WhatsApp <span className="font-mono">099 123 456</span>
            <br />
            L a V, 09:00 a 20:00
          </p>
        </div>
      </aside>

      {/* Contenido */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur">
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-8">
            <Link href="/" className="lg:hidden" aria-label="USX Cargo — inicio">
              <Logo compact />
            </Link>
            <p className="hidden text-sm text-ink-soft lg:block">
              Hola, <span className="font-medium text-pine">{user.nombre}</span>
            </p>
            <div className="flex items-center gap-3">
              <span className="rounded-lg border border-mint-strong bg-mint px-3 py-1.5 font-mono text-xs font-semibold text-pine">
                SUITE {user.suite}
              </span>
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-pine font-semibold text-paper"
                aria-hidden="true"
              >
                {user.nombre[0]}
                {user.apellido[0]}
              </span>
            </div>
          </div>
          {/* Nav móvil */}
          <div className="overflow-x-auto border-t border-line px-2 py-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="min-w-max">
              <PanelMobileNav />
            </div>
          </div>
        </header>
        <main className="flex-1 px-4 py-8 sm:px-8">{children}</main>
      </div>
    </div>
  );
}
