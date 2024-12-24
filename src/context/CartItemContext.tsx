import { createContext } from 'react'

export type CartContext = {
  cartItems: Product[]
  addCartItem: (newCartItem: Product) => void
  deleteCartItem: (cartItemId: string) => void
}

export const CartItemContext = createContext<CartContext>({
  cartItems: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
})
