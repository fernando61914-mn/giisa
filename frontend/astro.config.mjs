// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://gii.com.mx",
  output: "static",

  // Permite que Astro descargue y optimice imágenes remotas en build time
  image: {
    remotePatterns: [
      // Strapi local (dev)
      { protocol: "http", hostname: "localhost" },
      // Strapi Cloud (producción) — todos los subdominios de strapiapp.com
      { protocol: "https", hostname: "*.strapiapp.com" },
      // Cloudinary (si Strapi Cloud lo usa como proveedor de media)
      { protocol: "https", hostname: "res.cloudinary.com" },
      // Unsplash (placeholders de desarrollo)
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  integrations: [sitemap(), robotsTxt()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Oswald",
      cssVariable: "--font-display",
      weights: ["400", "600", "700"],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-body",
      weights: ["400", "500", "700"],
      styles: ["normal"],
    },
  ],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
    },
  },
});
