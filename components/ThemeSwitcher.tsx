'use client'
import { SunIcon, MoonIcon } from '@bitcoin-design/bitcoin-icons-react/filled'

import { useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Reserve the slot before mount so the header doesn't shift on hydration.
  if (!mounted) {
    return <div className="h-10 w-10" aria-hidden="true" />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      className="flex h-10 w-10 items-center justify-center rounded-md text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-ink"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  )
}
