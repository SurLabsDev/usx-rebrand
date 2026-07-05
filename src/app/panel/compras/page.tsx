import { Card, Mono, StatusChip, money } from "@/components/ui";
import { carritos } from "@/lib/data";

export default function ComprasPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-2xl text-pine sm:text-3xl">Compras</h1>
        <button className="rounded-lg bg-pine px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-pine-soft">
          Nuevo carrito
        </button>
      </div>

      {/* Cómo funciona el servicio */}
      <div className="mt-6 rounded-2xl border border-gold/40 bg-gold-soft p-6">
        <p className="eyebrow text-gold-deep">Compramos por vos en cualquier tienda de EEUU</p>
        <div className="mt-4 grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {[
            { dt: "USD 17.50 / kg", dd: "La tarifa de envío de siempre" },
            { dt: "6%", dd: "Manejo sobre el valor de la compra" },
            { dt: "Tax free", dd: "Ahorrás el 7% de impuestos en USA" },
            { dt: "Sin IVA", dd: "En compras de hasta USD 200" },
          ].map((i) => (
            <div key={i.dd}>
              <p className="font-mono font-semibold text-gold-deep">{i.dt}</p>
              <p className="mt-0.5 text-xs text-ink-soft">{i.dd}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carritos */}
      <div className="mt-6 space-y-5">
        {carritos.map((c) => {
          const total = c.items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
          return (
            <Card key={c.id} className="overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-mint/50 px-6 py-4">
                <div className="flex items-center gap-3">
                  <h2 className="font-semibold text-pine">
                    Carrito <Mono>{c.id}</Mono>
                  </h2>
                  <StatusChip status={c.estado} tone={c.estado === "COMPRADA" ? "green" : "gold"} />
                </div>
                <div className="flex gap-4 text-sm">
                  <button className="text-emerald-dark underline-offset-2 hover:underline">
                    Consultar
                  </button>
                  <button className="text-emerald-dark underline-offset-2 hover:underline">
                    Descargar factura
                  </button>
                </div>
              </div>
              {/* Mobile: cada artículo apilado */}
              <ul className="divide-y divide-line/40 sm:hidden">
                {c.items.map((i) => (
                  <li key={i.nombre} className="flex items-start justify-between gap-4 px-5 py-3.5">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-ink">{i.nombre}</p>
                      <p className="mt-1 text-xs text-ink-soft">
                        <Mono>{i.cantidad}</Mono> × <Mono>USD {i.precio.toFixed(2)}</Mono>
                      </p>
                    </div>
                    <Mono className="shrink-0 text-sm font-semibold text-pine">
                      {(i.precio * i.cantidad).toFixed(2)}
                    </Mono>
                  </li>
                ))}
                <li className="flex items-center justify-between bg-paper px-5 py-3.5">
                  <span className="text-sm font-medium text-ink">Total</span>
                  <Mono className="font-semibold text-pine">{money(total)}</Mono>
                </li>
              </ul>

              {/* Desktop: tabla */}
              <table className="hidden w-full text-sm sm:table">
                <caption className="sr-only">Artículos del carrito {c.id}</caption>
                <thead>
                  <tr className="border-b border-line/60 text-left text-xs uppercase tracking-wide text-ink-soft">
                    <th className="px-6 py-2.5 font-semibold">Artículo</th>
                    <th className="px-6 py-2.5 text-right font-semibold">Cant.</th>
                    <th className="px-6 py-2.5 text-right font-semibold">Precio</th>
                    <th className="px-6 py-2.5 text-right font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {c.items.map((i) => (
                    <tr key={i.nombre} className="border-b border-line/40 last:border-0">
                      <td className="px-6 py-3">{i.nombre}</td>
                      <td className="px-6 py-3 text-right">
                        <Mono>{i.cantidad}</Mono>
                      </td>
                      <td className="px-6 py-3 text-right">
                        <Mono>{i.precio.toFixed(2)}</Mono>
                      </td>
                      <td className="px-6 py-3 text-right">
                        <Mono>{(i.precio * i.cantidad).toFixed(2)}</Mono>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-paper">
                    <td colSpan={3} className="px-6 py-3 text-right font-medium text-ink">
                      Total
                    </td>
                    <td className="px-6 py-3 text-right">
                      <Mono className="font-semibold text-pine">{money(total)}</Mono>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
