import Lenis from 'lenis';

let lenis: Lenis | undefined;
let rafId: number | undefined;

export function initLenis(): void {
  // Limpiar instancia previa (transiciones de página)
  if (lenis) {
    lenis.destroy();
    if (rafId !== undefined) cancelAnimationFrame(rafId);
  }

  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time: number): void {
    lenis!.raf(time);
    rafId = requestAnimationFrame(raf);
  }
  rafId = requestAnimationFrame(raf);
}

export function destroyLenis(): void {
  if (rafId !== undefined) {
    cancelAnimationFrame(rafId);
    rafId = undefined;
  }
  lenis?.destroy();
  lenis = undefined;
}
