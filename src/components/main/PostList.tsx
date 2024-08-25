import React from 'react'
import styled from 'styled-components'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import PostItem from './PostItem'
import { TPostListProps } from '../../types/PostListType'
import { useScroll } from '../../hooks/useScroll'

export default function PostList({ posts }: TPostListProps) {
  const itemsPerPage = 10

  // useScroll 훅을 사용하여 스크롤과 데이터 로드를 처리
  //  posts =>  readonly 배열을 mutable로 변환
  const { displayItems, loading } = useScroll(
    posts as Array<(typeof posts)[number]>,
    itemsPerPage,
  )

  return (
    <Wrapper>
      {displayItems.map(
        ({ title, date, category, thumbnail, description, slug }) => (
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
      {loading && <LoadingIndicator>Loading...</LoadingIndicator>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`

const LoadingIndicator = styled.div`
  grid-column: span 2;
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #333;
`
