import { strapiFetch } from '../strapi';
import type { Proyecto } from '../types/project';

interface StrapiList<T> {
  data: T[];
}

export async function getProyectos(): Promise<Proyecto[]> {
  const res = await strapiFetch<StrapiList<Proyecto>>(
    '/projects?populate=imagenPrincipal&sort=createdAt:desc'
  );
  return res.data;
}

export async function getProyectoBySlug(slug: string): Promise<Proyecto | null> {
  const res = await strapiFetch<StrapiList<Proyecto>>(
    `/projects?filters[slug][$eq]=${slug}&populate=imagenPrincipal,galeria,seo`
  );
  return res.data[0] ?? null;
}