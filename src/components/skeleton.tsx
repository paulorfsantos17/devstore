import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Skeleton({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge('animate-pulse rounded-md bg-zinc-50/50', className)}
      {...props}
    ></div>
  )
}
