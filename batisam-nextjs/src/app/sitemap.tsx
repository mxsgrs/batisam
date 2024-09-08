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
      url: 'https://batisam-construction.fr/legal',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: .8
    },
    {
      url: 'https://batisam-construction.fr/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: .8
    },
  ]
}