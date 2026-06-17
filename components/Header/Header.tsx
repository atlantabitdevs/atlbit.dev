'use client'

import './Header.css'
import MeetupName from '../MeetupName'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { meetup } from '@/meetup'
import Link from 'next/link'
import { useEffect, useId, useState } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()
  const pathname = usePathname()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const isActive = (link: string) =>
    link.startsWith('/') &&
    (link === '/' ? pathname === '/' : pathname.startsWith(link))

  return (
    <header className="header sticky left-0 top-0 z-50 w-full border-b border-line bg-canvas px-4 py-4 font-sans">
      <div className="relative mx-auto flex max-w-5xl items-center justify-between gap-4">
        <h1 className="text-2xl font-black tracking-[-0.01em]">
          <Link href="/" className="text-ink no-underline">
            <MeetupName />
          </Link>
        </h1>

        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-ink transition hover:bg-surface-2 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>

        <nav
          id={menuId}
          aria-label="Primary"
          className={[
            'absolute left-0 right-0 top-full mt-3 rounded-xl border border-line bg-canvas p-4 shadow-lg md:static md:mt-0 md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none',
            isMenuOpen ? 'block' : 'hidden md:block',
          ].join(' ')}
        >
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1">
            <ul className="flex flex-col gap-1 font-medium md:flex-row md:items-center md:gap-1">
              {meetup.mainNav.map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.link}
                    aria-current={isActive(item.link) ? 'page' : undefined}
                    className={[
                      'block rounded-md px-3 py-1.5 no-underline transition-colors hover:bg-surface-2',
                      isActive(item.link)
                        ? 'text-ink'
                        : 'text-muted hover:text-ink',
                    ].join(' ')}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-1 border-t border-line pt-2 md:ml-2 md:mt-0 md:border-0 md:pt-0">
              <ThemeSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
