import React, { useState } from 'react'
import { PageProps, graphql } from 'gatsby'
import Intro from '../components/main/Intro'
import Category from '../components/main/Catagory'

export default function Index({
  data: {
    allContentfulPost: { nodes },
  },
}: PageProps<Queries.IndexPageQuery>) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = nodes.reduce<Record<string, number>>(
    (categories, post) => {
      post.category
        ?.filter((category): category is string => !!category)
        .forEach(
          category => (categories[category] = (categories[category] ?? 0) + 1),
        )

      return categories
    },
    { All: nodes.length },
  )

  const posts = nodes.filter(
    ({ category }) =>
      selectedCategory === 'All' || category?.includes(selectedCategory),
  )

  const handleSelectCategory = (category: string) =>
    setSelectedCategory(category)

  return (
    <>
      <Intro />
      <Category
        categories={categories}
        selectedCategory={selectedCategory}
        handleSelect={handleSelectCategory}
      />

      {posts.map(({ title, slug, date }) => (
        <div key={slug}>
          {title} / {date} / {slug}
        </div>
      ))}
    </>
  )
}

export const query = graphql`
  query IndexPage {
    allContentfulPost(sort: { date: DESC }) {
      nodes {
        title
        category
        slug
        date
      }
    }
  }
`
