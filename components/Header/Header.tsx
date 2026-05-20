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

  return (
    <header className="header sticky top-0 left-0 z-50 w-full bg-white px-4 py-6 font-sans drop-shadow-header dark:bg-neutral-900 dark:drop-shadow-header-dark">
      <div className="relative mx-auto flex max-w-5xl items-center justify-between gap-4">
        <h1 className="font-black text-2xl">
          <Link href="/" className="no-underline">
            <MeetupName />
          </Link>
        </h1>

        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-neutral-900 transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:text-white dark:hover:bg-neutral-800 dark:focus:ring-offset-neutral-900 md:hidden"
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
            'absolute left-0 right-0 top-full mt-3 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-700 dark:bg-neutral-900 md:static md:mt-0 md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none',
            isMenuOpen ? 'block' : 'hidden md:block',
          ].join(' ')}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <ul className="flex flex-col gap-3 font-semibold md:flex-row md:items-center md:gap-4">
              {meetup.mainNav.map((item) => (
                <li key={item.text}>
                  <Link
                    href={item.link}
                    className="block rounded-md px-2 py-1 no-underline transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:hover:bg-neutral-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-neutral-200 pt-3 dark:border-neutral-700 md:border-0 md:pt-0">
              <ThemeSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
