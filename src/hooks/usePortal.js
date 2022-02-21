import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export const ModalPortal = (props) => {
  const { children, className } = props
  const container = useRef(document.createElement('div')).current

  useEffect(() => {
    container.classList.add(className)
    document.body.appendChild(container)

    return () => container.remove()
  }, [container, className])

  return createPortal(children, container)
}
