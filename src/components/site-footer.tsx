import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="bg-pine-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo dark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
            Courier privado entre Estados Unidos, Europa y Uruguay. Tu casillero
            en Miami y Madrid, tus compras en Montevideo.
          </p>
        </div>
        <div>
          <p className="eyebrow text-paper/50">Atención al cliente</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>Lunes a viernes, 09:00 a 20:00</li>
            <li>
              WhatsApp <span className="font-mono">099 123 456</span>
            </li>
            <li>info@usxcargo.com</li>
            <li>Tickets desde Mi Cuenta</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-paper/50">Pick-up Center</p>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>Nicolás Piaggio 1247</li>
            <li>Montevideo, Uruguay</li>
            <li>Lunes a viernes, 09:00 a 20:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>USX Cargo · Demo de rediseño — datos ficticios</p>
          <p>Reglamentación de reclamaciones e indemnizaciones postales</p>
        </div>
      </div>
    </footer>
  );
}
