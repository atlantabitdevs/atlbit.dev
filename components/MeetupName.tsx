import { meetup } from '@/meetup'

const {
  city: { name, position },
} = meetup

export default function MeetupName() {
  return (
    <div className="flex flex-col space-y-1">
      {position === 'right' ? (
        <span>
          BitDevs <span className="meetup-name">{name}</span>
        </span>
      ) : (
        <span>
          <span className="meetup-name">{name}</span> BitDevs
        </span>
      )}
    </div>
  )
}
