import { strapiFetch } from "../strapi";

export async function getHome() {
  const response = await strapiFetch<any>("/home?populate[Hero][populate]=backgroundImage&populate=CTA&populate=Seo");
  return response.data;
}