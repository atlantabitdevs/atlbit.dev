import { cn } from '@/lib/utils'

interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: 'default' | 'warning' | 'danger'
}

export function Callout({
  children,
  icon,
  type = 'default',
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        'my-6 flex items-start gap-4 rounded-lg border bg-surface-2 p-4',
        {
          'border-line': type === 'default',
          'border-brand': type === 'warning',
          'border-[oklch(0.6_0.2_25)]': type === 'danger',
        },
      )}
      {...props}
    >
      {icon && <span className="text-2xl leading-none">{icon}</span>}
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">{children}</div>
    </div>
  )
}
