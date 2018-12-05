import { useEffect } from 'react'

export default location => {
  useEffect(
    () => {
      document.body.setAttribute('data-url', location.pathname)
    },
    [location]
  )
}
