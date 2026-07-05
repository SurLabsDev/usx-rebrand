import { guiaStatuses } from "@/lib/data";

// Timeline de guía: retoma el motivo de la ruta aérea — una línea punteada
// que une origen y destino, con el estado actual como "avión" en tránsito.
export function GuiaTimeline({ current }: { current: (typeof guiaStatuses)[number] }) {
  const activeIdx = guiaStatuses.indexOf(current);
  return (
    <ol className="relative flex flex-col gap-0" aria-label="Estado del envío">
      {guiaStatuses.map((s, i) => {
        const done = i < activeIdx;
        const active = i === activeIdx;
        const last = i === guiaStatuses.length - 1;
        return (
          <li key={s} className="relative flex items-start gap-3 pb-4 last:pb-0">
            {!last && (
              <span
                aria-hidden="true"
                className={`absolute left-[5px] top-4 h-full w-px ${
                  done ? "bg-emerald" : "border-l border-dashed border-mint-strong"
                }`}
              />
            )}
            <span
              aria-hidden="true"
              className={`relative z-10 mt-1 h-[11px] w-[11px] shrink-0 rounded-full ${
                done
                  ? "bg-emerald"
                  : active
                    ? "bg-pine ring-4 ring-mint-strong"
                    : "border border-mint-strong bg-white"
              }`}
            />
            <span
              className={`font-mono text-[0.72rem] tracking-wide ${
                active
                  ? "rounded-md bg-pine px-2 py-0.5 font-semibold text-paper"
                  : done
                    ? "text-emerald-dark"
                    : "text-ink-soft/70"
              }`}
            >
              {s}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
