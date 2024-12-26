import ProductItem from './ProductItem'

export default function ListProducts({
  isCartActive,
  products,
  isCart,
  title,
  pageState,
}: {
  products: Product[]
  isCartActive: boolean
  isCart?: boolean
  title: string
  pageState?: {
    page: number
    setPage: (value: number) => void
  }
}) {
  const isVisible: React.CSSProperties | undefined = (() => {
    if (!isCart && isCartActive) return { display: 'none' }
    else if (!isCart && !isCartActive) return {}
    else if (isCart && isCartActive) return {}
    else if (isCart && !isCartActive) return { display: 'none' }
    else return {}
  })()

  return (
    <section style={isVisible}>
      <h2 className="text-center text-2xl font-bold">{title}</h2>
      <div className="grid size-full gap-4 overflow-hidden px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products
          ? isCartActive === false
            ? products.map((product, i) => (
                <ProductItem {...{ product, i }} key={product.productId} />
              ))
            : products.map((product, i) => (
                <ProductItem
                  {...{ product, i }}
                  key={product.productId}
                  isCart
                />
              ))
          : ''}
      </div>
      {isCart && !products ? (
        <p className="text-center text-xl font-medium text-zinc-400">
          Not found items in the cart!!!
        </p>
      ) : (
        ''
      )}
      {!isCart && products && (
        <footer
          className="flex h-20 w-full items-center justify-center gap-4"
          style={isCartActive === true ? { display: 'none' } : {}}
        >
          <button
            onClick={() => pageState?.setPage(pageState.page - 1)}
            disabled={pageState?.page === 0}
            className="rounded-lg bg-zinc-400 p-2 text-zinc-800 disabled:opacity-50"
          >
            {'<'} Previous
          </button>
          <button
            onClick={() => pageState?.setPage(pageState.page + 1)}
            disabled={pageState?.page === products.length - 1}
            className="rounded-lg bg-zinc-400 p-2 text-zinc-800 disabled:opacity-50"
          >
            Next {'>'}
          </button>
        </footer>
      )}
    </section>
  )
}
