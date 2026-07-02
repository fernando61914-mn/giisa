import { strapiFetch } from '../strapi';
import type { ComponenteHero, EncabezadoSeccion, Seo } from '../types/shared';

export interface ContactoData {
  hero?: ComponenteHero;
  encabezado?: EncabezadoSeccion;
  direccion?: string;
  telefono?: string;
  whatsapp?: string;
  correo?: string;
  urlGoogleMaps?: string;
  seo?: Seo;
}

export async function getContacto(): Promise<ContactoData> {
  const res = await strapiFetch<{ data: ContactoData }>(
    '/contact?populate[hero][populate]=*&populate[encabezado]=*&populate[seo][populate][imagenOpenGraph]=*'
  );
  return res.data;
}