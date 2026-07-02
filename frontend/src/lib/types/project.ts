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
  imagenPrincipal?: StrapiImagen;
  galeria?: Galeria;
  destacado?: boolean;
  seo?: Seo;
}