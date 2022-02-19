import { useEffect } from 'react'

const useLockScroll = (query) => {
  useEffect(() => {
    const element = query && document.querySelector(query)

    if (element) {
      element.style.overflow = 'hidden'
      return () => {
        element.style.overflow = 'visible'
      }
    } else {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = 'visible'
      }
    }
  }, [query])
}

export { useLockScroll }
