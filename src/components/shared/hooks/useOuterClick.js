import { useEffect, useRef } from 'react'

export default ({ toggle, isOpen, ref }) => {
  const clickListener = useRef()
  const keydownListener = useRef()

  // Setup event listeners, adding the container element's ref as a closure.
  useEffect(() => {
    clickListener.current = e => handleOuterClick(e, ref, toggle)
    keydownListener.current = e => handleKeydown(e, toggle)
  }, [])

  useEffect(
    () => {
      if (ref.current) {
        if (isOpen) {
          document.addEventListener(clickEvent, clickListener.current)
          document.addEventListener('keydown', keydownListener.current)
        } else {
          document.removeEventListener(clickEvent, clickListener.current)
          document.removeEventListener('keydown', keydownListener.current)
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

const handleOuterClick = (event, ref, toggle) => {
  if (!ref.current.contains(event.target)) {
    toggle(false)
  }
}

const handleKeydown = (event, toggle) => {
  if (event.key.toUpperCase() === 'ESCAPE') {
    toggle(false)
  }
}

// For touch devices, we don't want to listen to click events but rather touchstart.
const clickEvent =
  'ontouchstart' in document.documentElement === true ? 'touchstart' : 'click'
