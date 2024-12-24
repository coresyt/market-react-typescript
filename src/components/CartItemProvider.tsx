import { useState } from 'react'
import { CartItemContext, type CartContext } from '../context/CartItemContext'

export default function CartItemProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [cartItems, setCart] = useState<Product[]>([])

  const valueContext: CartContext = {
    cartItems,
    addCartItem(newCartItem) {
      const itemFound = cartItems.find(
        ({ productId }) => productId === newCartItem.productId
      )

      if (typeof itemFound === 'object') return
      setCart([...cartItems, newCartItem])
    },

    deleteCartItem(cartItemId) {
      const itemFound = cartItems.find(
        ({ productId }) => productId === cartItemId
      )

      if (typeof itemFound === 'object') return
      setCart(cartItems.filter(({ productId }) => productId !== cartItemId))
    },
  }

  return (
    <CartItemContext.Provider value={valueContext}>
      {children}
    </CartItemContext.Provider>
  )
}
