export default async function useFetchProducts(): Promise<
  [Product[][], Product[]]
> {
  const productsOriginals = (async () => {
    const response = await fetch('/mock.json')
    const data = (await response.json()) as MockRoot
    return data.products
  })()

  const rootsProducts: Product[][] = []
  let productsArray: Product[] = []
  for (let i = 0; i < (await productsOriginals).length - 1; i++) {
    const product = (await productsOriginals)[i]
    productsArray.push(product)

    if ((i + 1) % 5 === 0 && i !== 0) {
      rootsProducts.push(productsArray)
      productsArray = []
    }
  }

  return [rootsProducts, await productsOriginals]
}
