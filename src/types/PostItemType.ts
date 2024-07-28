import { IGatsbyImageData } from 'gatsby-plugin-image'

export type TPostItemProps = {
  title: string
  date: string
  category: string[]
  thumbnail: IGatsbyImageData
  description: string
  slug: string
}
