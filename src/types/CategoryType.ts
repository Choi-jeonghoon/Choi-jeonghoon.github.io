export type TCategoryProps = {
  categories: Record<string, number>
  selectedCategory: string
  handleSelect: (category: string) => void
}
