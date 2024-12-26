import { useEffect, useState } from 'react'
import { CartItemContext, type CartContext } from '../context/CartItemContext'

export default function CartItemProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [cartItems, setCart] = useState<Product[]>([])

  useEffect(() => {
    const cartItemsLocalStorage = localStorage.getItem('cartItems')

    setCart([...cartItems, ...JSON.parse(cartItemsLocalStorage ?? '[]')])
  }, [])

  const valueContext: CartContext = {
    cartItems,
    addCartItem(newCartItem) {
      const itemFound = cartItems.find(
        ({ productId }) => productId === newCartItem.productId
      )

      if (typeof itemFound === 'object') return
      const newCartItems = [...cartItems, newCartItem]
      setCart(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    },

    deleteCartItem(cartItemId) {
      const newCartItems = cartItems.filter(
        ({ productId }) => productId !== cartItemId
      )
      setCart(newCartItems)
      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
    },
  }

  return (
    <CartItemContext.Provider value={valueContext}>
      {children}
    </CartItemContext.Provider>
  )
}
