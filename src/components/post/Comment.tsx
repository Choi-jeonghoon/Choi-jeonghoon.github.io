import React from 'react'
import { useEffect, useRef } from 'react'

const ATTRIBUTES = {
  src: 'https://utteranc.es/client.js',
  repo: 'Choi-jeonghoon/Jeong-hoon.github.io',
  'issue-term': 'pathname',
  label: 'Comment',
  theme: 'github-light', //'github-dark',
  crossorigin: 'anonymous',
  async: 'true',
}

export default function Comment() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current === null) return

    const utterances: HTMLScriptElement = document.createElement('script')

    Object.entries(ATTRIBUTES).forEach(([key, value]) =>
      utterances.setAttribute(key, value),
    )

    ref.current?.appendChild(utterances)

    // 개발 환경에서 리렌더링 시, 댓글 컴포넌트가 여러 개 생기는 것을 방지하기 위함입니다.
    return () => {
      if (ref.current?.hasChildNodes())
        ref.current.removeChild(ref.current.childNodes[0])
    }
  }, [])

  return <div ref={ref} />
}
