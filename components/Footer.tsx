const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-neutral-200 py-8 font-sans text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
      <div className="container mx-auto flex max-w-5xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Atlanta BitDevs · #LearnBitcoinTogether</p>
        <a
          href="/llms.txt"
          className="opacity-50 underline-offset-4 transition hover:underline hover:opacity-100"
          title="Machine-readable site index for AI agents"
        >
          llms.txt
        </a>
      </div>
    </footer>
  )
}

export default Footer
