import Link from "next/link";

export default function DeliveryPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="font-display text-2xl text-pine sm:text-3xl">Delivery</h1>

      <div className="mt-6 flex flex-col items-center rounded-2xl border border-dashed border-mint-strong bg-white px-6 py-16 text-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-12 w-12 text-mint-strong"
          aria-hidden="true"
        >
          <path d="M2.5 7h11v10h-11zM13.5 10h4l3 3v4h-7M7 20a1.8 1.8 0 1 0 0-3.6A1.8 1.8 0 0 0 7 20Zm10.5 0a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z" />
        </svg>
        <h2 className="mt-5 text-lg font-semibold text-pine">
          No tenés envíos a dirección en curso
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
          Cuando una guía llegue a Montevideo vas a poder pedir el envío a tu
          puerta, en Montevideo o el interior, desde aproximadamente USD 7.50.
        </p>
        <Link
          href="/panel/guias"
          className="mt-6 rounded-lg bg-pine px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-pine-soft"
        >
          Ver mis guías
        </Link>
      </div>
    </div>
  );
}
