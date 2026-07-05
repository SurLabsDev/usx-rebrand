import Link from "next/link";
import { Card, Mono, money, FlagUS, FlagES, FlagUY } from "@/components/ui";
import { envios, guiaActiva, paquetes, user } from "@/lib/data";

export default function ResumenPage() {
  const disponibles = paquetes.filter((p) => p.estado === "INGRESADO").length;
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="font-display text-2xl text-pine sm:text-3xl">Resumen</h1>

      {/* Ahorro */}
      <Card className="mt-6 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-6 bg-mint/70 px-6 py-5">
          <div>
            <p className="eyebrow text-emerald">Tu ahorro con la tarifa USX</p>
            <p className="mt-1 text-sm text-ink-soft">
              contra la tarifa promedio del mercado (USD 26.50 / kg)
            </p>
          </div>
          <div className="flex gap-10">
            <div>
              <p className="text-xs text-ink-soft">Último envío</p>
              <p className="font-mono text-2xl font-semibold text-pine">
                {money(user.ahorroUltimoEnvio)}
              </p>
            </div>
            <div>
              <p className="text-xs text-ink-soft">Acumulado anual</p>
              <p className="font-mono text-2xl font-semibold text-emerald-dark">
                {money(user.ahorroAnual)}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Estado de cuenta + guía activa */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-semibold text-pine">Estado de cuenta</h2>
              <p className="mt-1 text-sm text-ink-soft">Saldo actual</p>
            </div>
            <p
              className={`font-mono text-2xl font-semibold ${user.saldo < 0 ? "text-danger" : "text-emerald-dark"}`}
            >
              {money(user.saldo)}
            </p>
          </div>
          <Link
            href="/panel/cuenta"
            className="mt-5 inline-block rounded-lg bg-pine px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-pine-soft"
          >
            Hacer un pago
          </Link>
        </Card>

        <Card className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-semibold text-pine">Guía en curso</h2>
              <p className="mt-1 text-sm text-ink-soft">
                <Mono className="text-pine">{guiaActiva.id}</Mono> · {guiaActiva.contenido}
              </p>
            </div>
            <span className="rounded-md bg-mint px-2 py-1 font-mono text-[0.68rem] font-semibold text-pine">
              {guiaActiva.estado}
            </span>
          </div>
          <Link
            href="/panel/guias"
            className="mt-5 inline-block rounded-lg border border-line px-4 py-2 text-sm font-medium text-pine transition-colors hover:bg-mint"
          >
            Ver seguimiento
          </Link>
        </Card>
      </div>

      {/* Próximos envíos */}
      <h2 className="font-display mt-10 text-xl text-pine">Próximos envíos</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {[
          { ...envios.miami, flag: <FlagUS className="h-4 w-6" /> },
          { ...envios.madrid, flag: <FlagES className="h-4 w-6" /> },
        ].map((e) => (
          <Card key={e.codigo} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                {e.flag}
                <h3 className="font-semibold text-pine">{e.ciudad}</h3>
              </div>
              <span className="rounded-md bg-mint px-2 py-1 font-mono text-xs font-semibold text-pine">
                {e.codigo} → MVD
              </span>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-xs text-ink-soft">Cierre (hora MVD)</dt>
                <dd className="mt-0.5 font-medium text-ink">{e.cierre}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-soft">Arribo estimado</dt>
                <dd className="mt-0.5 font-medium text-ink">{e.arribo}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-soft">Paquetes para enviar</dt>
                <dd className="mt-0.5 font-mono text-lg font-semibold text-pine">{e.disponibles}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-soft">Guías en proceso</dt>
                <dd className="mt-0.5 font-mono text-lg font-semibold text-pine">{e.guias}</dd>
              </div>
            </dl>
            {e.disponibles > 0 && (
              <Link
                href="/panel/paquetes"
                className="mt-5 inline-block rounded-lg bg-emerald px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-emerald-dark"
              >
                Armar envío ({e.disponibles})
              </Link>
            )}
          </Card>
        ))}
      </div>

      {/* Montevideo */}
      <Card className="mt-6 flex flex-wrap items-center justify-between gap-4 p-6">
        <div className="flex items-center gap-2.5">
          <FlagUY className="h-4 w-6" />
          <div>
            <h3 className="font-semibold text-pine">Montevideo · Pick-up Center</h3>
            <p className="text-sm text-ink-soft">Guías disponibles para retirar</p>
          </div>
        </div>
        <p className="font-mono text-3xl font-semibold text-pine">0</p>
      </Card>

      <p className="mt-8 text-sm text-ink-soft">
        Tenés <span className="font-medium text-pine">{disponibles} paquetes</span> en tu casillero
        de Miami listos para incluir en el próximo vuelo.{" "}
        <Link href="/panel/paquetes" className="font-medium text-emerald underline-offset-2 hover:underline">
          Ver paquetes
        </Link>
      </p>
    </div>
  );
}
