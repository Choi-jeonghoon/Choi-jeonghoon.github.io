import React from 'react'
import { PageProps, graphql } from 'gatsby'
import Layout from '../components/common/Layout'

export default function Index({
  data: {
    allContentfulPost: { nodes },
  },
}: PageProps<Queries.IndexPageQuery>) {
  return (
    <Layout>
      {nodes.map(({ title, slug, date }) => (
        <div key={slug}>
          {title} / {date} / {slug}
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query IndexPage {
    allContentfulPost(sort: { date: DESC }) {
      nodes {
        title
        slug
        date
      }
    }
  }
`
