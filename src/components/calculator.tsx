"use client";

import { useState } from "react";
import { RATES } from "@/lib/data";

type TabId = "usa" | "europa" | "libros";

const TABS: { id: TabId; label: string }[] = [
  { id: "usa", label: "Desde USA" },
  { id: "europa", label: "Desde Europa" },
  { id: "libros", label: "Libros y discos" },
];

export function Calculator() {
  const [tab, setTab] = useState<TabId>("usa");
  const [peso, setPeso] = useState("1");
  const [origenLibros, setOrigenLibros] = useState<"usa" | "europa">("usa");

  const rate =
    tab === "usa"
      ? RATES.usa
      : tab === "europa"
        ? RATES.europa
        : origenLibros === "usa"
          ? RATES.librosUsa
          : RATES.librosEuropa;

  const kg = Math.max(0, parseFloat(peso.replace(",", ".")) || 0);
  const costo = kg * rate;

  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_24px_60px_-24px_rgba(8,42,32,0.45)] ring-1 ring-line">
      <p className="eyebrow text-ink-soft">Calculá tu envío</p>

      <div className="mt-4 flex rounded-xl bg-mint p-1" role="tablist" aria-label="Origen del envío">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`flex-1 rounded-lg px-2 py-2 text-[0.8rem] font-medium transition-colors ${
              tab === t.id
                ? "bg-pine text-paper shadow-sm"
                : "text-pine hover:bg-mint-strong"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "libros" && (
        <div className="mt-3 flex gap-2 text-[0.8rem]">
          {(["usa", "europa"] as const).map((o) => (
            <label
              key={o}
              className={`flex-1 cursor-pointer rounded-lg border px-3 py-2 text-center transition-colors ${
                origenLibros === o
                  ? "border-emerald bg-mint text-pine font-medium"
                  : "border-line text-ink-soft hover:border-mint-strong"
              }`}
            >
              <input
                type="radio"
                name="origen-libros"
                className="sr-only"
                checked={origenLibros === o}
                onChange={() => setOrigenLibros(o)}
              />
              {o === "usa" ? "Desde USA" : "Desde Europa"}
            </label>
          ))}
        </div>
      )}

      <label className="mt-5 block">
        <span className="text-sm font-medium text-ink">Peso del paquete</span>
        <div className="mt-1.5 flex items-center rounded-xl border border-line bg-paper focus-within:border-emerald focus-within:ring-2 focus-within:ring-emerald/20">
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="0.1"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            className="w-full bg-transparent px-4 py-3 font-mono text-lg outline-none"
            aria-label="Peso en kilogramos"
          />
          <span className="pr-4 font-mono text-sm text-ink-soft">kg</span>
        </div>
      </label>

      <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
        <div>
          <p className="text-xs text-ink-soft">
            Tarifa <span className="font-mono">USD {rate.toFixed(2)}</span> por kg
          </p>
          <p className="mt-1 text-sm font-medium text-ink">Costo de envío</p>
        </div>
        <p className="font-mono text-3xl font-semibold text-pine" aria-live="polite">
          <span className="text-base align-top text-ink-soft">USD </span>
          {costo.toFixed(2)}
        </p>
      </div>

      <a
        href="#registro"
        className="mt-5 block rounded-xl bg-emerald px-4 py-3 text-center font-medium text-paper transition-colors hover:bg-emerald-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
      >
        Crear mi casillero gratis
      </a>
    </div>
  );
}
