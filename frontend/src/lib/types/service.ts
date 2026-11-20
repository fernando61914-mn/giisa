import type { RemoteImage, Seo } from './shared';

export interface Servicio {
  id: number;
  nombre: string;
  slug: string;
  descripcionCorta?: string;
  descripcionCompleta?: unknown;
  url?: string;
  imagenPrincipal?: RemoteImage;
  icono?: string;
  orden?: number;
  destacado?: boolean;
  seo?: Seo;
}