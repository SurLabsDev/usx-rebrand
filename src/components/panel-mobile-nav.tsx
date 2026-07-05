"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const ITEMS = [
  { href: "/panel", label: "Resumen" },
  { href: "/panel/paquetes", label: "Paquetes" },
  { href: "/panel/guias", label: "Guías" },
  { href: "/panel/delivery", label: "Delivery" },
  { href: "/panel/destinatarios", label: "Destinatarios" },
  { href: "/panel/direcciones", label: "Direcciones" },
  { href: "/panel/cuenta", label: "Mi cuenta" },
  { href: "/panel/compras", label: "Compras" },
];

export function PanelMobileNav() {
  const pathname = usePathname();
  const activeRef = useRef<HTMLAnchorElement>(null);

  // Traer la sección activa a la vista al entrar (puede estar fuera del scroll)
  useEffect(() => {
    activeRef.current?.scrollIntoView({ inline: "center", block: "nearest" });
  }, [pathname]);

  return (
    <nav aria-label="Secciones del panel" className="flex gap-1">
      {ITEMS.map((item) => {
        const active =
          item.href === "/panel" ? pathname === "/panel" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            ref={active ? activeRef : undefined}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm transition-colors ${
              active
                ? "bg-pine font-medium text-paper"
                : "text-ink-soft hover:bg-mint hover:text-pine"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
