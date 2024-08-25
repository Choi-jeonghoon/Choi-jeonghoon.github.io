// hooks/useScroll.ts
import { useState, useEffect, useCallback } from 'react'

// 커스텀 훅: useScroll
// 이 훅은 스크롤을 통해 페이지네이션을 관리하며, 데이터를 무한 스크롤 방식으로 로드하는 기능을 제공합니다.
export function useScroll<T>(items: T[], itemsPerPage: number) {
  // 현재 페이지에 표시할 항목을 저장합니다.
  const [displayItems, setDisplayItems] = useState<T[]>(
    items.slice(0, itemsPerPage), // 초기 로드 시 첫 페이지 항목만 표시
  )

  // 로딩 상태를 관리합니다. 로딩 중에는 추가 데이터를 요청하지 않습니다.
  const [loading, setLoading] = useState(false)

  // 현재 페이지 번호를 저장합니다.
  const [page, setPage] = useState(1)

  // 포스트를 추가로 로드하는 함수
  const loadMoreItems = useCallback(() => {
    // 로딩 중이면 추가 로드 작업을 하지 않습니다.
    if (loading) return

    // 스크롤이 페이지 하단에 가까워지면 추가 데이터를 로드합니다.
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500 // 스크롤이 페이지 하단에서 500px 이내에 있을 때
    ) {
      const nextPage = page + 1 // 다음 페이지 번호 계산
      // 다음 페이지에 데이터가 있으면 로드합니다.
      if (items.length > nextPage * itemsPerPage) {
        setLoading(true) // 로딩 상태를 true로 설정
        const newItems = items.slice(
          nextPage * itemsPerPage, // 다음 페이지의 시작 인덱스
          (nextPage + 1) * itemsPerPage, // 다음 페이지의 끝 인덱스
        )
        // 기존 항목에 새 항목을 추가합니다.
        setDisplayItems(prev => [...prev, ...newItems])
        setPage(nextPage) // 페이지 번호 업데이트
        setLoading(false) // 로딩 상태를 false로 설정
      }
    }
  }, [loading, page, items, itemsPerPage]) // 로딩, 페이지, 아이템, 페이지당 아이템 수가 변경될 때마다 재계산

  // items 또는 itemsPerPage가 변경될 때 호출됩니다.
  useEffect(() => {
    // 초기 데이터 설정: 처음 로드 시 첫 페이지의 데이터만 표시합니다.
    setDisplayItems(items.slice(0, itemsPerPage))
    setPage(1) // 페이지를 1로 초기화: 새로운 데이터가 로드될 때 항상 페이지 1부터 시작
  }, [items, itemsPerPage]) // items와 itemsPerPage가 변경될 때마다 호출

  // 스크롤 이벤트를 감지하여 추가 데이터를 로드합니다.
  useEffect(() => {
    window.addEventListener('scroll', loadMoreItems)
    // 컴포넌트가 언마운트되거나 의존성이 변경될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('scroll', loadMoreItems)
    }
  }, [loadMoreItems]) // loadMoreItems이 변경될 때마다 이벤트 리스너를 업데이트

  return { displayItems, loading, setDisplayItems }
}
