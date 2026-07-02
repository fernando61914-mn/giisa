import { animate, stagger } from 'motion';

/**
 * Animación de entrada del Hero.
 * Los elementos con [data-hero-item] aparecen en cascada al cargar la página.
 * Duraciones según el plan: 600–900 ms.
 */
export function initHeroAnimation(): void {
  const items = document.querySelectorAll<HTMLElement>('[data-hero-item]');
  if (!items.length) return;

  animate(
    Array.from(items),
    { opacity: [0, 1], y: ['1.5rem', '0rem'] },
    {
      duration: 0.75,
      delay: stagger(0.14),
      easing: [0.22, 0.61, 0.36, 1],
    },
  );
}
