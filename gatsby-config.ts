import type { GatsbyConfig } from 'gatsby'

/*
 ERROR #11331  API.NODE.VALIDATION

Invalid plugin options for "gatsby-source-contentful":

- "accessToken" is required
- "spaceId" is required

위와같이 에러가 발생하면 아래 코드를 활용하여 환경변수를 로드 시켜준다.
*/
require('dotenv').config() //환경변수 로드 시켜주기

const SITE_URL = 'https://Choi-jeonghoon.github.io' //깃헙 계정명과 동일하게 작성

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Dev_AppleBlog`,
    description: `개발지식을 공유하는 공간`,
    siteUrl: SITE_URL,
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
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: SITE_URL,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true,
      },
    },
  ],
}

export default config
