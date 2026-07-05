import { Card, FlagUS, FlagES, Mono } from "@/components/ui";
import { CopyRow } from "@/components/copy-row";
import { direcciones, user } from "@/lib/data";

export default function DireccionesPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="font-display text-2xl text-pine sm:text-3xl">Tus direcciones</h1>
      <p className="mt-3 max-w-2xl text-sm text-ink-soft">
        Usá estas direcciones como destino de envío al comprar. Tu número de
        suite <Mono className="font-semibold text-pine">{user.suite}</Mono> es
        lo que identifica tus paquetes: incluilo siempre.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* EEUU */}
        <Card className="overflow-hidden">
          <div className="flex items-center justify-between border-b border-line bg-mint/50 px-6 py-4">
            <div className="flex items-center gap-2.5">
              <FlagUS className="h-4 w-6" />
              <h2 className="font-semibold text-pine">Tu dirección en EEUU</h2>
            </div>
            <span className="rounded-md bg-white px-2 py-1 font-mono text-xs font-semibold text-pine ring-1 ring-line">
              MIA
            </span>
          </div>
          <div className="p-6">
            <dl className="divide-y divide-line/70">
              <CopyRow label="Name" value={direcciones.eeuu.nombre} />
              <CopyRow label="Address" value={direcciones.eeuu.lineas[0]} mono />
              <CopyRow label="City" value="Miami" />
              <CopyRow label="State" value="Florida" />
              <CopyRow label="Zip Code" value="33166-6742" mono />
              <CopyRow label="Country" value="United States" />
              <CopyRow label="Phone" value={direcciones.eeuu.telefono} mono />
            </dl>
            <p className="mt-4 text-xs text-ink-soft">{direcciones.eeuu.horario}</p>
          </div>
        </Card>

        {/* Europa */}
        <Card className="overflow-hidden">
          <div className="flex items-center justify-between border-b border-line bg-mint/50 px-6 py-4">
            <div className="flex items-center gap-2.5">
              <FlagES className="h-4 w-6" />
              <h2 className="font-semibold text-pine">Tu dirección en Europa</h2>
            </div>
            <span className="rounded-md bg-white px-2 py-1 font-mono text-xs font-semibold text-pine ring-1 ring-line">
              MAD
            </span>
          </div>
          <div className="p-6">
            <dl className="divide-y divide-line/70">
              <CopyRow label="Nombre" value={direcciones.europa.nombre} />
              <CopyRow label="Dirección" value={direcciones.europa.lineas[0]} mono />
              <CopyRow label="Código postal" value="28232" mono />
              <CopyRow label="Municipio" value="Las Rozas" />
              <CopyRow label="Provincia" value="Madrid" />
              <CopyRow label="País" value="España" />
              <CopyRow label="Teléfono" value={direcciones.europa.telefono} mono />
            </dl>
            <p className="mt-4 text-xs text-ink-soft">{direcciones.europa.horario}</p>
          </div>
        </Card>
      </div>

      {/* Dirección de retiro registrada */}
      <Card className="mt-6 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow text-ink-soft">Retiro registrado en Uruguay</p>
            <h2 className="mt-1 font-semibold text-pine">Retiro en agencia</h2>
            <p className="mt-1 text-sm text-ink-soft">
              Av. Italia 5775, Carrasco, Montevideo · CP 11500
            </p>
          </div>
          <div className="flex gap-2.5">
            <button className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-pine transition-colors hover:bg-mint">
              Editar
            </button>
            <button className="rounded-lg bg-pine px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-pine-soft">
              Agregar dirección
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
