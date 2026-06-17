import StatusMessage from '@/components/StatusMessage'

export default function NotFound() {
  return (
    <StatusMessage
      code="404"
      title="That page slipped off the chain."
      body="We couldn't find what you were looking for. It may have moved, or the link might be off by a character."
    />
  )
}
