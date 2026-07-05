// Motivo firma: la ruta aérea MIA / MAD → MVD dibujada como arcos punteados,
// con chips estilo código de aeropuerto. Se usa en el hero y como remate visual.

function CityTag({ code, city, x, y }: { code: string; city: string; x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        x="-34"
        y="-15"
        width="68"
        height="30"
        rx="6"
        fill="var(--color-paper)"
        stroke="var(--color-mint-strong)"
      />
      <text
        textAnchor="middle"
        y="-1"
        fill="var(--color-pine)"
        fontSize="13"
        fontWeight="700"
        fontFamily="var(--font-mono)"
      >
        {code}
      </text>
      <text
        textAnchor="middle"
        y="10"
        fill="var(--color-ink-soft)"
        fontSize="6.5"
        letterSpacing="0.12em"
      >
        {city.toUpperCase()}
      </text>
    </g>
  );
}

export function RouteMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 240"
      fill="none"
      className={className}
      role="img"
      aria-label="Rutas aéreas desde Miami y Madrid hacia Montevideo"
    >
      {/* Miami → Montevideo */}
      <path
        d="M80 60 C 180 20, 400 40, 470 160"
        stroke="var(--color-gold)"
        strokeWidth="2"
        className="route-path"
      />
      {/* Madrid → Montevideo */}
      <path
        d="M480 40 C 520 90, 510 130, 478 148"
        stroke="var(--color-mint-strong)"
        strokeWidth="2"
        className="route-path"
        style={{ animationDelay: "-1.3s" }}
      />
      {/* Avión sobre la ruta principal */}
      <g transform="translate(300 33) rotate(14)">
        <path
          d="M0 0l14 4-14 4 3-4-3-4Z"
          fill="var(--color-gold)"
        />
      </g>
      <CityTag code="MIA" city="Miami" x={80} y={60} />
      <CityTag code="MAD" city="Madrid" x={480} y={40} />
      <CityTag code="MVD" city="Montevideo" x={470} y={172} />
      {/* Frecuencia como dato, no decoración */}
      <g fontFamily="var(--font-mono)" fontSize="10">
        <circle cx={52} cy={126} r={3} fill="var(--color-gold)" />
        <text x={64} y={130} fill="var(--color-ink-soft)">
          MIA → MVD · 2 vuelos / semana · 3 a 7 días
        </text>
        <circle cx={52} cy={150} r={3} fill="var(--color-mint-strong)" />
        <text x={64} y={154} fill="var(--color-ink-soft)">
          MAD → MVD · 1 vuelo / semana · 9 a 15 días
        </text>
      </g>
    </svg>
  );
}
