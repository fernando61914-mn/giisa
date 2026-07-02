import type { StrapiImagen, Seo } from './shared';

export interface Servicio {
  id: number;
  nombre: string;
  slug: string;
  descripcionCorta?: string;
  descripcionCompleta?: unknown;
  imagenPrincipal?: StrapiImagen;
  icono?: string;
  orden?: number;
  destacado?: boolean;
  seo?: Seo;
}