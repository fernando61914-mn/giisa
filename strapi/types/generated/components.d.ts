import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAbout extends Struct.ComponentSchema {
  collectionName: 'components_shared_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    boton: Schema.Attribute.Component<'shared.button', false>;
    encabezado: Schema.Attribute.Component<'shared.section-header', false>;
    imagen: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedBenefit extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits';
  info: {
    displayName: 'Benefit';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    icono: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    abrirEnNuevaPestana: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    texto: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    beneficios: Schema.Attribute.Component<'shared.benefit', true>;
    boton: Schema.Attribute.Component<'shared.button', false>;
    descripcion: Schema.Attribute.Text;
    imagenFondo: Schema.Attribute.Media<'images'>;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    imagenes: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
    icon: 'book';
  };
  attributes: {
    botonPrincipal: Schema.Attribute.Component<'shared.button', false>;
    botonSecundario: Schema.Attribute.Component<'shared.button', false>;
    imagenFondo: Schema.Attribute.Media<'images'>;
    subtitulo: Schema.Attribute.Text;
    textoSuperior: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    contenido: Schema.Attribute.Blocks;
  };
}

export interface SharedSectionHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_headers';
  info: {
    displayName: 'Section Header';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    textoSuperior: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    descripcionSeo: Schema.Attribute.Text & Schema.Attribute.Required;
    imagenOpenGraph: Schema.Attribute.Media<'images'>;
    tituloSeo: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedServicesShowcase extends Struct.ComponentSchema {
  collectionName: 'components_shared_services_showcases';
  info: {
    displayName: 'Vitrina de Secci\u00F3n';
  };
  attributes: {
    botonVerTodos: Schema.Attribute.Component<'shared.button', false>;
    subtitulo: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

export interface SharedStatistic extends Struct.ComponentSchema {
  collectionName: 'components_shared_statistics';
  info: {
    displayName: 'Statistic';
  };
  attributes: {
    etiqueta: Schema.Attribute.String;
    icono: Schema.Attribute.String;
    valor: Schema.Attribute.String;
  };
}

export interface SharedStatisticsSeccion extends Struct.ComponentSchema {
  collectionName: 'components_shared_statistics_seccions';
  info: {
    displayName: 'Statistics Seccion';
  };
  attributes: {
    encabezado: Schema.Attribute.Component<'shared.section-header', false>;
    estadisticas: Schema.Attribute.Component<'shared.statistic', true>;
  };
}

export interface SharedTrustBarItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_trust_bar_items';
  info: {
    displayName: 'Trust Bar Item';
  };
  attributes: {
    descripcion: Schema.Attribute.Text;
    icono: Schema.Attribute.String;
    titulo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about': SharedAbout;
      'shared.benefit': SharedBenefit;
      'shared.button': SharedButton;
      'shared.cta': SharedCta;
      'shared.gallery': SharedGallery;
      'shared.hero': SharedHero;
      'shared.rich-text': SharedRichText;
      'shared.section-header': SharedSectionHeader;
      'shared.seo': SharedSeo;
      'shared.services-showcase': SharedServicesShowcase;
      'shared.statistic': SharedStatistic;
      'shared.statistics-seccion': SharedStatisticsSeccion;
      'shared.trust-bar-item': SharedTrustBarItem;
    }
  }
}
