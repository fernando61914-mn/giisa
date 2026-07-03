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
  titulo: 'Construimos infraestructura que transforma comunidades',
  subtitulo:
    'Más de 15 años de experiencia en construcción, supervisión e infraestructura con los más altos estándares de calidad y seguridad.',
  botonPrincipal: { texto: 'Cotiza tu proyecto', url: '/contact' },
  botonSecundario: { texto: 'Nuestros servicios', url: '/#servicios' },
};

// ── Barra de confianza ────────────────────────────────────────────────────────

export const barraConfianza: TrustBarItem[] = [
  {
    icono: 'escudo',
    titulo: 'Calidad garantizada',
    descripcion: 'Materiales y procesos con los más altos estándares.',
  },
  {
    icono: 'seguridad',
    titulo: 'Seguridad primero',
    descripcion: 'Protocolos estrictos en cada etapa del proyecto.',
  },
  {
    icono: 'sostenibilidad',
    titulo: 'Sostenibilidad',
    descripcion: 'Soluciones responsables con el medio ambiente.',
  },
  {
    icono: 'objetivo',
    titulo: 'Enfoque integral',
    descripcion: 'Diseño, construcción y supervisión en un solo equipo.',
  },
];

// ── Nosotros ─────────────────────────────────────────────────────────────────

export const nosotros: Nosotros = {
  encabezado: {
    textoSuperior: 'Sobre Nosotros',
    titulo: 'Más de 15 años construyendo confianza',
    descripcion:
      'Somos una empresa especializada en construcción, supervisión e infraestructura, ofreciendo soluciones integrales con altos estándares de calidad, seguridad y cumplimiento normativo.',
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
    nombre: 'Construcción Civil',
    slug: 'construccion-civil',
    descripcionCorta:
      'Ejecución de obras civiles e industriales con altos estándares de calidad y seguridad.',
  },
  {
    id: 2,
    nombre: 'Supervisión de Obras',
    slug: 'supervision-de-obras',
    descripcionCorta:
      'Control y seguimiento técnico de proyectos para garantizar el cumplimiento de especificaciones.',
  },
  {
    id: 3,
    nombre: 'Infraestructura',
    slug: 'infraestructura',
    descripcionCorta:
      'Desarrollo de infraestructura vial, hidráulica y urbana para comunidades y sectores productivos.',
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
