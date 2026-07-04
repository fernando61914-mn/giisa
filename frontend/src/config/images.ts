/**
 * ─────────────────────────────────────────────────────────────────────────────
 * REGISTRO CENTRAL DE IMÁGENES
 *
 * Todas las imágenes locales del proyecto se importan aquí.
 * Astro las optimiza en build time → WebP + srcset automático.
 *
 * CÓMO AGREGAR UNA IMAGEN NUEVA:
 *   1. Guarda el archivo en `src/assets/images/<sección>/nombre.jpg`
 *   2. Agrégala a la sección correspondiente abajo con `import`
 *   3. Expórtala en el objeto de su sección
 *   4. Úsala en home.ts o en el componente importando desde este archivo
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ImageMetadata } from 'astro';

// ── Logo ─────────────────────────────────────────────────────────────────────
import logoImg from '../assets/images/logo.png';

// ── Hero ──────────────────────────────────────────────────────────────────────
import heroFondo from '../assets/images/hero/hero.png';

// ── Nosotros / About ──────────────────────────────────────────────────────────
// import aboutPrincipal from '../assets/images/about/equipo.jpg';

// ── Proyectos ─────────────────────────────────────────────────────────────────
import proyTuberiaCorrugada from '../assets/images/projects/instalacion-tuberia-corrugada-drenaje.png';
// import proyNombreDelProyecto from '../assets/images/projects/nombre-del-proyecto.jpg';

// ── Galería ───────────────────────────────────────────────────────────────────
// import galeria01 from '../assets/images/gallery/foto-01.jpg';
// import galeria02 from '../assets/images/gallery/foto-02.jpg';

// =============================================================================

/** Tipo para cada elemento de la galería */
export type GalleryImage = {
  src: ImageMetadata;
  alt: string;
};

// ── Exportaciones por sección ─────────────────────────────────────────────────

export const logoImage = logoImg;

export const heroImages = {
  fondo: heroFondo,
};

/**
 * Imágenes de la sección Nosotros / About.
 * Descomenta y agrega cuando tengas las fotos del equipo o la empresa.
 */
export const aboutImages: { principal?: ImageMetadata } = {
  // principal: aboutPrincipal,
};

/**
 * Imágenes de proyectos indexadas por slug.
 * La clave debe coincidir con el `slug` del proyecto en home.ts.
 */
export const projectImages: Record<string, ImageMetadata> = {
  'instalacion-tuberia-corrugada-drenaje': proyTuberiaCorrugada,
  // 'nombre-del-proyecto': proyNombreDelProyecto,
};

/**
 * Imágenes de la galería principal (sección portafolio / homepage).
 * Cada entrada necesita `src` (ImageMetadata) y `alt` (texto descriptivo para SEO).
 */
export const galleryImages: GalleryImage[] = [
  // { src: galeria01, alt: 'Instalación de tubería corrugada de drenaje' },
  // { src: galeria02, alt: 'Construcción de nave industrial' },
];
