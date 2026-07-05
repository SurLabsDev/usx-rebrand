import type { ReactNode } from "react";

export function StatusChip({
  status,
  tone = "green",
}: {
  status: string;
  tone?: "green" | "gold" | "neutral";
}) {
  const tones = {
    green: "bg-emerald text-paper",
    gold: "bg-gold-soft text-gold-deep border border-gold/50",
    neutral: "bg-mint text-pine border border-mint-strong",
  };
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 font-mono text-[0.68rem] font-medium tracking-wide ${tones[tone]}`}
    >
      {status}
    </span>
  );
}

export function Mono({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`font-mono ${className}`}>{children}</span>;
}

export function money(n: number) {
  return `USD ${n.toFixed(2)}`;
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-line bg-white ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="eyebrow text-emerald">{children}</p>;
}

export function FlagUS({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={`${className} rounded-[2px]`} aria-label="Estados Unidos" role="img">
      <rect width="20" height="14" fill="#f5f5f2" />
      {[0, 2, 4, 6, 8, 10, 12].map((y) => (
        <rect key={y} y={y} width="20" height="1" fill="#c94a44" />
      ))}
      <rect width="9" height="7" fill="#3c5a92" />
    </svg>
  );
}

export function FlagES({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={`${className} rounded-[2px]`} aria-label="España" role="img">
      <rect width="20" height="14" fill="#d9a441" />
      <rect width="20" height="3.5" fill="#c94a44" />
      <rect y="10.5" width="20" height="3.5" fill="#c94a44" />
    </svg>
  );
}

export function FlagUY({ className = "h-3.5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={`${className} rounded-[2px]`} aria-label="Uruguay" role="img">
      <rect width="20" height="14" fill="#f5f5f2" />
      {[2, 5, 8, 11].map((y) => (
        <rect key={y} y={y} width="20" height="1.4" fill="#4a72b8" />
      ))}
      <circle cx="4" cy="3.5" r="2" fill="#d9a441" />
    </svg>
  );
}

export function OriginFlag({ origen }: { origen: "USA" | "EUR" }) {
  return origen === "USA" ? <FlagUS /> : <FlagES />;
}
