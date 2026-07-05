// Datos de demostración. Todo lo que aparece acá es ficticio:
// nombres, cédulas, trackings, montos y direcciones particulares.

export const RATES = {
  usa: 17.5,
  europa: 21.5,
  librosUsa: 10.5,
  librosEuropa: 14.5,
} as const;

export const user = {
  nombre: "Valentina",
  apellido: "Techera",
  suite: "51234",
  saldo: -18.4,
  ahorroUltimoEnvio: 9.2,
  ahorroAnual: 96.3,
};

export const direcciones = {
  eeuu: {
    nombre: "Techera, Valentina",
    lineas: ["7286 NW 66th Street, Suite 51234", "Miami, FL 33166-6742", "United States"],
    telefono: "+1 305 898 8160",
    horario: "Lunes a viernes, 08:00 a 16:00",
  },
  europa: {
    nombre: "Techera, Valentina",
    lineas: ["Camilo José Cela 8, Local 5 — Suite 51234", "28232 Las Rozas, Madrid", "España"],
    telefono: "+34 644 69 88 32",
    horario: "Lunes a viernes, 10:00 a 17:00",
  },
  montevideo: {
    nombre: "Pick-up Center",
    lineas: ["Nicolás Piaggio 1247", "Montevideo, 11300", "Uruguay"],
    telefono: "099 123 456",
    horario: "Lunes a viernes, 09:00 a 20:00",
  },
};

export type EstadoPaquete = "INGRESADO" | "PROCESANDO" | "EN VUELO" | "DISPONIBLE";

export type Paquete = {
  id: string;
  origen: "USA" | "EUR";
  estado: EstadoPaquete;
  fechaIngreso: string;
  tracking: string;
  pesoKg: number;
  descripcion: string;
};

export const paquetes: Paquete[] = [
  {
    id: "P712834",
    origen: "USA",
    estado: "INGRESADO",
    fechaIngreso: "3 de julio",
    tracking: "1ZW909E21309371847",
    pesoKg: 0.4,
    descripcion: "Apple Watch SE 44mm",
  },
  {
    id: "P712245",
    origen: "USA",
    estado: "INGRESADO",
    fechaIngreso: "1 de julio",
    tracking: "TBA332444990842",
    pesoKg: 1.1,
    descripcion: "Zapatillas New Balance 574",
  },
  {
    id: "P711980",
    origen: "EUR",
    estado: "PROCESANDO",
    fechaIngreso: "28 de junio",
    tracking: "CP482119045ES",
    pesoKg: 0.8,
    descripcion: "Libros — El Infinito en un Junco",
  },
];

export const guiaStatuses = [
  "INGRESADO",
  "PROCESANDO",
  "ARMADO",
  "EMPACADO",
  "ENVIADO",
  "AEROPUERTO",
  "MONTEVIDEO",
  "ENTREGADO",
] as const;

export type Guia = {
  id: string;
  origen: "USA" | "EUR";
  estado: (typeof guiaStatuses)[number];
  paqueteId: string;
  ingresado: string;
  tracking: string;
  pesoKg: number;
  contenido: string;
  valorDeclarado: number;
  tarjeta: string;
  destinatario: string;
  retiro: string;
  cargoAproximado: number;
};

export const guiaActiva: Guia = {
  id: "G291442",
  origen: "USA",
  estado: "PROCESANDO",
  paqueteId: "P711604",
  ingresado: "1 de julio",
  tracking: "9632001960210442105500873488373353",
  pesoKg: 0.9,
  contenido: "Kindle Paperwhite 16GB",
  valorDeclarado: 164.99,
  tarjeta: "VISA (4412) DÉBITO",
  destinatario: "Joaquín Techera",
  retiro: "Pick-up Center — Nicolás Piaggio 1247, Montevideo",
  cargoAproximado: 15.75,
};

export type Destinatario = {
  nombre: string;
  cedula: string;
  nacimiento: string;
  direccion: string;
  franquiciaDisponible: number;
  enviosDisponibles: number;
  franquiciasUtilizadas: { guia: string; monto: number }[];
};

export const destinatarios: Destinatario[] = [
  {
    nombre: "Valentina Techera",
    cedula: "4.812.334-7",
    nacimiento: "14-03-1994",
    direccion: "Av. Brasil 2740, Montevideo",
    franquiciaDisponible: 800,
    enviosDisponibles: 3,
    franquiciasUtilizadas: [],
  },
  {
    nombre: "Joaquín Techera",
    cedula: "5.104.881-2",
    nacimiento: "02-11-1998",
    direccion: "Av. Brasil 2740, Montevideo",
    franquiciaDisponible: 222.8,
    enviosDisponibles: 0,
    franquiciasUtilizadas: [
      { guia: "G265701", monto: 194.14 },
      { guia: "G268912", monto: 191.92 },
      { guia: "G283507", monto: 191.14 },
    ],
  },
];

export type Movimiento = {
  fecha: string;
  descripcion: string;
  asiento: string;
  cargo?: number;
  pago?: number;
  saldo: number;
};

export const movimientos: Movimiento[] = [
  { fecha: "3 jul", descripcion: "Crédito P711604, cancelada VUCE", asiento: "556958", cargo: -10, saldo: -18.4 },
  { fecha: "2 jul", descripcion: "Cargo extra VUCE", asiento: "555779", cargo: 10, saldo: -28.4 },
  { fecha: "27 jun", descripcion: "Cargo manejo orden de compra F5147", asiento: "554068", cargo: 10.69, saldo: -18.4 },
  { fecha: "27 jun", descripcion: "Orden de compra F5147", asiento: "554067", cargo: 178.17, saldo: -7.71 },
  { fecha: "27 jun", descripcion: "Pago orden de compra F5147 — transacción 304220", asiento: "554066", pago: 178.17, saldo: 170.46 },
  { fecha: "23 jun", descripcion: "Cargo manejo orden de compra F5102", asiento: "552330", cargo: 11.91, saldo: -7.71 },
  { fecha: "23 jun", descripcion: "Orden de compra F5102", asiento: "552329", cargo: 189.0, saldo: 4.2 },
  { fecha: "23 jun", descripcion: "Pago orden de compra F5102 — transacción 303546", asiento: "552328", pago: 189.0, saldo: 193.2 },
  { fecha: "15 jun", descripcion: "Pago — transacción 301989", asiento: "547836", pago: 10.5, saldo: 4.2 },
  { fecha: "11 jun", descripcion: "Costo envío G283507", asiento: "546915", cargo: 10.5, saldo: -6.3 },
];

export type Carrito = {
  id: string;
  estado: "ABIERTA" | "PROCESANDO" | "COMPRADA";
  items: { nombre: string; cantidad: number; precio: number }[];
};

export const carritos: Carrito[] = [
  {
    id: "#5102",
    estado: "COMPRADA",
    items: [{ nombre: "Apple Watch SE 2da Gen 44mm GPS", cantidad: 1, precio: 189.0 }],
  },
  {
    id: "#5147",
    estado: "COMPRADA",
    items: [
      { nombre: "Correa deportiva 44mm", cantidad: 1, precio: 39.99 },
      { nombre: "Cargador magnético USB-C", cantidad: 1, precio: 29.99 },
      { nombre: "Funda protectora x2", cantidad: 1, precio: 71.2 },
      { nombre: "Protector de pantalla", cantidad: 1, precio: 36.99 },
    ],
  },
];

export const envios = {
  madrid: {
    ciudad: "Madrid",
    codigo: "MAD",
    cierre: "Lunes 6, 07:00 h",
    arribo: "Jueves 9",
    paquetes: 0,
    disponibles: 0,
    guias: 0,
  },
  miami: {
    ciudad: "Miami",
    codigo: "MIA",
    cierre: "Martes 7, 18:00 h",
    arribo: "Viernes 10",
    paquetes: 2,
    disponibles: 2,
    guias: 1,
  },
};

export const reviews = [
  {
    nombre: "Cecilia Arrieta",
    fecha: "hace 2 semanas",
    texto:
      "Muy conforme con la atención, tanto telefónica como en el local. Los paquetes llegaron antes de lo estimado.",
  },
  {
    nombre: "Rodrigo Píriz",
    fecha: "hace 1 mes",
    texto: "Buena atención, rápida, y los precios más razonables del mercado. Lo recomiendo.",
  },
  {
    nombre: "Lucía Fagúndez",
    fecha: "hace 2 meses",
    texto: "El mejor correo privado de Uruguay. Envíos ágiles y seguros, hace años que los uso.",
  },
];
