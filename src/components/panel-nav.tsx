"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

function Icon({ d, filled = false }: { d: string; filled?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px] shrink-0"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

const ITEMS: { href: string; label: string; icon: ReactNode; badge?: string }[] = [
  {
    href: "/panel",
    label: "Resumen",
    icon: <Icon d="M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5" />,
  },
  {
    href: "/panel/paquetes",
    label: "Paquetes",
    icon: <Icon d="M21 8.2 12 3 3 8.2v7.6L12 21l9-5.2V8.2ZM3.3 8.4 12 13.3l8.7-4.9M12 13.3V21" />,
  },
  {
    href: "/panel/guias",
    label: "Guías",
    icon: <Icon d="M10.5 20.2 21 3.8 3 12.4l5.1 1.9 1 5.4.9.5ZM8.1 14.3l12-9.6" />,
  },
  {
    href: "/panel/delivery",
    label: "Delivery",
    icon: <Icon d="M2.5 7h11v10h-11zM13.5 10h4l3 3v4h-7M7 20a1.8 1.8 0 1 0 0-3.6A1.8 1.8 0 0 0 7 20Zm10.5 0a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z" />,
  },
  {
    href: "/panel/destinatarios",
    label: "Destinatarios",
    icon: <Icon d="M16 19.5c0-2.5-1.8-4.2-4-4.2s-4 1.7-4 4.2M12 11.8a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM19.5 18.7c0-2.1-1.2-3.5-2.8-3.9M15.4 5.7a3.2 3.2 0 0 1 0 5.8" />,
  },
  {
    href: "/panel/direcciones",
    label: "Direcciones",
    icon: <Icon d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  },
  {
    href: "/panel/cuenta",
    label: "Mi cuenta",
    icon: <Icon d="M3.5 8.5h17M3.5 6h17v12h-17zM6.5 15h4" />,
  },
  {
    href: "/panel/compras",
    label: "Compras",
    icon: <Icon d="M6 8h12l-1 13H7L6 8Zm3 3V6.5a3 3 0 0 1 6 0V11" />,
    badge: "Nuevo",
  },
];

export function PanelNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Secciones del panel" className="flex flex-col gap-0.5">
      {ITEMS.map((item) => {
        const active =
          item.href === "/panel" ? pathname === "/panel" : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm transition-colors ${
              active
                ? "bg-pine font-medium text-paper"
                : "text-ink-soft hover:bg-mint hover:text-pine"
            }`}
          >
            {item.icon}
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span
                className={`rounded-md px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide ${
                  active ? "bg-gold text-pine-deep" : "bg-gold-soft text-gold-deep"
                }`}
              >
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
