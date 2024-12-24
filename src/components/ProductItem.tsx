import useCartItem from '../hooks/useCartItem'
import className from '../lib/classJSX'
import Cart from './icons/Cart'
import Close from './icons/Close'
import Stars from './icons/Stars'

export default function ProductItem({
  product,
  i,
}: {
  product: Product
  i: number
}) {
  const { cartItems, setCartItems } = useCartItem()

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
  const itemFound = cartItems.find(
    ({ productId }) => productId === product.productId
  )

  const handleAddCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()

    setCartItems(product)
  }

  return (
    <div
      className="flex size-full min-h-[400px] items-center justify-between overflow-hidden rounded-xl bg-zinc-800 p-5 max-sm:gap-3 sm:flex-col"
      id={`${product.productId}-${i}-${Math.random()}`}
    >
      <div className="flex w-full flex-col items-center gap-4 overflow-hidden">
        <h2
          className={className(
            'text-lg font-bold text-zinc-400 [&>span]:text-zinc-700'
          )}
        >
          {product.displayName} - <span>{product.brandName}</span>
        </h2>
        <h3 className="text-lg font-bold text-zinc-400 [&>span]:text-zinc-600">
          {subtitle} <span>{listPrice.replace(' - ', '/')} USD</span>
        </h3>
        <div className="flex gap-1">
          {Array(rating)
            .fill(0)
            .map(() => (
              <Stars className="size-5 text-yellow-400" />
            ))}
        </div>
        <button
          className="flex size-10 items-center justify-center rounded-xl bg-zinc-700"
          onClick={handleAddCart}
        >
          {itemFound && <Close className="size-5 text-zinc-400" />}
          {!itemFound && <Cart className="size-5 text-zinc-200" />}
        </button>
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
