import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAbout extends Struct.ComponentSchema {
  collectionName: 'components_shared_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    Description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SectionHeader: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    openInNewTab: Schema.Attribute.Boolean;
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
    button: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    Media: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
    icon: 'book';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button: Schema.Attribute.Component<'shared.button', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
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
    body: Schema.Attribute.RichText;
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
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServicesShowcase extends Struct.ComponentSchema {
  collectionName: 'components_shared_services_showcases';
  info: {
    displayName: 'Section Header';
  };
  attributes: {
    ShowAll: Schema.Attribute.Component<'shared.button', false>;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface SharedStatistic extends Struct.ComponentSchema {
  collectionName: 'components_shared_statistics';
  info: {
    displayName: 'Statistic';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedStatisticsSeccion extends Struct.ComponentSchema {
  collectionName: 'components_shared_statistics_seccions';
  info: {
    displayName: 'Statistics Seccion';
  };
  attributes: {
    RepeatableStatistic: Schema.Attribute.Component<'shared.statistic', true>;
    SectionHeader: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about': SharedAbout;
      'shared.button': SharedButton;
      'shared.cta': SharedCta;
      'shared.gallery': SharedGallery;
      'shared.hero': SharedHero;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.services-showcase': SharedServicesShowcase;
      'shared.statistic': SharedStatistic;
      'shared.statistics-seccion': SharedStatisticsSeccion;
    }
  }
}
