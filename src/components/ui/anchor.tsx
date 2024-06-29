import type { AnchorHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const A = ({ className = '', ...props }: Props) => {
  return (
    <a
      {...props}
      className={cn('text-primary/80 hover:text-primary', className)}
    />
  )
}

export const AnchorBlock = ({ className = '', ...props }: Props) => {
  return (
    <a
      {...props}
      className={cn(
        'm-1 block rounded bg-secondary py-2 text-center text-xl text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground',
        className,
      )}
    />
  )
}
