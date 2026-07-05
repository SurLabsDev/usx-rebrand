import { Card, Mono, StatusChip, OriginFlag } from "@/components/ui";
import { BoxPhoto } from "@/components/box-photo";
import { paquetes } from "@/lib/data";

const ACTIONS = [
  { label: "Consultar sobre este paquete" },
  { label: "Fraccionar este paquete" },
  { label: "Devolver este paquete" },
];

export default function PaquetesPage() {
  const totalKg = paquetes.reduce((acc, p) => acc + p.pesoKg, 0);
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-2xl text-pine sm:text-3xl">Paquetes</h1>
        <div className="flex gap-2.5">
          <button className="rounded-lg bg-pine px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-pine-soft">
            Enviar desde USA
          </button>
          <button className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-pine transition-colors hover:bg-mint">
            Enviar desde Europa
          </button>
        </div>
      </div>

      <label className="mt-6 block">
        <span className="sr-only">Buscar paquetes</span>
        <input
          type="search"
          placeholder="Buscar por tracking, descripción o número de paquete…"
          className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none placeholder:text-ink-soft/60 focus:border-emerald focus:ring-2 focus:ring-emerald/20"
        />
      </label>

      <div className="mt-6 space-y-5">
        {paquetes.map((p, i) => (
          <Card key={p.id} className="overflow-hidden">
            <div className="grid gap-6 p-6 sm:grid-cols-[1fr_220px]">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <OriginFlag origen={p.origen} />
                  <Mono className="rounded-md bg-paper px-2 py-0.5 text-sm font-semibold text-pine ring-1 ring-line">
                    {p.id}
                  </Mono>
                  <StatusChip status={p.estado} tone={p.estado === "INGRESADO" ? "green" : "neutral"} />
                </div>
                <h2 className="mt-3 font-semibold text-ink">{p.descripcion}</h2>
                <dl className="mt-3 grid max-w-md grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  <div>
                    <dt className="text-xs text-ink-soft">Fecha de ingreso</dt>
                    <dd className="font-medium">{p.fechaIngreso}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-soft">Peso</dt>
                    <dd>
                      <Mono className="font-medium">{p.pesoKg.toFixed(2)} kg</Mono>
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-xs text-ink-soft">Tracking de origen</dt>
                    <dd>
                      <Mono className="break-all text-[0.8rem] font-medium">{p.tracking}</Mono>
                    </dd>
                  </div>
                </dl>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 border-t border-line pt-4 text-sm">
                  {ACTIONS.map((a) => (
                    <button
                      key={a.label}
                      className="text-emerald-dark underline-offset-2 transition-colors hover:text-pine hover:underline"
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>
              <BoxPhoto seed={i} />
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-end gap-8 rounded-xl border border-line bg-white px-6 py-4 text-sm">
        <p className="text-ink-soft">
          Total de paquetes <Mono className="ml-2 text-base font-semibold text-pine">{paquetes.length}</Mono>
        </p>
        <p className="text-ink-soft">
          Peso total <Mono className="ml-2 text-base font-semibold text-pine">{totalKg.toFixed(1)} kg</Mono>
        </p>
      </div>
    </div>
  );
}
