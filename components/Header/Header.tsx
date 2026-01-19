import './Header.css'
import MeetupName from '../MeetupName'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { meetup } from '@/meetup'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="header w-full p-6 flex flex-row justify-between font-sans sticky top-0 left-0 bg-white z-50 drop-shadow-header dark:drop-shadow-header-dark dark:bg-neutral-900">
      <h1 className="font-black text-2xl">
        <Link href="/" className="no-underline">
          <MeetupName />
        </Link>
      </h1>
      <nav>
        <ul className="flex flex-row gap-4 font-semibold items-center">
          {meetup.mainNav.map((item) => (
            <li key={item.text} className="">
              <Link href={item.link} className="no-underline">
                {item.text}
              </Link>
            </li>
          ))}
          <ThemeSwitcher />
        </ul>
      </nav>
    </header>
  )
}

export default Header
