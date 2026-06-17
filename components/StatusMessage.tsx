import Link from 'next/link'

interface StatusMessageProps {
  code?: string
  title: string
  body: string
}

/**
 * Centered, on-voice block for 404 and content-error states.
 * Keeps the same warmth as the rest of the site instead of a bare string.
 */
export default function StatusMessage({ code, title, body }: StatusMessageProps) {
  return (
    <main className="container mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center gap-5 px-4 py-20">
      {code ? (
        <span className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
          {code}
        </span>
      ) : null}
      <h1 className="text-balance">{title}</h1>
      <p className="max-w-[52ch] text-lg text-muted">{body}</p>
      <Link
        href="/"
        className="font-sans font-semibold text-link no-underline transition-colors hover:text-link-hover"
      >
        Back to home
      </Link>
    </main>
  )
}
