/** @type {import('next').NextConfig} */
const markdownAlternate = (segment) => ({
  source: `/${segment}/:slug`,
  headers: [
    {
      // Advertise the plain-markdown mirror of this page (RFC 8288).
      key: 'Link',
      value: `</${segment}/:slug.md>; rel="alternate"; type="text/markdown"`,
    },
    // Responses vary on Accept because agents can request markdown directly.
    { key: 'Vary', value: 'Accept' },
  ],
})

const nextConfig = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            // Point agents at the machine-readable site index and sitemap.
            key: 'Link',
            value:
              '</llms.txt>; rel="alternate"; type="text/plain"; title="llms.txt", </sitemap.xml>; rel="sitemap"; type="application/xml"',
          },
        ],
      },
      markdownAlternate('events'),
      markdownAlternate('posts'),
      markdownAlternate('page'),
    ]
  },
}

module.exports = nextConfig
