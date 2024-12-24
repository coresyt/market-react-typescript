import { useContext } from 'react'
import CartItemContext from '../context/CartItemContext'

const useCartItem = () => {
  const context = useContext(CartItemContext)
  if (!context) {
    throw new Error('useCartItem must be used within a CartItemProvider')
  }

  return context
}

export default useCartItem
