import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid'
import PostItem from './PostItem'
import { TPostListProps } from '../../types/PostListType'

function getInitialPosts(posts: TPostListProps['posts']) {
  return posts.slice(0, 10).map(post => ({ groupKey: 0, post }))
}

export default function PostList({ posts }: TPostListProps) {
  const [items, setItems] = useState(
    posts.slice(0, 10).map(post => ({ post, groupKey: 0 })),
  )
  const handleLoadPosts = (nextGroupKey: number) => {
    console.log('123123')
    const nextPosts = posts
      .slice(nextGroupKey * 10, (nextGroupKey + 1) * 10)
      .map(post => ({ groupKey: nextGroupKey, post }))

    setItems(prev => [...prev, ...nextPosts])
  }
  useEffect(() => setItems(getInitialPosts(posts)), [posts])

  return (
    <>
      <Wrapper
        gap={20}
        onRequestAppend={({ groupKey }: { groupKey: number }) => {
          const nextGroupKey = parseInt(groupKey?.toString() ?? '0') + 1
          if (posts.length <= nextGroupKey * 10) return
          handleLoadPosts(nextGroupKey)
        }}
      >
        {items.map(
          ({
            post: { title, date, category, thumbnail, description, slug },
            groupKey,
          }) => (
            <PostItem
              title={title as string}
              date={date as string}
              category={category as string[]}
              thumbnail={thumbnail?.gatsbyImageData as IGatsbyImageData}
              description={description?.description as string}
              slug={slug as string}
              key={slug}
              data-grid-groupkey={groupKey}
            />
          ),
        )}
        {items.length < 3 ? <div /> : null}
      </Wrapper>
    </>
  )
}

const Wrapper = styled(MasonryInfiniteGrid)`
  margin-top: 40px;
`
