export interface StrapiImagen {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

export interface Boton {
  texto: string;
  url: string;
  abrirEnNuevaPestana?: boolean;
}

export interface EncabezadoSeccion {
  textoSuperior?: string;
  titulo: string;
  descripcion?: string;
}

export interface TrustBarItem {
  icono: string;
  titulo: string;
  descripcion?: string;
}

export interface Beneficio {
  icono: string;
  titulo: string;
  descripcion?: string;
}

export interface Estadistica {
  valor: string;
  etiqueta: string;
  icono?: string;
}

export interface SeccionEstadisticas {
  encabezado?: EncabezadoSeccion;
  estadisticas: Estadistica[];
}

export interface ComponenteHero {
  textoSuperior?: string;
  titulo: string;
  subtitulo?: string;
  imagenFondo?: StrapiImagen;
  botonPrincipal?: Boton;
  botonSecundario?: Boton;
  alineacion?: 'izquierda' | 'centro' | 'derecha';
}

export interface Nosotros {
  encabezado?: EncabezadoSeccion;
  imagen?: StrapiImagen;
  boton?: Boton;
}

export interface ComponenteCTA {
  titulo: string;
  descripcion?: string;
  imagenFondo?: StrapiImagen;
  boton?: Boton;
  beneficios?: Beneficio[];
}

export interface Seo {
  tituloSeo: string;
  descripcionSeo: string;
  imagenOpenGraph?: StrapiImagen;
}

export interface Galeria {
  imagenes?: StrapiImagen[];
}