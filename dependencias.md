Dependencias del proyecto

Este documento describe las dependencias adicionales utilizadas en el proyecto Grupo de Infraestructura Integral (GII), así como el motivo de su inclusión y los casos de uso previstos.

⸻

Filosofía del proyecto

El objetivo es mantener el proyecto ligero, rápido y fácil de mantener.

Se evitará instalar librerías que:

- dupliquen funcionalidades;
- agreguen peso innecesario;
- puedan resolverse con CSS o JavaScript nativo.

Cada dependencia debe aportar un valor claro al proyecto.

⸻

Dependencias

Motion

Instalación

npm install motion

Documentación

https://motion.dev/

Objetivo

Gestionar todas las animaciones del sitio de manera moderna y ligera.

Se utilizará únicamente para animaciones sutiles que mejoren la experiencia del usuario sin distraer de la información principal.

Casos de uso

Hero

- Fade In
- Translate Y
- Aparición progresiva del contenido

⸻

Navbar

- Cambio de transparente a sólido
- Aparición del blur
- Cambio de sombra
- Transiciones suaves durante el scroll

⸻

Secciones

Animación de aparición al entrar al viewport.

Ejemplo:

- Nosotros
- Estadísticas
- Servicios
- Proyectos
- CTA

⸻

Cards

Hover sutil:

- Elevación
- Ligero movimiento
- Cambio de sombra

⸻

Botones

Hover:

- Escala ligera
- Cambio de color
- Transiciones suaves

⸻

Menú móvil

- Fade
- Slide
- Aparición del overlay

⸻

Animaciones permitidas

- Opacity
- Translate
- Scale
- Rotate (solo cuando sea necesario)
- Stagger

Animaciones que NO se utilizarán

- Bounce
- Flip
- Shake
- Zoom exagerado
- Animaciones llamativas que resten profesionalismo

⸻

Lenis

Instalación

npm install @studio-freight/lenis

Documentación

https://lenis.darkroom.engineering/

Objetivo

Proporcionar un desplazamiento (scroll) suave en todo el sitio.

El objetivo no es hacer el sitio “más llamativo”, sino mejorar la sensación de fluidez durante la navegación.

Casos de uso

- Scroll entre secciones
- Navegación mediante anclas
- Navegación desde el menú principal
- Mejor integración con Motion

Beneficios

- Scroll más natural
- Sensación premium
- Mejor experiencia en equipos de escritorio
- Excelente integración con Astro

⸻

Estructura recomendada

src/
│
├── components/
│ ├── layout/
│ ├── sections/
│ └── ui/
│
├── lib/
│ ├── animations/
│ │ ├── fade.ts
│ │ ├── reveal.ts
│ │ ├── navbar.ts
│ │ ├── hero.ts
│ │ └── stagger.ts
│ │
│ └── smooth-scroll/
│ └── lenis.ts

⸻

Reglas del proyecto

Animaciones

Las animaciones deben transmitir:

- profesionalismo;
- elegancia;
- fluidez.

No deben distraer al usuario.

⸻

Duraciones recomendadas

Elemento Duración
Fade 300–600 ms
Navbar 250–300 ms
Hover 200–250 ms
Hero 600–900 ms
Scroll Reveal 400–700 ms

⸻

Curvas de animación

Preferir:

ease-out

o

cubic-bezier(.22,.61,.36,1)

Evitar curvas agresivas.

⸻

Dependencias descartadas

Actualmente NO se consideran necesarias las siguientes librerías:

- GSAP
- AOS
- Animate.css
- WOW.js
- Swiper
- Embla Carousel

Si en el futuro surge un requerimiento específico (por ejemplo, un carrusel de proyectos o una animación compleja), se evaluará su incorporación.

⸻

Objetivo final

El sitio debe transmitir la imagen de una empresa de infraestructura moderna, sólida y confiable.

Las animaciones deben complementar el contenido y mejorar la experiencia del usuario, manteniendo un rendimiento alto y una interfaz limpia y profesional.
