import { useState, useMemo, useEffect } from 'react'
import { HEADERS } from './useRenderRichText'
import { TContentType } from '../types/TableType'

export default function useTableOfContents(rawContent: string) {
  // 현재 위치한 챕터를 표시해주기 위해 추가하였습니다.
  const [activeId, setActiveId] = useState<string | null>(null)

  const toc = useMemo(() => {
    const { content } = JSON.parse(rawContent) as TContentType

    // nodeType이 BLOCKS.HEADING_1, BLOCKS.HEADING_2, BLOCKS.HEADING_3인 요소만 필터링합니다.
    const headers = content.filter(item =>
      HEADERS.find(header => header === item.nodeType),
    )

    // h1을 쓰지 않고 h2, h3으로만 제목을 구성하는 경우를 위해 최소 Depth를 계산합니다.
    // Depth에 따라 텍스트 시작 부분에 여백의 길이가 달라집니다.
    const minDepth = Math.min(
      ...headers.map(({ nodeType }) =>
        parseInt(nodeType.charAt(nodeType.length - 1)),
      ),
    )

    return headers.map(({ nodeType, content }) => {
      const title = content[0].value // 내부 텍스트를 파싱합니다.
      const id = `${title.replaceAll(' ', '-')}_` // 내부 텍스트를 통해 고유한 ID 값을 생성합니다.
      //제목에 ? 와 같은 특정 특수문자로 끝나게 되면 URL에 해당 문자가 보이지 않게 되어 목차 기능에 이상이 생기는 것을 방지하기 위함이다.
      const depth = parseInt(nodeType.charAt(nodeType.length - 1)) - minDepth // 위에서 구한 최소 Depth를 기준으로 해당 컴포넌트의 Depth를 계산합니다.

      return { id, title, depth }
    })
  }, [rawContent])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        setActiveId(prevId => {
          if (entries[0].boundingClientRect.top < 0) return entries[0].target.id
          else {
            const index = toc.findIndex(({ id }) => id === prevId)
            return index > 0 ? toc[index - 1].id : null
          }
        }),
      { rootMargin: '0% 0px -100% 0px' },
    )
    document
      .querySelectorAll('#content > h1,h2,h3')
      .forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [toc])

  return { toc, activeId }
}
