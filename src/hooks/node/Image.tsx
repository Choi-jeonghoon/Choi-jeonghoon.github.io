import styled from 'styled-components'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

type ImageProps = {
  image: IGatsbyImageData
  alt: string
}

export default function Image({ image, alt }: ImageProps) {
  return <Component image={image} alt={alt} />
}

const Component = styled(GatsbyImage)`
  width: 100%;
  margin: 30px 0;

  & + & {
    margin: -20px 0 30px 0;
  }
`
