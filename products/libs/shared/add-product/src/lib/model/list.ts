export interface Product {
  currency?: string
  delivery_cost?: number
  description: string
  images?: string
  price?: number
  price_offer?: number
  sku?: string
  stock?: number
  title?: string
  uuid?: string
  data?: {
    uuid: string
  }
}