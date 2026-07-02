import type {
  ComponenteHero,
  Nosotros,
  SeccionEstadisticas,
  TrustBarItem,
  ComponenteCTA,
  Seo,
  EncabezadoSeccion,
  Boton,
} from './shared';
import type { Servicio } from './service';
import type { Proyecto } from './project';

export interface HomeData {
  hero?: ComponenteHero;
  barraConfianza?: TrustBarItem[];
  nosotros?: Nosotros;
  estadisticas?: SeccionEstadisticas;
  encabezadoServicios?: EncabezadoSeccion;
  serviciosDestacados?: Servicio[];
  botonServicios?: Boton;
  encabezadoProyectos?: EncabezadoSeccion;
  proyectosDestacados?: Proyecto[];
  botonProyectos?: Boton;
  llamadoAccion?: ComponenteCTA;
  seo?: Seo;
}