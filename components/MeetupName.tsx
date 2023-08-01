import { metaupdata } from '@/metaupdata'

const {
  city: { name, position },
} = metaupdata

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
