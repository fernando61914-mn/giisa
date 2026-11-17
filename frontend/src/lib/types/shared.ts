export interface RemoteImage {
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
  imagenFondo?: RemoteImage;
  botonPrincipal?: Boton;
  botonSecundario?: Boton;
  alineacion?: 'izquierda' | 'centro' | 'derecha';
}

export interface Nosotros {
  encabezado?: EncabezadoSeccion;
  imagen?: RemoteImage;
  boton?: Boton;
}

export interface ComponenteCTA {
  titulo: string;
  descripcion?: string;
  imagenFondo?: RemoteImage;
  boton?: Boton;
  beneficios?: Beneficio[];
}

export interface Seo {
  tituloSeo: string;
  descripcionSeo: string;
  imagenOpenGraph?: RemoteImage;
}

export interface Galeria {
  imagenes?: RemoteImage[];
}