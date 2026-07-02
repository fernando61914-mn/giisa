Plan de mejora: Sistema de Branding Centralizado

Objetivo

Eliminar la duplicidad de configuración entre brand.ts y theme.css, dejando una única fuente de verdad para toda la identidad visual del proyecto.

Al finalizar esta mejora, todos los cambios de marca deberán realizarse únicamente desde src/config/brand.ts.

⸻

Problema actual

Actualmente la configuración de la marca se encuentra duplicada.

brand.ts
│
├── Nombre
├── Descripción
├── Tipografías
└── Colores

y además

theme.css
│
└── Variables CSS (@theme)

Esto provoca que:

- exista información duplicada;
- sea fácil olvidar actualizar alguno de los archivos;
- la documentación del proyecto no refleje el comportamiento real.

⸻

Objetivos

Fuente única de configuración

Todo deberá definirse desde:

src/config/brand.ts

Este archivo será el único lugar donde se modificará la identidad visual del sitio.

⸻

Variables CSS automáticas

Las variables CSS utilizadas por Tailwind deberán generarse automáticamente a partir de brand.ts.

Ejemplo:

brand.ts
↓
scripts/generate-theme.ts
↓
src/styles/theme.css

⸻

Beneficios

- Una sola fuente de verdad.
- Menor mantenimiento.
- Evitar errores por configuración duplicada.
- Facilitar la reutilización del starter para futuros clientes.
- Mejor experiencia de desarrollo.

⸻

Arquitectura propuesta

src/
│
├── config/
│ └── brand.ts
│
├── styles/
│ └── theme.css ← generado automáticamente
│
└── ...
│
scripts/
│
└── generate-theme.ts

⸻

Responsabilidades

brand.ts

Será responsable de definir:

Información del sitio

- Nombre
- Tagline
- Descripción
- URL
- Locale

⸻

Tipografías

Body
Display

⸻

Paleta de colores

Primary
Primary Light
Primary Foreground
Accent
Accent Foreground
Background
Surface
Border
Text
Text Muted
Dark
Dark Surface

⸻

Bordes

Small
Medium
Large
Full

⸻

generate-theme.ts

Será responsable de:

- leer brand.ts;
- generar automáticamente theme.css;
- escribir todas las variables CSS necesarias para Tailwind.

No contendrá lógica de negocio.

Únicamente transformará datos.

⸻

theme.css

Este archivo dejará de editarse manualmente.

Su contenido será generado automáticamente.

Se recomienda incluir una advertencia al inicio:

/\*

- ⚠️ ESTE ARCHIVO ES GENERADO AUTOMÁTICAMENTE.
-
- No realizar modificaciones manuales.
-
- Ejecutar:
- pnpm run generate:theme
  \*/

⸻

Scripts

Agregar al package.json

{
"scripts": {
"generate:theme": "tsx scripts/generate-theme.ts"
}
}

Posteriormente podrá integrarse con:

{
"scripts": {
"dev": "pnpm run generate:theme && astro dev",
"build": "pnpm run generate:theme && astro build"
}
}

De esta forma nunca será necesario ejecutar el script manualmente.

⸻

Flujo de trabajo

Antes

Editar brand.ts
↓
Editar theme.css
↓
Ejecutar Astro

⸻

Después

Editar brand.ts
↓
pnpm run dev
↓
theme.css se genera automáticamente
↓
Astro utiliza los nuevos colores

⸻

Futuras mejoras

Una vez implementado este sistema, podrá ampliarse para generar automáticamente:

- variables CSS;
- tema de Tailwind;
- color del navegador (theme-color);
- manifest de la PWA;
- favicon de color;
- Open Graph Theme Color;
- colores para emails HTML;
- tokens para Storybook (si el proyecto crece).

⸻

Criterios de aceptación

- brand.ts será la única fuente de configuración de la identidad visual.
- theme.css será generado automáticamente.
- No existirán colores duplicados entre archivos.
- pnpm run dev reflejará automáticamente cualquier cambio realizado en brand.ts.
- pnpm run build generará siempre un tema sincronizado.
- El README deberá actualizarse para reflejar el nuevo flujo de trabajo.

⸻

Estado

- Crear scripts/generate-theme.ts
- Generar automáticamente theme.css
- Agregar script generate:theme
- Integrar con dev
- Integrar con build
- Actualizar README
- Eliminar la necesidad de editar theme.css manualmente
