import React from 'react'
import styled from 'styled-components'
import { CategoryProps } from '../../types/CategoryType'

export default function Category({
  categories,
  selectedCategory,
  handleSelect,
}: CategoryProps) {
  return (
    <Wrapper>
      {Object.entries(categories).map(([category, count]) => (
        <Item
          onClick={() => handleSelect(category)}
          $selected={category === selectedCategory}
          key={category}
        >
          #{category}({count})
        </Item>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 20px;
  margin-top: 80px;
`

const Item = styled.div<{ $selected: boolean }>`
  font-size: 16px;
  font-weight: ${({ $selected }) => ($selected ? 600 : 300)};
  cursor: ${({ $selected }) => ($selected ? 'default' : 'pointer')};
`
