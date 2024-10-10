'use client'

import { useCart } from '@/hooks/useCart'

interface AddToCartButtonProps {
  productId: number
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProductsToCart() {
    addToCart(productId)
  }
  return (
    <button
      type="button"
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleAddProductsToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}
