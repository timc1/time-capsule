import React from 'react'
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group'

import useBackgroundColorUpdater from './hooks/useBackgroundColorUpdater'

const timeout = 250

const getBaseStyles = ({ delay }) => ({
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `${delay}ms ease-in`,
    opacity: 1,
    transform: 'translateX(0)',
  },
  exiting: {
    transition: `${delay}ms ease-in`,
    opacity: 0,
    transform: 'translateX(0px)',
  },
})

const Transition = React.memo(
  ({ children, location, transitionKey, type = 'default', delay = 250 }) => {
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
                ...getBaseStyles({ delay })[status],
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

const WizardTransition = React.memo(
  ({ children, location, transitionKey, type = 'default', delay = 250 }) => {
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
                ...getBaseStyles({ delay })[status],
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
export { WizardTransition }
