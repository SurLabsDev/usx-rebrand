import { Card, Mono, money } from "@/components/ui";
import { destinatarios } from "@/lib/data";

export default function DestinatariosPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-2xl text-pine sm:text-3xl">Destinatarios</h1>
        <button className="rounded-lg bg-pine px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-pine-soft">
          Agregar destinatario
        </button>
      </div>
      <p className="mt-3 max-w-2xl text-sm text-ink-soft">
        Cada destinatario cuenta con una franquicia anual de USD 800 en hasta 3
        envíos exentos. Los importes mostrados corresponden a compras y
        franquicias utilizadas a través de USX.
      </p>

      <div className="mt-6 space-y-5">
        {destinatarios.map((d) => {
          const agotada = d.enviosDisponibles === 0;
          return (
            <Card key={d.cedula} className="grid gap-6 p-6 md:grid-cols-[1fr_260px]">
              <div>
                <h2 className="font-semibold text-pine">{d.nombre}</h2>
                <dl className="mt-3 grid max-w-sm grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  <div>
                    <dt className="text-xs text-ink-soft">Cédula</dt>
                    <dd>
                      <Mono className="font-medium">{d.cedula}</Mono>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-ink-soft">Nacimiento</dt>
                    <dd>
                      <Mono className="font-medium">{d.nacimiento}</Mono>
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-xs text-ink-soft">Dirección</dt>
                    <dd className="font-medium">{d.direccion}</dd>
                  </div>
                </dl>
                {agotada && (
                  <p className="mt-4 rounded-lg bg-gold-soft px-3 py-2 text-xs leading-relaxed text-gold-deep">
                    Este destinatario está asignado a una guía en tránsito o ya
                    usó su franquicia este año. Para modificar sus datos,
                    escribinos por WhatsApp.
                  </p>
                )}
              </div>

              <div className="rounded-xl border border-line bg-paper p-4">
                <p className="eyebrow text-ink-soft">Franquicia anual</p>
                <p className="mt-2 font-mono text-xl font-semibold text-pine">
                  {money(d.franquiciaDisponible)}
                </p>
                <p className="text-xs text-ink-soft">
                  {d.enviosDisponibles} de 3 envíos exentos disponibles
                </p>
                {d.franquiciasUtilizadas.length > 0 && (
                  <table className="mt-3 w-full border-t border-line text-xs">
                    <caption className="sr-only">Franquicias utilizadas</caption>
                    <tbody>
                      {d.franquiciasUtilizadas.map((f) => (
                        <tr key={f.guia} className="border-b border-line/60 last:border-0">
                          <td className="py-1.5">
                            <Mono className="text-emerald-dark">{f.guia}</Mono>
                          </td>
                          <td className="py-1.5 text-right">
                            <Mono>{money(f.monto)}</Mono>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-ink-soft">
        Para las guías exentas, elegí un destinatario. Si no lo hacés, el
        sistema selecciona el primero de la lista.
      </p>
    </div>
  );
}
