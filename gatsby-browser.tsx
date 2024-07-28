import { GatsbyBrowser } from 'gatsby'
import Layout from './src/components/common/Layout'
import React from 'react'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}
