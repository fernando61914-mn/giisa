import { animate, inView, stagger } from 'motion';

const EASING = [0.22, 0.61, 0.36, 1] as const;

/**
 * Activa animaciones de aparición al entrar al viewport.
 *
 * Uso en componentes Astro:
 *   [data-reveal]          → el elemento completo aparece (fade + slide)
 *   [data-reveal-stagger]  → los hijos aparecen en cascada
 */
export function initReveal(): void {
  // Elemento individual
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    inView(
      el,
      () => {
        animate(
          el,
          { opacity: [0, 1], y: ['1.5rem', '0rem'] },
          { duration: 0.65, easing: EASING },
        );
      },
      { amount: 0.12 },
    );
  });

  // Hijos en cascada (cards, listas, estadísticas)
  document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((container) => {
    const children = Array.from(container.children) as HTMLElement[];
    if (!children.length) return;

    inView(
      container,
      () => {
        animate(
          children,
          { opacity: [0, 1], y: ['1.5rem', '0rem'] },
          { duration: 0.6, delay: stagger(0.1), easing: EASING },
        );
      },
      { amount: 0.05 },
    );
  });
}
