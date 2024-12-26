interface MockRoot {
  products: Product[]
}

interface Product {
  brandName: string
  currentSku: CurrentSku
  displayName: string
  heroImage: string
  altImage: string
  moreColors?: number
  onSaleData: string
  productId: string
  rating: string
  reviews: string
  pickupEligible: boolean
  sameDayEligible: boolean
  shipToHomeEligible: boolean
  targetUrl: string
  sponsored: boolean
}

interface CurrentSku {
  biExclusiveLevel: string
  imageAltText: string
  isAppExclusive: boolean
  isBI: boolean
  isBest: boolean
  isFirstAccess: boolean
  isLimitedEdition: boolean
  isLimitedTimeOffer: boolean
  isNatural: boolean
  isNew?: boolean
  isOnlineOnly: boolean
  isOrganic: boolean
  isSephoraExclusive: boolean
  listPrice: string
  skuId: string
  skuType: string
  salePrice?: string
}

type Categories = 'makeup'
type Categoric<T> = Record<Categories, T>
