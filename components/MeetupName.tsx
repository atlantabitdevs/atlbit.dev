import { meetup } from '@/meetup'

const {
  city: { name, position },
} = meetup

export default function MeetupName() {
  return (
    <div className="flex flex-wrap items-baseline gap-x-1 gap-y-0 sm:block">
      {position === 'right' ? (
        <>
          <span className="whitespace-nowrap sm:inline">BitDevs</span>
          <span className="meetup-name whitespace-nowrap sm:inline">{name}</span>
        </>
      ) : (
        <>
          <span className="meetup-name whitespace-nowrap sm:inline">{name}</span>
          <span className="whitespace-nowrap sm:inline">BitDevs</span>
        </>
      )}
    </div>
  )
}
