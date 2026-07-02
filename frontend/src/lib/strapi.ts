const BASE_URL = import.meta.env.PUBLIC_STRAPI_URL;

export async function strapiFetch<T>(path: string): Promise<T> {
  const response = await fetch(`${BASE_URL}/api${path}`);

  if (!response.ok) {
    throw new Error(`Strapi error ${response.status}: ${path}`);
  }

  return response.json() as Promise<T>;
}

export function strapiImageUrl(url?: string): string {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${BASE_URL}${url}`;
}