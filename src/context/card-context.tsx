'use client'

import { createContext, type ReactNode, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number) => void
}

export const CardContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cardItems, setCardItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCardItems((state) => {
      const productInCart = state.some((item) => item.productId === productId)

      if (productInCart) {
        return state.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      } else {
        return [...state, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CardContext.Provider
      value={{
        items: cardItems,
        addToCart,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}
