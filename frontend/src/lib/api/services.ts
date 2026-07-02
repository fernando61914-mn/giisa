import { strapiFetch } from '../strapi';
import type { Servicio } from '../types/service';

interface StrapiList<T> {
  data: T[];
}

export async function getServicios(): Promise<Servicio[]> {
  const res = await strapiFetch<StrapiList<Servicio>>(
    '/services?populate=imagenPrincipal&sort=orden:asc'
  );
  return res.data;
}

export async function getServicioBySlug(slug: string): Promise<Servicio | null> {
  const res = await strapiFetch<StrapiList<Servicio>>(
    `/services?filters[slug][$eq]=${slug}&populate=imagenPrincipal,seo`
  );
  return res.data[0] ?? null;
}