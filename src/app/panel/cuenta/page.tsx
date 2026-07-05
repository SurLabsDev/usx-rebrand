import { Card, Mono, money } from "@/components/ui";
import { movimientos, user } from "@/lib/data";

export default function CuentaPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="font-display text-2xl text-pine sm:text-3xl">Mi cuenta</h1>

      {/* Resumen + pago */}
      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card className="p-6">
          <h2 className="font-semibold text-pine">Saldo</h2>
          <dl className="mt-4 space-y-3">
            <div className="flex items-center justify-between border-b border-line/70 pb-3">
              <div>
                <dt className="text-sm font-medium text-ink">Saldo actual</dt>
                <dd className="text-xs text-ink-soft">incluye paquetes para retirar</dd>
              </div>
              <p className={`font-mono text-xl font-semibold ${user.saldo < 0 ? "text-danger" : "text-emerald-dark"}`}>
                {money(user.saldo)}
              </p>
            </div>
            <div className="flex items-center justify-between border-b border-line/70 pb-3">
              <div>
                <dt className="text-sm font-medium text-ink">Saldo pendiente</dt>
                <dd className="text-xs text-ink-soft">incluye paquetes en tránsito</dd>
              </div>
              <Mono className="text-xl font-semibold text-ink">USD 0.00</Mono>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-sm font-medium text-ink">Total a pagar</dt>
              <Mono className="text-2xl font-semibold text-pine">
                {money(Math.abs(Math.min(user.saldo, 0)))}
              </Mono>
            </div>
          </dl>
        </Card>

        <Card className="flex flex-col justify-between gap-4 p-6">
          <div>
            <h2 className="font-semibold text-pine">Hacer un pago</h2>
            <p className="mt-1 text-sm text-ink-soft">Elegí el medio de pago</p>
          </div>
          <div className="space-y-2.5">
            <button className="w-full rounded-xl bg-pine px-4 py-3 text-sm font-medium text-paper transition-colors hover:bg-pine-soft">
              Tarjeta de crédito o débito
            </button>
            <button className="w-full rounded-xl border border-line px-4 py-3 text-sm font-medium text-pine transition-colors hover:bg-mint">
              Transferencia bancaria
            </button>
          </div>
        </Card>
      </div>

      {/* Movimientos */}
      <h2 className="font-display mt-10 text-xl text-pine">Movimientos</h2>
      <Card className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b border-line bg-mint/50 text-left">
              <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Descripción
              </th>
              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Asiento
              </th>
              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Cargos
              </th>
              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Pagos
              </th>
              <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-ink-soft">
                Saldo
              </th>
            </tr>
          </thead>
          <tbody>
            {movimientos.map((m) => (
              <tr key={m.asiento} className="border-b border-line/60 last:border-0 hover:bg-paper">
                <td className="px-5 py-3">
                  <span className="mr-2 font-mono text-xs text-ink-soft">{m.fecha}</span>
                  {m.descripcion}
                </td>
                <td className="px-5 py-3 text-right">
                  <Mono className="text-xs text-ink-soft">{m.asiento}</Mono>
                </td>
                <td className="px-5 py-3 text-right">
                  {m.cargo !== undefined && (
                    <Mono className={m.cargo < 0 ? "text-emerald-dark" : ""}>{m.cargo.toFixed(2)}</Mono>
                  )}
                </td>
                <td className="px-5 py-3 text-right">
                  {m.pago !== undefined && <Mono className="text-emerald-dark">{m.pago.toFixed(2)}</Mono>}
                </td>
                <td className={`px-5 py-3 text-right ${m.saldo < 0 ? "text-danger" : "text-ink"}`}>
                  <Mono className="font-medium">{m.saldo.toFixed(2)}</Mono>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
