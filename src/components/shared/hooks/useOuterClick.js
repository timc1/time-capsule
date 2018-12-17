import { useEffect, useRef } from 'react'

const isMobile = () => {
  if (typeof document !== `undefined`) {
    return 'ontouchstart' in document.documentElement === true
  }
  return false
}
// For touch devices, we don't want to listen to click events but rather touchstart.
const clickEvent = isMobile() ? 'touchstart' : 'click'

export default ({ toggle, isOpen, ref, togglerRef }) => {
  const clickListener = useRef()
  const keydownListener = useRef()

  // Setup event listeners, adding the container element's ref as a closure.
  useEffect(() => {
    clickListener.current = e => handleOuterClick(e, ref, toggle, togglerRef)
    keydownListener.current = e => handleKeydown(e, toggle)
  }, [])

  useEffect(
    () => {
      if (ref.current) {
        if (isOpen) {
          document.addEventListener(clickEvent, clickListener.current)
          if (!isMobile()) {
            document.addEventListener('keydown', keydownListener.current)
          }
        } else {
          document.removeEventListener(clickEvent, clickListener.current)
          if (!isMobile()) {
            document.removeEventListener('keydown', keydownListener.current)
          }
        }
      }
      return () => {
        document.removeEventListener(clickEvent, clickListener.current)
        document.removeEventListener('keydown', keydownListener.current)
      }
    },
    [isOpen]
  )
}

const handleOuterClick = (event, ref, toggle, togglerRef) => {
  if (
    !ref.current.contains(event.target) &&
    !togglerRef.current.contains(event.target)
  ) {
    toggle(prev => !prev)
  }
}

const handleKeydown = (event, toggle) => {
  if (event.key.toUpperCase() === 'ESCAPE') {
    toggle(prev => !prev)
  }
}
