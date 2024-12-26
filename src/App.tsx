import { useEffect, useState } from 'react'
import useCartItem from './hooks/useCartItem'
import useFetchProducts from './hooks/useFetchProducts'
import Header from './components/Header'
import ListProducts from './components/ListProducts'

export default function App() {
  const [productsActually, setProductsAcutually] = useState<
    Categoric<Product[]>
  >({
    makeup: [],
  })
  const [, setProductsOriginals] = useState<Product[]>([])
  const [products, setProducts] = useState<Categoric<Product[][]>>({
    makeup: [],
  })
  const [isCartActive, setIsCartActive] = useState(false)
  const [page, setPage] = useState<Categoric<number>>({
    makeup: 0,
  })
  const [search, setSearch] = useState('')
  const rootsProducts = useFetchProducts()
  const { cartItems } = useCartItem()

  const handleCartStatus = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault()
    setIsCartActive(isCartActive ? false : true)
  }

  const handleSearch: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    rootsProducts.then((productsFetchings) => {
      setProducts({ makeup: productsFetchings[0] })
      setProductsOriginals(productsFetchings[1])
    })
  }, [])

  useEffect(() => {
    setProductsAcutually({
      makeup: products.makeup[0],
    })
  }, [products])

  useEffect(() => {
    setProductsAcutually({
      makeup: products.makeup[page.makeup],
    })
  }, [page, products])

  return (
    <>
      <Header
        {...{
          handleCartStatus,
          handleSearch,
          searchState: { search, setSearch },
        }}
      />

      <main className="mt-36 h-max max-w-full sm:mx-[40px] sm:mt-32">
        <ListProducts
          isCart
          title="Cart"
          isCartActive={isCartActive}
          products={cartItems}
        />
        <ListProducts
          title="Make-Up"
          isCartActive={isCartActive}
          products={productsActually.makeup}
          pageState={{
            page: page.makeup,
            setPage: (v) => setPage({ makeup: v }),
          }}
        />
      </main>
    </>
  )
}
