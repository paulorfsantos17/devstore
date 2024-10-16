import { Suspense } from 'react'

import Skeleton from '@/components/skeleton'

import CurrentSearch from './current-search'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <CurrentSearch />
      </Suspense>

      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[440px]" />
        <Skeleton className="h-[440px]" />
        <Skeleton className="h-[440px]" />
        <Skeleton className="h-[440px]" />
        <Skeleton className="h-[440px]" />
        <Skeleton className="h-[440px]" />
      </div>
    </div>
  )
}
