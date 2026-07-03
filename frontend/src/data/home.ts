/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CONTENIDO DE LA PÁGINA DE INICIO
 * Edita este archivo para actualizar el contenido sin tocar los componentes.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type {
  ComponenteHero,
  TrustBarItem,
  Nosotros,
  SeccionEstadisticas,
  EncabezadoSeccion,
  Boton,
  ComponenteCTA,
} from '../lib/types/shared';
import type { Servicio } from '../lib/types/service';
import type { Proyecto } from '../lib/types/project';

// ── Hero ─────────────────────────────────────────────────────────────────────

export const hero: ComponenteHero = {
  textoSuperior: 'PROYECTO • CONSTRUCCIÓN • SUPERVISIÓN',
  titulo: 'Desarrollamos soluciones integrales de ingeniería y construcción',
  subtitulo:
    'Para proyectos de infraestructura, edificación, naves industriales y supervisión especializada, garantizando calidad, seguridad y cumplimiento.',
  botonPrincipal: { texto: 'Cotiza tu proyecto', url: '/contact' },
  botonSecundario: { texto: 'Nuestros servicios', url: '/#servicios' },
};

// ── Barra de confianza ────────────────────────────────────────────────────────

export const barraConfianza: TrustBarItem[] = [
  {
    icono: 'escudo',
    titulo: 'Calidad certificada',
    descripcion: 'Control de calidad certificado en cada etapa del proyecto.',
  },
  {
    icono: 'seguridad',
    titulo: 'Seguridad primero',
    descripcion: 'Protocolos estrictos de seguridad en cada obra.',
  },
  {
    icono: 'objetivo',
    titulo: 'Cumplimiento de plazos',
    descripcion: 'Entregamos en tiempo y dentro del presupuesto acordado.',
  },
  {
    icono: 'sostenibilidad',
    titulo: 'Normativas nacionales',
    descripcion: 'Cumplimiento de todas las normas y reglamentos vigentes.',
  },
];

// ── Nosotros ─────────────────────────────────────────────────────────────────

export const nosotros: Nosotros = {
  encabezado: {
    textoSuperior: 'Sobre Nosotros',
    titulo: 'Construimos el futuro con ingeniería y excelencia',
    descripcion:
      'GIISA es una empresa mexicana especializada en el desarrollo de proyectos de infraestructura, construcción y supervisión de obras civiles e industriales. Nuestro compromiso es brindar soluciones eficientes, seguras y sustentables que generen valor para nuestros clientes y para el desarrollo del país.',
  },
  boton: { texto: 'Conócenos más', url: '/about' },
};

// ── Estadísticas ──────────────────────────────────────────────────────────────

export const estadisticas: SeccionEstadisticas = {
  estadisticas: [
    { valor: '+250', etiqueta: 'Proyectos completados' },
    { valor: '+18', etiqueta: 'Años de experiencia' },
    { valor: '+120', etiqueta: 'Clientes satisfechos' },
    { valor: '95%', etiqueta: 'De satisfacción' },
  ],
};

// ── Servicios ─────────────────────────────────────────────────────────────────

export const encabezadoServicios: EncabezadoSeccion = {
  textoSuperior: 'Lo que hacemos',
  titulo: 'Nuestros Servicios',
  descripcion:
    'Soluciones integrales en construcción, supervisión e infraestructura para proyectos de cualquier escala.',
};

export const servicios: Servicio[] = [
  {
    id: 1,
    nombre: 'Obra Civil',
    slug: 'obra-civil',
    descripcionCorta:
      'Carreteras, autopistas, puentes, infraestructura urbana, obras hidráulicas y pavimentaciones con los más altos estándares de calidad.',
  },
  {
    id: 2,
    nombre: 'Edificación',
    slug: 'edificacion',
    descripcionCorta:
      'Edificios corporativos, centros comerciales, hospitales, escuelas y vivienda vertical. Proyectos de cualquier escala y complejidad.',
  },
  {
    id: 3,
    nombre: 'Naves Industriales',
    slug: 'naves-industriales',
    descripcionCorta:
      'Diseño y construcción de naves industriales, ampliaciones, plataformas y estructuras metálicas a la medida de tu operación.',
  },
  {
    id: 4,
    nombre: 'Supervisión de Obra',
    slug: 'supervision-de-obra',
    descripcionCorta:
      'Supervisión técnica, control de calidad, seguimiento de programas, gestión documental y control de costos en cada etapa.',
  },
  {
    id: 5,
    nombre: 'Mantenimiento Integral',
    slug: 'mantenimiento-integral',
    descripcionCorta:
      'Instalaciones eléctricas, sistemas electromecánicos, mantenimiento preventivo y correctivo, y conservación de inmuebles.',
  },
];

export const botonServicios: Boton = {
  texto: 'Ver todos los servicios',
  url: '/services',
};

// ── Proyectos ─────────────────────────────────────────────────────────────────

export const encabezadoProyectos: EncabezadoSeccion = {
  textoSuperior: 'Nuestro portafolio',
  titulo: 'Proyectos Destacados',
};

// Agrega proyectos aquí cuando tengas imágenes disponibles:
// { id: 1, nombre: "Nombre del proyecto", slug: "slug", descripcionCorta: "..." }
export const proyectos: Proyecto[] = [];

export const botonProyectos: Boton = {
  texto: 'Ver todos los proyectos',
  url: '/projects',
};

// ── CTA ───────────────────────────────────────────────────────────────────────

export const cta: ComponenteCTA = {
  titulo: '¿Tienes un proyecto en mente?',
  descripcion:
    'Contáctanos hoy y recibe asesoría personalizada sin costo. Nuestro equipo está listo para ayudarte.',
  boton: { texto: 'Cotiza tu proyecto', url: '/contact' },
  beneficios: [
    {
      icono: 'reloj',
      titulo: 'Respuesta rápida',
      descripcion: 'Te contactamos en menos de 24 horas.',
    },
    {
      icono: 'usuario',
      titulo: 'Asesoría personalizada',
      descripcion: 'Solución adaptada a tus necesidades.',
    },
    {
      icono: 'paloma',
      titulo: 'Sin compromiso',
      descripcion: 'Cotización gratuita y sin obligación.',
    },
  ],
};
