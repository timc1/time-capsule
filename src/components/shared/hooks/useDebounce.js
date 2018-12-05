import { useRef } from 'react'
import { debounce } from '../../../utils'

export default (fn = () => {}, delayMs = 1000) => {
  const debouncedRef = useRef()

  return (() => {
    if (debouncedRef.current) debouncedRef.current.clear()
    debouncedRef.current = debounce(() => {
      fn()
    }, delayMs)
    debouncedRef.current()
  })()
}
