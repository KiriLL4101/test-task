/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

declare type Card = {
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
