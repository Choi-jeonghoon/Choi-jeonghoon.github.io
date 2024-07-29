import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import PostHead from '../components/post/PostHead'
import PostBody from '../components/post/PostBody'

export default function Post({
  data: { contentfulPost },
}: PageProps<Queries.PostPageQuery>) {
  return (
    <>
      <PostHead
        title={contentfulPost?.title as string}
        category={contentfulPost?.category as string[]}
        date={contentfulPost?.date as string}
        thumbnail={
          contentfulPost?.thumbnail?.gatsbyImageData as IGatsbyImageData
        }
      />
      <PostBody
        content={contentfulPost?.content as Queries.ContentfulPostContent}
      />
    </>
  )
}

export const query = graphql`
  query PostPage($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      thumbnail {
        gatsbyImageData(width: 1000)
      }
      category
      date
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 774)
            __typename
          }
        }
      }
    }
  }
`
/*
@Memo
  ... on => GraphQL의 인라인 프래그먼트 문법으로, 특정 타입에 해당하는 필드를 선택적으로 쿼리할 때 사용
  EX)
  Contentful의 `references` 필드 내에 여러 타입의 객체가 있을 수 있는데, 그 중에서 `ContentfulAsset` 타입에만 있는 필드를 쿼리하고 싶을 때 사용합니다.
  
  __typename => GraphQL에서 제공하는 메타 필드로, 해당 객체의 타입명을 의미. 이를 통해 쿼리 결과에서 객체의 타입을 확인

  */
