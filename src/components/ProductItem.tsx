import { useEffect, useState } from 'react'
import useCartItem from '../hooks/useCartItem'
import className from '../lib/classJSX'
import Exclusive from './icons/Exclusive'
import Stars from './icons/Stars'
import Close from './icons/Close'
import Cart from './icons/Cart'

export default function ProductItem({
  product,
  i,
  isCart,
}: {
  product: Product
  i: number
  isCart?: boolean
}) {
  const [itemFound, setItemFound] = useState(false)
  const { cartItems, addCartItem, deleteCartItem } = useCartItem()

  let subtitle: string
  const { isSephoraExclusive, isNew, listPrice, ...currentSku } =
    product.currentSku
  let subtitleArray: string[] = []
  if (isSephoraExclusive === true)
    subtitleArray = [...subtitleArray, 'Sephora Exclusive']
  if (isNew === true) subtitleArray = [...subtitleArray, 'New']
  if (subtitleArray.length <= 0) subtitle = ''
  else subtitle = `${subtitleArray.join('/')} - `
  const rating = Math.floor(Number(product.rating))

  const handleAddCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()

    addCartItem(product)
  }

  const handleRemoveCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()

    deleteCartItem(product.productId)
  }

  useEffect(() => {
    const index = cartItems.findIndex(
      ({ productId }) => productId === product.productId
    )
    setItemFound(index !== -1 ? false : true)
  }, [cartItems])

  return (
    <div
      className="flex size-full min-h-[400px] flex-col items-center justify-between overflow-hidden rounded-xl bg-zinc-800 p-5"
      id={`${product.productId}-${i}-${Math.random()}`}
    >
      <div className="flex w-full flex-col items-center gap-2 overflow-hidden">
        <h2
          className={className(
            'text-lg font-bold text-zinc-400 [&>span>span]:text-zinc-700'
          )}
        >
          {product.displayName}{' '}
          <span style={isCart === true ? { display: 'none' } : {}}>
            - <span>{product.brandName}</span>
          </span>
        </h2>
        <h3
          className="text-lg font-bold text-zinc-400 [&>span]:text-zinc-600"
          style={isCart === true ? { display: 'none' } : {}}
        >
          {subtitle} <span>{listPrice.replace(' - ', '/')} USD</span>
        </h3>
        <div className="flex gap-1">
          {Array(rating)
            .fill(0)
            .map(() => (
              <Stars className="size-5 text-yellow-400" />
            ))}
        </div>
        <div className="mb-5 flex">
          <button
            className="flex size-10 items-center justify-center rounded-xl bg-zinc-700"
            onClick={(e) => {
              if (itemFound) return handleAddCart(e)
              else return handleRemoveCart(e)
            }}
          >
            {itemFound !== true && <Close className="size-5 text-zinc-400" />}
            {itemFound !== false && <Cart className="size-5 text-zinc-200" />}
          </button>
          {currentSku.isLimitedEdition === true ? (
            <Exclusive className="size-10 text-yellow-400" />
          ) : (
            ''
          )}
        </div>
      </div>
      <img
        src={product.heroImage}
        alt={currentSku.imageAltText}
        className="aspect-[6_/_4] max-w-40 rounded-2xl object-contain"
        style={{
          maskImage: 'radial-gradient(black 80%, transparent)',
        }}
      />
    </div>
  )
}
