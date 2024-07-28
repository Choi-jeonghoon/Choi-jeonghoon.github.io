import { IGatsbyImageData } from 'gatsby-plugin-image'

export type TPostHeadProps = {
  title: string
  category: string[]
  date: string
  thumbnail: IGatsbyImageData
}
