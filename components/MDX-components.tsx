interface MdxProps {
  html: string
  slug: string
  page: boolean
  // Event topic lists run full-width for projection; opt out of the
  // reading measure so the agenda uses the room.
  wide?: boolean
}

export function Mdx({ html, slug, page = false, wide = false }: MdxProps) {
  if (!html) {
    return <div className="text-muted">Error: No content available</div>
  }

  return (
    <div
      className={`mdx${wide ? ' mdx--wide' : ''}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
