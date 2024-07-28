import { GatsbySSR } from 'gatsby'
import React from 'react'
import Layout from './src/components/common/Layout'

const HeadComponents = [
  <link
    rel="stylesheet"
    as="style"
    crossOrigin="anonymous"
    href="<https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css>"
    key="pretendard-font"
  />,
]

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
}) => {
  setHeadComponents(HeadComponents)
}
// @memo
// HTML head 태그에 link 태그를 추가하기 위해 onRenderBody API를 사용
// HeadComponents 배열에 link 태그를 정의하고, onRenderBody 함수에서 setHeadComponents 함수를 사용하여 이를 head에 추가
// 이 방법은 모든 페이지에서 공통적으로 사용할 폰트, 스타일시트 등을 추가할 때 유용

// Gatsby Browser API
// Browser API는 브라우저에서 발생하는 라우팅, Pre-Fetching, 스크롤 등의 특정 이벤트에 따른 핸들러를 등록할 수 있는 기능을 제공하여 클라이언트와 상호작용 할 수 있는 여러 옵션을 제공합니다.
// 그리고 페이지 또는 루트 컴포넌트를 감싸는 컴포넌트를 설정하여 특정 컴포넌트의 반복적인 사용을 줄일 수 있습니다.

// Gatsby SSR API
// SSR API는 서버 사이드 렌더링 시에 만들어지는 정적 HTML 파일의 내용을 변경할 수 있는 기능을 제공하는데, 이름과 설명만 보고는 오해할 수 있는 부분이 있습니다.
// 서버 사이드 렌더링이라고 해서 렌더링 기능을 수행해야 할 서버가 있어야 한다고 생각할 수도 있지만, 빌드 시간에도 동일하게 SSR API가 실행되기 때문에 정적 사이트 생성 기능을 사용할 때에도 추가가 가능합니다.
// 그리고 Browser API와 마찬가지로 페이지 또는 루트 컴포넌트를 감싸는 컴포넌트를 설정하여 특정 컴포넌트의 반복적인 사용을 줄일 수 있는데, Browser API에서 제공하는 API와 동일한 기능을 가집니다.
// 하지만 공식 문서에 따르면 페이지 또는 루트 컴포넌트를 감싸는 API를 사용하는 과정에서 Browser/SSR API를 모두 사용하는 것을 권장한다고 합니다.

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}

// wrapPageElement API를 사용, 해당 API는 Browser API와 SSR API 모두 존재

//여기서 가장 중요한 것은 gatsby-ssr.tsx /gatsby-browser.tsx 파일은 루트 경로에 있어야 된다!!
