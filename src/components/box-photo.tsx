// Foto de paquete estilizada (la demo no usa imágenes reales).
export function BoxPhoto({ seed = 0 }: { seed?: number }) {
  const hues = [
    ["#d9c7a7", "#c4ae8a", "#a98f66"],
    ["#cbb794", "#b5a07c", "#96805a"],
    ["#e0d0b4", "#cdb894", "#ad9670"],
  ];
  const [light, mid, dark] = hues[seed % hues.length];
  return (
    <div className="flex h-full min-h-36 items-center justify-center rounded-xl bg-mint/70">
      <svg viewBox="0 0 120 100" className="h-24 w-28" aria-hidden="true">
        {/* caja isométrica */}
        <polygon points="60,14 104,34 60,54 16,34" fill={light} />
        <polygon points="16,34 60,54 60,92 16,72" fill={mid} />
        <polygon points="104,34 60,54 60,92 104,72" fill={dark} />
        {/* precinto */}
        <polygon points="55,16.3 65,11.7 109,31.7 99,36.3" fill="var(--color-pine)" opacity="0.85" />
        <polygon points="55,16.3 55,54.7 60,57 60,54 65,51.7 65,11.7" fill="var(--color-pine)" opacity="0.12" />
        {/* etiqueta */}
        <rect x="30" y="52" width="22" height="14" rx="1.5" fill="#fafaf7" transform="skewY(24)" />
      </svg>
    </div>
  );
}
