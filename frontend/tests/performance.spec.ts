import { test, expect } from '@playwright/test';

/**
 * Performance / Web Vitals tests using the Navigation Timing API
 * and PerformanceObserver (LCP, CLS, FID approximation).
 *
 * Thresholds align with Google "Good" Core Web Vitals targets:
 *   LCP  < 2500 ms
 *   CLS  < 0.1
 *   TTFB < 800 ms
 *   FCP  < 1800 ms
 */

const THRESHOLDS = {
  lcp: 2500,
  cls: 0.1,
  ttfb: 800,
  fcp: 1800,
  domInteractive: 3000,
};

test.describe('Performance / Speed Score', () => {
  test('TTFB and FCP are within budget', async ({ page }) => {
    await page.goto('/');

    const metrics = await page.evaluate(async () => {
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const fcp = await new Promise<number | null>((resolve) => {
        const existingEntry = performance.getEntriesByName('first-contentful-paint')[0];
        if (existingEntry) {
          resolve(existingEntry.startTime);
          return;
        }

        let timeoutId: number;
        const observer = new PerformanceObserver((list) => {
          const entry = list
            .getEntries()
            .find((item) => item.name === 'first-contentful-paint');
          if (entry) {
            window.clearTimeout(timeoutId);
            observer.disconnect();
            resolve(entry.startTime);
          }
        });

        observer.observe({ type: 'paint', buffered: true });
        timeoutId = window.setTimeout(() => {
          observer.disconnect();
          resolve(null);
        }, 3000);
      });

      return {
        ttfb: nav.responseStart - nav.requestStart,
        fcp,
        domInteractive: nav.domInteractive,
      };
    });

    console.log('TTFB:', metrics.ttfb.toFixed(0), 'ms');
    console.log('FCP:', metrics.fcp?.toFixed(0) ?? 'n/a', 'ms');
    console.log('DOM Interactive:', metrics.domInteractive.toFixed(0), 'ms');

    expect(metrics.ttfb).toBeLessThan(THRESHOLDS.ttfb);
    expect(metrics.fcp).not.toBeNull();
    if (metrics.fcp !== null) {
      expect(metrics.fcp).toBeLessThan(THRESHOLDS.fcp);
    }
    expect(metrics.domInteractive).toBeLessThan(THRESHOLDS.domInteractive);
  });

  test('LCP is within budget', async ({ page }) => {
    // Collect LCP via PerformanceObserver before navigation
    await page.goto('/');

    const lcp = await page.evaluate(
      () =>
        new Promise<number>((resolve) => {
          let value = 0;
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              value = entry.startTime;
            }
          });
          observer.observe({ type: 'largest-contentful-paint', buffered: true });
          // Give the browser a tick to flush buffered entries
          setTimeout(() => {
            observer.disconnect();
            resolve(value);
          }, 500);
        }),
    );

    console.log('LCP:', lcp.toFixed(0), 'ms');
    expect(lcp).toBeLessThan(THRESHOLDS.lcp);
  });

  test('CLS is within budget', async ({ page }) => {
    await page.goto('/');
    // Wait for layout to stabilise
    await page.waitForTimeout(1500);

    const cls = await page.evaluate(
      () =>
        new Promise<number>((resolve) => {
          let value = 0;
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              // LayoutShift entries have a `value` property
              value += (entry as PerformanceEntry & { value: number }).value;
            }
          });
          observer.observe({ type: 'layout-shift', buffered: true });
          setTimeout(() => {
            observer.disconnect();
            resolve(value);
          }, 200);
        }),
    );

    console.log('CLS:', cls.toFixed(4));
    expect(cls).toBeLessThan(THRESHOLDS.cls);
  });

  test('page has no render-blocking JavaScript', async ({ page }) => {
    await page.goto('/');

    const renderBlockingScripts = await page.evaluate(() => {
      const resources = performance.getEntriesByType(
        'resource',
      ) as PerformanceResourceTiming[];
      return resources.filter(
        (r) =>
          r.renderBlockingStatus === 'blocking' &&
          !r.name.includes('favicon') &&
          /\.m?js(?:$|[?#])/.test(new URL(r.name).pathname),
      ).map((resource) => resource.name);
    });

    console.log('Render-blocking JavaScript:', renderBlockingScripts);
    expect(renderBlockingScripts).toHaveLength(0);
  });

  test('total page weight is under 500 KB', async ({ page }) => {
    let totalBytes = 0;

    page.on('response', async (response) => {
      const headers = response.headers();
      const contentLength = headers['content-length'];
      if (contentLength) {
        totalBytes += parseInt(contentLength, 10);
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const totalKb = totalBytes / 1024;
    console.log('Total page weight:', totalKb.toFixed(1), 'KB');
    expect(totalKb).toBeLessThan(500);
  });
});
