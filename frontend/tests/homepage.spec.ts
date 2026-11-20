import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('renders heading and CTA', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(
      page.getByRole('link', { name: /cotiza tu proyecto/i }).first(),
    ).toBeVisible();
  });

  test('has production canonical and concise title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Ingeniería y construcción en México | GIISA');
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://grupogii.com/',
    );
  });

  test('has concise description and absolute social image', async ({ page }) => {
    await page.goto('/');
    const meta = page.locator('meta[name="description"]');
    await expect(meta).toHaveAttribute('content', /^.{100,160}$/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      /^https:\/\/grupogii\.com\//,
    );
  });

  test('does not index the form confirmation page', async ({ page }) => {
    await page.goto('/contact/success');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, nofollow',
    );
  });

  test('contact form requires privacy notice consent', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('input[name="privacyConsent"]')).toHaveAttribute(
      'required',
      '',
    );
    await expect(
      page.getByRole('link', { name: 'Aviso de privacidad' }).first(),
    ).toHaveAttribute('href', '/privacy');
  });

  test('services page includes digital solutions without client brand names', async ({ page }) => {
    await page.goto('/services');
    await expect(
      page.getByRole('heading', { name: 'Soluciones Digitales' }),
    ).toBeVisible();
    await expect(page.getByText(/CRM y CMS a medida/i)).toBeVisible();
    await expect(page.getByText(/Isuzu|Totalplay|Proytel|Frago/i)).toHaveCount(0);
  });

  test('electrical services are featured and lead to their detail page', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('heading', { name: 'Servicios Eléctricos' }),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Ver servicios eléctricos' }).first(),
    ).toHaveAttribute('href', '/servicios-electricos');
  });

  test('footer links directly to the electrical services page', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.getByRole('contentinfo').getByRole('link', {
        name: 'Servicios eléctricos',
      }),
    ).toHaveAttribute('href', '/servicios-electricos');
  });

  test('contact form can classify an electrical project', async ({ page }) => {
    await page.goto('/contact');
    await expect(
      page.locator('select[name="projectType"] option[value="Servicios Eléctricos"]'),
    ).toHaveCount(1);
  });

  test('project cards do not link to unfinished detail pages', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#proyectos a[href^="/projects/"]')).toHaveCount(0);
  });
});
