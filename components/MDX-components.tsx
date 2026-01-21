interface MdxProps {
  html: string
  slug: string
  page: boolean
}

export function Mdx({ html, slug, page = false }: MdxProps) {
  if (!html) {
    return <div>Error: No content available</div>
  }

  return (
    <div 
      className="mdx"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
