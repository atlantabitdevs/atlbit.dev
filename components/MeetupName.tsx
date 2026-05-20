import { meetup } from '@/meetup'

const {
  city: { name, position },
} = meetup

export default function MeetupName() {
  return (
    <div className="flex flex-col gap-1 sm:block">
      {position === 'right' ? (
        <>
          <span className="block whitespace-nowrap sm:inline">BitDevs</span>{' '}
          <span className="meetup-name block whitespace-nowrap sm:inline">
            {name}
          </span>
        </>
      ) : (
        <>
          <span className="meetup-name block whitespace-nowrap sm:inline">
            {name}
          </span>{' '}
          <span className="block whitespace-nowrap sm:inline">BitDevs</span>
        </>
      )}
    </div>
  )
}
