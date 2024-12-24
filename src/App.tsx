import { useEffect, useState } from 'react'
import useCartItem from './hooks/useCartItem'
import useFetchProducts from './hooks/useFetchProducts'
import Header from './components/Header'
import ProductItem from './components/ProductItem'

export default function App() {
  const [products, setProducts] = useState<Product[][]>([])
  const [productsAcutually, setProductsAcutually] = useState<Product[]>([])
  const [page, setPage] = useState(0)
  const [isCartActive, setIsCartActive] = useState(false)
  const rootsProducts = useFetchProducts()
  const { cartItems } = useCartItem()

  const handleCartStatus = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault()
    setIsCartActive(isCartActive ? false : true)
  }

  useEffect(() => {
    rootsProducts.then((products) => setProducts(products))
  }, [])

  useEffect(() => {
    setProductsAcutually(products[1])
  }, [products])

  useEffect(() => {
    setProductsAcutually(products[page])
  }, [page, products])

  return (
    <>
      <Header handleCartStatus={handleCartStatus} />

      <main
        className="mt-36 grid h-max max-w-full gap-4 overflow-hidden px-4 sm:mx-[40px] sm:mt-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={isCartActive === true ? { display: 'none' } : {}}
      >
        {productsAcutually
          ? productsAcutually.map((product, i) => (
              <ProductItem {...{ product, i }} key={product.productId} />
            ))
          : ''}
      </main>

      <aside
        className="mt-36 h-max max-w-full sm:mx-[40px] sm:mt-32"
        style={isCartActive === false ? { display: 'none' } : {}}
      >
        <h2 className="text-2xl font-bold">Cart</h2>
        <div className="grid size-full gap-4 overflow-hidden px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cartItems.length > 0 &&
            cartItems.map((product, i) => (
              <ProductItem {...{ product, i }} key={product.productId} />
            ))}
        </div>
        {cartItems.length === 0 && (
          <p className="text-xl font-medium text-zinc-400">
            Not found items in the cart!!!
          </p>
        )}
      </aside>

      <footer className="flex h-20 w-full items-center justify-center gap-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          className="rounded-lg bg-zinc-400 p-2 text-zinc-800"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === products.length - 1}
          className="rounded-lg bg-zinc-400 p-2 text-zinc-800 disabled:opacity-50"
        >
          Next
        </button>
      </footer>
    </>
  )
}
