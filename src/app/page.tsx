import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Calculator } from "@/components/calculator";
import { RouteMotif } from "@/components/route-motif";
import { SectionLabel, FlagUS, FlagES, FlagUY } from "@/components/ui";
import { reviews } from "@/lib/data";

function Star({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M10 1.7l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.3l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.7z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24 lg:pt-20">
            <div>
              <p className="eyebrow text-emerald">Courier Miami · Madrid → Montevideo</p>
              <h1 className="font-display mt-4 text-4xl text-pine sm:text-5xl lg:text-[3.4rem]">
                Tu casillero en Miami y Madrid. Tus compras en Montevideo.
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
                Comprá en cualquier tienda de Estados Unidos o Europa y recibí
                en Uruguay en 3 a 7 días. Tarifa única por kilo, sin sorpresas.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/panel"
                  className="rounded-xl bg-pine px-5 py-3 font-medium text-paper transition-colors hover:bg-pine-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pine"
                >
                  Crear casillero gratis
                </Link>
                <a
                  href="#tarifas"
                  className="rounded-xl border border-line bg-white px-5 py-3 font-medium text-pine transition-colors hover:border-mint-strong hover:bg-mint"
                >
                  Ver tarifas
                </a>
              </div>
              <RouteMotif className="mt-10 hidden w-full max-w-xl lg:block" />
            </div>
            <Calculator />
          </div>
        </section>

        {/* ── Banda de datos ───────────────────────────────── */}
        <section className="bg-pine text-paper">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-4">
            {[
              { dato: "3", unidad: "vuelos por semana", detalle: "2 desde Miami, 1 desde Madrid" },
              { dato: "3–7", unidad: "días desde Miami", detalle: "de la tienda a tus manos" },
              { dato: "9–15", unidad: "días desde Madrid", detalle: "consolidado semanal" },
              { dato: "4.7", unidad: "en Google", detalle: "938 reseñas de clientes" },
            ].map((s) => (
              <div key={s.unidad}>
                <p className="font-mono text-4xl font-semibold text-gold">{s.dato}</p>
                <p className="mt-1 text-sm font-medium">{s.unidad}</p>
                <p className="mt-0.5 text-xs text-paper/55">{s.detalle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Cómo funciona ────────────────────────────────── */}
        <section id="como-funciona" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
          <SectionLabel>Cómo funciona</SectionLabel>
          <h2 className="font-display mt-3 max-w-xl text-3xl text-pine sm:text-4xl">
            De la tienda a tus manos, en tres pasos
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                titulo: "Creá tu casillero",
                texto:
                  "Registrate gratis y obtené tu dirección personal en Miami y en Madrid, con tu número de suite.",
              },
              {
                n: "02",
                titulo: "Comprá y enviá a tu casillero",
                texto:
                  "Usá tu dirección USX como destino de envío en cualquier tienda online. Nosotros recibimos, pesamos y fotografiamos tu paquete.",
              },
              {
                n: "03",
                titulo: "Retiralo en Montevideo",
                texto:
                  "Seguí tu envío en tiempo real y retiralo en nuestro Pick-up Center, o pedí delivery a tu puerta en todo el país.",
              },
            ].map((paso) => (
              <div key={paso.n} className="rounded-2xl border border-line bg-white p-6">
                <p className="font-mono text-sm font-semibold text-emerald">{paso.n}</p>
                <h3 className="mt-3 text-lg font-semibold text-pine">{paso.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{paso.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tarifas ──────────────────────────────────────── */}
        <section id="tarifas" className="scroll-mt-20 bg-mint/60">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <SectionLabel>Tarifas</SectionLabel>
            <h2 className="font-display mt-3 text-3xl text-pine sm:text-4xl">
              Un precio por kilo. Eso es todo.
            </h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              Sin costos de gestión ocultos ni mínimos por paquete. La tarifa
              promedio del mercado es de USD 26.50 por kilo.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {/* USA — destacada */}
              <div className="relative rounded-2xl bg-pine p-7 text-paper shadow-[0_24px_50px_-24px_rgba(8,42,32,0.5)]">
                <div className="flex items-center gap-2">
                  <FlagUS />
                  <p className="eyebrow text-paper/60">Desde USA</p>
                </div>
                <p className="mt-5 font-mono text-5xl font-semibold">
                  17.50
                  <span className="ml-2 text-base font-normal text-paper/60">USD / kg</span>
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-paper/80">
                  <li>2 vuelos por semana</li>
                  <li>Arribo en 3 a 7 días</li>
                  <li>Foto y peso de cada paquete al ingresar</li>
                </ul>
              </div>
              {/* Europa */}
              <div className="rounded-2xl border border-line bg-white p-7">
                <div className="flex items-center gap-2">
                  <FlagES />
                  <p className="eyebrow text-ink-soft">Desde Europa</p>
                </div>
                <p className="mt-5 font-mono text-5xl font-semibold text-pine">
                  21.50
                  <span className="ml-2 text-base font-normal text-ink-soft">USD / kg</span>
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-ink-soft">
                  <li>1 vuelo por semana</li>
                  <li>Arribo en 9 a 15 días</li>
                  <li>Casillero en Las Rozas, Madrid</li>
                </ul>
              </div>
              {/* Libros */}
              <div className="rounded-2xl border border-line bg-white p-7">
                <p className="eyebrow text-ink-soft">Libros · Discos · Películas</p>
                <div className="mt-5 flex items-baseline gap-6">
                  <div>
                    <p className="font-mono text-3xl font-semibold text-pine">10.50</p>
                    <p className="mt-1 text-xs text-ink-soft">USD / kg desde USA</p>
                  </div>
                  <div>
                    <p className="font-mono text-3xl font-semibold text-pine">14.50</p>
                    <p className="mt-1 text-xs text-ink-soft">USD / kg desde Europa</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-ink-soft">
                  <li>Tarifa reducida para material cultural</li>
                  <li>Aplica a libros, vinilos, CDs y films</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-line bg-white p-6 text-sm leading-relaxed text-ink-soft">
              <p className="font-medium text-pine">Bueno saber</p>
              <ul className="mt-2 grid gap-x-8 gap-y-1.5 md:grid-cols-2">
                <li>Franquicia anual: USD 800 en hasta 3 envíos por destinatario.</li>
                <li>Envío a dirección en todo el país: aprox. USD 7.50 los primeros 5 kg.</li>
                <li>Paquetes voluminosos y livianos pueden generar cargo por peso-volumen.</li>
                <li>Almacenamiento gratis 90 días en Montevideo.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Compras ──────────────────────────────────────── */}
        <section id="compras" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
          <div className="overflow-hidden rounded-3xl border border-gold/40 bg-gold-soft">
            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="eyebrow text-gold-deep">Nuevo servicio · Compras</p>
                <h2 className="font-display mt-3 text-3xl text-pine sm:text-4xl">
                  ¿Sin tarjeta internacional? Compramos por vos.
                </h2>
                <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">
                  Elegí el producto en cualquier tienda de Estados Unidos,
                  pasanos el link y nosotros hacemos la compra. Pagás en
                  Uruguay, seguís todo desde tu cuenta.
                </p>
                <Link
                  href="/panel/compras"
                  className="mt-7 inline-block rounded-xl bg-pine px-5 py-3 font-medium text-paper transition-colors hover:bg-pine-soft"
                >
                  Conocer el servicio
                </Link>
              </div>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-7 self-center">
                {[
                  { dt: "USD 17.50 / kg", dd: "La tarifa de envío de siempre" },
                  { dt: "6%", dd: "Manejo sobre el valor de la compra" },
                  { dt: "Tax free", dd: "Ahorrás el 7% de impuestos en USA" },
                  { dt: "Sin IVA", dd: "En compras de hasta USD 200" },
                ].map((item) => (
                  <div key={item.dd}>
                    <dt className="font-mono text-xl font-semibold text-gold-deep">{item.dt}</dt>
                    <dd className="mt-1 text-sm text-ink-soft">{item.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ── Ubicaciones ──────────────────────────────────── */}
        <section id="ubicaciones" className="scroll-mt-20 border-t border-line">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <SectionLabel>Ubicaciones</SectionLabel>
            <h2 className="font-display mt-3 text-3xl text-pine sm:text-4xl">
              Tres ciudades, una red
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  flag: <FlagUS className="h-4 w-6" />,
                  ciudad: "Miami",
                  codigo: "MIA",
                  tipo: "Drop-off Center",
                  lineas: ["7286 NW 66th Street", "Miami, FL 33166-6742", "Estados Unidos"],
                  horario: "Lunes a viernes · 08:00 a 16:00",
                },
                {
                  flag: <FlagES className="h-4 w-6" />,
                  ciudad: "Madrid",
                  codigo: "MAD",
                  tipo: "Drop-off Center",
                  lineas: ["Camilo José Cela 8, Local 5", "28232 Las Rozas, Madrid", "España"],
                  horario: "Lunes a viernes · 10:00 a 17:00",
                },
                {
                  flag: <FlagUY className="h-4 w-6" />,
                  ciudad: "Montevideo",
                  codigo: "MVD",
                  tipo: "Pick-up Center",
                  lineas: ["Nicolás Piaggio 1247", "Montevideo, 11300", "Uruguay"],
                  horario: "Lunes a viernes · 09:00 a 20:00",
                },
              ].map((u) => (
                <div key={u.codigo} className="rounded-2xl border border-line bg-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {u.flag}
                      <h3 className="text-lg font-semibold text-pine">{u.ciudad}</h3>
                    </div>
                    <span className="rounded-md bg-mint px-2 py-1 font-mono text-xs font-semibold text-pine">
                      {u.codigo}
                    </span>
                  </div>
                  <p className="eyebrow mt-4 text-ink-soft">{u.tipo}</p>
                  <address className="mt-2 text-sm not-italic leading-relaxed text-ink-soft">
                    {u.lineas.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </address>
                  <p className="mt-3 border-t border-line pt-3 text-xs text-ink-soft">{u.horario}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Reseñas ──────────────────────────────────────── */}
        <section className="bg-mint/60">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <SectionLabel>Clientes</SectionLabel>
                <h2 className="font-display mt-3 text-3xl text-pine sm:text-4xl">
                  938 reseñas lo dicen mejor
                </h2>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-3">
                <p className="font-mono text-3xl font-semibold text-pine">4.7</p>
                <div>
                  <div className="flex text-gold" aria-label="4.7 de 5 estrellas">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <p className="mt-0.5 text-xs text-ink-soft">en reseñas de Google</p>
                </div>
              </div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.nombre} className="rounded-2xl border border-line bg-white p-6">
                  <div className="flex text-gold" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-ink">
                    {r.texto}
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint font-semibold text-pine">
                      {r.nombre[0]}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-pine">{r.nombre}</span>
                      <span className="block text-xs text-ink-soft">{r.fecha}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA final ────────────────────────────────────── */}
        <section id="registro" className="bg-pine">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-7 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-3xl text-paper sm:text-4xl">
                Tu casillero te está esperando
              </h2>
              <p className="mt-3 max-w-md text-paper/60">
                Registrarse es gratis y lleva dos minutos. Tu dirección en
                Miami y Madrid queda activa al instante.
              </p>
            </div>
            <Link
              href="/panel"
              className="rounded-xl bg-gold px-6 py-3.5 font-medium text-pine-deep transition-colors hover:bg-gold/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              Crear casillero gratis
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
