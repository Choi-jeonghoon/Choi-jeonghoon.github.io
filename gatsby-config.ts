import type { GatsbyConfig } from 'gatsby'

/*
 ERROR #11331  API.NODE.VALIDATION

Invalid plugin options for "gatsby-source-contentful":

- "accessToken" is required
- "spaceId" is required

위와같이 에러가 발생하면 아래 코드를 활용하여 환경변수를 로드 시켜준다.
*/
require('dotenv').config() //환경변수 로드 시켜주기

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Dev_AppleBlog`,
    description: `개발지식을 공유하는 공간`,
    siteUrl: `https://jeong-hoon.github.io`,
  },

  graphqlTypegen: true,
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
}

export default config
