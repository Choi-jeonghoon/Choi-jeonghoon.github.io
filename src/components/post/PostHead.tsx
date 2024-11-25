import React, { memo } from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { TPostHeadProps } from '../../types/PostHeadType'

const PostHead = ({
  thumbnail,
  title,
  category,
  description,
  date,
}: TPostHeadProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Information>
        <Category>
          {category.map(item => (
            <CategoryItem key={item}>{`#${item}`}</CategoryItem>
          ))}
        </Category>
        <Date>{date}</Date>
      </Information>

      <Thumbnail image={thumbnail} alt={title} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  aspect-ratio: 16 / 9;
  padding: 50px;
  border-radius: 20px;

  @media (max-width: 1024px) {
    padding: 30px;
    gap: 15px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    gap: 10px;
    border-radius: 10px;
  }
`

const Title = styled.div`
  display: -webkit-box;
  max-height: 2.4em;
  overflow: hidden;
  font-size: 30px;
  font-weight: 700;
  z-index: 2;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2em;
  color: white;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

const Description = styled.div`
  display: -webkit-box;
  max-height: 2.4em;
  overflow: hidden;
  font-size: 16px;
  font-weight: 700;
  z-index: 2;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2em;
  color: white;

  @media (max-width: 1024px) {
    font-size: 10.5px;
  }

  @media (max-width: 768px) {
    font-size: 6.5px;
  }
`

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 2;
  padding-bottom: 15px;
  border-bottom: 1px solid white;
  font-size: 15px;
  font-weight: 300;
  color: white;

  @media (max-width: 1024px) {
    padding-bottom: 10px;
    font-size: 13px;
  }

  @media (max-width: 768px) {
    padding-bottom: 8px;
    font-size: 11px;
  }
`

const Category = styled.div`
  display: flex;
  gap: 7px;
`

const CategoryItem = styled.div``

const Date = styled.div``

const Thumbnail = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.9) 130%
    );
  }
`

// React.memo를 사용해 불필요한 렌더링을 방지
export default memo(PostHead)
