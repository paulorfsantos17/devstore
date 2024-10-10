import { useContext } from 'react'

import { CardContext } from '@/context/card-context'

export function useCart() {
  const cartContext = useContext(CardContext)

  return cartContext
}
