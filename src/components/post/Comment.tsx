import React, { useEffect, useRef } from 'react'
import { useThemeStore } from '../../store/themeStore'

export default function Comment() {
  const ref = useRef<HTMLDivElement>(null)
  const { theme } = useThemeStore()

  useEffect(() => {
    if (ref.current === null) return

    const utterances: HTMLScriptElement = document.createElement('script')
    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'Choi-jeonghoon/Choi-Jeonghoon.github.io',
      'issue-term': 'pathname',
      label: 'Comment',
      theme: theme === 'dark' ? 'github-dark' : 'github-light',
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) =>
      utterances.setAttribute(key, value),
    )

    ref.current.appendChild(utterances)

    // Clean up the script on unmount
    return () => {
      if (ref.current?.hasChildNodes())
        ref.current.removeChild(ref.current.childNodes[0])
    }
  }, [theme]) // theme 값이 변경될 때마다 useEffect가 실행됨

  return <div ref={ref} />
}
