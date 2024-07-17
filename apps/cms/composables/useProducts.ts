import type { Product } from '../types/entities'

export default function useProducts() {
  const { find, findOne } = useStrapi<Product>()

  return {
    findPreview() { return useAsyncData(() => find('products', { populate: 'poster' })) },
    find() {
      return useAsyncData(() => find('products', { 
        populate: {
          poster: true,
          categories: true
        }
      }))
    },
    findOne(slug: string) {
      return useAsyncData(() =>
        findOne('products', undefined, { populate: 'poster,gallery', filters: { slug } })
          .then(({ data }) => data[0])
      )
    },
  }
}
