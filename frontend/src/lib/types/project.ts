import type { ImageMetadata } from 'astro';
import type { StrapiImagen, Galeria, Seo } from './shared';

export interface Proyecto {
  id: number;
  nombre: string;
  slug: string;
  cliente?: string;
  ubicacion?: string;
  fechaCompletado?: string;
  descripcionCorta?: string;
  descripcionCompleta?: unknown;
  /** Imagen local en src/assets/ → optimizada por Astro (WebP + srcset) */
  imagenLocal?: ImageMetadata;
  /** Imagen remota / URL (fallback para compatibilidad) */
  imagenPrincipal?: StrapiImagen;
  galeria?: Galeria;
  destacado?: boolean;
  seo?: Seo;
}