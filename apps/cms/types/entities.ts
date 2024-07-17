import type { Strapi4ResponseMany, Strapi4ResponseSingle } from '@nuxtjs/strapi'
import type { Image, RichTextInput } from './cms'

export type Product = {
  slug: string
  title: string
  description: RichTextInput
  tags: string
  price: 100
  discount: 10
  createdAt: string
  updatedAt: string
  publishedAt: string
  level: string
  locale: string
  poster: Strapi4ResponseSingle<Image>
  gallert: Strapi4ResponseMany<Image>
}