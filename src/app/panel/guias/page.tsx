import { Card, Mono, StatusChip, OriginFlag, money } from "@/components/ui";
import { GuiaTimeline } from "@/components/timeline";
import { guiaActiva as g } from "@/lib/data";

export default function GuiasPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-2xl text-pine sm:text-3xl">Guías</h1>
        <button className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-medium text-pine transition-colors hover:bg-mint">
          Ir al historial
        </button>
      </div>

      <Card className="mt-6 overflow-hidden">
        {/* Cabecera de la guía */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-mint/50 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <OriginFlag origen={g.origen} />
            <Mono className="rounded-md bg-white px-2.5 py-1 text-sm font-semibold text-pine ring-1 ring-line">
              GUÍA {g.id}
            </Mono>
            <StatusChip status={g.estado} tone="neutral" />
          </div>
          <button className="text-sm text-emerald-dark underline-offset-2 hover:underline">
            Documentos
          </button>
        </div>

        <div className="grid gap-8 p-6 lg:grid-cols-[1fr_190px]">
          <div>
            {/* Paquete incluido */}
            <div className="rounded-xl border border-line bg-paper p-5">
              <div className="flex flex-wrap items-center gap-2.5">
                <Mono className="text-sm font-semibold text-pine">{g.paqueteId}</Mono>
                <span className="text-sm text-ink-soft">ingresado el {g.ingresado}</span>
              </div>
              <p className="mt-2 font-semibold text-ink">{g.contenido}</p>
              <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-xs text-ink-soft">Peso</dt>
                  <dd>
                    <Mono className="font-medium">{g.pesoKg.toFixed(2)} kg</Mono>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-soft">Valor declarado</dt>
                  <dd>
                    <Mono className="font-medium">{money(g.valorDeclarado)}</Mono>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-soft">Tarjeta usada</dt>
                  <dd className="font-medium">{g.tarjeta}</dd>
                </div>
                <div className="col-span-2 sm:col-span-3">
                  <dt className="text-xs text-ink-soft">Tracking de origen</dt>
                  <dd>
                    <Mono className="break-all text-[0.78rem] font-medium">{g.tracking}</Mono>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Destinatario + retiro */}
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="eyebrow text-ink-soft">Destinatario</p>
                <p className="mt-2 font-medium text-ink">{g.destinatario}</p>
                <p className="text-sm text-ink-soft">Av. Brasil 2740, Montevideo</p>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <p className="eyebrow text-ink-soft">Retiro en Uruguay</p>
                  <button className="text-sm text-emerald-dark underline-offset-2 hover:underline">
                    Cambiar
                  </button>
                </div>
                <p className="mt-2 font-medium text-ink">Pick-up Center</p>
                <p className="text-sm text-ink-soft">
                  Nicolás Piaggio 1247, Montevideo · L a V, 09:00 a 20:00
                </p>
              </div>
            </div>

            {/* Pie */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
              <p className="text-sm text-ink-soft">
                Cargo aproximado del envío{" "}
                <Mono className="ml-1 text-lg font-semibold text-pine">{money(g.cargoAproximado)}</Mono>
              </p>
              <div className="flex gap-3">
                <button className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-pine transition-colors hover:bg-mint">
                  Consultar sobre esta guía
                </button>
                <button className="rounded-lg border border-gold/60 bg-gold-soft px-4 py-2 text-sm font-medium text-gold-deep transition-colors hover:bg-gold/30">
                  Cancelar envío
                </button>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="eyebrow mb-4 text-ink-soft">Seguimiento</p>
            <GuiaTimeline current={g.estado} />
          </div>
        </div>
      </Card>

      <p className="mt-5 text-right text-sm text-ink-soft">
        Total de envíos activos <Mono className="ml-1 font-semibold text-pine">1</Mono>
      </p>
    </div>
  );
}
