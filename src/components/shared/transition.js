import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'

import useBackgroundColorUpdater from './hooks/useBackgroundColorUpdater'

const timeout = 250
const getBaseStyles = {
  transitionProperties: 'opacity, transform',
  entered: {
    transition: `${timeout}ms ease-in`,
    opacity: 1,
    transform: 'translateX(0)',
  },
  exiting: {
    transition: `${timeout}ms ease-in`,
    opacity: 0,
    transform: 'translateX(0px)',
  },
}
const getTransitionStyles = type => {
  switch (type.toUpperCase()) {
    case 'HORIZONTAL-LEFT':
      return {
        entering: {
          position: 'absolute',
          opacity: 0,
          transform: 'translateX(20px)',
        },
        ...getBaseStyles,
      }
    case 'HORIZONTAL-RIGHT':
      return {
        entering: {
          position: 'absolute',
          opacity: 0,
          transform: 'translateX(-20px)',
        },
        ...getBaseStyles,
      }
    default:
      return {
        entering: {
          position: 'absolute',
          opacity: 0,
        },
        ...getBaseStyles,
      }
  }
}

const Transition = React.memo(
  ({ children, location, transitionKey, type = 'default' }) => {
    useBackgroundColorUpdater(location)

    return (
      <TransitionGroup component={null}>
        <ReactTransition
          key={transitionKey}
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
                ...getTransitionStyles(type)[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
)

export default Transition
