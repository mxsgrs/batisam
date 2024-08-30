import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://batisam-construction.fr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: 'https://batisam-construction.fr/mentions-legales',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: 'https://batisam-construction.fr/politique-de-confidentialite',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
  ]
}