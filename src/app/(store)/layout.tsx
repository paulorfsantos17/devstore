import React from 'react'
interface StoreLayoutProps {
  children: React.ReactNode
}

export default function StoreLayout({ children }: StoreLayoutProps) {
  return <div>{children}</div>
}
