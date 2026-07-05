export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 1.8c-4.7 0-8.4 3.7-8.4 8.5 0 3.4 2.3 6.6 4.4 8.8a30 30 0 0 0 3.6 3.2c.25.18.55.18.8 0a30 30 0 0 0 3.6-3.2c2.1-2.2 4.4-5.4 4.4-8.8 0-4.8-3.7-8.5-8.4-8.5Z"
        fill="currentColor"
      />
      <path
        d="m8.6 6.9 6.8 6.8M15.4 6.9l-6.8 6.8"
        stroke="var(--logo-x, #fafaf7)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  dark = false,
  compact = false,
}: {
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark
        className={`h-8 w-8 ${dark ? "text-paper [--logo-x:#0c3a2d]" : "text-pine"}`}
      />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-xl tracking-tight ${dark ? "text-paper" : "text-pine"}`}
          >
            USX
          </span>
          <span
            className={`mt-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.18em] ${dark ? "text-paper/60" : "text-ink-soft"}`}
          >
            Cargo
          </span>
        </span>
      )}
    </span>
  );
}
