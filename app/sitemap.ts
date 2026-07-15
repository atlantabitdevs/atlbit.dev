import type { MetadataRoute } from 'next'

import { getAllAgentDocs } from '@/lib/agent-content'
import { getSiteUrl } from '@/lib/site-metadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()

  const staticRoutes: MetadataRoute.Sitemap = ['', '/events', '/posts'].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      changeFrequency: 'weekly',
    }),
  )

  const docRoutes: MetadataRoute.Sitemap = getAllAgentDocs().map((doc) => ({
    url: `${siteUrl}${doc.webPath}`,
    lastModified: doc.date ? new Date(doc.date) : undefined,
  }))

  return [...staticRoutes, ...docRoutes]
}
