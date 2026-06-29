/**
 * ─────────────────────────────────────────────────────────────────────────────
 * BRAND CONFIGURATION
 * Grupo de Infraestructura Integral
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const brand = {
  // ── Site Identity ──────────────────────────────────────────────────────────
  name: 'Grupo de Infraestructura Integral',
  tagline: 'Construcción y Supervisión de Proyectos.',
  description:
    'Grupo de Infraestructura Integral es una empresa especializada en construcción, supervisión e infraestructura, ofreciendo soluciones integrales con altos estándares de calidad, seguridad y cumplimiento.',
  url: 'https://gii.com.mx',
  locale: 'es_MX',

  // ── Fonts ──────────────────────────────────────────────────────────────────
  fonts: {
    body: 'Inter',
    display: 'Montserrat',
  },

  // ── Colour Palette ─────────────────────────────────────────────────────────
  colors: {
    // Azul corporativo
    primary: '#005BAA',

    // Azul más claro para hover
    primaryLight: '#1976D2',

    primaryFg: '#FFFFFF',

    // Verde del logo
    accent: '#5DAE2B',

    accentFg: '#FFFFFF',

    // Fondos
    background: '#FFFFFF',
    surface: '#F5F7FA',

    // Bordes
    border: '#D9E2EC',

    // Texto
    text: '#2F3743',
    textMuted: '#6B7280',

    // Footer
    dark: '#023A70',
    darkSurface: '#012C55',
  },

  // ── Border radius ──────────────────────────────────────────────────────────
  radius: {
    sm: '0.5rem',
    md: '0.875rem',
    lg: '1.25rem',
    full: '9999px',
  },
} as const;

export type Brand = typeof brand;