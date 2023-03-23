export type Card = {
  id: string
  imageUrl: string
  badge?: {
    text: string
    type?: 'success' | 'danger' | 'warning'
  }
  count: number
  type: string
  price: number
}
