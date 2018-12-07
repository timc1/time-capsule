import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

import { ExitButton, ExitIcon } from './styles'

const root = document.getElementById('___gatsby')

export default React.memo(
  ({
    children,
    domElement,
    toggleModal,
    isShowing,
    backgroundColor = '--black4',
  }) => {
    const modalRoot = document.getElementById(domElement)
    const eventListener = useRef()
    const initialFocusRef = useRef()
    const currentScrollPosition = useRef()

    const el = useRef()

    useEffect(() => {
      el.current = document.createElement('div')
      el.current.style = `
      position: fixed;
      height: 100%; 
      width: 100%;
      background: ${backgroundColor};
      z-index: 9;
      opacity: 0;
      transition: opacity .15s ease-in;
      overflow: auto;
      -webkit-overflow-scrolling: touch; 
      pointer-events: none;
    `
      modalRoot.appendChild(el.current)
      eventListener.current = e => handleKeyDown(e, toggleModal)
      return () => {
        toggleModal(false)
        modalRoot.removeChild(el.current)
        document.removeEventListener('keydown', eventListener.current)
        // Unfreeze root content div
        root.style = `width: 100%`
        window.scrollTo({ top: currentScrollPosition.current })
      }
    }, [])

    useEffect(
      () => {
        if (isShowing) {
          el.current.style.opacity = 1
          el.current.style.pointerEvents = 'initial'
          document.addEventListener('keydown', eventListener.current)

          // Freeze root content div
          currentScrollPosition.current = window.scrollY
          root.style = `
          position: fixed;
          top: -${currentScrollPosition.current}px;
          width: 100%;
          overflow: hidden;
          pointer-events: none;
        `
          initialFocusRef.current.focus()
        } else {
          el.current.style.opacity = 0
          el.current.style.pointerEvents = 'none'
          document.removeEventListener('keydown', eventListener.current)

          // Unfreeze root content div
          root.style = `width: 100%`
          window.scrollTo({ top: currentScrollPosition.current })
        }
      },
      [isShowing]
    )

    return el.current
      ? ReactDOM.createPortal(
          <>
            <ExitButton
              ref={initialFocusRef}
              onClick={e => toggleModal()}
              tabIndex={isShowing ? '0' : '-1'}
            >
              <ExitIcon />
              <span className="screen-reader">Exit modal</span>
            </ExitButton>
            {children}
          </>,
          el.current
        )
      : null
  }
)

const handleKeyDown = (e, toggleModal) => {
  if (e.key?.toUpperCase() === 'ESCAPE') {
    toggleModal()
  }
}
