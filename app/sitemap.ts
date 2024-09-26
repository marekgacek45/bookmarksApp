import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bookmarks.marekgacekdev.pl',
      lastModified: new Date(),
      priority: 1,
    },
   
  ]
}