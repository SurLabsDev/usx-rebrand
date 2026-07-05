# USX Cargo — Rediseño (demo)

Propuesta de rebrand para [usxcargo.com](https://usxcargo.com): landing pública +
panel de cliente completo, construida en Next.js (App Router) y Tailwind CSS v4.

**Es un mockup.** No hay backend ni login: todos los datos (usuario, paquetes,
guías, movimientos, direcciones) son ficticios y viven en
[`src/lib/data.ts`](src/lib/data.ts).

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Landing: hero con calculadora de tarifas interactiva, cómo funciona, tarifas, servicio de Compras, ubicaciones, reseñas |
| `/panel` | Resumen: ahorro, estado de cuenta, próximos vuelos |
| `/panel/paquetes` | Paquetes en casillero |
| `/panel/guias` | Guía activa con timeline de seguimiento |
| `/panel/delivery` | Envíos a dirección (estado vacío) |
| `/panel/destinatarios` | Destinatarios y franquicias |
| `/panel/direcciones` | Direcciones de casillero con botones de copiar |
| `/panel/cuenta` | Saldo, pagos y movimientos |
| `/panel/compras` | Carritos del servicio de Compras |

## Sistema de diseño

- **Color:** verde pino `#0c3a2d` como color de marca, esmeralda `#177a4c` para
  acciones, papel cálido `#fafaf7` de fondo y dorado `#e8b54d` reservado para el
  servicio de Compras. Tokens en [`src/app/globals.css`](src/app/globals.css).
- **Tipografía:** Archivo variable (expandida en títulos, estilo etiqueta de
  carga aérea) + IBM Plex Mono para datos duros: trackings, pesos, precios y suites.
- **Firma visual:** la ruta aérea MIA / MAD → MVD como motivo gráfico
  ([`src/components/route-motif.tsx`](src/components/route-motif.tsx)), retomada
  en el timeline de guías.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # verificación de producción
```

## Deploy en Vercel

Opción A — CLI:

```bash
npx vercel        # login + deploy de preview
npx vercel --prod # deploy a producción
```

Opción B — GitHub: subí el repo a GitHub y en [vercel.com/new](https://vercel.com/new)
importalo; no requiere configuración extra.
