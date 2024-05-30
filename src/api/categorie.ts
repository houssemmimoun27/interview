import categories from '@/data/categories.json'
import type { CategoryType } from '@/lib/definition'

export const fetchCategories = async (): Promise<CategoryType[]> => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => resolve(categories), 1000)
    } catch (err) {
      console.error(err)
      reject(err)
    }
  })
}
