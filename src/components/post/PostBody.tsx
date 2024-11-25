import React, { useEffect } from 'react'
import styled from 'styled-components'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import useRenderRichText from '../../hooks/useRenderRichText'
import Comment from './Comment'
import TableOfContents from './TableOfContents'
import { ContentProps } from '../../types/Content'

export default function PostBody({ content }: ContentProps) {
  const richText = useRenderRichText(content)

  useEffect(Prism.highlightAll, [])

  return (
    <Wrapper>
      <Content>
        <div id="content">{richText}</div>
        <Comment />
      </Content>
      <TableOfContents content={content} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 220px;
  grid-gap: 30px;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-top: 60px;
  }
`

const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
  font-size: 16px;
  line-height: 2;
  word-break: break-word;

  @media (max-width: 768px) {
    gap: 50px;
    font-size: 14px;
    line-height: 1.8;
  }
`
