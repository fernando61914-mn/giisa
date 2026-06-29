const BASE_URL = import.meta.env.PUBLIC_STRAPI_URL;

export async function strapiFetch<T>(path: string) {
  const response = await fetch(`${BASE_URL}/api${path}`);

  if (!response.ok) {
    throw new Error(`Strapi error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}