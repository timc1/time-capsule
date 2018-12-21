import { useState, useRef } from 'react'
import useOuterClick from './useOuterClick'

export default () => {
  const [isOpen, setOpen] = useState(false)
  const containerRef = useRef()
  const togglerRef = useRef()

  useOuterClick({
    toggle: setOpen,
    isOpen,
    ref: containerRef,
    togglerRef,
  })

  const getContainerProps = ({ ...props }) => ({
    position: 'relative',
    'aria-expanded': isOpen ? 'true' : 'false',
    'aria-haspopup': 'listbox',
    ...props,
  })

  const getTogglerProps = ({ ...props }) => ({
    onClick: e => setOpen(!isOpen),
    'aria-label': isOpen ? 'close popup' : 'open popup',
    ref: togglerRef,
    ...props,
  })

  const getMenuProps = ({ ...props }) => ({
    role: 'listbox',
    ref: containerRef,
    isOpen,
    ...props,
  })

  const getItemProps = ({ ...props }) => ({
    tabIndex: isOpen ? 0 : -1,
    role: 'option',
    ...props,
  })

  return {
    isOpen,
    setOpen,
    getContainerProps,
    getTogglerProps,
    getMenuProps,
    getItemProps,
  }
}
