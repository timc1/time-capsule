import { useEffect } from 'react'

export default (location = {}) => {
  useEffect(
    () => {
      if (location.pathname)
        document.body.setAttribute('data-url', location.pathname)
    },
    [location.pathname]
  )
}
