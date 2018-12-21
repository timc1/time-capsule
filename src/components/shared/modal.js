import React, { useLayoutEffect, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

import styled from '@emotion/styled'

import { screenmd, ExitButton, ExitIcon } from './styles'

export default React.memo(
  ({
    children,
    domElement,
    toggleModal,
    isShowing,
    backgroundColor = 'transparent',
  }) => {
    if (typeof document !== `undefined`) {
      const root = useRef(document.getElementById('___gatsby'))

      useLayoutEffect(() => {
        const el = document.createElement('div')
        el.setAttribute('id', 'modal-root')
        document.body.insertBefore(el, root.current)
        return () => document.body.removeChild(el)
      }, [])

      const eventListener = useRef()
      const currentScrollPosition = useRef()

      const el = useRef(document.createElement('div'))

      useEffect(() => {
        const modalRoot = document.getElementById(domElement)
        el.current.style = `
      position: fixed;
      top: 0;
      height: 100%; 
      width: 100%;
      background: ${backgroundColor};
      padding: var(--baseborderpadding);
      z-index: 9;
      opacity: 0;
      transition: opacity 0.15s ease-in;
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
          root.current.style = `width: 100%;`
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
            //root.style = `
            //  position: fixed;
            //  top: -${currentScrollPosition.current}px;
            //  width: 100%;
            //  overflow: hidden;
            //  pointer-events: none;
            //`
          } else {
            el.current.style.opacity = 0
            el.current.style.pointerEvents = 'none'
            document.removeEventListener('keydown', eventListener.current)

            // Unfreeze root content div
            //root.style = `width: 100%`
            window.scrollTo({ top: currentScrollPosition.current })
          }
        },
        [isShowing]
      )

      return el.current
        ? ReactDOM.createPortal(
            <>
              <ExitContainer>
                <ExitButton
                  onClick={e => toggleModal()}
                  tabIndex={isShowing ? '0' : '-1'}
                  data-testid="modal-toggle"
                  aria-label="Toggle to close modal"
                >
                  <ExitIcon />
                  <span className="screen-reader">Exit modal</span>
                </ExitButton>
                <p className="nice-to-know">(or click Esc)</p>
              </ExitContainer>
              {children}
            </>,
            el.current
          )
        : null
    } else {
      return null
    }
  }
)

const handleKeyDown = (e, toggleModal) => {
  if (e.key?.toUpperCase() === 'ESCAPE') {
    toggleModal()
  }
}

// Styles

const ExitContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  align-items: center;
  grid-gap 15px;

  .nice-to-know {
    margin: 0; 
    color: var(--white2);
    font-size: var(--fontsm);
  }

  @media(max-width: ${screenmd}px) {
    .nice-to-know {
    opacity: 0; 
    }
  }
`
