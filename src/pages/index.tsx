import React, { useState } from 'react'
import { PageProps, graphql } from 'gatsby'
import Intro from '../components/main/Intro'
import Category from '../components/main/Catagory'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import PostItem from '../components/main/PostItem'

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

      <div
        style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 40 }}
      >
        {posts.map(
          ({ title, category, slug, date, thumbnail, description }) => (
            <PostItem
              title={title as string}
              date={date as string}
              category={category as string[]}
              thumbnail={thumbnail?.gatsbyImageData as IGatsbyImageData}
              description={description?.description as string}
              slug={slug as string}
              key={slug}
            />
          ),
        )}
      </div>
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
        thumbnail {
          gatsbyImageData(width: 500)
        }
        description {
          description
        }
      }
    }
  }
`
