export type CategoryProps = {
  categories: Record<string, number>
  selectedCategory: string
  handleSelect: (category: string) => void
}
