"use client";

import { useState } from "react";

export function CopyRow({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // portapapeles no disponible: no hacemos nada
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <dt className="w-24 shrink-0 text-xs text-ink-soft">{label}</dt>
      <dd className={`flex-1 text-sm font-medium text-ink ${mono ? "font-mono text-[0.82rem]" : ""}`}>
        {value}
      </dd>
      <button
        onClick={copy}
        className={`shrink-0 rounded-md px-2 py-1 text-xs font-medium transition-colors ${
          copied ? "bg-mint text-emerald-dark" : "text-emerald-dark hover:bg-mint"
        }`}
        aria-label={`Copiar ${label}`}
      >
        {copied ? "Copiado" : "Copiar"}
      </button>
    </div>
  );
}
