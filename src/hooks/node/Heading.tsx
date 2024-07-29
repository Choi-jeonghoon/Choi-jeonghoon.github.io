import { createElement, HTMLAttributes } from 'react'
import { BLOCKS } from '@contentful/rich-text-types'
import styled from 'styled-components'

type HeadingProps = {
  type: BLOCKS.HEADING_1 | BLOCKS.HEADING_2 | BLOCKS.HEADING_3
} & HTMLAttributes<HTMLHeadingElement>

const Components = {
  [BLOCKS.HEADING_1]: styled.h1`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 40px;

    * + & {
      margin-top: 100px;
    }

    hr + & {
      margin-top: 0;
    }
  `,
  [BLOCKS.HEADING_2]: styled.h2`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 35px;

    * + & {
      margin-top: 90px;
    }

    hr + & {
      margin-top: 0;
    }
  `,
  [BLOCKS.HEADING_3]: styled.h3`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 30px;

    * + & {
      margin-top: 80px;
    }

    hr + & {
      margin-top: 0;
    }
  `,
}

export default function Heading({ type, children, ...props }: HeadingProps) {
  return createElement(Components[type], props, children)
}

/*
// renderMark에서 사용 가능한 속성 (굵기, 기울임, 밑줄, 첨자 등과 같은 텍스트 관련 속성)
declare enum MARKS {
    BOLD = "bold",
    ITALIC = "italic",
    UNDERLINE = "underline",
    CODE = "code",
    SUPERSCRIPT = "superscript",
    SUBSCRIPT = "subscript"
}

// renderNode에서 사용 가능한 속성 (헤더, 리스트, 테이블 등과 블럭 태그 요소)
declare enum BLOCKS {
    DOCUMENT = "document",
    PARAGRAPH = "paragraph",
    HEADING_1 = "heading-1",
    HEADING_2 = "heading-2",
    HEADING_3 = "heading-3",
    HEADING_4 = "heading-4",
    HEADING_5 = "heading-5",
    HEADING_6 = "heading-6",
    OL_LIST = "ordered-list",
    UL_LIST = "unordered-list",
    LIST_ITEM = "list-item",
    HR = "hr",
    QUOTE = "blockquote",
    EMBEDDED_ENTRY = "embedded-entry-block",
    EMBEDDED_ASSET = "embedded-asset-block",
    EMBEDDED_RESOURCE = "embedded-resource-block",
    TABLE = "table",
    TABLE_ROW = "table-row",
    TABLE_CELL = "table-cell",
    TABLE_HEADER_CELL = "table-header-cell"
}

// renderNode에서 사용 가능한 속성 (링크 등과 같은 인라인 태그 요소)
declare enum INLINES {
    HYPERLINK = "hyperlink",
    ENTRY_HYPERLINK = "entry-hyperlink",
    ASSET_HYPERLINK = "asset-hyperlink",
    RESOURCE_HYPERLINK = "resource-hyperlink",
    EMBEDDED_ENTRY = "embedded-entry-inline",
    EMBEDDED_RESOURCE = "embedded-resource-inline"
}
    

*/
