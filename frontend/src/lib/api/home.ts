import { strapiFetch } from '../strapi';
import type { HomeData } from '../types/home';

const POPULATE =
  'populate[hero][populate]=*' +
  '&populate[barraConfianza]=*' +
  '&populate[nosotros][populate]=*' +
  '&populate[estadisticas][populate][encabezado]=*' +
  '&populate[estadisticas][populate][estadisticas]=*' +
  '&populate[encabezadoServicios]=*' +
  '&populate[serviciosDestacados][populate]=imagenPrincipal' +
  '&populate[botonServicios]=*' +
  '&populate[encabezadoProyectos]=*' +
  '&populate[proyectosDestacados][populate]=imagenPrincipal' +
  '&populate[botonProyectos]=*' +
  '&populate[llamadoAccion][populate][beneficios]=*' +
  '&populate[llamadoAccion][populate][boton]=*' +
  '&populate[llamadoAccion][populate][imagenFondo][fields][0]=url' +
  '&populate[llamadoAccion][populate][imagenFondo][fields][1]=alternativeText' +
  '&populate[seo][populate][imagenOpenGraph][fields][0]=url';

export async function getHome(): Promise<HomeData> {
  const res = await strapiFetch<{ data: HomeData }>(`/home?${POPULATE}`);
  return res.data;
}