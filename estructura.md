# Estructura CMS (Strapi)

## 📁 SINGLE TYPES

### 🏠 Inicio

```text
Inicio
│
├── Hero
│   ├── Texto superior
│   ├── Título
│   ├── Descripción
│   ├── Imagen de fondo
│   ├── Botón principal
│   └── Botón secundario
│
├── Nosotros
│   ├── Encabezado de sección
│   ├── Imagen
│   └── Botón
│
├── Estadísticas
│   ├── Encabezado de sección
│   └── Estadísticas (repetible)
│
├── Servicios destacados
│   ├── Encabezado de sección
│   ├── Servicios seleccionados
│   └── Botón
│
├── Proyectos destacados
│   ├── Encabezado de sección
│   ├── Proyectos seleccionados
│   └── Botón
│
├── Llamado a la acción
│   ├── Título
│   ├── Descripción
│   ├── Imagen de fondo (opcional)
│   ├── Beneficios (repetible)
│   └── Botón
│
└── SEO
```

---

### 📞 Contacto

```text
Contacto
│
├── Hero
│   ├── Texto superior
│   ├── Título
│   ├── Descripción
│   └── Imagen
│
├── Encabezado de sección
│
├── Mapa
│   └── URL Google Maps Embed
│
└── SEO
```

---

### 🌐 Configuración del sitio

```text
Configuración del sitio
│
├── Logo
│
├── Navegación
│   ├── Elementos del menú (repetible)
│   ├── Teléfono
│   └── Botón principal
│
├── Información de la empresa
│   ├── Nombre comercial
│   ├── Razón social (opcional)
│   ├── Teléfono
│   ├── WhatsApp
│   ├── Correo electrónico
│   ├── Dirección
│   ├── URL Google Maps
│   └── Horario de atención
│
├── Redes sociales
│   ├── Facebook
│   ├── Instagram
│   ├── LinkedIn
│   ├── YouTube
│   ├── TikTok
│   └── X
│
├── Newsletter
│   ├── Título
│   ├── Descripción
│   └── Placeholder del input
│
├── Footer
│   ├── Descripción corta
│   ├── Copyright
│   ├── Aviso de privacidad
│   └── Términos y condiciones
│
└── SEO Global
```

---

# 📁 COLLECTION TYPES

## 🏗️ Servicios

```text
Servicios
│
├── Nombre
├── Slug
├── Descripción corta
├── Descripción completa
├── Icono
├── Imagen principal
├── Orden
└── SEO
```

---

## 🏢 Proyectos

```text
Proyectos
│
├── Nombre
├── Slug
├── Categoría
├── Cliente
├── Ubicación
├── Año
├── Descripción corta
├── Descripción completa
├── Imagen principal
├── Galería
├── Orden
└── SEO
```

---

## 📂 Categorías

```text
Categorías
│
├── Nombre
├── Slug
└── Descripción
```

---

# 📁 COMPONENTES

## Hero

```text
Hero
│
├── Texto superior
├── Título
├── Descripción
├── Imagen de fondo
├── Botón principal
└── Botón secundario
```

---

## Encabezado de sección

```text
Encabezado de sección
│
├── Texto superior
├── Título
└── Descripción
```

---

## Botón

```text
Botón
│
├── Texto
├── URL
└── Abrir en nueva pestaña
```

---

## Nosotros

```text
Nosotros
│
├── Encabezado de sección
├── Imagen
└── Botón
```

---

## Estadística

```text
Estadística
│
├── Valor
├── Etiqueta
└── Icono
```

---

## Sección de estadísticas

```text
Sección de estadísticas
│
├── Encabezado de sección
└── Estadísticas (repetible)
```

---

## Beneficio

```text
Beneficio
│
├── Icono
├── Título
└── Descripción
```

---

## Llamado a la acción

```text
Llamado a la acción
│
├── Título
├── Descripción
├── Imagen de fondo
├── Beneficios (repetible)
└── Botón
```

---

## Galería

```text
Galería
│
└── Imágenes (múltiples)
```

---

## SEO

```text
SEO
│
├── Título SEO
├── Descripción SEO
├── Imagen Open Graph
└── Palabras clave
```

---

## Navegación

```text
Navegación
│
├── Logo
├── Elementos del menú (repetible)
├── Teléfono
└── Botón principal
```

---

## Elemento del menú

```text
Elemento del menú
│
├── Nombre
├── URL
└── Abrir en nueva pestaña
```

---

## Información de la empresa

```text
Información de la empresa
│
├── Nombre comercial
├── Razón social
├── Teléfono
├── WhatsApp
├── Correo electrónico
├── Dirección
├── URL Google Maps
└── Horario de atención
```

---

## Red social

```text
Red social
│
├── Nombre
├── URL
└── Icono
```

---

## Footer

```text
Footer
│
├── Descripción
├── Copyright
├── Aviso de privacidad
└── Términos y condiciones
```

---

# 🔗 Relaciones

```text
Inicio
│
├── Hero
├── Nosotros
├── Estadísticas
│      └── Estadística (repetible)
│
├── Servicios destacados
│      └── Relación → Servicios
│
├── Proyectos destacados
│      └── Relación → Proyectos
│
├── CTA
│      └── Beneficios (repetible)
│
└── SEO
```

```text
Proyectos
│
├── Categoría
└── Galería
```

```text
Configuración del sitio
│
├── Navegación
├── Información de la empresa
├── Redes sociales
├── Newsletter
├── Footer
└── SEO Global
```
