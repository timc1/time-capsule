import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'

import useBackgroundColorUpdater from './hooks/useBackgroundColorUpdater'

const timeout = 250
const getBaseStyles = {
  transitionProperties: 'opacity',
}
const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `${timeout}ms ease-in`,
    opacity: 1,
  },
  exiting: {
    transition: `${timeout}ms ease-in`,
    opacity: 0,
  },
}

const Transition = React.memo(({ children, location }) => {
  useBackgroundColorUpdater(location)

  return (
    <TransitionGroup component={null}>
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
        style={{ position: 'relative' }}
      >
        {status => (
          <div
            style={{
              ...getBaseStyles,
              ...getTransitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
})

export default Transition
